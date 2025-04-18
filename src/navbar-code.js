export { setNavbarBtnFunctionality };

let navbarBtn = document.querySelectorAll(".navbar-item-button");

function setNavbarBtnFunctionality() {
  navbarBtn.forEach((button) => {
    button.addEventListener("mouseover", () => {
      console.log("hover over");
    });
  });
}
