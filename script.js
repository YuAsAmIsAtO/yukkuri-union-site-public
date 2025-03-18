// 動画タブ切り替え
function switchTab(tab) {
    document.getElementById("new-videos").classList.remove("active");
    document.getElementById("recommended-videos").classList.remove("active");

    if (tab === "new") {
        document.getElementById("new-videos").classList.add("active");
    } else {
        document.getElementById("recommended-videos").classList.add("active");
    }

    // タブの見た目を変更
    document.querySelectorAll(".tab-button").forEach(button => button.classList.remove("active"));
    document.querySelector(`.tab-button[onclick="switchTab('${tab}')"]`).classList.add("active");
}
