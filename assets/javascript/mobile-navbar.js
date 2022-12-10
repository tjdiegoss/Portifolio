class MobileNavbar {
  constructor(mobileMenu, listaItens, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.listaItens = document.querySelector(listaItens);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.listaItens.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }

}
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".lista-itens",
  ".lista-itens li",
);
mobileNavbar.init();
