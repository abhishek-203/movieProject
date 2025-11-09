const carousalImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtDaTtvC7sNNai0NeninDNfR21zIFgtObdw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_crIjek4rPOuuO0n42wdB4uNUyiZH9N0vg&s",
  "https://i.ytimg.com/vi/hTCfn_Bq-B0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBMrm78wxh3Fn-a7OhGJCI8B7jDXA",
];

let currentSlide = 0;
let allMovies = []

const carousalContainer = document.getElementById('carousal-container')
const moviesContainer = document.getElementById('movies-container')

const intiCarausal = () => {
    corausalContainer.innerHTML=""
    carousalImages.forEach((imageUrl, index)=> {
        const slide = document.createElement('div')
        slide.className='carousal-slide'
        if(index === 0){
            slide.classList.add('active')

        }
        const img=document.createElement('img')
        img.className= "carousal-image"
        img.src= imageUrl;
        img.alt= `Slide ${index+ 1}`
        slide.appendChild(img)
        carousalContainer.appendChild(slide)
    })
}