document.querySelectorAll(".membership-toggle").forEach(item => {
    item.addEventListener("click", function () {
        const target = document.querySelector(this.dataset.target);
        target.classList.toggle("d-none");
    });
});