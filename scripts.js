document.addEventListener("DOMContentLoaded", function() {

    // Afficher la page d'accueil par défaut

    showPage("accueil");


    // Gérer les clics sur les onglets de navigation

    document.querySelectorAll("nav a").forEach(function(link) {

        link.addEventListener("click", function(event) {

            event.preventDefault();

            // Récupérer l'ID de la section à afficher

            var targetPageId = link.getAttribute("href").substring(1);

            showPage(targetPageId);

        });

    });

});


function showPage(pageId) {

    // Masquer toutes les sections

    document.querySelectorAll("main section").forEach(function(section) {

        section.style.display = "none";

    });


    // Afficher la section spécifiée

    document.getElementById(pageId).style.display = "block";

}

// Ajouter la gestion de favoris Vichy

//GAULOIS

var addToFavoritesBtn = document.querySelector("#page1 .addToFavoritesBtn-GAULOIS");


addToFavoritesBtn.addEventListener("click", function() {

    var presentationCard = document.querySelector("#page1 .presentation-card-GAULOIS");

    var cardContent = presentationCard.innerHTML;

    

    if (!isCardInFavorites(cardContent)) {

        addToFavorites(cardContent);

    } else {

        alert("Cette carte est déjà dans vos favoris !");

    }

});


function addToFavorites(content) {

    // Créer un nouvel élément pour les favoris

    var favoriteItem = document.createElement("div");

    favoriteItem.className = "favorite-item";

    favoriteItem.innerHTML = content;


    // Ajouter l'élément aux favoris (dans la section Favoris)

    var favoritesSection = document.getElementById("favoris");

    favoritesSection.appendChild(favoriteItem);

}




// PALM

var addToFavoritesBtn = document.querySelector("#page1 .addToFavoritesBtn-PALM");


addToFavoritesBtn.addEventListener("click", function() {

    var presentationCard = document.querySelector("#page1 .presentation-card-PALM");

    var cardContent = presentationCard.innerHTML;

    

    if (!isCardInFavorites(cardContent)) {

        addToFavorites(cardContent);

    } else {

        alert("Cette carte est déjà dans vos favoris !");

    }

});


function addToFavorites(content) {

    // Créer un nouvel élément pour les favoris

    var favoriteItem = document.createElement("div");

    favoriteItem.className = "favorite-item";

    favoriteItem.innerHTML = content;


    // Ajouter l'élément aux favoris (dans la section Favoris)

    var favoritesSection = document.getElementById("favoris");

    favoritesSection.appendChild(favoriteItem);

}



// SHOW

var addToFavoritesBtn = document.querySelector("#page1 .addToFavoritesBtn-SHOW");


addToFavoritesBtn.addEventListener("click", function() {

    var presentationCard = document.querySelector("#page1 .presentation-card-SHOW");

    var cardContent = presentationCard.innerHTML;

    

    if (!isCardInFavorites(cardContent)) {

        addToFavorites(cardContent);

    } else {

        alert("Cette carte est déjà dans vos favoris !");

    }

});


function addToFavorites(content) {

    // Créer un nouvel élément pour les favoris

    var favoriteItem = document.createElement("div");

    favoriteItem.className = "favorite-item";

    favoriteItem.innerHTML = content;


    // Ajouter l'élément aux favoris (dans la section Favoris)

    var favoritesSection = document.getElementById("favoris");

    favoritesSection.appendChild(favoriteItem);

}




// Ajouter la gestion de favoris Clermont

//HACIENDA

var addToFavoritesBtn = document.querySelector("#page2 .addToFavoritesBtn-HACIENDA");


addToFavoritesBtn.addEventListener("click", function() {

    var presentationCard = document.querySelector("#page2 .presentation-card-HACIENDA");

    var cardContent = presentationCard.innerHTML;

    if (!isCardInFavorites(cardContent)) {

        addToFavorites(cardContent);

    } else {

        alert("Cette carte est déjà dans vos favoris !");

    }

});


function addToFavorites(content) {

    // Créer un nouvel élément pour les favoris

    var favoriteItem = document.createElement("div");

    favoriteItem.className = "favorite-item";

    favoriteItem.innerHTML = content;


    // Ajouter l'élément aux favoris (dans la section Favoris)

    var favoritesSection = document.getElementById("favoris");

    favoritesSection.appendChild(favoriteItem);

}


//MALT

var addToFavoritesBtn = document.querySelector("#page2 .addToFavoritesBtn-MALT");


addToFavoritesBtn.addEventListener("click", function() {

    var presentationCard = document.querySelector("#page2 .presentation-card-MALT");

    var cardContent = presentationCard.innerHTML;

    if (!isCardInFavorites(cardContent)) {

        addToFavorites(cardContent);

    } else {

        alert("Cette carte est déjà dans vos favoris !");

    }

});


function addToFavorites(content) {

    // Créer un nouvel élément pour les favoris

    var favoriteItem = document.createElement("div");

    favoriteItem.className = "favorite-item";

    favoriteItem.innerHTML = content;


    // Ajouter l'élément aux favoris (dans la section Favoris)

    var favoritesSection = document.getElementById("favoris");

    favoritesSection.appendChild(favoriteItem);

}


//Bell's Austalian

var addToFavoritesBtn = document.querySelector("#page2 .addToFavoritesBtn-BELL");


addToFavoritesBtn.addEventListener("click", function() {

    var presentationCard = document.querySelector("#page2 .presentation-card-BELL");

    var cardContent = presentationCard.innerHTML;

    if (!isCardInFavorites(cardContent)) {

        addToFavorites(cardContent);

    } else {

        alert("Cette carte est déjà dans vos favoris !");

    }

});


function addToFavorites(content) {

    // Créer un nouvel élément pour les favoris

    var favoriteItem = document.createElement("div");

    favoriteItem.className = "favorite-item";

    favoriteItem.innerHTML = content;


    // Ajouter l'élément aux favoris (dans la section Favoris)

    var favoritesSection = document.getElementById("favoris");

    favoritesSection.appendChild(favoriteItem);

}


function isCardInFavorites(cardContent) {

    var favoritesSection = document.getElementById("favoris");

    var existingCards = favoritesSection.getElementsByClassName("favorite-item");


    // Vérifier si la carte est déjà en favoris en comparant le contenu HTML

    for (var i = 0; i < existingCards.length; i++) {

        if (existingCards[i].innerHTML === cardContent) {

            return true;

        }

    }

    return false;

}


function loadFavorites() {

    var favoritesSection = document.getElementById("favoris");

    var storedFavorites = localStorage.getItem("favorites");


    if (storedFavorites) {

        favoritesSection.innerHTML = storedFavorites;

    }

}


function saveFavorites() {

    var favoritesSection = document.getElementById("favoris");

    var favoritesContent = favoritesSection.innerHTML;


    // Enregistrer les favoris dans le stockage local

    localStorage.setItem("favorites", favoritesContent);

}