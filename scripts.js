/* scripts.js */

// Initialisieren von GSAP und ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// GSAP-Animation für den Haupttitel
gsap.to("#main-title", {
  duration: 2,
  y: 0,
  opacity: 1,
  ease: "power2.out",
  delay: 0.5
});

// GSAP-Animation für das Logo
gsap.from("#logo", {
  duration: 2,
  scale: 0.8,
  opacity: 0,
  ease: "back.out(1.7)",
  delay: 1
});

// 3D-Logo mit Three.js
document.addEventListener('DOMContentLoaded', () => {
  // Szenen-Setup
  const scene = new THREE.Scene();
  
  // Kamera
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 3;

  // Renderer
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(200, 200);
  document.getElementById('logo-container').appendChild(renderer.domElement);

  // Beleuchtung
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 0.6);
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);

  // Geometrie und Material (Platzhalter - ersetzen Sie dies mit Ihrem 3D-Modell)
  const geometry = new THREE.IcosahedronGeometry(1, 0);
  const material = new THREE.MeshStandardMaterial({
    color: 0x007BFF,
    metalness: 0.5,
    roughness: 0.1,
    emissive: 0x000000,
    emissiveIntensity: 0.5
  });
  const logoMesh = new THREE.Mesh(geometry, material);
  scene.add(logoMesh);

  // Animation
  const animate = function () {
    requestAnimationFrame(animate);
    logoMesh.rotation.y += 0.005;
    logoMesh.rotation.x += 0.005;
    renderer.render(scene, camera);
  };

  animate();

  // Interaktive Hover-Effekte mit GSAP
  const logoContainer = document.getElementById('logo-container');

  logoContainer.addEventListener('mouseenter', () => {
    gsap.to(logoMesh.scale, { duration: 0.3, x: 1.2, y: 1.2, z: 1.2, ease: "power2.out" });
    gsap.to(logoMesh.rotation, { duration: 0.3, y: logoMesh.rotation.y + Math.PI, ease: "power2.out" });
  });

  logoContainer.addEventListener('mouseleave', () => {
    gsap.to(logoMesh.scale, { duration: 0.3, x: 1, y: 1, z: 1, ease: "power2.out" });
    gsap.to(logoMesh.rotation, { duration: 0.3, y: logoMesh.rotation.y + Math.PI, ease: "power2.out" });
  });
});

// Scroll-basierte Animationen für Leistungen
const leistungen = document.querySelectorAll('.leistung');

leistungen.forEach(leistung => {
  gsap.from(leistung, {
    scrollTrigger: {
      trigger: leistung,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.2
  });
});

// Scroll-basierte Animationen für Testimonials
const testimonials = document.querySelectorAll('.testimonial');

testimonials.forEach(testimonial => {
  gsap.from(testimonial, {
    scrollTrigger: {
      trigger: testimonial,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 1,
    scale: 0.95,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.2
  });
});

// Smooth Scroll für interne Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Newsletter-Formular-Verarbeitung
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const emailInput = this.querySelector('input[type="email"]');
  const email = emailInput.value;
  
  // Hier können Sie den Code zur Verarbeitung des Newsletters hinzufügen
  // Beispiel: Senden der E-Mail an einen Server oder eine API
  // Für Demonstrationszwecke wird eine Alert-Nachricht verwendet
  gsap.to("#newsletter", { duration: 0.5, backgroundColor: "#d4edda" });
  gsap.fromTo("#newsletter", { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.5 });
  
  alert(`Danke für Ihre Anmeldung, ${email}!`);
  emailInput.value = '';
});
