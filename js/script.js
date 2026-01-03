// ========================================
// TAAJII CONSULTING - JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // MOBILE MENU TOGGLE
    // ========================================
    
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
        
        // Fermer le menu lors du clic sur un lien
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // ========================================
    // FORMULAIRE DE CONTACT
    // ========================================
    
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des données du formulaire
            const formData = {
                firstName: document.getElementById('firstName')?.value || '',
                lastName: document.getElementById('lastName')?.value || '',
                email: document.getElementById('email')?.value || '',
                phone: document.getElementById('phone')?.value || '',
                company: document.getElementById('company')?.value || '',
                service: document.getElementById('service')?.value || '',
                subject: document.getElementById('subject')?.value || '',
                message: document.getElementById('message')?.value || '',
                consent: document.getElementById('consent')?.checked || false
            };
            
            // Validation
            if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
                showFormMessage('Veuillez remplir tous les champs obligatoires.', 'error');
                return;
            }
            
            // Validation de l'email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showFormMessage('Veuillez entrer une adresse email valide.', 'error');
                return;
            }
            
            // Validation du consentement
            if (!formData.consent) {
                showFormMessage('Vous devez accepter l\'utilisation de vos données.', 'error');
                return;
            }
            
            // Simulation d'envoi (dans un vrai site, vous enverriez les données à un serveur)
            console.log('Données du formulaire:', formData);
            
            // Afficher le message de succès
            showFormMessage('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.', 'success');
            
            // Réinitialiser le formulaire
            contactForm.reset();
            
            // Masquer le message après 5 secondes
            setTimeout(() => {
                if (formMessage) {
                    formMessage.style.display = 'none';
                }
            }, 5000);
        });
    }
    
    function showFormMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = `form-message ${type}`;
            formMessage.style.display = 'block';
            
            // Scroll vers le message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    // ========================================
    // SMOOTH SCROLL POUR LES ANCRES
    // ========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ========================================
    // ANIMATION AU SCROLL
    // ========================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Éléments à animer
    const animatedElements = document.querySelectorAll('.service-card, .feature-item, .methodology-step, .mvv-card, .approach-item, .service-detail-item, .info-card');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
    
    // ========================================
    // NAVBAR AU SCROLL
    // ========================================
    
    let lastScroll = 0;
    const navbar = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ========================================
    // VALIDATION EN TEMPS RÉEL DES CHAMPS
    // ========================================
    
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '#e5e7eb';
            }
        });
    }
    
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            // Permettre seulement les chiffres, espaces, tirets et +
            this.value = this.value.replace(/[^\d\s\-+()]/g, '');
        });
    }
    
    // ========================================
    // COMPTEUR D'ANIMATION (optionnel)
    // ========================================
    
    function animateCounter(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // ========================================
    // BACK TO TOP BUTTON (optionnel)
    // ========================================
    
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #2563eb, #1a365d);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    backToTopButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    backToTopButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // ========================================
    // CHARGEMENT TERMINÉ
    // ========================================
    
    console.log('✅ Taajii Consulting - Site initialisé avec succès');
});

// ========================================
// FONCTIONS UTILITAIRES
// ========================================

// Fonction pour formater les numéros de téléphone
function formatPhoneNumber(value) {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/);
    if (match) {
        return match.slice(1).join(' ');
    }
    return value;
}

// Fonction pour valider les emails
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Fonction pour capitaliser la première lettre
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Export des fonctions pour utilisation dans d'autres scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatPhoneNumber,
        isValidEmail,
        capitalize
    };
}
