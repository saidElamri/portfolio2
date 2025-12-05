import React from 'react';
import { Download, Check, Trash2 } from 'lucide-react';
import useThemeStore, { themes } from '../stores/themeStore';
import { availableApps } from '../data/apps';

const AppStoreWindow = ({ installedApps, onInstall, onOpen }) => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    return (
        <div className="h-full flex flex-col p-6 text-white overflow-y-auto custom-scrollbar">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-2">App Store</h2>
                <p className="text-white/60">Discover and install new experiences for SaidOS.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableApps.map((app) => {
                    const isInstalled = installedApps.includes(app.id);
                    return (
                        <div
                            key={app.id}
                            className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-4 hover:border-white/20 transition-all group"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                <app.icon className="w-6 h-6 text-white" />
                            </div>

                            <div className="flex-1">
                                <h3 className="font-bold text-lg">{app.name}</h3>
                                <p className="text-sm text-white/50 leading-snug">{app.description}</p>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => isInstalled ? onOpen(app.id) : onInstall(app.id)}
                                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all ${isInstalled
                                        ? 'bg-white/10 text-white hover:bg-white/20'
                                        : 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20'
                                        }`}
                                >
                                    {isInstalled ? (
                                        <>
                                            <Check className="w-4 h-4" /> Open
                                        </>
                                    ) : (
                                        <>
                                            <Download className="w-4 h-4" /> Install
                                        </>
                                    )}
                                </button>

                                {isInstalled && (
                                    <button
                                        onClick={() => onInstall(app.id, true)}
                                        className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all border border-red-500/10"
                                        title="Uninstall"
                                    >
                                        <Trash2 className="w-4 h-4" />
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
