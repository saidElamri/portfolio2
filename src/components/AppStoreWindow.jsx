import React from 'react';
import { Download, Check, Trash2 } from 'lucide-react';
import useThemeStore, { themes } from '../stores/themeStore';
import { availableApps } from '../data/apps';

const AppStoreWindow = ({ installedApps, onInstall, onOpen }) => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    return (
        <div className="h-full flex flex-col p-6 overflow-y-auto custom-scrollbar" style={{ paddingLeft: '24px' }}>
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-xl font-bold mb-1" style={{ color: theme.text }}>
                    App Store
                </h2>
                <p className="text-sm" style={{ color: theme.textMuted }}>
                    Discover and install new experiences
                </p>
            </div>

            {/* App Grid - Clean cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableApps.map((app) => {
                    const isInstalled = installedApps.includes(app.id);
                    return (
                        <div
                            key={app.id}
                            className="p-4 rounded-xl"
                            style={{
                                backgroundColor: theme.surface,
                                border: `1px solid ${theme.border}`,
                            }}
                        >
                            {/* App Header */}
                            <div className="flex items-start gap-3 mb-3">
                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center shrink-0`}>
                                    <app.icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-sm truncate" style={{ color: theme.text }}>
                                        {app.name}
                                    </h3>
                                    <p className="text-xs line-clamp-2" style={{ color: theme.textMuted }}>
                                        {app.description}
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2">
                                <button
                                    onClick={() => isInstalled ? onOpen(app.id) : onInstall(app.id)}
                                    className="flex-1 py-2 rounded-lg text-xs font-medium text-center"
                                    style={{
                                        backgroundColor: isInstalled ? theme.background : theme.accent,
                                        color: isInstalled ? theme.text : '#fff',
                                    }}
                                >
                                    {isInstalled ? (
                                        <span className="flex items-center justify-center gap-1.5">
                                            <Check className="w-3 h-3" /> Open
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-1.5">
                                            <Download className="w-3 h-3" /> Install
                                        </span>
                                    )}
                                </button>

                                {isInstalled && (
                                    <button
                                        onClick={() => onInstall(app.id, true)}
                                        className="p-2 rounded-lg"
                                        style={{
                                            backgroundColor: 'rgba(239, 68, 68, 0.1)',
                                            color: '#ef4444'
                                        }}
                                        title="Uninstall"
                                    >
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AppStoreWindow;
