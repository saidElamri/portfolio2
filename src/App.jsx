import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import AiAssistant from './components/AiAssistant';
import { Terminal, FolderOpen, Mail, User, Github, Linkedin, Code, Monitor, Bot, Briefcase, Download, Copy, Check, FileText, ShoppingBag, Calculator, Gamepad2, Settings, Mic, MicOff } from 'lucide-react';
import Dock from './components/Dock';
import Window from './components/Window';
import Grain from './components/Grain';
import BootScreen from './components/BootScreen';
import InteractiveTerminal from './components/InteractiveTerminal';
import MatrixRain from './components/MatrixRain';
import CommandPalette from './components/CommandPalette';
import DesktopIcons from './components/DesktopIcons';
import ContextMenu from './components/ContextMenu';
// import HeroScene from './components/HeroScene'; // Disabled - using static backgrounds
import BentoGrid from './components/BentoGrid';
import ThemePicker from './components/ThemePicker';
import GitHubWidget from './components/GitHubWidget';
import SkillsSection from './components/SkillsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactForm from './components/ContactForm';
import HeroProfile from './components/HeroProfile';
import { PreloaderProvider, useImagePreloader } from './context/PreloaderContext';
import { Spotlight, ClickRipple, useKonamiCode, Achievement, getGreeting, LiveIndicator, TypeWriter } from './components/Effects';
import SEOManager from './components/SEOManager';
import { projects } from './data/portfolio';
import useThemeStore from './stores/themeStore';
// Hooks
import useVoiceCommands from './hooks/useVoiceCommands';
import MobileNav from './components/MobileNav';
import MobileStatusBar from './components/MobileStatusBar';
import MobileHomeScreen from './components/MobileHomeScreen';
import CalculatorApp from './components/apps/Calculator'; // Keep small apps eager if needed or lazy them too
import TicTacToeApp from './components/apps/TicTacToe';
import { availableApps } from './data/apps';
import { Suspense, lazy } from 'react';

// Lazy load heavy window components
const SkillsWindow = lazy(() => import('./components/SkillsWindow'));
const ProjectWindow = lazy(() => import('./components/ProjectWindow'));
const NotesWindow = lazy(() => import('./components/NotesWindow'));
const AppStoreWindow = lazy(() => import('./components/AppStoreWindow'));
const SettingsWindow = lazy(() => import('./components/SettingsWindow'));

// Loading fallback
const WindowLoader = () => (
  <div className="flex items-center justify-center h-full text-white/40">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
  </div>
);

const PortfolioContent = () => {
  const { t } = useTranslation();
  const [booted, setBooted] = useState(false);
  const [hackerMode, setHackerMode] = useState(false);
  const [showCmdPalette, setShowCmdPalette] = useState(false);
  const [showAchievement, setShowAchievement] = useState(false);
  const [achievementData, setAchievementData] = useState({ title: '', description: '' });
  const [selectedProject, setSelectedProject] = useState(null);

  // Mobile detection - initialize correctly from start
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 768
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  // App Store Persistence
  const [installedApps, setInstalledApps] = useState(() => {
    const saved = localStorage.getItem('saidos-installed-apps');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('saidos-installed-apps', JSON.stringify(installedApps));
  }, [installedApps]);

  const [iconPositions, setIconPositions] = useState(() => {
    const saved = localStorage.getItem('saidos-desktop-icons');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('saidos-desktop-icons', JSON.stringify(iconPositions));
  }, [iconPositions]);

  // Windows state - on mobile, start with no windows open
  const [windows, setWindows] = useState(() => {
    const isMobileInit = typeof window !== 'undefined' && window.innerWidth < 768;
    return {
      about: { isOpen: !isMobileInit, zIndex: 1 },
      projects: { isOpen: false, zIndex: 0 },
      projectDetails: { isOpen: false, zIndex: 0 },
      terminal: { isOpen: false, zIndex: 0 },
      contact: { isOpen: false, zIndex: 0 },
      ai: { isOpen: false, zIndex: 0 },
      github: { isOpen: false, zIndex: 0 },
      skills: { isOpen: false, zIndex: 0 },
      notes: { isOpen: false, zIndex: 0 },
      store: { isOpen: false, zIndex: 0 },
      calculator: { isOpen: false, zIndex: 0 },
      tictactoe: { isOpen: false, zIndex: 0 },
      settings: { isOpen: false, zIndex: 0 }
    };
  });

  // Close all windows when switching to mobile view
  useEffect(() => {
    if (isMobile) {
      setWindows(prev => {
        const newWindows = { ...prev };
        Object.keys(newWindows).forEach(key => {
          newWindows[key] = { ...newWindows[key], isOpen: false };
        });
        return newWindows;
      });
    }
  }, [isMobile]);

  // Check if any window is open (for mobile home screen vs app view)
  const hasOpenWindow = Object.values(windows).some(w => w.isOpen);


  const [activeId, setActiveId] = useState('about');

  const focusWindow = useCallback((id) => {
    setActiveId(id);
    setWindows(prev => {
      const newWindows = { ...prev };
      Object.keys(newWindows).forEach(key => {
        // On mobile, force max z-index
        const isMobile = window.innerWidth < 768;
        newWindows[key].zIndex = key === id ? 50 : (isMobile ? 0 : 1);
      });
      return newWindows;
    });
  }, []);

  const toggleWindow = useCallback((id) => {
    const isMobileNow = typeof window !== 'undefined' && window.innerWidth < 768;

    setWindows(prev => {
      const isOpen = !prev[id].isOpen;

      if (isOpen) {
        setActiveId(id);

        // On mobile, close all other windows when opening a new one
        if (isMobileNow) {
          const newWindows = { ...prev };
          Object.keys(newWindows).forEach(key => {
            if (key !== id) {
              newWindows[key] = { ...newWindows[key], isOpen: false, zIndex: 0 };
            }
          });
          return {
            ...newWindows,
            [id]: { ...newWindows[id], isOpen: true, zIndex: 50 }
          };
        }
      }

      return {
        ...prev,
        [id]: { ...prev[id], isOpen }
      };
    });
  }, []);

  // Revisiting toggleWindow to be cleaner and strictly equivalent to original but memoized
  // We need to access focusWindow.
  // Ideally focusWindow should be defined before toggleWindow.
  // We can just use the setter functional updates for everything to keep deps low.

  // REdoc:
  // focusWindow uses setWindows
  // toggleWindow uses setWindows and calls focusWindow


  const dockItems = [
    { id: 'about', label: t('windows.about'), icon: User, onClick: () => toggleWindow('about'), isOpen: windows.about.isOpen },
    { id: 'projects', label: t('windows.projects'), icon: FolderOpen, onClick: () => toggleWindow('projects'), isOpen: windows.projects.isOpen },
    { id: 'skills', label: t('windows.skills'), icon: Briefcase, onClick: () => toggleWindow('skills'), isOpen: windows.skills.isOpen },
    { id: 'notes', label: 'Notes', icon: FileText, onClick: () => toggleWindow('notes'), isOpen: windows.notes.isOpen },
    { id: 'store', label: 'App Store', icon: ShoppingBag, onClick: () => toggleWindow('store'), isOpen: windows.store.isOpen },
    ...(installedApps.includes('calculator') ? [{ id: 'calculator', label: 'Calc', icon: Calculator, onClick: () => toggleWindow('calculator'), isOpen: windows.calculator.isOpen }] : []),
    ...(installedApps.includes('tictactoe') ? [{ id: 'tictactoe', label: 'Game', icon: Gamepad2, onClick: () => toggleWindow('tictactoe'), isOpen: windows.tictactoe.isOpen }] : []),
    { id: 'terminal', label: t('windows.terminal'), icon: Terminal, onClick: () => toggleWindow('terminal'), isOpen: windows.terminal.isOpen },
    { id: 'ai', label: t('windows.ai'), icon: Bot, onClick: () => toggleWindow('ai'), isOpen: windows.ai.isOpen },
    { id: 'github', label: t('windows.github'), icon: Github, onClick: () => toggleWindow('github'), isOpen: windows.github.isOpen },
    { id: 'contact', label: t('windows.contact'), icon: Mail, onClick: () => toggleWindow('contact'), isOpen: windows.contact.isOpen },
  ];

  // Clock
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Theme setter for command palette
  const setTheme = useThemeStore(state => state.setTheme);

  // Voice Control
  const { isListening, transcript, toggleListening } = useVoiceCommands(toggleWindow, windows, setTheme);

  const actions = [
    { label: t('nav.view'), icon: User, onClick: () => { toggleWindow('about'); focusWindow('about'); } },
    { label: t('nav.view'), icon: FolderOpen, onClick: () => { toggleWindow('projects'); focusWindow('projects'); } },
    { label: t('nav.view'), icon: Briefcase, onClick: () => { toggleWindow('skills'); focusWindow('skills'); } },
    { label: t('nav.view'), icon: Terminal, onClick: () => { toggleWindow('terminal'); focusWindow('terminal'); } },
    { label: t('nav.askAI'), icon: Bot, onClick: () => { toggleWindow('ai'); focusWindow('ai'); } },
    { label: t('nav.view'), icon: Github, onClick: () => { toggleWindow('github'); focusWindow('github'); } },
    { label: t('nav.view'), icon: Mail, onClick: () => { toggleWindow('contact'); focusWindow('contact'); } },
    { label: 'Settings', icon: Settings, onClick: () => { toggleWindow('settings'); focusWindow('settings'); } },
    { label: t('nav.hackerMode'), icon: Code, onClick: () => setHackerMode(prev => !prev) },
    { label: t('nav.restart'), icon: Monitor, onClick: () => window.location.reload() },
  ];

  const handleBootComplete = () => {
    setBooted(true);
  };

  // Konami code easter egg
  const triggerKonamiEasterEgg = useCallback(() => {
    setAchievementData({
      title: '🎮 Konami Master!',
      description: 'You unlocked the secret code! ↑↑↓↓←→←→BA'
    });
    setShowAchievement(true);
    setHackerMode(true);
  }, []);

  useKonamiCode(triggerKonamiEasterEgg);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      const windowKeys = {
        '1': 'about',
        '2': 'projects',
        '3': 'skills',
        '4': 'terminal',
        '5': 'ai',
        '6': 'github',
        '7': 'contact',
      };

      // Number keys 1-7 to toggle windows
      if (windowKeys[e.key]) {
        e.preventDefault();
        const windowId = windowKeys[e.key];
        toggleWindow(windowId);
        focusWindow(windowId);
      }

      // Escape to close active window
      if (e.key === 'Escape') {
        const activeWindow = Object.entries(windows).find(([_, w]) => w.isOpen && w.zIndex === 10);
        if (activeWindow) {
          toggleWindow(activeWindow[0]);
        }
      }

      // Cmd/Ctrl + K for command palette
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowCmdPalette(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [windows]);

  if (!booted) {
    return <BootScreen onComplete={handleBootComplete} />;
  }

  const greeting = getGreeting();

  // Platform-specific wallpaper backgrounds (no animation)
  // iOS 17 inspired gradient for mobile
  const mobileBackground = `
    linear-gradient(145deg, 
      #1e0533 0%, 
      #2d1b4e 15%, 
      #522580 30%, 
      #6b3fa0 45%, 
      #8b5cf6 55%, 
      #a855f7 65%, 
      #c084fc 75%, 
      #e879f9 85%, 
      #f0abfc 95%,
      #fae8ff 100%
    )
  `;
  // macOS Sonoma inspired gradient for desktop
  const desktopBackground = `
    linear-gradient(180deg, 
      #0c0c1c 0%, 
      #1a1a3e 15%, 
      #252560 30%, 
      #1e3a5f 50%, 
      #2d4a6f 65%, 
      #3d5a80 80%, 
      #1a1a3e 100%
    )
  `;

  return (
    <div
      className="relative w-full h-screen overflow-hidden font-sans selection:bg-white/20 text-white cursor-default transition-colors duration-300"
      style={{
        background: isMobile ? mobileBackground : desktopBackground,
        backgroundColor: 'var(--color-background)'
      }}
    >
      {/* Decorative effects removed for cleaner professional presentation */}
      {/* <Spotlight /> */}
      {/* <ClickRipple /> */}

      {/* SEO Manager */}
      <SEOManager activeWindow={activeId} />

      {/* Achievement Popup */}
      <Achievement
        show={showAchievement}
        title={achievementData.title}
        description={achievementData.description}
        onClose={() => setShowAchievement(false)}
      />

      {/* 3D Hero Scene Background - Disabled for static wallpaper */}
      {/* 
      <div className={`absolute inset-0 transition-opacity duration-1000 ${hackerMode ? 'opacity-0' : 'opacity-100'}`}>
        <HeroScene />
      </div> 
      */}

      {/* Matrix Rain Effect */}
      {hackerMode && <MatrixRain />}

      <Grain />

      {/* Theme Picker - desktop only */}
      <div className="hidden md:block">
        <ThemePicker />
      </div>

      {/* Mobile Status Bar */}
      {isMobile && <MobileStatusBar />}

      {/* Mobile Home Screen - show when no window is focused */}
      {isMobile && !hasOpenWindow && (
        <MobileHomeScreen
          windows={windows}
          toggleWindow={toggleWindow}
          focusWindow={focusWindow}
          installedApps={installedApps}
          dockItems={dockItems}
        />
      )}

      {/* Top Menu Bar - Desktop Only */}
      <div className="hidden md:flex absolute top-0 left-0 right-0 h-7 bg-black/40 backdrop-blur-2xl items-center justify-between px-4 text-[13px] font-medium z-50 border-b border-white/5 select-none">
        <div className="flex items-center gap-1">
          {/* Apple-style Logo */}
          <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10 cursor-pointer transition-colors">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-[#58a6ff] to-[#a371f7] flex items-center justify-center text-[10px] font-bold">S</div>
          </div>

          {/* File Menu */}
          <div className="relative group">
            <span className="text-white/80 hover:text-white cursor-pointer px-2 py-1 rounded hover:bg-white/10 transition-all">{t('nav.file')}</span>
            <div className="absolute top-full left-0 mt-1 w-56 bg-[#1c1c1e]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-1.5 hidden group-hover:block rtl:left-auto rtl:right-0">
              <div className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white/80 hover:text-white rounded-lg mx-1.5 flex items-center justify-between" onClick={() => window.location.reload()}>
                <span>{t('nav.restart')}</span>
                <span className="text-[11px] text-white/40">⌘R</span>
              </div>
              <div className="border-t border-white/10 my-1.5 mx-3"></div>
              <div className="px-3 py-2 hover:bg-red-500/20 cursor-pointer text-red-400 rounded-lg mx-1.5" onClick={() => window.close()}>{t('nav.shutdown')}</div>
            </div>
          </div>

          {/* Edit Menu */}
          <div className="relative group">
            <span className="text-white/80 hover:text-white cursor-pointer px-2 py-1 rounded hover:bg-white/10 transition-all">{t('nav.edit')}</span>
            <div className="absolute top-full left-0 mt-1 w-56 bg-[#1c1c1e]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-1.5 hidden group-hover:block rtl:left-auto rtl:right-0">
              <div className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white/80 hover:text-white rounded-lg mx-1.5 flex items-center justify-between">
                <span>{t('nav.copy')}</span>
                <span className="text-[11px] text-white/40">⌘C</span>
              </div>
              <div className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white/80 hover:text-white rounded-lg mx-1.5 flex items-center justify-between">
                <span>{t('nav.paste')}</span>
                <span className="text-[11px] text-white/40">⌘V</span>
              </div>
              <div className="border-t border-white/10 my-1.5 mx-3"></div>
              <div className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white/80 hover:text-white rounded-lg mx-1.5 flex items-center justify-between">
                <span onClick={() => { toggleWindow('settings'); focusWindow('settings'); }}>{t('nav.preferences')}</span>
                <span className="text-[11px] text-white/40">⌘,</span>
              </div>
            </div>
          </div>

          {/* View Menu */}
          <div className="relative group">
            <span className="text-white/80 hover:text-white cursor-pointer px-2 py-1 rounded hover:bg-white/10 transition-all">{t('nav.view')}</span>
            <div className="absolute top-full left-0 mt-1 w-56 bg-[#1c1c1e]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-1.5 hidden group-hover:block rtl:left-auto rtl:right-0">
              <div className="px-3 py-1 text-[10px] uppercase tracking-wider text-white/30">{t('nav.view')}</div>
              <div className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white/80 hover:text-white rounded-lg mx-1.5 flex items-center justify-between" onClick={() => { toggleWindow('about'); focusWindow('about'); }}>
                <span>{t('windows.about')}</span>
                <span className="text-[11px] text-white/40">1</span>
              </div>
              <div className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white/80 hover:text-white rounded-lg mx-1.5 flex items-center justify-between" onClick={() => { toggleWindow('projects'); focusWindow('projects'); }}>
                <span>{t('windows.projects')}</span>
                <span className="text-[11px] text-white/40">2</span>
              </div>
              <div className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white/80 hover:text-white rounded-lg mx-1.5 flex items-center justify-between" onClick={() => { toggleWindow('skills'); focusWindow('skills'); }}>
                <span>{t('windows.skills')}</span>
                <span className="text-[11px] text-white/40">3</span>
              </div>
              <div className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white/80 hover:text-white rounded-lg mx-1.5 flex items-center justify-between" onClick={() => { toggleWindow('terminal'); focusWindow('terminal'); }}>
                <span>{t('windows.terminal')}</span>
                <span className="text-[11px] text-white/40">4</span>
              </div>
              <div className="border-t border-white/10 my-1.5 mx-3"></div>
              <div className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white/80 hover:text-white rounded-lg mx-1.5 flex items-center justify-between" onClick={() => {
                if (document.fullscreenElement) {
                  document.exitFullscreen().catch(() => { });
                } else {
                  document.documentElement.requestFullscreen().catch(() => { });
                }
              }}>
                <span>{document.fullscreenElement ? t('nav.exitFullscreen') : t('nav.fullscreen')}</span>
                <span className="text-[11px] text-white/40">F11</span>
              </div>
              <div className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white/80 hover:text-white rounded-lg mx-1.5 flex items-center justify-between" onClick={() => setHackerMode(!hackerMode)}>
                <span>{t('nav.hackerMode')}</span>
                <span className="text-[11px] text-white/40">⌥H</span>
              </div>
            </div>
          </div>

          {/* Help Menu */}
          <div className="relative group">
            <span className="text-white/80 hover:text-white cursor-pointer px-2 py-1 rounded hover:bg-white/10 transition-all">{t('nav.help')}</span>
            <div className="absolute top-full left-0 mt-1 w-56 bg-[#1c1c1e]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-1.5 hidden group-hover:block rtl:left-auto rtl:right-0">
              <div className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white/80 hover:text-white rounded-lg mx-1.5" onClick={() => { toggleWindow('ai'); focusWindow('ai'); }}>
                {t('nav.askAI')}
              </div>
              <div className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white/80 hover:text-white rounded-lg mx-1.5 flex items-center justify-between" onClick={() => setShowCmdPalette(true)}>
                <span>{t('nav.commandPalette')}</span>
                <span className="text-[11px] text-white/40">⌘K</span>
              </div>
              <div className="border-t border-white/10 my-1.5 mx-3"></div>
              <div className="px-3 py-1 text-[10px] text-white/40 mx-1.5">
                {t('nav.tip')}
              </div>
            </div>
          </div>
        </div>

        {/* Right Status Area */}
        <div className="flex items-center gap-2">
          {/* Social Links */}
          <div className="flex items-center gap-1">
            <a
              href="https://github.com/saidElamri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-white/10 text-white/60 hover:text-white transition-all"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com/in/saidelamri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-white/10 text-white/60 hover:text-white transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText('said.elamri.evil@gmail.com');
              }}
              className="p-1.5 rounded-md hover:bg-white/10 text-white/60 hover:text-white transition-all"
              title={t('common.copyEmail')}
            >
              <Mail className="w-3.5 h-3.5" />
            </button>
            <a
              href="/resume.pdf"
              download="Said_Elamri_Resume.pdf"
              className="p-1.5 rounded-md hover:bg-white/10 text-white/60 hover:text-white transition-all"
              title={t('common.download') + ' ' + t('common.resume')}
            >
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-px h-3 bg-white/20" />

          {/* Battery */}
          <div className="flex items-center gap-1.5 text-white/60">
            <div className="w-4 h-3 border border-white/40 rounded-sm flex items-end p-[2px]">
              <div className="w-full h-3/4 bg-green-400 rounded-[1px]"></div>
            </div>
            <span className="text-[11px]">100%</span>
          </div>
          <div className="w-px h-3 bg-white/20" />

          {/* Voice Control Indicator */}
          <button
            onClick={toggleListening}
            className={`p-1.5 rounded-md transition-all ${isListening ? 'bg-red-500 text-white animate-pulse' : 'text-white/60 hover:text-white hover:bg-white/10'}`}
            title="Voice Control"
          >
            {isListening ? <Mic className="w-3.5 h-3.5" /> : <MicOff className="w-3.5 h-3.5" />}
          </button>
          {isListening && transcript && (
            <span className="text-[10px] text-white/60 animate-fade-in max-w-[100px] truncate">"{transcript}"</span>
          )}

          <div className="w-px h-3 bg-white/20" />
          <span className="text-white/80 tabular-nums">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', weekday: 'short' })}</span>
        </div>
      </div>

      {/* Command Palette - Press Ctrl+K */}
      <CommandPalette
        windows={windows}
        toggleWindow={toggleWindow}
        focusWindow={focusWindow}
        setTheme={setTheme}
      />

      {/* Right-click Context Menu */}
      <ContextMenu
        toggleWindow={toggleWindow}
        focusWindow={focusWindow}
      />

      {/* Main Content Area */}
      <div className="relative z-10 w-full h-full">

        {/* Desktop Icons - Hidden on mobile */}
        <div className="hidden md:block">
          <DesktopIcons
            installedApps={installedApps}
            availableApps={availableApps}
            iconPositions={iconPositions}
            setIconPositions={setIconPositions}
            toggleWindow={toggleWindow}
            focusWindow={focusWindow}
          />
        </div>

        <AnimatePresence>

          {/* About Window */}
          <Window
            key="window-about"
            id="about"
            title={t('windows.about')}
            isOpen={windows.about.isOpen}
            onClose={() => toggleWindow('about')}
            onMinimize={() => toggleWindow('about')}
            zIndex={windows.about.zIndex}
            onFocus={() => focusWindow('about')}
          >
            <HeroProfile
              onViewProjects={() => { toggleWindow('projects'); focusWindow('projects'); }}
              onContact={() => { toggleWindow('contact'); focusWindow('contact'); }}
              onSkills={() => { toggleWindow('skills'); focusWindow('skills'); }}
            />
          </Window>

          {/* Projects Window */}
          <Window
            key="window-projects"
            id="projects"
            title={t('windows.projects')}
            isOpen={windows.projects.isOpen}
            onClose={() => toggleWindow('projects')}
            onMinimize={() => toggleWindow('projects')}
            zIndex={windows.projects.zIndex}
            onFocus={() => focusWindow('projects')}
          >
            <BentoGrid
              projects={projects}
              onOpenProject={(project) => {
                setSelectedProject(project);
                if (!windows.projectDetails.isOpen) {
                  toggleWindow('projectDetails');
                }
                focusWindow('projectDetails');
              }}
            />
          </Window>

          {/* Project Details Window */}
          <Window
            key="window-project-details"
            id="projectDetails"
            title={selectedProject ? selectedProject.title : 'Project Details'}
            isOpen={windows.projectDetails.isOpen}
            onClose={() => toggleWindow('projectDetails')}
            onMinimize={() => toggleWindow('projectDetails')}
            zIndex={windows.projectDetails.zIndex}
            onFocus={() => focusWindow('projectDetails')}
          >
            <ProjectWindow project={selectedProject} onClose={() => toggleWindow('projectDetails')} />
          </Window>

          {/* Terminal Window */}
          <Window
            key="window-terminal"
            id="terminal"
            title={t('windows.terminal')}
            isOpen={windows.terminal.isOpen}
            onClose={() => toggleWindow('terminal')}
            onMinimize={() => toggleWindow('terminal')}
            zIndex={windows.terminal.zIndex}
            onFocus={() => focusWindow('terminal')}
          >
            <InteractiveTerminal onHackerMode={setHackerMode} />
          </Window>

          {/* Contact Window */}
          <Window
            key="window-contact"
            id="contact"
            title={t('windows.contact')}
            isOpen={windows.contact.isOpen}
            onClose={() => toggleWindow('contact')}
            onMinimize={() => toggleWindow('contact')}
            zIndex={windows.contact.zIndex}
            onFocus={() => focusWindow('contact')}
          >
            <ContactForm />
          </Window>

          {/* SaidAI Window */}
          <Window
            key="window-ai"
            id="ai"
            title={t('windows.ai')}
            isOpen={windows.ai.isOpen}
            onClose={() => toggleWindow('ai')}
            onMinimize={() => toggleWindow('ai')}
            zIndex={windows.ai.zIndex}
            onFocus={() => focusWindow('ai')}
          >
            <AiAssistant />
          </Window>

          {/* GitHub Window */}
          <Window
            key="window-github"
            id="github"
            title={t('windows.github')}
            isOpen={windows.github.isOpen}
            onClose={() => toggleWindow('github')}
            onMinimize={() => toggleWindow('github')}
            zIndex={windows.github.zIndex}
            onFocus={() => focusWindow('github')}
          >
            <GitHubWidget />
          </Window>

          {/* Skills Window */}
          <Window
            key="window-skills"
            id="skills"
            title={t('windows.skills')}
            isOpen={windows.skills.isOpen}
            onClose={() => toggleWindow('skills')}
            onMinimize={() => toggleWindow('skills')}
            zIndex={windows.skills.zIndex}
            onFocus={() => focusWindow('skills')}
          >
            <SkillsWindow />
          </Window>



          {/* Notes Window */}
          <Window
            key="window-notes"
            id="notes"
            title="Dev Notes"
            isOpen={windows.notes.isOpen}
            onClose={() => toggleWindow('notes')}
            onMinimize={() => toggleWindow('notes')}
            zIndex={windows.notes.zIndex}
            onFocus={() => focusWindow('notes')}
          >
            <NotesWindow />
          </Window>

          {/* App Store */}
          <Window
            key="window-store"
            id="store"
            title="App Store"
            isOpen={windows.store.isOpen}
            onClose={() => toggleWindow('store')}
            onMinimize={() => toggleWindow('store')}
            zIndex={windows.store.zIndex}
            onFocus={() => focusWindow('store')}
          >
            <AppStoreWindow
              installedApps={installedApps}
              onInstall={(appId) => setInstalledApps(prev => [...prev, appId])}
              onOpen={(appId) => {
                toggleWindow(appId);
                focusWindow(appId);
              }}
            />
          </Window>

          {/* Calculator App */}
          {installedApps.includes('calculator') && (
            <Window
              key="window-calculator"
              id="calculator"
              title="Calculator"
              isOpen={windows.calculator.isOpen}
              onClose={() => toggleWindow('calculator')}
              onMinimize={() => toggleWindow('calculator')}
              zIndex={windows.calculator.zIndex}
              onFocus={() => focusWindow('calculator')}
            >
              <CalculatorApp />
            </Window>
          )}

          {/* TicTacToe App */}
          {installedApps.includes('tictactoe') && (
            <Window
              key="window-tictactoe"
              id="tictactoe"
              title="Tic Tac Toe"
              isOpen={windows.tictactoe.isOpen}
              onClose={() => toggleWindow('tictactoe')}
              onMinimize={() => toggleWindow('tictactoe')}
              zIndex={windows.tictactoe.zIndex}
              onFocus={() => focusWindow('tictactoe')}
            >
              <TicTacToeApp />
            </Window>
          )}

          {/* Settings Window */}
          <Window
            key="window-settings"
            id="settings"
            title="System Preferences"
            isOpen={windows.settings.isOpen}
            onClose={() => toggleWindow('settings')}
            onMinimize={() => toggleWindow('settings')}
            zIndex={windows.settings.zIndex}
            onFocus={() => focusWindow('settings')}
          >
            <SettingsWindow />
          </Window>



        </AnimatePresence>
      </div>



      <div className="hidden md:block">
        <Dock items={dockItems} />
      </div>

      {/* Mobile Navigation - show when a window is open */}
      {isMobile && hasOpenWindow && <MobileNav items={dockItems} />}
    </div >
  );
};

const Portfolio = () => (
  <PreloaderProvider>
    <PortfolioContent />
  </PreloaderProvider>
);

export default Portfolio;