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
gsap.to("#logo", {
  duration: 2,
  scale: 1,
  opacity: 1,
  ease: "back.out(1.7)",
  delay: 1
});

// Animierte Linien im Header
gsap.from(".line", {
  duration: 3,
  strokeDashoffset: 1000,
  strokeDasharray: 1000,
  ease: "power2.out",
  stagger: 0.5
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

// Scroll-basierte Animationen für Projekte
const projekte = document.querySelectorAll('.projekt');

projekte.forEach(projekt => {
  gsap.from(projekt, {
    scrollTrigger: {
      trigger: projekt,
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
      gsap.to(window, {duration: 1, scrollTo: target.offsetTop - 80});
    }
  });
});

// Formularverarbeitung für Newsletter
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const emailInput = this.querySelector('input[type="email"]');
  const email = emailInput.value;

  // Hier können Sie den Code zur Verarbeitung des Newsletters hinzufügen
  // Beispiel: Senden der E-Mail an einen Server oder eine API

  // Visuelles Feedback für den Benutzer
  gsap.to("#newsletter", { duration: 0.5, backgroundColor: "#d4edda" });
  gsap.fromTo("#newsletter", { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.5 });

  alert(`Danke für Ihre Anmeldung, ${email}!`);
  emailInput.value = '';
});

// Formularverarbeitung für Kontakt
document.getElementById('kontakt-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const nameInput = this.querySelector('input[type="text"]');
  const emailInput = this.querySelector('input[type="email"]');
  const messageInput = this.querySelector('textarea');
  
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Hier können Sie den Code zur Verarbeitung des Kontaktformulars hinzufügen
  // Beispiel: Senden der Daten an einen Server oder eine API

  // Visuelles Feedback für den Benutzer
  gsap.to("#kontakt", { duration: 0.5, backgroundColor: "#d4edda" });
  gsap.fromTo("#kontakt", { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.5 });

  alert(`Vielen Dank für Ihre Nachricht, ${name}! Wir werden uns bald bei Ihnen melden.`);
  
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});
