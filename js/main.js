// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all managers
    if (window.languageManager) window.languageManager.init();
    if (window.soundManager) window.soundManager.init();
    if (window.animationManager) window.animationManager.init();
    
    // Setup login modal
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const modalClose = document.querySelector('.modal-close');
    
    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'block';
        });
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
    
    // Handle login form submission
    const loginForm = document.querySelector('.auth-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate login process
            const submitBtn = loginForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Logging in...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                loginModal.style.display = 'none';
                
                // Show success message (you could implement a notification system)
                alert('Login successful! (This is a demo)');
            }, 1500);
        });
    }
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const body = document.body;
            const currentTheme = body.classList.contains('cyber-theme') ? 'cyber-theme' : 'light-theme';
            const newTheme = currentTheme === 'cyber-theme' ? 'light-theme' : 'cyber-theme';
            
            body.classList.remove(currentTheme);
            body.classList.add(newTheme);
            
            localStorage.setItem('cns-theme', newTheme);
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('cns-theme');
        if (savedTheme) {
            document.body.classList.remove('cyber-theme', 'light-theme');
            document.body.classList.add(savedTheme);
        }
    }
    
    // Update current time
    function updateCurrentTime() {
        const timeElement = document.getElementById('update-time');
        if (timeElement) {
            const now = new Date();
            const formattedTime = now.toISOString().replace('T', ' ').substring(0, 19) + 'Z';
            timeElement.textContent = formattedTime;
        }
    }
    
    updateCurrentTime();
    setInterval(updateCurrentTime, 60000); // Update every minute
    
    // Simulate threat map animations
    function animateThreatPoints() {
        const threatPoints = document.querySelectorAll('.threat-point');
        threatPoints.forEach(point => {
            // Random movement
            const top = Math.random() * 80 + 10;
            const left = Math.random() * 80 + 10;
            
            point.style.transition = 'all 2s ease-in-out';
            point.style.top = `${top}%`;
            point.style.left = `${left}%`;
        });
    }
    
    // Start threat animation
    setInterval(animateThreatPoints, 3000);
    
    // Initialize threat map animation
    animateThreatPoints();
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl+L to switch language
        if (e.ctrlKey && e.key === 'l') {
            e.preventDefault();
            if (window.languageManager) {
                window.languageManager.toggleLanguage();
            }
        }
        
        // Ctrl+M to toggle sound
        if (e.ctrlKey && e.key === 'm') {
            e.preventDefault();
            if (window.soundManager) {
                window.soundManager.toggleSound();
            }
        }
        
        // Ctrl+T to toggle theme
        if (e.ctrlKey && e.key === 't') {
            e.preventDefault();
            if (themeToggle) {
                themeToggle.click();
            }
        }
    });
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete) {
            img.style.opacity = '0';
            img.addEventListener('load', () => {
                img.style.transition = 'opacity 0.5s ease-in';
                img.style.opacity = '1';
            });
        }
    });
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('.dashboard-card, .stat-card, .news-item').forEach(el => {
        observer.observe(el);
    });
    
    console.log('C.N.S Security System Initialized');
    console.log('System Status: Online');
    console.log('Security Protocols: Active');
});