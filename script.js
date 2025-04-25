
// NutriGain - Scroll Animations
console.log("NutriGain Landing Page: Scroll animations activated.");

// Seleccionar todos los elementos con clases de animación
const animatedElements = document.querySelectorAll(
  '.slide-left, .slide-right, .zoom-in, .fade-in-up'
);

// Observer para mostrar elementos cuando estén en pantalla
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
      observer.unobserve(entry.target); // solo una vez
    }
  });
}, {
  threshold: 0.2
});

// Observar cada elemento animable
animatedElements.forEach((el) => observer.observe(el));

const translations = {
  en: {
    aboutApp: "About the app",
    paths: "Paths",
    pricing: "Pricing",
    aboutUs: "About us",
    login: "Log In",
    getStarted: "Get Started",
    heroTitle: "Go <span class='green'>healthy</span>, choose a <span class='rainbow'>PATH</span><br> and BECOME the <span class='yellow'>BEST YOU</span> 💪",
    heroDesc: "Wanna be aesthetic and strong? or perform better at sports? or even be more flexible?<br> We help you create a <span class='highlight-quality'>high-quality</span> plan to reach these goals",
    aboutTitle: "What is NutriGain? One more gym app?",
    aboutDesc: "First of all, no, not at all. Our app transforms the way people train and eat, depending on what their goals are. We help you track your training progress and weekly diet while keeping you inspired with challenges and avatars that evolve when you do too.",
    f1Title: "2 in 1 Fitness App",
    f1Desc: "Manage both your training routine and diet on 1 app.",
    f2Title: "Evolve with progress",
    f2Desc: "Unlock themes and items for your avatar when completing challenges or making progress.",
    f3Title: "Customize everything!",
    f3Desc: "Adapt your fitness plan based on your preferences.",
    path1Title: "Strength/Aesthetics Path",
    path1Desc: "This path is designed for those aiming to build muscle, gain strength, and sculpt their physique. Perfect for weightlifting, bodybuilding, or simply enhancing your physical appearance.",
    path2Title: "Agility/Sports Path",
    path2Desc: "Tailored for athletes in sports like football, tennis, or volleyball, this path boosts speed, coordination, and endurance. Ideal for improving performance on the field or court.",
    path3Title: "Yoga / Flexibility",
    path3Desc: "This path emphasizes mind-body connection, enhancing flexibility, balance, and overall well-being. Great for a calmer, yet effective routine.",
    pricingTitle: "Pricing",
    pricingDesc: "Choose the plan that best fits your fitness journey",
    basicPlan: "Basic Plan",
    startFree: "Start Free",
    premiumPlan: "Premium Plan",
    goPremium: "Go Premium",
    teamTitle: "Team",
    teamSubtitle: "About us",
    teamDesc: "Meet the big brains behind this app:"
  },
  es: {
    aboutApp: "Sobre la app",
    paths: "Caminos",
    pricing: "Precios",
    aboutUs: "Nosotros",
    login: "Iniciar sesión",
    getStarted: "Comenzar",
    heroTitle: "Sé <span class='green'>saludable</span>, elige un <span class='rainbow'>CAMINO</span><br> y CONVIÉRTETE en tu <span class='yellow'>MEJOR VERSIÓN</span> 💪",
    heroDesc: "¿Quieres verte bien y estar fuerte? ¿Rendir mejor en deportes? ¿Ser más flexible?<br> Te ayudamos a crear un plan <span class='highlight-quality'>de alta calidad</span> para lograrlo",
    aboutTitle: "¿Qué es NutriGain? ¿Otra app de gimnasio?",
    aboutDesc: "Primero que nada, no. Nuestra app transforma cómo las personas entrenan y se alimentan, según sus metas. Te ayudamos a seguir tu progreso de entrenamiento y dieta semanal mientras te motivamos con desafíos y avatares que evolucionan contigo.",
    f1Title: "App de fitness 2 en 1",
    f1Desc: "Administra tu rutina de ejercicios y dieta en una sola app.",
    f2Title: "Evoluciona con tu progreso",
    f2Desc: "Desbloquea temas y objetos para tu avatar al cumplir retos o progresar.",
    f3Title: "¡Personaliza todo!",
    f3Desc: "Adapta tu plan fitness según tus preferencias.",
    path1Title: "Camino de fuerza/estética",
    path1Desc: "Este camino es para quienes desean ganar músculo, fuerza y esculpir su cuerpo. Ideal para levantamiento de pesas, fisicoculturismo o mejorar tu físico.",
    path2Title: "Camino de agilidad/deportes",
    path2Desc: "Diseñado para atletas de fútbol, tenis o vóley, mejora velocidad, coordinación y resistencia. Perfecto para rendir mejor en la cancha.",
    path3Title: "Yoga / Flexibilidad",
    path3Desc: "Este camino fortalece la conexión mente-cuerpo, mejora flexibilidad y bienestar general. Ideal para una rutina efectiva y relajante.",
    pricingTitle: "Precios",
    pricingDesc: "Elige el plan que más se ajuste a tu camino fitness",
    basicPlan: "Plan Básico",
    startFree: "Comenzar Gratis",
    premiumPlan: "Plan Premium",
    goPremium: "Ir Premium",
    teamTitle: "Equipo",
    teamSubtitle: "Nosotros",
    teamDesc: "Conoce a los cerebritos detrás de esta app:"
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  localStorage.setItem("lang", currentLang);
  
  document.body.classList.add("fade-language");
  setTimeout(() => document.body.classList.remove("fade-language"), 400);

  translate(currentLang);
});

function translate(lang) {
  const t = translations[lang];
  document.querySelector('.nav-left li:nth-child(1) a').textContent = t.aboutApp;
  document.querySelector('.nav-left li:nth-child(2) a').textContent = t.paths;
  document.querySelector('.nav-left li:nth-child(3) a').textContent = t.pricing;
  document.querySelector('.nav-right li:nth-child(1) a').textContent = t.aboutUs;
  document.querySelector('.nav-right li:nth-child(2) a').textContent = t.login;
  document.getElementById("lang-toggle").textContent = currentLang === "en" ? "ES" : "EN";
  document.querySelectorAll(".get-started").forEach(btn => {
    if (btn.id !== "lang-toggle") btn.textContent = t.getStarted;
  });
  document.querySelectorAll(".member p").forEach(p => p.textContent = lang === "es" ? "Ingeniería de Software" : "Software Engineering");

  document.querySelector(".hero-left h1").innerHTML = t.heroTitle;
  document.querySelector(".hero-left p").innerHTML = t.heroDesc;
  document.querySelector("#about h2").textContent = t.aboutTitle;
  document.querySelector(".about-description").textContent = t.aboutDesc;

  const featureTitles = [t.f1Title, t.f2Title, t.f3Title];
  const featureDescs = [t.f1Desc, t.f2Desc, t.f3Desc];
  document.querySelectorAll(".feature-box h3").forEach((el, i) => el.textContent = featureTitles[i]);
  document.querySelectorAll(".feature-box p").forEach((el, i) => el.textContent = featureDescs[i]);

  const pathTitles = [t.path1Title, t.path2Title, t.path3Title];
  const pathDescs = [t.path1Desc, t.path2Desc, t.path3Desc];
  document.querySelectorAll(".path-text h2").forEach((el, i) => el.textContent = pathTitles[i]);
  document.querySelectorAll(".path-text p").forEach((el, i) => el.textContent = pathDescs[i]);

  const pathListItems = {
    "en": [
      ["Personalized gym routines", "Progressive overload tracking and PR logging", "Nutrition plan focused on muscle growth"],
      ["Agility, reaction, and cardio workouts", "Plans synced with your sports calendar", "Nutrition to enhance performance and recovery"],
      ["Guided yoga and meditation sessions", "Mobility and mindful breathing exercises", "Balanced nutrition for energy and relaxation"]
    ],
    "es": [
      ["Rutinas de gimnasio personalizadas", "Seguimiento de sobrecarga progresiva y registro de PR", "Plan nutricional enfocado en crecimiento muscular"],
      ["Ejercicios de agilidad, reacción y cardio", "Planes sincronizados con tu calendario deportivo", "Nutrición para mejorar rendimiento y recuperación"],
      ["Sesiones guiadas de yoga y meditación", "Ejercicios de movilidad y respiración consciente", "Nutrición equilibrada para energía y relajación"]
    ]
  };
  document.querySelectorAll(".path-text ul").forEach((ul, idx) => {
    ul.innerHTML = pathListItems[lang][idx].map(item => `<li>${item}</li>`).join('');
  });

  document.querySelector("#pricing h2").textContent = t.pricingTitle;
  document.querySelector("#pricing p").textContent = t.pricingDesc;
  document.querySelectorAll(".plan-card h3")[0].textContent = t.basicPlan;
  document.querySelectorAll(".plan-card button")[0].textContent = t.startFree;
  document.querySelectorAll(".plan-card h3")[1].textContent = t.premiumPlan;
  document.querySelectorAll(".plan-card button")[1].textContent = t.goPremium;
  document.querySelector("#team h4").textContent = t.teamTitle;
  document.querySelector("#team h2").textContent = t.teamSubtitle;
  document.querySelector("#team p").textContent = t.teamDesc;

  const basicItems = {
    "en": [`🔹 Access to 1 fitness path (no switching)`, `🔹 Basic non-customizable avatar`, `🔹 Weekly general workout plan`, `🔹 Generic nutrition tips`, `🔹 Random weekly challenges`, `🔹 Ads included`],
    "es": [`🔹 Acceso a 1 camino fitness (sin cambios)`, `🔹 Avatar básico no personalizable`, `🔹 Plan semanal de entrenamiento general`, `🔹 Consejos de nutrición genéricos`, `🔹 Retos semanales aleatorios`, `🔹 Incluye anuncios`]
  };
  const premiumItems = {
    "en": [`🌟 Access to all fitness paths + switch anytime`, `🌟 Fully customizable avatar that evolves`, `🌟 100% personalized weekly workout plans`, `🌟 Custom meal plans based on preferences/goals`, `🌟 Extreme weekly challenge with fun tasks`, `🌟 Advanced progress tracking and insights`, `🌟 No ads, only gains 💪`, `🌟 Exclusive content: video tutorials, recipes, tips`],
    "es": [`🌟 Acceso a todos los caminos + puedes cambiar cuando quieras`, `🌟 Avatar totalmente personalizable que evoluciona`, `🌟 Planes de entrenamiento semanales 100% personalizados`, `🌟 Planes de comida personalizados según tus objetivos`, `🌟 Reto semanal extremo con tareas divertidas`, `🌟 Seguimiento avanzado del progreso y estadísticas`, `🌟 Sin anuncios, solo progreso 💪`, `🌟 Contenido exclusivo: tutoriales en video, recetas, tips`]
  };

  const basicList = document.querySelectorAll(".plan-card ul")[0];
  const premiumList = document.querySelectorAll(".plan-card ul")[1];
  basicList.innerHTML = basicItems[lang].map(item => `<li>${item}</li>`).join('');
  premiumList.innerHTML = premiumItems[lang].map(item => `<li>${item}</li>`).join('');
}

window.addEventListener('DOMContentLoaded', () => {
  translate(currentLang);
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.textContent = currentLang === "en" ? "ES" : "EN";
  }
});

let lastScrollTop = 0;
const navbar = document.querySelector("header");

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    // Scroll hacia abajo -> ocultar navbar
    navbar.style.top = "-100px";
  } else {
    // Scroll hacia arriba -> mostrar navbar
    navbar.style.top = "0";
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
});


// Menú hamburguesa para móviles
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("open");
});

// Sincronizar botón de idioma en mobile
document.getElementById("lang-toggle-mobile").addEventListener("click", () => {
  document.getElementById("lang-toggle").click();
});
