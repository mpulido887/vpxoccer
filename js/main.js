// Seleccionamos los elementos
    const menuToggle2 = document.getElementById('menuToggle');
    const mobileNavPanel = document.getElementById('mobileNavPanel');

    // Al hacer clic en el icono hamburguesa
    menuToggle2.addEventListener('click', () => {
    // Alterna la clase 'open' en el contenedor del icono (para formar la X)
    menuToggle2.classList.toggle('open');
    // Alterna el panel móvil
    mobileNavPanel.classList.toggle('open');
    });

// Obtenemos todos los slides y definimos el slide actual
    const slides = document.querySelectorAll('.team-slide');
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
      });
    }
  
    // Asignamos eventos a las flechas generales (no a cada slide individual)
    const prevBtn = document.getElementById('prevTeam');
    const nextBtn = document.getElementById('nextTeam');
  
    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
      showSlide(currentSlide);
    });
  
    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  
    // Mostrar el primer slide al iniciar
    showSlide(currentSlide);

// Variables para el carrusel
    const galleryTrack = document.querySelector('.gallery-track');
    const approachImages = document.querySelectorAll('.gallery-track img');
    const visibleCount = window.innerWidth < 768 ? 1 : 3;

    let currentIndex = 0;
    const totalImages = approachImages.length;

    // Función para actualizar el desplazamiento
    function updateGallery() {
    // Cada imagen ocupa 33.33% -> desplazamiento en porcentaje
    const shiftPercent = (100 / visibleCount) * currentIndex;
    galleryTrack.style.transform = `translateX(-${shiftPercent}%)`;
    }

    // Eventos para las flechas
    document.querySelector('.approach-prev').addEventListener('click', () => {
    // Si se puede retroceder
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        // O repetir al final
        currentIndex = totalImages - visibleCount;
    }
    updateGallery();
    });

    document.querySelector('.approach-next').addEventListener('click', () => {
    if (currentIndex < totalImages - visibleCount) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateGallery();
    });


    // Función para actualizar si se cambia el tamaño de la ventana:
    window.addEventListener('resize', () => {
    visibleCount = window.innerWidth < 768 ? 1 : 3;
    updateGallery();
    });

// Variables globales y selección de elementos
let hits = 0;
const ballGroup = document.querySelector('.ball-group');
const ball = document.querySelector('.ball');
const crack = document.querySelector('.crack');
const hitText = document.querySelector('.hitme-text');
const container = document.querySelector('.ball-container');

/* 
Función para mover el grupo (pelota + texto) ligeramente dentro del contenedor.
Usamos un rango reducido: entre -5 y +5 píxeles.
*/
function moveGroupSlightly() {
  // Posición actual del grupo dentro del contenedor
  const currentLeft = parseInt(ballGroup.style.left) || (container.clientWidth / 2 - ballGroup.offsetWidth / 2);
  const currentTop = parseInt(ballGroup.style.top) || (container.clientHeight / 2 - ballGroup.offsetHeight / 2);
  // Desplazamiento aleatorio reducido: entre -5 y +5 píxeles
  const deltaX = Math.floor(Math.random() * 11) - 5;
  const deltaY = Math.floor(Math.random() * 11) - 5;
  // Calcular nuevas posiciones asegurando que el grupo permanezca dentro del contenedor
  const newLeft = Math.max(0, Math.min(container.clientWidth - ballGroup.offsetWidth, currentLeft + deltaX));
  const newTop = Math.max(0, Math.min(container.clientHeight - ballGroup.offsetHeight, currentTop + deltaY));
  ballGroup.style.left = newLeft + "px";
  ballGroup.style.top = newTop + "px";
  ballGroup.classList.add('bounce');
  setTimeout(() => {
    ballGroup.classList.remove('bounce');
  }, 800);
}

ballGroup.addEventListener('click', () => {
  hits++;
  if (hits === 1 || hits === 2) {
    // Primer y segundo golpe: mover el grupo ligeramente dentro del contenedor
    moveGroupSlightly();
  } else if (hits === 3) {
    // Tercer golpe: aplicar la animación final al grupo para que "salte" hacia la pantalla
    ballGroup.classList.add('final-hit');
    setTimeout(() => {
      // Mostrar el crack que abarca toda la pantalla
      crack.style.display = 'block';
      crack.style.opacity = 1;
      // Ocultar el grupo (pelota y "Hit me!") después de la animación
      ballGroup.style.display = 'none';
    }, 800);
  }
});

// Animación para el texto "Hit me!" al hacer clic (adicional, si se quiere resaltar)
hitText.addEventListener('click', () => {
  hitText.classList.add('jump');
  setTimeout(() => { hitText.classList.remove('jump'); }, 100);
});

// Función ejemplo para abrir modal
function openModal() {
  alert("Modal opened!");
}

// MENÚ HAMBURGUESA: Mostrar/Ocultar menú en móviles
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');
    
    menuToggle.addEventListener('click', () => {
      // Si está oculto, se muestra; si está visible, se oculta.
      if (navList.style.display === "flex") {
        navList.style.display = "none";
      } else {
        navList.style.display = "flex";
      }
    });
    
    // Opcional: ocultar menú al dar clic en un link (en móviles)
    const navLinks = navList.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if(window.innerWidth <= 768) {
          navList.style.display = "none";
        }
      });
    });
    
    // MODAL
    const openModalBtn = document.getElementById("openModalBtn");
    const modalOverlay = document.getElementById("modalOverlay");
    const modalClose = document.getElementById("modalClose");
    
    function openModal() {
      modalOverlay.style.display = "flex";
    }
    
    openModalBtn.addEventListener("click", openModal);
    modalClose.addEventListener("click", () => {
      modalOverlay.style.display = "none";
    });
    
    // Cerrar modal al hacer clic fuera de él
    modalOverlay.addEventListener("click", function(e) {
      if (e.target === this) { modalOverlay.style.display = "none"; }
    });
    
    // Prevent form submission and reset form (simulación)
    document.getElementById("signupForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Request sent!");
      modalOverlay.style.display = "none";
      this.reset();
    });