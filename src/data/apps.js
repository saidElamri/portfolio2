import { Calculator, Gamepad2 } from 'lucide-react';

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
    }
];
