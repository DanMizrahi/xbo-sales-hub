// XBO Sales Hub - AI Chat Engine (Anthropic Claude Powered)
// Smart conversational AI for sales team

class XBOChat {
  constructor() {
    this.conversationHistory = [];
    this.isLoading = false;
    this.isInternalOnly = true; // Default to internal mode
  }

  async sendMessage(userMessage) {
    if (this.isLoading) return null;
    
    this.isLoading = true;
    
    // Add user message to history
    this.conversationHistory.push({
      role: 'user',
      content: userMessage
    });

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          context: this.conversationHistory.slice(-6), // Last 3 exchanges for context
          isInternalOnly: this.isInternalOnly
        }),
      });

      const data = await response.json();
      
      if (data.response) {
        // Add assistant response to history
        this.conversationHistory.push({
          role: 'assistant',
          content: data.response
        });
        
        return {
          text: data.response,
          model: data.model,
          usage: data.usage
        };
      } else {
        throw new Error(data.error || 'Unknown error');
      }
    } catch (error) {
      console.error('Chat error:', error);
      
      // Fallback to local responses if API fails
      const fallbackResponse = this.getFallbackResponse(userMessage);
      return {
        text: fallbackResponse,
        fallback: true
      };
    } finally {
      this.isLoading = false;
    }
  }

  clearHistory() {
    this.conversationHistory = [];
  }

  // Fallback responses when API is unavailable
  getFallbackResponse(query) {
    const q = query.toLowerCase();
    
    // Quick pattern matches for common questions
    const patterns = [
      {
        keywords: ['otc', 'fee', 'otc price', 'otc rate'],
        response: `**OTC Fee Structure:**

| Deal Size | Rate |
|-----------|------|
| $500K – $2M | 2.00% |
| $2M – $5M | 1.00% – 1.50% |
| $5M+ | 0.50% – 0.75% (case-by-case) |

*Default rate: 2%. Final pricing requires Dan's approval.*`
      },
      {
        keywords: ['spot', 'exchange fee', 'trading fee'],
        response: `**Spot Exchange Fee Structure:**

| Monthly Volume | Rate |
|----------------|------|
| < $500K | 0.80% |
| $500K – $2M | 0.50% |
| $2M+ | 0.25% |

*Default rate: 0.8%. Volume discounts apply automatically.*`
      },
      {
        keywords: ['cryptopayx', 'processing', 'payx fee', 'payment fee'],
        response: `**CryptoPayX Processing Fees:**

| Monthly Flow | Rate |
|--------------|------|
| Up to $1M | 1.50% |
| $1M – $5M | 1.00% |
| $5M – $10M | 0.75% |
| $10M+ | 0.50% (enterprise) |

*Default rate: 1.5%. Final pricing requires Dan's approval.*`
      },
      {
        keywords: ['credit line', 'cl', 'trade without'],
        response: `**XBO Credit Line**

Trade without upfront funds!

**How it works:**
1. Client gets approved credit limit (fiat or crypto)
2. Execute trades using the credit
3. Settle within agreed timeframe
4. Track usage in real-time

**Example:**
• €1M Credit Line approved
• Client sells €200K (no balance needed)
• Buys 220K USDC
• Deposits €200K within 24h
• USDC becomes withdrawable

**Best for:** CFD Brokers, Trading Platforms, Market Makers`
      },
      {
        keywords: ['caas', 'crypto as a service', 'white label'],
        response: `**CaaS - Crypto-as-a-Service**

White-label crypto infrastructure for banks, EMIs, and fintechs.

**Includes:**
• ✅ Trading (Spot + OTC)
• ✅ Custody (SOC 2, insured)
• ✅ Compliance (MiCA & AML)
• ✅ White-label UI
• ✅ Earn & Staking
• ✅ Full API

**Time to market:** 4-6 weeks

**See:** EMI Case Study (€1.2M revenue Year 1)`
      },
      {
        keywords: ['igaming', 'casino', 'gaming pitch'],
        response: `**iGaming Sales Pitch** 🎰

*"Looking for reliable crypto payments for your gaming platform?"*

**Why XBO for iGaming:**
• ✅ Instant deposits - Players fund in seconds
• ✅ Global reach - No banking restrictions
• ✅ Lower fees - 1-1.5% vs 3-5% cards
• ✅ No chargebacks - Crypto is final
• ✅ Privacy - Player discretion

**Results from Tier-1 iGaming client:**
• +26% deposit conversion
• 4-minute payouts (was 36h)
• +$29M annual impact`
      },
      {
        keywords: ['broker', 'cfd', 'forex', 'trading platform'],
        response: `**Broker/Trading Platform Pitch** 📈

**Why XBO for Brokers:**
• ✅ Credit Line - Trade without upfront capital
• ✅ Deep liquidity - Best execution across 50+ venues
• ✅ Real-time settlement - Same-day options
• ✅ API-first - Seamless integration

**Results from CFD Broker client:**
• +30% deposit approvals
• T+0 settlement (was T+3-5)
• -62% FX costs
• -61% chargebacks`
      },
      {
        keywords: ['compliance', 'prohibited', 'restricted', 'countries'],
        response: `**Compliance - Jurisdictions**

**🚫 Prohibited (Cannot serve):**
China (People's Republic), Macao

**⚠️ Restricted (Extra due diligence):**
Afghanistan, Algeria, Bangladesh, Belarus, Bolivia, Burkina Faso, Burundi, Cambodia, Congo, Crimea, Donetsk, Gabon, Haiti, Iran, Iraq, Jamaica, Kherson, North Korea, Lesotho, Libya, Luhansk, Mali, Myanmar, Palestine, Russia, Syria, UAE

*Always verify current status with compliance team: compliance@xbo.com*`
      },
      {
        keywords: ['kyc', 'kyb', 'document', 'onboard'],
        response: `**KYC/KYB Requirements**

**Documents needed:**
• Certificate of Incorporation
• Memorandum & Articles
• Shareholder Register
• Director ID & Proof of Address
• UBO docs (25%+ owners)
• Source of Funds
• Business description

**Timeline:** 3-5 business days

**Process:** Collect docs → Compliance review → Video verification (if needed) → Activation`
      }
    ];

    // Check patterns
    for (const pattern of patterns) {
      for (const keyword of pattern.keywords) {
        if (q.includes(keyword)) {
          return pattern.response;
        }
      }
    }

    // Default fallback
    return `⚠️ AI Chat is temporarily using offline mode. 

Try asking about:
• **Pricing:** OTC fees, Spot fees, CryptoPayX fees
• **Products:** Credit Line, CaaS, CryptoPayX, eMoney
• **Pitches:** iGaming pitch, Broker pitch, Bank pitch
• **Compliance:** Prohibited countries, KYC requirements
• **Procedures:** Onboarding, Pipedrive, Telegram setup

Or check the full documentation in the sidebar.`;
  }
}

// Markdown parser for chat responses
function parseMarkdown(text) {
  if (!text) return '';
  
  let html = text;
  
  // Escape HTML first
  html = html.replace(/&/g, '&amp;')
             .replace(/</g, '&lt;')
             .replace(/>/g, '&gt;');
  
  // Headers
  html = html.replace(/^### (.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^## (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^# (.+)$/gm, '<h2>$1</h2>');
  
  // Bold and italic
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  
  // Code blocks
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  // Tables
  html = html.replace(/\|(.+)\|/g, (match, content) => {
    const cells = content.split('|').map(c => c.trim());
    if (cells.every(c => c.match(/^[-:]+$/))) {
      return ''; // Skip separator row
    }
    const cellHtml = cells.map(c => `<td>${c}</td>`).join('');
    return `<tr>${cellHtml}</tr>`;
  });
  
  // Wrap consecutive table rows
  html = html.replace(/(<tr>.*<\/tr>\n?)+/g, '<table class="chat-table">$&</table>');
  
  // Lists
  html = html.replace(/^[•\-\*] (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');
  
  // Numbered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
  
  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
  
  // Line breaks
  html = html.replace(/\n\n/g, '</p><p>');
  html = html.replace(/\n/g, '<br>');
  
  // Wrap in paragraphs
  if (!html.startsWith('<')) {
    html = '<p>' + html + '</p>';
  }
  
  return html;
}

// Copy text to clipboard
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Copy failed:', err);
    return false;
  }
}

// Initialize chat instance
const xboChat = new XBOChat();

// Chat UI Controller
const ChatUI = {
  chatContainer: null,
  inputField: null,
  sendButton: null,
  quickButtons: null,
  
  init() {
    this.chatContainer = document.getElementById('ai-chat-messages');
    this.inputField = document.getElementById('ai-chat-input');
    this.sendButton = document.getElementById('ai-chat-send');
    this.quickButtons = document.querySelectorAll('.quick-question-btn');
    
    if (!this.chatContainer || !this.inputField) {
      console.warn('Chat UI elements not found');
      return;
    }
    
    this.bindEvents();
    this.addWelcomeMessage();
  },
  
  bindEvents() {
    // Send button
    if (this.sendButton) {
      this.sendButton.addEventListener('click', () => this.handleSend());
    }
    
    // Enter key
    if (this.inputField) {
      this.inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.handleSend();
        }
      });
    }
    
    // Quick question buttons
    this.quickButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const question = btn.dataset.question || btn.textContent;
        this.inputField.value = question;
        this.handleSend();
      });
    });
  },
  
  addWelcomeMessage() {
    const welcomeHtml = `
      <div class="chat-message assistant-message">
        <div class="message-content">
          <strong>👋 Hey! I'm your XBO Sales Assistant.</strong><br><br>
          I can help you with:
          <ul>
            <li>📊 <strong>Pricing</strong> - OTC, Spot, CryptoPayX fees</li>
            <li>🎯 <strong>Pitches</strong> - iGaming, Broker, EMI tailored pitches</li>
            <li>💡 <strong>Solutions</strong> - Match products to client needs</li>
            <li>📝 <strong>Content</strong> - One-pagers, flow-of-funds</li>
            <li>🔒 <strong>Compliance</strong> - Jurisdictions, KYC requirements</li>
          </ul>
          <em>Try: "What's the price for PayX at $3M/month?" or "Pitch for iGaming client"</em>
        </div>
      </div>
    `;
    this.chatContainer.innerHTML = welcomeHtml;
  },
  
  async handleSend() {
    const message = this.inputField.value.trim();
    if (!message || xboChat.isLoading) return;
    
    // Clear input
    this.inputField.value = '';
    
    // Add user message to UI
    this.addMessage(message, 'user');
    
    // Show loading
    this.showLoading();
    
    // Get AI response
    const response = await xboChat.sendMessage(message);
    
    // Remove loading
    this.hideLoading();
    
    // Add response to UI
    if (response) {
      this.addMessage(response.text, 'assistant', response.fallback);
    }
    
    // Scroll to bottom
    this.scrollToBottom();
  },
  
  addMessage(text, role, isFallback = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${role}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    if (role === 'user') {
      contentDiv.textContent = text;
    } else {
      contentDiv.innerHTML = parseMarkdown(text);
      
      // Add copy button for assistant messages
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-response-btn';
      copyBtn.innerHTML = '📋 Copy';
      copyBtn.title = 'Copy to clipboard';
      copyBtn.onclick = async () => {
        const success = await copyToClipboard(text);
        copyBtn.innerHTML = success ? '✓ Copied!' : '❌ Failed';
        setTimeout(() => { copyBtn.innerHTML = '📋 Copy'; }, 2000);
      };
      contentDiv.appendChild(copyBtn);
      
      // Add fallback indicator if applicable
      if (isFallback) {
        const indicator = document.createElement('div');
        indicator.className = 'fallback-indicator';
        indicator.innerHTML = '<small>⚡ Offline response</small>';
        contentDiv.appendChild(indicator);
      }
    }
    
    messageDiv.appendChild(contentDiv);
    this.chatContainer.appendChild(messageDiv);
    this.scrollToBottom();
  },
  
  showLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'chat-message assistant-message loading-message';
    loadingDiv.innerHTML = `
      <div class="message-content">
        <div class="typing-indicator">
          <span></span><span></span><span></span>
        </div>
        <small>Thinking...</small>
      </div>
    `;
    loadingDiv.id = 'chat-loading';
    this.chatContainer.appendChild(loadingDiv);
    this.scrollToBottom();
  },
  
  hideLoading() {
    const loading = document.getElementById('chat-loading');
    if (loading) {
      loading.remove();
    }
  },
  
  scrollToBottom() {
    this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
  },
  
  clearChat() {
    xboChat.clearHistory();
    this.addWelcomeMessage();
  }
};

// CSS for chat UI
const chatStyles = `
<style>
.chat-message {
  margin: 12px 0;
  padding: 12px 16px;
  border-radius: 12px;
  max-width: 90%;
  position: relative;
}

.user-message {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  margin-left: auto;
  border-bottom-right-radius: 4px;
}

.assistant-message {
  background: #f3f4f6;
  color: #1f2937;
  margin-right: auto;
  border-bottom-left-radius: 4px;
}

.message-content {
  line-height: 1.6;
}

.message-content h2, .message-content h3, .message-content h4 {
  margin: 8px 0 4px 0;
  color: #1f2937;
}

.message-content ul, .message-content ol {
  margin: 8px 0;
  padding-left: 20px;
}

.message-content li {
  margin: 4px 0;
}

.message-content code {
  background: #e5e7eb;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.9em;
}

.message-content pre {
  background: #1f2937;
  color: #f3f4f6;
  padding: 12px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 8px 0;
}

.message-content pre code {
  background: none;
  padding: 0;
  color: inherit;
}

.chat-table {
  width: 100%;
  border-collapse: collapse;
  margin: 8px 0;
  font-size: 0.9em;
}

.chat-table td {
  border: 1px solid #d1d5db;
  padding: 6px 10px;
}

.chat-table tr:first-child {
  background: #e5e7eb;
  font-weight: 600;
}

.copy-response-btn {
  display: block;
  margin-top: 12px;
  padding: 6px 12px;
  background: #e5e7eb;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85em;
  transition: background 0.2s;
}

.copy-response-btn:hover {
  background: #d1d5db;
}

.typing-indicator {
  display: flex;
  gap: 4px;
  padding: 4px 0;
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  background: #9ca3af;
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out;
}

.typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
.typing-indicator span:nth-child(2) { animation-delay: -0.16s; }

@keyframes bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}

.fallback-indicator {
  margin-top: 8px;
  padding: 4px 8px;
  background: #fef3c7;
  border-radius: 4px;
  display: inline-block;
}

.loading-message {
  opacity: 0.8;
}

/* Quick question buttons */
.quick-question-btn {
  padding: 6px 12px;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  cursor: pointer;
  font-size: 0.85em;
  transition: all 0.2s;
}

.quick-question-btn:hover {
  background: #e5e7eb;
  border-color: #6366f1;
}

/* Chat input area */
#ai-chat-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1em;
  resize: none;
}

#ai-chat-input:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

#ai-chat-send {
  padding: 12px 24px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}

#ai-chat-send:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}

#ai-chat-send:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}
</style>
`;

// Inject styles when DOM loads
document.addEventListener('DOMContentLoaded', () => {
  // Add styles
  document.head.insertAdjacentHTML('beforeend', chatStyles);
  
  // Initialize chat UI
  ChatUI.init();
});

// Export for external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { XBOChat, ChatUI, parseMarkdown, copyToClipboard };
}
