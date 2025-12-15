import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, X, ChevronUp, Minus } from 'lucide-react';

const MobileNav = ({ items }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Primary items to show in collapsed state (About, Projects, Contact + Menu)
    const primaryItems = items.filter(item => ['about', 'projects', 'contact'].includes(item.id));

    // Separate rest of items
    const otherItems = items.filter(item => !['about', 'projects', 'contact'].includes(item.id));

    return (
        <>
            {/* Expanded Drawer Backdrop */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsExpanded(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Navigation Bar / Drawer */}
            <motion.div
                className={`md:hidden fixed bottom-4 left-4 right-4 bg-[#1c1c1e]/95 backdrop-blur-2xl border border-white/10 z-[1000] transition-all duration-300 ease-spring pointer-events-auto flex flex-col ${isExpanded ? 'rounded-[32px] h-[85dvh] shadow-2xl' : 'rounded-[24px] pb-4 pt-2 px-4 shadow-lg'}`}
                animate={{
                    height: isExpanded ? '85vh' : 'auto', // Explicit height for expanded state
                }}
            >
                {/* Drawer Handle (Visible only when COLLAPSED or dragging logic exists) */}
                {!isExpanded && (
                    <div className="flex justify-center py-3" onClick={() => setIsExpanded(true)}>
                        <div className="w-12 h-1.5 bg-white/20 rounded-full" />
                    </div>
                )}

                {!isExpanded ? (
                    /* Collapsed View: 4 items (3 Primary + Menu Toggle) */
                    <div className="grid grid-cols-4 gap-4 items-end">
                        {primaryItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={item.onClick}
                                whileTap={{ scale: 0.9 }}
                                className="flex flex-col items-center gap-1.5 pt-2"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white backdrop-blur-sm border border-white/5 active:bg-white/10">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <span className="text-[10px] text-white/60 font-medium">{item.label}</span>
                            </motion.button>
                        ))}

                        {/* More Button */}
                        <motion.button
                            onClick={() => setIsExpanded(true)}
                            whileTap={{ scale: 0.9 }}
                            className="flex flex-col items-center gap-1.5 pt-2"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white backdrop-blur-sm border border-white/5 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                <LayoutGrid className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] text-white font-bold">All Apps</span>
                        </motion.button>
                    </div>
                ) : (
                    /* Expanded View: Full Grid */
                    /* Expanded View: Full Grid */
                    <>
                        {/* Fixed Header */}
                        <div className="px-6 pt-6 pb-4 shrink-0 flex items-center justify-between border-b border-white/5 bg-[#1c1c1e]/95 backdrop-blur-xl z-20 rounded-t-[32px]">
                            <h3 className="text-white text-lg font-bold">App Library</h3>
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="p-2 bg-white/10 rounded-full text-white/80 active:bg-white/20 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="px-6 pb-12 pt-4 flex-1 overflow-y-auto hide-scrollbar">
                            <div className="grid grid-cols-4 gap-y-6 gap-x-4 pb-8">
                                {items.map((item) => (
                                    <motion.button
                                        key={item.id}
                                        onClick={() => {
                                            item.onClick();
                                            setIsExpanded(false);
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        className="flex flex-col items-center gap-2"
                                    >
                                        <div className="w-14 h-14 rounded-[18px] bg-white/5 flex items-center justify-center text-white backdrop-blur-sm border border-white/5 shadow-sm">
                                            <item.icon className="w-7 h-7" />
                                        </div>
                                        <span className="text-[10px] text-white/80 font-medium text-center leading-tight">{item.label}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </motion.div>
        </>
    );
};

export default MobileNav;
