import { Calculator, Gamepad2, Cloud, BarChart3, Moon, Music } from 'lucide-react';

export const availableApps = [
    {
        id: 'calculator',
        name: 'Calculator',
        description: 'Perform basic arithmetic operations.',
        icon: Calculator,
        color: 'from-orange-500 to-red-500'
    },
    {
        id: 'tictactoe',
        name: 'Tic Tac Toe',
        description: 'Classic game. Play against yourself!',
        icon: Gamepad2,
        color: 'from-blue-500 to-cyan-500'
    },
    {
        id: 'weather',
        name: 'Weather',
        description: 'Check the real-time weather and forecasts.',
        icon: Cloud,
        color: 'from-sky-400 to-indigo-500'
    },
    {
        id: 'monitor',
        name: 'System Monitor',
        description: 'Track CPU, RAM, and network usage in real-time.',
        icon: BarChart3,
        color: 'from-emerald-400 to-cyan-600'
    },
    {
        id: 'zenspace',
        name: 'Zen Space',
        description: 'Relax with ambient sounds and focus timers.',
        icon: Moon,
        color: 'from-indigo-600 to-purple-800'
    },
    {
        id: 'music',
        name: 'Music',
        description: 'Stream your favorite tracks and curated playlists.',
        icon: Music,
        color: 'from-pink-500 to-rose-600'
    }
];
