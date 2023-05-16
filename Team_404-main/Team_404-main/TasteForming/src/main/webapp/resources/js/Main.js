const searchBox = document.querySelector(".search-box"); // 검색어 입력란
const recentSearches = document.querySelectorAll(".recent-searches li");
const searchInput = document.querySelector(".search-box");

const search_button = document.getElementById("search_button");





const interval = 5000; // 5초마다 이미지 변경
let currentIndex = 0;

let bgOverlay;

function changeImage() {
  const backgroundImage = document.querySelector(".header_bg");
  const imageUrl = images[currentIndex].img_path;
  const resName = images[currentIndex].res_name;

  if (!bgOverlay) {
    // Only create the overlay if it doesn't exist yet
    bgOverlay = document.createElement("div");
    bgOverlay.style.position = "absolute";
    bgOverlay.style.top = 0;
    bgOverlay.style.left = 0;
    bgOverlay.style.width = "100%";
    bgOverlay.style.height = "100%";
    bgOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    backgroundImage.appendChild(bgOverlay);
  }

  backgroundImage.style.backgroundImage = `url(${imageUrl})`;
  backgroundImage.style.position = "relative";
  backgroundImage.style.overflow = "hidden";

  // 식당 이름 추가
  const resNameElement = document.querySelector(".res_name");
  resNameElement.innerHTML = `<img src="/resources/img/marker.png" width="12px" height="16px" class="marker"/><span>${resName}</span>`;

  currentIndex = (currentIndex + 10) % images.length;
}



changeImage();
setInterval(changeImage, interval);




searchInput.addEventListener("keyup", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  recentSearches.forEach((search) => {
    const text = search.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      search.style.display = "block";
    } else {
      search.style.display = "none";
    }
  });

  // 검색어 입력란이 비어있을 경우 모든 최근 검색어를 보여준다.
  if (searchTerm === "") {
    recentSearches.forEach((search) => {
      search.style.display = "block";
    });
  }
});

// 검색어 입력란에서 Enter 키를 눌렀을 경우 최근 검색어 목록에 추가한다.
searchBox.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    // Enter 키
    const query = e.target.value;
    addRecentSearch(query);
    e.target.value = ""; // 검색어 입력란 초기화
  }
});

// 최근 검색어 목록에 검색어를 추가한다.
function addRecentSearch(query) {
  const recentSearchItem = document.createElement("li");
  recentSearchItem.textContent = query;
  const firstSearchItem = recentSearches[0];
  recentSearches.insertBefore(recentSearchItem, firstSearchItem);

  // 최근 검색어 목록이 5개를 넘어가면 가장 오래된 검색어를 삭제한다.
  if (recentSearches.length > 5) {
    recentSearches[5].remove();
  }
}

// Swiper 객체 생성
const mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  loop: true,
  speed: 1000,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: -100,
});


function disableScroll() {
  // Get the current page scroll position
  // 현재 페이지 스크롤 위치 가져오기
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted, set this to the previous value
    // 스크롤을 시도하면 이전 값으로 설정
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}
