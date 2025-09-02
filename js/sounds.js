// sounds.js
class SoundManager {
    constructor() {
        this.sounds = {
            hover: document.getElementById('hover-sound'),
            click: document.getElementById('click-sound'),
            tableHover: document.getElementById('table-hover-sound'),
            background: document.getElementById('background-music')
        };
        
        this.soundEnabled = true;
        this.volume = 0.3;
        
        this.init();
    }
    
    init() {
        // Check if sound preference is stored
        const soundPref = localStorage.getItem('cns-sound-enabled');
        if (soundPref !== null) {
            this.soundEnabled = soundPref === 'true';
        }
        
        // Set initial volume
        this.setVolume(this.volume);
        
        // Update UI
        this.updateSoundToggle();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Play background music if enabled
        if (this.soundEnabled) {
            this.playBackgroundMusic();
        }
    }
    
    setupEventListeners() {
        // Sound toggle button
        const soundToggle = document.getElementById('sound-toggle');
        if (soundToggle) {
            soundToggle.addEventListener('click', () => {
                this.toggleSound();
            });
        }
        
        // Hover sounds for interactive elements
        document.querySelectorAll('a, button, .dashboard-card, .nav-link, .language-option').forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.playHoverSound();
            });
        });
        
        // Click sounds for interactive elements
        document.querySelectorAll('a, button, .language-option').forEach(element => {
            element.addEventListener('click', () => {
                this.playClickSound();
            });
        });
        
        // Table hover sounds
        document.querySelectorAll('table tr').forEach(row => {
            row.addEventListener('mouseenter', () => {
                this.playTableHoverSound();
            });
        });
    }
    
    playHoverSound() {
        if (this.soundEnabled) {
            this.sounds.hover.currentTime = 0;
            this.sounds.hover.play().catch(e => console.log("Audio play failed:", e));
        }
    }
    
    playClickSound() {
        if (this.soundEnabled) {
            this.sounds.click.currentTime = 0;
            this.sounds.click.play().catch(e => console.log("Audio play failed:", e));
        }
    }
    
    playTableHoverSound() {
        if (this.soundEnabled) {
            this.sounds.tableHover.currentTime = 0;
            this.sounds.tableHover.play().catch(e => console.log("Audio play failed:", e));
        }
    }
    
    playBackgroundMusic() {
        if (this.soundEnabled) {
            this.sounds.background.play().catch(e => {
                console.log("Background music play failed:", e);
                // Autoplay might be blocked, require user interaction
                document.addEventListener('click', () => {
                    this.sounds.background.play().catch(e => console.log("Background music play failed after click:", e));
                }, { once: true });
            });
        }
    }
    
    stopBackgroundMusic() {
        this.sounds.background.pause();
        this.sounds.background.currentTime = 0;
    }
    
    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        localStorage.setItem('cns-sound-enabled', this.soundEnabled);
        
        if (this.soundEnabled) {
            this.playBackgroundMusic();
        } else {
            this.stopBackgroundMusic();
        }
        
        this.updateSoundToggle();
    }
    
    updateSoundToggle() {
        const soundToggle = document.getElementById('sound-toggle');
        if (soundToggle) {
            const icon = soundToggle.querySelector('i');
            if (icon) {
                icon.className = this.soundEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
            }
        }
    }
    
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        Object.values(this.sounds).forEach(sound => {
            sound.volume = this.volume;
        });
    }
}

// Initialize sound manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.soundManager = new SoundManager();
});