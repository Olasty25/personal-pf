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
                // Adjusted calculation to make slides stay active longer
                const slideCount = processSlides.length;
                // Use a much slower progression - each slide gets significantly more scroll distance
                // Multiply by 2.5 to give each slide much more time to read
                const adjustedProgress = scrollProgress * (slideCount * 2.5);
                const slideIndex = Math.floor(adjustedProgress);
                const activeSlideIndex = Math.min(slideIndex, slideCount - 1);

                // Update active slide - keep previous slides visible longer
                if (activeSlideIndex !== currentActiveSlide) {
                    processSlides.forEach((slide, index) => {
                        if (index === activeSlideIndex) {
                            slide.classList.add('active');
                        } else if (index < activeSlideIndex) {
                            // Keep previous slides active (visible) longer
                            slide.classList.add('active');
                        } else {
                            slide.classList.remove('active');
                        }
                    });
                    currentActiveSlide = activeSlideIndex;
                }

                // Fade in/out slides based on scroll position
                // Much more generous visibility zones - text stays visible longer
                processSlides.forEach((slide, index) => {
                    const slideProgress = adjustedProgress - index;
                    const textElements = slide.querySelectorAll('.process-slide-text h3, .process-slide-text p');
                    
                    // Extended visibility range - slides stay visible much longer
                    if (slideProgress >= -0.5 && slideProgress <= 3.0) {
                        let slideOpacity = 1;
                        if (slideProgress < 0) {
                            // Very gentle fade in as approaching
                            slideOpacity = Math.max(0.5, (slideProgress + 0.5) / 0.5);
                        } else if (slideProgress > 2.5) {
                            // Very gentle fade out - only at the very end
                            slideOpacity = Math.max(0.5, (3.0 - slideProgress) / 0.5);
                        } else {
                            // Full opacity for most of the slide's duration (0 to 2.5)
                            slideOpacity = 1;
                        }
                        slide.style.opacity = slideOpacity;
                        
                        // Keep text elements fully visible once they've appeared
                        if (slideProgress >= 0.2 && slideProgress <= 2.8) {
                            textElements.forEach(el => {
                                el.style.opacity = '1';
                                el.style.transform = 'translateY(0)';
                            });
                        }
                    } else if (slideProgress < -0.5) {
                        // Before slide comes into view
                        slide.style.opacity = 0.3;
                    } else {
                        // After slide has passed
                        slide.style.opacity = 0.3;
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