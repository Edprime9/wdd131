const temples = [
    {
      templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
      //"2005, August, 7",
      dedicated:  2005,
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      //"1888, May, 21",
      dedicated: 1888,
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      //"2015, June, 7",
      dedicated: 2025,
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      //"2020, May, 2",
      dedicated: 2020,
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/800x500/yigo_guam_temple_3.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      //"1974, November, 19",
      dedicated: 1974,
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/800x500/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      //"1986, January, 10",
      dedicated: 1986,
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/800x500/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Albuquerque New Mexico",
      location: "New Mexico City, United State",
      //"2000, March, 5",
      dedicated: 2000,
      area: 34245,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/800x500/albuquerque-temple-lds-137883-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana",
      location: "Accra, Ghana",
        //"2004, January, 11",
        dedicated: 2004,
        area: 17500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
    {
        templeName: "Brisbane Australia",
      location: "Brisbane, Australia",
        //"2003, June, 15",
        dedicated: 2003,
        area: 10700,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brisbane-australia/800x500/brisbane-australia-temple-lds-745088-wallpaper.jpg"
    },
    {
        templeName: "Meridian Idaho",
      location: "Meridian, Idaho",
        //"2017, November, 19",
        dedicated: 2017,
        area: 67331,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/meridian-idaho/800x500/meridian-idaho-1962615.jpg"
      },
];
  


const container = document.getElementById("temple-container");

function displayTemples(filter) {
    container.innerHTML = "";

    let filteredTemples = temples;
    if (filter === "old") {
        filteredTemples = temples.filter(t => t.dedicated < 1900);
    } else if (filter === "new") {
        filteredTemples = temples.filter(t => t.dedicated > 2000);
    } else if (filter === "large") {
        filteredTemples = temples.filter(t => t.area > 90000);
    } else if (filter === "small") {
        filteredTemples = temples.filter(t => t.area < 10000);
    }

    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");
        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
        `;
        container.appendChild(card);
    });
}

// Event Listeners
document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const filter = event.target.dataset.filter;
        displayTemples(filter);
    });
});

// Initial Load
displayTemples("all");

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
