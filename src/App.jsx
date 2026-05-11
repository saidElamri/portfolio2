import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import AiAssistant from './components/AiAssistant';
import { Terminal, FolderOpen, Mail, User, Github, Linkedin, Code, Monitor, Bot, Briefcase, Download, Copy, Check, FileText, ShoppingBag, Calculator, Gamepad2, Settings, Mic, MicOff, Cloud, BarChart3, Moon, Music } from 'lucide-react';
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
import SkillsWindow from './components/SkillsWindow';
import ContactForm from './components/ContactForm';
import HeroProfile from './components/HeroProfile';
import { PreloaderProvider } from './context/PreloaderContext';
import { Achievement, useKonamiCode } from './components/Effects';
import SEOManager from './components/SEOManager';
import { projects } from './data/portfolio';
import useThemeStore from './stores/themeStore';
import useAppStore from './stores/appStore';
// Hooks
import useVoiceCommands from './hooks/useVoiceCommands';
import useKeyboardShortcuts from './hooks/useKeyboardShortcuts';
import MobileNav from './components/MobileNav';
import MobileStatusBar from './components/MobileStatusBar';
import MobileHomeScreen from './components/MobileHomeScreen';
import CalculatorApp from './components/apps/Calculator';
import TicTacToeApp from './components/apps/TicTacToe';
import { availableApps } from './data/apps';
import { lazy } from 'react';

// Lazy load heavy window components
const ProjectWindow = lazy(() => import('./components/ProjectWindow'));
const NotesWindow = lazy(() => import('./components/NotesWindow'));
const AppStoreWindow = lazy(() => import('./components/AppStoreWindow'));
const SettingsWindow = lazy(() => import('./components/SettingsWindow'));
const WeatherApp = lazy(() => import('./components/apps/Weather'));
const MonitorApp = lazy(() => import('./components/apps/Monitor'));
const ZenSpaceApp = lazy(() => import('./components/apps/ZenSpace'));
const MusicApp = lazy(() => import('./components/apps/Music'));

const PortfolioContent = () => {
  const { t } = useTranslation();
  const [booted, setBooted] = useState(false);
  const [hackerMode, setHackerMode] = useState(false);
  const [showCmdPalette, setShowCmdPalette] = useState(false);
  const [showAchievement, setShowAchievement] = useState(false);
  const [achievementData, setAchievementData] = useState({ title: '', description: '' });
  const [selectedProject, setSelectedProject] = useState(null);

  // Use Central App Store
  const {
    openApps,
    activeApp,
    openApp,
    closeApp,
    toggleApp,
    bringToFront,
    isAppOpen,
    getAppZIndex,
    isMobile,
    setIsMobile
  } = useAppStore();

  // Mobile detection - initialize correctly from start
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Initialize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [setIsMobile]);

  // Enable keyboard shortcuts (Cmd+W, Cmd+Q, Escape)
  useKeyboardShortcuts();


  // App Store Persistence
  const [installedApps, setInstalledApps] = useState(() => {
    const saved = localStorage.getItem('saidos-installed-apps');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleInstalledApp = (appId, uninstall = false) => {
    setInstalledApps(prev => {
      let next;
      if (uninstall) {
        next = prev.filter(id => id !== appId);
      } else {
        next = prev.includes(appId) ? prev : [...prev, appId];
      }
      localStorage.setItem('saidos-installed-apps', JSON.stringify(next));
      return next;
    });
  };

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

  // Initial app open
  useEffect(() => {
    if (!isMobile && openApps.length === 0) {
      openApp('about');
    }
  }, [isMobile, openApp, openApps.length]);

  // Check if any window is open (for mobile home screen vs app view)
  const hasOpenWindow = openApps.length > 0;

  const focusWindow = useCallback((id) => {
    bringToFront(id);
  }, [bringToFront]);


  const dockItems = [
    { id: 'about', label: t('windows.about'), icon: User, onClick: () => toggleApp('about'), isOpen: isAppOpen('about') },
    { id: 'projects', label: t('windows.projects'), icon: FolderOpen, onClick: () => toggleApp('projects'), isOpen: isAppOpen('projects') },
    { id: 'skills', label: t('windows.skills'), icon: Briefcase, onClick: () => toggleApp('skills'), isOpen: isAppOpen('skills') },
    { id: 'notes', label: 'Notes', icon: FileText, onClick: () => toggleApp('notes'), isOpen: isAppOpen('notes') },
    { id: 'store', label: 'App Store', icon: ShoppingBag, onClick: () => toggleApp('store'), isOpen: isAppOpen('store') },
    ...(installedApps.includes('calculator') ? [{ id: 'calculator', label: 'Calc', icon: Calculator, onClick: () => toggleApp('calculator'), isOpen: isAppOpen('calculator') }] : []),
    ...(installedApps.includes('tictactoe') ? [{ id: 'tictactoe', label: 'Game', icon: Gamepad2, onClick: () => toggleApp('tictactoe'), isOpen: isAppOpen('tictactoe') }] : []),
    ...(installedApps.includes('weather') ? [{ id: 'weather', label: 'Weather', icon: Cloud, onClick: () => toggleApp('weather'), isOpen: isAppOpen('weather') }] : []),
    ...(installedApps.includes('monitor') ? [{ id: 'monitor', label: 'Monitor', icon: BarChart3, onClick: () => toggleApp('monitor'), isOpen: isAppOpen('monitor') }] : []),
    ...(installedApps.includes('zenspace') ? [{ id: 'zenspace', label: 'Zen', icon: Moon, onClick: () => toggleApp('zenspace'), isOpen: isAppOpen('zenspace') }] : []),
    ...(installedApps.includes('music') ? [{ id: 'music', label: 'Music', icon: Music, onClick: () => toggleApp('music'), isOpen: isAppOpen('music') }] : []),
    { id: 'terminal', label: t('windows.terminal'), icon: Terminal, onClick: () => toggleApp('terminal'), isOpen: isAppOpen('terminal') },
    { id: 'ai', label: t('windows.ai'), icon: Bot, onClick: () => toggleApp('ai'), isOpen: isAppOpen('ai') },
    { id: 'github', label: t('windows.github'), icon: Github, onClick: () => toggleApp('github'), isOpen: isAppOpen('github') },
    { id: 'contact', label: t('windows.contact'), icon: Mail, onClick: () => toggleApp('contact'), isOpen: isAppOpen('contact') },
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
  const { isListening, transcript, toggleListening } = useVoiceCommands(toggleApp, setTheme);

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
        toggleApp(windowId);
      }

      // Escape to close active window
      if (e.key === 'Escape') {
        if (activeApp) {
          closeApp(activeApp);
        }
      }

      // Cmd/Ctrl + K for command palette
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setShowCmdPalette(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeApp, toggleApp, closeApp]);

  if (!booted) {
    return <BootScreen onComplete={handleBootComplete} />;
  }

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
      {/* SEO Manager */}
      <SEOManager activeWindow={activeApp} />

      {/* Achievement Popup */}
      <Achievement
        show={showAchievement}
        title={achievementData.title}
        description={achievementData.description}
        onClose={() => setShowAchievement(false)}
      />

      {/* Matrix Rain Effect */}
      {hackerMode && <MatrixRain />}

      <Grain />

      {/* Theme Picker - responsive, works on both mobile and desktop */}
      <ThemePicker />

      {/* Mobile Status Bar */}
      {isMobile && <MobileStatusBar />}

      {/* Mobile Home Screen - show when no window is focused */}
      {isMobile && !hasOpenWindow && (
        <MobileHomeScreen
          openApp={openApp}
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
                <span onClick={() => { openApp('settings'); }}>{t('nav.preferences')}</span>
                <span className="text-[11px] text-white/40">⌘,</span>
              </div>
            </div>
          </div>

          {/* View Menu */}
          <div className="relative group">
            <span className="text-white/80 hover:text-white cursor-pointer px-2 py-1 rounded hover:bg-white/10 transition-all">{t('nav.view')}</span>
            <div className="absolute top-full left-0 mt-1 w-56 bg-[#1c1c1e]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-1.5 hidden group-hover:block rtl:left-auto rtl:right-0">
              <div className="px-3 py-1 text-[10px] uppercase tracking-wider text-white/30">{t('nav.view')}</div>
              <div className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white/80 hover:text-white rounded-lg mx-1.5 flex items-center justify-between" onClick={() => { openApp('about'); }}>
                <span>{t('windows.about')}</span>
                <span className="text-[11px] text-white/40">1</span>
              </div>
              <div className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white/80 hover:text-white rounded-lg mx-1.5 flex items-center justify-between" onClick={() => { openApp('projects'); }}>
                <span>{t('windows.projects')}</span>
                <span className="text-[11px] text-white/40">2</span>
              </div>
              <div className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white/80 hover:text-white rounded-lg mx-1.5 flex items-center justify-between" onClick={() => { openApp('skills'); }}>
                <span>{t('windows.skills')}</span>
                <span className="text-[11px] text-white/40">3</span>
              </div>
              <div className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white/80 hover:text-white rounded-lg mx-1.5 flex items-center justify-between" onClick={() => { openApp('terminal'); }}>
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
              <div className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white/80 hover:text-white rounded-lg mx-1.5" onClick={() => { openApp('ai'); }}>
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
        isOpen={showCmdPalette}
        onClose={() => setShowCmdPalette(false)}
        toggleApp={toggleApp}
        focusWindow={focusWindow}
        setTheme={setTheme}
      />

      {/* Right-click Context Menu */}
      <ContextMenu
        openApp={openApp}
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
            toggleWindow={toggleApp}
            focusWindow={focusWindow}
          />
        </div>

        <AnimatePresence>

          {/* About Window */}
          <Window
            key="window-about"
            id="about"
            title={t('windows.about')}
            isOpen={isAppOpen('about')}
            onClose={() => closeApp('about')}
            onMinimize={() => closeApp('about')}
            zIndex={getAppZIndex('about')}
            onFocus={() => focusWindow('about')}
          >
            <HeroProfile
              onViewProjects={() => openApp('projects')}
              onContact={() => openApp('contact')}
              onSkills={() => openApp('skills')}
            />
          </Window>

          {/* Projects Window */}
          <Window
            key="window-projects"
            id="projects"
            title={t('windows.projects')}
            isOpen={isAppOpen('projects')}
            onClose={() => closeApp('projects')}
            onMinimize={() => closeApp('projects')}
            zIndex={getAppZIndex('projects')}
            onFocus={() => focusWindow('projects')}
          >
            <BentoGrid
              projects={projects}
              onOpenProject={(project) => {
                setSelectedProject(project);
                openApp('projectDetails');
              }}
            />
          </Window>

          {/* Project Details Window */}
          <Window
            key="window-project-details"
            id="projectDetails"
            title={selectedProject ? selectedProject.title : 'Project Details'}
            isOpen={isAppOpen('projectDetails')}
            onClose={() => closeApp('projectDetails')}
            onMinimize={() => closeApp('projectDetails')}
            zIndex={getAppZIndex('projectDetails')}
            onFocus={() => focusWindow('projectDetails')}
          >
            <ProjectWindow project={selectedProject} onClose={() => closeApp('projectDetails')} />
          </Window>

          {/* Terminal Window */}
          <Window
            key="window-terminal"
            id="terminal"
            title={t('windows.terminal')}
            isOpen={isAppOpen('terminal')}
            onClose={() => closeApp('terminal')}
            onMinimize={() => closeApp('terminal')}
            zIndex={getAppZIndex('terminal')}
            onFocus={() => focusWindow('terminal')}
          >
            <InteractiveTerminal onHackerMode={setHackerMode} />
          </Window>

          {/* Contact Window */}
          <Window
            key="window-contact"
            id="contact"
            title={t('windows.contact')}
            isOpen={isAppOpen('contact')}
            onClose={() => closeApp('contact')}
            onMinimize={() => closeApp('contact')}
            zIndex={getAppZIndex('contact')}
            onFocus={() => focusWindow('contact')}
          >
            <ContactForm />
          </Window>

          {/* SaidAI Window */}
          <Window
            key="window-ai"
            id="ai"
            title={t('windows.ai')}
            isOpen={isAppOpen('ai')}
            onClose={() => closeApp('ai')}
            onMinimize={() => closeApp('ai')}
            zIndex={getAppZIndex('ai')}
            onFocus={() => focusWindow('ai')}
          >
            <AiAssistant />
          </Window>

          {/* GitHub Window */}
          <Window
            key="window-github"
            id="github"
            title={t('windows.github')}
            isOpen={isAppOpen('github')}
            onClose={() => closeApp('github')}
            onMinimize={() => closeApp('github')}
            zIndex={getAppZIndex('github')}
            onFocus={() => focusWindow('github')}
          >
            <GitHubWidget />
          </Window>

          {/* Skills Window */}
          <Window
            key="window-skills"
            id="skills"
            title={t('windows.skills')}
            isOpen={isAppOpen('skills')}
            onClose={() => closeApp('skills')}
            onMinimize={() => closeApp('skills')}
            zIndex={getAppZIndex('skills')}
            onFocus={() => focusWindow('skills')}
          >
            <SkillsWindow />
          </Window>



          {/* Notes Window */}
          <Window
            key="window-notes"
            id="notes"
            title="Dev Notes"
            isOpen={isAppOpen('notes')}
            onClose={() => closeApp('notes')}
            onMinimize={() => closeApp('notes')}
            zIndex={getAppZIndex('notes')}
            onFocus={() => focusWindow('notes')}
          >
            <NotesWindow />
          </Window>

          {/* App Store */}
          <Window
            key="window-store"
            id="store"
            title="App Store"
            isOpen={isAppOpen('store')}
            onClose={() => closeApp('store')}
            onMinimize={() => closeApp('store')}
            zIndex={getAppZIndex('store')}
            onFocus={() => focusWindow('store')}
          >
            <AppStoreWindow
              installedApps={installedApps}
              onInstall={(appId) => toggleInstalledApp(appId)}
              onOpen={(appId) => {
                openApp(appId);
              }}
            />
          </Window>

          {/* Calculator App */}
          {installedApps.includes('calculator') && (
            <Window
              key="window-calculator"
              id="calculator"
              title="Calculator"
              isOpen={isAppOpen('calculator')}
              onClose={() => closeApp('calculator')}
              onMinimize={() => closeApp('calculator')}
              zIndex={getAppZIndex('calculator')}
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
              isOpen={isAppOpen('tictactoe')}
              onClose={() => closeApp('tictactoe')}
              onMinimize={() => closeApp('tictactoe')}
              zIndex={getAppZIndex('tictactoe')}
              onFocus={() => focusWindow('tictactoe')}
            >
              <TicTacToeApp />
            </Window>
          )}

          {/* Weather App */}
          {installedApps.includes('weather') && (
            <Window
              key="window-weather"
              id="weather"
              title="Weather"
              isOpen={isAppOpen('weather')}
              onClose={() => closeApp('weather')}
              onMinimize={() => closeApp('weather')}
              zIndex={getAppZIndex('weather')}
              onFocus={() => focusWindow('weather')}
            >
              <Suspense fallback={<WindowLoader />}>
                <WeatherApp />
              </Suspense>
            </Window>
          )}

          {/* System Monitor */}
          {installedApps.includes('monitor') && (
            <Window
              key="window-monitor"
              id="monitor"
              title="System Monitor"
              isOpen={isAppOpen('monitor')}
              onClose={() => closeApp('monitor')}
              onMinimize={() => closeApp('monitor')}
              zIndex={getAppZIndex('monitor')}
              onFocus={() => focusWindow('monitor')}
            >
              <Suspense fallback={<WindowLoader />}>
                <MonitorApp />
              </Suspense>
            </Window>
          )}

          {/* Zen Space */}
          {installedApps.includes('zenspace') && (
            <Window
              key="window-zenspace"
              id="zenspace"
              title="Zen Space"
              isOpen={isAppOpen('zenspace')}
              onClose={() => closeApp('zenspace')}
              onMinimize={() => closeApp('zenspace')}
              zIndex={getAppZIndex('zenspace')}
              onFocus={() => focusWindow('zenspace')}
            >
              <Suspense fallback={<WindowLoader />}>
                <ZenSpaceApp />
              </Suspense>
            </Window>
          )}

          {/* Music App */}
          {installedApps.includes('music') && (
            <Window
              key="window-music"
              id="music"
              title="Music"
              isOpen={isAppOpen('music')}
              onClose={() => closeApp('music')}
              onMinimize={() => closeApp('music')}
              zIndex={getAppZIndex('music')}
              onFocus={() => focusWindow('music')}
            >
              <Suspense fallback={<WindowLoader />}>
                <MusicApp />
              </Suspense>
            </Window>
          )}
          <Window
            key="window-settings"
            id="settings"
            title="System Preferences"
            isOpen={isAppOpen('settings')}
            onClose={() => closeApp('settings')}
            onMinimize={() => closeApp('settings')}
            zIndex={getAppZIndex('settings')}
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
