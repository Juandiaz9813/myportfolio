const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙 Dark Mode";
    } else {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️ Light Mode";
    }
});

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggleBtn.textContent = "🌙 Dark Mode";
} else {
    toggleBtn.textContent = "☀️ Light Mode";
}