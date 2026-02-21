document.addEventListener('DOMContentLoaded', () => {
    const langEnBtn = document.getElementById('lang-en');
    const langPlBtn = document.getElementById('lang-pl');
    const translatableElements = document.querySelectorAll('[data-translate-key]');

    const setLanguage = (lang) => {
        // Update text content
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update HTML lang attribute for accessibility
        document.documentElement.lang = lang;

        // Update active button state
        if (lang === 'pl') {
            langPlBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        } else {
            langEnBtn.classList.add('active');
            langPlBtn.classList.remove('active');
        }

        // Save language preference
        localStorage.setItem('language', lang);
    };

    // Event listeners for buttons
    langEnBtn.addEventListener('click', () => setLanguage('en'));
    langPlBtn.addEventListener('click', () => setLanguage('pl'));

    // Initial language setup
    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language.split('-')[0]; // 'pl-PL' -> 'pl'

    if (savedLang) {
        setLanguage(savedLang);
    } else if (browserLang === 'pl') {
        setLanguage('pl');
    } else {
        setLanguage('en'); // Default to English
    }
});