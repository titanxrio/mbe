/* scripts.js */

/* 3D-Logo mit Three.js */
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
  const logo = new THREE.Mesh(geometry, material);
  scene.add(logo);

  // Animation
  const animate = function () {
    requestAnimationFrame(animate);
    logo.rotation.y += 0.005;
    logo.rotation.x += 0.005;
    renderer.render(scene, camera);
  };

  animate();

  // Interaktive Hover-Effekte
  const logoContainer = document.getElementById('logo-container');

  logoContainer.addEventListener('mouseover', () => {
    gsap.to(logo.scale, { duration: 0.3, x: 1.2, y: 1.2, z: 1.2, ease: "power2.out" });
    gsap.to(logo.rotation, { duration: 0.3, y: logo.rotation.y + Math.PI, ease: "power2.out" });
  });

  logoContainer.addEventListener('mouseout', () => {
    gsap.to(logo.scale, { duration: 0.3, x: 1, y: 1, z: 1, ease: "power2.out" });
    gsap.to(logo.rotation, { duration: 0.3, y: logo.rotation.y + Math.PI, ease: "power2.out" });
  });

  /* Optional: Laden eines eigenen 3D-Modells mit GLTFLoader
  const loader = new THREE.GLTFLoader();
  loader.load(
    'assets/models/logo.glb', // Pfad zu Ihrem 3D-Modell
    function (gltf) {
      const model = gltf.scene;
      model.scale.set(1, 1, 1);
      scene.add(model);
      // Optional: Animationen oder zusätzliche Einstellungen
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  */
});

/* GSAP-Animation für den Titel */
gsap.from("#main-title", { duration: 2, y: -50, opacity: 0, ease: "power2.out" });

/* ScrollTrigger registrieren */
gsap.registerPlugin(ScrollTrigger);

/* Animation der Leistungen beim Scrollen */
const leistungenSection = document.getElementById('leistungen');
const leistungen = document.querySelectorAll('.leistung');

gsap.from(leistungen, {
  scrollTrigger: {
    trigger: leistungenSection,
    start: "top 80%"
  },
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.2,
  ease: "power2.out"
});

/* Animation der Testimonials beim Scrollen */
const testimonialsSection = document.getElementById('testimonials');
const testimonials = document.querySelectorAll('.testimonial');

gsap.from(testimonials, {
  scrollTrigger: {
    trigger: testimonialsSection,
    start: "top 80%"
  },
  duration: 1,
  scale: 0.95,
  opacity: 0,
  stagger: 0.2,
  ease: "power2.out"
});

/* Smooth Scroll für interne Links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  });
});

/* Newsletter-Formular-Verarbeitung */
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const emailInput = this.querySelector('input[type="email"]');
  const email = emailInput.value;
  // Hier können Sie den Code zur Verarbeitung des Newsletters hinzufügen
  // Beispiel: Senden der E-Mail an einen Server oder eine API
  alert(`Danke für Ihre Anmeldung, ${email}!`);
  emailInput.value = '';
});
