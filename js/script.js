let images = [{
    url: "images/image_2.1.png",
    city: "Rostov-on-Don LCD admiral",
    city_header: "Rostov-on-Don, Admiral",
    area: 81,
    repair_time: 3.5,

  }, {
    url: "images/image_2.2.png",
    city: "Sochi Thieves",
    city_header: "Sochi Thieves",
    area: 105,
    repair_time: 4,
  }, {
    url: "images/image_2.3.png",
    city: "Rostov-on-Don Patriotic",
    city_header: "Rostov-on-Don Patriotic",
    area: 93,
    repair_time: 3,
  }
]

function initSlider(){
    let sliderImages = document.querySelector(".js-slider__images");
    let sliderDots = document.querySelector(".js-slider__dots");
    let index_active = 0;

    initImages();
    InitInformation();
    initDots();
    initArrows();
    initHeader();

    function initImages() {
        images.forEach((image, index) => {
        let imageDiv = `<img src="${images[index].url}" class="desktop-image n${index} ${index === index_active? "active" : ""} data-index="${index}">`;
        sliderImages.innerHTML += imageDiv;
        });
    }

    function initHeader(){
        document.querySelectorAll(".project-nav__item")[index_active].classList.add('selected');
        document.querySelectorAll('.js-anchor').forEach((item, index) => {
            item.onclick = function(){
                moveSlider(index);
            }
            })
    }

    function initArrows() {
        document.querySelectorAll(".js-slider__arrow").forEach(arrow => {
          arrow.addEventListener("click", function() {
            let nextNumber;
            if (arrow.classList.contains("left")) {
              nextNumber = index_active === 0? images.length - 1 : index_active - 1;
            } else {
              nextNumber = index_active === images.length - 1? 0 : index_active + 1;
            }
            moveSlider(nextNumber);
          });
        });
      }

    function InitInformation(){
        let infoCity = document.querySelector(".js-info-city");
        let infoArea = document.querySelector(".js-info-area");
        let infoRepairTime = document.querySelector(".js-info-repair-time");
        infoCity.innerHTML = images[index_active].city;
        infoArea.innerHTML = images[index_active].area + " m2";
        infoRepairTime.innerHTML = images[index_active].repair_time + " months";
        
    }

    function initDots() {
        images.forEach((image, index) => {
          let dot = `<div class="completed-projects-nav-items n${index} ${index === index_active ? "active" : ""}"></div>`;
          sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".completed-projects-nav-items").forEach((dot, index) => {
          dot.addEventListener("click", function() {
            moveSlider(index);
          })
        })
      }

    function moveSlider(index){
        index_active = index;
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + index).classList.add("active");
        InitInformation();
        document.querySelector(".selected").classList.remove('selected');
        
        document.querySelectorAll(".project-nav__item")[index].classList.add('selected');
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + index).classList.add("active");
    }
      
}

document.addEventListener("DOMContentLoaded", function() {
    initSlider();
  });