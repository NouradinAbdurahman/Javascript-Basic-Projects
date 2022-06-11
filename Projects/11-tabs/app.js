const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articals = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    console.log(id);
    if(id) {
        // remove active from other btns
        btns.forEach((btn) => {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        // hide ther articals
        articals.forEach((artical) => {
            artical.classList.remove("active")
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});