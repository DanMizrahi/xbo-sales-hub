// XBO Sales Hub - AI Chat Engine
// Smart conversational responses for sales team

const aiResponses = {
  // ============================================
  // PRICING & FEES
  // ============================================
  
  patterns: [
    // OTC Pricing
    {
      triggers: ["otc fee", "otc price", "otc rate", "otc pricing", "עמלת otc", "מחיר otc"],
      response: `**OTC Fee Structure:**

| Deal Size | Rate |
|-----------|------|
| $500K – $2M | 2.00% |
| $2M – $5M | 1.00% – 1.50% |
| $5M+ | 0.50% – 0.75% (case-by-case) |

**Default rate:** 2%

💡 Large volume clients can negotiate better rates.`,
      copyText: "OTC Fees:\n• $500K-$2M: 2%\n• $2M-$5M: 1-1.5%\n• $5M+: 0.5-0.75% (negotiable)"
    },
    
    // Spot Pricing
    {
      triggers: ["spot fee", "spot price", "trading fee", "exchange fee", "עמלת מסחר"],
      response: `**Spot Exchange Fee Structure:**

| Monthly Volume | Rate |
|----------------|------|
| < $500K | 0.80% |
| $500K – $2M | 0.50% |
| $2M+ | 0.25% |

**Default rate:** 0.8%

💡 Volume-based discounts apply automatically.`,
      copyText: "Spot Trading Fees:\n• <$500K: 0.8%\n• $500K-$2M: 0.5%\n• $2M+: 0.25%"
    },
    
    // CryptoPayX Pricing
    {
      triggers: ["cryptopayx fee", "cryptopayx price", "processing fee", "payment processing", "עמלת עיבוד"],
      response: `**CryptoPayX Processing Fees:**

| Monthly Flow | Rate |
|--------------|------|
| Up to $1M | 1.50% |
| $1M – $5M | 1.00% |
| $5M – $10M | 0.75% |
| $10M+ | 0.50% (enterprise) |

**Default rate:** 1.5%

💡 Enterprise clients get custom pricing.`,
      copyText: "CryptoPayX Fees:\n• Up to $1M: 1.5%\n• $1M-$5M: 1%\n• $5M-$10M: 0.75%\n• $10M+: 0.5%"
    },

    // ============================================
    // PRODUCT EXPLANATIONS
    // ============================================
    
    // Credit Line
    {
      triggers: ["what is credit line", "explain credit line", "credit line work", "מה זה קרדיט ליין", "איך עובד קרדיט"],
      response: `**Credit Line - Trade Without Upfront Funds** 💰

XBO Credit Line lets institutional clients execute trades without holding funds first.

**How it works:**
1. Client gets approved credit limit (fiat or crypto)
2. Execute trades using the credit
3. Settle within agreed timeframe
4. Track usage in real-time

**Example:**
→ €1M Credit Line approved
→ Client sells €200K (no balance needed)
→ Buys 220K USDC
→ Deposits €200K within 24h
→ USDC becomes withdrawable

**Best for:** CFD Brokers, Trading Platforms, Market Makers, OTC Desks`,
      copyText: "XBO Credit Line enables trading without upfront funds. Execute trades first, settle later. Perfect for brokers and trading platforms needing liquidity flexibility."
    },
    
    // CaaS
    {
      triggers: ["what is caas", "explain caas", "crypto as a service", "מה זה קאס", "מה זה caas"],
      response: `**CaaS - Crypto-as-a-Service** ⚙️

White-label crypto infrastructure for banks, EMIs, and fintechs.

**What's included:**
• 🌊 **Liquidity** - 50+ exchanges, best execution
• 🔐 **Custody** - SOC 2, insured cold storage
• ⚖️ **Compliance** - MiCA & AML built-in
• 📱 **White-label UI** - Your branding
• 💹 **Earn Products** - Staking, yields
• 🔌 **Full API** - REST & WebSocket

**Time to market:** 4-6 weeks

**Best for:** Banks, EMIs, Neobanks, Fintechs`,
      copyText: "XBO CaaS: Launch your own crypto offering in 4-6 weeks. Complete white-label solution with liquidity, custody, compliance, and UI. Perfect for banks and fintechs."
    },
    
    // CryptoPayX
    {
      triggers: ["what is cryptopayx", "explain cryptopayx", "crypto payments", "מה זה קריפטופייקס"],
      response: `**CryptoPayX - Crypto Payment Processing** 💳

Accept crypto deposits instantly from anywhere in the world.

**Features:**
• ⚡ Real-time processing
• 🌍 Global coverage
• 💱 Fiat/stablecoin settlement options
• 🔒 Dedicated wallet per client
• 📊 Full transaction visibility

**How it works:**
1. Client gets unique deposit address
2. Sends crypto
3. Auto-detected & credited instantly
4. Settle to fiat or keep in crypto

**Best for:** iGaming, Forex Brokers, Creator Platforms, E-commerce`,
      copyText: "CryptoPayX: Instant crypto payment processing. Accept deposits globally, real-time settlement, dedicated wallets. Perfect for iGaming and digital platforms."
    },
    
    // IBAN
    {
      triggers: ["what is iban", "what is emoney", "explain iban", "corporate iban", "מה זה איבן", "מה זה אימאני"],
      response: `**eMoney / Corporate IBAN** 🏦

Dedicated IBAN accounts with full banking rails.

**Features:**
• 🇪🇺 **SEPA** - Fast EUR transfers across Europe
• 🌐 **SWIFT** - International (30+ currencies)
• 🇬🇧 **Faster Payments** - Instant UK GBP
• 💱 **Multi-currency** - Hold & convert
• 🔗 **Crypto bridge** - Easy on/off ramp

**Powered by:** Equals Money (FCA regulated)

**Best for:** Corporate Treasury, Trading Firms, Exchanges, Payment Providers

💡 **Pro tip:** IBAN clients often benefit from our Credit Line for added liquidity.`,
      copyText: "XBO Corporate IBAN: Dedicated accounts with SEPA, SWIFT & Faster Payments. Multi-currency support with crypto bridge. Powered by Equals Money."
    },

    // ============================================
    // SALES PITCHES
    // ============================================
    
    {
      triggers: ["pitch for igaming", "igaming pitch", "casino pitch", "gambling client"],
      response: `**iGaming Sales Pitch** 🎰

*"Looking for a reliable crypto payment solution for your gaming platform?"*

**Why XBO for iGaming:**

✅ **Instant deposits** - Players fund accounts in seconds
✅ **Global reach** - Accept crypto from restricted banking regions  
✅ **Lower fees** - 1-1.5% vs 3-5% card processing
✅ **No chargebacks** - Crypto is final
✅ **Privacy** - Players prefer crypto discretion

**Our iGaming clients see:**
• 40% increase in deposit conversion
• 60% lower payment costs
• New player acquisition from crypto-native audience

📊 *See our Tier-1 iGaming case study for details.*`,
      copyText: "XBO CryptoPayX for iGaming:\n\n• Instant crypto deposits\n• Global reach (no banking restrictions)\n• 1-1.5% fees (vs 3-5% cards)\n• Zero chargebacks\n• Player privacy\n\nOur iGaming clients see 40% better deposit conversion and 60% lower costs."
    },
    
    {
      triggers: ["pitch for broker", "broker pitch", "cfd pitch", "forex pitch", "trading platform pitch"],
      response: `**Broker/Trading Platform Pitch** 📈

*"Need liquidity flexibility for your trading operations?"*

**Why XBO for Brokers:**

✅ **Credit Line** - Trade without upfront capital
✅ **Deep liquidity** - Best execution across 50+ venues
✅ **Fiat & Crypto** - Full asset coverage
✅ **Real-time settlement** - Same-day options
✅ **API-first** - Seamless integration

**Our broker clients achieve:**
• Improved capital efficiency
• Faster client onboarding
• 24/7 trading capability
• Reduced operational overhead

📊 *See our CFD Broker case study for details.*`,
      copyText: "XBO for Trading Platforms:\n\n• Credit Line - trade without upfront funds\n• Deep liquidity across 50+ venues\n• Fiat & crypto coverage\n• Real-time settlement\n• Full API integration\n\nImprove capital efficiency and enable 24/7 trading."
    },
    
    {
      triggers: ["pitch for bank", "bank pitch", "emi pitch", "fintech pitch"],
      response: `**Bank/EMI/Fintech Pitch** 🏛️

*"Want to offer crypto services without building from scratch?"*

**Why XBO CaaS:**

✅ **4-6 weeks** to launch (not 12+ months)
✅ **Full compliance** - MiCA, AML built-in
✅ **Your brand** - Complete white-label
✅ **No crypto expertise needed** - We handle everything
✅ **Revenue share** - New profit center

**What you get:**
• Trading (Spot + OTC)
• Custody
• Staking/Earn products
• Cards
• Full API

📊 *See our Licensed EMI case study - launched in 6 weeks.*`,
      copyText: "XBO CaaS for Banks & Fintechs:\n\n• Launch crypto in 4-6 weeks\n• Full MiCA & AML compliance\n• Complete white-label solution\n• Trading, custody, staking, cards\n• No crypto expertise needed\n\nNew revenue stream without the build cost."
    },

    // ============================================
    // OBJECTION HANDLING
    // ============================================
    
    {
      triggers: ["too expensive", "price too high", "cheaper", "discount", "יקר מדי", "הנחה"],
      response: `**Handling Price Objections** 💬

**Response framework:**

1. **Acknowledge:** "I understand cost is a key factor..."

2. **Compare value, not just price:**
   • "Our all-in rate includes custody, compliance, and support"
   • "Competitors often add hidden fees for..."
   • "Calculate total cost of ownership, not just transaction fee"

3. **Volume incentives:**
   • "With your expected volume, you'd qualify for Tier X pricing"
   • "We can revisit rates after 3 months based on actual volume"

4. **Risk reduction:**
   • "Factor in the cost of compliance violations"
   • "Our insurance and security reduce your risk exposure"

**Tiered pricing reminder:**
Higher volume = Lower rates (automatically)`,
      copyText: null
    },
    
    {
      triggers: ["not ready", "maybe later", "need to think", "לא מוכן", "אולי אחר כך"],
      response: `**Handling "Not Ready" Objections** 💬

**Response framework:**

1. **Understand the blocker:**
   "What specifically would need to change for this to make sense?"

2. **Offer a pilot:**
   "Would a limited pilot help you evaluate without full commitment?"

3. **Create urgency (genuine):**
   • "Our onboarding queue is currently X weeks"
   • "Pricing is locked for clients who sign by [date]"

4. **Stay in touch:**
   "Let me send you our monthly product updates so you see what's new"

5. **Plant seeds:**
   "Your competitors [X] and [Y] are already using crypto payments..."`,
      copyText: null
    },

    // ============================================
    // COMPLIANCE
    // ============================================
    
    {
      triggers: ["prohibited countries", "restricted countries", "can't work with", "blocked countries", "מדינות חסומות"],
      response: `**Prohibited & Restricted Jurisdictions** ⚖️

**🚫 Prohibited (No service):**
Afghanistan, Belarus, Central African Republic, Cuba, DR Congo, Iran, Iraq, Libya, Mali, Myanmar, Nicaragua, North Korea, Russia, Somalia, South Sudan, Sudan, Syria, Ukraine (occupied), Venezuela, Yemen, Zimbabwe

**⚠️ Restricted (Extra due diligence):**
Albania, Bahamas, Barbados, Burkina Faso, Cambodia, Cayman Islands, Gibraltar, Haiti, Jamaica, Jordan, Nigeria, Pakistan, Panama, Philippines, Senegal, South Africa, Tanzania, Trinidad, Turkey, UAE, Uganda, Vietnam

📋 Full list: compliance.html`,
      copyText: null
    },
    
    {
      triggers: ["kyc requirements", "kyb requirements", "onboarding documents", "what documents", "מסמכים נדרשים"],
      response: `**KYC/KYB Requirements** 📋

**Corporate Onboarding:**
• Certificate of Incorporation
• Memorandum & Articles
• Shareholder Register
• Director ID & Proof of Address
• UBO Documentation (25%+ owners)
• Source of Funds declaration
• Business description

**Timeline:** 3-5 business days (standard)

**Process:**
1. Submit documents
2. Compliance review
3. Video verification (if needed)
4. Account activation`,
      copyText: "KYC/KYB Documents:\n• Certificate of Incorporation\n• Memorandum & Articles\n• Shareholder Register\n• Director ID + Address proof\n• UBO docs (25%+ owners)\n• Source of Funds\n• Business description\n\nTimeline: 3-5 business days"
    },

    // ============================================
    // PROCESSES
    // ============================================
    
    {
      triggers: ["onboarding process", "client onboarding", "how to onboard", "תהליך הצטרפות"],
      response: `**Client Onboarding Process** 🔄

**Step 1: Initial Contact**
• Discovery call
• Identify needs & products
• Pipedrive: Create deal

**Step 2: Documentation**
• Send KYB checklist
• Collect documents
• Compliance review (3-5 days)

**Step 3: Agreement**
• Send Insertion Order
• Negotiate terms if needed
• Sign digitally

**Step 4: Technical Setup**
• Create Telegram group
• API credentials (if needed)
• Test transactions

**Step 5: Go Live**
• First real transaction
• Move to "Client" stage
• Hand to Success team`,
      copyText: null
    },
    
    {
      triggers: ["telegram group", "create telegram", "telegram setup", "קבוצת טלגרם"],
      response: `**Telegram Group Setup** 💬

**Naming:** "XBO ↔ [Client Name]"

**Required members:**
• Client contacts
• XBO Account Manager
• Support representative
• Compliance (for onboarding)

**Checklist:**
☐ Create group with correct name
☐ Add all participants
☐ Pin welcome message with contacts
☐ Set group photo (XBO logo)
☐ Link in Pipedrive deal`,
      copyText: "Telegram Group: \"XBO ↔ [Client Name]\"\n\nMembers needed:\n• Client contacts\n• Account Manager\n• Support rep\n• Compliance (for onboarding)"
    },

    // ============================================
    // COMPARISONS
    // ============================================
    
    {
      triggers: ["vs competitor", "compared to", "difference between", "why xbo", "למה xbo", "בהשוואה ל"],
      response: `**Why XBO vs Competitors** 🏆

**vs Traditional Crypto Exchanges:**
• ✅ Credit Line (unique)
• ✅ Dedicated account management
• ✅ White-label options
• ✅ Corporate-grade compliance

**vs Other B2B Providers:**
• ✅ Faster onboarding (days, not months)
• ✅ More flexible pricing
• ✅ Full-stack solution (not just one product)
• ✅ European regulated (MiCA ready)

**XBO Unique Advantages:**
1. Trade without upfront funds (Credit Line)
2. 4-6 week CaaS deployment
3. Combined crypto + fiat (IBAN)
4. Single provider for all crypto needs`,
      copyText: "Why XBO:\n\n1. Credit Line - trade without upfront funds\n2. 4-6 week white-label deployment\n3. Crypto + fiat in one place\n4. European regulated (MiCA)\n5. Dedicated support & fast onboarding"
    },

    // ============================================
    // QUICK ANSWERS
    // ============================================
    
    {
      triggers: ["settlement time", "how long settlement", "when settled", "זמן סליקה"],
      response: `**Settlement Times:**

• **Crypto deposits:** Instant (after confirmations)
• **Crypto withdrawals:** Minutes to hours
• **SEPA:** Same-day or T+1
• **SWIFT:** 1-3 business days
• **Faster Payments (UK):** Instant
• **Credit Line settlement:** As agreed (usually T+1)`,
      copyText: "Settlement:\n• Crypto: Instant\n• SEPA: Same-day/T+1\n• SWIFT: 1-3 days\n• UK Faster Payments: Instant"
    },
    
    {
      triggers: ["supported coins", "which crypto", "what coins", "currencies supported", "מטבעות נתמכים"],
      response: `**Supported Cryptocurrencies:**

**Major:** BTC, ETH, USDT, USDC, XRP, SOL, ADA, DOT, LINK, AVAX

**Stablecoins:** USDT, USDC, DAI, TUSD, BUSD

**600+ trading pairs** available

**Networks:** Ethereum, BSC, Polygon, Solana, Tron, Arbitrum, Optimism, and more

💡 New assets added regularly based on demand.`,
      copyText: "Supported: BTC, ETH, USDT, USDC, XRP, SOL, ADA + 600 pairs\n\nNetworks: Ethereum, BSC, Polygon, Solana, Tron, Arbitrum, Optimism"
    },
    
    {
      triggers: ["api documentation", "api docs", "developer docs", "תיעוד api"],
      response: `**API Documentation:**

📚 **Docs:** docs.xbo.com

**Available APIs:**
• **Client API** - Trading, deposits, withdrawals
• **Public API** - Market data, prices
• **CryptoPayX API** - Payment processing
• **Webhooks** - Real-time notifications

**Authentication:** API Key + Secret
**Format:** REST (JSON)
**WebSocket:** Available for real-time data`,
      copyText: "API Docs: docs.xbo.com\n\nAPIs: Client, Public, CryptoPayX, Webhooks\nAuth: API Key + Secret\nFormat: REST + WebSocket"
    }
  ],

  // Fallback responses
  fallback: [
    "🤔 לא מצאתי מידע ספציפי על זה. נסה לשאול על:\n\n• **מוצרים:** Credit Line, CaaS, CryptoPayX, IBAN\n• **תמחור:** OTC fees, Spot fees, Processing fees\n• **פיץ'ים:** iGaming pitch, Broker pitch, Bank pitch\n• **תהליכים:** Onboarding, Telegram setup, KYC\n• **Compliance:** Prohibited countries, Documents\n\nאו פנה למנהל החשבון שלך.",
    
    "I couldn't find specific info about that. Try asking about:\n\n• **Products:** Credit Line, CaaS, CryptoPayX, IBAN\n• **Pricing:** OTC fees, Spot fees, Processing fees  \n• **Pitches:** iGaming pitch, Broker pitch, Bank pitch\n• **Processes:** Onboarding, Telegram setup, KYC\n• **Compliance:** Prohibited countries, Documents\n\nOr contact your account manager."
  ]
};

// Smart matching function
function findBestMatch(input) {
  const query = input.toLowerCase().trim();
  
  // Check each pattern
  for (const pattern of aiResponses.patterns) {
    for (const trigger of pattern.triggers) {
      if (query.includes(trigger)) {
        return pattern;
      }
    }
  }
  
  // Fuzzy matching for common misspellings and variations
  const fuzzyMatches = {
    "קרדיט": "credit line",
    "אייבן": "iban",
    "קריפטו": "cryptopayx",
    "איגיימינג": "igaming",
    "גיימינג": "igaming",
    "ברוקר": "broker",
    "בנק": "bank",
    "עמלה": "fee",
    "מחיר": "price",
    "תמחור": "pricing"
  };
  
  for (const [fuzzy, target] of Object.entries(fuzzyMatches)) {
    if (query.includes(fuzzy)) {
      for (const pattern of aiResponses.patterns) {
        for (const trigger of pattern.triggers) {
          if (trigger.includes(target)) {
            return pattern;
          }
        }
      }
    }
  }
  
  return null;
}

function getAIResponse(input) {
  const match = findBestMatch(input);
  
  if (match) {
    return {
      text: match.response,
      copyText: match.copyText,
      hasCopy: !!match.copyText
    };
  }
  
  // Return random fallback
  const fallback = aiResponses.fallback[Math.floor(Math.random() * aiResponses.fallback.length)];
  return {
    text: fallback,
    copyText: null,
    hasCopy: false
  };
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getAIResponse, findBestMatch };
}
