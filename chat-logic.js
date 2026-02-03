// XBO Sales Hub - Chat Logic with Knowledge Base

const knowledgeBase = {
  "credit line": {
    answer: "**XBO Credit Line (CL)** allows clients to trade without holding funds upfront.\n\n**How it works:**\n1. Client receives Credit Line in fiat/crypto\n2. Trade via platform or API\n3. Sell first, deposit later\n4. Purchased asset pending until settlement\n5. Once deposited → withdrawable\n\n**Example:** 1M EUR Credit Line → Sell 200K EUR → Buy 220K USDC → Deposit 200K EUR → USDC withdrawable",
    source: "Credit-Line.pdf"
  },
  "crypto as a service": {
    answer: "**XBO Crypto-as-a-Service (CaaS)**\n\nTurnkey solution including:\n• Liquidity - Deep pools, OTC\n• Custody - Institutional-grade\n• Security - ISO, SOC 2\n• Compliance - MiCA, AML\n• Earn Products - Staking, yields\n• Cards - Spend crypto anywhere\n\n**Time-to-Market:** 4-6 weeks",
    source: "Crypto-as-service.pdf"
  },
  "cryptopayx": {
    answer: "**CryptoPayX** - Instant crypto deposits\n\n• Accept crypto globally\n• Real-time processing\n• Fiat/stablecoin settlement\n• Dedicated wallet per client\n• Auto-detect & credit",
    source: "xbo-cryptopayx.pdf"
  },
  "mfa": {
    answer: "**MFA for Corporate Clients:**\n\n1. **Login:** Google Authenticator\n2. **Withdrawals:** SMS OTP\n\nSetup: Security Settings → Scan QR → Verify phone",
    source: "MFA-Permissions.pdf"
  },
  "compliance": {
    answer: "**XBO Compliance:**\n\n• Full AML screening\n• MiCA adherence (Europe)\n• KYC/KYB processes\n• Integrated: Elliptic, Sumsub\n• Travel Rule compliance",
    source: "Crypto-as-service.pdf"
  },
  "mica": {
    answer: "**MiCA Compliance:**\n\nXBO adheres to EU MiCA framework:\n• Licensed operations\n• Consumer protection\n• Transparency\n• Full EU compliance",
    source: "Compliance docs"
  },
  "api": {
    answer: "**XBO APIs:**\n\n• Client API - Trading, deposits\n• CryptoPayX API - Payments\n• Public API - Market data\n\n**Base URL:** api.xbo.com\n**Docs:** docs.xbo.com",
    source: "API Documentation"
  },
  "trading": {
    answer: "**XBO Trading:**\n\n• Spot - Market & Limit orders\n• OTC - Large volumes\n• 600+ pairs\n• Full API access\n• Credit Line trading",
    source: "API Documentation"
  },
  "otc": {
    answer: "**OTC Trading:**\n\n1. Request quote\n2. Review rate (time-limited)\n3. Execute at quoted rate\n\nBetter rates, no slippage, instant execution.",
    source: "API Documentation"
  },
  "deposit": {
    answer: "**Deposits:**\n\n**Crypto:** Unique address, auto-credit\n**Fiat:** Wire transfer, get bank details via API\n\nMultiple networks supported.",
    source: "API Documentation"
  },
  "withdrawal": {
    answer: "**Withdrawals:**\n\n• Requires SMS OTP\n• Crypto → external wallet\n• Fiat → verified bank\n• CL users: settle first",
    source: "MFA-Permissions.pdf"
  },
  "staking": {
    answer: "**Earn Products:**\n\n• Staking plans\n• Competitive APRs\n• Flexible terms\n• White-label options",
    source: "Crypto-as-service.pdf"
  },
  "cards": {
    answer: "**Cards-as-a-Service:**\n\n• Branded cards for clients\n• Spend crypto anywhere\n• Global acceptance\n• Real-time conversion",
    source: "Crypto-as-service.pdf"
  },
  "custody": {
    answer: "**Custody:**\n\n• Institutional-grade\n• Multi-currency wallets\n• API integration\n• Insurance coverage\n• SOC 2 compliant",
    source: "Crypto-as-service.pdf"
  },
  "security": {
    answer: "**Security:**\n\n• Multi-layer encryption\n• ISO certified\n• SOC 2 compliance\n• 24/7 monitoring\n• Penetration testing\n• MFA required",
    source: "Multiple sources"
  },
  "pricing": {
    answer: "**Pricing:**\n\nBased on:\n• Transaction volume\n• Product type\n• Service level\n\nContact account manager for custom quote.",
    source: "General"
  },
  "fees": {
    answer: "**Fees:**\n\n• Trading: Volume-based tiers\n• OTC: Spread-based\n• Deposits: Often free (crypto)\n• Withdrawals: Network/bank fees\n• Credit Line: Interest on balance",
    source: "General"
  },
  "referral": {
    answer: "**Referral Program:**\n\nPartner with XBO, earn commissions.\n\nContact account manager for:\n• Commission structure\n• Partner agreement\n• Marketing materials",
    source: "corporate-referrals.pdf"
  }
};

function processQuestion(question) {
  const q = question.toLowerCase();
  
  // Direct keyword matches
  for (const [keyword, data] of Object.entries(knowledgeBase)) {
    if (q.includes(keyword)) {
      return data.answer + "\n\n *Source: " + data.source + "*";
    }
  }
  
  // Partial matches
  const partialMatches = [
    { keywords: ["credit", "cl", "line"], key: "credit line" },
    { keywords: ["caas", "service", "turnkey"], key: "crypto as a service" },
    { keywords: ["pay", "payment", "checkout"], key: "cryptopayx" },
    { keywords: ["auth", "authenticator", "2fa"], key: "mfa" },
    { keywords: ["compliant", "aml", "kyc"], key: "compliance" },
    { keywords: ["regulation", "eu", "europe"], key: "mica" },
    { keywords: ["trade", "order", "spot"], key: "trading" },
    { keywords: ["convert", "large", "volume"], key: "otc" },
    { keywords: ["earn", "yield", "apy", "stake"], key: "staking" },
    { keywords: ["card", "spend", "visa"], key: "cards" },
    { keywords: ["wallet", "store", "safe"], key: "custody" },
    { keywords: ["secure", "encrypt", "protect"], key: "security" },
    { keywords: ["cost", "price", "rate"], key: "pricing" },
    { keywords: ["fee", "charge", "commission"], key: "fees" },
    { keywords: ["partner", "refer", "affiliate"], key: "referral" },
  ];
  
  for (const match of partialMatches) {
    for (const kw of match.keywords) {
      if (q.includes(kw)) {
        const data = knowledgeBase[match.key];
        return data.answer + "\n\n *Source: " + data.source + "*";
      }
    }
  }
  
  return " I couldn't find specific information about that in our documentation.\n\nTry asking about:\n• Credit Line\n• Crypto-as-a-Service\n• CryptoPayX (payments)\n• Trading / OTC\n• Compliance / MiCA\n• Security / MFA\n• Cards / Custody\n• Pricing / Fees\n\nOr contact your account manager for detailed information.";
}
