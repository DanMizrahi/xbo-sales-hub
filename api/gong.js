/**
 * XBO Sales Hub - Gong API Integration
 * Handles all Gong API calls for fetching call data, transcripts, and summaries
 */

const GONG_CONFIG = {
    baseUrl: 'https://us-54979.api.gong.io',
    accessKey: 'ANN5CVLIO6G57BFT7PTZIHERTTJWQN7X',
    accessSecret: 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjIwODU0ODM3MjEsImFjY2Vzc0tleSI6IkFOTjVDVkxJTzZHNTdCRlQ3UFRaSUhFUlRUSldRTjdYIn0.l5O-CAGN8eDxB8Sd1ON2bEW2771D0VGjtfxh8TuTzHE'
};

class GongAPI {
    constructor() {
        this.baseUrl = GONG_CONFIG.baseUrl;
        this.authHeader = 'Basic ' + btoa(`${GONG_CONFIG.accessKey}:${GONG_CONFIG.accessSecret}`);
    }

    /**
     * Make authenticated request to Gong API
     */
    async request(endpoint, options = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            'Authorization': this.authHeader,
            'Content-Type': 'application/json',
            ...options.headers
        };

        try {
            const response = await fetch(url, {
                ...options,
                headers
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Gong API Error (${response.status}): ${errorText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Gong API request failed:', error);
            throw error;
        }
    }

    /**
     * Search for calls by company/client name
     * @param {string} companyName - Company or client name to search
     * @param {object} options - Additional search options
     */
    async searchCallsByCompany(companyName, options = {}) {
        const fromDate = options.fromDate || new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString();
        const toDate = options.toDate || new Date().toISOString();

        const body = {
            filter: {
                fromDateTime: fromDate,
                toDateTime: toDate
            },
            contentSelector: {
                exposedFields: {
                    parties: true,
                    content: {
                        trackers: true,
                        topics: true,
                        pointsOfInterest: true,
                        brief: true,
                        outline: true,
                        highlights: true,
                        callOutcome: true
                    }
                }
            }
        };

        try {
            const response = await this.request('/v2/calls/extensive', {
                method: 'POST',
                body: JSON.stringify(body)
            });

            // Filter calls that mention the company
            const filteredCalls = (response.calls || []).filter(call => {
                const matchInParties = call.parties?.some(party => 
                    party.name?.toLowerCase().includes(companyName.toLowerCase()) ||
                    party.emailAddress?.toLowerCase().includes(companyName.toLowerCase()) ||
                    party.company?.toLowerCase().includes(companyName.toLowerCase())
                );
                
                const matchInTitle = call.title?.toLowerCase().includes(companyName.toLowerCase());
                
                return matchInParties || matchInTitle;
            });

            return {
                calls: filteredCalls,
                totalCalls: filteredCalls.length,
                cursor: response.records?.cursor
            };
        } catch (error) {
            console.error('Error searching calls:', error);
            throw error;
        }
    }

    /**
     * Get detailed call transcript
     * @param {string} callId - The Gong call ID
     */
    async getCallTranscript(callId) {
        const body = {
            filter: {
                callIds: [callId]
            }
        };

        try {
            const response = await this.request('/v2/calls/transcript', {
                method: 'POST',
                body: JSON.stringify(body)
            });

            return response.callTranscripts?.[0] || null;
        } catch (error) {
            console.error('Error fetching transcript:', error);
            throw error;
        }
    }

    /**
     * Get call details including summary, topics, and trackers
     * @param {string} callId - The Gong call ID
     */
    async getCallDetails(callId) {
        const body = {
            filter: {
                callIds: [callId]
            },
            contentSelector: {
                exposedFields: {
                    parties: true,
                    content: {
                        trackers: true,
                        topics: true,
                        pointsOfInterest: true,
                        brief: true,
                        outline: true,
                        highlights: true,
                        callOutcome: true,
                        keyPoints: true
                    }
                }
            }
        };

        try {
            const response = await this.request('/v2/calls/extensive', {
                method: 'POST',
                body: JSON.stringify(body)
            });

            return response.calls?.[0] || null;
        } catch (error) {
            console.error('Error fetching call details:', error);
            throw error;
        }
    }

    /**
     * Get all calls for analysis
     * @param {object} options - Filter options
     */
    async getAllCalls(options = {}) {
        const fromDate = options.fromDate || new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString();
        const toDate = options.toDate || new Date().toISOString();

        const body = {
            filter: {
                fromDateTime: fromDate,
                toDateTime: toDate
            },
            contentSelector: {
                exposedFields: {
                    parties: true,
                    content: {
                        brief: true,
                        outline: true,
                        callOutcome: true
                    }
                }
            }
        };

        try {
            const response = await this.request('/v2/calls/extensive', {
                method: 'POST',
                body: JSON.stringify(body)
            });

            return response;
        } catch (error) {
            console.error('Error fetching all calls:', error);
            throw error;
        }
    }

    /**
     * Get unique companies from calls
     */
    async getCompanies() {
        const calls = await this.getAllCalls();
        const companies = new Set();

        (calls.calls || []).forEach(call => {
            call.parties?.forEach(party => {
                if (party.company && party.affiliation === 'External') {
                    companies.add(party.company);
                }
            });
        });

        return Array.from(companies).sort();
    }

    /**
     * Analyze calls for a specific client - extracts insights
     * @param {string} companyName - Company name to analyze
     */
    async analyzeClientCalls(companyName) {
        const { calls } = await this.searchCallsByCompany(companyName);

        if (calls.length === 0) {
            return {
                hasHistory: false,
                companyName,
                message: 'No call history found for this client'
            };
        }

        // Sort by date (most recent first)
        calls.sort((a, b) => new Date(b.started) - new Date(a.started));

        // Extract insights
        const analysis = {
            hasHistory: true,
            companyName,
            totalCalls: calls.length,
            lastCall: calls[0].started,
            firstCall: calls[calls.length - 1].started,
            calls: calls.map(call => ({
                id: call.metaData?.id,
                title: call.title,
                date: call.started,
                duration: call.duration,
                participants: call.parties?.filter(p => p.affiliation === 'External').map(p => p.name),
                brief: call.content?.brief,
                outcome: call.content?.callOutcome,
                topics: call.content?.topics,
                highlights: call.content?.highlights,
                trackers: call.content?.trackers
            })),
            aggregated: {
                painPoints: [],
                productsDiscussed: [],
                objections: [],
                promises: [],
                nextSteps: []
            }
        };

        // Aggregate insights from all calls
        calls.forEach(call => {
            // Extract from topics
            if (call.content?.topics) {
                call.content.topics.forEach(topic => {
                    if (topic.name) {
                        if (topic.name.toLowerCase().includes('pain') || topic.name.toLowerCase().includes('challenge') || topic.name.toLowerCase().includes('problem')) {
                            analysis.aggregated.painPoints.push(topic.name);
                        }
                        if (topic.name.toLowerCase().includes('product') || topic.name.toLowerCase().includes('solution') || topic.name.toLowerCase().includes('feature')) {
                            analysis.aggregated.productsDiscussed.push(topic.name);
                        }
                        if (topic.name.toLowerCase().includes('objection') || topic.name.toLowerCase().includes('concern') || topic.name.toLowerCase().includes('issue')) {
                            analysis.aggregated.objections.push(topic.name);
                        }
                    }
                });
            }

            // Extract from trackers
            if (call.content?.trackers) {
                call.content.trackers.forEach(tracker => {
                    if (tracker.name?.toLowerCase().includes('next step') || tracker.name?.toLowerCase().includes('action')) {
                        analysis.aggregated.nextSteps.push(tracker.name);
                    }
                    if (tracker.name?.toLowerCase().includes('promise') || tracker.name?.toLowerCase().includes('commitment')) {
                        analysis.aggregated.promises.push(tracker.name);
                    }
                });
            }

            // Extract from highlights
            if (call.content?.highlights) {
                call.content.highlights.forEach(highlight => {
                    if (highlight.text) {
                        // Categorize highlights based on content
                        const text = highlight.text.toLowerCase();
                        if (text.includes('pain') || text.includes('struggle') || text.includes('difficult')) {
                            analysis.aggregated.painPoints.push(highlight.text);
                        }
                    }
                });
            }
        });

        // Deduplicate aggregated data
        Object.keys(analysis.aggregated).forEach(key => {
            analysis.aggregated[key] = [...new Set(analysis.aggregated[key])];
        });

        return analysis;
    }
}

// Export singleton instance
const gongAPI = new GongAPI();

// For use in browser
if (typeof window !== 'undefined') {
    window.GongAPI = GongAPI;
    window.gongAPI = gongAPI;
}

// For use in Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GongAPI, gongAPI };
}
