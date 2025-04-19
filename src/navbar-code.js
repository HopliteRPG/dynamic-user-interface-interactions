export { getEachNavbarItemContainer };

// let navbarDom = document.querySelector(".navbar");

function getEachNavbarItemContainer() {
  let navbarItemContainerCollection = document.querySelectorAll(
    ".navbar-item-container",
  );
  navbarItemContainerCollection.forEach((navbarItemContainer) => {
    getNavbarSubItemContainerAndButton(navbarItemContainer);
  });
}

function getNavbarSubItemContainerAndButton(navbarItemContainer) {
  let navSubItemContainer = navbarItemContainer.querySelector(
    ".navbar-sub-item-container",
  );
  let navButton = navbarItemContainer.querySelector(".navbar-item-button");

  console.log(navSubItemContainer);
  console.log(navButton);
}

// function setNavbarBtnFunctionality() {
//   navbarBtn.forEach((button) => {
//     button.addEventListener("mouseover", () => {
//       console.log("hover over");
//     });
//   });
// }
