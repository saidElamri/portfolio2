  import React, { useRef, useState, useEffect } from 'react';
  import * as THREE from 'three';

  const projects = [
  { 
    id: 0, 
    title: "MLS Quiz App", 
    desc: "Interactive quiz platform with real-time scoring, favorites system, and owl-themed design.", 
    longDesc: "A comprehensive quiz application featuring user authentication, favorite questions system, progress tracking, and an engaging owl mascot theme.", 
    tech: ["React", "Express", "MongoDB", "Node.js", "JWT", "REST API"], 
    github: "https://github.com/saidElamri/Quizz-LMS", 
    demo: "https://lmsquiz.netlify.app/", 
    image: process.env.PUBLIC_URL + "/projects/lms.png" 
  },
  { 
    id: 1, 
    title: "Food Xplorers", 
    desc: "Discover authentic dishes from cities worldwide with beautiful imagery and detailed recipes.", 
    longDesc: "A culinary exploration platform that allows users to discover traditional dishes from various cities around the world.", 
    tech: ["Vite", "React", "TheMealDB API", "Tailwind CSS"], 
    github: "https://github.com/saidElamri/native-food", 
    demo: "https://foodxplorers.netlify.app/", 
    image: process.env.PUBLIC_URL + "/projects/foodapp.png" 
  },
  { 
    id: 2, 
    title: "Code Explainer with Gemini AI", 
    desc: "Flask web app for AI-powered Python code explanations.", 
    longDesc: "A Flask-based web application that leverages Google Gemini to explain Python code for both beginners and advanced users. It supports Markdown formatting, provides clear step-by-step explanations, and ensures secure handling of API keys with .env management.", 
    tech: ["Python", "Flask", "Google Gemini", "Markdown", "dotenv"], 
    github: "https://github.com/saidElamri/codexplainer", 
    demo: "https://codexplainer-gray.vercel.app/", 
    image: process.env.PUBLIC_URL + "/projects/codeex.png" 
  },
  { 
    id: 3, 
    title: "PetroSolPro", 
    desc: "Stock & distribution management for fuel stations.", 
    longDesc: "PetroSolPro is a React demo app showcasing a professional solution for stock management and distribution tailored to private and institutional fuel stations. It features real-time delivery tracking, precise stock level visualization, fraud/leak detection alerts, maintenance & automation tools.", 
    tech: ["React", "React Router DOM", "Tailwind CSS", "Recharts", "Vite"], 
    github: "https://github.com/saidElamri/petro", 
    demo: "https://aga-petro.netlify.app/", 
    image: process.env.PUBLIC_URL + "/projects/petro.png"
  }
];

const certificates = [
  { id: 1, title: "ODC Orange Bootcamp", issuer: "Orange Digital Center Morocco", date: "2024", description: "Intensive full-stack development bootcamp focusing on MERN stack and algorithms", image: process.env.PUBLIC_URL + "/certificates/odc.jpg" },
  { id: 2, title: "Meta Front-End Developer", issuer: "Meta (Coursera)", date: "2023", description: "Professional certificate covering React and modern frontend development", image: process.env.PUBLIC_URL + "/certificates/meta-frontend.jpg" },
  { id: 3, title: "JavaScript Algorithms", issuer: "freeCodeCamp", date: "2023", description: "Data structures and algorithms certification", image: process.env.PUBLIC_URL + "/certificates/js.png" },
  { id: 4, title: "Responsive Web Design", issuer: "freeCodeCamp", date: "2023", description: "Comprehensive certification in HTML5, CSS3, and responsive design", image: process.env.PUBLIC_URL + "/certificates/responsive.png" }
];


    useEffect(() => {
      if (!mountRef.current) return;
      const currentMount = mountRef.current;

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x000000, 0.015);

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 30;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      currentMount.appendChild(renderer.domElement);

      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = 1500;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

        const color = new THREE.Color();
        color.setHSL(0.55 + Math.random() * 0.05, 0.9, 0.5 + Math.random() * 0.3);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      });

      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      const lineCount = 50;
      const lines = [];
      for (let i = 0; i < lineCount; i++) {
        const points = [];
        const segments = 20;
        for (let j = 0; j < segments; j++) {
          points.push(new THREE.Vector3(
            (Math.random() - 0.5) * 50,
            (Math.random() - 0.5) * 50,
            (Math.random() - 0.5) * 50
          ));
        }
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const lineMaterial = new THREE.LineBasicMaterial({
          color: 0x3b82f6,
          transparent: true,
          opacity: 0.15,
          blending: THREE.AdditiveBlending
        });
        const line = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(line);
        lines.push(line);
      }

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
      scene.add(ambientLight);

      const pointLight1 = new THREE.PointLight(0x3b82f6, 1.5, 50);
      pointLight1.position.set(20, 20, 20);
      scene.add(pointLight1);

      const pointLight2 = new THREE.PointLight(0x60a5fa, 1.5, 50);
      pointLight2.position.set(-20, -20, 20);
      scene.add(pointLight2);

      let mouseX = 0;
      let mouseY = 0;
      const onMouseMove = (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      };
      window.addEventListener('mousemove', onMouseMove);

      const clock = new THREE.Clock();
      const animate = () => {
        requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        particles.rotation.y = elapsed * 0.05;
        particles.rotation.x = elapsed * 0.03;

        lines.forEach((line, i) => {
          line.rotation.y = elapsed * 0.1 + i * 0.1;
          line.rotation.x = Math.sin(elapsed + i) * 0.2;
        });

        camera.position.x += (mouseX * 5 - camera.position.x) * 0.02;
        camera.position.y += (mouseY * 5 - camera.position.y) * 0.02;
        camera.lookAt(0, 0, 0);

        pointLight1.position.x = Math.sin(elapsed * 0.5) * 20;
        pointLight1.position.y = Math.cos(elapsed * 0.5) * 20;
        pointLight2.position.x = Math.cos(elapsed * 0.3) * 20;
        pointLight2.position.y = Math.sin(elapsed * 0.3) * 20;

        renderer.render(scene, camera);
      };
      animate();

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', onResize);

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', onResize);
        currentMount.removeChild(renderer.domElement);
        renderer.dispose();
      };
    }, []);

    return (
      <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden font-mono">
        <div ref={mountRef} className="fixed inset-0 z-0" />

        {/* Glitch Grid Overlay */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, cyan 2px, cyan 4px)',
            backgroundSize: '100% 4px'
          }}></div>
        </div>

        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center px-6">
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="border-l-2 border-cyan-500 pl-6 mb-12">
              <div className="text-xs text-cyan-400 mb-2 tracking-widest">&gt; SYSTEM.INIT()</div>
              <div className="text-xs text-gray-500 mb-8 font-sans">Full-Stack Developer / Morocco</div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tight">
                <span className="text-white">SAID_</span>
                <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">ELAMRI</span>
              </h1>
              <div className="text-sm text-gray-400 max-w-xl mb-8 font-sans leading-relaxed">
                <span className="text-cyan-400">&gt;</span> Building next-generation web applications with cutting-edge technology stack
              </div>
            </div>

            <div className="flex gap-3">
              {[
                { href: "https://github.com/saidElamri", label: "GITHUB", d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
                { href: "https://www.linkedin.com/in/said-elamri/", label: "LINKEDIN", d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                { href: "said.elamri.evil@gmail.com", label: "EMAIL", d: "M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" }
              ].map((link, i) => (
                <a key={i} href={link.href} className="group relative px-4 py-2 border border-cyan-500/30 hover:border-cyan-400 bg-black/50 hover:bg-cyan-500/10 transition-all overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <div className="relative flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={link.d}/></svg>
                    <span className="text-xs">{link.label}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <div className="text-xs text-cyan-400 mb-2 animate-pulse">SCROLL_DOWN</div>
            <div className="w-px h-16 bg-gradient-to-b from-cyan-500 to-transparent mx-auto"></div>
          </div>
        </section>

        {/* Projects */}
  <section className="relative py-24 px-6 z-10">
    <div className="max-w-7xl mx-auto">
      <div className="border-l-2 border-cyan-500 pl-6 mb-16">
        <div className="text-xs text-cyan-400 mb-2">&gt; PROJECTS.LOAD()</div>
        <h2 className="text-4xl md:text-5xl font-bold">SELECTED_WORK</h2>
      </div>

      <div className="space-y-6">
        {projects.map((p, i) => (
          <div key={i} onClick={() => setActiveProject(p)} className="group relative border border-cyan-500/20 hover:border-cyan-400/50 bg-black/50 backdrop-blur cursor-pointer transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
            
            <div className="grid md:grid-cols-[300px_1fr] gap-6 p-6">
              <div className="relative h-48 md:h-full bg-gradient-to-br from-cyan-500/10 to-purple-600/10 overflow-hidden border border-cyan-500/20">
                {/* Animated Code Snippet - Shows by default */}
                <div className="absolute inset-0 bg-black/90 group-hover:opacity-0 transition-opacity duration-500 z-10 p-4">
                  <div className="h-full flex flex-col">
                    {/* Mini Terminal Header */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                      <span className="ml-2 text-[10px] text-cyan-400/60 font-mono">app.jsx</span>
                    </div>

                    {/* Code Lines */}
                    <div className="font-mono text-[10px] space-y-1.5 flex-1">
                      <div className="flex gap-2 opacity-0 group-hover:animate-[fadeIn_0.3s_ease-out_0.1s_forwards]">
                        <span className="text-gray-600 w-4">1</span>
                        <div>
                          <span className="text-purple-400">import</span>
                          <span className="text-gray-400"> {'{'}</span>
                          <span className="text-blue-400">React</span>
                          <span className="text-gray-400">{'}'}</span>
                        </div>
                      </div>

                      <div className="flex gap-2 opacity-0 group-hover:animate-[fadeIn_0.3s_ease-out_0.2s_forwards]">
                        <span className="text-gray-600 w-4">2</span>
                        <div></div>
                      </div>

                      <div className="flex gap-2 opacity-0 group-hover:animate-[fadeIn_0.3s_ease-out_0.3s_forwards]">
                        <span className="text-gray-600 w-4">3</span>
                        <div>
                          <span className="text-purple-400">const</span>
                          <span className="text-yellow-400"> App</span>
                          <span className="text-gray-400"> = () =&gt;</span>
                        </div>
                      </div>

                      <div className="flex gap-2 opacity-0 group-hover:animate-[fadeIn_0.3s_ease-out_0.4s_forwards]">
                        <span className="text-gray-600 w-4">4</span>
                        <div className="pl-2">
                          <span className="text-gray-400">&lt;</span>
                          <span className="text-green-400">div</span>
                          <span className="text-gray-400">&gt;</span>
                        </div>
                      </div>

                      <div className="flex gap-2 opacity-0 group-hover:animate-[fadeIn_0.3s_ease-out_0.5s_forwards]">
                        <span className="text-gray-600 w-4">5</span>
                        <div className="pl-4 truncate">
                          <span className="text-cyan-400">{p.tech[0]}</span>
                        </div>
                      </div>

                      <div className="flex gap-2 opacity-0 group-hover:animate-[fadeIn_0.3s_ease-out_0.6s_forwards]">
                        <span className="text-gray-600 w-4">6</span>
                        <div className="pl-2">
                          <span className="text-gray-400">&lt;/</span>
                          <span className="text-green-400">div</span>
                          <span className="text-gray-400">&gt;</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom indicator */}
                    <div className="flex items-center gap-1 text-[9px] text-cyan-400/50 mt-2">
                      <span>&gt;</span>
                      <span>click to view</span>
                    </div>
                  </div>
                </div>

                {/* Project Image - Shows on hover */}
                <img 
                  src={p.image} 
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 mix-blend-screen"
                />
                
                {/* Project Number Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-6xl font-bold text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-xs text-cyan-400">[{String(i + 1).padStart(2, '0')}]</div>
                  <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">{p.title}</h3>
                </div>
                <p className="text-gray-400 mb-4 text-sm font-sans">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, j) => (
                    <span key={j} className="text-xs px-2 py-1 border border-cyan-500/30 text-cyan-400/80">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-gray-600">
                  <span className="text-cyan-400">&gt;</span> CLICK_TO_VIEW_DETAILS
                </div>
              </div>
            </div>

            <div className="absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/20 transition-colors pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Project Modal */}
  {activeProject && (
    <div className="fixed inset-0 flex items-center justify-center p-6 bg-black/98 backdrop-blur-sm z-50" onClick={() => setActiveProject(null)}>
      <div className="relative max-w-5xl w-full border-2 border-cyan-500/50 bg-black/95 shadow-2xl shadow-cyan-500/20" onClick={(e) => e.stopPropagation()}>
        <div className="absolute -top-3 left-6 bg-black px-3 text-xs text-cyan-400">PROJECT_DETAILS</div>
        <button onClick={() => setActiveProject(null)} className="absolute top-4 right-4 w-10 h-10 border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all flex items-center justify-center text-cyan-400 text-xl">×</button>
        
        <div className="grid md:grid-cols-2">
          <div className="relative h-80 md:h-auto border-r border-cyan-500/20 overflow-hidden group">
            {/* Animated Code Snippet - Shows by default */}
            <div className="absolute inset-0 bg-black/95 group-hover:opacity-0 transition-opacity duration-500 z-10">
              <div className="h-full flex flex-col">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-cyan-500/20 bg-gray-900/50">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-xs text-cyan-400/60 font-mono">project.jsx</span>
                </div>

                {/* Code Content */}
                <div className="flex-1 p-6 overflow-auto">
                  <div className="font-mono text-sm space-y-3">
                    <div className="flex gap-4 opacity-0 animate-[slideIn_0.5s_ease-out_0.2s_forwards]">
                      <span className="text-gray-600 w-6 text-right select-none">1</span>
                      <div>
                        <span className="text-purple-400">import</span>
                        <span className="text-gray-400"> {'{'} </span>
                        <span className="text-blue-400">useState</span>
                        <span className="text-gray-400"> {'}'} </span>
                        <span className="text-purple-400">from</span>
                        <span className="text-green-400"> 'react'</span>
                        <span className="text-gray-500">;</span>
                      </div>
                    </div>

                    <div className="flex gap-4 opacity-0 animate-[slideIn_0.5s_ease-out_0.4s_forwards]">
                      <span className="text-gray-600 w-6 text-right select-none">2</span>
                      <div className="text-gray-600">
                        {`// ${activeProject.desc}`}
                      </div>
                    </div>

                    <div className="flex gap-4 opacity-0 animate-[slideIn_0.5s_ease-out_0.5s_forwards]">
                      <span className="text-gray-600 w-6 text-right select-none">3</span>
                      <div></div>
                    </div>

                    <div className="flex gap-4 opacity-0 animate-[slideIn_0.5s_ease-out_0.6s_forwards]">
                      <span className="text-gray-600 w-6 text-right select-none">4</span>
                      <div>
                        <span className="text-purple-400">const</span>
                        <span className="text-yellow-400"> Project</span>
                        <span className="text-gray-400"> = () =&gt; {'{'}</span>
                      </div>
                    </div>

                    <div className="flex gap-4 opacity-0 animate-[slideIn_0.5s_ease-out_0.7s_forwards]">
                      <span className="text-gray-600 w-6 text-right select-none">5</span>
                      <div className="pl-4">
                        <span className="text-purple-400">const</span>
                        <span className="text-gray-400"> tech = [</span>
                      </div>
                    </div>

                    <div className="flex gap-4 opacity-0 animate-[slideIn_0.5s_ease-out_0.8s_forwards]">
                      <span className="text-gray-600 w-6 text-right select-none">6</span>
                      <div className="pl-8">
                        {activeProject.tech.slice(0, 3).map((t, i) => (
                          <span key={i}>
                            <span className="text-green-400">'{t}'</span>
                            {i < Math.min(2, activeProject.tech.length - 1) && <span className="text-gray-500">, </span>}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 opacity-0 animate-[slideIn_0.5s_ease-out_0.9s_forwards]">
                      <span className="text-gray-600 w-6 text-right select-none">7</span>
                      <div className="pl-4">
                        <span className="text-gray-400">];</span>
                      </div>
                    </div>

                    <div className="flex gap-4 opacity-0 animate-[slideIn_0.5s_ease-out_1s_forwards]">
                      <span className="text-gray-600 w-6 text-right select-none">8</span>
                      <div></div>
                    </div>

                    <div className="flex gap-4 opacity-0 animate-[slideIn_0.5s_ease-out_1.1s_forwards]">
                      <span className="text-gray-600 w-6 text-right select-none">9</span>
                      <div className="pl-4">
                        <span className="text-purple-400">return</span>
                        <span className="text-gray-400"> &lt;</span>
                        <span className="text-green-400">App</span>
                        <span className="text-gray-400"> /&gt;;</span>
                      </div>
                    </div>

                    <div className="flex gap-4 opacity-0 animate-[slideIn_0.5s_ease-out_1.2s_forwards]">
                      <span className="text-gray-600 w-6 text-right select-none">10</span>
                      <div>
                        <span className="text-gray-400">{'}'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover hint */}
                  <div className="mt-8 flex items-center gap-2 text-xs text-cyan-400/60 opacity-0 animate-[fadeIn_0.5s_ease-out_1.5s_forwards]">
                    <span>&gt;</span>
                    <span>hover to preview</span>
                    <span className="inline-block w-2 h-3 bg-cyan-400/60 animate-pulse ml-1"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Image - Shows on hover */}
            <img 
              src={activeProject.image} 
              alt={activeProject.title}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-80 transition-opacity duration-500 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>

          <div className="p-8 space-y-6">
            <div>
              <div className="text-xs text-cyan-400 mb-2">&gt; PROJECT_{activeProject.id + 1}</div>
              <h2 className="text-3xl font-bold mb-3">{activeProject.title}</h2>
              <p className="text-gray-400 text-sm mb-3 font-sans">{activeProject.desc}</p>
              <p className="text-gray-500 text-sm font-sans leading-relaxed">{activeProject.longDesc}</p>
            </div>

            <div>
              <div className="text-xs text-cyan-400 mb-2">&gt; TECH_STACK</div>
              <div className="flex flex-wrap gap-2">
                {activeProject.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 border border-cyan-500/30 text-xs text-cyan-400/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <a href={activeProject.demo} className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all text-center text-sm font-bold">
                VIEW_DEMO →
              </a>
              <a href={activeProject.github} className="flex-1 py-3 border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all text-center text-sm font-bold">
                VIEW_CODE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )}

        {/* Certifications */}
  <section className="relative py-24 px-6 z-10">
    <div className="max-w-7xl mx-auto">
      <div className="border-l-2 border-cyan-500 pl-6 mb-16">
        <div className="text-xs text-cyan-400 mb-2">&gt; CREDENTIALS.VERIFY()</div>
        <h2 className="text-4xl md:text-5xl font-bold">CERTIFICATIONS</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((c) => (
          <div key={c.id} className="group relative border border-cyan-500/20 hover:border-cyan-400/50 bg-black/50 backdrop-blur transition-all overflow-hidden">
            <div className="absolute top-0 right-0 w-12 h-12 border-l border-b border-cyan-500/30 flex items-center justify-center text-cyan-400/60 text-xs font-bold">
              {String(c.id).padStart(2, '0')}
            </div>

            <div className="relative h-44 border-b border-cyan-500/20 overflow-hidden">
              {/* Certificate Badge - visible by default, fades on hover */}
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-500 z-10">
                <div className="relative">
                  {/* Rotating border */}
                  <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
                  
                  {/* Certificate icon */}
                  <div className="relative bg-black/80 backdrop-blur border-2 border-cyan-400/50 rounded-full w-24 h-24 flex items-center justify-center">
                    <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  
                  {/* Pulse effect */}
                  <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-ping"></div>
                </div>
              </div>

              {/* Certificate image - shows on hover */}
              <img 
                src={c.image} 
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-70 transition-opacity duration-500 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-xs text-cyan-400">
                ISSUED: {c.date}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">{c.title}</h3>
              <p className="text-cyan-400/70 text-sm mb-3 font-sans">{c.issuer}</p>
              <p className="text-gray-500 text-sm font-sans">{c.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

        {/* Tech Stack */}
  <section className="relative py-24 px-6 z-10">
    <div className="max-w-7xl mx-auto">
      <div className="border-l-2 border-cyan-500 pl-6 mb-16">
        <div className="text-xs text-cyan-400 mb-2">&gt; SKILLS.LIST()</div>
        <h2 className="text-4xl md:text-5xl font-bold">TECH_STACK</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { 
            title: "FRONTEND", 
            skills: [
              { name: "React", icon: "⚛️" },
              { name: "JavaScript ES6+", icon: "📜" },
              { name: "HTML5/CSS3", icon: "🎨" },
              { name: "Tailwind CSS", icon: "💨" },
              { name: "Three.js", icon: "🎲" },
              { name: "Vite", icon: "⚡" }
            ] 
          },
          { 
            title: "BACKEND", 
            skills: [
              { name: "Node.js", icon: "🟢" },
              { name: "Express", icon: "🚂" },
              { name: "Django", icon: "🐍" },
              { name: "MongoDB", icon: "🍃" },
              { name: "MySQL", icon: "🐬" },
              { name: "WebSocket", icon: "🔌" }
            ] 
          },
          { 
            title: "TOOLS", 
            skills: [
              { name: "Git & GitHub", icon: "📦" },
              { name: "REST APIs", icon: "🔗" },
              { name: "JWT Auth", icon: "🔐" },
              { name: "Algorithms", icon: "🧮" },
              { name: "Problem Solving", icon: "💡" },
              { name: "Data Structures", icon: "🏗️" }
            ] 
          }
        ].map((cat, i) => (
          <div key={i} className="border border-cyan-500/20 hover:border-cyan-400/50 bg-black/50 backdrop-blur transition-all">
            <div className="border-b border-cyan-500/20 p-4 bg-cyan-500/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400"></div>
                <h3 className="text-lg font-bold text-cyan-400">{cat.title}</h3>
              </div>
            </div>
            <div className="p-4 space-y-2">
              {cat.skills.map((s, j) => (
                <div key={j} className="flex items-center gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors group">
                  <span className="text-lg group-hover:scale-110 transition-transform">{s.icon}</span>
                  <span className="font-sans">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

          {/* Contact */}
        <section className="relative min-h-screen flex items-center justify-center px-6">
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <div className="border-l-2 border-cyan-500 pl-6 mb-12 inline-block text-left">
              <div className="text-xs text-cyan-400 mb-2 tracking-widest">&gt; CONTACT.INIT()</div>
              <div className="text-xs text-gray-500 mb-8 font-sans">Available for opportunities</div>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tight">
                <span className="text-white">LET'S_</span>
                <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">BUILD</span>
              </h2>
              <div className="text-sm text-gray-400 max-w-xl mb-8 font-sans leading-relaxed">
                <span className="text-cyan-400">&gt;</span> Open for freelance projects and full-time opportunities
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              <a href="mailto:said@example.com" className="group relative px-4 py-2 border border-cyan-500/30 hover:border-cyan-400 bg-black/50 hover:bg-cyan-500/10 transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div className="relative flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
                  <span className="text-xs">GET_IN_TOUCH</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-8 px-6 border-t border-cyan-500/20 z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-gray-600">
              <span className="text-cyan-400">&gt;</span> © 2025 SAID_ELAMRI // ALL_RIGHTS_RESERVED
            </div>
            <div className="flex gap-6 text-xs">
              {[
                { href: "https://github.com/saidElamri", label: "[GITHUB]" },
                { href: "https://www.linkedin.com/in/said-elamri/", label: "[LINKEDIN]" },
                { href: "mailto:said.elamri.evil@gmail.com", label: "[EMAIL]" }
              ].map((link, i) => (
                <a key={i} href={link.href} className="text-gray-600 hover:text-cyan-400 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    );
  };

  export default Portfolio;