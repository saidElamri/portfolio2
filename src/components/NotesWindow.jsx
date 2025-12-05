import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, Tag, Search, ChevronLeft } from 'lucide-react';
import useThemeStore, { themes } from '../stores/themeStore';

// Sample Blog Data
const notes = [
    {
        id: 1,
        title: "The Future of AI in Web Development",
        date: "2024-03-15",
        tags: ["AI", "Web", "Future"],
        content: `
# The Future of AI in Web Development

Artificial Intelligence is reshaping how we build the web. From **Generative UI** to **Agentic Workflows**, the role of a developer is evolving from "writer of code" to "architect of intelligence".

### Key Trends
1. **Copilots everywhere**: Coding assistants are becoming standard.
2. **Generative UI**: Interfaces that adapt in real-time to user intent.
3. **Autonomous Agents**: Systems that can plan and execute complex tasks.

> "The best way to predict the future is to invent it." - Alan Kay

As we move forward, integrating LLMs into our applications won't just be a feature—it will be the foundation.
        `
    },
    {
        id: 2,
        title: "Why I Love React & Three.js",
        date: "2024-02-10",
        tags: ["React", "3D", "Creative"],
        content: `
# Why I Love React & Three.js

Bringing 3D elements to the web used to be hard. Then came **React Three Fiber**.

It allows us to manipulate the 3D scene graph using the declarative power of React components. 

### My Favorite Features:
- **Declarative**: \`<mesh />\` just works.
- **Ecosystem**: \`@react-three/drei\` has everything from controls to shaders.
- **Performance**: It's just a thin wrapper, so performance is native.

Check out the "Hero Scene" in this portfolio to see it in action!
        `
    },
    {
        id: 3,
        title: "Building SaidOS v2",
        date: "2024-01-01",
        tags: ["Portfolio", "DevLog"],
        content: `
# Building SaidOS v2

I wanted a portfolio that stood out. Not just a scrolling page, but an **experience**.

### The Concept
An Operating System in the browser. Windows, Dock, Terminal, and Filesystem.

### Tech Stack
- **React**: Core UI
- **Framer Motion**: Smooth window animations
- **Tailwind**: Rapid styling
- **Zustand**: Global state (Theme, Windows)

It's been a fun journey of fighting z-indexes and event propagation!
        `
    }
];

const NotesWindow = () => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];
    const [selectedNote, setSelectedNote] = useState(notes[0]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showSidebar, setShowSidebar] = useState(true);

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="flex h-full text-white bg-transparent">
            {/* Sidebar List */}
            <div
                className={`${showSidebar ? 'w-full md:w-64' : 'hidden md:block w-64'} flex flex-col border-r shrink-0 transition-all`}
                style={{ borderColor: theme.border, backgroundColor: 'rgba(0,0,0,0.2)' }}
            >
                {/* Search */}
                <div className="p-4 border-b" style={{ borderColor: theme.border }}>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                        <input
                            type="text"
                            placeholder="Search notes..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white/5 rounded-lg pl-9 pr-3 py-2 text-sm outline-none focus:bg-white/10 transition-colors"
                        />
                    </div>
                </div>

                {/* Note List */}
                <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
                    {filteredNotes.map(note => (
                        <button
                            key={note.id}
                            onClick={() => {
                                setSelectedNote(note);
                                if (window.innerWidth < 768) setShowSidebar(false);
                            }}
                            className={`w-full text-left p-3 rounded-lg transition-all group ${selectedNote.id === note.id ? 'bg-white/10' : 'hover:bg-white/5'
                                }`}
                        >
                            <h3 className={`text-sm font-semibold mb-1 ${selectedNote.id === note.id ? 'text-white' : 'text-white/80'}`}>
                                {note.title}
                            </h3>
                            <div className="flex items-center gap-2 text-[10px] text-white/40">
                                <span>{note.date}</span>
                                {note.tags.length > 0 && (
                                    <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-white/50">
                                        {note.tags[0]}
                                    </span>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className={`${!showSidebar ? 'flex-1' : 'hidden md:flex flex-1'} flex-col bg-opacity-50`}>

                {/* Mobile Back Button */}
                <div className="md:hidden p-4 border-b flex items-center gap-2" style={{ borderColor: theme.border }}>
                    <button onClick={() => setShowSidebar(true)} className="flex items-center gap-1 text-sm text-white/60 hover:text-white">
                        <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                </div>

                {/* Note Content */}
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <motion.div
                        key={selectedNote.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-2xl mx-auto prose prose-invert prose-sm md:prose-base"
                    >
                        {/* Header */}
                        <div className="mb-8 border-b pb-6" style={{ borderColor: theme.border }}>
                            <div className="flex items-center gap-3 text-sm text-white/40 mb-4">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {selectedNote.date}
                                </div>
                                <div className="flex items-center gap-2">
                                    {selectedNote.tags.map(tag => (
                                        <div key={tag} className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5">
                                            <Tag className="w-3 h-3" />
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <h1 className="text-3xl font-bold text-white mb-2">{selectedNote.title}</h1>
                        </div>

                        {/* Body - Simple Markdown Parser Support */}
                        <div className="whitespace-pre-wrap leading-relaxed text-white/80 space-y-4">
                            {selectedNote.content.split('\n').map((line, i) => {
                                if (line.trim().startsWith('# ')) return <h1 key={i} className="text-2xl font-bold mt-6 mb-4 text-white">{line.replace('# ', '')}</h1>;
                                if (line.trim().startsWith('## ')) return <h2 key={i} className="text-xl font-bold mt-5 mb-3 text-white">{line.replace('## ', '')}</h2>;
                                if (line.trim().startsWith('### ')) return <h3 key={i} className="text-lg font-bold mt-4 mb-2 text-white">{line.replace('### ', '')}</h3>;
                                if (line.trim().startsWith('> ')) return <blockquote key={i} className="border-l-4 border-white/20 pl-4 italic text-white/60 my-4">{line.replace('> ', '')}</blockquote>;
                                if (line.trim().startsWith('- ')) return <li key={i} className="ml-4 list-disc marker:text-white/40">{line.replace('- ', '')}</li>;
                                return <p key={i}>{line}</p>;
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default NotesWindow;
