import React, { useState, useEffect } from 'react';
import useThemeStore, { themes } from '../stores/themeStore';
import { Palette, RotateCcw, Save } from 'lucide-react';

const SettingsWindow = () => {
    const { currentTheme, customTheme, setTheme, setCustomTheme } = useThemeStore();

    // Local state for instant feedback without spamming store updates
    const [localTheme, setLocalTheme] = useState(
        currentTheme === 'custom' ? customTheme : themes[currentTheme] || themes.midnight
    );

    useEffect(() => {
        setLocalTheme(currentTheme === 'custom' ? customTheme : themes[currentTheme]);
    }, [currentTheme]);

    const handleChange = (key, value) => {
        const newTheme = { ...localTheme, [key]: value };
        setLocalTheme(newTheme);
        setCustomTheme(newTheme); // Update store immediately for live preview
    };

    const resetToMidnight = () => {
        setCustomTheme(themes.midnight);
    };

    return (
        <div className="h-full flex flex-col p-6 text-white overflow-y-auto custom-scrollbar">
            <div className="mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Palette className="w-6 h-6 text-blue-400" />
                    Theme Builder
                </h2>
                <p className="text-white/60 text-sm mt-1">
                    Customize the look and feel of SaidOS. Changes save automatically.
                </p>
            </div>

            <div className="space-y-6">
                {/* Background Colors */}
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/40">Colors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm">Background</label>
                            <div className="flex gap-2">
                                <input
                                    type="color"
                                    value={localTheme.background}
                                    onChange={(e) => handleChange('background', e.target.value)}
                                    className="w-10 h-10 rounded cursor-pointer bg-transparent border-none"
                                />
                                <input
                                    type="text"
                                    value={localTheme.background}
                                    onChange={(e) => handleChange('background', e.target.value)}
                                    className="flex-1 bg-black/20 border border-white/10 rounded px-3 text-sm font-mono"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm">Surface / Window</label>
                            <div className="flex gap-2">
                                <input
                                    type="color"
                                    value={localTheme.surface}
                                    onChange={(e) => handleChange('surface', e.target.value)}
                                    className="w-10 h-10 rounded cursor-pointer bg-transparent border-none"
                                />
                                <input
                                    type="text"
                                    value={localTheme.surface}
                                    onChange={(e) => handleChange('surface', e.target.value)}
                                    className="flex-1 bg-black/20 border border-white/10 rounded px-3 text-sm font-mono"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm">Primary Accent</label>
                            <div className="flex gap-2">
                                <input
                                    type="color"
                                    value={localTheme.accent}
                                    onChange={(e) => handleChange('accent', e.target.value)}
                                    className="w-10 h-10 rounded cursor-pointer bg-transparent border-none"
                                />
                                <input
                                    type="text"
                                    value={localTheme.accent}
                                    onChange={(e) => handleChange('accent', e.target.value)}
                                    className="flex-1 bg-black/20 border border-white/10 rounded px-3 text-sm font-mono"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm">Secondary Accent</label>
                            <div className="flex gap-2">
                                <input
                                    type="color"
                                    value={localTheme.accentSecondary}
                                    onChange={(e) => handleChange('accentSecondary', e.target.value)}
                                    className="w-10 h-10 rounded cursor-pointer bg-transparent border-none"
                                />
                                <input
                                    type="text"
                                    value={localTheme.accentSecondary}
                                    onChange={(e) => handleChange('accentSecondary', e.target.value)}
                                    className="flex-1 bg-black/20 border border-white/10 rounded px-3 text-sm font-mono"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Preset Actions */}
                <div className="flex gap-3">
                    <button
                        onClick={() => handleChange('border', 'rgba(255,255,255,0.1)')}
                        className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm transition-colors border border-white/10"
                    >
                        Reset Borders
                    </button>
                    <button
                        onClick={resetToMidnight}
                        className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-sm transition-colors border border-red-500/20 flex items-center gap-2"
                    >
                        <RotateCcw className="w-4 h-4" /> Reset to Defaults
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsWindow;
