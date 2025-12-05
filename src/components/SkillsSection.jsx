import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'React / Next.js', level: 95, color: '#61dafb' },
    { name: 'TypeScript', level: 90, color: '#3178c6' },
    { name: 'Node.js', level: 88, color: '#68a063' },
    { name: 'Python', level: 85, color: '#3776ab' },
    { name: 'AWS / Cloud', level: 80, color: '#ff9900' },
    { name: 'PostgreSQL', level: 82, color: '#336791' },
    { name: 'Docker', level: 78, color: '#2496ed' },
    { name: 'AI/ML', level: 75, color: '#ff6f61' },
];

const SkillBar = ({ skill, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
            className="group"
        >
            <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    {skill.name}
                </span>
                <span className="text-xs text-white/40">{skill.level}%</span>
            </div>
            <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.08, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{
                        background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`
                    }}
                />
            </div>
        </motion.div>
    );
};

const SkillsSection = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                    Technical Skills
                </h3>
                <span className="text-xs text-white/30">{skills.length} technologies</span>
            </div>

            <div className="space-y-4">
                {skills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
            </div>

            {/* Additional Skills Pills */}
            <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-xs text-white/40 mb-3">Also experienced with:</p>
                <div className="flex flex-wrap gap-2">
                    {['GraphQL', 'Redis', 'MongoDB', 'Kubernetes', 'CI/CD', 'Figma', 'Three.js', 'TailwindCSS'].map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 text-[11px] text-white/50 bg-white/[0.04] border border-white/[0.06] rounded-full hover:bg-white/[0.08] hover:text-white/70 transition-all"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
