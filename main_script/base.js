document.addEventListener("DOMContentLoaded", function() {
    var homeLink = document.getElementById("home-link");
	var welcomeMessageDiv = document.getElementById("welcome-message");
    var aboutLink = document.getElementById("about-link");
    var gamesLink = document.getElementById("games-link");
    var contactLink = document.getElementById("contact-link");
	var loginLink = document.getElementById("login-link");
    var registerLink = document.getElementById("register-link");
    var registerForm = document.getElementById("registration-form");
    var loginForm = document.getElementById("login-form");
    var showRegisterButton = document.getElementById("show-register-form");
    var showLoginButton = document.getElementById("show-login-form");
    
    // Приветственное сообщение для ссылки Главная
    homeLink.addEventListener("click", function(event) {
        welcomeMessageDiv.innerHTML = "<p>Добро пожаловать в будущее технологий! Почувствуйте азарт игры!</p>";
    });
    
    // Анимация игрового автомата для ссылки Игры
    gamesLink.addEventListener("mouseenter", function() {
        slotMachineAnimation();
    });

    gamesLink.addEventListener("mouseleave", function() {
        clearInterval(slotMachineInterval);
        gamesLink.innerText = "Игры";
    });

    // Валидация формы обратной связи для ссылки Контакты
    contactLink.addEventListener("click", function(event) {
        event.preventDefault();
        validateContactForm();
    });

    // Функциональность регистрации для ссылки Регистрация
    registerLink.addEventListener("click", function(event) {
        registerForm.style.display = "block";
        loginForm.style.display = "none";
    });
	
	// Функциональность входа для ссылки Вход
    loginLink.addEventListener("click", function(event) {
		registerForm.style.display = "none";
        loginForm.style.display = "block";
	});

    // Функциональность подменю акций
    var promotionsSubMenu = document.querySelector("#promotions-link .submenu");
    promotionsSubMenu.addEventListener("click", function(event) {
        event.stopPropagation(); // Предотвращение клика на подменю от срабатывания родительской ссылки
        var target = event.target;
        if (target.tagName === "A") {
            // Добавьте вашу функциональность подменю акций здесь
            alert("Нажатие на акцию: " + target.innerText);
        }
    });

    // Функциональность подменю VIP
    var vipSubMenu = document.querySelector("#vip-link .submenu");
    vipSubMenu.addEventListener("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (target.tagName === "A") {
            // Добавьте вашу функциональность подменю VIP здесь
            alert("Нажатие на опцию VIP: " + target.innerText);
        }
    });

    // Функциональность подменю поддержки
    var supportSubMenu = document.querySelector("#support-link .submenu");
    supportSubMenu.addEventListener("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (target.tagName === "A") {
            // Добавьте вашу функциональность подменю поддержки здесь
            alert("Нажатие на опцию поддержки: " + target.innerText);
        }
    });

    // Функциональность подменю новостей
    var newsSubMenu = document.querySelector("#news-link .submenu");
    newsSubMenu.addEventListener("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (target.tagName === "A") {
            // Добавьте вашу функциональность подменю новостей здесь
            alert("Нажатие на опцию новостей: " + target.innerText);
        }
    });

    // Функциональность подменю условий
    var termsSubMenu = document.querySelector("#terms-link .submenu");
    termsSubMenu.addEventListener("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (target.tagName === "A") {
            // Добавьте вашу функциональность подменю условий здесь
            alert("Нажатие на опцию условий: " + target.innerText);
        }
    });

    // Функциональность подменю языка
    var languageSubMenu = document.querySelector("#language-link .submenu");
    languageSubMenu.addEventListener("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (target.tagName === "A") {
            // Добавьте вашу функциональность подменю языка здесь
            alert("Нажатие на язык: " + target.innerText);
        }
    });

    // Функциональность подменю настроек
    var settingsSubMenu = document.querySelector("#settings-link .submenu");
    settingsSubMenu.addEventListener("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (target.tagName === "A") {
            // Добавьте вашу функциональность подменю настроек здесь
            alert("Нажатие на опцию настроек: " + target.innerText);
        }
    });

    // Функциональность для ссылки Выход
    var logoutLink = document.getElementById("logout-link");
    logoutLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Добавьте вашу функциональность выхода здесь
        alert("Выход...");
    });
});

function validateContactForm() {
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    if (usernameInput === "" || passwordInput === "") {
        alert("Связь с нашим руководством: clear.net.sky@cns.com\nТак же по факсу: fax@cns.com");
        return false;
    } else {
        alert("Форма успешно отправлена!");
        return true;
    }
}
