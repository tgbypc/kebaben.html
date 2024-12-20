// Home  page
document.querySelector(".navbar-toggler").addEventListener("click", () => {
  document.querySelector(".navbar-collapse").classList.toggle("showNav");
});

// transition stopper
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-trans-stop");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-trans-stop");
  }, 400);
});

// text change
const icons = ["utensils", "bell", "burn"];
const subtext = ["alltid full rulle", "smakfullt og raskt", "ferske råvarer"];
const largeText = [
  "ferskt, varmt og uforglemmelig!",
  "din mat, servert raskere enn du tror!",
  "bestill, hent, nyt-raskere enn du tror!",
];
let count = 1;

function textChange() {
  const mainDiv = document.querySelector(".hero-content-change");

  setInterval(() => {
    mainDiv.innerHTML = `
            <div>
                <span>
                    <i class = "fas fa-${icons[count]}"></i>
                </span>
                <h3>
                    <div class = "line"></div>
                    <span>${subtext[count]}</span>
                    <div class = "line"></div>
                </h3>
                <h1 class = "hero-lg-text">
                    ${largeText[count]}
                </h1>
            </div>
        `;
    count++;
    if (count > 2) count = 0;
  }, 4000);
}
textChange();

// home page end

// menu

function openPage(menuType) {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");

  // Modal içeriğini temizle
  modalBody.innerHTML = "";

  // Menü türüne göre içerik ekle
  let content = "";
  switch (menuType) {
    case "kebab":
      content = `
        <h2>Kebab</h2>
        <ul>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Rullekebab</strong>
              <small>(Salat, dressing)</small>
            </div>
            <div class="price">
              <span>139 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>147 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Kebab I Pita</strong>
              <small>(Salat, dressing)</small>
            </div>
            <div class="price">
              <span>135 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>143 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Kebabtallerken</strong>
              <small>(Pommes frites, salat, dressing)</small>
            </div>
            <div class="price">
              <span>159 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>167 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Rullekebab Kylling</strong>
              <small>(Salat, dressing)</small>
            </div>
            <div class="price">
              <span>139 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>147 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Kebab I Pita Kylling</strong>
              <small>(Salat, dressing)</small>
            </div>
            <div class="price">
              <span>135 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>143 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Kebabtallerken Kylling</strong>
              <small>(Pommes frites, salat, dressing)</small>
            </div>
            <div class="price">
              <span>159 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>167 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Løvstektallerken</strong>
              <small>(Pommes frites, salat, dressing)</small>
            </div>
            <div class="price">
              <span>148 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>156 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Løvstek I Pita</strong>
              <small>(Salat, dressing)</small>
            </div>
            <div class="price">
              <span>128 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>136 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
        </ul>
      `;
      break;
    case "hamburger":
      content = `
              <h2>Hamburger</h2>
              <ul>
                  <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Hamburger 160 G</strong>
              <small>(Salat, dressing)</small>
            </div>
            <div class="price">
              <span>110 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>118 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
                  <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Hamburger 130 G</strong>
              <small>(Salat, dressing)</small>
            </div>
            <div class="price">
              <span>100 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>108 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Kyllingburger</strong>
              <small>(Salat, dressing)</small>
            </div>
            <div class="price">
              <span>115 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>123 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Hamburgertallerken 160 G</strong>
              <small>(Pommes frites, salat, dressing)</small>
            </div>
            <div class="price">
              <span>135 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>143 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Hamburgertallerken 130 G</strong>
              <small>(Pommes frites, salat, dressing)</small>
            </div>
            <div class="price">
              <span>125 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>133 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Baconburgertallerken 160 G</strong>
              <small>(Pommes frites, salat, dressing)</small>
            </div>
            <div class="price">
              <span>140 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>148 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Baconburgertallerken 130 G</strong>
              <small>(Pommes frites, salat, dressing)</small>
            </div>
            <div class="price">
              <span>130 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>138 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Cheeseburgertallerken 160 G</strong>
              <small>(Pommes frites, salat, dressing)</small>
            </div>
            <div class="price">
              <span>140 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>148 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Cheeseburgertallerken 130 G</strong>
              <small>(Pommes frites, salat, dressing)</small>
            </div>
            <div class="price">
              <span>130 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>138 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Kyllingburgertallerken</strong>
              <small>(Pommes frites, salat, dressing)</small>
            </div>
            <div class="price">
              <span>140 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>148 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
              </ul>
          `;
      break;
      case "vegan":
      content = `
              <h2>Vegetar</h2>
              <ul>
                  <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Falafel I Rull</strong>
              <small>(Salat, dressing)</small>
            </div>
            <div class="price">
              <span>99 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>107 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
                  <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Falafel I Pita</strong>
              <small>(Salat, dressing)</small>
            </div>
            <div class="price">
              <span>89 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>97 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Falafel På Tallerken</strong>
              <small>(Pommes frites, salat, dressing)</small>
            </div>
            <div class="price">
              <span>109 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>107 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Pommes Frites Liten</strong>
            </div>
            <div class="price">
              <span>40 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>48 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Pommes Frites Stor</strong>
            </div>
            <div class="price">
              <span>60 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>68 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
              </ul>
          `;
      break;
      case "tilbehør":
      content = `
              <h2>Tilbehør</h2>
              <ul>
                  <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Tillegg For Ost</strong>
            </div>
            <div class="price">
              <span>15 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>18 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
                  <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Tillegg For Meny Med Drikke</strong>
            </div>
            <div class="price">
              <span>36 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>39 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Drikker</strong>
            </div>
            <div class="price">
              <span>36 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>39 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Ekstra Kjøtt</strong>
            </div>
            <div class="price">
              <span>50 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>50 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Ekstra Grønnsaker Og Dressing</strong>
            </div>
            <div class="price">
              <span>8 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>8 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Ekstra Pita Brød</strong>
            </div>
            <div class="price">
              <span>15 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>18 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Dressingbeger</strong>
            </div>
            <div class="price">
              <span>20 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>20 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Kylling Nuggets 6 STK</strong>
            </div>
            <div class="price">
              <span>60 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>68 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          <li>
            <span class="icon">🍴</span>
            <div class="content">
              <strong>Kylling Nuggets 12 STK</strong>
            </div>
            <div class="price">
              <span>110 NOK <i class="fas fa-shopping-bag"></i></span>
              <span>118 NOK <i class="fas fa-utensils"></i></span>
            </div>
          </li>
          
              </ul>
          `;
      break;
    default:
      content = `<p>Ingen informasjon tilgjengelig.</p>`;
  }

  modalBody.innerHTML = content;

  // Modal'ı göster
  modal.style.display = "flex";
}

function closePage() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Close modal when clicked outside
document.getElementById("modal").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    closePage();
  }
});

// Reviews  slider

$(document).ready(function(){
  $('.screen-wrapper').slick({
    slidesToShow: 1,
    sildesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  })
});