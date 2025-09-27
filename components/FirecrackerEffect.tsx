'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  gravity: number;
  type?: 'sparkle' | 'rocket' | 'cracker';
  trail?: {x: number, y: number}[];
  maxTrail?: number;
  flicker?: number;
  hasExploded?: boolean;
  targetY?: number;
};

export function FirecrackerEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const lastFireworkTimeRef = useRef<number>(0);
  const lastRocketTimeRef = useRef<number>(0);
  const lastCrackerTimeRef = useRef<number>(0);
  const fireworkInterval = 2000; // Increased from 1000ms
  const rocketInterval = 5000;    // Increased from 3000ms
  const crackerInterval = 4000;   // Increased from 2000ms

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial resize
    resizeCanvas();

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    // Create a firework at random position
    const createFirework = () => {
      const x = Math.random() * canvas.width;
      const y = canvas.height * 0.2 + Math.random() * (canvas.height * 0.3);
      const particleCount = 80 + Math.floor(Math.random() * 40); // More particles but smaller
      const particles: Particle[] = [];
      const colors = [
        '#ffff00', // Bright Yellow
        '#ffeb3b', // Light Yellow
        '#fff176', // Lighter Yellow
        '#fff9c4', // Very Light Yellow
        '#ffffff', // White
        '#fffd61', // Lemon Yellow
        '#ffff8d', // Light Lemon
        '#fff59d'  // Pale Yellow
      ];

      // Main firework particles
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2) * (i / particleCount);
        const speed = 0.8 + Math.random() * 1.2; // Slower speed
        const size = 0.8 + Math.random() * 1.2; // Smaller size
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size,
          color,
          alpha: 0.9 + Math.random() * 0.1, // Slightly transparent
          decay: 0.008 + Math.random() * 0.01, // Faster decay for sparkle effect
          gravity: 0.02, // Reduced gravity for floating effect
          type: 'sparkle',
        });
      }

      // Add some tiny white sparkles for extra effect
      for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.2 + Math.random() * 0.6; // Very slow speed
        const size = 0.3 + Math.random() * 0.7; // Very small size
        
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size,
          color: '#ffffff', // Pure white for contrast
          alpha: 0.7 + Math.random() * 0.3,
          decay: 0.004 + Math.random() * 0.004, // Slower decay for longer lasting sparkles
          gravity: 0.005, // Minimal gravity
          type: 'sparkle',
        });
      }

      return particles;
    };

    // Create a rocket
    const createRocket = () => {
      const x = 50 + Math.random() * (canvas.width - 100);
      const y = canvas.height;
      const targetY = 50 + Math.random() * (canvas.height * 0.4);
      const speedY = -6 - Math.random() * 3; // Faster initial speed
      
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 0.2, // Less horizontal movement
        vy: speedY,
        size: 3 + Math.random() * 2,
        color: '#ffffff',
        alpha: 1,
        decay: 0.01,
        gravity: 0.05, // Slight gravity to create arc
        type: 'rocket',
        targetY,
        trail: [],
        maxTrail: 15,
        hasExploded: false
      } as Particle & { hasExploded: boolean };
    };

    // Create explosion at position
    const createExplosion = (x: number, y: number, color: string = '#ffffff') => {
      const particles: Particle[] = [];
      const particleCount = 100 + Math.floor(Math.random() * 50);
      
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1 + Math.random() * 5;
        const size = 1 + Math.random() * 3;
        const colors = [
          '#ff0000', '#ff9900', '#ffff00', '#00ff00', 
          '#00ffff', '#0000ff', '#9900ff', '#ff00ff'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size,
          color,
          alpha: 0.8 + Math.random() * 0.2,
          decay: 0.01 + Math.random() * 0.02,
          gravity: 0.05,
          type: 'sparkle'
        });
      }
      
      // Add some white sparks in the center
      for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.5 + Math.random() * 1.5;
        
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1 + Math.random() * 2,
          color: '#ffffff',
          alpha: 1,
          decay: 0.005 + Math.random() * 0.01,
          gravity: 0.01,
          type: 'sparkle'
        });
      }
      
      return particles;
    };

    // Create a diya (small light)
    const createDiya = () => {
      const x = Math.random() * canvas.width;
      const y = canvas.height - 20 - Math.random() * 40;
      const size = 3 + Math.random() * 2;
      
      return {
        x,
        y,
        vx: 0,
        vy: 0,
        size,
        color: '#ff9800',
        alpha: 0.7 + Math.random() * 0.3,
        decay: 0,
        gravity: 0,
        type: 'sparkle' as const,
        flicker: 0
      } as Particle;
    };

    // Create initial diyas
    for (let i = 0; i < 15; i++) {
      particlesRef.current.push(createDiya());
    }

    // Update and draw particles
    const updateParticles = () => {
      const now = Date.now();
      
      // Add new firework at intervals
      if (now - lastFireworkTimeRef.current > fireworkInterval) {
        if (Math.random() > 0.3) { // 70% chance for normal firework
          const newParticles = createFirework();
          particlesRef.current = [...particlesRef.current, ...newParticles];
        }
        lastFireworkTimeRef.current = now;
      }
      
      // Add new rocket at intervals
      if (now - lastRocketTimeRef.current > rocketInterval) {
        if (Math.random() > 0.4) { // 60% chance for rocket
          particlesRef.current.push(createRocket());
          // Play launch sound (uncomment if you have audio)
          // const launchSound = new Audio('/sounds/rocket-launch.mp3');
          // launchSound.volume = 0.3;
          // launchSound.play().catch(e => console.log('Audio play failed:', e));
        }
        lastRocketTimeRef.current = now;
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        // Update position based on particle type
        if (particle.type === 'rocket') {
          // Update rocket position with slight horizontal movement
          particle.x += particle.vx * 0.5; // Slow down horizontal movement
          particle.vy += particle.gravity;
          particle.y += particle.vy;
          
          // Add trail effect
          if (particle.trail) {
            particle.trail.push({ x: particle.x, y: particle.y });
            if (particle.trail.length > (particle.maxTrail || 10)) {
              particle.trail.shift();
            }
          }
          
          // Check if rocket has reached target or slowed down too much
          if (particle.type === 'rocket' && !particle.hasExploded && (particle.y <= particle.targetY! || particle.vy > -1)) {
            // Create explosion
            const explosionParticles = createExplosion(particle.x, particle.y, particle.color);
            particlesRef.current = [...particlesRef.current, ...explosionParticles];
            particle.hasExploded = true;
            
            // Play explosion sound (uncomment if you have audio)
            // const explosionSound = new Audio('/sounds/explosion.mp3');
            // explosionSound.volume = 0.2;
            // explosionSound.play().catch(e => console.log('Audio play failed:', e));
            
            // Remove the rocket after explosion
            return false;
          }
          
          // Remove if out of bounds
          if (particle.y < -20) return false;
        } else {
          // Update normal particles
          particle.x += particle.vx;
          particle.vy += particle.gravity;
          particle.y += particle.vy;
        }
        particle.y += particle.vy;
        particle.alpha -= particle.decay;

        // Handle rocket behavior
        if (particle.type === 'rocket') {
          // Add to trail
          if (!particle.trail) particle.trail = [];
          particle.trail.push({x: particle.x, y: particle.y});
          
          // Keep trail length in check
          if (particle.trail.length > (particle.maxTrail || 10)) {
            particle.trail.shift();
          }
          
          // Explode when reaching target
          if (particle.y <= (particle as any).targetY) {
            // Create explosion
            const explosion = createFirework();
            explosion.forEach(p => {
              p.x = particle.x;
              p.y = particle.y;
            });
            particlesRef.current = [...particlesRef.current, ...explosion];
            return false; // Remove rocket
          }
        }

        // Draw particle
        if (particle.alpha > 0) {
          ctx.globalAlpha = particle.alpha;
          
          // Draw trail for rockets
          if (particle.type === 'rocket' && particle.trail && particle.trail.length > 1) {
            ctx.strokeStyle = '#ff9800';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.trail[0].x, particle.trail[0].y);
            
            for (let i = 1; i < particle.trail.length; i++) {
              ctx.lineTo(particle.trail[i].x, particle.trail[i].y);
            }
            
            ctx.stroke();
          }
          
          // Draw the particle
          ctx.fillStyle = particle.color;
          
          // Rocket body
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Rocket glow
          if (Math.random() > 0.3) {
            const gradient = ctx.createRadialGradient(
              particle.x, particle.y, 0,
              particle.x, particle.y, particle.size * 2
            );
            gradient.addColorStop(0, 'rgba(255, 200, 0, 0.8)');
            gradient.addColorStop(1, 'rgba(255, 100, 0, 0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
            ctx.fill();
          }
        } else {
          // Draw sparkle/cracker particles
          ctx.globalAlpha = particle.alpha;
          ctx.fillStyle = particle.color;
          
          // Add glow for sparkles
          if (particle.type === 'sparkle' && Math.random() > 0.7) {
            const gradient = ctx.createRadialGradient(
              particle.x, particle.y, 0,
              particle.x, particle.y, particle.size * 1.5
            );
            gradient.addColorStop(0, `${particle.color}80`);
            gradient.addColorStop(1, `${particle.color}00`);
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
          
          // Draw main particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.restore();
      
      // Add glow for diyas
      if (particle.type === 'sparkle' && particle.size > 2) {
        ctx.save();
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, `${particle.color}80`);
        gradient.addColorStop(1, `${particle.color}00`);
        
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      
      return particle.alpha > 0.01; // Keep particle if still visible
      });

      // Add random diyas occasionally
      if (Math.random() < 0.005) {
        const diyaParticles = particlesRef.current.filter(p => p.type === 'sparkle' && p.size > 2);
        if (diyaParticles.length < 15) {
          particlesRef.current.push(createDiya());
        }
      }

      // Limit number of particles for performance
      if (particlesRef.current.length > 800) {
        // Keep diyas and rockets, remove oldest sparkles first
        const sparkles = particlesRef.current.filter(p => p.type !== 'sparkle');
        const nonSparkles = particlesRef.current.filter(p => p.type === 'sparkle');
        particlesRef.current = [...nonSparkles, ...sparkles.slice(-600)];
      }

      animationFrameRef.current = requestAnimationFrame(updateParticles);
    };

    // Start animation
    lastFireworkTimeRef.current = Date.now();
    updateParticles();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.7 }} // Slightly more visible for yellow/white colors
    />
  );
}
