import { useState, useEffect, useCallback } from 'react';
import useThemeStore from '../stores/themeStore';

const useVoiceCommands = (toggleWindow, windows, setTheme) => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [recognition, setRecognition] = useState(null);

    useEffect(() => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const newRecognition = new SpeechRecognition();
            newRecognition.continuous = false;
            newRecognition.interimResults = false;
            newRecognition.lang = 'en-US';

            newRecognition.onstart = () => setIsListening(true);
            newRecognition.onend = () => setIsListening(false);
            newRecognition.onresult = (event) => {
                const last = event.results.length - 1;
                const command = event.results[last][0].transcript.toLowerCase().trim();
                setTranscript(command);
                processCommand(command);
            };

            setRecognition(newRecognition);
        }
    }, [toggleWindow, setTheme]); // Removed 'windows' dependency

    const processCommand = (cmd) => {
        // Window Commands
        if (cmd.includes('open') || cmd.includes('show')) {
            if (cmd.includes('about')) toggleWindow('about');
            if (cmd.includes('projects')) toggleWindow('projects');
            if (cmd.includes('skills')) toggleWindow('skills');
            if (cmd.includes('notes')) toggleWindow('notes');
            if (cmd.includes('terminal')) toggleWindow('terminal');
            if (cmd.includes('settings')) toggleWindow('settings');
            if (cmd.includes('store')) toggleWindow('store');
        }

        if (cmd.includes('close') || cmd.includes('hide')) {
             if (cmd.includes('about')) toggleWindow('about');
            if (cmd.includes('projects')) toggleWindow('projects');
            if (cmd.includes('skills')) toggleWindow('skills');
            if (cmd.includes('notes')) toggleWindow('notes');
            if (cmd.includes('terminal')) toggleWindow('terminal');
            if (cmd.includes('settings')) toggleWindow('settings');
            if (cmd.includes('store')) toggleWindow('store');
        }

        // Theme Commands
        if (cmd.includes('theme') || cmd.includes('mode')) {
            if (cmd.includes('dark') || cmd.includes('midnight')) setTheme('midnight');
            if (cmd.includes('nature') || cmd.includes('green')) setTheme('nature');
            if (cmd.includes('ocean') || cmd.includes('blue')) setTheme('ocean');
            if (cmd.includes('sunset') || cmd.includes('pink')) setTheme('sunset');
            if (cmd.includes('cyber') || cmd.includes('cyberpunk')) setTheme('cyberpunk');
            if (cmd.includes('custom')) setTheme('custom');
        }

        // Music Commands (Basic simulation)
        // Ideally we'd need access to the music player ref or state
    };

    const toggleListening = useCallback(() => {
        if (recognition) {
            if (isListening) {
                recognition.stop();
            } else {
                try {
                    recognition.start();
                } catch (e) {
                    console.error("Speech recognition already started");
                }
            }
        } else {
            alert("Voice control is not supported in this browser.");
        }
    }, [recognition, isListening]);

    return { isListening, transcript, toggleListening };
};

export default useVoiceCommands;
