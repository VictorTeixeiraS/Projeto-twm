import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { musicGenres } from '../lib/data';
import styles from '../styles/Home.module.css';

// Importe as imagens
import logoEsof from '/assets/Logo-Esof.png';

const Home = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroTextRef = useRef<HTMLDivElement | null>(null);
  const heroLogoRef = useRef<HTMLDivElement | null>(null);

  // Lógica de animação de rolagem (baseada em script.js)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Lógica de fundo de partículas interativo (baseada em script.js)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: 0, y: 0, radius: 150 };

    class Particle {
      public x: number;
      public y: number;
      public size: number;
      public speedX: number;
      public speedY: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > height) this.speedY = -this.speedY;

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          this.x -= dx / 20;
          this.y -= dy / 20;
        }
      }

      draw() {
        ctx.fillStyle = 'rgba(140,0,255,0.7)';
        ctx.shadowColor = '#8c00ff';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particlesArray: Particle[] = [];
    const particleCount = 100;

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particlesArray.push(new Particle());
      }
    }

    function connectParticles() {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.strokeStyle = 'rgba(140,0,255,0.1)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particlesArray.forEach((p) => {
        p.update();
        p.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Lógica de efeito paralaxe (baseada em script.js)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (heroTextRef.current) {
        heroTextRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
      if (heroLogoRef.current) {
        heroLogoRef.current.style.transform = `translateY(${scrollY * -0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.homeContainer}>
      <canvas ref={canvasRef} id="particles" className={styles.particles}></canvas>

      <header className={styles.header}>
        <h1>Projeto ESOF</h1>
        <Link to="/login" className={styles.loginBtn}>
          Login
        </Link>
      </header>

      <section className={`${styles.hero} ${styles.animate}`}>
        <div ref={heroTextRef} className={styles.heroText}>
          <h2>Bem-vindo ao Projeto de ESOF</h2>
          <p>
            O DescontrAI é um sistema desenvolvido para a disciplina de Engenharia de Software, com foco em
            proporcionar uma experiência de interação simples e eficiente. O projeto busca aplicar conceitos de
            engenharia na construção de uma solução intuitiva e funcional, explorando boas práticas de
            desenvolvimento e design de software.
          </p>
          <a href="#sobre" className={styles.ctaBtn}>
            Saiba Mais
          </a>
        </div>
        <div ref={heroLogoRef} className={styles.heroLogo}>
          <img src={logoEsof} alt="Logo do Projeto ESOF" />
        </div>
      </section>

      <main className={styles.main}>
        <section ref={(el) => (sectionsRef.current[0] = el)} id="sobre" className={styles.animate}>
          <h2>Sobre o Projeto</h2>
          <p>
            O DescontrAI é um aplicativo voltado para quem busca profissionais do ramo musical e espaços para
            eventos. A plataforma conecta contratantes a músicos, DJs e casas de show, oferecendo recursos como
            filtros de busca, solicitação de datas, contratos digitais, pagamentos seguros e chat integrado. O
            objetivo é expandir o mercado de eventos de forma prática e acessível, aproximando artistas e clientes
            em uma única solução.
          </p>
        </section>

        <section ref={(el) => { sectionsRef.current[1] = el; }} id="integrantes" className={styles.animate}>
          <h2>Integrantes</h2>
          <p>
            O projeto foi desenvolvido por: Adalberto S Pereira, Emanuel C Simões e Andreey Coutinho, cada um
            contribuindo em diferentes módulos do sistema.
          </p>
        </section>

        <section ref={(el) => (sectionsRef.current[2] = el)} id="disciplina" className={styles.animate}>
          <h2>Disciplina</h2>
          <p>
            O projeto faz parte da disciplina de Engenharia de Software (ESOF), voltada para o desenvolvimento de
            projetos.
          </p>
        </section>

        <section ref={(el) => (sectionsRef.current[3] = el)} id="professor" className={styles.animate}>
          <h2>Professor</h2>
          <p>
            O orientador do projeto é o Prof. Alexandre Cardoso, que supervisiona o desenvolvimento, orienta a
            equipe e fornece feedback contínuo sobre o progresso do trabalho.
          </p>
        </section>

        <section ref={(el) => { sectionsRef.current[4] = el; }} id="cards" className={styles.animate}>
          <h2>Gêneros musicais</h2>
          <div className={styles.cardsContainer}>
            {musicGenres.map((genre) => (
              <Card
                key={genre.id}
                coverImage={genre.coverImage}
                titleImage={genre.titleImage}
                characterImage={genre.characterImage}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        &copy; 2025 Projeto ESOF - Todos os direitos reservados
      </footer>
    </div>
  );
};

export default Home;