// Create a translations.js file with this content
const translations = {
    // Header Navigation
    'nav-home': {
        'en': 'Home',
        'pl': 'Strona główna'
    },
    'nav-projects': {
        'en': 'Project Showcase',
        'pl': 'Projekty'
    },
    'nav-testimonials': {
        'en': 'Testimonials',
        'pl': 'Referencje'
    },
    'nav-recent': {
        'en': 'Recent work',
        'pl': 'Ostatnie prace'
    },
    'nav-contact': {
        'en': 'Get In Touch',
        'pl': 'Kontakt'
    },
    
    // Professional Profiles Section
    'profiles-title': {
        'en': 'My Professional Profiles',
        'pl': 'Moje profile zawodowe'
    },
    
    // Hero Section
    'hero-subtitle': {
        'en': 'I build landing pages, trained AI chatbots and automation tools that save businesses time and bring new clients.',
        'pl': 'Tworzę strony internetowe, chatboty AI i narzędzia automatyzacji, które oszczędzają czas firm i przyciągają nowych klientów.'
    },
    'hero-cta': {
        'en': 'Let\'s get started >',
        'pl': 'Rozpocznijmy współpracę >'
    },
    'works-using': {
        'en': 'Works using',
        'pl': 'Pracuję używając'
    },
    
    // Projects Showcase
    'projects-title': {
        'en': 'Projects Showcase',
        'pl': 'Prezentacja projektów'
    },
    'projects-subtitle': {
        'en': 'Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'pl': 'Rozwiązuję problemy użytkowników i firm od ponad 15 lat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    
    // Case study 1
    'case1-tag': {
        'en': 'Pizza&Fire',
        'pl': 'Pizza&Fire'
    },
    'case1-title': {
        'en': 'Landing Page for Small Business',
        'pl': 'Strona internetowa dla małej firmy'
    },
    'case1-desc': {
        'en': 'A modern, responsive website designed for a local business. Optimized for SEO and mobile, ready to convert visitors into clients.',
        'pl': 'Nowoczesna, responsywna strona zaprojektowana dla lokalnego biznesu. Zoptymalizowana pod kątem SEO i urządzeń mobilnych, gotowa do konwersji odwiedzających w klientów.'
    },
    'case2-tag': {
        'en': 'Edssistant',
        'pl': 'Edsisstant'
    },
    'case2-title': {
        'en': 'AI Automation Agent',
        'pl': 'AI Automatyczny Agent'
    },
    'case2-desc': {
        'en': 'A custom Python script that scrapes online data and organizes it into Excel sheets, saving hours of manual work.',
        'pl': 'Customowy kod w Pythonie, który zbiera dane z internetu i zapisuje je w Excelu, szczędząc godziny manualnej roboty.'
    },
    'case3-tag': {
        'en': 'Pharmagent',
        'pl': 'Pharmagent'
    },
    'case3-title': {
        'en': 'Trained AI Chatbot (PDF & Q/A)',
        'pl': 'Wytrenowany Czatbot AI (PDFy & Q&A)'
    },
    'case3-desc': {
        'en': 'A tool that can be tuned even more to focus on solving certain problems of one niche.',
        'pl': 'Narzędze które można dostrajać (ćwiczyć) w rozwiązywaniu problemów konkretnej niszy.'
    },
    'case-btn': {
        'en': 'View case study >',
        'pl': 'Zobacz projekt >'
    },
    
    // Continue with all other text elements...
    
    // Contact form
    'contact-title': {
        'en': 'Get In Touch',
        'pl': 'Kontakt do mnie'
    },
    'contact-subtitle': {
        'en': 'I work on rates ranging from 5$ - 30$ / hour',
        'pl': 'Pracuję na stawkach od 25 zł do 120 zł za godz..'
    },
    'email-label': {
        'en': 'Email',
        'pl': 'Email'
    },
    'email-placeholder': {
        'en': 'Please enter your email',
        'pl': 'Twój adres email'
    },
    'mobile-label': {
        'en': 'Mobile',
        'pl': 'Telefon'
    },
    'mobile-placeholder': {
        'en': 'Enter mobile',
        'pl': 'Twój telefon'
    },
    'message-label': {
        'en': 'Message',
        'pl': 'Wiadomość'
    },
    'message-placeholder': {
        'en': 'Enter your message',
        'pl': 'Wprowadź swoją wiadomość'
    },
    'submit-btn': {
        'en': 'Submit >',
        'pl': 'Wyślij >'
    },
    
    // Footer
    'footer-text': {
        'en': 'Made with ❤️',
        'pl': 'Stworzone z ❤️'
    }
};

// Add this script to your main JavaScript file or in a script tag at the bottom of your HTML
document.addEventListener('DOMContentLoaded', function() {
    // Default language
    let currentLang = localStorage.getItem('preferredLanguage') || 'en';
    
    // Set initial language
    setLanguage(currentLang);
    
    // Language switcher functionality
    document.getElementById('lang-en').addEventListener('click', function() {
        setLanguage('en');
    });
    
    document.getElementById('lang-pl').addEventListener('click', function() {
        setLanguage('pl');
    });
    
    function setLanguage(lang) {
        currentLang = lang;
        
        // Save preference
        localStorage.setItem('preferredLanguage', lang);
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById('lang-' + lang).classList.add('active');
        
        // Update all text elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key] && translations[key][lang]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.hasAttribute('placeholder')) {
                        element.placeholder = translations[key][lang];
                    } else {
                        element.value = translations[key][lang];
                    }
                } else {
                    element.innerHTML = translations[key][lang];
                }
            }
        });
        
        // Update document lang attribute
        document.documentElement.lang = lang;
    }
});
