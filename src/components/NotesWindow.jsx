import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Calendar, Tag, Search, ChevronLeft, Plus } from 'lucide-react';
import useThemeStore, { themes } from '../stores/themeStore';

// Sample Blog Data
const notes = [
    {
        id: 1,
        title: "The Future of AI in Web Development",
        date: "2024-03-15",
        tags: ["AI", "Web"],
        preview: "AI is reshaping how we build the web. From Generative UI to Agentic Workflows...",
        content: `Artificial Intelligence is reshaping how we build the web. From **Generative UI** to **Agentic Workflows**, the role of a developer is evolving from "writer of code" to "architect of intelligence".

Key Trends:
• Copilots everywhere: Coding assistants are becoming standard
• Generative UI: Interfaces that adapt in real-time to user intent
• Autonomous Agents: Systems that can plan and execute complex tasks

"The best way to predict the future is to invent it." - Alan Kay

As we move forward, integrating LLMs into our applications won't just be a feature—it will be the foundation.`
    },
    {
        id: 2,
        title: "Why I Love React & Three.js",
        date: "2024-02-10",
        tags: ["React", "3D"],
        preview: "Bringing 3D elements to the web used to be hard. Then came React Three Fiber...",
        content: `Bringing 3D elements to the web used to be hard. Then came React Three Fiber.

It allows us to manipulate the 3D scene graph using the declarative power of React components.

My Favorite Features:
• Declarative: <mesh /> just works
• Ecosystem: @react-three/drei has everything from controls to shaders
• Performance: It's just a thin wrapper, so performance is native

Check out the "Hero Scene" in this portfolio to see it in action!`
    },
    {
        id: 3,
        title: "Building SaidOS v2",
        date: "2024-01-01",
        tags: ["Portfolio", "DevLog"],
        preview: "I wanted a portfolio that stood out. Not just a scrolling page, but an experience...",
        content: `I wanted a portfolio that stood out. Not just a scrolling page, but an experience.

The Concept:
An Operating System in the browser. Windows, Dock, Terminal, and Filesystem.

Tech Stack:
• React: Core UI
• Framer Motion: Smooth window animations
• Tailwind: Rapid styling
• Zustand: Global state (Theme, Windows)

It's been a fun journey of fighting z-indexes and event propagation!`
    }
];

const NotesWindow = () => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];
    const [selectedNote, setSelectedNote] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // Mobile: Show list or detail view
    if (isMobile) {
        return (
            <div className="h-full flex flex-col" style={{ backgroundColor: theme.background }}>
                <AnimatePresence mode="wait">
                    {!selectedNote ? (
                        // Notes List View
                        <motion.div
                            key="list"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex-1 flex flex-col"
                        >
                            {/* Search Header */}
                            <div className="p-4 sticky top-0 z-10" style={{ backgroundColor: theme.surface }}>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: theme.textMuted }} />
                                    <input
                                        type="text"
                                        placeholder="Search notes..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full rounded-xl pl-10 pr-4 py-3 text-sm outline-none transition-colors"
                                        style={{
                                            backgroundColor: theme.background,
                                            color: theme.text,
                                            border: `1px solid ${theme.border}`
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Notes List */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                                {filteredNotes.map((note, index) => (
                                    <motion.button
                                        key={note.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => setSelectedNote(note)}
                                        className="w-full text-left p-4 rounded-2xl transition-all active:scale-[0.98]"
                                        style={{
                                            backgroundColor: theme.surface,
                                            border: `1px solid ${theme.border}`
                                        }}
                                    >
                                        <h3 className="font-semibold mb-1 line-clamp-1" style={{ color: theme.text }}>
                                            {note.title}
                                        </h3>
                                        <p className="text-xs mb-2 line-clamp-2" style={{ color: theme.textMuted }}>
                                            {note.preview}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs" style={{ color: theme.textMuted }}>{note.date}</span>
                                            {note.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="text-xs px-2 py-0.5 rounded-full"
                                                    style={{ backgroundColor: theme.accent + '20', color: theme.accent }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        // Note Detail View
                        <motion.div
                            key="detail"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex-1 flex flex-col"
                        >
                            {/* Back Header */}
                            <div
                                className="p-4 flex items-center gap-3 sticky top-0 z-10"
                                style={{ backgroundColor: theme.surface, borderBottom: `1px solid ${theme.border}` }}
                            >
                                <button
                                    onClick={() => setSelectedNote(null)}
                                    className="flex items-center gap-1 text-sm transition-colors"
                                    style={{ color: theme.accent }}
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                    Notes
                                </button>
                            </div>

                            {/* Note Content */}
                            <div className="flex-1 overflow-y-auto p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <Calendar className="w-4 h-4" style={{ color: theme.textMuted }} />
                                    <span className="text-xs" style={{ color: theme.textMuted }}>{selectedNote.date}</span>
                                    {selectedNote.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-0.5 rounded-full"
                                            style={{ backgroundColor: theme.accent + '20', color: theme.accent }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h1 className="text-xl font-bold mb-4" style={{ color: theme.text }}>
                                    {selectedNote.title}
                                </h1>

                                <div
                                    className="text-sm leading-relaxed whitespace-pre-wrap"
                                    style={{ color: theme.textMuted }}
                                >
                                    {selectedNote.content}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    // Desktop: Side-by-side view
    return (
        <div className="flex h-full" style={{ backgroundColor: theme.background }}>
            {/* Sidebar */}
            <div
                className="w-72 flex flex-col border-r shrink-0"
                style={{ borderColor: theme.border, backgroundColor: theme.surface }}
            >
                {/* Search */}
                <div className="p-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: theme.textMuted }} />
                        <input
                            type="text"
                            placeholder="Search notes..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full rounded-lg pl-9 pr-3 py-2 text-sm outline-none transition-colors"
                            style={{
                                backgroundColor: theme.background,
                                color: theme.text,
                                border: `1px solid ${theme.border}`
                            }}
                        />
                    </div>
                </div>

                {/* Notes List */}
                <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
                    {filteredNotes.map(note => (
                        <button
                            key={note.id}
                            onClick={() => setSelectedNote(note)}
                            className={`w-full text-left p-3 rounded-lg transition-all`}
                            style={{
                                backgroundColor: selectedNote?.id === note.id ? theme.accent + '20' : 'transparent',
                            }}
                        >
                            <h3
                                className="text-sm font-semibold mb-1 line-clamp-1"
                                style={{ color: selectedNote?.id === note.id ? theme.accent : theme.text }}
                            >
                                {note.title}
                            </h3>
                            <div className="flex items-center gap-2 text-xs" style={{ color: theme.textMuted }}>
                                <span>{note.date}</span>
                                {note.tags[0] && (
                                    <span
                                        className="px-1.5 py-0.5 rounded"
                                        style={{ backgroundColor: theme.background }}
                                    >
                                        {note.tags[0]}
                                    </span>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                {selectedNote ? (
                    <motion.div
                        key={selectedNote.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="flex items-center gap-3 mb-4" style={{ color: theme.textMuted }}>
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{selectedNote.date}</span>
                            {selectedNote.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="text-xs px-2 py-1 rounded-full"
                                    style={{ backgroundColor: theme.accent + '20', color: theme.accent }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-2xl font-bold mb-6" style={{ color: theme.text }}>
                            {selectedNote.title}
                        </h1>

                        <div
                            className="leading-relaxed whitespace-pre-wrap"
                            style={{ color: theme.textMuted }}
                        >
                            {selectedNote.content}
                        </div>
                    </motion.div>
                ) : (
                    <div className="h-full flex items-center justify-center" style={{ color: theme.textMuted }}>
                        <div className="text-center">
                            <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                            <p>Select a note to read</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NotesWindow;
