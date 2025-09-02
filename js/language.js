// language.js
class LanguageManager {
    constructor() {
        this.currentLang = 'en';
        this.translations = {
            'en': {
                'home': 'Home',
                'about': 'About',
                'services': 'Services',
                'news': 'News',
                'threats': 'Threat Database',
                'contact': 'Contact',
                'choose-language': 'Select Language',
                'intro-text': 'Advanced Cyber Security Solutions',
                'explore-services': 'Explore Services',
                'get-started': 'Get Started',
                'threats-blocked': 'Threats Blocked Today',
                'countries': 'Countries Protected',
                'enterprises': 'Civilians Clients',
                'uptime': '% Uptime',
                'system-status': 'System Status',
                'cpu-usage': 'CPU Usage',
                'memory-usage': 'Memory Usage',
                'network-traffic': 'Network Traffic',
                'security-recommendations': 'Security Recommendations',
                'recommendation-1': 'Update firewall rules: Coming soon.',
                'recommendation-2': 'Review privileged access: Coming soon.',
                'recommendation-3': 'Schedule penetration test: Coming soon.',
                'global-threats': 'Global Threat Map',
                'last-hour': 'Last Hour',
                'last-day': 'Last 24 Hours',
                'last-week': 'Last Week',
                'threat-statistics': 'Threat Statistics',
                'total-attacks': 'Total Attacks',
                'top-threat': 'Top Threat',
                'top-source': 'Top Source',
                'threat-legend': 'Threat Legend',
                'high-risk': 'High Risk (0+ incidents)',
                'medium-risk': 'Medium Risk (0 incidents)',
                'low-risk': 'Low Risk (0 incidents)',
                'recent-alerts': 'Recent News',
                'alert-critical': 'Critical: Coming soon.',
                'alert-malware': 'Malware detected: Coming soon',
                'alert-intrusion': 'Suspicious login: Coming soon',
                'alert-update': 'Security definitions: Coming soon',
                'view-all-alerts': 'View All News',
                'acknowledge-all': 'Acknowledge All',
                'security-tips': 'Security Tips',
                'tip-1-title': 'Enable Multi-Factor Authentication',
                'tip-1-desc': 'Always enable MFA for important accounts to add an extra layer of security beyond passwords.',
                'tip-2-title': 'Regular Software Updates',
                'tip-2-desc': 'Keep all software updated to protect against known vulnerabilities that attackers exploit.',
                'tip-3-title': 'Phishing Awareness',
                'tip-3-desc': 'Be cautious of unsolicited emails and never click on suspicious links or download attachments from unknown sources.',
                'threat-prevention': 'Threat Prevention',
                'malware-blocked': 'Malware Blocked',
                'phishing-blocked': 'Phishing Blocked',
                'prevention-tip': 'Our DNS-powered systems are actively blocking threats in real-time. Ensure your endpoints are protected with our latest security patches.',
                'latest-news': 'Latest News',
                'view-all': 'View All',
                'news-category-1': 'DNS Security',
                'news-title-1': 'New DNS-powered Threat Detection System',
                'news-desc-1': 'Our latest DNS algorithms can now detect zero-day threats with 99.7% accuracy, revolutionizing civilians security.',
                'news-category-2': 'Ransomware',
                'news-title-2': 'Global Ransomware Attack Neutralized',
                'news-desc-2': 'Our threat intelligence team successfully neutralized: Coming soon.',
                'read-more': 'Read More',
                'footer-desc': 'Advanced cyber security solutions for the modern digital world.',
                'quick-links': 'Quick Links',
                'resources': 'Resources',
                'threat-database': 'Threat Database',
                'emergency-response': 'Emergency Response',
                'report-threat': 'Report a Threat',
                'white-papers': 'White Papers',
                'webinars': 'Webinars',
                'contact-us': 'Contact Us',
                'footer-address': 'Global Security Operations Center',
                'emergency': 'Emergency',
                'emergency-desc': '24/7 incident response team',
                'rights-reserved': 'All rights reserved.',
                'login': 'Login',
                'login-to-system': 'Login to System',
                'username': 'Username',
                'password': 'Password',
                'remember-me': 'Remember me',
                'forgot-password': 'Forgot password?',
                'or': 'OR',
                'signin-with-google': 'Sign in with Google',
                'signin-with-microsoft': 'Sign in with Microsoft'
            },
            'ru': {
                'home': 'Главная',
                'about': 'О нас',
                'services': 'Услуги',
                'news': 'Новости',
                'threats': 'База угроз',
                'contact': 'Контакты',
                'choose-language': 'Выберите язык',
                'intro-text': 'Передовые решения в области кибербезопасности',
                'explore-services': 'Исследовать Услуги',
                'get-started': 'Начать',
                'threats-blocked': 'Угроз заблокировано сегодня',
                'countries': 'Стран под защитой',
                'enterprises': 'Гражданских клиентов',
                'uptime': '% Аптайм',
                'system-status': 'Статус системы',
                'cpu-usage': 'Использование CPU',
                'memory-usage': 'Использование памяти',
                'network-traffic': 'Сетевой трафик',
                'security-recommendations': 'Рекомендации по безопасности',
                'recommendation-1': 'Обновите правила firewall: В скором времени.',
                'recommendation-2': 'Пересмотрите привилегированный доступ: В скором времени.',
                'recommendation-3': 'Запланируйте тест на проникновение: В скором времени.',
                'global-threats': 'Карта глобальных новостей',
                'last-hour': 'Последний час',
                'last-day': 'Последние 24 часа',
                'last-week': 'Последняя неделя',
                'threat-statistics': 'Статистика новостей',
                'total-attacks': 'Всего атак',
                'top-threat': 'Главная угроза',
                'top-source': 'Основной источник',
                'threat-legend': 'Легенда угроз',
                'high-risk': 'Высокий риск (0+ инцидентов)',
                'medium-risk': 'Средний риск (0 инцидентов)',
                'low-risk': 'Низкий риск (0 инцидентов)',
                'recent-alerts': 'Последние оповещения',
                'alert-critical': 'Критично: В скором времени.',
                'alert-malware': 'Обнаружено: В скором времени.',
                'alert-intrusion': 'Подозрительная попытка входа: В скором времени.',
                'alert-update': 'Определения безопасности: В скором времени.',
                'view-all-alerts': 'Все оповещения',
                'acknowledge-all': 'Подтвердить все',
                'security-tips': 'Советы по безопасности',
                'tip-1-title': 'Включите Многофакторную Аутентификацию',
                'tip-1-desc': 'Всегда включайте MFA для важных учетных записей, чтобы добавить дополнительный уровень безопасности помимо паролей.',
                'tip-2-title': 'Регулярные обновления ПО',
                'tip-2-desc': 'Обновляйте все программное обеспечение для защиты от известных уязвимостей, которые используют злоумышленники.',
                'tip-3-title': 'Осведомленность о фишинге',
                'tip-3-desc': 'Будьте осторожны с нежелательными письмами и никогда не переходите по подозрительным ссылкам и не скачивайте вложения из неизвестных источников.',
                'threat-prevention': 'Предотвращение угроз',
                'malware-blocked': 'Вредоносное ПО заблокировано',
                'phishing-blocked': 'Фишинг заблокирован',
                'prevention-tip': 'Наши системы на основе ДНС активно блокируют угрозы в реальном времени. Убедитесь, что ваши конечные точки защищены нашими последними патчами безопасности.',
                'latest-news': 'Последние новости',
                'view-all': 'Все новости',
                'news-category-1': 'ДНС Безопасность',
                'news-title-1': 'Новая система обнаружения угроз на основе ДНС',
                'news-desc-1': 'Наши новейшие алгоритмы ДНС теперь могут обнаруживать zero-day угрозы с точностью 99.7%, revolutionizing enterprise security.',
                'news-category-2': 'Ransomware',
                'news-title-2': 'Глобальная ransomware атака нейтрализована',
                'news-desc-2': 'Наша команда разведки угроз успешно нейтрализовала: В скором времени!.',
                'read-more': 'Читать далее',
                'footer-desc': 'Передовые решения в области кибербезопасности для современного цифрового мира.',
                'quick-links': 'Быстрые ссылки',
                'resources': 'Ресурсы',
                'threat-database': 'База угроз',
                'emergency-response': 'Экстренный ответ',
                'report-threat': 'Сообщить об угрозе',
                'white-papers': 'Белые бумаги',
                'webinars': 'Вебинары',
                'contact-us': 'Свяжитесь с нами',
                'footer-address': 'Глобальный центр операций безопасности',
                'emergency': 'Экстренная',
                'emergency-desc': 'Круглосуточная группа реагирования на инциденты',
                'rights-reserved': 'Все права защищены.',
                'login': 'Вход',
                'login-to-system': 'Вход в систему',
                'username': 'Имя пользователя',
                'password': 'Пароль',
                'remember-me': 'Запомнить меня',
                'forgot-password': 'Забыли пароль?',
                'or': 'ИЛИ',
                'signin-with-google': 'Войти через Google',
                'signin-with-microsoft': 'Войти через Microsoft'
            }
        };
        
        this.init();
    }
    
    init() {
        // Check if language is stored in localStorage
        const savedLang = localStorage.getItem('cns-language');
        if (savedLang) {
            this.currentLang = savedLang;
        } else {
            // Detect browser language
            const browserLang = navigator.language.split('-')[0];
            if (browserLang === 'ru') {
                this.currentLang = 'ru';
            } else {
                this.currentLang = 'en';
            }
        }
        
        // Apply language on page load
        this.applyLanguage();
        
        // Set up event listeners
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Language selection modal
        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const lang = e.currentTarget.dataset.lang;
                this.setLanguage(lang);
                this.hideLanguageModal();
            });
        });
        
        // Language switcher in header
        const langSwitcher = document.getElementById('current-language');
        if (langSwitcher) {
            langSwitcher.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }
    
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('cns-language', lang);
            this.applyLanguage();
            this.updateFlag();
        }
    }
    
    toggleLanguage() {
        const newLang = this.currentLang === 'en' ? 'ru' : 'en';
        this.setLanguage(newLang);
    }
    
    applyLanguage() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (this.translations[this.currentLang][key]) {
                element.textContent = this.translations[this.currentLang][key];
            }
        });
        
        // Update page title
        const pageTitle = document.querySelector('title');
        if (pageTitle) {
            const baseTitle = pageTitle.textContent.split('|')[0];
            pageTitle.textContent = `${baseTitle}| ${this.translations[this.currentLang]['intro-text']}`;
        }
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', this.translations[this.currentLang]['footer-desc']);
        }
    }
    
    updateFlag() {
        const flagElement = document.querySelector('#current-language .flag');
        if (flagElement) {
            flagElement.className = 'flag';
            flagElement.classList.add(this.currentLang === 'en' ? 'us-flag' : 'ru-flag');
            flagElement.classList.add('small');
        }
    }
    
    showLanguageModal() {
        document.getElementById('language-modal').style.display = 'flex';
    }
    
    hideLanguageModal() {
        document.getElementById('language-modal').style.display = 'none';
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
    
    // Show language modal on first visit
    if (!localStorage.getItem('cns-language-set')) {
        window.languageManager.showLanguageModal();
        localStorage.setItem('cns-language-set', 'true');
    }
});