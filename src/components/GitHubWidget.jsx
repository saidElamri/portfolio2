import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Activity, Code2, Users, Calendar, TrendingUp, ExternalLink } from 'lucide-react';
import useThemeStore, { themes } from '../stores/themeStore';

const GITHUB_USERNAME = 'saidElamri';

// Generate mock contribution data (since GitHub doesn't provide this via public API)
const generateContributions = () => {
    const weeks = 20; // ~5 months
    const days = weeks * 7;
    const contributions = [];

    for (let i = 0; i < days; i++) {
        const date = new Date();
        date.setDate(date.getDate() - (days - i));

        // Generate realistic-looking contribution pattern
        const dayOfWeek = date.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        const baseChance = isWeekend ? 0.3 : 0.7;
        const hasContribution = Math.random() < baseChance;

        contributions.push({
            date: date.toISOString().split('T')[0],
            count: hasContribution ? Math.floor(Math.random() * 10) + 1 : 0,
            dayOfWeek,
        });
    }

    return contributions;
};

// Contribution Heatmap Component
const ContributionHeatmap = ({ contributions }) => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    // Group contributions by week
    const weeks = useMemo(() => {
        const result = [];
        for (let i = 0; i < contributions.length; i += 7) {
            result.push(contributions.slice(i, i + 7));
        }
        return result;
    }, [contributions]);

    const getColor = (count) => {
        if (count === 0) return `${theme.surface}`;
        if (count <= 2) return `${theme.accent}30`;
        if (count <= 5) return `${theme.accent}60`;
        if (count <= 7) return `${theme.accent}90`;
        return theme.accent;
    };

    const totalContributions = contributions.reduce((acc, c) => acc + c.count, 0);

    return (
        <div>
            <div className="flex items-center justify-between mb-3">
                <h4
                    className="text-xs uppercase tracking-wider flex items-center gap-2"
                    style={{ color: theme.textMuted }}
                >
                    <TrendingUp className="w-3 h-3" />
                    Contribution Activity
                </h4>
                <span
                    className="text-sm font-medium"
                    style={{ color: theme.accent }}
                >
                    {totalContributions} contributions
                </span>
            </div>

            <div className="flex gap-[3px] overflow-x-auto pb-2">
                {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-[3px]">
                        {week.map((day, dayIndex) => (
                            <motion.div
                                key={`${weekIndex}-${dayIndex}`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: (weekIndex * 7 + dayIndex) * 0.002 }}
                                className="w-[10px] h-[10px] rounded-sm cursor-pointer transition-transform hover:scale-125"
                                style={{ backgroundColor: getColor(day.count) }}
                                title={`${day.date}: ${day.count} contributions`}
                            />
                        ))}
                    </div>
                ))}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-end gap-1 mt-2">
                <span className="text-xs" style={{ color: theme.textMuted }}>Less</span>
                {[0, 2, 5, 7, 10].map((level, i) => (
                    <div
                        key={i}
                        className="w-[10px] h-[10px] rounded-sm"
                        style={{ backgroundColor: getColor(level) }}
                    />
                ))}
                <span className="text-xs" style={{ color: theme.textMuted }}>More</span>
            </div>
        </div>
    );
};

// Language breakdown component
const LanguageBar = ({ languages }) => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    const langColors = {
        JavaScript: '#f7df1e',
        TypeScript: '#3178c6',
        Python: '#3776ab',
        HTML: '#e34c26',
        CSS: '#1572b6',
        React: '#61dafb',
        Other: theme.textMuted,
    };

    const total = languages.reduce((acc, l) => acc + l.count, 0);

    return (
        <div>
            <h4
                className="text-xs uppercase tracking-wider flex items-center gap-2 mb-3"
                style={{ color: theme.textMuted }}
            >
                <Code2 className="w-3 h-3" />
                Languages
            </h4>

            {/* Progress bar */}
            <div
                className="h-2 rounded-full overflow-hidden flex"
                style={{ backgroundColor: theme.surface }}
            >
                {languages.map((lang, i) => (
                    <motion.div
                        key={lang.name}
                        initial={{ width: 0 }}
                        animate={{ width: `${(lang.count / total) * 100}%` }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                        style={{ backgroundColor: langColors[lang.name] || langColors.Other }}
                    />
                ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                {languages.slice(0, 5).map((lang) => (
                    <div key={lang.name} className="flex items-center gap-1.5">
                        <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: langColors[lang.name] || langColors.Other }}
                        />
                        <span
                            className="text-xs"
                            style={{ color: theme.textMuted }}
                        >
                            {lang.name} {Math.round((lang.count / total) * 100)}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const GitHubWidget = () => {
    const [profile, setProfile] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [contributions] = useState(() => generateContributions());
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    useEffect(() => {
        async function fetchGitHub() {
            try {
                const [profileRes, reposRes] = await Promise.all([
                    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
                    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=6`)
                ]);

                const profileData = await profileRes.json();
                const reposData = await reposRes.json();

                setProfile(profileData);
                setRepos(reposData);
            } catch (err) {
                console.error('Failed to fetch GitHub data:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchGitHub();
    }, []);

    // Calculate language breakdown from repos
    const languages = useMemo(() => {
        const langCount = {};
        repos.forEach(repo => {
            if (repo.language) {
                langCount[repo.language] = (langCount[repo.language] || 0) + 1;
            }
        });
        return Object.entries(langCount)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count);
    }, [repos]);

    if (loading) {
        return (
            <div className="animate-pulse space-y-6">
                {/* Profile Skeleton */}
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full" style={{ backgroundColor: theme.surface }} />
                    <div className="flex-1">
                        <div className="h-5 w-32 rounded mb-2" style={{ backgroundColor: theme.surface }} />
                        <div className="h-3 w-20 rounded" style={{ backgroundColor: `${theme.surface}80` }} />
                    </div>
                </div>

                {/* Stats Skeleton */}
                <div className="grid grid-cols-4 gap-3">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="rounded-xl p-3 text-center"
                            style={{ backgroundColor: theme.surface }}
                        >
                            <div className="w-4 h-4 mx-auto rounded mb-2" style={{ backgroundColor: `${theme.accent}30` }} />
                            <div className="h-5 w-8 mx-auto rounded mb-1" style={{ backgroundColor: `${theme.accent}20` }} />
                            <div className="h-2 w-10 mx-auto rounded" style={{ backgroundColor: `${theme.surface}80` }} />
                        </div>
                    ))}
                </div>

                {/* Heatmap Skeleton */}
                <div className="h-24 rounded-xl" style={{ backgroundColor: theme.surface }} />
            </div>
        );
    }

    const totalStars = repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
    const totalForks = repos.reduce((acc, repo) => acc + (repo.forks_count || 0), 0);

    return (
        <div className="space-y-8" style={{ paddingLeft: '16px' }}>
            {/* Profile Header */}
            <div className="flex items-center gap-4">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="relative"
                >
                    <img
                        src={profile?.avatar_url}
                        alt={profile?.name}
                        className="w-16 h-16 rounded-full"
                        style={{ border: `2px solid ${theme.accent}40` }}
                    />
                    <div
                        className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: theme.surface, border: `2px solid ${theme.background}` }}
                    >
                        <Github className="w-3 h-3" style={{ color: theme.accent }} />
                    </div>
                </motion.div>
                <div className="flex-1">
                    <h3 className="text-lg font-bold" style={{ color: theme.text }}>
                        {profile?.name || GITHUB_USERNAME}
                    </h3>
                    <p className="text-sm" style={{ color: theme.textMuted }}>@{profile?.login}</p>
                </div>
                <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium"
                    style={{
                        backgroundColor: theme.surface,
                        color: theme.textMuted,
                        border: `1px solid ${theme.border}`
                    }}
                >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Profile
                </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
                {[
                    { icon: Code2, value: profile?.public_repos || 0, label: 'Repos' },
                    { icon: Star, value: totalStars, label: 'Stars' },
                    { icon: GitFork, value: totalForks, label: 'Forks' },
                    { icon: Users, value: profile?.followers || 0, label: 'Followers' },
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="rounded-xl p-4 text-center"
                        style={{
                            backgroundColor: theme.surface,
                            border: `1px solid ${theme.border}`
                        }}
                    >
                        <stat.icon className="w-5 h-5 mx-auto" style={{ color: theme.accent }} />
                        <div className="h-3" />
                        <div className="text-xl font-bold" style={{ color: theme.text }}>{stat.value}</div>
                        <div className="text-xs uppercase tracking-wider" style={{ color: theme.textMuted }}>
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Contribution Heatmap */}
            <div
                className="p-5 rounded-xl"
                style={{
                    backgroundColor: theme.background,
                    border: `1px solid ${theme.border}`
                }}
            >
                <ContributionHeatmap contributions={contributions} />
            </div>

            {/* Language Breakdown */}
            {languages.length > 0 && (
                <div
                    className="p-5 rounded-xl"
                    style={{
                        backgroundColor: theme.background,
                        border: `1px solid ${theme.border}`
                    }}
                >
                    <LanguageBar languages={languages} />
                </div>
            )}

            {/* Top Repos */}
            <div>
                <h4
                    className="text-xs uppercase tracking-wider flex items-center gap-2 mb-3"
                    style={{ color: theme.textMuted }}
                >
                    <Activity className="w-3 h-3" />
                    Top Repositories
                </h4>

                <div className="space-y-2">
                    {repos.slice(0, 4).map((repo, i) => (
                        <motion.a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex items-center justify-between p-3 rounded-lg transition-all group"
                            style={{
                                backgroundColor: theme.surface,
                                border: `1px solid ${theme.border}`
                            }}
                        >
                            <div className="flex items-center gap-3 min-w-0">
                                <div
                                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                                    style={{
                                        background: `linear-gradient(135deg, ${theme.accent}20, ${theme.accentSecondary}20)`
                                    }}
                                >
                                    <Code2 className="w-4 h-4" style={{ color: theme.accent }} />
                                </div>
                                <div className="min-w-0">
                                    <p
                                        className="font-medium text-sm truncate transition-colors"
                                        style={{ color: theme.text }}
                                    >
                                        {repo.name}
                                    </p>
                                    <p
                                        className="text-xs truncate"
                                        style={{ color: theme.textMuted }}
                                    >
                                        {repo.description || 'No description'}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="flex items-center gap-3 text-xs shrink-0"
                                style={{ color: theme.textMuted }}
                            >
                                {repo.language && (
                                    <span
                                        className="px-2 py-0.5 rounded-full"
                                        style={{ backgroundColor: `${theme.accent}15` }}
                                    >
                                        {repo.language}
                                    </span>
                                )}
                                <span className="flex items-center gap-1">
                                    <Star className="w-3 h-3" />
                                    {repo.stargazers_count}
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div
                className="text-center text-xs pt-4"
                style={{
                    color: theme.textMuted,
                    borderTop: `1px solid ${theme.border}`
                }}
            >
                <Calendar className="w-3 h-3 inline mr-1" />
                Member since {new Date(profile?.created_at).getFullYear()}
            </div>
        </div>
    );
};

export default React.memo(GitHubWidget);
