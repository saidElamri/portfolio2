import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const winner = calculateWinner(board);
    const isDraw = !winner && board.every(Boolean);

    const handleClick = (i) => {
        if (winner || board[i]) return;
        const newBoard = [...board];
        newBoard[i] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);

    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
    };

    return (
        <div className="h-full flex flex-col items-center justify-center bg-[#1e1e1e] p-4 font-sans">
            <div className="mb-6 text-2xl font-bold text-white">
                {winner ? (
                    <span className="text-green-400">Winner: {winner} 🎉</span>
                ) : isDraw ? (
                    <span className="text-yellow-400">Draw! 🤝</span>
                ) : (
                    <span className="text-white/80">Next: {xIsNext ? 'X' : 'O'}</span>
                )}
            </div>

            <div className="grid grid-cols-3 gap-2 bg-white/10 p-2 rounded-xl">
                {board.map((square, i) => (
                    <button
                        key={i}
                        className={`w-20 h-20 bg-white/5 rounded-lg text-4xl font-bold flex items-center justify-center transition-all hover:bg-white/10 ${square === 'X' ? 'text-blue-400' : 'text-red-400'
                            }`}
                        onClick={() => handleClick(i)}
                    >
                        {square}
                    </button>
                ))}
            </div>

            <button
                onClick={resetGame}
                className="mt-8 flex items-center gap-2 px-6 py-2bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all border border-white/10"
            >
                <RefreshCw className="w-4 h-4" /> Reset Game
            </button>
        </div>
    );
};

export default TicTacToe;
