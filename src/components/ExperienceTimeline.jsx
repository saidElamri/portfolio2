import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
    {
        type: 'work',
        title: 'Senior Full Stack Developer',
        company: 'Tech Company',
        period: '2022 - Present',
        description: 'Leading development of scalable web applications, mentoring junior developers, and implementing AI-powered features.',
        highlights: ['React', 'Node.js', 'AWS', 'AI/ML']
    },
    {
        type: 'work',
        title: 'Full Stack Developer',
        company: 'Startup Inc',
        period: '2020 - 2022',
        description: 'Built core platform features from scratch, optimized performance, and improved user engagement by 40%.',
        highlights: ['TypeScript', 'PostgreSQL', 'Docker']
    },
    {
        type: 'education',
        title: 'Computer Science',
        company: 'University',
        period: '2016 - 2020',
        description: 'Bachelor\'s degree with focus on software engineering and distributed systems.',
        highlights: ['Algorithms', 'Distributed Systems']
    },
];

const TimelineItem = ({ item, index, isLast }) => {
    const Icon = item.type === 'work' ? Briefcase : item.type === 'education' ? GraduationCap : Award;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="relative pl-8 pb-8"
        >
            {/* Timeline line */}
            {!isLast && (
                <div className="absolute left-[11px] top-8 bottom-0 w-px bg-gradient-to-b from-white/20 to-transparent" />
            )}

            {/* Icon dot */}
            <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white/[0.08] border border-white/[0.15] flex items-center justify-center">
                <Icon className="w-3 h-3 text-white/60" />
            </div>

            {/* Content */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 hover:bg-white/[0.05] transition-colors">
                <div className="flex items-start justify-between mb-2">
                    <div>
                        <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                        <p className="text-xs text-white/50">{item.company}</p>
                    </div>
                    <span className="text-[10px] text-white/30 uppercase tracking-wider bg-white/[0.05] px-2 py-0.5 rounded">
                        {item.period}
                    </span>
                </div>

                <p className="text-xs text-white/40 leading-relaxed mb-3">{item.description}</p>

                <div className="flex flex-wrap gap-1.5">
                    {item.highlights.map((h) => (
                        <span key={h} className="px-2 py-0.5 text-[10px] text-white/50 bg-white/[0.05] rounded-full">
                            {h}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const ExperienceTimeline = () => {
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                    Experience
                </h3>
            </div>

            <div className="space-y-0">
                {experiences.map((exp, index) => (
                    <TimelineItem
                        key={index}
                        item={exp}
                        index={index}
                        isLast={index === experiences.length - 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExperienceTimeline;
