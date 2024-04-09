document.addEventListener("DOMContentLoaded", function() {
    var homeLink = document.getElementById("home-link");
    var aboutLink = document.getElementById("about-link");
    var gamesLink = document.getElementById("games-link");
    var contactLink = document.getElementById("contact-link");
    var registerLink = document.getElementById("register-link");
    var welcomeMessageDiv = document.getElementById("welcome-message");
    
    // Welcome message for Home link
    homeLink.addEventListener("click", function(event) {
        event.preventDefault();
        welcomeMessageDiv.innerHTML = "<p>Welcome to our The Future Of The Technologies! Feel the thrill of the gaming!</p>";
    });
    
    // Welcome message for About link
    aboutLink.addEventListener("click", function(event) {
        event.preventDefault();
        welcomeMessageDiv.innerHTML = "<p>Learn more about our exciting projects and its history!</p>";
    });
    
    // Slot machine animation for Games link
    gamesLink.addEventListener("mouseenter", function() {
        slotMachineAnimation();
    });

    gamesLink.addEventListener("mouseleave", function() {
        clearInterval(slotMachineInterval);
        gamesLink.innerText = "Games";
    });

    // Contact form validation for Contact link
    contactLink.addEventListener("click", function(event) {
        event.preventDefault();
        validateContactForm();
    });

    // Register functionality for Register link
    registerLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Add your register functionality here
        alert("Redirecting to registration page...");
    });

    // Functionality for promotions submenu
    var promotionsSubMenu = document.querySelector("#promotions-link .submenu");
    promotionsSubMenu.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent submenu click from triggering parent link
        var target = event.target;
        if (target.tagName === "A") {
            // Add your promotions submenu functionality here
            alert("Clicked on promotion: " + target.innerText);
        }
    });

    // Functionality for VIP submenu
    var vipSubMenu = document.querySelector("#vip-link .submenu");
    vipSubMenu.addEventListener("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (target.tagName === "A") {
            // Add your VIP submenu functionality here
            alert("Clicked on VIP option: " + target.innerText);
        }
    });

    // Functionality for support submenu
    var supportSubMenu = document.querySelector("#support-link .submenu");
    supportSubMenu.addEventListener("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (target.tagName === "A") {
            // Add your support submenu functionality here
            alert("Clicked on support option: " + target.innerText);
        }
    });

    // Functionality for news submenu
    var newsSubMenu = document.querySelector("#news-link .submenu");
    newsSubMenu.addEventListener("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (target.tagName === "A") {
            // Add your news submenu functionality here
            alert("Clicked on news option: " + target.innerText);
        }
    });

    // Functionality for terms submenu
    var termsSubMenu = document.querySelector("#terms-link .submenu");
    termsSubMenu.addEventListener("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (target.tagName === "A") {
            // Add your terms submenu functionality here
            alert("Clicked on terms option: " + target.innerText);
        }
    });

    // Functionality for language submenu
    var languageSubMenu = document.querySelector("#language-link .submenu");
    languageSubMenu.addEventListener("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (target.tagName === "A") {
            // Add your language submenu functionality here
            alert("Clicked on language: " + target.innerText);
        }
    });

    // Functionality for settings submenu
    var settingsSubMenu = document.querySelector("#settings-link .submenu");
    settingsSubMenu.addEventListener("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (target.tagName === "A") {
            // Add your settings submenu functionality here
            alert("Clicked on settings option: " + target.innerText);
        }
    });

    // Functionality for logout link
    var logoutLink = document.getElementById("logout-link");
    logoutLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Add your logout functionality here
        alert("Logging out...");
    });
});

function validateContactForm() {
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    if (usernameInput === "" || passwordInput === "") {
        alert("Please fill in all fields.");
        return false;
    } else {
        alert("Form submitted successfully!");
        return true;
    }
}