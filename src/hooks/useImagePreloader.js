import { useEffect, useState } from 'react';

/**
 * Preloads an array of image URLs
 * @param {string[]} imageUrls - Array of image URLs to preload
 * @returns {{ loaded: boolean, progress: number }}
 */
export const useImagePreloader = (imageUrls) => {
    const [loaded, setLoaded] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!imageUrls || imageUrls.length === 0) {
            setLoaded(true);
            setProgress(100);
            return;
        }

        let loadedCount = 0;
        const totalImages = imageUrls.length;

        const preloadImage = (url) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    loadedCount++;
                    setProgress(Math.round((loadedCount / totalImages) * 100));
                    resolve(true);
                };
                img.onerror = () => {
                    loadedCount++;
                    setProgress(Math.round((loadedCount / totalImages) * 100));
                    resolve(false);
                };
                img.src = url;
            });
        };

        Promise.all(imageUrls.map(preloadImage)).then(() => {
            setLoaded(true);
        });
    }, [imageUrls]);

    return { loaded, progress };
};

/**
 * Preloads a single image URL
 * @param {string} url - Image URL to preload
 * @returns {{ loaded: boolean, error: boolean }}
 */
export const useImage = (url) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) {
            setLoaded(true);
            return;
        }

        const img = new Image();
        img.onload = () => {
            setLoaded(true);
            setError(false);
        };
        img.onerror = () => {
            setLoaded(true);
            setError(true);
        };
        img.src = url;
    }, [url]);

    return { loaded, error };
};

export default useImagePreloader;
