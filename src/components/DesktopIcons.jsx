import React, { memo } from 'react';
import { motion } from 'framer-motion';

const DesktopIcons = memo(({ installedApps, availableApps, iconPositions, setIconPositions, toggleWindow, focusWindow }) => {
    return (
        <div className="absolute top-8 left-4 bottom-24 flex flex-col flex-wrap content-start gap-4 z-10 pointer-events-auto">
            {installedApps.map(appId => {
                const app = availableApps.find(a => a.id === appId);
                if (!app) return null;
                const position = iconPositions[appId] || { x: 0, y: 0 };
                const Icon = app.icon;

                return (
                    <motion.div
                        key={appId}
                        drag
                        dragMomentum={false}
                        dragElastic={0.05} // Less elastic to feel more precise
                        dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }} // Wide constraints to prevent snap-back to 0 if boundary hit (which defaults to element)
                        initial={{ x: position.x, y: position.y }}
                        animate={{ x: position.x, y: position.y }}
                        onDragEnd={(e, info) => {
                            const newPos = { x: position.x + info.offset.x, y: position.y + info.offset.y };
                            setIconPositions(prev => ({ ...prev, [appId]: newPos }));
                        }}
                        className="w-20 group flex flex-col items-center gap-1 cursor-pointer select-none"
                        onDoubleClick={() => { toggleWindow(appId); focusWindow(appId); }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className={`
              w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg
              bg-gradient-to-br ${app.color}
              backdrop-blur-md border border-white/20
              group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
              transition-shadow duration-300
            `}>
                            <Icon className="w-6 h-6 drop-shadow-md" />
                        </div>
                        <span className="text-white/90 text-[11px] font-medium drop-shadow-md px-1.5 py-0.5 rounded-md group-hover:bg-white/10 transition-colors bg-black/20">
                            {app.label}
                        </span>
                    </motion.div>
                );
            })}
        </div>
    );
});

DesktopIcons.displayName = 'DesktopIcons';

export default DesktopIcons;
