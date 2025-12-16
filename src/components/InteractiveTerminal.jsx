import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useThemeStore, { themes } from '../stores/themeStore';

const InteractiveTerminal = ({ onHackerMode }) => {
    const { t } = useTranslation();
    const { setTheme, currentTheme } = useThemeStore();
    const [gameState, setGameState] = useState({ playing: false, target: 0, attempts: 0 });
    const [history, setHistory] = useState([
        { type: 'output', content: t('terminal.welcome') },
        { type: 'output', content: t('terminal.help') },
    ]);
    const [input, setInput] = useState('');
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (cmd) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let output = '';

        // Add to command history
        if (cmd.trim()) {
            setCommandHistory(prev => [...prev.filter(c => c !== cmd.trim()), cmd.trim()]);
            setHistoryIndex(-1);
        }

        // Game Mode Logic
        if (gameState.playing) {
            const guess = parseInt(cmd);
            if (isNaN(guess)) {
                setHistory(prev => [...prev, { type: 'input', content: cmd }, { type: 'output', content: 'Please enter a number or type "exit" to quit.' }]);
                return;
            }

            if (cmd.toLowerCase() === 'exit') {
                setGameState({ playing: false, target: 0, attempts: 0 });
                setHistory(prev => [...prev, { type: 'input', content: cmd }, { type: 'output', content: 'Game quit.' }]);
                return;
            }

            const newAttempts = gameState.attempts + 1;
            if (guess === gameState.target) {
                setGameState({ playing: false, target: 0, attempts: 0 });
                output = (
                    <span className="text-green-400">
                        🎉 Correct! You guessed inputs {gameState.target} in {newAttempts} attempts.
                    </span>
                );
            } else if (guess < gameState.target) {
                setGameState(prev => ({ ...prev, attempts: newAttempts }));
                output = <span className="text-yellow-400">Too low! Try again.</span>;
            } else {
                setGameState(prev => ({ ...prev, attempts: newAttempts }));
                output = <span className="text-yellow-400">Too high! Try again.</span>;
            }

            setHistory(prev => [...prev, { type: 'input', content: cmd }, { type: 'output', content: output }]);
            return;
        }

        switch (cleanCmd.split(' ')[0]) {
            case 'help':
                output = (
                    <div className="space-y-2">
                        <div className="text-white/70">Available commands:</div>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
                            <div><span className="text-green-400">about</span> - {t('terminal.commands.about')}</div>
                            <div><span className="text-green-400">skills</span> - {t('terminal.commands.skills')}</div>
                            <div><span className="text-green-400">projects</span> - {t('terminal.commands.projects')}</div>
                            <div><span className="text-green-400">contact</span> - {t('terminal.commands.contact')}</div>
                            <div><span className="text-green-400">whoami</span> - Current user</div>
                            <div><span className="text-green-400">date</span> - Current time</div>
                            <div><span className="text-green-400">matrix</span> - Enter the matrix</div>
                            <div><span className="text-green-400">clear</span> - {t('terminal.commands.clear')}</div>
                            <div><span className="text-green-400">history</span> - Command history</div>
                            <div><span className="text-green-400">neofetch</span> - System info</div>
                            <div><span className="text-yellow-400">journey</span> - Career timeline</div>
                            <div><span className="text-yellow-400">coffee</span> - Need caffeine?</div>
                            <div><span className="text-yellow-400">quote</span> - AI wisdom</div>
                            <div><span className="text-red-400">sudo hire</span> - Hire me!</div>
                        </div>
                        <div className="text-white/40 text-xs mt-2">Tip: Use ↑↓ arrows to navigate command history</div>
                    </div>
                );
                break;
            case 'about':
                output = (
                    <div className="space-y-2">
                        <div className="text-xl">👋 <span className="text-white font-bold">Said Elamri</span></div>
                        <div className="text-white/70">AI Architect × Full Stack Engineer based in Morocco 🇲🇦</div>
                        <div className="text-white/50 text-sm">
                            I turn complex problems into elegant solutions and coffee into code.
                        </div>
                        <div className="flex gap-4 mt-2 text-xs">
                            <span className="text-purple-400">🧠 LangChain</span>
                            <span className="text-blue-400">⚛️ React</span>
                            <span className="text-green-400">🐍 Python</span>
                            <span className="text-yellow-400">🔧 DevOps</span>
                        </div>
                    </div>
                );
                break;
            case 'whoami':
                output = (
                    <div className="space-y-1">
                        <div><span className="text-green-400">User:</span> guest@saidos</div>
                        <div><span className="text-blue-400">Role:</span> Visitor</div>
                        <div><span className="text-yellow-400">Access:</span> Read-only (try <span className="text-red-400">sudo hire</span> for elevated privileges 😉)</div>
                    </div>
                );
                break;
            case 'projects':
                output = (
                    <div className="space-y-2">
                        <div className="text-white/70">Featured Projects:</div>
                        <div className="space-y-1 text-sm">
                            <div>🎓 <span className="text-blue-400">MLS Quiz App</span> - MERN Stack Quiz Platform</div>
                            <div>🤖 <span className="text-purple-400">Code Explainer AI</span> - Gemini-powered Code Analysis</div>
                            <div>⛽ <span className="text-green-400">PetroSolPro</span> - Enterprise Stock Management</div>
                            <div>🍜 <span className="text-yellow-400">Food Xplorers</span> - Culinary Discovery Platform</div>
                        </div>
                        <div className="text-white/40 text-xs">Open the Projects window for details!</div>
                    </div>
                );
                break;
            case 'skills':
            case 'skilss':
                output = (
                    <div className="mt-3 mb-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                            <div><span className="text-blue-400 font-bold">Frontend:</span> React 19, TypeScript, Tailwind, Three.js</div>
                            <div><span className="text-green-400 font-bold">Backend:</span> Node.js, Python, FastAPI, PostgreSQL</div>
                            <div><span className="text-purple-400 font-bold">AI/ML:</span> LangChain, TensorFlow, OpenAI, RAG</div>
                            <div><span className="text-yellow-400 font-bold">DevOps:</span> Docker, AWS, CI/CD, Security</div>
                        </div>
                    </div>
                );
                break;
            case 'contact':
                output = (
                    <div className="space-y-1">
                        <div><span className="text-blue-400">📧 Email:</span> said.elamri.evil@gmail.com</div>
                        <div><span className="text-purple-400">🐙 GitHub:</span> github.com/saidElamri</div>
                        <div><span className="text-blue-300">💼 LinkedIn:</span> linkedin.com/in/saidelamri</div>
                        <div className="text-white/40 text-xs mt-2">Or just open the Contact window! 📮</div>
                    </div>
                );
                break;
            case 'journey':
                output = (
                    <div className="space-y-2">
                        <div className="text-white/70 mb-2">📍 Career Timeline:</div>
                        <div className="border-l-2 border-[#58a6ff] pl-4 space-y-3 text-sm">
                            <div><span className="text-green-400">2021</span> 🌱 Started coding journey (HTML, CSS, JS)</div>
                            <div><span className="text-blue-400">2022</span> 🎨 Frontend mastery (React, Tailwind)</div>
                            <div><span className="text-yellow-400">2023</span> 🔥 Full Stack evolution (MERN Stack)</div>
                            <div><span className="text-purple-400">2024</span> 🤖 AI Architecture (LangChain, RAG, LLMs)</div>
                            <div><span className="text-red-400">2025</span> 🏢 Enterprise solutions & Security</div>
                        </div>
                    </div>
                );
                break;
            case 'coffee':
                output = (
                    <div>
                        <pre className="text-yellow-600 text-xs leading-tight">{`
      )  (
     (   ) )
      ) ( (
    _______)_
 .-'---------|  
( C|/\\/\\/\\/\\/|
 '-./\\/\\/\\/\\/|
   '_________'
    '-------'
                        `}</pre>
                        <div className="text-white/70 mt-2">☕ Code runs on caffeine. Current status: <span className="text-green-400">BREWING</span></div>
                    </div>
                );
                break;
            case 'quote':
                const quotes = [
                    { text: "The best code is no code at all.", author: "Jeff Atwood" },
                    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
                    { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
                    { text: "AI is the new electricity.", author: "Andrew Ng" },
                    { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
                ];
                const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
                output = (
                    <div className="space-y-2">
                        <div className="text-white/70 italic">"{randomQuote.text}"</div>
                        <div className="text-purple-400 text-sm">— {randomQuote.author}</div>
                    </div>
                );
                break;
            case 'matrix':
                output = (
                    <div className="space-y-1">
                        <div className="text-green-400">Wake up, Neo...</div>
                        <div className="text-green-400">The Matrix has you...</div>
                        <div className="text-green-400">Follow the white rabbit. 🐇</div>
                    </div>
                );
                if (onHackerMode) onHackerMode(true);
                break;
            case 'exit':
                output = 'Exiting matrix... Welcome back to reality.';
                if (onHackerMode) onHackerMode(false);
                break;
            case 'clear':
            case 'cls':
                setHistory([]);
                return;
            case 'history':
                output = commandHistory.length > 0
                    ? commandHistory.map((c, i) => `${i + 1}. ${c}`).join('\n')
                    : 'No commands in history yet.';
                break;
            case 'ls':
                output = (
                    <div className="flex gap-6">
                        <span className="text-blue-400">About Me.txt</span>
                        <span className="text-yellow-400">Projects/</span>
                        <span className="text-blue-400">Contact.txt</span>
                        <span className="text-purple-400">Skills/</span>
                        <span className="text-green-400">Journey.md</span>
                    </div>
                );
                break;
            case 'pwd':
                output = '/home/guest/saidos-portfolio';
                break;
            case 'date':
                output = new Date().toLocaleString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                });
                break;
            case 'neofetch':
                output = (
                    <div className="flex gap-6">
                        <pre className="text-[#58a6ff] text-xs leading-tight">{`
   _____ ____  
  / ___// __ \\ 
  \\__ \\/ / / /
 ___/ / /_/ / 
/____/\\____/  
                        `}</pre>
                        <div className="space-y-1 text-sm">
                            <div><span className="text-purple-400">OS:</span> SaidOS v2.0</div>
                            <div><span className="text-purple-400">Host:</span> AI Architect Desktop</div>
                            <div><span className="text-purple-400">Kernel:</span> React 19</div>
                            <div><span className="text-purple-400">Shell:</span> SaidShell 2.0</div>
                            <div><span className="text-purple-400">Theme:</span> Midnight</div>
                            <div><span className="text-purple-400">Uptime:</span> {Math.floor(performance.now() / 1000)}s</div>
                        </div>
                    </div>
                );
                break;
            case 'sudo':
                if (cleanCmd.includes('hire')) {
                    output = (
                        <div className="space-y-2">
                            <div className="text-green-400">✓ Sudo access granted!</div>
                            <div className="text-white/70">
                                Initializing hire protocol...
                            </div>
                            <div className="bg-green-500/10 border border-green-500/30 rounded p-3 mt-2">
                                <div className="text-green-400 font-bold">🎉 Ready to collaborate!</div>
                                <div className="text-white/60 text-sm mt-1">
                                    Open the Contact window or email me at:
                                </div>
                                <div className="text-blue-400 text-sm">said.elamri.evil@gmail.com</div>
                            </div>
                            <div className="text-white/40 text-xs">P.S. You've unlocked an achievement! 🏆</div>
                        </div>
                    );
                } else {
                    output = (
                        <span className="text-red-400">
                            Permission denied. Try <span className="text-green-400">sudo hire</span> instead! 😄
                        </span>
                    );
                }
                break;
            case 'cd':
                output = 'Access Denied: You do not have permission to change directories.';
                break;
            case 'vim':
            case 'vi':
            case 'nano':
                output = 'Error: Real developers use VS Code. 😉';
                break;
            case 'rm':
                if (cleanCmd.includes('-rf')) {
                    output = (
                        <span className="text-red-400">
                            🚨 NICE TRY! You thought you could rm -rf my portfolio? 😂
                        </span>
                    );
                } else {
                    output = 'Permission denied.';
                }
                break;
            case 'cat':
                if (cleanCmd.includes('readme') || cleanCmd.includes('about')) {
                    output = 'Said Elamri — AI Architect × Full Stack Engineer. Type "about" for more info.';
                } else {
                    output = 'File not found. Try: cat readme';
                }
                break;
            case 'echo':
                const echoContent = cmd.slice(5);
                output = echoContent || '';
                break;
            case 'ping':
                output = (
                    <div className="space-y-1 text-green-400">
                        <div>PING portfolio.dev</div>
                        <div>64 bytes: time=0.042ms</div>
                        <div>64 bytes: time=0.038ms</div>
                        <div>64 bytes: time=0.041ms</div>
                        <div className="text-white/40 mt-1">--- 0% packet loss ---</div>
                    </div>
                );
                break;
            case 'theme':
                const themeCmd = cleanCmd.split(' ');
                if (themeCmd[1] === 'set' && themeCmd[2]) {
                    const newTheme = themeCmd[2];
                    if (themes[newTheme]) {
                        setTheme(newTheme);
                        output = <span className="text-green-400">Theme set to: {newTheme}</span>;
                    } else {
                        output = <span className="text-red-400">Theme not found. Try: midnight, matrix, cyberpunk, dracula, nord</span>;
                    }
                } else {
                    output = 'Usage: theme set <theme_name>';
                }
                break;
            case 'curl':
                const url = cleanCmd.split(' ')[1];
                if (!url) {
                    output = 'Usage: curl <url>';
                } else {
                    output = (
                        <div className="text-xs text-green-300 break-all">
                            {`{
  "status": 200,
  "url": "${url}",
  "data": {
    "message": "Successfully fetched data from universe",
    "timestamp": "${new Date().toISOString()}",
    "user": "guest"
  }
}`}
                        </div>
                    );
                }
                break;
            case 'game':
                const target = Math.floor(Math.random() * 100) + 1;
                setGameState({ playing: true, target, attempts: 0 });
                output = (
                    <div className="text-blue-400">
                        🎮 Guess the Number!
                        <br />
                        I'm thinking of a number between 1 and 100.
                        <br />
                        Type your guess below (or 'exit' to quit).
                    </div>
                );
                break;
            default:
                output = (
                    <span>
                        Command not found: <span className="text-red-400">{cleanCmd}</span>. Type <span className="text-green-400">help</span> for available commands.
                    </span>
                );
        }

        setHistory(prev => [
            ...prev,
            { type: 'input', content: cmd },
            { type: 'output', content: output }
        ]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput('');
            }
        }
    };

    return (
        <div className="font-mono text-sm h-full flex flex-col" style={{ paddingLeft: '16px' }} onClick={() => document.getElementById('term-input')?.focus()}>
            <div className="flex-1 overflow-y-auto">
                {history.map((line, i) => (
                    <div
                        key={i}
                        className={`${line.type === 'input' ? 'text-white' : 'text-neutral-400'}`}
                        style={{ marginTop: i > 0 ? '8px' : 0 }}
                    >
                        {line.type === 'input' && <span className="text-green-400 mr-2">➜ ~</span>}
                        {line.content}
                    </div>
                ))}
                <div ref={bottomRef} />
            </div>

            <div className="h-4"></div>

            <div className="flex items-center">
                <span className="text-green-400 mr-2">➜ ~</span>
                <input
                    id="term-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent border-none outline-none text-white flex-1"
                    autoFocus
                    autoComplete="off"
                    spellCheck="false"
                />
            </div>
        </div>
    );
};

export default InteractiveTerminal;
