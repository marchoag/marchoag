# Privacy Policy — Master Template

> Based on the gold-standard policies from Scribefully, hoaglaw.ai, getorbital.dev, and skyriven.ai. Covers CCPA/CPRA, GDPR, U.S. state privacy laws, data breach notification, AI disclosure, sub-processor transparency, and more.

---

## Configuration Variables

Fill these in before generating the final document:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{COMPANY}}` | Legal entity / product name | Scribefully |
| `{{DOMAIN}}` | Primary domain | scribefully.com |
| `{{SERVICE_DESCRIPTION}}` | One-line description of the service | professional portfolio and content discovery platform |
| `{{CONTACT_EMAIL}}` | Support/legal email | support@scribefully.com |
| `{{LOCATION_COUNTY}}` | County | Marin County |
| `{{LOCATION_STATE}}` | State | California |
| `{{LOCATION_COUNTRY}}` | Country | United States |
| `{{EFFECTIVE_DATE}}` | Date policy takes effect | February 25, 2026 |
| `{{MIN_AGE}}` | Minimum age (must match TOS) | 18 |
| `{{CHANGE_NOTICE_DAYS}}` | Days notice before material changes | 30 |
| `{{CCPA_RESPONSE_DAYS}}` | Response time for CCPA requests | 45 |
| `{{GDPR_RESPONSE_DAYS}}` | Response time for GDPR requests | 30 |
| `{{BREACH_NOTIFICATION_HOURS}}` | Hours to notify after breach discovery | 72 |
| `{{SELLS_DATA}}` | Whether the service sells personal data | No |
| `{{HAS_ADVERTISING}}` | Whether the service runs ads | No |
| `{{HAS_PAID_PLANS}}` | Whether users pay for the service | No |

---

## Section Checklist

Every robust Privacy Policy should include all of the following. Sections marked with `[PROJECT-SPECIFIC]` need custom content per project. All others are largely boilerplate.

---

### 1. Introduction

This Privacy Policy describes how {{COMPANY}} ("we," "us," or "our") collects, uses, and protects information when you use our {{SERVICE_DESCRIPTION}} ("Service"). This Service is operated by an individual based in {{LOCATION_STATE}}.

**We do not sell, rent, or trade your personal information to third parties. We never have, and we never will.**

> Include the bold no-sell statement prominently. Adjust if your business model involves data sales (but strongly reconsider if so).

This Privacy Policy should be read in conjunction with our Terms of Service, which governs your use of the platform.

---

### 2. Definitions

- **"Service"** refers to the {{COMPANY}} web application located at {{DOMAIN}} and all related features, tools, and services.
- **"Personal Information"** means any information that identifies, relates to, or could reasonably be linked to you or your household.
- **"Processing"** means any operation performed on Personal Information, whether automated or manual.
- **"You" and "Your"** refer to the individual accessing or using the Service.
- **"We," "Us," and "Our"** refer to {{COMPANY}}.

---

### 3. Information We Collect `[PROJECT-SPECIFIC]`

> List every category of data you collect. Be exhaustive — this is the foundation of the entire policy. Organize into subsections by collection method.

**3.1 Personal Information (Account Users)**
- Email address
- Name
- Password (hashed, never stored in plaintext)
- [Other account fields]

**3.2 Information You Provide Directly**
- [List all user-generated content types]
- [E.g., URLs, comments, uploads, preferences]

**3.3 Information Collected Automatically**
- IP addresses (describe any anonymization: hashing, truncation, etc.)
- Browser type and version
- Device information and operating system
- User agent strings
- Access times and dates
- Pages viewed and features used
- Referring website addresses
- Session data (authentication tokens)

**3.4 Analytics and Tracking**
> Name your analytics provider explicitly.

We use [Analytics Provider] for product analytics. [Provider] collects:
- Page views and navigation paths
- Feature usage and interaction patterns
- [Session recordings, if applicable]
- Device and browser information

[Provider] data is stored in [location]. You can opt out by [method].

**3.5 Additional Data Categories** *(as needed)*
> Add subsections for any project-specific data: feedback forms, file uploads, API usage logs, payment information, etc.

---

### 4. How We Use Your Information `[PROJECT-SPECIFIC]`

**4.1 Core Functionality**
- [List how data powers the product's core features]

**4.2 Anti-Abuse Measures**
- Prevent spam, abuse, and manipulation through rate limiting
- IP-based restrictions
- Duplicate prevention

**4.3 Platform Improvement**
- Analyze usage patterns to enhance user experience
- Process feedback to improve the platform
- Identify and fix bugs

**4.4 Communications**
- Send transactional emails (e.g., notifications, confirmations)
- Communicate about Service changes or important updates
- Comply with legal obligations

---

### 5. Cookies and Tracking Technologies `[PROJECT-SPECIFIC]`

> Break into three categories. Be specific about cookie names/purposes.

**5.1 Essential Cookies**
These cookies are required for the Service to function and cannot be disabled.
- **[Auth cookie name/provider]:** [Purpose]. Set when you sign in, expires on logout or inactivity.
- [Other essential cookies/localStorage items]

**5.2 Analytics Cookies**
These cookies help us understand how users interact with the Service.
- **[Analytics provider]:** [What it collects]. Data stored in [location]. Opt out by [method].

**5.3 Preference Cookies**
These cookies remember your settings and preferences.
- **[Theme/locale/etc.]:** [Purpose].
- **[Consent state]:** Records whether you have acknowledged our cookie/privacy notice.

**5.4 What We Do Not Use**
- No advertising cookies or ad-tracking pixels
- No cross-site tracking for advertising purposes
- No social media tracking pixels
- No third-party marketing cookies

> Remove items from 5.4 that don't apply (e.g., if you DO use social pixels, disclose them in 5.2 instead).

**5.5 Managing Cookies**
You can manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, blocking essential cookies may prevent you from using certain features of the Service. To opt out of analytics cookies specifically, [describe method].

---

### 6. Data Storage and Security

**6.1 Data Location**
All data is stored and processed in {{LOCATION_COUNTRY}}. Our database is hosted by [provider] and our application is hosted by [provider].

**6.2 Security Measures**
- **Encryption in transit:** All data transmitted between your browser and our servers is encrypted using TLS 1.2 or higher (HTTPS)
- **Encryption at rest:** Database data is encrypted at rest using AES-256 encryption
- Password hashing (bcrypt or equivalent)
- [IP anonymization method, if applicable]
- [Database-level security: RLS, access controls, etc.]
- Limited access to information on a need-to-know basis
- Regular security assessments

**6.3 No Sensitive Data** *(adjust per project)*
- No payment information *(remove if you process payments)*
- No government IDs or social security numbers
- No biometric data
- No precise location tracking

**6.4 Security Limitations**
No method of internet transmission or electronic storage is completely secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.

---

### 7. Information Sharing and Disclosure

**We do not sell, trade, or rent your Personal Information to third parties.**

We may share information only in these limited circumstances:
- **Service Providers:** With trusted sub-processors who assist in operating the Service (see Section 8), solely for the purposes described in this policy
- **Legal Requirements:** When required by law, court order, or government request
- **Safety and Security:** To protect our rights, property, safety, or that of users or the public
- **Business Transfers:** In connection with a merger, acquisition, or sale of assets, in which case we will notify affected users before Personal Information is transferred

---

### 8. Sub-Processors `[PROJECT-SPECIFIC]`

> List every third-party service that touches user data. Table format is best practice.

| Service | Purpose | Data Processed | Location |
|---------|---------|----------------|----------|
| [Database provider] | Database, authentication | [Describe] | [Country] |
| [Hosting provider] | Application hosting | Application logs, server logs | [Country] |
| [Email provider] | Transactional email | Email addresses, message content | [Country] |
| [Analytics provider] | Product analytics | Usage data, interactions | [Country] |
| [Font/CDN provider] | [Purpose] | IP address, browser info | [Location] |

> Add rows for: payment processor, file storage, search provider, AI/ML services, error tracking (Sentry), etc.

Each sub-processor is contractually obligated to protect your data and may only process it for the specific purposes described above.

---

### 9. Data Retention `[PROJECT-SPECIFIC]`

We retain information only as long as necessary to:
- Provide the Service
- Comply with legal obligations
- Resolve disputes
- Enforce our Terms of Service

**Specific Retention Periods:**
- **Active accounts:** Retained for the duration of your account
- **Deleted accounts:** Personal data permanently removed upon deletion request
- **[Content type]:** [Retention period and rationale]
- **Server logs:** Retained for approximately 90 days
- **Analytics data:** Retained indefinitely in anonymized/aggregated form
- **[Other data types]:** [Period]

---

### 10. Your Privacy Rights

Regardless of your location, you have the following rights:

**10.1 Access and Portability**
- View your data through your account
- Request a copy of all Personal Information we hold about you

**10.2 Correction**
- Update your profile and account information
- Request correction of inaccurate data

**10.3 Deletion**
- Request account deletion by contacting us
- [Describe what happens to user content upon deletion]

> Add project-specific rights subsections (e.g., visibility controls, public information warnings).

To exercise any of these rights, contact us at {{CONTACT_EMAIL}} with the subject line "Privacy Request."

---

### 11. California Privacy Rights (CCPA/CPRA)

If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA):

**Categories of Personal Information Collected:**
- **Identifiers:** [List: name, email, IP, etc.]
- **Internet activity:** [List: browsing, interactions, etc.]
- **[Other categories]:** [List]

**Your California Rights:**
- **Right to know:** Request disclosure of categories and specific pieces of Personal Information collected
- **Right to correct:** Request correction of inaccurate Personal Information
- **Right to delete:** Request deletion of your Personal Information
- **Right to opt-out of sale:** We do not sell Personal Information
- **Right to non-discrimination:** We will not discriminate against you for exercising privacy rights
- **Right to limit use of sensitive information:** We do not collect sensitive Personal Information as defined by the CPRA

We will respond to verified CCPA requests within {{CCPA_RESPONSE_DAYS}} days. Email {{CONTACT_EMAIL}} with subject line "CCPA Request."

---

### 12. Other U.S. State Privacy Rights

If you are a resident of Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), or another state with applicable consumer privacy legislation, you may have similar rights including:
- Right to access your Personal Information
- Right to correct inaccuracies
- Right to delete your Personal Information
- Right to data portability
- Right to opt out of the sale of Personal Information (we do not sell your data)
- Right to opt out of targeted advertising (we do not engage in targeted advertising)
- Right to opt out of profiling

To exercise your rights, email {{CONTACT_EMAIL}} with subject line "State Privacy Request." We will respond within the timeframe required by your state's law. If denied, you may appeal by contacting us.

---

### 13. European & UK Privacy Rights (GDPR)

If you are located in the EEA or UK, the GDPR provides you with additional rights.

**13.1 Legal Basis for Processing**
- **Contract performance:** Processing necessary to provide the Service
- **Legitimate interests:** Operating/improving the Service, preventing abuse, security
- **Consent:** Where required (e.g., analytics, non-essential cookies)
- **Legal obligation:** Compliance with applicable laws

**13.2 Your GDPR Rights**
- **Access:** Request a copy of your Personal Information
- **Rectification:** Request correction of inaccurate data
- **Erasure:** Request deletion ("right to be forgotten")
- **Restriction:** Request restriction of processing
- **Portability:** Receive your data in a structured format
- **Objection:** Object to processing based on legitimate interests
- **Withdraw consent:** Withdraw consent at any time
- **Lodge a complaint:** File a complaint with your local data protection authority

**13.3 Data Controller**
{{COMPANY}} is the data controller. Sub-processors in Section 8 act as data processors on our behalf.

> Add project-specific GDPR subsections (e.g., virtual portfolio compliance, legitimate interest justifications).

We will respond to GDPR requests within {{GDPR_RESPONSE_DAYS}} days. Email {{CONTACT_EMAIL}} with subject line "GDPR Request."

---

### 14. International Data Transfers

If you access the Service from outside {{LOCATION_COUNTRY}}, your information will be transferred to and processed in {{LOCATION_COUNTRY}}.

**14.1 Transfer Mechanisms**
For transfers from the EEA/UK:
- Standard Contractual Clauses (SCCs), where applicable through sub-processors
- EU-U.S. Data Privacy Framework (DPF), where sub-processors are certified
- Your explicit consent where no other mechanism applies

**14.2 Security of Transfers**
All international data transfers are protected by TLS 1.2+ encryption in transit and AES-256 encryption at rest.

---

### 15. Data Breach Notification

In the event of a data breach affecting your Personal Information:
- **Timeline:** We will notify affected users within {{BREACH_NOTIFICATION_HOURS}} hours of becoming aware of the breach
- **Method:** Email notification to your account address, and/or prominent notice on the Service
- **Content of notice:**
  - Description of the nature of the breach
  - Types of Personal Information involved
  - Steps we are taking to address the breach
  - Steps you can take to protect yourself
  - Contact information for follow-up
- **Regulatory notification:** We will notify relevant authorities as required by law, including under the GDPR (within 72 hours) and California Civil Code §1798.82

---

### 16. Use of Artificial Intelligence `[PROJECT-SPECIFIC]`

> Be honest. Describe what exists today, not what you might build.

**16.1 Current AI Usage**
[Describe any automated processing, ML models, or AI features currently in use. If none, say so.]

**16.2 No Training on User Data** *(if applicable)*
We do not use your Personal Information or submitted content for training artificial intelligence or machine learning models.

**16.3 Future AI Features**
If we implement AI-powered features, we will update this Privacy Policy and our Terms of Service with clear disclosure and provide opt-out mechanisms where feasible.

**16.4 Third-Party AI Data Sharing (Mobile Apps)** `[iOS ONLY]`

> Required by Apple App Store Guideline 5.1.2(i), added November 13, 2025. Include this section ONLY if the app sends personal data to a third-party AI service. Omit entirely for on-device-only AI or web-only projects. Also add the AI provider to the Sub-Processors table in Section 8.

When you use [feature name], the following Personal Information is transmitted to [AI Provider Name] for processing:

- [List specific data, e.g., "text input," "selected images"]

**Purpose:** [Describe what the AI does with the data, e.g., "generate recipe suggestions," "analyze image preferences"]

**Data handling by [AI Provider Name]:**
- Data is processed in [location/region]
- Data is not retained beyond the request duration *(adjust if retention differs)*
- [AI Provider Name]'s privacy policy: [link]

**Your consent:**
- You will be prompted for explicit consent before any data is sent to [AI Provider Name] for the first time
- You may revoke consent at any time in the app's settings, which will disable [feature name]
- Revoking consent does not affect any data previously processed

**On-device AI:** Features powered by on-device frameworks (e.g., Core ML, ARKit, Vision) process data entirely on your device. No Personal Information leaves your device for these features.

> Remember to add [AI Provider Name] to the Sub-Processors table in Section 8 with: the service name, purpose (e.g., "AI-powered [feature]"), data processed (e.g., "[data types]"), and location.

---

### 17. Do Not Track Signals

We honor Do Not Track (DNT) signals sent by your browser. When we detect a DNT signal, [describe what happens — e.g., analytics tracking is disabled].

Essential cookies required for authentication and core functionality are not affected by DNT signals.

> If you do NOT honor DNT, say so honestly: "There is currently no universal standard for DNT. At this time, we do not alter our data collection practices in response to DNT signals."

---

### 18. Children's Privacy

The Service is not intended for individuals under {{MIN_AGE}} years of age. We do not knowingly collect Personal Information from anyone under {{MIN_AGE}}. If we become aware that we have collected Personal Information from a person under {{MIN_AGE}}, we will delete such information promptly. If you believe we have inadvertently collected information from a minor, please contact us immediately.

---

### 19. Third-Party Links

The Service may contain links to third-party websites. This Privacy Policy does not apply to third-party sites. We are not responsible for the privacy practices, content, or security of any third-party websites. We encourage you to review the privacy policy of every site you visit.

> Add project-specific subsections if your product fetches/displays third-party content (e.g., link previews, embeds, iframes).

---

### 20. Changes to This Privacy Policy

When we update this Privacy Policy:
- We will post the updated policy on the Service
- We will update the "Last Updated" date
- For material changes, we will notify registered users via email at least {{CHANGE_NOTICE_DAYS}} days before changes take effect
- We will provide a summary of changes in the notification

Your continued use of the Service after the effective date constitutes acceptance. If you do not agree, you must stop using the Service.

---

### 21. Contact Information

For privacy-related questions or to exercise your rights, contact us at: {{CONTACT_EMAIL}}

**Recommended subject lines:**
- **"CCPA Request"** — California privacy rights
- **"GDPR Request"** — European/UK privacy rights
- **"State Privacy Request"** — Other U.S. state privacy rights
- **"Privacy Inquiry"** — General privacy questions

{{LOCATION_COUNTY}}, {{LOCATION_STATE}}, {{LOCATION_COUNTRY}}

---

## Quick Reference: What to Customize Per Project

| Section | Effort | Notes |
|---------|--------|-------|
| 3. Information We Collect | High | Every project collects different data |
| 4. How We Use Information | Medium | Tied to features |
| 5. Cookies | Medium | Depends on tech stack |
| 6. Data Storage | Low | Update provider names + encryption details |
| 8. Sub-Processors | Medium | List every third-party service |
| 9. Data Retention | Medium | Specific timelines per data type |
| 10. Privacy Rights | Low-Medium | Add project-specific rights |
| 11. CCPA Categories | Low | Map to Section 3 |
| 16. AI Disclosure | Low | Honest description of current state |
| All others | Low | Mostly fill in variables |
