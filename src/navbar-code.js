export { allTogether };

// let navbarDom = document.querySelector(".navbar");

function getEachNavbarItemContainer() {
  let navbarItemContainerCollection = document.querySelectorAll(
    ".navbar-item-container",
  );
  return navbarItemContainerCollection;
}

function getNavbarSubItemContainerAndButton(navbarItemContainer) {
  let navSubItemContainer = navbarItemContainer.querySelector(
    ".navbar-sub-item-container",
  );
  let navButton = navbarItemContainer.querySelector(".navbar-item-button");

  console.log(navSubItemContainer);
  console.log(navButton);
  setNavbarBtnFunctionality(navButton, navSubItemContainer);
}

function setNavbarBtnFunctionality(button, subItemText) {
  button.addEventListener("mouseover", () => {
    console.log(subItemText);
  });
}

function allTogether() {
  let listTest = getEachNavbarItemContainer();
  listTest.forEach((element) => {
    getNavbarSubItemContainerAndButton(element);
  });
}
