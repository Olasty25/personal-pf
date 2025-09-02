<!-- Umieść tę zawartość tuż przed zamykającym tagiem </body> -->

<!-- Najpierw załaduj FontAwesome z poprawnego źródła -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/all.min.js" integrity="sha512-uKQ39gEGiyUJl4AI6L+ekBdGKpGw4xJ55+xyJG7YFlJokPNYegn9KwQ3P8A7aFQAUtUsAQHep+d/lrGqrbPIDQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<!-- Wbuduj obiekt translations bezpośrednio w HTML -->
<script>
// Obiekt translations wbudowany bezpośrednio w HTML
const translations = {
    // Navigation
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
    
    // Case Studies
    'case1-tag': {
        'en': 'Pizza&Fire',
        'pl': 'Pizza&Fire'
    },
    'case1-title': {
        'en': 'Landing Page for Small Buisness',
        'pl': 'Strona internetowa dla małej firmy'
    },
    'case1-desc': {
        'en': 'A modern, responsive website designed for a local business. Optimized for SEO and mobile, ready to convert visitors into clients.',
        'pl': 'Nowoczesna, responsywna strona zaprojektowana dla lokalnego biznesu. Zoptymalizowana pod kątem SEO i urządzeń mobilnych, gotowa do konwersji odwiedzających w klientów.'
    },
    'case-btn': {
        'en': 'View case study >',
        'pl': 'Zobacz studium przypadku >'
    },
    
    'case2-tag': {
        'en': 'EdTech',
        'pl': 'EdTech'
    },
    'case2-title': {
        'en': 'AI Automation Agent',
        'pl': 'Agent automatyzacji AI'
    },
    'case2-desc': {
        'en': 'A custom Python script that scrapes online data and organizes it into Excel sheets, saving hours of manual work.',
        'pl': 'Niestandardowy skrypt Python, który zbiera dane online i organizuje je w arkuszach Excel, oszczędzając godziny ręcznej pracy.'
    },
    
    'case3-tag': {
        'en': 'Pharma',
        'pl': 'Farmacja'
    },
    'case3-title': {
        'en': 'Trained AI Chatbot (PDF & Q/A)',
        'pl': 'Wytrenowany chatbot AI (PDF i Q/A)'
    },
    'case3-desc': {
        'en': 'A tool that can be tuned even more to focus on solving certain problems of one niche.',
        'pl': 'Narzędzie, które można jeszcze bardziej dostroić, aby skupić się na rozwiązywaniu określonych problemów jednej niszy.'
    },
    
    // Testimonials
    'testimonials-title': {
        'en': 'Testimonials',
        'pl': 'Referencje'
    },
    'testimonials-subtitle': {
        'en': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'pl': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    'testimonial1-text': {
        'en': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'pl': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    'client1-name': {
        'en': 'Client Name',
        'pl': 'Nazwa Klienta'
    },
    'testimonial2-text': {
        'en': 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'pl': 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    'client2-name': {
        'en': 'Client Name',
        'pl': 'Nazwa Klienta'
    },
    'testimonial3-text': {
        'en': 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'pl': 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    'client3-name': {
        'en': 'Client Name',
        'pl': 'Nazwa Klienta'
    },
    'testimonial4-text': {
        'en': 'Ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        'pl': 'Ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    },
    'client4-name': {
        'en': 'Client Name',
        'pl': 'Nazwa Klienta'
    },
    
    // Recent Work
    'recent-work-title': {
        'en': 'Recent Work',
        'pl': 'Ostatnie prace'
    },
    'recent-work-subtitle': {
        'en': 'Projects, that i hope to make recognizeable one day.',
        'pl': 'Projekty, które mam nadzieję kiedyś uczynić rozpoznawalnymi.'
    },
    'work1-title': {
        'en': 'Optedu AI',
        'pl': 'Optedu AI'
    },
    'work1-desc': {
        'en': 'An AI educational tutor for students to optimise and speed up their learning path.',
        'pl': 'Tutor edukacyjny AI dla studentów, pomagający zoptymalizować i przyspieszyć ścieżkę nauki.'
    },
    'work2-title': {
        'en': 'Forsenior AI',
        'pl': 'Forsenior AI'
    },
    'work2-desc': {
        'en': 'An AI mental caretaker for elderly people. 24/7 calling and texting to escape loneliness',
        'pl': 'AI opiekun dla osób starszych. Dzwonienie i wysyłanie wiadomości 24/7, aby uniknąć samotności.'
    },
    'work-more-btn': {
        'en': 'Know more >',
        'pl': 'Dowiedz się więcej >'
    },
    
    // Contact
    'contact-title': {
        'en': 'Get In Touch',
        'pl': 'Skontaktuj się'
    },
    'contact-subtitle': {
        'en': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'pl': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    'email-label': {
        'en': 'Email',
        'pl': 'Email'
    },
    'email-placeholder': {
        'en': 'Please enter your email',
        'pl': 'Wprowadź swój adres email'
    },
    'mobile-label': {
        'en': 'Mobile',
        'pl': 'Telefon'
    },
    'mobile-placeholder': {
        'en': 'Enter mobile',
        'pl': 'Wprowadź numer telefonu'
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
    
    // Professional Profiles
    'github-text': {
        'en': 'GitHub',
        'pl': 'GitHub'
    },
    'linkedin-text': {
        'en': 'LinkedIn',
        'pl': 'LinkedIn'
    },
    'freelancer-text': {
        'en': 'Freelancer',
        'pl': 'Freelancer'
    },
    
    // Footer
    'footer-text': {
        'en': 'Made with ❤️',
        'pl': 'Stworzone z ❤️'
    }
};

// Skrypt do przełączania języków (zaraz po definicji translations)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded');
    
    // Pobieramy przyciski
    const enButton = document.getElementById('lang-en');
    const plButton = document.getElementById('lang-pl');
    
    if (!enButton || !plButton) {
        console.error('Language buttons not found!');
        return;
    }
    
    console.log('Buttons found, adding event listeners');
    
    // Default language
    let currentLang = localStorage.getItem('preferredLanguage') || 'en';
    
    // Set initial language
    setLanguage(currentLang);
    
    // Explicit onclick handlers
    enButton.onclick = function() {
        console.log('English button clicked');
        setLanguage('en');
    };
    
    plButton.onclick = function() {
        console.log('Polish button clicked');
        setLanguage('pl');
    };
    
    function setLanguage(lang) {
        console.log('Setting language to: ' + lang);
        currentLang = lang;
        
        // Save preference
        localStorage.setItem('preferredLanguage', lang);
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeButton = document.getElementById('lang-' + lang);
        if (activeButton) {
            activeButton.classList.add('active');
        }
        
        // Update all text elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key] && translations[key][lang]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.getAttribute('placeholder')) {
                        element.setAttribute('placeholder', translations[key][lang]);
                    } else {
                        element.value = translations[key][lang];
                    }
                } else {
                    element.innerHTML = translations[key][lang];
                }
            } else {
                console.warn('Missing translation for key: ' + key + ' in language: ' + lang);
            }
        });
        
        // Update document lang attribute
        document.documentElement.lang = lang;
    }
});
</script>
