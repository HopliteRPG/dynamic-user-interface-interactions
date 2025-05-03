export { allTogether };

// let navbarDom = document.querySelector(".navbar");

function getEachNavbarItemContainer() {
  let navbarItemContainerCollection = document.querySelectorAll(
    ".navbar-item-container",
  );
  return navbarItemContainerCollection;
}

function getNavbarItemContainerAndSubItemContainer(navbarItemContainer) {
  let navbarItemContainerVar = navbarItemContainer;
  let navSubItemContainer = navbarItemContainerVar.querySelector(
    ".navbar-sub-item-container",
  );

  setNavbarBtnFunctionality(navbarItemContainerVar, navSubItemContainer);
}

function hideSubTextOnStartUp(navbarItemContainer) {
  let navbarItemContainerVar = navbarItemContainer;
  let navSubItemContainer = navbarItemContainerVar.querySelector(
    ".navbar-sub-item-container",
  );
  navSubItemContainer.classList.add("hide-navbar-item-container");
}

function setLinks(element) {
  function linkNeeded(link) {
    console.log(link);
  }
  const buttons = element.querySelectorAll("button");
  console.log(buttons);
  buttons.forEach((button) => {
    if (button.classList.contains("ice-cream-sand-btn")) {
      button.addEventListener("click", () => {
        linkNeeded("ice cream sandwich");
      });
    }
  });
}

function setNavbarBtnFunctionality(navbarItemContainer, subItemText) {
  setLinks(subItemText);

  navbarItemContainer.addEventListener("mouseover", () => {
    subItemText.classList.remove("hide-navbar-item-container");
    subItemText.classList.add("show-navbar-item-container");
    console.log(subItemText);
  });
  navbarItemContainer.addEventListener("mouseout", () => {
    subItemText.classList.remove("show-navbar-item-container");
    subItemText.classList.add("hide-navbar-item-container");
    console.log(subItemText);
  });
}

function allTogether() {
  let listTest = getEachNavbarItemContainer();
  listTest.forEach((element) => {
    getNavbarItemContainerAndSubItemContainer(element);
    hideSubTextOnStartUp(element);
  });
}
