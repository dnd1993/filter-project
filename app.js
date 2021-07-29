(function () {
  const filterBtns = document.querySelectorAll(
    ".section-our-store__categories li"
  );
  const items = document.querySelectorAll(".section-our-store__item-card");
  const input = document.querySelector(".section-our-store__input");
  const btnToggler = document.querySelector('.nav__toggler')
  const navMenu = document.querySelector('.nav__collapse');

  btnToggler.addEventListener('click', ()=>navMenu.classList.toggle('show'))

  const filter = (e) => {
    input.value = "";
    const filter = e.target.dataset.filter;
    items.forEach((card) => {
      filter === "all"
        ? (card.style.display = "block")
        : card.dataset.item === filter
        ? (card.style.display = "block")
        : (card.style.display = "none");
    });
  };

  filterBtns.forEach((btn) => btn.addEventListener("click", filter));

  const search = (e) => {
    items.forEach((card) => {
      card.textContent.trim().toLowerCase().startsWith(input.value)
        ? (card.style.display = "block")
        : (card.style.display = "none");
    });
  };

  input.addEventListener("keyup", search);

  const addToCart = (e) => {
    console.dir(e.target.parentElement);
  };

  items.forEach((item) => item.addEventListener("click", addToCart));
})();
