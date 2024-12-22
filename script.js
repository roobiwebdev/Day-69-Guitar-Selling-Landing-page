window.onload = () => {
  document.querySelector(".loading-wrapper").classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
};

const navMenu = document.querySelector("#nav-menu");
const navBar = document.querySelector("#nav-bar");
const navLinks = document.querySelectorAll(".nav-link");

// const Video = document.querySelector("#video")
navMenu.addEventListener("click", () => {
  navBar.classList.toggle("left-[0]");
  navMenu.classList.toggle("ri-close-large-line");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.toggle("left-[0]");
    navMenu.classList.toggle("ri-close-large-line");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  const controller = document.getElementById("controller");
  const controlVideoIcon = document.getElementById("controlVideoIcon");
  const videoThumb = document.getElementById("videoThumb");
  const originalPoster = video.getAttribute("poster");
  const togglePlayPause = function () {
    if (video.paused) {
      video.play();
      video.volume = 0.25;
    } else {
      video.pause();
    }
  };

  controller.addEventListener("click", function (event) {
    event.stopPropagation();
    togglePlayPause();
  });
  videoThumb.addEventListener("click", togglePlayPause);
  video.addEventListener("play", function () {
    controlVideoIcon.classList.remove("ri-play-fill");
    controlVideoIcon.classList.add("ri-pause-fill");
  });
  video.addEventListener("pause", function () {
    controlVideoIcon.classList.remove("ri-pause-fill");
    controlVideoIcon.classList.add("ri-play-fill");
    video.setAttribute("poster", originalPoster);
  });
  videoThumb.addEventListener("mouseover", function () {
    controller.classList.remove("hidden");
  });
  videoThumb.addEventListener("mouseleave", function () {
    controller.classList.add("hidden");
  });
});

new Swiper(".swiper", {
  loop: true,
  speed: 700,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnIntraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,

  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    760: {
      slidesPerView: 2,
    },
    960: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

if (window.innerWidth >= 760) {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 300,
    reset: true,
  });

  sr.reveal(".nav_data", { delay: 700 });
  sr.reveal(".bg-img", { scale: 2 });
  sr.reveal(".scale_data", { scale: 0.5 });

  sr.reveal(".left_data", { distance: "300px", origin: "left", delay: 900 });
  sr.reveal(".right_data", { distance: "300px", origin: "right", delay: 900 });
  sr.reveal(".left_sec", { distance: "300px", origin: "left" });
  sr.reveal(".right_sec", { distance: "300px", origin: "right" });
  sr.reveal(".bottom_sec", { distance: "300px", origin: "bottom" });
}

if(window.innerWidth >=760){
  sr.reveal(".nav_data", { delay: 1000 });

}
