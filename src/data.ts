export const PATH_DATA = [
  {
    id: 'path-1',
    title: 'Optimized All-in-One',
    subtitle: 'Path 1: Traditional AMS',
    status: 'LEGACY OPTION',
    statusColor: 'text-amber-400',
    dotColor: 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]',
    description: 'Focuses on administrative stability with everything under one roof. Less flexible UX but data remains strictly unified.',
    nodes: [
      {
        id: 'ams',
        role: 'All-in-One Database',
        icon: 'database',
        options: [
          { 
            name: 'Hivebrite', 
            url: 'https://hivebrite.com', 
            description: 'Legacy monolith. Feature rich but siloed data & ux. Very high cost for scaling.', 
            metric: '~$15k - $20k/yr',
            features: ['Alumni Network', 'Interactive Map', 'Job Board'],
            capabilities: {
              events: 'Yes (Native)', corporate: 'Yes', tiered: 'Yes', newsletter: 'Yes (Native)', cms: 'Yes (Native/API)', chapters: 'Yes (Sub-communities)', reporting: 'Yes', payments: 'Yes', donations: 'Yes', liveFeed: 'Yes'
            }
          },
          { 
            name: 'Higher Logic Thrive', 
            url: 'https://higherlogic.com', 
            description: 'Enterprise association platform. Very powerful community forums, but expensive and implementation-heavy.', 
            metric: '~$20k+/yr',
            features: ['Deep Association Logic', 'Advanced Discussions', 'Certifications'],
            capabilities: {
              events: 'Yes', corporate: 'Yes', tiered: 'Yes', newsletter: 'Yes', cms: 'Yes (WordPress plugin)', chapters: 'Yes (Advanced)', reporting: 'Yes', payments: 'Yes', donations: 'Yes', liveFeed: 'Yes (Discussions)'
            }
          },
          { 
            name: 'Glue Up', 
            url: 'https://glueup.com', 
            description: 'Premium global chapter management focusing heavily on events and networking.', 
            metric: '~$15.5k/yr',
            features: ['Speed Networking', 'Native QR Check-in', 'Virtual Event Sync'],
            capabilities: {
              events: 'Yes', corporate: 'Yes', tiered: 'Yes', newsletter: 'Yes', cms: 'Limited', chapters: 'Yes (Excellent)', reporting: 'Yes', payments: 'Yes', donations: 'Yes', liveFeed: 'Partial'
            }
          },
          { 
            name: 'MemberClicks', 
            url: 'https://memberclicks.com', 
            description: 'Personify ecosystem tool for mid-market groups with organizational tier structures.', 
            metric: '~$4.5k+/yr',
            features: ['Committee Management', 'Job Board', 'LMS Classroom'],
            capabilities: {
              events: 'Yes', corporate: 'Yes', tiered: 'Yes', newsletter: 'Yes', cms: 'Yes (Native CMS)', chapters: 'Yes', reporting: 'Yes', payments: 'Yes', donations: 'Yes', liveFeed: 'No'
            }
          }
        ]
      }
    ],
    notes: [
      { title: 'Data Centralization', icon: 'shield', desc: 'All records, from events to payments, live in one place.', color: 'text-amber-400' },
      { title: 'Monolithic Lock-in', icon: 'layout', desc: 'You are forced to use their built-in email/events tools even if they are lacking.', color: 'text-slate-400' }
    ]
  },
  {
    id: 'path-2',
    title: 'Engagement Hybrid',
    subtitle: 'Path 2: Community + CRM',
    status: 'VIABLE ALTERNATIVE',
    statusColor: 'text-blue-400',
    dotColor: 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]',
    description: 'A major upgrade in user experience focusing on community interaction alongside tiered billing.',
    nodes: [
      {
         id: 'hybrid-crm',
         role: 'The Brain & Wallet',
         icon: 'creditcard',
         options: [
           {
             name: 'Outseta',
             url: 'https://outseta.com',
             metric: '~$800/yr + 1% tx',
             description: 'Handles membership tiering, payments, and identity provisioning. Great as the foundation.',
             features: ['SSO Provider', 'Stripe Billing', 'Automated Workflows'],
             capabilities: {
               events: 'No (Use integrations)', corporate: 'No (Individual focused)', tiered: 'Yes', newsletter: 'Yes (Basic)', cms: 'Yes (Integrates well)', chapters: 'No', reporting: 'Yes', payments: 'Yes', donations: 'Yes (via Stripe links)', liveFeed: 'No'
             }
           },
           { 
             name: 'Join It', 
             url: 'https://joinit.com', 
             description: 'Billing focused. Great native integration with Eventbrite.', 
             metric: '~$1k/yr + 2% tx',
             features: ['Eventbrite Sync', 'Automated Billing'],
             capabilities: {
               events: 'Yes (via Eventbrite)', corporate: 'Yes', tiered: 'Yes', newsletter: 'Partial (Mailchimp sync)', cms: 'Yes (Embeds)', chapters: 'Partial', reporting: 'Yes', payments: 'Yes', donations: 'Yes', liveFeed: 'No'
             }
           },
           { 
             name: 'Salesforce (NPSP)', 
             url: 'https://salesforce.com', 
             description: 'Enterprise CRM. Extremely powerful but requires a dedicated admin or consulting partner to maintain.', 
             metric: 'Free (Licenses) + High Dev Cost',
             features: ['Limitless Logic', 'Deep Integrations', 'Custom Objects'],
             capabilities: {
               events: 'Partial (AppExchange)', corporate: 'Yes', tiered: 'Yes', newsletter: 'Partial (Marketing Cloud)', cms: 'Yes', chapters: 'Yes', reporting: 'Yes (Extreme)', payments: 'Partial (AppExchange)', donations: 'Yes', liveFeed: 'No'
             }
           }
         ]
      },
      {
         id: 'hybrid-community',
         role: 'Engagement Workspace',
         icon: 'messagesquare',
         options: [
           {
             name: 'Circle',
             url: 'https://circle.so',
             metric: '~$1k - $2k/yr',
             description: 'World-class community interaction organized into specific spaces or feeds for robust engagement.',
             features: ['Structured Spaces', 'Course Hosting', 'Live Streams'],
             capabilities: {
               events: 'Yes (Native)', corporate: 'No', tiered: 'Yes (Paywalls)', newsletter: 'Partial (Digest)', cms: 'Yes (SSO)', chapters: 'Yes (Spaces)', reporting: 'Yes', payments: 'Yes (Stripe)', donations: 'No', liveFeed: 'Yes (Excellent)'
             }
           },
           { 
             name: 'Mighty Networks', 
             url: 'https://mightynetworks.com', 
             description: 'Social network model with native courses. Heavy mobile app focus.', 
             metric: '~$1.2k - $4.2k/yr',
             features: ['Social Network Model', 'AI Co-Host'],
             capabilities: {
               events: 'Yes', corporate: 'No', tiered: 'Yes', newsletter: 'Partial', cms: 'No (Standalone)', chapters: 'Yes (Groups)', reporting: 'Yes', payments: 'Yes', donations: 'No', liveFeed: 'Yes (Excellent)'
             }
           },
           { 
             name: 'Higher Logic (Community)', 
             url: 'https://higherlogic.com', 
             description: 'Standalone enterprise community solution for associations. Classic forums and resource libraries.', 
             metric: '~$10k+/yr',
             features: ['Deep Association Logic', 'Automated Engagement', 'Resource Library'],
             capabilities: {
               events: 'Yes', corporate: 'Yes', tiered: 'N/A', newsletter: 'Yes (Automated campaigns)', cms: 'Yes', chapters: 'Yes', reporting: 'Yes', payments: 'No', donations: 'No', liveFeed: 'Yes (Discussions)'
             }
           }
         ]
      }
    ],
    notes: [
      { title: 'Two-Platform Setup', icon: 'layers', desc: 'Easier to maintain than a full modular stack.', color: 'text-blue-400' },
      { title: 'Community-Led', icon: 'users', desc: 'Shifts organizational focus to member-to-member interactions.', color: 'text-emerald-400' }
    ]
  },
  {
    id: 'path-3',
    title: 'Best-of-Breed "Super App"',
    subtitle: 'Path 3: Modular Ecosystem',
    status: 'RECOMMENDED • PHASE 1',
    statusColor: 'text-emerald-400',
    dotColor: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]',
    description: 'Fully white-labeled, hyper-engaged architecture. Decouples administrative functions from member-facing layers.',
    nodes: [
      {
        id: 'website',
        role: 'The Front Door (CMS)',
        icon: 'globe',
        options: [
          {
            name: 'WordPress',
            url: 'https://wordpress.org',
            metric: 'Variable ($300+/yr)',
            description: 'The standardCMS with endless plugins. Highly customizable for association needs.',
            features: ['Massive Plugin Ecosystem', 'Roles & Caps'],
            capabilities: {
               events: 'Yes (Plugins)', corporate: 'Yes (Plugins)', tiered: 'Yes (Plugins)', newsletter: 'Yes (Plugins)', cms: 'Yes (Native)', chapters: 'Yes (Multisite/Plugins)', reporting: 'Yes', payments: 'Yes (WooCommerce)', donations: 'Yes (GiveWP)', liveFeed: 'Partial (BuddyPress)'
            }
          },
          {
            name: 'Ghost CMS',
            url: 'https://ghost.org',
            metric: '~$300/yr Pro',
            description: 'SEO-optimized, blazing fast, and professional. Lean alternative to WP.',
            features: ['Member Login', 'Public Archive', 'Fast Loading'],
             capabilities: {
               events: 'No', corporate: 'No', tiered: 'Yes (Stripe)', newsletter: 'Yes (Native)', cms: 'Yes (Native)', chapters: 'No', reporting: 'Yes (Basic)', payments: 'Yes (Stripe)', donations: 'Yes (Tiers)', liveFeed: 'No'
             }
          },
          { 
            name: 'Webflow', 
            url: 'https://webflow.com', 
            description: 'Visual dev, higher learning curve but unmatched aesthetics.', 
            metric: '~$400/yr',
            features: ['Visual Dev', 'CMS Collections'],
             capabilities: {
               events: 'No', corporate: 'No', tiered: 'Partial', newsletter: 'No', cms: 'Yes', chapters: 'No', reporting: 'No', payments: 'Yes (E-com)', donations: 'Yes', liveFeed: 'No'
             }
          }
        ]
      },
      {
        id: 'crm',
        role: 'The Core Hub (CRM)',
        icon: 'database',
        options: [
          {
            name: 'Outseta',
            url: 'https://outseta.com',
            metric: '~$800/yr + 1% tx',
            description: 'Centralized CRM, billing, and auth (SSO) bridging your website and community.',
            features: ['Auto-Renewals', 'Stripe Integration', 'Single Sign-On'],
             capabilities: {
               events: 'No', corporate: 'No', tiered: 'Yes', newsletter: 'Yes (Basic)', cms: 'Yes (SSO)', chapters: 'No', reporting: 'Yes', payments: 'Yes', donations: 'Partial', liveFeed: 'No'
             }
          },
          { 
            name: 'Salesforce (NPSP)', 
            url: 'https://salesforce.com', 
            description: 'The ultimate enterprise source of truth, integrated via API / Zapier.', 
            metric: 'Custom ($$$)',
            features: ['Enterprise API', 'Custom Data Models'],
             capabilities: {
               events: 'Partial', corporate: 'Yes', tiered: 'Yes', newsletter: 'Partial', cms: 'No', chapters: 'Yes', reporting: 'Yes (Advanced)', payments: 'Partial', donations: 'Yes', liveFeed: 'No'
             }
          },
          { 
            name: 'Join It', 
            url: 'https://joinit.com', 
            description: 'Billing focused with Eventbrite sync. Easier setup.', 
            metric: '~$1k/yr + 2% tx',
            features: ['Automated Billing', 'Digital Cards'],
             capabilities: {
               events: 'Yes (Eventbrite)', corporate: 'Yes', tiered: 'Yes', newsletter: 'Partial', cms: 'Partial', chapters: 'Partial', reporting: 'Yes', payments: 'Yes', donations: 'Yes', liveFeed: 'No'
             }
          }
        ]
      },
      {
        id: 'community',
        role: 'Member Engagement',
        icon: 'messagesquare',
        options: [
          {
            name: 'Circle',
            url: 'https://circle.so',
            metric: '~$1k - $2k/yr',
            description: 'The "LinkedIn-like" experience. Gated spaces for chapters, mentorship, and professional networking.',
            features: ['Chapter Spaces', 'Member Directory', 'Direct Messaging'],
             capabilities: {
               events: 'Yes', corporate: 'No', tiered: 'Yes (Spaces)', newsletter: 'Partial', cms: 'Yes (Embed)', chapters: 'Yes', reporting: 'Yes', payments: 'Yes', donations: 'No', liveFeed: 'Yes (Excellent)'
             }
          },
          { 
            name: 'Mighty Networks', 
            url: 'https://mightynetworks.com', 
            description: 'Social network model + community courses. Deep mobile integration.', 
            metric: '~$1.2k - $4.2k/yr',
            features: ['Activity Feeds', 'Premium Groups'],
             capabilities: {
               events: 'Yes', corporate: 'No', tiered: 'Yes', newsletter: 'Partial', cms: 'No', chapters: 'Yes', reporting: 'Yes', payments: 'Yes', donations: 'No', liveFeed: 'Yes'
             }
          },
          { 
            name: 'Higher Logic (Community)', 
            url: 'https://higherlogic.com', 
            description: 'Standalone community tier, standard for massive associations.', 
            metric: '~$10k+/yr',
            features: ['Deep Association Logic', 'Automated Engagement'],
            capabilities: {
               events: 'Yes', corporate: 'Yes', tiered: 'N/A', newsletter: 'Yes (Automated campaigns)', cms: 'Yes', chapters: 'Yes', reporting: 'Yes', payments: 'No', donations: 'No', liveFeed: 'Yes (Discussions)'
             }
          }
        ]
      },
      {
        id: 'newsletter',
        role: 'The Megaphone',
        icon: 'mail',
        options: [
          {
            name: 'Beehiiv',
            url: 'https://beehiiv.com',
            metric: '~$500/yr (Scale)',
            description: 'World-class newsletter tool. Handles custom branding and member-segmented communications.',
            features: ['Referral Program', 'Premium Segments'],
             capabilities: {
               events: 'No', corporate: 'No', tiered: 'Yes', newsletter: 'Yes (Excellent)', cms: 'No', chapters: 'Partial (Segments)', reporting: 'Yes', payments: 'Yes', donations: 'No', liveFeed: 'No'
             }
          },
          { 
            name: 'Mailchimp', 
            url: 'https://mailchimp.com', 
            description: 'Classic marketing marketing platform. Higher scaling costs.', 
            metric: 'Variable/High',
            features: ['Complex Journeys', 'Visual Editor'],
             capabilities: {
               events: 'No', corporate: 'No', tiered: 'No', newsletter: 'Yes (Excellent)', cms: 'Yes (Integrations)', chapters: 'Partial', reporting: 'Yes', payments: 'No', donations: 'No', liveFeed: 'No'
             }
          }
        ]
      },
      {
        id: 'events',
        role: 'Events Engine',
        icon: 'calendar',
        options: [
          {
            name: 'Luma',
            url: 'https://lu.ma',
            metric: '~$700/yr (Plus)',
            description: 'Beautiful event pages with integrated RSVPs and SMS reminders. Much cleaner than standard AMS events.',
            features: ['QR Check-ins', 'Member-Only Tickets'],
             capabilities: {
               events: 'Yes (Excellent)', corporate: 'No', tiered: 'Yes', newsletter: 'Yes (Event comms)', cms: 'Yes (Embeds)', chapters: 'Yes (Calendars)', reporting: 'Yes', payments: 'Yes', donations: 'Yes', liveFeed: 'No'
             }
          },
          { 
            name: 'Eventbrite', 
            url: 'https://eventbrite.com', 
            description: 'Industry standard for event discovery, high ticket booking fees.', 
            metric: 'Per Ticket Fee',
            features: ['Global Discovery', 'Seating Maps'],
             capabilities: {
               events: 'Yes (Excellent)', corporate: 'No', tiered: 'Yes', newsletter: 'Yes (Event comms)', cms: 'Yes (Embeds)', chapters: 'No', reporting: 'Yes', payments: 'Yes', donations: 'Yes', liveFeed: 'No'
             }
          },
          { 
            name: 'Cvent', 
            url: 'https://cvent.com', 
            description: 'Enterprise event & large conference management.', 
            metric: 'Enterprise',
            features: ['Hotel Blocks', 'Complex Registration', 'Sponsor Booths'],
             capabilities: {
               events: 'Yes (Enterprise)', corporate: 'Yes', tiered: 'Yes', newsletter: 'Yes', cms: 'Yes', chapters: 'Yes', reporting: 'Yes', payments: 'Yes', donations: 'Yes', liveFeed: 'No'
             }
          }
        ]
      }
    ],
    notes: [
      { title: 'API Driven', icon: 'zap', desc: 'Each tool connects via Make.com or native APIs, acting as one seamless product.', color: 'text-purple-400' },
      { title: 'Unmatched UX', icon: 'smartphone', desc: 'Members get consumer-grade experiences across events, content, and networking.', color: 'text-emerald-400' }
    ]
  }
];

export const NO_GO_OPTIONS = [
  {
    name: 'Wild Apricot',
    url: 'https://wildapricot.com',
    role: 'All-in-One Database',
    description: 'Budget-optimized database focused on administration. Lacks organizational hierarchy for true chapter management with separate distinct admins, making it unsuitable for ACAP.',
    metric: '~$5k - $6k/yr',
    features: ['Outdated UI', 'No distinct sub-admin roles', 'Rigid Data structure'],
    capabilities: {
      events: 'Yes',
      corporate: 'Yes (Clunky)',
      tiered: 'Yes',
      newsletter: 'Yes (Basic)',
      cms: 'Yes (Native Website)',
      chapters: 'No (Dealbreaker)',
      reporting: 'Yes',
      payments: 'Yes',
      donations: 'Yes',
      liveFeed: 'No'
    }
  },
  {
    name: 'YourMembership',
    url: 'https://yourmembership.com',
    role: 'Legacy AMS',
    description: 'A traditional legacy association management system. Suffers from outdated interfaces and poor modern integration capabilities compared to newer suites.',
    metric: '~$10k+/yr',
    features: ['Lock-in ecosystem', 'Poor API', 'High support dependency'],
    capabilities: {
      events: 'Yes',
      corporate: 'Yes',
      tiered: 'Yes',
      newsletter: 'Yes',
      cms: 'Yes',
      chapters: 'Yes',
      reporting: 'Yes',
      payments: 'Yes',
      donations: 'Yes',
      liveFeed: 'Yes (Basic)'
    }
  }
];

export const STANDARD_FEATURES = [
  { id: 'events', label: 'Event organization' },
  { id: 'corporate', label: 'Corporate memberships' },
  { id: 'tiered', label: 'Tiered pricing (memberships & events)' },
  { id: 'newsletter', label: 'Newsletter & communication' },
  { id: 'cms', label: 'Web CMS integration (WordPress)' },
  { id: 'chapters', label: 'Chapter management (separate admins)' },
  { id: 'reporting', label: 'Reporting on current membership' },
  { id: 'payments', label: 'Payment processing & invoices' },
  { id: 'donations', label: 'Donation collecting' },
  { id: 'liveFeed', label: 'Live feed' }
];

