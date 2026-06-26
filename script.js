const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const updatedAt = document.querySelector("[data-updated-at]");
const year = document.querySelector("[data-year]");

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

navToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

const formatter = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

updatedAt.textContent = formatter.format(new Date());
year.textContent = new Date().getFullYear();
