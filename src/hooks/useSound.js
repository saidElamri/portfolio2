import { useCallback, useRef, useEffect } from 'react';
import useThemeStore from '../stores/themeStore';

// Global audio cache to prevent creating multiple Audio instances
const audioCache = new Map();

const getAudio = (url) => {
  if (!audioCache.has(url)) {
    audioCache.set(url, new Audio(url));
  }
  return audioCache.get(url);
};

const useSound = (url, volume = 0.5) => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = getAudio(url);
    audioRef.current.volume = volume;
  }, [url, volume]);

  const play = useCallback(() => {
    // Get current state directly from store (not from closure)
    const { soundEnabled } = useThemeStore.getState();
    
    if (!soundEnabled) return;
    
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Silently fail if user hasn't interacted with page
      });
    }
  }, []);

  return play;
};

export const sounds = {
  click: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
  hover: 'https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3',
  startup: 'https://assets.mixkit.co/active_storage/sfx/1057/1057-preview.mp3',
  type: 'https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3',
  success: 'https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3',
};

export default useSound;
