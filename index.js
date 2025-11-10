const carousalImages = [
  "assest/carousel1.webp",
  "assest/carousel2.jpg",
  "assest/carousel3.webp",
  "assest/carousel4.jpg",
];

let currentSlide = 0;
let allMovies = [];

const carousalContainer = document.getElementById("carousal-container");
const moviesContainer = document.getElementById("movies-container");

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
    return
  }

  allMovies.forEach(movie => {
    const card = document.createElement('div')
    card.className= "movie-card"
    card.innerHTML=`
    
    

    `
  })

};

setInterval(autoNext, 2000);
loadMovies();
initCarousal();
