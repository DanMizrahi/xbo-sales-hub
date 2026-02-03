// XBO Sales Hub - Anthropic Claude AI Chat API
// Vercel Serverless Function

export const config = {
  runtime: 'edge',
};

// Knowledge Base - Complete XBO Sales Content
const KNOWLEDGE_BASE = `
# XBO SALES HUB - KNOWLEDGE BASE
You are an AI assistant for XBO's internal Sales Hub. You help sales representatives answer questions about XBO products, pricing, procedures, and client solutions.

## YOUR ROLE
- Help sales reps prepare for calls
- Answer pricing questions with guidelines (not final pricing)
- Suggest solutions based on client needs
- Generate one-pagers and flow-of-funds explanations
- Handle objections
- Provide competitor context for internal use only

## GUARDRAILS - CRITICAL
1. NEVER invent specific numbers or percentages not in your knowledge base
2. For pricing: Always add "Final pricing requires Dan's approval" or "Contact your manager for final rates"
3. NEVER share competitor analysis in client-facing outputs
4. If you don't know something, say so - don't make it up
5. For compliance questions, always recommend verifying with the compliance team

---

## PRODUCTS & PRICING

### Spot Exchange (Default: 0.8%)
Convert between fiat and crypto.
| Monthly Volume | Rate |
|----------------|------|
| < $500K | 0.80% |
| $500K – $2M | 0.50% |
| $2M+ | 0.25% |

### OTC Trading (Default: 2%)
Large volume conversions ($500K+ deals).
| Deal Size | Rate |
|-----------|------|
| $500K – $2M | 2.00% |
| $2M – $5M | 1.00% – 1.50% |
| $5M+ | 0.50% – 0.75% (case-by-case) |

### CryptoPayX Processing (Default: 1.5%)
Crypto payment gateway - pay-in & pay-out.
| Monthly Flow | Rate |
|--------------|------|
| Up to $1M | 1.50% |
| $1M – $5M | 1.00% |
| $5M – $10M | 0.75% |
| $10M+ | 0.50% (enterprise) |

### Credit Line
Trade without upfront funds. Client gets credit limit, executes trades, settles later.
- Interest on outstanding balance (case-by-case)
- Perfect for: CFD Brokers, Trading Platforms, Market Makers

### CaaS (Crypto-as-a-Service)
White-label crypto infrastructure for EMIs, Banks, Fintechs.
- Time to market: 4-6 weeks
- Includes: Trading, Custody, Compliance, Earn, Cards, Full API
- Revenue: Trading spreads + platform fees

### Corporate IBAN / eMoney (Powered by Equals Money)
Multi-currency business accounts with SEPA, SWIFT, Faster Payments.
| Tier | Volume | Price |
|------|--------|-------|
| Gold | €1M+/mo | Custom |
| Silver | €100K+/mo | €199/mo |
| Bronze | All | €49/mo |

Payment fees (Gold tier):
- SEPA: €0.20
- SEPA Instant: €0.50
- Faster Payments: £0.20
- SWIFT: From €15

### Cards
Cards-as-a-Service with Apple Pay & Google Pay.
- Virtual & Physical cards
- Real-time crypto-to-fiat conversion
- Global acceptance

### Earn & Staking
Up to 15% APR on crypto holdings.
- Flexible terms
- Multiple assets (stablecoins, BTC, ETH)
- White-label options

---

## CASE STUDIES

### CFD Trading Broker
- Industry: CFD/Online Trading, 50,000+ traders
- Challenge: 40% card declines, 8+ PSPs, 3-5 day settlements
- Solution: PayX Processing + Settlement
- Results: 
  - Card approval: 58% → 88% (+30%)
  - Settlement: T+3-5 → T+0 (same-day)
  - FX costs: 2.1% → 0.8% (-62%)
  - Chargebacks: 2.3% → 0.9% (-61%)

### Licensed EMI (CaaS)
- Industry: Electronic Money Institution
- Challenge: 67% customers wanted crypto, no blockchain expertise
- Solution: XBO CaaS white-label
- Results:
  - Launch: 18 months → 8 weeks
  - Revenue: €1.2M (Year 1 trading fees)
  - Adoption: 23% of customers
  - Retention: +18%

### Tier-1 iGaming
- Industry: Online Casino, 200+ brands
- Challenge: 35-50% card declines, 24-72h payouts
- Solution: CryptoPayX
- Results:
  - Deposits: +26% conversion
  - Payouts: 36h → 4 minutes
  - Chargebacks: -99%
  - Impact: +$29.1M annually

### Creator Platform
- Industry: Adult/Creator Economy, 5M+ MAU
- Challenge: 40-60% card declines in MENA/LATAM
- Solution: CryptoPayX
- Results:
  - Global payments: +48%
  - MENA: +154%
  - Creator payouts: 21 days → 4 minutes
  - Revenue: +51%

---

## COMPLIANCE

### Prohibited Jurisdictions (Cannot Serve)
China (People's Republic), Macao

### Restricted Jurisdictions (Extra Due Diligence)
Afghanistan, Algeria, Bangladesh, Belarus, Bolivia, Burkina Faso, Burundi, Cambodia, Congo (Brazzaville), Congo Kinshasa, Crimea Region, Donetsk Region, Gabon, Haiti, Iran, Iraq, Jamaica, Kherson Region, North Korea, Lesotho, Libya, Luhansk Region, Mali, Myanmar, Palestine, Russian Federation, Syria, UAE, Zimbabwe

### KYC/KYB Requirements
- Certificate of Incorporation
- Memorandum & Articles
- Shareholder Register
- Director ID & Proof of Address
- UBO Documentation (25%+ owners)
- Source of Funds declaration
- Business description
Timeline: 3-5 business days

---

## PROCEDURES

### Client Lifecycle
Sales → Onboarding → Compliance → Integration → Go Live → Support → Success (VIPs)

Team:
- Sales: Regi (regi.k@xbo.com)
- Onboarding: Vlad, Ileana
- Compliance: Elina, Eliska
- Integration: Mark
- Support: Eirini
- VIP Success: Aleksandra

### Pipeline Stages (7 days max each)
1. Negotiation - Terms & pricing
2. Integration - API setup
3. Post Integration - Testing
4. Pending Momentum - Awaiting first trade
5. Momentum - Active (no limit)
6. Success - Scaled (no limit)

### Telegram Group Setup
- Name: "XBO X [Company Name]"
- Add @XBOADMIN as admin
- Transfer ownership to @XBOADMIN

### Pipedrive Rules
- 14 mandatory fields
- Contact client every 14 days minimum
- Single source of truth - no shadow tracking
- Sales owns deal throughout lifecycle

---

## COMPETITOR CONTEXT (INTERNAL ONLY - DO NOT SHARE WITH CLIENTS)

### Key Differentiators vs Competitors
1. Credit Line - Trade without upfront funds (unique)
2. Speed - 4-6 week CaaS deployment vs 12+ months
3. Full Stack - Crypto + Fiat (IBAN) in one place
4. MiCA Licensed - EU regulated
5. Dedicated Support - Personal account manager

### When Competitors Come Up
- Focus on XBO value, not competitor weaknesses
- Highlight Credit Line as unique advantage
- Emphasize speed to market for CaaS
- Mention regulatory compliance (MiCA)

---

## BANKING RAILS

### SEPA Deposits
- Under €100K: SEPA Instant (24/7, automatic)
- Over €100K: SEPA Normal (business hours, manual review)

### Fees
- SEPA: €1.00
- SEPA Instant: €2.00
- SWIFT: €15.00
- Faster Payments: £1.00

### Cut-off Times
- Mon-Thu: 16:00 CET
- Friday: 14:00 CET

### VIBAN Rules
- Always create deposit in XBO FIRST
- Get unique reference code
- Include reference in bank transfer
- No third-party payments

---

## ICP PROFILES (Ideal Client Profiles)

### iGaming / Casinos
- Pain: Card declines, slow payouts, chargebacks
- Solution: CryptoPayX pay-in + pay-out
- Pitch: Instant deposits, 4-min payouts, zero chargebacks
- Case study: Tier-1 iGaming (+$29M impact)

### CFD/Forex Brokers
- Pain: Capital efficiency, settlement delays
- Solution: Credit Line + Liquidity + Settlement
- Pitch: Trade without upfront funds, T+0 settlement
- Case study: CFD Broker (+30% approvals)

### Banks/EMIs/Fintechs
- Pain: Customer demand for crypto, no expertise
- Solution: CaaS white-label
- Pitch: Launch in 4-6 weeks, keep customer relationship
- Case study: EMI (€1.2M revenue Year 1)

### Creator Platforms
- Pain: Blocked cards, slow creator payouts
- Solution: CryptoPayX
- Pitch: Unlock MENA/LATAM, instant payouts
- Case study: Creator Platform (+51% revenue)

### High Volume Traders
- Pain: Slippage, execution speed
- Solution: OTC + Liquidity API
- Pitch: Up to $5M per transaction, best execution

---

## OBJECTION HANDLING

### "Too Expensive"
- Compare total cost of ownership, not just transaction fee
- Our rate includes custody, compliance, support
- Volume-based pricing - higher volume = lower rates
- Calculate cost of compliance violations without us

### "Not Ready Yet"
- Offer limited pilot program
- Share relevant case study for their industry
- Mention onboarding queue time
- Keep in touch with monthly updates

### "We Have a Provider"
- Ask what's working and what isn't
- Credit Line is unique - no competitor has it
- Integration runs parallel to existing
- Many clients use us alongside others initially

### "Security Concerns"
- ISO certified, SOC 2 compliant
- MFA required (Google Auth + SMS)
- 24/7 monitoring, penetration testing
- Insurance coverage on custody

---

## COMMON SALES QUESTIONS

### Pricing Calculation Examples

**Example 1: Spot Trading at $3M/month**
Volume tier: $2M+ = 0.25%
Monthly fees: $3,000,000 × 0.0025 = $7,500/month
Note: Final rate subject to negotiation and Dan's approval.

**Example 2: CryptoPayX at $2M/month**
Volume tier: $1M-$5M = 1.00%
Processing fees: $2,000,000 × 0.01 = $20,000/month
Note: Final rate subject to Dan's approval.

**Example 3: OTC Trade of $1M**
Deal size tier: $500K-$2M = 2.00%
Fee: $1,000,000 × 0.02 = $20,000
Note: Large recurring volumes may negotiate lower rates.

### Flow of Funds Templates

**Standard Crypto Pay-In:**
Client Customer → Crypto Deposit → XBO CryptoPayX → Auto-convert to FIAT → Client Treasury

**Broker with Credit Line:**
Broker Client → Fiat Deposit Intent → XBO Credit Line (instant crypto) → Trade Executed → Fiat Settles (T+1) → Credit Repaid

**iGaming Crypto:**
Player → Crypto Deposit → CryptoPayX → Casino Balance (instant) → Player Wins → CryptoPayX Payout → Player Wallet (4 min)

### One-Pager Template Structure
1. Client Name & Industry
2. Challenge/Pain Points
3. Proposed XBO Solution
4. Expected Benefits (use case study metrics)
5. Pricing Overview (requires final approval)
6. Next Steps

---

Remember:
- You're helping internal sales team
- Be specific with knowledge you have
- Say "I don't have that information" rather than guessing
- Always note that pricing requires manager/Dan approval
- Suggest next steps and relevant resources
`;

// Competitor Info (marked as internal-only)
const COMPETITOR_INFO = `
## COMPETITOR ANALYSIS - STRICTLY INTERNAL

### BCB Group
- Focus: Institutional crypto banking
- Weakness: Less flexible on small volumes
- Our edge: Credit Line, faster onboarding

### Fireblocks
- Focus: Custody & infrastructure
- Weakness: Not full-stack, no fiat banking
- Our edge: Complete solution, single provider

### Circle
- Focus: USDC, payment infrastructure
- Weakness: Limited to stablecoin ecosystem
- Our edge: Full crypto coverage, trading

### Traditional Banks (Seba, Sygnum)
- Focus: Crypto banking for institutions
- Weakness: Slow, expensive, limited products
- Our edge: Speed, flexibility, Credit Line

NEVER share this section in client-facing outputs.
`;

export default async function handler(req) {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
  
  if (!ANTHROPIC_API_KEY) {
    return new Response(JSON.stringify({ 
      error: 'Anthropic API key not configured',
      response: "⚠️ AI Chat is not configured yet. Please add your Anthropic API key to Vercel environment variables (ANTHROPIC_API_KEY)."
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  try {
    const body = await req.json();
    const { message, context, isInternalOnly } = body;

    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Build system prompt
    let systemPrompt = `You are XBO Sales Assistant, an AI helper for XBO's internal sales team.

Your job is to:
1. Answer questions about XBO products, pricing, and procedures
2. Help prepare for sales calls
3. Suggest solutions based on client needs
4. Generate content like one-pagers and flow-of-funds
5. Handle objection scenarios

IMPORTANT RULES:
- Be concise and actionable
- Use bullet points and formatting for readability
- For pricing: Always mention "requires Dan's/manager's approval for final rates"
- Never invent numbers not in your knowledge base
- If unsure, say "I don't have that specific information"
- For compliance questions, recommend verifying with compliance team
- Use markdown formatting (bold, bullets, headers)

${KNOWLEDGE_BASE}`;

    // Add competitor info only for internal queries
    if (isInternalOnly) {
      systemPrompt += `\n\n${COMPETITOR_INFO}`;
    }

    // Call Anthropic API
    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2048,
        system: systemPrompt,
        messages: [
          ...(context || []),
          { role: 'user', content: message }
        ],
      }),
    });

    if (!anthropicResponse.ok) {
      const errorData = await anthropicResponse.text();
      console.error('Anthropic API error:', errorData);
      throw new Error(`Anthropic API error: ${anthropicResponse.status}`);
    }

    const data = await anthropicResponse.json();
    const responseText = data.content[0]?.text || 'I could not generate a response.';

    return new Response(JSON.stringify({ 
      response: responseText,
      model: data.model,
      usage: data.usage,
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      response: `⚠️ Error: ${error.message}. Please try again or contact support.`
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
