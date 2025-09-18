document.addEventListener('DOMContentLoaded', () => {
    const langEnBtn = document.getElementById('lang-en');
    const langPlBtn = document.getElementById('lang-pl');
    
    const setLanguage = (lang) => {
        // Find all elements with the data-translate-key attribute
        const elements = document.querySelectorAll('[data-translate-key]');
        
        // Loop through each element
        elements.forEach(element => {
            const key = element.getAttribute('data-translate-key');
            // Check if a translation exists for this key and language
            if (translations[lang] && translations[lang][key]) {
                element.innerText = translations[lang][key];
            }
        });

        // Update active language button style
        if (lang === 'pl') {
            langPlBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        } else {
            langEnBtn.classList.add('active');
            langPlBtn.classList.remove('active');
        }

        // Save the chosen language to local storage
        localStorage.setItem('language', lang);
    };

    // Add click event listeners to language buttons
    langEnBtn.addEventListener('click', () => setLanguage('en'));
    langPlBtn.addEventListener('click', () => setLanguage('pl'));

    // Check for a saved language in local storage, or default to English
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
});
