const carousalImages = [
  "assest/carousel1.webp",
  "assest/carousel2.jpg",
  "assest/carousel3.webp",
  "assest/carousel4.jpg",
];

let currentSlide = 0;
let allMovies = [];

const carousalContainer = document.getElementById("carousal-container");
const moviesContainer = document.getElementById("movie-grid");

const initCarousal = () => {
  carousalContainer.innerHTML = "";
  carousalImages.forEach((imageUrl, index) => {
    const slide = document.createElement("div");
    slide.className = "carousal-slide";
    if (index === 0) {
      slide.classList.add("active");
    }
    const img = document.createElement("img");
    img.className = "carousal-image";
    img.src = imageUrl;
    img.alt = `Slide ${index + 1}`;
    slide.appendChild(img);
    carousalContainer.appendChild(slide);
  });
};

const updateCarousal = () => {
  const slides = document.querySelectorAll(".carousal-slide");
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
};

const autoNext = () => {
  currentSlide = (currentSlide + 1) % carousalImages.length;
  updateCarousal();
};

const changeSlide = (direction) => {
  currentSlide =
    (currentSlide + direction + carousalImages.length) % carousalImages.length;
};

const loadMovies = async () => {
  try {
    const response = await fetch("http://localhost:3000/movies");
    if (!response) {
      Error("Failed to fetch movies ! ");
    }
    allMovies = await response.json();
    console.log("data", allMovies);
    displayMovies();
  } catch (err) {
    console.log(err.message);
  }
};

const displayMovies = () => {
  if (!moviesContainer) {
    console.log("Movies container is not found !");
    return;
  }
  if (!allMovies || allMovies.length === 0) {
    moviesContainer.innerHTML = `<p style = 'color: white;text-align: center'> No Movies available </p>`;
    return;
  }

  allMovies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
    
    <div class="movie-poster">
    <img src=${movie.poster} alt=${movie.title} class="movie-poster-img">
    </div>

    <div class= "movie-info">
      <div class="movie-title">${movie.title}</div>
      <div class="movie-year">${movie.year}</div>
      <div class="movie-genre">${movie.Category}</div>
      <div class="movie-rating">⭐${movie.rating}</div>

      <div class="movie-buttons">
          <button class="btn btn-favourite">❤️</button>
          <button class="btn btn-cart">🛒</button>
      </div>
    </div> 

    `;

    card.addEventListener("click", () => {
      window.location.href = "single.html";
    });

    moviesContainer.appendChild(card);
  });
};

setInterval(autoNext, 2000);
loadMovies();
initCarousal();

// Add event listeners for carousel buttons
document.querySelector('.carousal-btn.prev').addEventListener('click', () => {
  changeSlide(-1);
  updateCarousal();
});

document.querySelector('.carousal-btn.next').addEventListener('click', () => {
  changeSlide(1);
  updateCarousal();
});
