import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Search, ChevronLeft } from 'lucide-react';
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

    // Mobile View
    if (isMobile) {
        return (
            <div className="h-full flex flex-col p-6" style={{ backgroundColor: theme.background }}>
                <AnimatePresence mode="wait">
                    {!selectedNote ? (
                        <motion.div
                            key="list"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex-1 flex flex-col"
                        >
                            {/* Search */}
                            <div className="relative mb-4">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: theme.textMuted }} />
                                <input
                                    type="text"
                                    placeholder="Search notes..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full py-2.5 rounded-lg text-sm outline-none"
                                    style={{
                                        backgroundColor: theme.surface,
                                        color: theme.text,
                                        border: `1px solid ${theme.border}`,
                                        paddingLeft: '40px',
                                        paddingRight: '16px',
                                    }}
                                />
                            </div>

                            {/* Notes List */}
                            <div className="flex-1 overflow-y-auto space-y-2">
                                {filteredNotes.map((note) => (
                                    <button
                                        key={note.id}
                                        onClick={() => setSelectedNote(note)}
                                        className="w-full text-left p-4 rounded-xl"
                                        style={{
                                            backgroundColor: theme.surface,
                                            border: `1px solid ${theme.border}`,
                                        }}
                                    >
                                        <h3 className="font-semibold text-sm mb-1" style={{ color: theme.text }}>
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
                                                    className="text-xs px-2 py-0.5 rounded"
                                                    style={{ backgroundColor: theme.background, color: theme.accent }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="detail"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex-1 flex flex-col"
                        >
                            {/* Back Button */}
                            <button
                                onClick={() => setSelectedNote(null)}
                                className="flex items-center gap-1 text-sm mb-4"
                                style={{ color: theme.accent }}
                            >
                                <ChevronLeft className="w-4 h-4" />
                                Back
                            </button>

                            {/* Note Content */}
                            <div className="flex-1 overflow-y-auto">
                                <div className="flex items-center gap-2 text-xs mb-3" style={{ color: theme.textMuted }}>
                                    <Calendar className="w-3 h-3" />
                                    <span>{selectedNote.date}</span>
                                    {selectedNote.tags.map(tag => (
                                        <span key={tag} className="px-2 py-0.5 rounded" style={{ backgroundColor: theme.surface, color: theme.accent }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h1 className="text-lg font-bold mb-4" style={{ color: theme.text }}>
                                    {selectedNote.title}
                                </h1>
                                <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: theme.textMuted }}>
                                    {selectedNote.content}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    // Desktop View - Split panel
    return (
        <div className="h-full flex" style={{ backgroundColor: theme.background }}>
            {/* Sidebar - Notes List */}
            <div
                className="w-72 flex flex-col p-4"
                style={{ borderRight: `1px solid ${theme.border}`, paddingLeft: '16px' }}
            >
                {/* Search */}
                <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: theme.textMuted }} />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full py-2 rounded-lg text-sm outline-none"
                        style={{
                            backgroundColor: theme.surface,
                            color: theme.text,
                            border: `1px solid ${theme.border}`,
                            paddingLeft: '40px',
                            paddingRight: '16px',
                        }}
                    />
                </div>

                {/* Notes List */}
                <div className="flex-1 overflow-y-auto space-y-1">
                    {filteredNotes.map((note) => (
                        <button
                            key={note.id}
                            onClick={() => setSelectedNote(note)}
                            className="w-full text-left p-3 rounded-lg transition-colors"
                            style={{
                                backgroundColor: selectedNote?.id === note.id ? theme.surface : 'transparent',
                                borderLeft: selectedNote?.id === note.id ? `2px solid ${theme.accent}` : '2px solid transparent',
                            }}
                        >
                            <h3 className="font-medium text-sm truncate" style={{ color: theme.text }}>
                                {note.title}
                            </h3>
                            <p className="text-xs truncate" style={{ color: theme.textMuted }}>
                                {note.preview}
                            </p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col p-6 overflow-y-auto">
                {selectedNote ? (
                    <>
                        <div className="flex items-center gap-2 text-xs mb-4" style={{ color: theme.textMuted }}>
                            <Calendar className="w-3 h-3" />
                            <span>{selectedNote.date}</span>
                            {selectedNote.tags.map(tag => (
                                <span key={tag} className="px-2 py-0.5 rounded" style={{ backgroundColor: theme.surface, color: theme.accent }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-xl font-bold mb-4" style={{ color: theme.text }}>
                            {selectedNote.title}
                        </h1>
                        <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: theme.textMuted }}>
                            {selectedNote.content}
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center">
                        <p className="text-sm" style={{ color: theme.textMuted }}>
                            Select a note to read
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NotesWindow;
