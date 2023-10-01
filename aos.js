const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
        } else {
            entry.target.classList.remove("aos-animate");
        }
    });
});

const aosElements = document.querySelectorAll(".aos");
aosElements.forEach((element) => {
    observer.observe(element);
});
