import React, { useState } from 'react';
import { Globe, ShieldCheck, Mail, Calendar, MessageSquare, CreditCard, Layout, Layers, Database, Zap, Users, Box, ExternalLink, GitBranch, AlertOctagon, CheckCircle2, AlertTriangle, XCircle, ChevronRight, Menu, X, Smartphone } from 'lucide-react';
import { PATH_DATA, NO_GO_OPTIONS, STANDARD_FEATURES } from './data';

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
  const [showNoGo, setShowNoGo] = useState(false);

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

        <div className="flex justify-end mb-6">
           <button 
             onClick={() => setShowNoGo(true)} 
             className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 px-4 py-2 rounded-lg transition-colors border border-rose-500/30"
           >
             <AlertOctagon size={14} /> Review No-Go Options (Excluded)
           </button>
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
                    <div className="flex flex-col gap-3">
                       {activeNode.options.map((alt: any, i: number) => {
                         if (i === (nodeSelections[activeNode.id] || 0)) return null;
                         return (
                           <div 
                             key={i} 
                             onClick={() => setNodeSelections(prev => ({ ...prev, [activeNode.id]: i }))}
                             className="p-4 rounded-xl border bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/80 transition-colors group flex flex-col cursor-pointer"
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
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4 border-b border-slate-800 pb-2">Business Capabilities Matrix</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    {STANDARD_FEATURES.map((feature, i) => {
                      const capability = activeOption.capabilities?.[feature.id];
                      if (!capability || capability === 'N/A') return null;
                      
                      const isYes = capability.toLowerCase().startsWith('yes');
                      const isNo = capability.toLowerCase().startsWith('no');
                      const isPartial = capability.toLowerCase().startsWith('partial') || capability.toLowerCase().startsWith('limited');
                      
                      let Icon = CheckCircle2;
                      let colorClass = 'text-emerald-400';
                      
                      if (isNo) {
                        Icon = XCircle;
                        colorClass = 'text-rose-500';
                      } else if (isPartial) {
                        Icon = AlertTriangle;
                        colorClass = 'text-amber-400';
                      }

                      return (
                        <div key={i} className="flex flex-col">
                          <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-1">{feature.label}</span>
                          <div className="flex items-start gap-2">
                            <Icon size={14} className={`mt-0.5 shrink-0 ${colorClass}`} />
                            <span className={`text-sm ${isNo ? 'text-slate-400' : 'text-slate-200'}`}>{capability}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
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

      {/* No-Go Options Modal */}
      {showNoGo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setShowNoGo(false)}></div>
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900 border border-rose-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
             
             {/* Modal Header */}
             <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-rose-950/20">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center border border-rose-500/30">
                   <AlertOctagon size={20} className="text-rose-400" />
                 </div>
                 <div>
                   <h2 className="text-xl font-black text-white uppercase tracking-tight">Excluded Solutions (No-Go)</h2>
                   <p className="text-[10px] text-rose-400/80 font-bold uppercase tracking-widest">Architectural Misfits & Outdated Legacy</p>
                 </div>
               </div>
               <button 
                 onClick={() => setShowNoGo(false)}
                 className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
               >
                 <X size={24} />
               </button>
             </div>

             {/* Modal Body */}
             <div className="flex-1 overflow-y-auto p-6">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 {NO_GO_OPTIONS.map((nogo, i) => (
                   <div key={i} className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 relative overflow-hidden group">
                     {/* Decorative background element */}
                     <div className="absolute -right-10 -top-10 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl group-hover:bg-rose-500/10 transition-colors pointer-events-none"></div>
                     
                     <div className="flex justify-between items-start mb-4 relative z-10">
                       <div>
                         <h3 className="text-xl font-black text-white mb-1">{nogo.name}</h3>
                         <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 flex inline-flex items-center gap-1">
                            <XCircle size={10} /> REJECTED
                         </span>
                       </div>
                       {nogo.url && (
                          <a href={nogo.url} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                            <ExternalLink size={16} />
                          </a>
                       )}
                     </div>
                     
                     <p className="text-slate-400 text-sm leading-relaxed mb-6 block relative z-10">
                       {nogo.description}
                     </p>
                     
                     <div className="mb-6">
                       <h4 className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-3">Major Deficiencies</h4>
                       <ul className="space-y-2">
                         {nogo.features.map((f, j) => (
                           <li key={j} className="flex items-start gap-2">
                             <XCircle size={14} className="text-rose-500 mt-0.5 shrink-0" />
                             <span className="text-sm text-slate-300">{f}</span>
                           </li>
                         ))}
                       </ul>
                     </div>

                     <div className="pt-5 border-t border-slate-700/50">
                        <h4 className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-4">Capabilities Snapshot</h4>
                        <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                          {STANDARD_FEATURES.map((feature, j) => {
                            const capability = nogo.capabilities?.[feature.id];
                            if (!capability) return null;
                            const isNo = capability.toLowerCase().startsWith('no');
                            const isPartial = capability.toLowerCase().startsWith('partial') || capability.toLowerCase().startsWith('limited');
                            
                            let Icon = CheckCircle2;
                            let colorClass = 'text-slate-400';
                            
                            if (isNo) { Icon = XCircle; colorClass = 'text-rose-500'; }
                            else if (isPartial) { Icon = AlertTriangle; colorClass = 'text-amber-400'; }
                            else { colorClass = 'text-emerald-500'; }

                            return (
                              <div key={j} className="flex items-start gap-2">
                                <Icon size={12} className={`mt-0.5 shrink-0 ${colorClass}`} />
                                <div>
                                  <div className="text-[8px] font-bold uppercase tracking-wider text-slate-500 mb-0.5 leading-none">{feature.label}</div>
                                  <div className={`text-xs ${isNo ? 'text-slate-400' : 'text-slate-200'} leading-snug`}>{capability}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

