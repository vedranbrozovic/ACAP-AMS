import React, { useState } from 'react';
import { 
  Users, 
  Database, 
  Zap, 
  Layout, 
  Smartphone, 
  CreditCard, 
  Mail, 
  Calendar, 
  MessageSquare,
  ChevronRight,
  ShieldCheck,
  Globe,
  Layers,
  GitBranch,
  GitMerge,
  Box,
  ExternalLink
} from 'lucide-react';

const PATH_DATA = [
  {
    id: 'path-1',
    title: 'Optimized All-in-One',
    subtitle: 'Path 1: Traditional AMS',
    status: 'LEGACY OPTION',
    statusColor: 'text-amber-400',
    dotColor: 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]',
    description: 'Focuses on cost minimization and administrative stability. Best for traditional, database-centric operations.',
    nodes: [
      {
        id: 'ams',
        role: 'All-in-One Database',
        icon: 'database',
        options: [
          {
            name: 'Wild Apricot',
            url: 'https://wildapricot.com',
            metric: '~$5k - $6k/yr',
            description: 'Budget-optimized database focused on administration over engagement. Great for basic filing cabinet functions.',
            features: ['Automated Renewals', 'Event Registration', 'Website Builder']
          },
          { 
            name: 'Hivebrite', 
            url: 'https://hivebrite.com', 
            description: 'Current legacy monolith. Feature rich but siloed data & ux. High cost for scaling.', 
            metric: '~$15k/yr',
            features: ['Alumni Network', 'Interactive Map', 'Mentorship Module', 'Job Board']
          },
          { 
            name: 'Glue Up', 
            url: 'https://glueup.com', 
            description: 'Premium global chapter management focusing on events. Very formal structure.', 
            metric: '~$15.5k/yr',
            features: ['Speed Networking', 'Native QR Check-in', 'Virtual Event Sync']
          },
          { 
            name: 'MemberClicks', 
            url: 'https://memberclicks.com', 
            description: 'Personify ecosystem tool for mid-market groups with organizational tier structures.', 
            metric: '~$4.5k+/yr',
            features: ['Committee Management', 'Job Board', 'LMS Classroom']
          }
        ]
      }
    ],
    notes: [
      { title: 'Cost Efficiency', icon: 'shield', desc: 'Costs less than $6,000 per year with highly reliable data management.', color: 'text-amber-400' },
      { title: 'Monolithic Lock-in', icon: 'layout', desc: 'Engagement features are dated and difficult to upgrade without waiting for vendor roadmaps.', color: 'text-slate-400' }
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
             description: 'Handles the membership tiering, payments, and identity provisioning, acting as the foundation.',
             features: ['SSO Provider', 'Stripe Billing', 'Automated Workflows']
           },
           { 
             name: 'Join It', 
             url: 'https://joinit.com', 
             description: 'Native digital wallet cards and check-in. Eventbrite sync.', 
             metric: '~$1k/yr + 2% tx',
             features: ['Eventbrite Sync', 'Digital Wallet Cards', 'Automated Billing']
           },
           { 
             name: 'Memberstack', 
             url: 'https://memberstack.com', 
             description: 'Web integration focused (mostly Webflow) but great for gated portals.', 
             metric: '~$800/yr',
             features: ['Webflow Integration', 'Gated Content', 'Stripe Sync']
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
             features: ['Structured Spaces', 'Course Hosting', 'Direct Messaging', 'Live Streams']
           },
           { 
             name: 'Mighty Networks', 
             url: 'https://mightynetworks.com', 
             description: 'Social network model with native courses. Heavy mobile app focus.', 
             metric: '~$1.2k - $4.2k/yr',
             features: ['Social Network Model', 'Native Courses', 'AI Co-Host']
           },
           { 
             name: 'Tradewing', 
             url: 'https://tradewing.com', 
             description: 'B2B industry association engagement layer. Formal standard.', 
             metric: 'Custom Pricing',
             features: ['B2B Networking', 'Always-on Engagement', 'Sponsor Management']
           }
         ]
      }
    ],
    notes: [
      { title: 'Two-Platform Setup', icon: 'layers', desc: 'Significantly easier to maintain than a full modular stack, but typically requires using unbranded mobile apps.', color: 'text-blue-400' },
      { title: 'Community-Led', icon: 'users', desc: 'Shifts organizational focus away from administrative "busywork" directly to member-to-member interactions.', color: 'text-emerald-400' }
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
        role: 'The Front Door',
        icon: 'globe',
        options: [
          {
            name: 'Ghost CMS',
            url: 'https://ghost.org',
            metric: '~$300/yr Pro',
            description: 'Your public face. SEO-optimized, blazing fast, and professional. Replaces Hivebrite\'s basic CMS.',
            features: ['Member Login', 'Public Archive', 'SEO Management', 'Fast Loading']
          },
          { 
            name: 'WordPress', 
            url: 'https://wordpress.org', 
            description: 'Legacy standard, massive plugin ecosystem. Heavy, requires hosting.', 
            metric: 'Variable Cost',
            features: ['Massive Plugin Ecosystem', 'Custom Themes', 'Granular Roles']
          },
          { 
            name: 'Webflow', 
            url: 'https://webflow.com', 
            description: 'Visual dev, higher learning curve but great design and animations.', 
            metric: '~$400/yr',
            features: ['Visual Dev', 'CMS Collections', 'Custom Animation']
          }
        ]
      },
      {
        id: 'crm',
        role: 'The Core Hub',
        icon: 'database',
        options: [
          {
            name: 'Outseta',
            url: 'https://outseta.com',
            metric: '~$800/yr + 1% tx',
            description: 'Centralized CRM and billing. Handles memberships, automated renewals, and authentication (SSO).',
            features: ['Auto-Renewals', 'Stripe Integration', 'Single Sign-On']
          },
          { 
            name: 'Join It', 
            url: 'https://joinit.com', 
            description: 'Billing focused with Eventbrite sync. Easier setup.', 
            metric: '~$1k/yr + 2% tx',
            features: ['Automated Billing', 'Digital Cards', 'Eventbrite Sync']
          },
          { 
            name: 'Stripe Billing', 
            url: 'https://stripe.com/billing', 
            description: 'Direct raw stripe integration. Requires development but no extra CRM fees.', 
            metric: 'Pay-as-you-go',
            features: ['Advanced Subscriptions', 'Invoicing', 'Payment Portal']
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
            features: ['Chapter Spaces', 'Member Directory', 'Direct Messaging']
          },
          { 
            name: 'Mighty Networks', 
            url: 'https://mightynetworks.com', 
            description: 'Social network model + community courses. Deep mobile integration.', 
            metric: '~$1.2k - $4.2k/yr',
            features: ['Activity Feeds', 'Premium Groups', 'AI moderation']
          },
          { 
            name: 'RallyBoard', 
            url: 'https://rallyboard.com', 
            description: 'Mentorship and cohort focused platform if general feed is unwanted.', 
            metric: 'Custom',
            features: ['AI Matching', 'Cohorts', 'Outcome tracking']
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
            features: ['Referral Program', 'Premium Segments', 'Deep Analytics']
          },
          { 
            name: 'Ghost News', 
            url: 'https://ghost.org', 
            description: 'Built-in email layer of Ghost CMS. Simple but effective.', 
            metric: 'Included in CMS',
            features: ['Native Integration', 'Clean Editor', 'Open-rate Tracking']
          },
          { 
            name: 'Mailchimp', 
            url: 'https://mailchimp.com', 
            description: 'Classic marketing marketing platform. Higher scaling costs.', 
            metric: 'Variable/High',
            features: ['Complex Journeys', 'Legacy Integrations', 'Visual Editor']
          }
        ]
      },
      {
        id: 'events',
        role: 'The Calendar',
        icon: 'calendar',
        options: [
          {
            name: 'Luma',
            url: 'https://lu.ma',
            metric: '~$700/yr (Plus)',
            description: 'Beautiful event pages with integrated RSVPs and SMS reminders. Much cleaner than standard AMS events.',
            features: ['QR Check-ins', 'Member-Only Tickets', 'Calendar Sync']
          },
          { 
            name: 'Eventbrite', 
            url: 'https://eventbrite.com', 
            description: 'Industry standard for event discovery, high ticket booking fees.', 
            metric: 'Per Ticket Fee',
            features: ['Global Discovery', 'Easy Payouts', 'Seating Maps']
          },
          { 
            name: 'Cvent', 
            url: 'https://cvent.com', 
            description: 'Enterprise event & large conference management.', 
            metric: 'Enterprise',
            features: ['Hotel Blocks', 'Complex Registration', 'Sponsor Booths']
          }
        ]
      }
    ],
    notes: [
      { title: 'Security & SSO', icon: 'shield', desc: 'Authentication handled via IdP cascades to Ghost, Circle, and Luma, providing a unified member login.', color: 'text-emerald-400' },
      { title: 'Automation Layer', icon: 'zap', desc: 'Make.com ensures data parity. CRM updates trigger immediate changes in Beehiiv and Circle access permissions.', color: 'text-amber-400' }
    ]
  }
];

const getIconComponent = (iconName: string, className: string = "") => {
  switch(iconName) {
    case 'database': return <Database className={className} size={24} />;
    case 'globe': return <Globe className={className} size={24} />;
    case 'messagesquare': return <MessageSquare className={className} size={24} />;
    case 'mail': return <Mail className={className} size={24} />;
    case 'calendar': return <Calendar className={className} size={24} />;
    case 'creditcard': return <CreditCard className={className} size={24} />;
    case 'shield': return <ShieldCheck className={className} size={14} />;
    case 'zap': return <Zap className={className} size={14} />;
    case 'users': return <Users className={className} size={14} />;
    case 'layout': return <Layout className={className} size={14} />;
    case 'layers': return <Layers className={className} size={14} />;
    default: return <Box className={className} size={24} />;
  }
};

const getThemeColorClass = (id: string) => {
  switch(id) {
    case 'ams': return 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30';
    case 'hybrid-crm': return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30';
    case 'hybrid-community': return 'text-blue-500 bg-blue-500/10 border-blue-500/30';
    case 'website': return 'text-orange-500 bg-orange-500/10 border-orange-500/30';
    case 'crm': return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30';
    case 'community': return 'text-blue-500 bg-blue-500/10 border-blue-500/30';
    case 'newsletter': return 'text-purple-500 bg-purple-500/10 border-purple-500/30';
    case 'events': return 'text-rose-500 bg-rose-500/10 border-rose-500/30';
    default: return 'text-slate-400 bg-slate-800 border-slate-700';
  }
};

const getThemeTextClass = (id: string) => {
   switch(id) {
    case 'ams': return 'text-cyan-400';
    case 'hybrid-crm': return 'text-emerald-400';
    case 'hybrid-community': return 'text-blue-400';
    case 'website': return 'text-orange-400';
    case 'crm': return 'text-emerald-400';
    case 'community': return 'text-blue-400';
    case 'newsletter': return 'text-purple-400';
    case 'events': return 'text-rose-400';
    default: return 'text-blue-400';
  }
};

const getThemeDotClass = (id: string) => {
   switch(id) {
    case 'ams': return 'bg-cyan-500';
    case 'hybrid-crm': return 'bg-emerald-500';
    case 'hybrid-community': return 'bg-blue-500';
    case 'website': return 'bg-orange-500';
    case 'crm': return 'bg-emerald-500';
    case 'community': return 'bg-blue-500';
    case 'newsletter': return 'bg-purple-500';
    case 'events': return 'bg-rose-500';
    default: return 'bg-blue-500';
  }
};

const App = () => {
  const [activePathId, setActivePathId] = useState('path-3');
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [nodeSelections, setNodeSelections] = useState<Record<string, number>>({});

  const activePath = PATH_DATA.find(p => p.id === activePathId) || PATH_DATA[2];
  const activeNode = activeNodeId ? activePath.nodes.find(n => n.id === activeNodeId) || null : null;

  const handlePathChange = (id: string) => {
    setActivePathId(id);
    setActiveNodeId(null);
  };

  const getSelectedOption = (node: any) => {
    if (!node) return null;
    return node.options[nodeSelections[node.id] || 0];
  };

  const activeOption = activeNode ? getSelectedOption(activeNode) : null;

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 p-6 md:p-10 font-sans flex flex-col">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-8 border-l-4 border-blue-500 pl-6">
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-white uppercase leading-none">ACAP Architecture 2026</h1>
            <p className="text-slate-400 mt-2 text-lg font-medium">Strategic Path Evaluation & Visualization</p>
          </div>
          <div className="text-left md:text-right">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Status</span>
            <div className={`flex items-center gap-2 ${activePath.statusColor} font-bold`}>
              <div className={`w-2 h-2 rounded-full ${activePath.dotColor}`}></div>
              {activePath.status}
            </div>
          </div>
        </header>

        {/* Core Architecture Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {PATH_DATA.map(p => (
            <button
              key={p.id}
              onClick={() => handlePathChange(p.id)}
              className={`p-4 rounded-2xl text-left border flex flex-col gap-1 transition-all ${
                activePathId === p.id 
                ? 'bg-slate-800/80 border-slate-600 shadow-lg ring-1 ring-slate-600' 
                : 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50'
              }`}
            >
               <span className={`text-[10px] uppercase font-bold tracking-widest ${activePathId === p.id ? 'text-white' : 'text-slate-500'}`}>
                 {p.subtitle}
               </span>
               <span className="text-lg font-black text-white">{p.title}</span>
            </button>
          ))}
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: The Map */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex-1 bg-slate-800/40 rounded-3xl border border-slate-700/50 relative overflow-hidden p-8 flex flex-col min-h-[480px]">
              
              {/* Contextual Badges based on Path */}
              {activePathId === 'path-3' && (
                <div className="absolute top-6 left-6 z-30">
                  <div className="flex items-center gap-2 bg-slate-900/90 px-4 py-1.5 rounded-full border border-slate-600">
                    <Zap size={14} className="text-amber-400 fill-amber-400" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white">Automation: Make.com</span>
                  </div>
                </div>
              )}

              {/* Dynamic Map Visualization Container */}
              <div className="relative w-full h-full flex flex-col items-center justify-center py-20 flex-1">
                
                {/* --- PATH 1: ALL-IN-ONE SYSTEM --- */}
                {activePathId === 'path-1' && (
                  <div className="relative flex items-center justify-center w-full h-full">
                     <div className="absolute w-[360px] h-[360px] border-4 border-slate-800 rounded-[40px] z-0 flex items-center justify-center">
                        <div className="absolute top-4 text-slate-700 uppercase font-black text-4xl opacity-10 tracking-widest">MONOLITH</div>
                     </div>
                     
                     <div 
                        onClick={() => setActiveNodeId(activePath.nodes[0].id)}
                        className={`relative z-20 w-56 h-56 rounded-full bg-slate-900 border-4 shadow-[0_0_60px_rgba(6,182,212,0.1)] flex flex-col items-center justify-center text-center p-6 cursor-pointer transition-all ${
                          activeNodeId === 'ams' ? 'border-cyan-400 ring-8 ring-cyan-400/20 scale-105' : 'border-cyan-600 hover:border-cyan-400'
                        }`}
                      >
                        {getIconComponent('database', 'mb-3 text-cyan-500 !w-12 !h-12')}
                        <span className="text-xl sm:text-2xl font-black text-white leading-tight uppercase text-center">{getSelectedOption(activePath.nodes[0])?.name}</span>
                        <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mt-1 text-center">All-in-One Database</span>
                     </div>
                  </div>
                )}

                {/* --- PATH 2: HYBRID DUMBBELL --- */}
                {activePathId === 'path-2' && (
                  <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 w-full h-full">
                     
                     {/* Data Bridge */}
                     <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-3 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-full z-10 border border-slate-700"></div>
                     
                     <div 
                        onClick={() => setActiveNodeId(activePath.nodes[0].id)}
                        className={`relative z-20 w-44 h-44 sm:-ml-12 rounded-[2rem] bg-slate-900 border-4 flex flex-col items-center justify-center text-center p-4 cursor-pointer transition-all ${
                          activeNodeId === 'hybrid-crm' ? 'border-emerald-400 ring-8 ring-emerald-400/20 scale-105' : 'border-emerald-600 hover:border-emerald-400'
                        }`}
                      >
                        {getIconComponent('creditcard', 'mb-2 text-emerald-500 !w-10 !h-10')}
                        <span className="text-[1rem] sm:text-lg font-black text-white leading-tight uppercase px-1 text-center">{getSelectedOption(activePath.nodes[0])?.name}</span>
                        <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mt-1 text-center">CRM Core</span>
                     </div>

                     <div className="flex sm:hidden w-2 h-12 bg-gradient-to-b from-emerald-500/30 to-blue-500/30 rounded-full z-10 border border-slate-700"></div>

                     <div 
                        onClick={() => setActiveNodeId(activePath.nodes[1].id)}
                        className={`relative z-20 w-44 h-44 sm:-mr-12 rounded-[2rem] bg-slate-900 border-4 flex flex-col items-center justify-center text-center p-4 cursor-pointer transition-all ${
                          activeNodeId === 'hybrid-community' ? 'border-blue-400 ring-8 ring-blue-400/20 scale-105' : 'border-blue-600 hover:border-blue-400'
                        }`}
                      >
                        {getIconComponent('messagesquare', 'mb-2 text-blue-500 !w-10 !h-10')}
                        <span className="text-[1rem] sm:text-lg font-black text-white leading-tight uppercase px-1 text-center">{getSelectedOption(activePath.nodes[1])?.name}</span>
                        <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mt-1 text-center">Community Hub</span>
                     </div>
                  </div>
                )}

                {/* --- PATH 3: BEST-OF-BREED STACK --- */}
                {activePathId === 'path-3' && (
                  <>
                    {/* Orbital Path */}
                    <div className="absolute w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] border-2 border-dashed border-slate-700/40 rounded-full z-0 pointer-events-none"></div>
                    
                    {/* Central Node: Outseta */}
                    <div 
                      onClick={() => setActiveNodeId(activePath.nodes[1].id)}
                      className={`relative z-20 w-44 h-44 rounded-full bg-slate-900 border-4 shadow-[0_0_40px_rgba(16,185,129,0.2)] flex flex-col items-center justify-center text-center p-4 ring-8 cursor-pointer transition-all ${
                        activeNodeId === 'crm' ? 'border-emerald-400 ring-emerald-400/20 scale-105' : 'border-emerald-500 ring-emerald-500/10 hover:border-emerald-400'
                      }`}
                    >
                      <Database size={40} className="mb-2 text-emerald-500" />
                      <span className="text-[1rem] sm:text-lg font-black text-white leading-tight uppercase text-center px-1">
                        {getSelectedOption(activePath.nodes[1])?.name}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mt-1 text-center">The Core Hub</span>
                    </div>

                    {/* Satellite: Ghost CMS (Top Left) */}
                    <div 
                      onClick={() => setActiveNodeId(activePath.nodes[0].id)}
                      className="absolute top-0 sm:top-6 left-0 sm:left-12 flex flex-col items-center z-20 cursor-pointer group"
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-slate-900 border-2 shadow-lg flex items-center justify-center transition-all ${
                        activeNodeId === 'website' ? 'border-orange-400 ring-4 ring-orange-500/20 scale-110' : 'border-orange-500 group-hover:border-orange-400'
                      }`}>
                        <Globe size={32} className={`${activeNodeId === 'website' ? 'text-orange-400' : 'text-orange-500'}`} />
                      </div>
                      <span className="mt-3 text-[10px] sm:text-xs font-bold text-white text-center max-w-[80px] break-words">
                        {getSelectedOption(activePath.nodes[0])?.name}
                      </span>
                    </div>

                    {/* Satellite: Circle (Bottom Left) */}
                    <div 
                      onClick={() => setActiveNodeId(activePath.nodes[2].id)}
                      className="absolute bottom-16 sm:bottom-6 left-0 sm:left-12 flex flex-col items-center z-20 cursor-pointer group"
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-slate-900 border-2 shadow-lg flex items-center justify-center transition-all ${
                        activeNodeId === 'community' ? 'border-blue-400 ring-4 ring-blue-500/20 scale-110' : 'border-blue-500 group-hover:border-blue-400'
                      }`}>
                        <MessageSquare size={32} className={`${activeNodeId === 'community' ? 'text-blue-400' : 'text-blue-500'}`} />
                      </div>
                      <span className="mt-3 text-[10px] sm:text-xs font-bold text-white text-center max-w-[80px] break-words">
                        {getSelectedOption(activePath.nodes[2])?.name}
                      </span>
                    </div>

                    {/* Satellite: Beehiiv (Top Right) */}
                    <div 
                      onClick={() => setActiveNodeId(activePath.nodes[3].id)}
                      className="absolute top-0 sm:top-6 right-0 sm:right-12 flex flex-col items-center z-20 cursor-pointer group"
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-slate-900 border-2 shadow-lg flex items-center justify-center transition-all ${
                        activeNodeId === 'newsletter' ? 'border-purple-400 ring-4 ring-purple-500/20 scale-110' : 'border-purple-500 group-hover:border-purple-400'
                      }`}>
                        <Mail size={32} className={`${activeNodeId === 'newsletter' ? 'text-purple-400' : 'text-purple-500'}`} />
                      </div>
                      <span className="mt-3 text-[10px] sm:text-xs font-bold text-white text-center max-w-[80px] break-words">
                        {getSelectedOption(activePath.nodes[3])?.name}
                      </span>
                    </div>

                    {/* Satellite: Luma (Bottom Right) */}
                    <div 
                      onClick={() => setActiveNodeId(activePath.nodes[4].id)}
                      className="absolute bottom-16 sm:bottom-6 right-0 sm:right-12 flex flex-col items-center z-20 cursor-pointer group"
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-slate-900 border-2 shadow-lg flex items-center justify-center transition-all ${
                        activeNodeId === 'events' ? 'border-rose-400 ring-4 ring-rose-500/20 scale-110' : 'border-rose-500 group-hover:border-rose-400'
                      }`}>
                        <Calendar size={32} className={`${activeNodeId === 'events' ? 'text-rose-400' : 'text-rose-500'}`} />
                      </div>
                      <span className="mt-3 text-[10px] sm:text-xs font-bold text-white text-center max-w-[80px] break-words">
                        {getSelectedOption(activePath.nodes[4])?.name}
                      </span>
                    </div>

                    {/* Mobile Shell Base */}
                    <div className="absolute -bottom-6 flex items-center gap-4 bg-white/5 backdrop-blur-xl px-8 py-3 rounded-full border border-white/10 z-30">
                      <Smartphone className="w-5 h-5 text-blue-400" size={20} />
                      <div className="h-4 w-px bg-white/20"></div>
                      <span className="text-sm font-bold text-white tracking-wide">MOBILOUD BRANDED SHELL</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Dynamic Strategy Note Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              {activePath.notes.map((note, idx) => (
                <div key={idx} className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
                  <h4 className={`text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2 ${note.color}`}>
                    {getIconComponent(note.icon, "")} {note.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    {note.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Detail Panel */}
          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl flex flex-col min-h-[500px]">
            {activeNode && activeOption ? (
              <div className="animate-in fade-in slide-in-from-right duration-300 relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${getThemeColorClass(activeNode.id)} shrink-0`}>
                    {getIconComponent(activeNode.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-2xl font-black text-white leading-tight uppercase truncate">{activeOption.name}</h2>
                      {activeOption.url && (
                        <a href={activeOption.url} target="_blank" rel="noreferrer" className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1 whitespace-nowrap mt-1">
                          Link <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <p className={`text-[10px] ${getThemeTextClass(activeNode.id)} font-bold uppercase tracking-[0.2em]`}>{activeNode.role}</p>
                      {activeOption.metric && (
                        <span className="text-[10px] font-bold text-slate-400 border-l border-slate-700 pl-3">EST: {activeOption.metric}</span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {activeOption.description}
                </p>

                {/* Alternatives rendering with scroller */}
                {activeNode.options && activeNode.options.length > 1 && (
                  <div className="mb-8 -mx-2 px-2">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                      <GitBranch size={12} className={getThemeTextClass(activeNode.id)} />
                      Evaluated Alternatives
                    </h3>
                    <div className="flex overflow-x-auto pb-4 gap-3 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                       {activeNode.options.map((alt: any, i: number) => {
                         if (i === (nodeSelections[activeNode.id] || 0)) return null;
                         return (
                           <div 
                             key={i} 
                             onClick={() => setNodeSelections(prev => ({ ...prev, [activeNode.id]: i }))}
                             className="flex-none w-[220px] snap-start p-4 rounded-xl border bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/80 transition-colors group flex flex-col min-h-[110px] cursor-pointer"
                           >
                             <div className="flex justify-between items-start mb-2">
                               <span className="font-bold text-white group-hover:text-blue-400 transition-colors text-sm">{alt.name}</span>
                               {alt.url && (
                                 <a 
                                   href={alt.url} 
                                   target="_blank" 
                                   rel="noreferrer" 
                                   onClick={(e) => e.stopPropagation()} 
                                   className="relative z-10"
                                 >
                                   <ExternalLink size={12} className="text-slate-500 hover:text-blue-400" />
                                 </a>
                               )}
                             </div>
                             <p className="text-[11px] text-slate-400 leading-relaxed mb-3 flex-1">{alt.description}</p>
                             <div className="mt-auto pt-2 border-t border-slate-700/50 flex justify-between items-center">
                               <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold block">Est. Cost</span>
                               <span className={`text-[10px] font-bold ${getThemeTextClass(activeNode.id)}`}>{alt.metric}</span>
                             </div>
                           </div>
                         );
                       })}
                    </div>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4 border-b border-slate-800 pb-2">Key Functions</h3>
                  <ul className="space-y-3">
                    {activeOption.features?.map((f: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${getThemeColorClass(activeNode.id).split(' ')[1]}`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${getThemeDotClass(activeNode.id)}`}></div>
                        </div>
                        <span className="text-sm text-slate-300">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <div className="bg-slate-800/40 p-5 rounded-2xl border border-slate-700/50">
                    <div className="flex justify-between items-center mb-3">
                       <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Integration Ease</span>
                       <span className={`text-[10px] font-bold ${getThemeTextClass(activeNode.id)}`}>API READY</span>
                    </div>
                    <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden flex">
                       <div className={`h-full w-[95%] ${getThemeDotClass(activeNode.id)}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-50 py-20 flex-1">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center mb-4">
                  <Layout size={32} className="text-slate-500" />
                </div>
                <h3 className="text-xl font-black text-white mb-2 leading-tight uppercase">Select Component</h3>
                <p className="text-slate-400 text-sm max-w-[200px]">Click any node on the {activePath.subtitle.toLowerCase()} map to view strategic details and alternatives.</p>
              </div>
            )}
          </div>
        </div>
        
        <footer className="mt-10 flex flex-col sm:flex-row justify-between items-center border-t border-slate-800 pt-6 gap-4">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] text-center sm:text-left">
             ACAP Technology & Innovation Committee • Architectural Frameworks
          </p>
          <p className="text-[10px] text-slate-600 text-center sm:text-right">
             INTERNAL USE ONLY • CONFIDENTIAL
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;

