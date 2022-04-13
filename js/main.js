// variable section

const badgeEl = document.querySelector("header .badges");
const fadeEls = document.querySelectorAll(".visual .fade-in");
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
const spyEls = document.querySelectorAll("section.scroll-spy");
const toTopEl = document.querySelector("#to-top");


// FUNCTION SECTION

function loadPage() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소 , 지속시간 , 옵션);
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : "none"
    });
    // 버튼 보이기
    gsap.to("#to-top", .2, {
      x: 0
    });
    // 배지 보이기
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display : "block"
    });
    // 버튼 숨기기!
    gsap.to("#to-top", .2, {
      x: 100
    });
  }  
}

function fadeIn(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
}

function hidePromotion() {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
}

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to (요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}

floatingObject('.floating');

function scroll (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,  // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 
    })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller);
}

function toTopScroll() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
}


// EVENT INIT

window.addEventListener("scroll", _.throttle(loadPage, 300));
fadeEls.forEach(fadeIn);
promotionToggleBtn.addEventListener("click", hidePromotion);
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", .5, 15);
floatingObject(".floating3", 1.5, 20);
spyEls.forEach(scroll);
toTopEl.addEventListener("click", toTopScroll);


// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
    clickable: true // 사용자 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next"
  }
});

new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next"
  }
});