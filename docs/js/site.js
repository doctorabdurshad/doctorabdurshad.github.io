function navScroll(section) {
  var elem = document.getElementById(section);
  window.scroll(0, elem.offsetTop - 40);
}

const card = document.getElementById("heroCard");
const front = document.getElementById("cardFront");
const office = document.getElementById("cardOffice");
const insurance = document.getElementById("cardInsurance");

function isDesktop() {
  return window.innerWidth > 1020;
}

function handleFlip(type) {
  if (!isDesktop()) {
    if (type === "office") navScroll('office');
    if (type === "insurance") navScroll('insurance');
    return;
  }

  // reset active states
  office.classList.remove("active");
  insurance.classList.remove("active");

  if (type === "office") office.classList.add("active");
  if (type === "insurance") insurance.classList.add("active");

  // 👇 FORCE correct height AFTER layout settles
  requestAnimationFrame(() => {
    const height = front.getBoundingClientRect().height;
    card.style.height = height + "px";
    card.classList.add("flipped");
  });
}

function flipBack() {
  card.classList.remove("flipped");
  card.style.height = "auto";
}
