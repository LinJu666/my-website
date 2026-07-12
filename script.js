const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        console.log(`正在前往：${link.textContent}`);
    });
});