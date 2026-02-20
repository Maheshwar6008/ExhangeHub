export interface ArchitectureStep {
    step: number;
    title: string;
    description: string;
}

export interface Architecture {
    title: string;
    steps: ArchitectureStep[];
}

export interface LessonContent {
    explanation: string[];
    keyPoints: string[];
    architecture?: Architecture;
    whyItMatters: string;
    commonMistakes: string[];
    interviewTips: string[];
    examTips: string[];
}

export interface TrainerNotes {
    talkingPoints: string[];
    realExamples: string[];
    questionsToAsk: string[];
}

export interface Lesson {
    id: string;
    title: string;
    slug: string;
    duration: string;
    content: LessonContent;
    trainerNotes?: TrainerNotes;
}

export interface Module {
    id: string;
    title: string;
    slug: string;
    description: string;
    icon: string;
    duration: string;
    lessons: Lesson[];
}

export interface CourseData {
    title: string;
    subtitle: string;
    certificationCode: string;
    trainer: { name: string; title: string; linkedin?: string };
    whatYouWillLearn: string[];
    prerequisites: string[];
    modules: Module[];
}

export const courseData: CourseData = {
    title: "Exchange Online",
    subtitle: "Microsoft 365 Messaging Administration & Management",
    certificationCode: "MS-203",
    trainer: {
        name: "Maheshwar",
        title: "Infrastructure & Cloud Administrator (HCLTech)",
        linkedin: "https://linkedin.com/in/yourprofile",
    },
    whatYouWillLearn: [
        "Configure and manage Exchange Online organization settings",
        "Design and implement mail flow rules and transport pipelines",
        "Implement message hygiene including anti-spam and anti-phishing",
        "Manage mailboxes, resource mailboxes, and permissions",
        "Plan and execute Exchange Online migrations",
        "Configure public folders and shared mailboxes",
        "Manage mobile device and client access policies",
        "Monitor, report, and troubleshoot messaging issues",
        "Implement compliance and data loss prevention policies",
    ],
    prerequisites: [
        "Microsoft 365 Fundamentals",
        "Active Directory Basics",
        "DNS & Networking Concepts",
        "PowerShell Fundamentals",
        "Basic Email Architecture Understanding",
    ],
    modules: [
        {
            id: "mod-introduction",
            title: "Introduction to Exchange Online",
            slug: "introduction",
            description: "Understand Exchange Online architecture, licensing, and the Microsoft 365 messaging ecosystem.",
            icon: "Map",
            duration: "1.5 hours",
            lessons: [
                {
                    id: "lesson-1-1",
                    title: "Exchange Online Architecture Overview",
                    slug: "architecture-overview",
                    duration: "25 mins",
                    content: {
                        explanation: [
                            "Exchange Online is Microsoft's cloud-based email and calendaring service, part of the Microsoft 365 suite. It provides enterprise-grade messaging capabilities without requiring on-premises Exchange Server infrastructure.",
                            "The architecture consists of multiple layers: the transport pipeline handles mail flow, the mailbox database stores messages, and the Client Access services handle connections from Outlook, OWA, and mobile devices.",
                            "Exchange Online leverages Azure Active Directory for authentication and identity management, integrating seamlessly with other Microsoft 365 services like Teams, SharePoint, and OneDrive.",
                        ],
                        keyPoints: [
                            "Exchange Online is a multi-tenant cloud messaging service",
                            "Mail flow uses the Exchange transport pipeline with connectors",
                            "Authentication integrates with Azure AD/Entra ID",
                            "Supports Outlook, OWA, mobile clients, and IMAP/POP",
                            "Built-in high availability with geo-redundant data centers",
                            "Managed via Exchange Admin Center (EAC) and PowerShell",
                        ],
                        architecture: {
                            title: "Exchange Online Architecture",
                            steps: [
                                { step: 1, title: "Azure AD", description: "Identity & authentication layer" },
                                { step: 2, title: "Transport Pipeline", description: "Mail flow processing & rules" },
                                { step: 3, title: "Mailbox Database", description: "Message storage & indexing" },
                                { step: 4, title: "Client Access", description: "Outlook, OWA, Mobile, IMAP" },
                            ],
                        },
                        whyItMatters: "Understanding Exchange Online architecture is fundamental for troubleshooting mail flow issues, planning migrations, and designing hybrid configurations. Administrators must know how components interact to effectively manage the messaging environment.",
                        commonMistakes: [
                            "Confusing Exchange Online with on-premises Exchange Server capabilities",
                            "Not understanding the role of DNS records (MX, SPF, DKIM, DMARC) in mail flow",
                            "Ignoring the dependency on Azure AD for user provisioning and authentication",
                        ],
                        interviewTips: [
                            "Explain the difference between Exchange Online and Exchange Server",
                            "Describe how mail flows from sender to recipient in Exchange Online",
                            "Discuss the role of Azure AD in Exchange Online authentication",
                        ],
                        examTips: [
                            "Know the default Exchange Online plans (Plan 1 vs Plan 2) and their feature differences",
                            "Understand how Exchange Online integrates with Azure AD for identity management",
                            "Be familiar with the Exchange Admin Center navigation and PowerShell modules",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Compare Exchange Online vs on-premises Exchange Server",
                            "Highlight the multi-tenant architecture benefits",
                            "Explain how Microsoft manages infrastructure updates",
                        ],
                        realExamples: [
                            "Organization migrating from Gmail to Exchange Online",
                            "Company consolidating multiple email systems into M365",
                        ],
                        questionsToAsk: [
                            "What email system does your organization currently use?",
                            "What are the advantages of cloud-based email over on-premises?",
                        ],
                    },
                },
                {
                    id: "lesson-1-2",
                    title: "Exchange Admin Center & PowerShell",
                    slug: "admin-center-powershell",
                    duration: "20 mins",
                    content: {
                        explanation: [
                            "The Exchange Admin Center (EAC) is the web-based management console for Exchange Online. It provides a graphical interface for managing recipients, mail flow, permissions, and organization settings.",
                            "Exchange Online PowerShell uses the ExchangeOnlineManagement module (V3) which connects via REST-based cmdlets. This provides faster and more reliable connections compared to the legacy remote PowerShell method.",
                            "For bulk operations and automation, PowerShell is essential. Common cmdlets include Get-Mailbox, Set-Mailbox, New-TransportRule, and Get-MessageTrace for troubleshooting.",
                        ],
                        keyPoints: [
                            "EAC is accessed at admin.exchange.microsoft.com",
                            "ExchangeOnlineManagement V3 module uses REST-based connections",
                            "Connect-ExchangeOnline is the primary connection cmdlet",
                            "PowerShell is required for bulk operations and automation",
                            "Role-Based Access Control (RBAC) governs admin permissions",
                            "Microsoft Graph API provides programmatic access to mailbox data",
                        ],
                        whyItMatters: "Effective Exchange Online administration requires proficiency in both the EAC and PowerShell. Many advanced configurations and bulk operations can only be performed via PowerShell, making it an essential skill for messaging administrators.",
                        commonMistakes: [
                            "Using legacy remote PowerShell instead of the V3 REST-based module",
                            "Not properly disconnecting PowerShell sessions after management tasks",
                            "Granting excessive admin permissions without following least-privilege principle",
                        ],
                        interviewTips: [
                            "Demonstrate familiarity with common Exchange Online PowerShell cmdlets",
                            "Explain RBAC roles and how to delegate admin responsibilities",
                            "Discuss scenarios where PowerShell is preferred over the EAC",
                        ],
                        examTips: [
                            "Know how to connect to Exchange Online using Connect-ExchangeOnline",
                            "Understand the difference between EAC and PowerShell capabilities",
                            "Be familiar with RBAC role groups like Organization Management, Recipient Management",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: ["Demo connecting to Exchange Online PowerShell", "Show common EAC navigation paths", "Explain RBAC role inheritance"],
                        realExamples: ["Bulk updating mailbox settings for 500 users via PowerShell", "Delegating help desk access using custom RBAC roles"],
                        questionsToAsk: ["When would you use PowerShell over the admin center?", "How do you manage admin access for different teams?"],
                    },
                },
                {
                    id: "lesson-1-3",
                    title: "DNS Records for Exchange Online",
                    slug: "dns-records",
                    duration: "20 mins",
                    content: {
                        explanation: [
                            "DNS records are critical for Exchange Online mail flow and service discovery. The MX record directs inbound mail to Exchange Online, while SPF, DKIM, and DMARC records authenticate outbound mail to prevent spoofing.",
                            "Autodiscover CNAME records enable automatic client configuration in Outlook, eliminating the need for manual profile setup. The autodiscover endpoint helps clients find the correct server settings.",
                            "DKIM (DomainKeys Identified Mail) adds a digital signature to outbound messages, while DMARC defines what happens when SPF or DKIM checks fail, providing comprehensive email authentication.",
                        ],
                        keyPoints: [
                            "MX record points to *.mail.protection.outlook.com",
                            "SPF record includes spf.protection.outlook.com",
                            "Autodiscover CNAME points to autodiscover.outlook.com",
                            "DKIM requires two CNAME records (selector1, selector2)",
                            "DMARC record defines policy for authentication failures",
                            "TXT records are used for domain verification",
                        ],
                        architecture: {
                            title: "Email Authentication Flow",
                            steps: [
                                { step: 1, title: "SPF Check", description: "Verify sender IP against DNS TXT record" },
                                { step: 2, title: "DKIM Verify", description: "Validate digital signature on message" },
                                { step: 3, title: "DMARC Policy", description: "Enforce policy based on SPF/DKIM results" },
                                { step: 4, title: "Delivery", description: "Accept, quarantine, or reject message" },
                            ],
                        },
                        whyItMatters: "Incorrect DNS configuration is the number one cause of mail delivery failures in Exchange Online. Proper SPF, DKIM, and DMARC records are essential for email deliverability and preventing your domain from being spoofed.",
                        commonMistakes: [
                            "Having multiple SPF records instead of a single combined record",
                            "Not enabling DKIM signing after adding CNAME records",
                            "Setting DMARC policy to reject before monitoring with none/quarantine first",
                        ],
                        interviewTips: [
                            "Explain the complete email authentication chain (SPF → DKIM → DMARC)",
                            "Describe how to troubleshoot mail delivery failures related to DNS",
                            "Discuss the importance of autodiscover for Outlook client configuration",
                        ],
                        examTips: [
                            "Know the exact format of SPF, DKIM, and DMARC DNS records for Exchange Online",
                            "Understand how MX record priority affects mail routing in hybrid environments",
                            "Be able to identify correct autodiscover CNAME configurations",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: ["Walk through each DNS record type and its purpose", "Show MX Toolbox for DNS verification", "Explain SPF record syntax"],
                        realExamples: ["Domain spoofing incident due to missing DMARC", "Mail delivery failure due to incorrect MX records"],
                        questionsToAsk: ["What happens if you have two SPF records?", "Why is DMARC important for brand protection?"],
                    },
                },
                {
                    id: "lesson-1-4",
                    title: "MS-203 Exam Overview & Study Strategy",
                    slug: "exam-overview",
                    duration: "15 mins",
                    content: {
                        explanation: [
                            "The MS-203: Microsoft 365 Messaging exam measures your ability to plan, deploy, configure, and manage Exchange Online and hybrid messaging environments. It covers mail flow, message hygiene, recipient management, and compliance.",
                            "The exam is divided into key domains: managing organizational settings and resources, planning and managing mail flow, managing message hygiene, and managing migration and coexistence.",
                            "Preparation should include hands-on lab experience with Exchange Online, understanding of PowerShell cmdlets, and familiarity with the Exchange Admin Center interface.",
                        ],
                        keyPoints: [
                            "MS-203 covers Exchange Online and hybrid messaging",
                            "Exam domains include mail flow, hygiene, recipients, and compliance",
                            "Hands-on experience with EAC and PowerShell is essential",
                            "Understanding hybrid configurations is heavily tested",
                            "Message trace and transport rules are common exam topics",
                            "Migration strategies (cutover, staged, hybrid) appear frequently",
                        ],
                        whyItMatters: "The MS-203 certification validates your expertise in Microsoft 365 messaging administration. It demonstrates proficiency in managing Exchange Online environments, which is a highly sought-after skill in enterprise IT.",
                        commonMistakes: [
                            "Focusing only on theory without hands-on lab practice",
                            "Ignoring hybrid Exchange scenarios which are heavily tested",
                            "Not practicing with Exchange Online PowerShell cmdlets",
                        ],
                        interviewTips: [
                            "Mention your MS-203 certification and specific areas of expertise",
                            "Discuss real-world Exchange Online administration experience",
                            "Explain your approach to troubleshooting mail flow issues",
                        ],
                        examTips: [
                            "Focus on mail flow rules, connectors, and transport pipeline questions",
                            "Practice message trace scenarios and interpreting results",
                            "Review hybrid Exchange configuration requirements thoroughly",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: ["Overview of exam domains and weightings", "Recommended study resources", "Lab environment setup tips"],
                        realExamples: ["Common exam question patterns", "How real-world experience maps to exam topics"],
                        questionsToAsk: ["What areas of Exchange Online are you least familiar with?", "Do you have access to a test tenant for lab practice?"],
                    },
                },
            ],
        },
        {
            id: "mod-mail-flow",
            title: "Mail Flow & Transport",
            slug: "mail-flow",
            description: "Master mail flow configuration, transport rules, connectors, and message routing.",
            icon: "ArrowLeftRight",
            duration: "2 hours",
            lessons: [
                {
                    id: "lesson-2-1",
                    title: "Understanding Mail Flow in Exchange Online",
                    slug: "mail-flow-overview",
                    duration: "25 mins",
                    content: {
                        explanation: [
                            "Mail flow in Exchange Online follows the transport pipeline, processing messages through multiple stages: submission, categorization, routing, and delivery. Each stage applies different rules and policies.",
                            "Inbound mail arrives via MX records, passes through Exchange Online Protection (EOP), then routes to the recipient mailbox. Outbound mail goes through the transport pipeline, applies DLP and transport rules, then exits via Microsoft's smart hosts.",
                            "Connectors define how mail flows between Exchange Online and external systems. Inbound connectors handle mail from partner organizations or on-premises servers, while outbound connectors route mail to specific destinations.",
                        ],
                        keyPoints: [
                            "Transport pipeline: submission → categorization → routing → delivery",
                            "EOP processes all inbound mail before delivery",
                            "Connectors control mail flow between Exchange Online and external systems",
                            "Mail flow rules (transport rules) process messages in the pipeline",
                            "Message trace is the primary tool for troubleshooting mail flow",
                            "Priority and order of transport rules affects processing",
                        ],
                        architecture: {
                            title: "Mail Flow Pipeline",
                            steps: [
                                { step: 1, title: "Submission", description: "Message enters the transport pipeline" },
                                { step: 2, title: "EOP Filtering", description: "Anti-spam, anti-malware scanning" },
                                { step: 3, title: "Transport Rules", description: "Apply mail flow rules & DLP" },
                                { step: 4, title: "Delivery", description: "Route to recipient mailbox" },
                            ],
                        },
                        whyItMatters: "Understanding mail flow is the foundation of Exchange Online administration. Every troubleshooting scenario, from delivery delays to missing emails, requires knowledge of how messages traverse the transport pipeline.",
                        commonMistakes: [
                            "Not understanding the order in which transport rules are evaluated",
                            "Misconfiguring connectors causing mail loops or delivery failures",
                            "Ignoring the role of EOP in the mail flow chain",
                        ],
                        interviewTips: [
                            "Describe the complete mail flow path for inbound and outbound messages",
                            "Explain how to troubleshoot a message that wasn't delivered",
                            "Discuss the role of connectors in hybrid mail flow",
                        ],
                        examTips: [
                            "Know the transport pipeline stages and what happens at each stage",
                            "Understand connector types (inbound vs outbound) and their configuration",
                            "Be prepared for message trace interpretation questions",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: ["Draw the mail flow diagram on whiteboard", "Explain each pipeline stage with examples"],
                        realExamples: ["Troubleshooting delayed mail delivery", "Configuring connectors for a partner organization"],
                        questionsToAsk: ["What happens to a message after it enters Exchange Online?", "How would you trace a missing email?"],
                    },
                },
                {
                    id: "lesson-2-2",
                    title: "Transport Rules & Mail Flow Rules",
                    slug: "transport-rules",
                    duration: "30 mins",
                    content: {
                        explanation: [
                            "Transport rules (also called mail flow rules) are policies applied to messages as they pass through the transport pipeline. They consist of conditions, exceptions, and actions that can modify, redirect, or block messages.",
                            "Rules can add disclaimers, encrypt messages, forward copies to compliance officers, block attachments, or route messages to specific connectors. They are evaluated in priority order, and processing can stop after a match.",
                            "Common use cases include adding legal disclaimers to external emails, enforcing TLS for specific partners, blocking messages with sensitive content, and routing messages through compliance review.",
                        ],
                        keyPoints: [
                            "Rules have conditions, exceptions, and actions",
                            "Priority determines evaluation order (lower number = higher priority)",
                            "Stop processing option prevents subsequent rules from running",
                            "Rules can target specific senders, recipients, or message properties",
                            "DLP policies integrate with transport rules for data protection",
                            "PowerShell: New-TransportRule, Set-TransportRule, Get-TransportRule",
                        ],
                        whyItMatters: "Transport rules are one of the most powerful tools for controlling message flow and enforcing organizational policies. They enable compliance requirements, security measures, and business logic without third-party tools.",
                        commonMistakes: [
                            "Creating conflicting rules without proper priority ordering",
                            "Using Stop Processing Rules inappropriately, skipping important rules",
                            "Not testing rules in test mode before enabling in production",
                        ],
                        interviewTips: [
                            "Describe a complex transport rule you implemented and its business purpose",
                            "Explain how rule priority affects message processing",
                            "Discuss how to implement email disclaimer requirements using transport rules",
                        ],
                        examTips: [
                            "Know how to create rules for common scenarios: disclaimers, encryption, forwarding",
                            "Understand rule priority, exceptions, and the Stop Processing Rules action",
                            "Be familiar with both EAC and PowerShell methods for managing transport rules",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: ["Demo creating a disclaimer rule in EAC", "Show PowerShell cmdlets for rule management"],
                        realExamples: ["Legal disclaimer requirement for external emails", "Blocking messages with credit card numbers"],
                        questionsToAsk: ["What happens when two rules conflict?", "How would you test a rule before production?"],
                    },
                },
                {
                    id: "lesson-2-3",
                    title: "Connectors & Partner Mail Flow",
                    slug: "connectors",
                    duration: "25 mins",
                    content: {
                        explanation: [
                            "Connectors in Exchange Online define how mail flows between your organization and external systems. Inbound connectors receive mail from specific sources (partner orgs or on-premises), while outbound connectors send mail to specific destinations.",
                            "Partner connectors enforce TLS encryption for specific domains, ensuring secure communication. Organization connectors handle mail flow with on-premises Exchange servers in hybrid configurations.",
                            "Certificate-based or IP-based validation ensures that connectors only process mail from authorized sources, preventing spoofing and unauthorized relay.",
                        ],
                        keyPoints: [
                            "Inbound connectors: from partner org or on-premises to Exchange Online",
                            "Outbound connectors: from Exchange Online to partner org or on-premises",
                            "TLS enforcement ensures encrypted partner communication",
                            "Certificate or IP-based validation authenticates connector sources",
                            "Hybrid connectors route mail between cloud and on-premises",
                            "Test connector validation using Test-MailFlow cmdlet",
                        ],
                        whyItMatters: "Connectors are essential for hybrid mail flow, partner communications, and integrating third-party email security gateways. Misconfigured connectors can break mail delivery or create security vulnerabilities.",
                        commonMistakes: [
                            "Not enforcing TLS on partner connectors, sending emails unencrypted",
                            "Misconfiguring hybrid connectors causing mail loops",
                            "Forgetting to validate connector certificates before deployment",
                        ],
                        interviewTips: [
                            "Explain the difference between inbound and outbound connectors",
                            "Describe how to set up secure mail flow with a partner organization",
                            "Discuss hybrid connector requirements and configuration",
                        ],
                        examTips: [
                            "Know connector types and when to use each (partner vs organization)",
                            "Understand how to enforce TLS and certificate validation on connectors",
                            "Be prepared for hybrid mail flow connector configuration scenarios",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: ["Compare connector types with real diagrams", "Show connector creation in EAC"],
                        realExamples: ["Setting up TLS-enforced connector with banking partner", "Hybrid connector for coexistence during migration"],
                        questionsToAsk: ["When would you create a partner connector vs organization connector?"],
                    },
                },
                {
                    id: "lesson-2-4",
                    title: "Accepted Domains & Email Address Policies",
                    slug: "accepted-domains",
                    duration: "20 mins",
                    content: {
                        explanation: [
                            "Accepted domains define which email domains your Exchange Online organization processes mail for. There are three types: Authoritative (mailboxes in your org), Internal Relay (forwarded to on-premises), and External Relay (forwarded to external systems).",
                            "Email address policies automatically assign email addresses to recipients based on templates. They use variables like %g (first name) and %s (last name) to create consistent address formats across the organization.",
                            "Managing accepted domains is critical during migrations and when organizations acquire new domains. Each accepted domain must be verified in Microsoft 365 before it can receive mail.",
                        ],
                        keyPoints: [
                            "Authoritative domains: Exchange Online is the final destination",
                            "Internal Relay: mail forwarded to on-premises Exchange",
                            "External Relay: mail forwarded to external email systems",
                            "Email address policies assign addresses automatically",
                            "Domains must be verified in M365 admin center first",
                            "Default domain affects new user address generation",
                        ],
                        whyItMatters: "Accepted domains determine what mail your organization processes. Incorrect domain types can cause mail to be rejected or misrouted, especially in hybrid and multi-domain environments.",
                        commonMistakes: [
                            "Setting a domain as Authoritative when it should be Internal Relay in hybrid",
                            "Not verifying domains before adding them as accepted domains",
                            "Forgetting to update email address policies after adding new domains",
                        ],
                        interviewTips: [
                            "Explain the difference between the three accepted domain types",
                            "Describe how email address policies work and when to use them",
                            "Discuss the domain verification process in Microsoft 365",
                        ],
                        examTips: [
                            "Know when to use each accepted domain type (Authoritative vs Relay)",
                            "Understand email address policy template variables (%g, %s, %m, etc.)",
                            "Be familiar with domain verification requirements and DNS records",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: ["Show accepted domain configuration in EAC", "Explain domain type selection for hybrid"],
                        realExamples: ["Company acquisition requiring new accepted domains", "Hybrid setup with internal relay domains"],
                        questionsToAsk: ["What domain type would you use in a hybrid Exchange setup?"],
                    },
                },
            ],
        },
        {
            id: "mod-message-hygiene",
            title: "Message Hygiene & Protection",
            slug: "message-hygiene",
            description: "Implement anti-spam, anti-malware, anti-phishing policies and Exchange Online Protection.",
            icon: "Shield",
            duration: "2 hours",
            lessons: [
                {
                    id: "lesson-3-1", title: "Exchange Online Protection (EOP) Overview", slug: "eop-overview", duration: "25 mins",
                    content: {
                        explanation: ["Exchange Online Protection is the cloud-based filtering service that protects against spam, malware, and other email threats. EOP is included with all Exchange Online plans and processes all inbound and outbound mail.", "EOP uses multiple layers of filtering including connection filtering, anti-malware, anti-spam, and anti-phishing policies. The filtering stack processes messages in a specific order, with each layer applying its own verdicts.", "The quarantine holds messages flagged by EOP, allowing admins and users to review and release false positives. Quarantine policies define what actions users can take on quarantined messages."],
                        keyPoints: ["EOP is included with all Exchange Online subscriptions", "Multi-layered filtering: connection, malware, spam, phishing", "Quarantine holds suspicious messages for review", "Threat Explorer provides detailed threat analysis (P2 only)", "Safe Links and Safe Attachments require Defender for Office 365", "SCL (Spam Confidence Level) determines message handling"],
                        architecture: { title: "EOP Filtering Stack", steps: [{ step: 1, title: "Connection Filter", description: "IP allow/block lists" }, { step: 2, title: "Anti-Malware", description: "Scan attachments for malware" }, { step: 3, title: "Transport Rules", description: "Apply mail flow rules" }, { step: 4, title: "Anti-Spam", description: "Content filtering & SCL scoring" }] },
                        whyItMatters: "EOP is the first line of defense for your email environment. Proper configuration prevents phishing attacks, malware infections, and spam floods while minimizing false positives that block legitimate business email.",
                        commonMistakes: ["Not customizing default EOP policies for organizational needs", "Confusing EOP features with Defender for Office 365 Plan 2 features", "Ignoring quarantine management leading to missed legitimate emails"],
                        interviewTips: ["Explain the EOP filtering stack and processing order", "Discuss how to tune anti-spam policies to reduce false positives", "Describe the difference between EOP and Defender for Office 365"],
                        examTips: ["Know which features are in EOP vs Defender for Office 365 P1 vs P2", "Understand SCL thresholds and their corresponding actions", "Be familiar with quarantine policies and management options"],
                    },
                    trainerNotes: { talkingPoints: ["Walk through EOP filtering layers", "Compare EOP vs Defender feature sets"], realExamples: ["Phishing attack blocked by EOP", "False positive causing business email to be quarantined"], questionsToAsk: ["How does EOP determine if a message is spam?"] },
                },
                {
                    id: "lesson-3-2", title: "Anti-Spam & Anti-Phishing Policies", slug: "anti-spam-phishing", duration: "30 mins",
                    content: {
                        explanation: ["Anti-spam policies control how Exchange Online handles suspected spam, including setting SCL thresholds, defining bulk mail handling, and configuring allow/block lists. Policies can be customized per user, group, or domain.", "Anti-phishing policies protect against impersonation attacks where attackers spoof trusted senders. Features include mailbox intelligence, spoof intelligence, and impersonation protection for specific users and domains.", "Advanced anti-phishing in Defender for Office 365 adds machine learning models, safe links detonation, and campaign views to detect sophisticated phishing attempts."],
                        keyPoints: ["Anti-spam policies set SCL thresholds for spam handling", "Bulk Complaint Level (BCL) filters newsletter-type mass mail", "Anti-phishing detects impersonation and spoofing attacks", "Mailbox intelligence learns user communication patterns", "Spoof intelligence identifies unauthorized sender domains", "Tenant Allow/Block List manages overrides centrally"],
                        whyItMatters: "Phishing is the top attack vector for organizations. Properly configured anti-spam and anti-phishing policies dramatically reduce the risk of credential theft, business email compromise, and financial fraud.",
                        commonMistakes: ["Setting anti-spam thresholds too aggressively causing false positives", "Not enabling impersonation protection for executives and VIPs", "Relying solely on default policies without customization"],
                        interviewTips: ["Describe your approach to tuning anti-spam policies", "Explain how impersonation protection works and its limitations", "Discuss how to handle a phishing incident in Exchange Online"],
                        examTips: ["Know the difference between anti-spam and anti-phishing policy settings", "Understand impersonation protection configuration for users and domains", "Be familiar with Tenant Allow/Block List management and usage"],
                    },
                    trainerNotes: { talkingPoints: ["Demo anti-spam policy configuration", "Show impersonation protection setup"], realExamples: ["CEO impersonation attack caught by anti-phishing", "Bulk mail filter blocking important newsletters"], questionsToAsk: ["How would you protect executives from impersonation attacks?"] },
                },
                {
                    id: "lesson-3-3", title: "Anti-Malware & Safe Attachments", slug: "anti-malware", duration: "25 mins",
                    content: {
                        explanation: ["Anti-malware policies in Exchange Online scan all email attachments for known malware signatures. The service uses multiple anti-malware engines for high detection rates and can block specific file types by extension.", "Safe Attachments (Defender for Office 365) provides advanced protection by detonating suspicious attachments in a sandbox environment. This catches zero-day threats that signature-based scanning might miss.", "Common attachment types like executable files (.exe, .bat, .cmd) can be automatically blocked. The ZAP (Zero-hour Auto Purge) feature removes malicious messages that were already delivered if a threat is detected after delivery."],
                        keyPoints: ["Multi-engine malware scanning for all attachments", "Common attachment type filtering blocks dangerous file extensions", "Safe Attachments detonates files in sandbox (Defender P1/P2)", "ZAP removes delivered malicious messages retroactively", "Admin quarantine notifications alert about malware detections", "Dynamic Delivery sends message body while scanning attachment"],
                        whyItMatters: "Email-borne malware is a primary vector for ransomware and data breaches. Multi-layered attachment scanning combined with sandbox detonation provides defense-in-depth against both known and zero-day threats.",
                        commonMistakes: ["Not enabling ZAP to catch post-delivery threats", "Blocking too many file types causing business disruption", "Confusing Safe Attachments with standard anti-malware scanning"],
                        interviewTips: ["Explain the difference between signature-based and sandbox-based malware detection", "Describe how ZAP works and when it activates", "Discuss how to handle a malware outbreak via email"],
                        examTips: ["Know which anti-malware features are in EOP vs Defender for O365", "Understand Safe Attachments policy modes: Monitor, Block, Replace, Dynamic Delivery", "Be familiar with ZAP behavior for spam, phishing, and malware"],
                    },
                    trainerNotes: { talkingPoints: ["Compare EOP anti-malware with Safe Attachments", "Explain Dynamic Delivery mode"], realExamples: ["Ransomware attachment stopped by Safe Attachments", "Zero-day exploit caught by sandbox detonation"], questionsToAsk: ["What is the advantage of sandbox detonation over signature scanning?"] },
                },
                {
                    id: "lesson-3-4", title: "Quarantine Management", slug: "quarantine-management", duration: "20 mins",
                    content: {
                        explanation: ["The quarantine in Exchange Online holds messages that were caught by EOP or Defender policies. Admins can review, release, or delete quarantined messages. Quarantine policies define what end users can do with their quarantined messages.", "Quarantine notifications inform users about quarantined messages, allowing them to request release without admin intervention. Custom quarantine policies can be created to control user permissions per detection type.", "Message trace combined with quarantine review is the primary workflow for investigating why legitimate messages were blocked and creating appropriate overrides."],
                        keyPoints: ["Quarantine holds spam, phishing, malware, and rule-blocked messages", "Quarantine policies control end-user permissions", "Admins can release, preview, and download quarantined messages", "Quarantine notifications inform users of held messages", "Messages are automatically deleted after 30 days (default)", "Tenant Allow/Block List creates overrides for false positives"],
                        whyItMatters: "Quarantine management balances security with business productivity. Too many false positives frustrate users, while insufficient review may allow threats through. Proper quarantine management ensures legitimate email is delivered while threats are blocked.",
                        commonMistakes: ["Not reviewing quarantine regularly, missing legitimate business emails", "Giving users too much quarantine control, allowing phishing release", "Not creating allow list entries for known false positives"],
                        interviewTips: ["Describe your quarantine management workflow", "Explain how to investigate and resolve false positive detections", "Discuss quarantine policy customization for different user groups"],
                        examTips: ["Know quarantine retention periods and automatic deletion behavior", "Understand quarantine policy permissions and how to customize them", "Be familiar with the process for releasing quarantined messages and creating overrides"],
                    },
                    trainerNotes: { talkingPoints: ["Demo quarantine review in EAC", "Show quarantine notification setup"], realExamples: ["Business partner emails consistently quarantined as spam", "User reporting missing emails found in quarantine"], questionsToAsk: ["How would you handle a user who reports not receiving expected emails?"] },
                },
            ],
        },
        {
            id: "mod-mailbox-management",
            title: "Mailbox Management",
            slug: "mailbox-management",
            description: "Configure and manage user mailboxes, resource mailboxes, permissions, and mailbox features.",
            icon: "Mail",
            duration: "2 hours",
            lessons: [
                {
                    id: "lesson-4-1", title: "User Mailbox Configuration", slug: "user-mailbox-config", duration: "25 mins",
                    content: {
                        explanation: ["User mailboxes in Exchange Online store email, calendar, contacts, and tasks. Each mailbox is associated with an Azure AD user account and requires an appropriate Exchange Online license (Plan 1 or Plan 2).", "Mailbox properties include storage quotas, retention policies, archive settings, and language/time zone configurations. These can be managed individually via EAC or in bulk using PowerShell.", "Mailbox permissions control who can access or act on behalf of other mailboxes. The three permission types are Full Access, Send As, and Send on Behalf, each providing different levels of access."],
                        keyPoints: ["Mailbox requires Azure AD user account with Exchange license", "Default mailbox size: 50GB (Plan 1) or 100GB (Plan 2)", "In-Place Archive provides unlimited archive storage (Plan 2)", "Full Access allows opening another user's mailbox", "Send As allows sending as another user (no indication)", "Send on Behalf sends with 'on behalf of' notation"],
                        whyItMatters: "Mailbox management is the most common daily task for Exchange Online administrators. Understanding mailbox types, permissions, and quotas is essential for provisioning users and resolving access issues.",
                        commonMistakes: ["Confusing Send As with Send on Behalf permission behavior", "Not enabling auto-mapping when granting Full Access permissions", "Forgetting to assign appropriate license before creating mailbox"],
                        interviewTips: ["Explain the three mailbox permission types and their differences", "Describe how to manage mailbox quotas and archive policies", "Discuss bulk mailbox management using PowerShell"],
                        examTips: ["Know mailbox size limits for each Exchange Online plan", "Understand Full Access vs Send As vs Send on Behalf permissions", "Be familiar with PowerShell cmdlets: Get-Mailbox, Set-Mailbox, Add-MailboxPermission"],
                    },
                    trainerNotes: { talkingPoints: ["Demo mailbox creation and configuration", "Show permission assignment via EAC and PowerShell"], realExamples: ["Executive assistant needing Send on Behalf permission", "Department shared access using Full Access"], questionsToAsk: ["When would you use Send As vs Send on Behalf?"] },
                },
                {
                    id: "lesson-4-2", title: "Resource & Shared Mailboxes", slug: "resource-shared-mailboxes", duration: "25 mins",
                    content: {
                        explanation: ["Resource mailboxes represent physical resources like conference rooms (room mailboxes) or equipment (equipment mailboxes). They automatically process meeting requests based on booking policies without human intervention.", "Shared mailboxes allow multiple users to read and send email from a common address (e.g., info@company.com) without requiring a separate license if under 50GB. They are ideal for team email addresses.", "Group mailboxes (Microsoft 365 Groups) provide shared mailbox functionality combined with SharePoint, OneNote, and Planner integration. They are the modern alternative to traditional distribution lists."],
                        keyPoints: ["Room mailboxes manage conference room bookings automatically", "Equipment mailboxes track shared resources like projectors", "Shared mailboxes don't require a license under 50GB", "Booking policies control auto-accept, conflicts, and duration", "Resource delegates can approve/deny booking requests", "Shared mailboxes support Full Access and Send As permissions"],
                        whyItMatters: "Resource and shared mailboxes streamline organizational workflows. Meeting room booking, team email management, and equipment scheduling are daily operations that improve efficiency when properly configured.",
                        commonMistakes: ["Assigning licenses to shared mailboxes unnecessarily", "Not configuring booking policies for room mailboxes", "Using shared mailboxes when M365 Groups would be more appropriate"],
                        interviewTips: ["Compare shared mailboxes, M365 Groups, and distribution lists", "Explain room mailbox booking policy configuration", "Describe how to convert a user mailbox to a shared mailbox"],
                        examTips: ["Know when shared mailboxes require a license (over 50GB or archive)", "Understand room mailbox booking policy options", "Be familiar with converting between mailbox types"],
                    },
                    trainerNotes: { talkingPoints: ["Demo room mailbox creation and booking policy", "Compare shared mailbox vs M365 Group"], realExamples: ["Conference room double-booking issue resolution", "Team needing shared email for customer inquiries"], questionsToAsk: ["When would you choose a shared mailbox over an M365 Group?"] },
                },
                {
                    id: "lesson-4-3", title: "Distribution Groups & M365 Groups", slug: "distribution-groups", duration: "25 mins",
                    content: {
                        explanation: ["Distribution groups send email to multiple recipients from a single address. They come in several types: distribution lists (static membership), mail-enabled security groups (supports permissions), and dynamic distribution groups (automatic membership based on attributes).", "Microsoft 365 Groups extend distribution group functionality with integrated SharePoint site, shared calendar, OneNote notebook, and Planner. They are the recommended group type for collaboration scenarios.", "Dynamic distribution groups automatically calculate membership based on recipient filters like department, location, or custom attributes. This eliminates manual membership management for large, attribute-based groups."],
                        keyPoints: ["Distribution lists have static, manually managed membership", "Dynamic distribution groups use attribute-based filters", "M365 Groups include SharePoint, OneNote, and Planner", "Mail-enabled security groups can be used for permissions and email", "Group naming policies enforce consistent naming conventions", "Expiration policies auto-delete inactive M365 Groups"],
                        whyItMatters: "Groups are the backbone of organizational communication. Choosing the right group type and configuring proper membership management reduces administrative overhead and improves collaboration.",
                        commonMistakes: ["Using distribution lists when M365 Groups provide better collaboration", "Not testing dynamic distribution group filters before deployment", "Forgetting to configure group naming and expiration policies"],
                        interviewTips: ["Compare all group types and recommend when to use each", "Explain dynamic distribution group filter syntax", "Discuss M365 Group governance and lifecycle management"],
                        examTips: ["Know the differences between all group types and their capabilities", "Understand dynamic distribution group recipient filter syntax", "Be familiar with M365 Group naming policy and expiration configuration"],
                    },
                    trainerNotes: { talkingPoints: ["Compare all group types side by side", "Demo dynamic distribution group creation"], realExamples: ["Auto-populating department distribution group", "M365 Group for project collaboration"], questionsToAsk: ["What group type would you use for a cross-functional project team?"] },
                },
                {
                    id: "lesson-4-4", title: "Mailbox Retention & Archive", slug: "retention-archive", duration: "25 mins",
                    content: {
                        explanation: ["Retention policies in Exchange Online control how long messages are kept and when they are automatically deleted. Retention tags can be applied at the folder level (default tags) or by users (personal tags) to customize retention per item.", "In-Place Archive (Online Archive) provides additional storage for older messages. Auto-expanding archive removes the storage limit, making it suitable for compliance scenarios requiring long-term message retention.", "Litigation Hold and In-Place Hold preserve all mailbox content, preventing users from permanently deleting messages. This is essential for legal discovery and compliance requirements."],
                        keyPoints: ["Retention policies combine retention tags into policies", "Default Policy Tags apply to entire mailbox or specific folders", "Personal tags let users apply retention to individual items", "In-Place Archive provides additional storage for older mail", "Auto-expanding archive removes archive size limits", "Litigation Hold preserves all mailbox data including deletions"],
                        whyItMatters: "Data retention is a legal and compliance requirement for most organizations. Proper retention policies ensure regulatory compliance while managing storage efficiently. Hold features are critical during legal proceedings.",
                        commonMistakes: ["Not planning retention policies before deployment, causing data loss", "Enabling Litigation Hold without understanding storage implications", "Confusing MRM retention policies with Microsoft Purview retention"],
                        interviewTips: ["Explain the components of a retention policy (tags, policies, assignment)", "Describe how Litigation Hold differs from retention policies", "Discuss compliance scenarios requiring In-Place Archive"],
                        examTips: ["Know the three types of retention tags: DPT, RPT, Personal", "Understand Litigation Hold vs In-Place Hold behavior", "Be familiar with auto-expanding archive requirements and limitations"],
                    },
                    trainerNotes: { talkingPoints: ["Demo retention policy creation in EAC", "Explain hold types and their differences"], realExamples: ["Legal team requiring message preservation for lawsuit", "Finance team needing 7-year email retention"], questionsToAsk: ["How would you implement a 3-year retention policy for the entire organization?"] },
                },
            ],
        },
        {
            id: "mod-migration",
            title: "Migration & Coexistence",
            slug: "migration-coexistence",
            description: "Plan and execute email migrations to Exchange Online including hybrid configurations.",
            icon: "Truck",
            duration: "2 hours",
            lessons: [
                {
                    id: "lesson-5-1", title: "Migration Methods Overview", slug: "migration-methods", duration: "30 mins",
                    content: {
                        explanation: ["Exchange Online supports several migration methods: cutover migration (all mailboxes at once), staged migration (batches from Exchange 2003/2007), hybrid migration (coexistence with on-premises), and IMAP migration (from third-party systems).", "Cutover migration is suitable for small organizations (under 2000 mailboxes) moving entirely from on-premises Exchange. All mailboxes, contacts, and distribution groups are migrated in a single batch.", "Hybrid migration provides the most seamless experience with shared namespace, free/busy lookups, and mailbox moves. It requires Hybrid Configuration Wizard (HCW) setup and Azure AD Connect for directory synchronization."],
                        keyPoints: ["Cutover: all mailboxes migrated at once (small orgs, <2000)", "Staged: batch migration from Exchange 2003/2007", "Hybrid: coexistence with on-premises Exchange", "IMAP: migration from third-party email systems", "PST Import: bulk import of PST files to Exchange Online", "Third-party tools for complex cross-platform migrations"],
                        architecture: { title: "Migration Decision Flow", steps: [{ step: 1, title: "Assess Source", description: "Identify current email platform" }, { step: 2, title: "Choose Method", description: "Select migration type based on requirements" }, { step: 3, title: "Prepare", description: "Configure prerequisites and test" }, { step: 4, title: "Execute", description: "Migrate mailboxes and validate" }] },
                        whyItMatters: "Choosing the wrong migration method can lead to extended downtime, data loss, and user frustration. Understanding each method's requirements and limitations is critical for successful Exchange Online adoption.",
                        commonMistakes: ["Choosing cutover migration for organizations with more than 2000 mailboxes", "Not planning for DNS changes and autodiscover routing during migration", "Underestimating the time needed for large-scale hybrid migrations"],
                        interviewTips: ["Compare migration methods and recommend based on scenarios", "Describe a complex migration you've planned or executed", "Discuss how to minimize user impact during migration"],
                        examTips: ["Know the mailbox limits and requirements for each migration type", "Understand hybrid migration prerequisites (HCW, AAD Connect, certificates)", "Be prepared for scenario questions asking which migration method to use"],
                    },
                    trainerNotes: { talkingPoints: ["Compare all migration methods with decision matrix", "Walk through migration planning checklist"], realExamples: ["Small company cutover migration weekend plan", "Enterprise hybrid migration over 6 months"], questionsToAsk: ["Which migration method would you choose for a 500-user organization on Gmail?"] },
                },
                {
                    id: "lesson-5-2", title: "Hybrid Exchange Configuration", slug: "hybrid-configuration", duration: "30 mins",
                    content: {
                        explanation: ["Hybrid Exchange configuration creates coexistence between on-premises Exchange Server and Exchange Online. The Hybrid Configuration Wizard (HCW) automates the setup of connectors, certificates, and federation trusts.", "Key hybrid features include free/busy sharing between cloud and on-premises users, cross-premises mailbox moves, unified GAL (Global Address List), and shared namespace with centralized mail routing.", "Azure AD Connect synchronizes on-premises Active Directory with Azure AD, enabling single sign-on and directory synchronization. Password hash sync or pass-through authentication provides seamless authentication."],
                        keyPoints: ["HCW automates hybrid configuration setup", "Requires Azure AD Connect for directory synchronization", "Shared namespace allows unified email routing", "Free/busy sharing works across environments", "Cross-premises mailbox moves use MRS (Mailbox Replication Service)", "OAuth authentication enables secure cross-premises communication"],
                        whyItMatters: "Hybrid Exchange is the most common enterprise deployment model, allowing gradual migration while maintaining full functionality. Understanding hybrid configuration is essential for enterprise messaging administrators.",
                        commonMistakes: ["Not running HCW updates after Exchange cumulative updates", "Misconfiguring OAuth authentication breaking cross-premises features", "Not planning certificate requirements for hybrid mail flow"],
                        interviewTips: ["Explain the components of a hybrid Exchange deployment", "Describe the HCW configuration process step by step", "Discuss troubleshooting common hybrid configuration issues"],
                        examTips: ["Know HCW prerequisites: certificates, DNS, firewall ports, Exchange version", "Understand the difference between classic hybrid and modern hybrid", "Be familiar with OAuth configuration for cross-premises features"],
                    },
                    trainerNotes: { talkingPoints: ["Walk through HCW setup process", "Explain classic vs modern hybrid"], realExamples: ["Enterprise deploying hybrid over 12-month timeline", "Troubleshooting free/busy failures in hybrid"], questionsToAsk: ["What are the prerequisites for running HCW?"] },
                },
                {
                    id: "lesson-5-3", title: "IMAP & Third-Party Migration", slug: "imap-migration", duration: "25 mins",
                    content: {
                        explanation: ["IMAP migration allows moving email from any IMAP-compatible email system (Gmail, Yahoo, custom IMAP servers) to Exchange Online. It migrates email messages only—contacts, calendar, and tasks must be migrated separately.", "The migration process involves creating a CSV file with user credentials, setting up a migration endpoint, creating a migration batch, and monitoring progress. Each batch can contain up to 50,000 mailboxes.", "For complex third-party migrations (Notes, GroupWise, other platforms), Microsoft-recommended third-party migration tools provide richer functionality including calendar, contact, and rule migration."],
                        keyPoints: ["IMAP migration supports any IMAP-compatible source system", "Only email messages are migrated (not calendar/contacts/tasks)", "CSV file maps source to destination accounts", "Migration endpoint defines source server connection", "Batch migration processes users in groups", "Third-party tools needed for non-IMAP systems"],
                        whyItMatters: "Many organizations migrate from diverse email platforms. IMAP migration provides a universal method for email migration, while understanding third-party tool options is important for complex multi-platform environments.",
                        commonMistakes: ["Expecting IMAP migration to include calendar and contacts", "Not pre-creating user accounts and licenses before migration", "Setting migration batch size too large causing throttling"],
                        interviewTips: ["Describe the complete IMAP migration process", "Explain how to handle calendar and contact migration from IMAP sources", "Discuss when to recommend third-party migration tools over native methods"],
                        examTips: ["Know what IMAP migration does and does not migrate", "Understand the CSV file format for IMAP migration batches", "Be familiar with migration endpoint configuration requirements"],
                    },
                    trainerNotes: { talkingPoints: ["Demo IMAP migration CSV setup", "Compare native vs third-party migration tools"], realExamples: ["Gmail to Exchange Online IMAP migration for 200 users", "Lotus Notes migration requiring third-party tool"], questionsToAsk: ["How would you migrate calendar data from Gmail to Exchange Online?"] },
                },
                {
                    id: "lesson-5-4", title: "Post-Migration Validation", slug: "post-migration", duration: "20 mins",
                    content: {
                        explanation: ["Post-migration validation ensures all data was migrated successfully and Exchange Online is functioning correctly. Key checks include mail flow testing, client configuration verification, and data completeness validation.", "DNS changes are the final cutover step—updating MX records to point to Exchange Online. This should be done during a planned maintenance window with monitoring. SPF, DKIM, and DMARC records must also be updated.", "User communication and training are critical for adoption. Provide guidance on accessing Outlook, OWA, and mobile clients. Address common questions about archive access, shared mailbox access, and distribution group management."],
                        keyPoints: ["Validate mail flow with test messages after DNS cutover", "Update MX, SPF, DKIM, and DMARC records", "Verify client auto-configuration via autodiscover", "Check mailbox data completeness (item counts, folder structure)", "Test shared mailbox and resource mailbox functionality", "Monitor message queues and delivery reports for issues"],
                        whyItMatters: "Incomplete validation after migration leads to undetected issues that frustrate users and damage IT credibility. Thorough post-migration checks ensure a smooth transition and rapid issue resolution.",
                        commonMistakes: ["Not updating SPF records after MX record changes", "Skipping client auto-configuration testing", "Not monitoring mail flow closely in the first 48 hours after cutover"],
                        interviewTips: ["Describe your post-migration validation checklist", "Explain how to handle post-migration mail flow issues", "Discuss user communication and training strategies for migration"],
                        examTips: ["Know the complete DNS change sequence for Exchange Online cutover", "Understand how to validate mail flow after MX record changes", "Be familiar with common post-migration issues and their resolutions"],
                    },
                    trainerNotes: { talkingPoints: ["Walk through post-migration checklist", "Show mail flow monitoring tools"], realExamples: ["Post-migration SPF failure causing external email bounces", "Users unable to connect Outlook after migration"], questionsToAsk: ["What DNS records need updating after migration to Exchange Online?"] },
                },
            ],
        },
        {
            id: "mod-public-folders",
            title: "Public Folders & Shared Resources",
            slug: "public-folders-shared",
            description: "Configure public folders, shared resources, and organizational sharing policies.",
            icon: "FolderOpen",
            duration: "1.5 hours",
            lessons: [
                {
                    id: "lesson-6-1", title: "Public Folders in Exchange Online", slug: "public-folders", duration: "25 mins",
                    content: {
                        explanation: ["Public folders provide a way to collect, organize, and share information with other people in your organization. They use a hierarchical structure and can contain email, calendar, contacts, and other item types.", "Exchange Online public folders use a modern architecture with content stored in public folder mailboxes. The hierarchy mailbox stores the public folder tree structure, while content mailboxes store the actual data.", "Public folders can be mail-enabled, allowing external and internal users to send email directly to a public folder address. This is useful for team discussions, project communications, and departmental information sharing."],
                        keyPoints: ["Public folder hierarchy stored in dedicated hierarchy mailbox", "Content distributed across multiple public folder mailboxes", "Mail-enabled public folders receive email like regular mailboxes", "Public folder permissions: Owner, Editor, Author, Reviewer", "Maximum size per public folder mailbox: 100GB", "Batch migration available for on-premises public folders to Exchange Online"],
                        whyItMatters: "While modern collaboration tools like Teams are replacing some public folder use cases, many organizations still rely on public folders for shared calendars, contact lists, and organizational information. Understanding their management is essential for Exchange administrators.",
                        commonMistakes: ["Creating too many public folder mailboxes without planning", "Not setting proper permissions leading to unauthorized access", "Ignoring public folder size limits causing mailbox splits"],
                        interviewTips: ["Explain the public folder architecture in Exchange Online", "Compare public folders with modern alternatives (Teams, SharePoint)", "Describe the process for migrating public folders from on-premises"],
                        examTips: ["Know public folder mailbox architecture (hierarchy vs content)", "Understand public folder permission levels and inheritance", "Be familiar with public folder migration batch requirements"],
                    },
                    trainerNotes: { talkingPoints: ["Explain modern public folder architecture", "Compare with Teams-based alternatives"], realExamples: ["Organization using shared calendars via public folders", "Migrating public folders from Exchange 2010 to Exchange Online"], questionsToAsk: ["Does your organization use public folders? For what purpose?"] },
                },
                {
                    id: "lesson-6-2", title: "Organization Sharing & Federation", slug: "org-sharing", duration: "25 mins",
                    content: {
                        explanation: ["Organization sharing allows Exchange Online users to share calendar free/busy information with users in other Exchange organizations. This is configured through organization relationships and sharing policies.", "Sharing policies define what calendar and contact information individual users can share with external recipients. Default sharing policies apply to all users, while custom policies can target specific groups.", "Federation trusts enable secure sharing between Exchange organizations using the Microsoft Federation Gateway. This provides authenticated sharing without requiring VPN or direct network connectivity."],
                        keyPoints: ["Organization relationships enable cross-organization free/busy sharing", "Sharing policies control what users can share externally", "Federation trust uses Microsoft Federation Gateway for authentication", "Individual sharing allows users to share calendar via links", "Availability address space configures free/busy lookup routing", "Sharing policies can be assigned per user or mailbox"],
                        whyItMatters: "Cross-organization collaboration requires calendar visibility. Properly configured sharing policies enable business partnerships while maintaining security boundaries and controlling what information leaves the organization.",
                        commonMistakes: ["Configuring sharing policies too permissively exposing detailed calendar info", "Not testing federation trust before enabling organization sharing", "Confusing organization relationships with sharing policies"],
                        interviewTips: ["Explain the difference between organization relationships and sharing policies", "Describe how federation trusts work in Exchange Online", "Discuss scenarios requiring cross-organization calendar sharing"],
                        examTips: ["Know how to configure organization relationships for free/busy sharing", "Understand sharing policy permission levels (free/busy only vs full details)", "Be familiar with federation trust configuration and requirements"],
                    },
                    trainerNotes: { talkingPoints: ["Demo organization relationship setup", "Explain sharing policy permission levels"], realExamples: ["Business partner needing free/busy visibility", "Law firm sharing calendar with client organization"], questionsToAsk: ["When would you need to configure an organization relationship?"] },
                },
                {
                    id: "lesson-6-3", title: "Address Book Policies & OAB", slug: "address-book-policies", duration: "20 mins",
                    content: {
                        explanation: ["Address Book Policies (ABPs) create virtual organizations within Exchange Online by controlling which recipients users can see in the Global Address List. This is useful for multi-tenant hosting, mergers, and organizational separation.", "The Offline Address Book (OAB) provides a downloadable copy of the address list for Outlook desktop clients, enabling address lookups when disconnected from the network.", "ABPs combine a Global Address List, Address Lists, Room Lists, and an OAB into a single policy that can be assigned to mailboxes, creating a segmented directory experience."],
                        keyPoints: ["ABPs create virtual directory separation within a single organization", "Each ABP includes GAL, Address Lists, Room List, and OAB", "ABPs are assigned per mailbox using Set-Mailbox cmdlet", "OAB provides offline address lookup for Outlook desktop", "Address list filters use recipient properties for membership", "ABPs do not provide security isolation, only visibility control"],
                        whyItMatters: "Organizations with multiple business units, acquired companies, or hosting scenarios need directory segmentation. ABPs provide a clean separation of address lists without requiring separate Exchange organizations.",
                        commonMistakes: ["Assuming ABPs provide security isolation (they only control visibility)", "Not creating all four components (GAL, AL, Room List, OAB) before creating ABP", "Forgetting to assign ABP to mailboxes after creation"],
                        interviewTips: ["Explain when and why you would implement Address Book Policies", "Describe the components required for an ABP", "Discuss the security limitations of ABPs"],
                        examTips: ["Know all four components required for an Address Book Policy", "Understand that ABPs are visibility-only, not security boundaries", "Be familiar with PowerShell commands for creating and assigning ABPs"],
                    },
                    trainerNotes: { talkingPoints: ["Walk through ABP component creation", "Explain security limitations clearly"], realExamples: ["Multi-brand company needing separate address lists", "Hosting provider separating tenant directories"], questionsToAsk: ["When would you need Address Book Policies?"] },
                },
            ],
        },
        {
            id: "mod-mobile-client",
            title: "Mobile & Client Access",
            slug: "mobile-client-access",
            description: "Manage mobile device access, Outlook configuration, and client connectivity policies.",
            icon: "Globe",
            duration: "1.5 hours",
            lessons: [
                {
                    id: "lesson-7-1", title: "Mobile Device Management for Exchange", slug: "mobile-device-mgmt", duration: "25 mins",
                    content: {
                        explanation: ["Exchange Online provides built-in mobile device management through Exchange ActiveSync (EAS) policies. These policies control device security settings like PIN requirements, encryption, and remote wipe capabilities.", "Mobile device access rules define which devices can connect to Exchange Online. Rules can allow, block, or quarantine devices based on device family, model, or operating system.", "For advanced mobile management, Microsoft Intune integrates with Exchange Online to provide app-level management, conditional access, and compliance policies beyond what EAS offers."],
                        keyPoints: ["ActiveSync policies control device PIN, encryption, and security", "Device access rules: Allow, Block, or Quarantine by device type", "Remote wipe removes Exchange data from lost/stolen devices", "ABQ (Allow/Block/Quarantine) list manages device access", "Intune provides advanced MDM beyond Exchange ActiveSync", "Outlook mobile supports modern authentication and app protection"],
                        whyItMatters: "Mobile email access is essential for modern workforces. Balancing accessibility with security through proper mobile device policies prevents data leaks from lost devices while enabling productivity on the go.",
                        commonMistakes: ["Not enabling mobile device access rules, allowing any device to connect", "Using only EAS policies when Intune would provide better management", "Forgetting to test remote wipe procedures before an actual incident"],
                        interviewTips: ["Compare Exchange ActiveSync management with Intune MDM capabilities", "Describe how to implement a mobile device access policy", "Discuss the remote wipe process and its implications"],
                        examTips: ["Know ActiveSync policy settings and their device requirements", "Understand device access rules and ABQ list behavior", "Be familiar with the difference between Exchange MDM and Intune MDM"],
                    },
                    trainerNotes: { talkingPoints: ["Compare EAS policies with Intune capabilities", "Demo mobile device access rules"], realExamples: ["Company requiring PIN and encryption on all mobile devices", "Lost phone requiring remote wipe of Exchange data"], questionsToAsk: ["What is the difference between a full wipe and an account wipe?"] },
                },
                {
                    id: "lesson-7-2", title: "Outlook & Client Configuration", slug: "outlook-client-config", duration: "25 mins",
                    content: {
                        explanation: ["Outlook connects to Exchange Online using autodiscover to automatically configure server settings, protocols, and features. Modern authentication (OAuth) has replaced basic authentication for improved security.", "Outlook Anywhere (RPC over HTTPS) and MAPI over HTTP are the protocols used for Outlook desktop connections. MAPI over HTTP is the preferred protocol, providing better performance and connection resilience.", "Outlook on the Web (OWA) provides full browser-based access to Exchange Online. OWA mailbox policies control feature availability like attachments, calendar access, and theme customization."],
                        keyPoints: ["Autodiscover automatically configures Outlook client settings", "Modern authentication (OAuth 2.0) required for all connections", "MAPI over HTTP is the preferred Outlook desktop protocol", "OWA mailbox policies control web client features", "Outlook profiles store account and configuration settings", "Cached Exchange Mode reduces bandwidth and improves offline access"],
                        whyItMatters: "Client connectivity issues are the most common user-facing problems in Exchange Online. Understanding authentication protocols, autodiscover, and client configuration is essential for rapid troubleshooting and user support.",
                        commonMistakes: ["Not blocking legacy authentication protocols (basic auth)", "Ignoring autodiscover configuration causing Outlook setup failures", "Not configuring OWA policies to restrict features for security"],
                        interviewTips: ["Explain how autodiscover works and troubleshoot failures", "Describe the difference between MAPI/HTTP and Outlook Anywhere", "Discuss modern authentication and the deprecation of basic auth"],
                        examTips: ["Know the autodiscover DNS record requirements and lookup process", "Understand modern authentication flow and OAuth token handling", "Be familiar with OWA mailbox policy settings and their effects"],
                    },
                    trainerNotes: { talkingPoints: ["Walk through autodiscover process", "Explain modern auth vs basic auth"], realExamples: ["Outlook failing to connect due to autodiscover misconfiguration", "Blocking basic auth to improve security posture"], questionsToAsk: ["How does Outlook find the correct Exchange server settings?"] },
                },
                {
                    id: "lesson-7-3", title: "IMAP, POP & SMTP Client Access", slug: "imap-pop-smtp", duration: "20 mins",
                    content: {
                        explanation: ["Exchange Online supports IMAP, POP3, and SMTP protocols for legacy client compatibility. IMAP provides server-side email access, POP3 downloads messages to the client, and SMTP AUTH handles authenticated email submission.", "These protocols can be enabled or disabled at the organization level and per mailbox. Due to security concerns, Microsoft recommends disabling legacy protocols and using modern authentication with Outlook or Graph API.", "SMTP AUTH is commonly used for devices and applications that need to send email (printers, scanners, LOB applications). It requires careful management as it's a common attack vector for compromised accounts."],
                        keyPoints: ["IMAP syncs folders and messages (server-side storage)", "POP3 downloads messages to client (client-side storage)", "SMTP AUTH enables authenticated email submission", "Legacy protocols can be disabled per mailbox or organization-wide", "SMTP relay options: direct send, SMTP AUTH, connector relay", "Security best practices: disable unnecessary legacy protocols"],
                        whyItMatters: "While modern clients use MAPI/HTTP, many line-of-business applications, devices, and third-party tools still require IMAP, POP, or SMTP access. Properly managing these protocols balances compatibility with security.",
                        commonMistakes: ["Leaving IMAP/POP enabled for all users when only specific mailboxes need it", "Not understanding the security implications of SMTP AUTH", "Using SMTP AUTH for applications when direct send would be more secure"],
                        interviewTips: ["Compare IMAP, POP, and SMTP use cases and security implications", "Describe SMTP relay options and when to use each", "Explain how to secure legacy protocol access in Exchange Online"],
                        examTips: ["Know how to enable/disable IMAP, POP, SMTP per mailbox", "Understand the three SMTP relay options and their requirements", "Be familiar with security best practices for legacy protocol management"],
                    },
                    trainerNotes: { talkingPoints: ["Compare all client protocols", "Demo per-mailbox protocol management"], realExamples: ["Multifunction printer needing SMTP relay setup", "Disabling POP3 organization-wide for security"], questionsToAsk: ["When would you enable IMAP access for a mailbox?"] },
                },
            ],
        },
        {
            id: "mod-monitoring",
            title: "Monitoring & Troubleshooting",
            slug: "monitoring-troubleshooting",
            description: "Monitor Exchange Online health, troubleshoot mail flow, and use reporting tools.",
            icon: "BarChart3",
            duration: "1.5 hours",
            lessons: [
                {
                    id: "lesson-8-1", title: "Message Trace & Mail Flow Troubleshooting", slug: "message-trace", duration: "25 mins",
                    content: {
                        explanation: ["Message trace is the primary troubleshooting tool for Exchange Online mail flow. It tracks messages through the transport pipeline and shows delivery status, routing, and any actions applied by policies.", "Message traces can be run for up to 90 days of history. Recent messages (within 4 hours) provide real-time detailed tracking, while historical traces may take longer to generate results.", "Common troubleshooting scenarios include undelivered messages, delayed delivery, messages caught by spam filters, transport rule actions, and connector routing issues."],
                        keyPoints: ["Message trace shows complete message journey through transport pipeline", "Real-time traces available for messages within last 4 hours", "Historical traces cover up to 90 days of message history", "Extended reports provide downloadable detailed trace data", "PowerShell: Get-MessageTrace and Get-MessageTraceDetail cmdlets", "Trace results show EOP verdicts, transport rule actions, and delivery status"],
                        architecture: { title: "Troubleshooting Workflow", steps: [{ step: 1, title: "Identify", description: "Gather sender, recipient, timeframe" }, { step: 2, title: "Trace", description: "Run message trace in EAC or PowerShell" }, { step: 3, title: "Analyze", description: "Review events, rules, and verdicts" }, { step: 4, title: "Resolve", description: "Fix policy, connector, or DNS issue" }] },
                        whyItMatters: "Message trace is the most frequently used tool for Exchange Online administrators. Every 'I didn't receive an email' ticket requires message trace skills. Proficiency in trace analysis directly correlates with faster incident resolution.",
                        commonMistakes: ["Not providing specific enough search criteria, getting too many results", "Confusing message trace timeframes (real-time vs historical)", "Not using Get-MessageTraceDetail for extended event information"],
                        interviewTips: ["Walk through your message trace troubleshooting process", "Describe how to interpret common message trace events", "Discuss how to handle situations where message trace shows delivered but user can't find the message"],
                        examTips: ["Know message trace search parameter requirements and limitations", "Understand the difference between real-time and historical trace results", "Be prepared for scenario questions requiring message trace interpretation"],
                    },
                    trainerNotes: { talkingPoints: ["Demo message trace in EAC", "Show PowerShell trace commands"], realExamples: ["User claiming email not received, trace shows spam quarantine", "Email delayed by transport rule processing"], questionsToAsk: ["How would you investigate a report of undelivered email?"] },
                },
                {
                    id: "lesson-8-2", title: "Exchange Online Reports & Analytics", slug: "reports-analytics", duration: "25 mins",
                    content: {
                        explanation: ["Exchange Online provides built-in reports covering mail flow, protection, and usage statistics. These reports help administrators identify trends, detect anomalies, and demonstrate service health to stakeholders.", "Mail flow reports include top senders and recipients, spam and malware statistics, mail flow status, and non-delivery report summaries. Protection reports cover threat detection, phishing attempts, and safe attachment activations.", "Microsoft 365 admin center provides organization-level usage reports including active user counts, mailbox storage usage, and email activity trends. These reports support capacity planning and license optimization."],
                        keyPoints: ["Mail flow dashboard shows real-time message volume and status", "Protection reports track spam, malware, and phishing trends", "Usage reports show active users, storage, and email activity", "Mailbox usage reports identify large mailboxes and growth trends", "Auto-forwarded messages report detects suspicious forwarding", "Reports exportable to CSV for further analysis"],
                        whyItMatters: "Proactive monitoring through reports prevents issues before they impact users. Usage reports support capacity planning and cost optimization, while protection reports demonstrate security posture to management.",
                        commonMistakes: ["Not regularly reviewing mail flow reports to catch trends early", "Ignoring auto-forwarding reports which can indicate compromised accounts", "Not using reports for capacity planning and license optimization"],
                        interviewTips: ["Describe the key Exchange Online reports you monitor regularly", "Explain how to use reports for proactive issue detection", "Discuss how reporting supports compliance and security auditing"],
                        examTips: ["Know the key reports available in Exchange Admin Center", "Understand how to use mail flow reports for troubleshooting", "Be familiar with usage reports for capacity planning"],
                    },
                    trainerNotes: { talkingPoints: ["Walk through key EAC reports", "Show how to identify security issues from reports"], realExamples: ["Detecting compromised account through auto-forwarding report", "Using storage reports for license optimization"], questionsToAsk: ["What reports would you check during a weekly health review?"] },
                },
                {
                    id: "lesson-8-3", title: "Service Health & Incident Management", slug: "service-health", duration: "20 mins",
                    content: {
                        explanation: ["Microsoft 365 Service Health dashboard provides real-time status of Exchange Online and other services. It shows active incidents, advisories, and planned maintenance that may affect your organization.", "Service health notifications can be configured to alert administrators via email when incidents are detected. Organizations should subscribe to relevant service health communications and integrate with their IT service management tools.", "When Exchange Online experiences issues, administrators should first check Service Health to determine if it's a Microsoft-side issue before troubleshooting locally. Understanding the difference between organization-specific issues and platform-wide incidents saves troubleshooting time."],
                        keyPoints: ["Service Health dashboard shows real-time Exchange Online status", "Incidents are platform-wide issues affecting multiple tenants", "Advisories provide information about service changes or minor issues", "Planned maintenance notifications for scheduled changes", "Service Health API enables programmatic monitoring integration", "Post-incident reviews (PIRs) explain root cause and remediation"],
                        whyItMatters: "Distinguishing between platform-wide Microsoft issues and organization-specific problems is critical for effective incident response. Checking Service Health should be the first step in any Exchange Online troubleshooting workflow.",
                        commonMistakes: ["Not checking Service Health before starting local troubleshooting", "Not subscribing to service health notifications for proactive alerts", "Ignoring post-incident reviews that often contain valuable prevention information"],
                        interviewTips: ["Describe your incident response process for Exchange Online issues", "Explain how you differentiate between Microsoft and organization issues", "Discuss how to communicate service outages to users and management"],
                        examTips: ["Know where to find Service Health in the Microsoft 365 admin center", "Understand the difference between incidents, advisories, and planned maintenance", "Be familiar with service health notification configuration options"],
                    },
                    trainerNotes: { talkingPoints: ["Show Service Health dashboard navigation", "Explain incident vs advisory differences"], realExamples: ["Exchange Online outage affecting mail delivery globally", "Planned maintenance causing temporary Outlook connectivity issues"], questionsToAsk: ["What is the first thing you check when users report Exchange issues?"] },
                },
            ],
        },
    ],
};
