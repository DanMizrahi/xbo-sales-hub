// XBO Sales Hub - Knowledge Base
// Auto-generated from XBO documentation

const knowledgeBase = {
  // ============================================
  // HELP & TOPICS
  // ============================================
  
  "help": {
    answer: `**XBO Sales Hub Knowledge Base — Available Topics**

**Products & Services:**
• credit line, crypto as a service, caas, cryptopayx, crypto payments
• trading, otc, deposit, withdrawal, staking, cards, custody
• api, mfa, security, compliance, mica, pricing, fees

**Case Studies:**
• cfx broker / trading broker case study
• emi case study / electronic money
• igaming case study / casino case
• creator case study / adult platform

**Product Documentation:**
• corporate iban / viban corporate / equals money
• viban / virtual iban / viban guide

**Pipedrive CRM:**
• pipedrive / crm / deal management
• mandatory fields / pipedrive fields
• pipeline stages / sales stages / sla

**Procedures:**
• telegram group / client group procedure
• calendar / outlook / calendar sharing
• meeting booking / meeting flow

**Operations:**
• client lifecycle / onboarding flow
• banking rails / sepa / deposit options

**Release Notes:**
• mass payment / mass withdrawal / bulk payment

Type any keyword to search for information.`,
    source: "Knowledge Base Index"
  },

  "topics": {
    answer: `**XBO Sales Hub Knowledge Base — Available Topics**

**Products & Services:**
• credit line, crypto as a service, caas, cryptopayx, crypto payments
• trading, otc, deposit, withdrawal, staking, cards, custody
• api, mfa, security, compliance, mica, pricing, fees

**Case Studies:**
• cfx broker / trading broker case study
• emi case study / electronic money
• igaming case study / casino case
• creator case study / adult platform

**Product Documentation:**
• corporate iban / viban corporate / equals money
• viban / virtual iban / viban guide

**Pipedrive CRM:**
• pipedrive / crm / deal management
• mandatory fields / pipedrive fields
• pipeline stages / sales stages / sla

**Procedures:**
• telegram group / client group procedure
• calendar / outlook / calendar sharing
• meeting booking / meeting flow

**Operations:**
• client lifecycle / onboarding flow
• banking rails / sepa / deposit options

**Release Notes:**
• mass payment / mass withdrawal / bulk payment

Type any keyword to search for information.`,
    source: "Knowledge Base Index"
  },

  // ============================================
  // EXISTING ENTRIES
  // ============================================

  "credit line": {
    answer: `**XBO Credit Line (CL)** allows clients to trade and open positions without holding funds upfront.

**How it works:**
1. Client receives a Credit Line in selected fiat or crypto
2. Trade using the CL via platform or API
3. Sell first, deposit later - sell asset with zero balance, buy another
4. Purchased asset pending until sold amount is deposited
5. Once deposited, purchased asset becomes withdrawable

**Example:**
• Credit Line: 1,000,000 EUR
• Trade: Sell 200,000 EUR → Buy 220,000 USDC
• Remaining CL: 800,000 EUR
• USDC withdrawable after depositing 200,000 EUR`,
    source: "Credit-Line.pdf"
  },

  "crypto as a service": {
    answer: `**XBO Crypto-as-a-Service (CaaS)** - Turnkey solution for businesses to integrate cryptocurrency services.

**What's included:**
• **Liquidity** - Deep pools for crypto-fiat and crypto-to-crypto conversions, Spot and OTC trading
• **Custody** - Institutional-grade custody, multi-currency wallet management, API-driven integration
• **Security** - Multi-layer architecture, ISO-certified, SOC 2 compliance, continuous monitoring
• **Compliance** - Full AML screening, MiCA adherence, integrated tools (Elliptic, Sumsub)
• **Earn Products** - Yield and staking plans, competitive APRs
• **Cards** - Cards-as-a-Service for spending crypto anywhere

**Time-to-Market:** 4-6 weeks`,
    source: "Crypto-as-service.pdf"
  },

  "caas": {
    answer: `**XBO Crypto-as-a-Service** enables businesses to offer crypto services without building infrastructure.

**Key features:**
• Crypto Payments & Checkout
• Stablecoin Rails for FX and Settlement
• Trading & Brokerage via API
• Yield Products (Staking, Lending)
• Custody Services for Institutions
• Crypto Spending via Branded Cards

**Implementation:** 4-6 weeks to go live`,
    source: "Crypto-as-service.pdf"
  },

  "cryptopayx": {
    answer: `**CryptoPayX** - Instant crypto deposits solution.

**Features:**
• Accept crypto payments from clients globally
• Real-time processing
• Fiat and stablecoin settlement options
• Dedicated wallet per client
• Automatic detection and crediting
• Self-serve experience for clients

**Supported:** USDC, and other major cryptocurrencies on Ethereum/ERC-20 and other networks.`,
    source: "xbo-cryptopayx.pdf"
  },

  "crypto payments": {
    answer: `**XBO Crypto Payment Solutions:**

**1. Crypto Wallet Deposit**
• Dedicated wallet address per client
• Client sends any amount in supported crypto
• Auto-detected and credited in real-time

**2. Payment Intent (Checkout)**
• Pre-set amounts for checkout flows
• Real-time conversion rates
• Multiple coin/network support

**Settlement options:** Keep in crypto or auto-convert to fiat/stablecoin.`,
    source: "xbo-cryptopayx.pdf"
  },

  "mfa": {
    answer: `**MFA Setup for Corporate Clients:**

**Two authentication methods:**
1. **Google Authenticator** - For login authentication
2. **SMS OTP** - For authorizing withdrawals

**Setup steps:**
1. Navigate to Security Settings
2. Set up Google Authenticator (scan QR code)
3. Set up SMS authentication (verify phone number)

**Result:** Login via Google Auth, withdrawals require SMS approval from authorized user.`,
    source: "MFA-Permissions.pdf"
  },

  "security": {
    answer: `**XBO Security Features:**

• Multi-layer security architecture with advanced encryption
• ISO-certified processes
• SOC 2 compliance for data integrity
• Continuous monitoring and penetration testing
• MFA options: Google Authenticator + SMS
• Institutional-grade custody for digital assets`,
    source: "Multiple sources"
  },

  "compliance": {
    answer: `**XBO Compliance & Regulation:**

• Full AML screening for all crypto transactions
• MiCA regulatory framework adherence (Europe)
• Global compliance coverage
• Integrated tools: Elliptic, Sumsub
• KYC/KYB processes
• Travel Rule compliance`,
    source: "Crypto-as-service.pdf"
  },

  "mica": {
    answer: `**MiCA (Markets in Crypto-Assets):**

XBO adheres to the MiCA regulatory framework in Europe. This ensures:
• Licensed crypto operations
• Consumer protection measures
• Transparent operations
• Compliance with EU standards

XBO provides full compliance support for clients operating in regulated markets.`,
    source: "Crypto-as-service.pdf"
  },

  "api": {
    answer: `**XBO API Access:**

**Base URL:** https://api.xbo.com

**Available APIs:**
• **Client API** - Trading, deposits, withdrawals, OTC
• **CryptoPayX API** - Payment intents, settlements
• **Public API** - Orderbook, trades, market data

**Authentication:** API Key + HMAC signature
**Documentation:** docs.xbo.com`,
    source: "API Documentation"
  },

  "trading": {
    answer: `**XBO Trading Features:**

• **Spot Trading** - Market and limit orders
• **OTC Trading** - Large volume conversions
• **600+ Trading Pairs** - Crypto-fiat and crypto-crypto
• **API Access** - Full trading via API
• **Credit Line** - Trade without upfront funds

**Order types:** Market, Limit
**Actions:** Create, update, cancel orders`,
    source: "API Documentation"
  },

  "otc": {
    answer: `**XBO OTC Trading:**

For large volume conversions with competitive rates.

**Process:**
1. Request quote - Get conversion rate for currency pair
2. Review rate - Quote valid for limited time
3. Execute - Convert funds at quoted rate

**Benefits:**
• Better rates for large volumes
• No slippage
• Instant execution`,
    source: "API Documentation"
  },

  "deposit": {
    answer: `**XBO Deposit Options:**

**Crypto Deposits:**
• Unique wallet address per currency/network
• Auto-credited upon confirmation
• Multiple networks supported

**Fiat Deposits (Wire Transfer):**
1. Get available bank accounts for your country
2. Get fee quote for amount
3. Initiate transfer with bank details
4. Receive XBO bank details
5. Complete transfer

**Fees:** Varies by currency and method`,
    source: "API Documentation"
  },

  "withdrawal": {
    answer: `**XBO Withdrawal Process:**

• Requires MFA (SMS OTP) for security
• Crypto: To external wallet address
• Fiat: Wire transfer to verified bank account
• Credit Line users: Must settle before withdrawal

**Security:** All withdrawals require authorized user approval via SMS.`,
    source: "MFA-Permissions.pdf"
  },

  "referral": {
    answer: `**XBO Corporate Referral Program:**

Partner with XBO to refer corporate clients and earn commissions.

Contact your account manager for:
• Commission structure
• Partner agreement
• Marketing materials
• Referral tracking`,
    source: "corporate-referrals.pdf"
  },

  "staking": {
    answer: `**XBO Earn Products:**

• Yield and staking plans for clients
• Competitive APRs
• Flexible terms
• White-label options for partners

Enable your platform to offer earning opportunities on crypto holdings.`,
    source: "Crypto-as-service.pdf"
  },

  "cards": {
    answer: `**XBO Cards-as-a-Service:**

• Issue branded cards for clients to spend crypto
• Global acceptance (Visa/Mastercard networks)
• Seamless platform integration
• Real-time crypto-to-fiat conversion at point of sale

Enable your clients to spend crypto anywhere, anytime.`,
    source: "Crypto-as-service.pdf"
  },

  "custody": {
    answer: `**XBO Custody Solutions:**

• Institutional-grade custody for digital assets
• Multi-currency wallet management
• Unique deposit addresses per client
• API-driven integration for balance checks
• Full insurance coverage
• SOC 2 compliant`,
    source: "Crypto-as-service.pdf"
  },

  "pricing": {
    answer: `**XBO Pricing:**

Pricing is based on:
• Transaction volume
• Product type (trading, custody, payments)
• Service level

Contact your account manager for a custom quote tailored to your business needs.`,
    source: "General"
  },

  "fees": {
    answer: `**XBO Fee Structure:**

• **Trading fees:** Based on volume tier
• **OTC fees:** Spread-based, competitive for large volumes
• **Deposit fees:** Varies by method (crypto often free)
• **Withdrawal fees:** Network fees for crypto, bank fees for fiat
• **Credit Line:** Interest on outstanding balance

Detailed fee schedule available from your account manager.`,
    source: "General"
  },

  // ============================================
  // CASE STUDIES
  // ============================================

  "cfx broker": {
    answer: `**Case Study: CFD/Online Trading Broker**

*"We saw a 30% increase in deposit approvals within the first month."*

**Client Profile:**
• Industry: CFD/Online Trading
• Scale: 50,000+ active traders
• Regions: Europe, Asia, LATAM

**Challenges:**
• 40% card decline rates
• 8+ fragmented PSPs
• 3-5 day settlement delays
• 2.3% chargeback rate

**Solution: PayX Processing + Settlement**
• Smart Payment Routing (AI-driven)
• Multi-Currency Acquiring (50+ local methods)
• T+0 Same-day settlements
• 3DS2 Optimization

**Results:**
• Card approval: 58% → 88% (+30%)
• Settlement: T+3-5 → T+0 (same-day)
• FX costs: 2.1% → 0.8% (-62%)
• Chargebacks: 2.3% → 0.9% (-61%)
• PSPs: 8 → 1 (unified)

**Implementation:** 6 weeks total`,
    source: "case-study-cfx-broker.md"
  },

  "trading broker case study": {
    answer: `**Case Study: CFD/Online Trading Broker**

*"We saw a 30% increase in deposit approvals within the first month."*

**Client Profile:**
• Industry: CFD/Online Trading
• Scale: 50,000+ active traders
• Regions: Europe, Asia, LATAM

**Challenges:**
• 40% card decline rates
• 8+ fragmented PSPs
• 3-5 day settlement delays
• 2.3% chargeback rate

**Solution: PayX Processing + Settlement**
• Smart Payment Routing (AI-driven)
• Multi-Currency Acquiring (50+ local methods)
• T+0 Same-day settlements
• 3DS2 Optimization

**Results:**
• Card approval: 58% → 88% (+30%)
• Settlement: T+3-5 → T+0 (same-day)
• FX costs: 2.1% → 0.8% (-62%)
• Chargebacks: 2.3% → 0.9% (-61%)
• PSPs: 8 → 1 (unified)

**Implementation:** 6 weeks total`,
    source: "case-study-cfx-broker.md"
  },

  "broker case": {
    answer: `**Case Study: CFD/Online Trading Broker**

*"We saw a 30% increase in deposit approvals within the first month."*

**Client Profile:**
• Industry: CFD/Online Trading
• Scale: 50,000+ active traders
• Regions: Europe, Asia, LATAM

**Key Results:**
• Card approval: 58% → 88% (+30%)
• Settlement: T+3-5 → T+0 (same-day)
• FX costs: 2.1% → 0.8% (-62%)
• Chargebacks: 2.3% → 0.9% (-61%)
• Implementation: 6 weeks

Contact sales@xbo.com for the full case study.`,
    source: "case-study-cfx-broker.md"
  },

  "emi case study": {
    answer: `**Case Study: Licensed EMI — Crypto-as-a-Service**

*"XBO's CaaS solution let us launch crypto services in 8 weeks instead of 18 months."*

**Client Profile:**
• Industry: Electronic Money Institution (EMI)
• License: EU E-Money License
• Segments: B2B (SMEs, Fintechs) & B2C (Retail)

**Challenges:**
• 67% of customers wanted crypto capabilities
• Zero blockchain expertise in-house
• 12-18 month traditional build timeline
• MiCA compliance requirements

**Solution: XBO Crypto-as-a-Service (CaaS)**
• Buy/Sell/Swap for 50+ cryptocurrencies
• Hosted wallets (secure, segregated)
• Seamless fiat on/off ramp
• KYT + Travel Rule compliance built-in
• Full white-label (EMI's branding)

**Results (First 12 Months):**
• Time-to-market: 18 months → 8 weeks
• Team required: 8-12 engineers → 0 hires
• Crypto-active users: 23% of customer base
• New revenue: €1.2M in trading fees
• Customer retention: +18% among crypto users
• NPS improvement: +12 points

**Contact:** caas@xbo.com`,
    source: "case-study-emi.md"
  },

  "electronic money": {
    answer: `**Case Study: Licensed EMI — Crypto-as-a-Service**

*"XBO's CaaS solution let us launch crypto services in 8 weeks instead of 18 months."*

**Client Profile:**
• Industry: Electronic Money Institution (EMI)
• License: EU E-Money License

**Solution: XBO CaaS**
• Complete white-label crypto infrastructure
• 50+ cryptocurrencies
• KYT + Travel Rule compliance
• MiCA-ready

**Key Results:**
• Time-to-market: 8 weeks (vs 18 months)
• Zero hires needed
• 23% customer adoption
• €1.2M new revenue (Year 1)

**Contact:** caas@xbo.com`,
    source: "case-study-emi.md"
  },

  "emi case": {
    answer: `**Case Study: Licensed EMI — Crypto-as-a-Service**

*"XBO's CaaS solution let us launch crypto services in 8 weeks instead of 18 months."*

**Key Results:**
• Time-to-market: 18 months → 8 weeks
• Zero engineering hires needed
• 23% customer crypto adoption
• €1.2M new trading fee revenue
• +18% customer retention

**Perfect for:** Licensed EMIs, Payment Institutions, Banks, Neobanks

**Contact:** caas@xbo.com`,
    source: "case-study-emi.md"
  },

  "igaming case study": {
    answer: `**Case Study: Tier-1 iGaming Casino Group**

*"CryptoPayX unified payments across all 200+ brands. Higher conversion, faster withdrawals."*

**Client Profile:**
• Industry: iGaming / Online Casino
• Scale: 200+ casino & sportsbook brands
• Players: Millions of active users
• Regions: EU, LATAM, Asia

**Challenges:**
• 35-50% card declines on gaming transactions
• 15+ fragmented PSPs
• 24-72 hour withdrawal times
• 1.8% payout chargeback rate

**Solution: CryptoPayX Pay-In + Pay-Out**
• 50+ cryptocurrencies supported
• Instant deposits (zero declines)
• Automated instant withdrawals
• 70% lower fees than cards

**Results:**
• Deposit conversion: 62% → 78% (+26%)
• LATAM deposits: 45% → 82% (+82%)
• Payout time: 36 hours → 4 minutes
• Payout chargebacks: 1.8% → 0.02% (-99%)
• Player satisfaction: 3.2/5 → 4.7/5

**Annual Impact:** +$29.1M (revenue + savings)

**Contact:** igaming@xbo.com`,
    source: "case-study-igaming.md"
  },

  "casino case": {
    answer: `**Case Study: Tier-1 iGaming Casino Group**

*"CryptoPayX unified payments across all 200+ brands."*

**Key Results:**
• 200+ brands unified on single platform
• Deposit conversion: +26%
• LATAM/Asia deposits: +82%/+67%
• Payout time: 36h → 4 minutes
• Annual impact: +$29.1M

**Contact:** igaming@xbo.com`,
    source: "case-study-igaming.md"
  },

  "gaming case": {
    answer: `**Case Study: Tier-1 iGaming Casino Group**

*"CryptoPayX unified payments across all 200+ brands."*

**Key Results:**
• 200+ brands unified on single platform
• Deposit conversion: +26%
• LATAM/Asia deposits: +82%/+67%
• Payout time: 36h → 4 minutes
• Annual impact: +$29.1M

**Contact:** igaming@xbo.com`,
    source: "case-study-igaming.md"
  },

  "creator case study": {
    answer: `**Case Study: Adult/Creator Platform**

*"Card declines were killing us in our biggest growth markets. CryptoPayX unlocked MENA, SEA, and LATAM."*

**Client Profile:**
• Industry: Adult/Creator Economy
• Scale: 5M+ Monthly Active Users
• Creators: 200,000+ content creators
• Model: Subscription + Pay-per-view + Tips

**Challenges:**
• 40-60% card declines in restricted regions
• 3.5% chargeback rate (friendly fraud)
• 14-30 day creator payout delays
• Bank-level blocks on adult MCC codes

**Solution: CryptoPayX Pay-In + Pay-Out**
• Crypto deposits (50+ coins, stablecoin focus)
• Instant creator payouts (daily/on-demand)
• Privacy-friendly (no bank statement exposure)
• Zero chargebacks on crypto

**Results:**
• Global payment completion: 52% → 77% (+48%)
• MENA success rate: 28% → 71% (+154%)
• Chargeback rate: 3.5% → 1.2% (-66%)
• Creator payout time: 21 days → 4 minutes
• Monthly revenue: $12.4M → $18.7M (+51%)
• Creator NPS: +18 → +67 (+49 points)

**Contact:** creators@xbo.com`,
    source: "case-study-creator-platform.md"
  },

  "adult platform": {
    answer: `**Case Study: Adult/Creator Platform**

*"Card declines were killing us in our biggest growth markets. CryptoPayX unlocked MENA, SEA, and LATAM."*

**Key Results:**
• Payment completion: +48% globally
• MENA region: +154% improvement
• Chargebacks: -66%
• Creator payouts: 21 days → 4 minutes
• Revenue: +51%

**Perfect for:** Creator platforms, streaming, digital content, fan platforms

**Contact:** creators@xbo.com`,
    source: "case-study-creator-platform.md"
  },

  "creator platform": {
    answer: `**Case Study: Adult/Creator Platform**

*"Card declines were killing us in our biggest growth markets. CryptoPayX unlocked MENA, SEA, and LATAM."*

**Key Results:**
• Payment completion: +48% globally
• MENA region: +154% improvement
• Chargebacks: -66%
• Creator payouts: 21 days → 4 minutes
• Revenue: +51%

**Perfect for:** Creator platforms, streaming, digital content, fan platforms

**Contact:** creators@xbo.com`,
    source: "case-study-creator-platform.md"
  },

  // ============================================
  // PRODUCT DOCUMENTATION
  // ============================================

  "corporate iban": {
    answer: `**XBO.emoney Corporate IBAN** — Powered by Equals Money

Multi-currency business accounts with instant fiat-crypto liquidity.

**Key Features:**
• **Multi-Currency IBANs** — Hold, send, receive in 30+ currencies
• **Instant Fiat-Crypto** — Convert on-demand, competitive rates
• **Payment Rails** — SEPA, SEPA Instant, Faster Payments, SWIFT
• **Virtual Mastercards** — Team spending with controls

**Pricing Tiers:**
• **Gold** (€1M+/mo) — Custom pricing, unlimited cards, 24/7 support
• **Silver** (€100K+/mo) — €199/mo, 25 cards, dedicated manager
• **Bronze** (All businesses) — €49/mo, 5 cards, email support

**Onboarding:** 2-5 business days after document submission

**Payment Fees (Gold):**
• SEPA: €0.20
• SEPA Instant: €0.50
• Faster Payments: £0.20
• SWIFT: From €15

**FCA Regulated** via Equals Money partnership.

**Contact:** emoney@xbo.com`,
    source: "product-corporate-iban.md"
  },

  "viban corporate": {
    answer: `**XBO.emoney Corporate IBAN** — Powered by Equals Money

Multi-currency business accounts with instant fiat-crypto liquidity.

**Key Features:**
• 30+ currencies supported
• Dedicated IBANs + Virtual IBANs
• SEPA, SEPA Instant, Faster Payments, SWIFT
• Virtual Mastercards for team spending
• Instant crypto-fiat conversion

**Pricing Tiers:**
• Gold (€1M+): Custom, unlimited cards, 24/7 support
• Silver (€100K+): €199/mo, 25 cards
• Bronze: €49/mo, 5 cards

**Contact:** emoney@xbo.com`,
    source: "product-corporate-iban.md"
  },

  "emoney": {
    answer: `**XBO.emoney Corporate IBAN** — Powered by Equals Money

Multi-currency business accounts with instant fiat-crypto liquidity.

**Features:**
• Multi-Currency IBANs (30+ currencies)
• Instant Fiat-Crypto conversion
• All major payment rails (SEPA, SWIFT, etc.)
• Virtual Mastercards
• FCA Regulated

**Use Cases:**
• Treasury management
• Supplier payments
• Payroll & contractor payments
• Crypto operations

**Contact:** emoney@xbo.com`,
    source: "product-corporate-iban.md"
  },

  "equals money": {
    answer: `**XBO.emoney Corporate IBAN** — Powered by Equals Money

XBO's corporate banking solution is powered by Equals Money, an FCA-regulated Electronic Money Institution (FRN: 900704).

**What this means:**
• Client funds are safeguarded (held separately)
• Full UK/EU regulatory compliance
• PCI DSS card data security
• AML/KYC compliance

**Services:**
• Multi-currency IBANs (30+ currencies)
• SEPA, SWIFT, Faster Payments
• Virtual Mastercards
• Crypto-fiat conversion via XBO

**Contact:** emoney@xbo.com`,
    source: "product-corporate-iban.md"
  },

  "viban": {
    answer: `**Virtual IBAN (VIBAN) — User Guide**

A dedicated account identifier for receiving bank transfers to your XBO wallet.

**Key Benefits:**
• Your own IBAN (dedicated to you)
• Direct bank deposits, auto-credited
• EUR and GBP VIBANs available
• 24/7 processing for amounts under €100K

**⚠️ CRITICAL: Create Transaction First!**
1. Log in to XBO
2. Go to Wallet → Deposit → Bank Transfer (VIBAN)
3. Enter exact amount you will send
4. Get your unique reference code
5. THEN send bank transfer with that reference

**Fees:**
• SEPA: €1.00
• SEPA Instant: €2.00
• Faster Payments: £1.00
• SWIFT: €15.00

**Processing Times:**
• SEPA Instant: 1-15 minutes
• SEPA: 1-2 hours (max 1 business day)
• Faster Payments: 5-30 minutes
• SWIFT: 1-3 business days

**Important Rules:**
✅ Always create deposit transaction FIRST
✅ Include exact reference code
✅ Add fee to transfer amount
✅ Use your own bank account (name must match)
❌ No third-party payments allowed`,
    source: "product-viban-guide.md"
  },

  "virtual iban": {
    answer: `**Virtual IBAN (VIBAN) — User Guide**

A dedicated account identifier for receiving bank transfers to your XBO wallet.

**How to Deposit:**
1. Create deposit transaction in XBO first
2. Get unique reference code
3. Send bank transfer with reference + fee

**Processing Times:**
• Under €100K: 24/7 automatic (minutes)
• Over €100K: Business hours manual review

**Fees:**
• SEPA: €1 | SEPA Instant: €2 | SWIFT: €15

**Rules:**
• Reference is MANDATORY
• Name must match KYC
• No third-party payments`,
    source: "product-viban-guide.md"
  },

  "viban guide": {
    answer: `**VIBAN Deposit Checklist**

**Before sending any bank transfer:**
☐ Create deposit transaction in XBO
☐ Note your unique reference code
☐ Calculate amount + fee
☐ Initiate bank transfer with:
  - Correct VIBAN
  - Amount + fee
  - YOUR REFERENCE CODE (mandatory!)
☐ Wait for processing

**Fees to add:**
• SEPA: €1.00
• SEPA Instant: €2.00
• Faster Payments: £1.00
• SWIFT: €15.00

**⚠️ Warnings:**
• NO REFERENCE = DELAYED DEPOSIT
• WRONG AMOUNT = MANUAL REVIEW
• THIRD PARTY = RETURNED + FEES

**Processing:**
• Under €100K: 24/7 automatic
• Over €100K: Mon-Fri business hours only`,
    source: "product-viban-guide.md"
  },

  "bank transfer": {
    answer: `**VIBAN Bank Transfer Guide**

**Step-by-step:**
1. Log in to XBO → Wallet → Deposit → Bank Transfer
2. Enter exact deposit amount
3. Click "Create Deposit" — get reference code
4. From your bank, send: Amount + Fee with reference

**Include Fee in Transfer:**
• SEPA: Add €1.00
• SEPA Instant: Add €2.00
• SWIFT: Add €15.00

**Example:**
• Want to deposit €1,000
• SEPA fee = €1.00
• Send €1,001 from bank

**Processing Times:**
• SEPA Instant: Minutes (24/7)
• SEPA Normal: 1-2 hours
• SWIFT: 1-3 business days

**⚠️ Reference is mandatory!** Without it, deposit may be delayed 3-5 business days.`,
    source: "product-viban-guide.md"
  },

  // ============================================
  // PIPEDRIVE CRM
  // ============================================

  "pipedrive": {
    answer: `**Pipedrive Usage Manual — Key Rules**

**📌 Client Notes Policy:**
Every deal MUST have a pinned note with client profile and status.

**🏢 One Deal per Company:**
• Single service → "Company Name"
• PAY service → "Company – PAY"
• No duplicates allowed

**👤 Assigned Ownership Only:**
• Sales reps do NOT self-assign deals
• CRM/Management assigns all deals

**🚫 Pipedrive = Single Source of Truth:**
• No Excel, Teams, personal notes
• If it's not in Pipedrive, it doesn't exist
• Clients tracked outside = no commission

**📅 Touchpoint Policy: Every 14 Days**
• Must contact client minimum every 14 days
• Log ALL activities (calls, emails, meetings)
• Internal notes only do NOT count

**⚠️ Inactivity Rules:**
• 7 days: Yellow flag (self-review)
• 14 days: Automatic review triggered
• 14+ days: Subject to reassignment

*If you didn't log it, it didn't happen.*`,
    source: "pipedrive-usage-manual.md"
  },

  "crm": {
    answer: `**Pipedrive CRM Rules Summary**

**Key Policies:**
1. **Pinned notes** required on every deal
2. **One deal per company** per service line
3. **No self-assignment** — CRM/Management assigns
4. **14-day touchpoint rule** — contact client every 14 days
5. **Pipedrive only** — no shadow tracking

**What counts as a touchpoint:**
✅ Phone calls (logged)
✅ Email exchanges
✅ Video/in-person meetings
✅ WhatsApp/Telegram messages
❌ Internal notes only
❌ "I thought about them"

**Consequences:**
• Clients outside Pipedrive = no commission
• Shadow pipelines = disciplinary action
• Repeated inactivity = deal reassignment`,
    source: "pipedrive-usage-manual.md"
  },

  "deal management": {
    answer: `**Pipedrive Deal Management**

**Deal Naming:**
• Standard: "Company Name"
• PAY service: "Company – PAY"
• One deal per company per service

**Ownership:**
• CRM/Management assigns deals
• Sales reps never self-assign
• Owner stays throughout lifecycle

**Activity Requirements:**
• Contact client every 14 days minimum
• Log all activities immediately
• Update pinned note after each contact
• Set next activity date

**Daily Checklist:**
☐ Check deals for 14-day touchpoints
☐ Update pinned notes on contacted deals
☐ Log all activities from today
☐ Set next activity dates
☐ Verify mandatory fields complete`,
    source: "pipedrive-usage-manual.md"
  },

  "mandatory fields": {
    answer: `**Pipedrive — 14 Mandatory Fields**

**Core Deal Info:**
1. Owner (auto-assigned by CRM)
2. Title (Company Name or Company – PAY)
3. Company Group

**Volume & Services:**
4. Expected Volume (use K/M format: "250K", "1.2M")
5. Services (CEX, PayX, OTC, Custody, Other)

**Fee Structure:**
6. SPOT Fee (enter as number: 0.25)
7. PayX Fee (enter as number: 1.2)

**Lead Source:**
8. Referred By (name or "Self-sourced")
9. Source Channel (LinkedIn, Conference, Referral, etc.)
10. Source Channel ID (profile URL, event name, etc.)
11. Source Origin (country/region)

**Status:**
12. Stage (current pipeline stage)
13. Status (Open/Won/Lost)
14. FTD Date (First Transaction Date — when live)

**Contact & Flow:**
15. Contact Person (linked Pipedrive Person)
16. Money Flow (document funds flow)

**The 14/14 Rule:** 14 mandatory fields, checked within 14 days.`,
    source: "pipedrive-mandatory-fields.md"
  },

  "pipedrive fields": {
    answer: `**Pipedrive Mandatory Fields — Quick Reference**

**Must Complete:**
• Owner, Title, Company Group
• Expected Volume (K/M format)
• Services (multi-select)
• SPOT Fee, PayX Fee
• Referred By, Source Channel, Source Channel ID, Source Origin
• Stage, Status, FTD Date
• Contact Person, Money Flow

**Money Flow Format:**
\`\`\`
INBOUND:
[Source] → [Method] → [Destination]

OUTBOUND:
[Source] → [Method] → [Destination]

NOTES:
[Special requirements]
\`\`\`

**Common Mistakes:**
❌ Volume as "250000" → Use "250K"
❌ Fee as "0.25%" → Enter 0.25 (number only)
❌ Money Flow as "Standard" → Document actual flow`,
    source: "pipedrive-mandatory-fields.md"
  },

  "deal fields": {
    answer: `**Pipedrive Deal Fields**

**14 Required Fields:**
1. Owner
2. Title
3. Company Group
4. Expected Volume
5. Services
6. SPOT Fee
7. PayX Fee
8. Referred By
9. Source Channel
10. Source Channel ID
11. Source Origin
12. Stage
13. Status
14. FTD Date

**Plus Contact & Money Flow documentation.**

**Volume Format:** Use K/M (e.g., "500K", "2.5M")
**Fee Format:** Number only (e.g., 0.25 not "0.25%")

Incomplete deals will be flagged and may affect commission.`,
    source: "pipedrive-mandatory-fields.md"
  },

  "pipeline stages": {
    answer: `**Pipeline Stages & SLA Rules**

**Stages:**
1. **Negotiation** (7 days max) — Terms & pricing
2. **Integration** (7 days max) — Technical setup
3. **Post Integration** (7 days max) — Testing & go-live prep
4. **Pending Momentum** (7 days max) — Awaiting first trade
5. **Momentum** (no limit) — Active trading
6. **Success** (no limit) — Fully scaled

**SLA Rules:**
• Working days only (Mon-Fri)
• Clock starts day after entering stage
• Breach consequences: Warning → Review → Reassignment

**Ownership:**
• Sales = Owner ALWAYS (throughout lifecycle)
• Onboarding, Compliance, Integration = Support only

**Parallel Processing:**
Onboarding + Integration can run simultaneously to accelerate time-to-live.

**VIP Clients:** Handed to Aleksandra (Success) for strategic management.`,
    source: "pipedrive-pipeline-stages.md"
  },

  "sales stages": {
    answer: `**Sales Pipeline Stages**

**Stage Flow:**
Negotiation → Integration → Post Integration → Pending Momentum → Momentum → Success

**Max Duration (each):** 7 working days (Mon-Fri)

**Key Points:**
• Sales owns deal throughout lifecycle
• Other teams provide support only
• Onboarding + Integration can run in parallel
• VIPs go to Aleksandra after Success stage

**SLA Breach:**
• 1st breach: Warning + explanation
• 2nd breach: Management review
• Repeated: Deal reassignment`,
    source: "pipedrive-pipeline-stages.md"
  },

  "deal stages": {
    answer: `**Deal Stages Overview**

1. **Negotiation** — Close agreement (7 days)
2. **Integration** — Coordinate tech setup (7 days)
3. **Post Integration** — Ensure go-live ready (7 days)
4. **Pending Momentum** — Get first transaction (7 days)
5. **Momentum** — Grow volume (no limit)
6. **Success** — Strategic partnership (no limit)

**Key Handovers:**
• Sales → Onboarding (after signed agreement)
• Onboarding → Compliance (after docs collected)
• Compliance → Integration (after approved)
• Integration → Support (after go-live)`,
    source: "pipedrive-pipeline-stages.md"
  },

  "sla": {
    answer: `**Pipeline SLA Requirements**

**Maximum Time per Stage:**
• Negotiation: 7 working days
• Integration: 7 working days
• Post Integration: 7 working days
• Pending Momentum: 7 working days
• Momentum: No limit
• Success: No limit

**SLA Calculation:**
• Working days only (Mon-Fri, excludes holidays)
• Clock starts day after entering stage
• Clock stops day of stage exit

**Breach Consequences:**
• 1st breach: Warning + explanation required
• 2nd breach: Management review
• Repeated: Deal reassignment considered

**Misconfiguration Penalties:**
• Wrong ownership → Warning + correction
• Stage manipulation → No commission on deal
• Data falsification → Deal reassigned + no commission`,
    source: "pipedrive-pipeline-stages.md"
  },

  // ============================================
  // PROCEDURES
  // ============================================

  "telegram group": {
    answer: `**Creating Client Telegram Groups — Procedure**

**Platform:** Telegram only (WhatsApp not allowed unless approved)

**Step-by-Step:**
1. Create new group in Telegram
2. Add yourself + client contacts
3. Set group name: **XBO X [Company Name]**
4. Set official XBO group image
5. Add @XBOADMIN to the group
6. Grant @XBOADMIN full admin rights
7. Transfer ownership to @XBOADMIN

**Naming Format:**
✅ "XBO X Acme Corp"
❌ "Acme Corp Group"
❌ "XBO - TechStart"

**@XBOADMIN Permissions (all ON):**
• Change group info
• Delete messages
• Ban users
• Invite via link
• Pin messages
• Manage video chats
• Add new admins

**After Setup:**
Send welcome message with:
• Support channel purpose
• Key contacts
• Response time expectations`,
    source: "telegram-groups.md"
  },

  "client group": {
    answer: `**Client Telegram Group Setup**

**Required Steps:**
1. Create Telegram group
2. Name: "XBO X [Company Name]"
3. Set official XBO logo as image
4. Add @XBOADMIN
5. Give @XBOADMIN full admin rights
6. Transfer ownership to @XBOADMIN

**Why Telegram?**
• Better group management
• Admin controls
• File sharing
• Not tied to phone numbers

**Why @XBOADMIN?**
• Business continuity
• Management oversight
• Backup communication channel`,
    source: "telegram-groups.md"
  },

  "telegram procedure": {
    answer: `**Telegram Group Procedure — Checklist**

☐ Group created with correct members
☐ Name follows format: XBO X [Company Name]
☐ Official XBO group image set
☐ @XBOADMIN added to group
☐ @XBOADMIN has full admin rights
☐ Ownership transferred to @XBOADMIN
☐ Welcome message sent

**Welcome Message Template:**
"👋 Welcome to your XBO support group!

This is your dedicated channel for:
• Quick questions and support
• Document sharing
• Updates and announcements

Key contacts:
• [Your Name] - Sales
• @XBOADMIN - Admin Support

Response time: Business hours (Mon-Fri, 9:00-18:00 CET)"`,
    source: "telegram-groups.md"
  },

  "calendar": {
    answer: `**Outlook Calendar Sharing — Procedure**

**Required Recipients:**
• Dan (Dan.m@xbo.com) — Management
• Regi (Regi.k@xbo.com) — Sales Lead

**Required Permission:** "Can view all details"
(NOT "Can view when I'm busy")

**Outlook Desktop (Windows):**
1. Click Calendar icon
2. Right-click your calendar → Sharing Permissions
3. Add → Enter email → Set "Can view all details"
4. Repeat for both recipients

**Outlook Web:**
1. Go to outlook.office.com → Calendar
2. Click Share → Enter email
3. Select "Can view all details" → Share

**Why Required:**
• Maria schedules meetings for the team
• Avoids double-booking
• No back-and-forth on availability
• Workload visibility for management`,
    source: "calendar-sharing.md"
  },

  "outlook": {
    answer: `**Outlook Calendar Sharing**

**Share with:**
• Dan.m@xbo.com
• Regi.k@xbo.com

**Permission Level:** Can view all details

**How to Share (Web):**
1. Go to outlook.office.com
2. Click Calendar
3. Click Share
4. Enter email, select "Can view all details"
5. Click Share

**Note:** Mobile app doesn't support sharing setup — use desktop or web.`,
    source: "calendar-sharing.md"
  },

  "calendar sharing": {
    answer: `**Calendar Sharing Requirements**

**All sales team must share calendars with:**
1. Dan.m@xbo.com (Management)
2. Regi.k@xbo.com (Sales Lead)

**Permission:** "Can view all details"

This allows viewing:
✅ Meeting titles
✅ Times and durations
✅ Locations
✅ Attendees
✅ Meeting descriptions

**Why:**
• Maria can schedule without back-and-forth
• Team visibility for client coverage
• Workload balance visibility`,
    source: "calendar-sharing.md"
  },

  "meeting booking": {
    answer: `**Meeting Booking & Data Flow**

**Process Flow:**
1. **Maria** (Coordinator) — Fills shared file, creates calendar invite
2. **Marcelle** (CRM Admin) — Populates Pipedrive, checks 14/14 fields
3. **Sales Rep** — Attends meeting, follows up, adds Pipedrive note

**SLAs:**
• Maria fills shared file: Within 2 hours
• Calendar invite sent: Within 4 hours
• Marcelle updates Pipedrive: Within 24 hours
• Sales rep confirms attendance: Within 24 hours
• Post-meeting follow-up: Within 24 hours
• Pipedrive note: Same day as meeting

**Post-Meeting Requirements:**
☐ Send follow-up email (within 24h)
☐ Share feedback with team
☐ Add Pipedrive note (same day)
☐ Update pinned note
☐ Set next activity date

**Calendar Requirement:**
All sales must share calendars with Maria for scheduling.`,
    source: "meeting-booking-flow.md"
  },

  "meeting flow": {
    answer: `**Meeting Flow — Roles**

**Maria (Coordinator):**
• Fills shared file with meeting details
• Creates calendar invite
• Adds all participants

**Marcelle (CRM Admin):**
• Updates Pipedrive deal/activity
• Verifies 14/14 mandatory fields
• Merges duplicate records

**Sales Rep (Owner):**
• Confirms attendance
• Prepares for meeting
• Attends and takes notes
• Sends follow-up within 24h
• Adds Pipedrive note same day`,
    source: "meeting-booking-flow.md"
  },

  "maria marcelle": {
    answer: `**Maria & Marcelle — Roles in Meeting Flow**

**Maria (Meeting Coordinator):**
• Manages the shared booking file
• Creates calendar invites
• Schedules meetings for sales team
• Needs calendar access from all sales reps

**Marcelle (CRM Administrator):**
• Populates Pipedrive from shared file
• Checks all 14 mandatory fields
• Merges duplicate records
• Flags missing information
• Ensures data integrity

**Timeline:**
• Maria fills file: 2 hours after request
• Maria sends invite: 4 hours
• Marcelle updates Pipedrive: 24 hours`,
    source: "meeting-booking-flow.md"
  },

  // ============================================
  // OPERATIONS
  // ============================================

  "client lifecycle": {
    answer: `**Client Lifecycle Flow**

**Phases & Owners:**
1. **Sales** (Regi) — Prospect, negotiate, close
2. **Onboarding** (Vlad/Ileana) — KYC collection, documentation
3. **Compliance** (Elina/Eliska) — Review, AML screening, approve
4. **Integration** (Mark) — API setup, configuration, testing
5. **GO LIVE** — Production access granted
6. **Corporate Support** (Eirini) — Day-to-day support
7. **Success** (Aleksandra) — VIP strategic partnership

**Key Principles:**
• Sales owns the deal throughout
• Other teams provide support only
• Onboarding + Integration can run in parallel
• Warm handovers, no cold transitions

**Handover Triggers:**
• Sales → Onboarding: Signed agreement
• Onboarding → Compliance: Docs collected
• Compliance → Integration: Approved
• Integration → Support: Go-live complete
• Support → Success: VIP qualified (€1M+/mo)`,
    source: "client-lifecycle.md"
  },

  "onboarding flow": {
    answer: `**Client Onboarding Flow**

**Team Directory:**
• Sales: Regi (Regi.k@xbo.com)
• Onboarding: Vlad, Ileana
• Compliance: Elina, Eliska
• Integration: Mark
• Support: Eirini
• Success (VIPs): Aleksandra

**Onboarding Phase (Vlad/Ileana):**
• Welcome call
• KYC form distribution
• Document collection
• Data verification

**Required Documents:**
☐ Corporate registration
☐ Ownership structure / UBO declaration
☐ Director identification
☐ Proof of address
☐ Source of funds
☐ Intended use case

**Parallel Processing:**
Onboarding and Integration can run simultaneously after initial documents received.`,
    source: "client-lifecycle.md"
  },

  "lifecycle": {
    answer: `**Client Lifecycle Summary**

**Phase Flow:**
Sales → Onboarding → Compliance → Integration → Go Live → Support → Success (VIPs)

**Key Contacts:**
• Sales: Regi
• Onboarding: Vlad/Ileana
• Compliance: Elina/Eliska
• Integration: Mark
• Support: Eirini
• VIP Success: Aleksandra

**VIP Qualification:**
• Monthly volume >€1M
• Strategic importance
• Executive relationship
• Multi-product opportunity

**VIP Service Levels:**
• Response time: 4h (vs 24h standard)
• Quarterly business reviews
• Roadmap input
• Direct access to Success manager`,
    source: "client-lifecycle.md"
  },

  "banking rails": {
    answer: `**EUR SEPA Deposit Options**

**SEPA Instant (Under €100K):**
• Speed: Seconds to minutes
• Availability: 24/7/365
• Max per transaction: €99,999.99
• Best for: Fast settlement, time-sensitive

**SEPA Normal (Over €100K):**
• Speed: 1-2 business days
• Availability: Business days only
• No practical limit
• Best for: Large transactions, planned transfers

**VIBAN Timing Rules:**
• Under €100K: 24/7 automatic processing
• Over €100K: Manual review, Mon-Fri business hours only

**Cut-off Times:**
• Monday-Thursday: 16:00 CET
• Friday: 14:00 CET
• After cut-off: Next business day

**Client Guidance:**
• Under €100K urgent → Use SEPA Instant
• Over €100K → Use SEPA Normal, allow 1-2 days
• Friday large deposits → Send before 14:00 CET`,
    source: "banking-rails.md"
  },

  "sepa": {
    answer: `**SEPA Deposit Options**

**SEPA Instant:**
• Under €100K only
• 24/7/365 availability
• Seconds to minutes
• Higher fees (€2 vs €1)

**SEPA Normal:**
• Any amount
• Business days only
• 1-2 business days
• Standard fees (€1)

**Quick Comparison:**
| Feature | SEPA Instant | SEPA Normal |
|---------|--------------|-------------|
| Limit | €100K | Unlimited |
| Speed | Minutes | 1-2 days |
| Availability | 24/7 | Mon-Fri |

**VIBAN Processing:**
• Under €100K: Automatic, 24/7
• Over €100K: Manual review, business hours`,
    source: "banking-rails.md"
  },

  "deposit options": {
    answer: `**XBO EUR Deposit Options**

**1. SEPA Instant (Under €100K)**
• Near real-time (seconds-minutes)
• 24/7/365 including weekends
• Automatic processing

**2. SEPA Normal (Any Amount)**
• 1-2 business days
• Required for amounts over €100K
• Manual review for large amounts

**Cut-off Times (for same-day processing):**
• Mon-Thu: 16:00 CET
• Friday: 14:00 CET

**Fees:**
• SEPA: €1.00
• SEPA Instant: €2.00
• SWIFT: €15.00

**Client Requirements:**
• EUR SEPA zone bank account
• Name must match KYC
• Unique reference code (mandatory)`,
    source: "banking-rails.md"
  },

  "banking partners": {
    answer: `**XBO Banking Infrastructure**

**SEPA Instant Partners:**
• For amounts under €100K
• 24/7 availability
• Near real-time settlement

**SEPA Normal Partners:**
• For amounts over €100K
• Business days (Mon-Fri)
• 1-2 business day settlement

**VIBAN Processing:**
• Under €100K: Automatic 24/7
• Over €100K: Manual review, business hours only

**For urgent large amounts:**
Contact XBO to discuss alternatives.

**Cut-offs:**
• Mon-Thu: 16:00 CET
• Friday: 14:00 CET`,
    source: "banking-rails.md"
  },

  // ============================================
  // RELEASE NOTES
  // ============================================

  "mass payment": {
    answer: `**Mass Crypto Withdrawals — Sprint 157.2 Release**

New **Mass Payment** feature for bulk cryptocurrency withdrawals via CSV upload.

**⚠️ Desktop Only** — Currently available on desktop web only.

**How It Works:**
1. Upload CSV file
2. System validates format
3. Review all transactions
4. Confirm and pay
5. Download results report

**CSV Requirements:**
• Format: CSV (comma-separated)
• Max file size: 5 MB
• Max rows: 2,500 transactions

**Required Columns:**
• Date — Transaction date
• Amount — Up to 8 decimal places
• Network — Blockchain network

**Optional Columns:**
• Comment — Internal note
• Reference ID — External reference

**Example:**
\`\`\`csv
Date,Amount,Network,Comment,Reference ID
2025-07-15,0.5,ETH,Monthly payout,PAY-001
2025-07-15,1.25,ETH,Affiliate commission,PAY-002
\`\`\`

**Important:** Balance must cover Total Amount + Network Fees before processing.`,
    source: "release-notes-sprint-157-2.md"
  },

  "mass withdrawal": {
    answer: `**Mass Withdrawal Feature — Sprint 157.2**

Bulk cryptocurrency withdrawals via CSV upload.

**Process:**
1. Prepare CSV with Date, Amount, Network columns
2. Upload in Wallet → Mass Payment
3. Review and confirm
4. Download transaction report

**Limits:**
• Max 2,500 transactions per file
• Max 5 MB file size
• Amounts: up to 8 decimal places

**CSV Example:**
\`\`\`csv
Date,Amount,Network
2025-07-15,0.5,ETH
2025-07-15,1.25,ETH
\`\`\`

**Note:** Desktop only. Ensure sufficient balance including fees.`,
    source: "release-notes-sprint-157-2.md"
  },

  "bulk payment": {
    answer: `**Bulk Payment Feature — Sprint 157.2**

Mass crypto withdrawals via CSV upload.

**Quick Start:**
1. Prepare CSV: Date, Amount, Network (required)
2. Optional: Comment, Reference ID
3. Upload → Validate → Review → Pay
4. Download results report

**Limits:**
• 2,500 transactions max
• 5 MB file max

**Desktop only.**`,
    source: "release-notes-sprint-157-2.md"
  },

  "release notes": {
    answer: `**Latest Release: Sprint 157.2 (July 2025)**

**🚀 Mass Crypto Withdrawals**
New Mass Payment feature for bulk cryptocurrency withdrawals via CSV upload.

**Features:**
• Upload CSV with up to 2,500 transactions
• Required columns: Date, Amount, Network
• Optional: Comment, Reference ID
• Download detailed results report

**Availability:** Desktop web only

**CSV Format:**
\`\`\`csv
Date,Amount,Network,Comment,Reference ID
2025-07-15,0.5,ETH,Monthly payout,PAY-001
\`\`\`

For previous release notes, contact your account manager.`,
    source: "release-notes-sprint-157-2.md"
  }
};

// Function to search knowledge base
function searchKnowledge(query) {
  const q = query.toLowerCase();
  
  for (const [keyword, data] of Object.entries(knowledgeBase)) {
    if (q.includes(keyword)) {
      return { found: true, ...data };
    }
  }
  
  // Partial matches
  const keywords = Object.keys(knowledgeBase);
  for (const keyword of keywords) {
    const words = keyword.split(' ');
    for (const word of words) {
      if (word.length > 3 && q.includes(word)) {
        return { found: true, ...knowledgeBase[keyword] };
      }
    }
  }
  
  return { found: false };
}

// Export for use
if (typeof module !== 'undefined') {
  module.exports = { knowledgeBase, searchKnowledge };
}
