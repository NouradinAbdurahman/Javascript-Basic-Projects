const openSideBar = document.querySelector(".sidebar-toggle");
const closeSideBar = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");

openSideBar.addEventListener("click", () => {
  // if (sideBar.contains("show-sidebar")) {
  //   sideBar.classList.add("show-sidebar");
  // } else {
  //   sideBar.classList.remove("show-sidebar");
  // }
  sideBar.classList.toggle("show-sidebar");
});

closeSideBar.addEventListener("click", () => {
  sideBar.classList.remove("show-sidebar");
});
