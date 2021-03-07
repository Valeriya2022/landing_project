let images = [{
    url: "images/image_2.1.png",
    city: "Rostov-on-Don LCD admiral",
    area: 81,
    repair_time: 3.5,

  }, {
    url: "images/image_2.2.png",
    city: "Sochi Thieves",
    area: 105,
    repair_time: 4,
  }, {
    url: "images/image_2.3.png",
    city: "Rostov-on-Don Patriotic",
    area: 93,
    repair_time: 3,
  }
]

function initSlider(){
    let sliderImages = document.querySelector(".js-slider__images");
    let sliderArrows = document.querySelector(".js-slider__arrows");
    let sliderDots = document.querySelector(".js-slider__dots");

    initImages();
    function initImages() {
        images.forEach((image, index) => {
          let imageDiv = `<img src="images/image_2.1.png" class="desktop-image active data-index="${index}">`;
          sliderImages.innerHTML += imageDiv;
        });
      }

      
}

document.addEventListener("projects", function() {
    initSlider(sliderOptions);
  });