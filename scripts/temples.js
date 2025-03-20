// Select elements
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

// Toggle mobile menu
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
    menuButton.classList.toggle("show");
});

// Display current year in footer
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Display last modified date
document.querySelector("#lastModified").textContent = "Last Modified: " + document.lastModified;
