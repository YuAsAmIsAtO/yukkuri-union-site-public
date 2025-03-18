function switchTab(tab) {
    document.querySelectorAll(".video-section").forEach(section => {
        section.classList.remove("active");
    });
    document.querySelectorAll(".tab-button").forEach(button => {
        button.classList.remove("active");
    });

    if (tab === "new") {
        document.getElementById("new-videos").classList.add("active");
        document.querySelector(".tab-button:nth-child(1)").classList.add("active");
    } else {
        document.getElementById("recommended-videos").classList.add("active");
        document.querySelector(".tab-button:nth-child(2)").classList.add("active");
    }
}
