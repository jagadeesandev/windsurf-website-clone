import { History, ShieldCheck, Blocks, ImagePlus, Terminal, Play, Zap } from 'lucide-react';

const MemoriesContent = () => (
  <div className="mt-6 space-y-3 rounded-lg bg-black/20 p-4 text-xs font-mono">
    <div className="flex justify-between items-center text-gray-400">
      <span>Rules</span>
      <span>Refresh</span>
    </div>
    <div className="text-gray-200">
      <p># Front end</p>
      <p>- Follow Next.js patterns</p>
    </div>
    <div className="border-t border-white/10 my-3"></div>
    <div className="flex justify-between items-center text-gray-400">
      <span>Memories</span>
      <span>Search memories</span>
    </div>
    <div className="bg-white/5 p-2 rounded-md">
      <span className="text-white">Codebase Structure</span>
      <span className="text-gray-500"> #codebase_structure #typescript</span>
    </div>
  </div>
);

const LintFixingContent = () => (
  <div className="mt-6 space-y-2 text-sm">
    <div className="flex justify-between items-center bg-black/20 p-3 rounded-lg">
      <span className="text-yellow-400">△ 4 new linter errors</span>
      <div className="flex items-center gap-2 text-gray-300">
        <span>Auto-fix on</span>
        <div className="w-8 h-4 bg-green-500 rounded-full p-0.5 flex items-center justify-end">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
    <div className="bg-black/20 p-3 rounded-lg text-gray-300">
      <span className="text-white">Edited</span> panel.ts
    </div>
    <div className="bg-black/20 p-3 rounded-lg text-green-400">
      ✓ 0 new linter errors found
    </div>
  </div>
);

const McpSupportContent = () => (
  <div className="mt-6 flex flex-col md:flex-row gap-4 text-xs">
    <div className="w-full md:w-1/2 space-y-4">
      <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-400"></div><span className="text-white">Figma</span><span className="text-gray-400">5 tools</span></div>
      <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-400"></div><span className="text-white">Slack</span><span className="text-gray-400">7 tools</span></div>
      <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-400"></div><span className="text-white">Stripe</span><span className="text-gray-400">9 tools</span></div>
      <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-400"></div><span className="text-white">Sequential Thinking</span><span className="text-gray-400">3 tools</span></div>
    </div>
    <div className="w-full md:w-1/2 bg-black/20 p-3 rounded-lg space-y-2 text-[10px]">
      <div className="flex justify-between items-center text-gray-400 font-medium"><span>Plugin Store</span><span>Manage Plugins</span></div>
      <div className="space-y-1.5">
        <div className="flex justify-between items-center bg-black/20 p-1.5 rounded"><span className="text-white font-medium">GitHub</span><button className="text-gray-400 border border-gray-600 px-1.5 py-0.5 rounded-sm text-[9px] hover:bg-white/10">Add server +</button></div>
        <div className="flex justify-between items-center bg-black/20 p-1.5 rounded"><span className="text-white font-medium">PostgresSQL</span><button className="text-gray-400 border border-gray-600 px-1.5 py-0.5 rounded-sm text-[9px] hover:bg-white/10">Add server +</button></div>
        <div className="flex justify-between items-center bg-black/20 p-1.5 rounded"><span className="text-white font-medium">Playwright</span><button className="text-gray-400 border border-gray-600 px-1.5 py-0.5 rounded-sm text-[9px] hover:bg-white/10">Add server +</button></div>
        <div className="flex justify-between items-center bg-black/20 p-1.5 rounded"><span className="text-white font-medium">Neon</span><button className="text-gray-400 border border-gray-600 px-1.5 py-0.5 rounded-sm text-[9px] hover:bg-white/10">Add server +</button></div>
        <div className="flex justify-between items-center bg-black/20 p-1.5 rounded"><span className="text-white font-medium">Figma</span><button className="text-gray-400 border border-gray-600 px-1.5 py-0.5 rounded-sm text-[9px] hover:bg-white/10">Configure</button></div>
        <div className="flex justify-between items-center bg-black/20 p-1.5 rounded"><span className="text-white font-medium">Slack</span><button className="text-gray-400 border border-gray-600 px-1.5 py-0.5 rounded-sm text-[9px] hover:bg-white/10">Configure</button></div>
      </div>
    </div>
  </div>
);

const DragDropContent = () => (
  <div className="mt-6 space-y-2 font-mono">
    <div className="bg-black/20 p-3 rounded-lg"><div className="w-16 h-10 bg-gray-600 rounded flex items-center justify-center"><ImagePlus className="w-5 h-5 text-gray-400" /></div></div>
    <div className="bg-black/20 p-3 rounded-lg text-white">Change my layout to match these designs</div>
    <div className="bg-black/20 p-3 rounded-lg text-blue-400 cursor-pointer hover:bg-black/30">Build out my designs</div>
  </div>
);

const TerminalCommandContent = () => (
  <div className="mt-6 font-mono text-sm bg-black/20 p-4 rounded-lg">
    <div className="flex gap-4 text-gray-400 border-b border-gray-700 mb-2">
      <span>Problems</span>
      <span>Output</span>
      <span className="text-white border-b-2 border-white pb-1">Terminal</span>
    </div>
    <p><span className="text-green-400">yashmittal@Mac</span> <span className="text-blue-400">portfolio %</span></p>
    <p className="text-white my-2">Create a compressed archive of this directory</p>
    <p className="text-purple-400">Windsurf Fast</p>
  </div>
);

const ContinueWorkContent = () => (
  <div className="mt-6 space-y-2">
    <div className="bg-black/20 p-4 rounded-lg text-white">Continue my work</div>
    <div className="bg-black/20 p-3 rounded-lg text-sm"><span className="text-gray-300">Edited</span> <span className="text-white">Navbar.tsx</span></div>
    <div className="bg-black/20 p-3 rounded-lg text-sm"><span className="text-gray-300">Edited</span> <span className="text-white">Dropdown.tsx</span></div>
  </div>
);

const TurboModeContent = () => (
  <div className="mt-6 flex gap-4 text-sm">
      <div className="flex items-center gap-2 h-fit">
        <span className="font-semibold">Turbo</span>
        <div className="w-8 h-4 bg-green-500 rounded-full p-0.5 flex items-center justify-end">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="font-mono text-xs space-y-1.5 text-gray-400">
        <p><span className="text-green-400">✓</span> Edited</p>
        <p><span className="text-green-400">✓</span> Ran Terminal Command</p>
        <p><span className="text-green-400">✓</span> Created</p>
        <p><span className="text-green-400">✓</span> Ran Preview</p>
        <p><span className="text-green-400">✓</span> Searched nextjs.org</p>
        <p><span className="text-green-400">✓</span> Deployed app</p>
      </div>
  </div>
);


const features = [
  { icon: History, title: 'Memories', description: 'Cascade will remember important things about your codebase and workflow.', content: <MemoriesContent />, colSpan: 'lg:col-span-1', background: 'bg-secondary-navy', },
  { icon: ShieldCheck, title: 'Lint Fixing', description: 'Cascade will automatically detect and fix lint errors that it generates.', content: <LintFixingContent />, colSpan: 'lg:col-span-1', background: 'bg-secondary-navy', },
  { icon: Blocks, title: 'MCP Support', description: 'Enhance your AI workflows by connecting custom tools and services. Access curated MCP servers in Windsurf settings for one click set-up.', content: <McpSupportContent />, colSpan: 'md:col-span-2 lg:col-span-2', background: 'bg-[linear-gradient(135deg,_#2E243A,_#1E3242)]', },
  { icon: ImagePlus, title: 'Drag & Drop Images', description: 'Build your designs instantly by dropping an image into Cascade.', content: <DragDropContent />, colSpan: 'lg:col-span-1', background: 'bg-secondary-navy', },
  { icon: Terminal, title: 'Terminal Command', description: 'Don\'t remember a terminal command? Just ⌘+I terminal to stay in flow.', content: <TerminalCommandContent />, colSpan: 'lg:col-span-1', background: 'bg-secondary-navy', },
  { icon: Play, title: 'Continue My Work', description: 'Cascade keeps track of your actions so you can just tell it to continue what you’re doing.', content: <ContinueWorkContent />, colSpan: 'lg:col-span-1', background: 'bg-secondary-navy', },
  { icon: Zap, title: 'Turbo Mode', description: 'Turn on Turbo mode in settings to allow Cascade to auto-execute terminal commands.', content: <TurboModeContent />, colSpan: 'lg:col-span-1', background: 'bg-secondary-navy', },
];

const FeaturesGrid = () => {
  return (
    <section>
      <div className="bg-[#FEF7F0] text-black py-12 md:py-20">
        <div className="container mx-auto px-5">
          <div className="flex flex-col gap-3 md:gap-4 max-w-7xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="h-[6px] w-[6px] bg-primary"></div>
              <p className="text-sm font-medium uppercase text-primary tracking-wider">Features</p>
            </div>
            <h3 className="text-3xl lg:text-4xl font-semibold text-black max-w-lg">One editor.<br />Unlimited superpowers.</h3>
          </div>
        </div>
      </div>
      <div className="bg-background py-12 md:py-20">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className={`p-6 rounded-2xl flex flex-col ${feature.background} ${feature.colSpan}`}>
                <div className="flex items-center gap-3">
                  <feature.icon className="w-7 h-7 text-white" />
                  <h4 className="text-xl font-medium text-white">{feature.title}</h4>
                </div>
                <p className="mt-3 text-base text-gray-300 flex-grow">{feature.description}</p>
                <div className="mt-auto">
                  {feature.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;