import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap, Award, Sparkles } from 'lucide-react';
import { journey } from '../data/portfolio';
import useThemeStore, { themes } from '../stores/themeStore';

const TimelineItem = ({ item, index, isLast }) => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    const containerVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: index * 0.1 
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative pl-10 pb-12 last:pb-0"
        >
            {/* Connection Line */}
            {!isLast && (
                <div 
                    className="absolute left-[15px] top-8 bottom-0 w-0.5 opacity-20"
                    style={{ 
                        background: `linear-gradient(to bottom, ${theme.accent}, transparent)` 
                    }}
                />
            )}

            {/* Timeline Marker */}
            <div 
                className="absolute left-0 top-0 w-8 h-8 rounded-2xl flex items-center justify-center shadow-lg z-10 transition-transform hover:scale-110"
                style={{ 
                    backgroundColor: theme.surface, 
                    border: `1px solid ${theme.border}`,
                    color: theme.accent
                }}
            >
                <div className="text-sm font-bold">{item.icon}</div>
            </div>

            {/* Card Content */}
            <div 
                className="p-6 rounded-[2rem] border transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]"
                style={{ 
                    backgroundColor: theme.surface + '40', 
                    borderColor: theme.border 
                }}
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                        <h4 className="text-lg font-black tracking-tight" style={{ color: theme.text }}>
                            {item.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                            <Calendar className="w-3.5 h-3.5 opacity-50" style={{ color: theme.text }} />
                            <span className="text-xs font-bold uppercase tracking-widest opacity-50" style={{ color: theme.text }}>
                                {item.year}
                            </span>
                        </div>
                    </div>
                    <div 
                        className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                        style={{ backgroundColor: theme.accent + '20', color: theme.accent }}
                    >
                        Milestone
                    </div>
                </div>

                <p className="text-sm font-medium leading-relaxed mb-5 opacity-70" style={{ color: theme.text }}>
                    {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                        <div 
                            key={i}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider border transition-colors hover:bg-accent hover:border-accent hover:text-white"
                            style={{ 
                                backgroundColor: theme.surface,
                                borderColor: theme.border,
                                color: theme.text
                            }}
                        >
                            <Sparkles className="w-3 h-3 text-accent" style={{ color: theme.accent }} />
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const ExperienceTimeline = () => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    return (
        <div className="p-4 md:p-8">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-accent" style={{ color: theme.accent }} />
                </div>
                <div>
                    <h3 className="text-2xl font-black tracking-tighter" style={{ color: theme.text }}>
                        Journey
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-40" style={{ color: theme.text }}>
                        Evolution of a developer
                    </p>
                </div>
            </div>

            <div className="max-w-2xl">
                {journey.map((item, index) => (
                    <TimelineItem
                        key={index}
                        item={item}
                        index={index}
                        isLast={index === journey.length - 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExperienceTimeline;

