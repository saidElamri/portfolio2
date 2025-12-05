import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const PreloaderContext = createContext();

export const usePreloader = () => {
    const context = useContext(PreloaderContext);
    if (!context) {
        throw new Error('usePreloader must be used within a PreloaderProvider');
    }
    return context;
};

export const PreloaderProvider = ({ children }) => {
    const [assetsLoaded, setAssetsLoaded] = useState(0);
    const [totalAssets, setTotalAssets] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    const registerAsset = useCallback(() => {
        setTotalAssets(prev => prev + 1);
        return () => {
            // Optional: cleanup if assets unmount before loading
        };
    }, []);

    const markAssetLoaded = useCallback(() => {
        setAssetsLoaded(prev => prev + 1);
    }, []);

    // Calculate progress
    const progress = totalAssets === 0 ? 100 : Math.min(100, Math.round((assetsLoaded / totalAssets) * 100));

    // Force minimum load time for effect
    useEffect(() => {
        if (progress === 100) {
            const timer = setTimeout(() => setIsLoaded(true), 1500); // 1.5s delay after load
            return () => clearTimeout(timer);
        }
    }, [progress]);

    const value = {
        progress,
        isLoaded,
        registerAsset,
        markAssetLoaded
    };

    return (
        <PreloaderContext.Provider value={value}>
            {children}
        </PreloaderContext.Provider>
    );
};

// Hook for Image Preloading
export const useImagePreloader = (src) => {
    const { registerAsset, markAssetLoaded } = usePreloader();

    useEffect(() => {
        if (!src) return;

        registerAsset();
        const img = new Image();
        img.src = src;
        img.onload = markAssetLoaded;
        img.onerror = markAssetLoaded; // Count as loaded even on error to prevent blocking

    }, [src, registerAsset, markAssetLoaded]);
};
