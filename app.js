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

    // ===== PROCESS SECTION STICKY SLIDES & ROUTE ANIMATION =====
    const processSection = document.querySelector('.process-section');
    const processSlides = document.querySelectorAll('.process-slide');
    const routePath = document.querySelector('.route-path');
    
    if (processSection && processSlides.length > 0 && routePath) {
        const processHeader = document.querySelector('.process-header');
        const slidesWrapper = document.querySelector('.process-slides-wrapper');
        
        // Get the path length for animation (using viewBox height 400)
        const pathLength = 400;
        routePath.style.strokeDasharray = pathLength;
        routePath.style.strokeDashoffset = pathLength;

        let isInView = false;
        let currentActiveSlide = 0;

        const updateProcessSection = () => {
            const sectionRect = processSection.getBoundingClientRect();
            const headerHeight = processHeader ? processHeader.offsetHeight : 0;
            const sectionTop = sectionRect.top;
            const sectionBottom = sectionRect.bottom;
            const windowHeight = window.innerHeight;

            // Check if section is in viewport
            if (sectionTop < windowHeight && sectionBottom > 0) {
                if (!isInView) {
                    isInView = true;
                    processSection.classList.add('in-view');
                }

                // Calculate scroll progress within the slides wrapper
                const wrapperTop = slidesWrapper.getBoundingClientRect().top;
                const scrollProgress = Math.max(0, Math.min(1, 
                    (windowHeight - wrapperTop) / (slidesWrapper.offsetHeight - windowHeight + headerHeight)
                ));

                // Animate route path drawing
                const routeProgress = scrollProgress;
                const drawLength = pathLength * routeProgress;
                routePath.style.strokeDashoffset = pathLength - drawLength;

                // Determine which slide should be active
                const slideCount = processSlides.length;
                const slideIndex = Math.floor(scrollProgress * slideCount);
                const activeSlideIndex = Math.min(slideIndex, slideCount - 1);

                // Update active slide
                if (activeSlideIndex !== currentActiveSlide) {
                    processSlides.forEach((slide, index) => {
                        if (index === activeSlideIndex) {
                            slide.classList.add('active');
                        } else {
                            slide.classList.remove('active');
                        }
                    });
                    currentActiveSlide = activeSlideIndex;
                }

                // Fade in/out slides based on scroll position
                processSlides.forEach((slide, index) => {
                    const slideProgress = (scrollProgress * slideCount) - index;
                    if (slideProgress >= 0 && slideProgress <= 1) {
                        const opacity = slideProgress < 0.3 ? slideProgress / 0.3 : 
                                       slideProgress > 0.7 ? (1 - slideProgress) / 0.3 : 1;
                        slide.style.opacity = Math.max(0.3, opacity);
                    }
                });

            } else {
                if (isInView) {
                    isInView = false;
                    processSection.classList.remove('in-view');
                }
            }
        };

        // Throttle scroll events for better performance
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateProcessSection();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        
        // Initial check
        updateProcessSection();
    }
});