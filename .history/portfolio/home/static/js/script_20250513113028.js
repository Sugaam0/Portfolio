
    // Three.js Cosmic Orb
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('cosmic-orb'), alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Central Orb
    const orbGeometry = new THREE.SphereGeometry(1, 32, 32);
    const orbMaterial = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    const orb = new THREE.Mesh(orbGeometry, orbMaterial);
    scene.add(orb);

    // Orbiting Project Icons
    const icons = [];
    const iconGeometry = new THREE.TetrahedronGeometry(0.2);
    const iconMaterial = new THREE.MeshBasicMaterial({ color: 0xa855f7 });
    for (let i = 0; i < 3; i++) {
      const icon = new THREE.Mesh(iconGeometry, iconMaterial);
      icon.position.set(Math.cos(i * 2) * 2, Math.sin(i * 2) * 2, 0);
      scene.add(icon);
      icons.push(icon);
    }

    camera.position.z = 5;

    // Mouse Interaction
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    function animate() {
      requestAnimationFrame(animate);
      orb.rotation.y += 0.01;
      icons.forEach((icon, i) => {
        icon.rotation.y += 0.02;
        icon.position.x = Math.cos(Date.now() * 0.001 + i * 2) * 2;
        icon.position.y = Math.sin(Date.now() * 0.001 + i * 2) * 2;
      });
      orb.rotation.x += mouseY * 0.05;
      orb.rotation.y += mouseX * 0.05;
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    // GSAP Scroll Animations
    gsap.utils.toArray('.holo-panel').forEach(panel => {
      gsap.from(panel, {
        scrollTrigger: {
          trigger: panel,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      });
    });

    gsap.from('.glitch', {
      scrollTrigger: {
        trigger: '.glitch',
        start: 'top 80%'
      },
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      ease: 'elastic.out(1, 0.5)'
    });

    

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Toggle mobile menu
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    } else {
      console.error('Mobile menu elements not found:', { mobileMenuBtn, mobileMenu });
    }

    // Smooth scrolling and auto-hide mobile menu
    document.querySelectorAll('.cosmic-nav__item, .cosmic-nav__mobile a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        // Only prevent default for anchor links (those starting with #)
        if (this.getAttribute('href').startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
        
        // Always hide mobile menu after click
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      });
    });
  });

  // document.querySelectorAll('.cosmic-footer__link').forEach(anchor => {
  //   anchor.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     const target = document.querySelector(this.getAttribute('href'));
  //     if (target) {
  //       target.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   });
  // });

