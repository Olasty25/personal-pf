document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            // Page Title
            page_title: "Aleksander Tomczak - Design Portfolio",

            // Navigation
            nav_home: "Home",
            nav_about: "About",
            nav_process: "Process",
            nav_portfolio: "Portfolio",
            nav_blog: "Blog",
            nav_services: "Services",
            nav_contact: "Contact",

            // Hero Section
            hero_greeting: "Hello, I'm",
            hero_name: "Aleksander Tomczak",
            hero_description: "I'm a Freelance <span class='highlight'>Website Creator</span>, based in Wrocław, Poland. I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design.",
            hero_btn: "Say Hello!",
            stat_experience: "Experience",
            stat_projects_completed: "Projects Completed",
            stat_happy_clients: "Happy Clients",

            // About Section
            about_title: "I am Professional <br> Website Creator",
            about_p1: "I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.",
            about_p2: "I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.",
            about_btn_projects: "My Projects",

            // Work Process Section
            process_title: "Work Process",
            process_p1: "Driven by design and powered by code, I create digital interfaces that feel intuitive and perform seamlessly. Every layout, animation, and component is crafted with intention — merging usability with visual clarity.",
            process_p2: "I blend clean design with efficient code to build engaging, user-friendly web experiences that stand out.",
            step1_title: "1. Research",
            step1_description: "Design meets function in every pixel, blending clarity with intuitive motion.",
            step2_title: "2. Analyze",
            step2_description: "Crafting clean, thoughtful interfaces where form flows seamlessly into function and clarity.",
            step3_title: "3. Design",
            step3_description: "I design seamless digital experiences with precision, purpose, and a touch of elegance.",
            step4_title: "4. Launch",
            step4_description: "I craft digital products where thoughtful design meets purposeful drive and responsive development.",

            // Portfolio Section
            portfolio_title: "Portfolio",
            portfolio_description: "Here's a selection of my recent work, showcasing my skills in creating user-centric and visually appealing interfaces.",
            portfolio_category_uiux: "UI-UX DESIGN", // Kept original as per the image
            portfolio_item1_title: "Product Admin Dashboard",
            portfolio_item1_description: "I focus on crafting smooth, responsive interfaces that deliver aesthetic appeal with practical functionality.",
            portfolio_item2_title: "Product Admin Dashboard",
            portfolio_item2_description: "Designed an intuitive dashboard for product management, emphasizing clarity and user efficiency.",
            portfolio_item3_title: "Product Admin Dashboard",
            portfolio_item3_description: "Developed a modern admin panel with a focus on usability and seamless navigation for end users and so on.",
            portfolio_item4_title: "Product Admin Dashboard",
            portfolio_item4_description: "Created a responsive dashboard layout that adapts smoothly across devices and screen sizes and so on.",
            portfolio_item5_title: "Product Admin Dashboard",
            portfolio_item5_description: "Implemented interactive charts and widgets to visualize product data effectively for stakeholders.",
            portfolio_item6_title: "Product Admin Dashboard",
            portfolio_item6_description: "Enhanced user experience by streamlining workflows and optimizing interface components and so on.",
            portfolio_case_study_link: "Case Study →",
            portfolio_more_projects_btn: "More Project",

            // Testimonial Section
            testimonial_title: "Testimonial",
            testimonial_intro_p: "Working with this team was a fantastic experience. Their attention to detail and commitment to quality exceeded our expectations.",
            testimonial_quote: "\"From the initial consultation to the final delivery, every step was handled professionally. The end result was a product that not only met our needs but also impressed our stakeholders. Highly recommended!\"",
            testimonial_author_title: "Managing Director, ABC Company",

            // Call to Action Section
            cta_title: "Do you have a Project Idea? <br> Let's discuss your project!",
            cta_description: "I'm always open to discussing new projects and creative ideas. Let's <br> connect and build something amazing together.",
            cta_btn: "Let's work Together →",

            // Contact Section
            contact_info_title: "Let's discuss your Project",
            contact_info_p: "I'm available for freelance work. Drop me a line if you have a project you think I'd be a good fit for.",
            contact_address_heading: "Address:",
            contact_email_heading: "My Email:",
            contact_phone_heading: "Call Me Now:",
            contact_form_intro_p: "I'm always open to discussing product design work or partnership opportunities.",
            contact_form_name_placeholder: "Name*",
            contact_form_email_placeholder: "Email*",
            contact_form_location_placeholder: "Location*",
            contact_form_budget_placeholder: "Budget*",
            contact_form_subject_placeholder: "Subject*",
            contact_form_message_placeholder: "Message*",
            contact_form_submit_btn: "Submit →",

            // Footer
            footer_copyright: "Copyright"
        },
        pl: {
            // Page Title
            page_title: "Aleksander Tomczak - Portfolio Twórcze",

            // Navigation
            nav_home: "Strona Główna",
            nav_about: "O Mnie",
            nav_process: "Proces",
            nav_portfolio: "Portfolio",
            nav_blog: "Blog",
            nav_services: "Usługi",
            nav_contact: "Kontakt",

            // Hero Section
            hero_greeting: "Witaj, mam na imię",
            hero_name: "Aleksander Tomczak",
            hero_description: "Jestem niezależnym <span class='highlight'>Twórcą Stron www</span>, mieszkającym we Wrocławiu, w Polsce. Staram się tworzyć wciągające i piękne strony internetowe poprzez starannie wykonany kod i projektowanie skoncentrowane na użytkowniku.",
            hero_btn: "Przywitaj się!",
            stat_experience: "Doświadczenie",
            stat_projects_completed: "Zrealizowane Projekty",
            stat_happy_clients: "Zadowoleni Klienci",

            // About Section
            about_title: "Jestem Profesjonalnym <br> Twórcą Stron www",
            about_p1: "Projektuję i rozwijam usługi dla klientów, specjalizując się w tworzeniu stylowych, nowoczesnych stron internetowych, usług webowych i sklepów online. Moją pasją jest projektowanie cyfrowych doświadczeń użytkownika.",
            about_p2: "Projektuję i rozwijam usługi dla klientów, specjalizując się w tworzeniu stylowych, nowoczesnych stron internetowych, usług webowych i sklepów online. Moją pasją jest projektowanie cyfrowych doświadczeń użytkownika.",
            about_btn_projects: "Moje Projekty",

            // Work Process Section
            process_title: "Proces Realizacji Pomysłów Klienta",
            process_p1: "Kierując się designem i mocą kodu, tworzę cyfrowe interfejsy, które są intuicyjne i działają płynnie. Każdy układ, animacja i komponent są tworzone z intencją – łącząc użyteczność z wizualną klarownością.",
            process_p2: "Łączę elegancki design z wydajnym kodem, aby tworzyć angażujące, przyjazne dla użytkownika doświadczenia webowe, które się wyróżniają.",
            step1_title: "1. Rozpoznanie",
            step1_description: "Staram się zrozumieć potzreby i żądanie klienta, aby ustalić z nim czytelny plan działania",
            step2_title: "2. Projektowanie",
            step2_description: "Tworzę czyste interfejsy, gdzie forma płynnie przechodzi w funkcję i klarowność.",
            step3_title: "3. Oprogramowanie",
            step3_description: "Ożywiam statycznego htmla w działający produkt",
            step4_title: "4. Uruchomienie",
            step4_description: "Prezentuję pracę klientowi, nanoszę poprawki i przekazuje mu kod strony.",

            // Portfolio Section
            portfolio_title: "Portfolio",
            portfolio_description: "Oto wybór moich ostatnich prac, prezentujących moje umiejętności w tworzeniu interfejsów skoncentrowanych na użytkowniku i atrakcyjnych wizualnie.",
            portfolio_category_uiux: "PROJEKTOWANIE I KODOWANIE UI-UX",
            portfolio_item1_title: "Jan Zieliński - Portfolio Fotograficzne",
            portfolio_item1_description: "Skupiam się na tworzeniu płynnych, responsywnych interfejsów, które zapewniają estetyczny wygląd z praktyczną funkcjonalnością.",
            portfolio_item2_title: "Strona www Pizzerii ProściejZPieca",
            portfolio_item2_description: "Zaprojektowano intuicyjny pulpit nawigacyjny do zarządzania produktem, z naciskiem na klarowność i efektywność użytkownika.",
            portfolio_item3_title: "Igor Kotlarski - Strona z CV",
            portfolio_item3_description: "Opracowano nowoczesny panel administracyjny z naciskiem na użyteczność i płynną nawigację dla użytkowników końcowych i tak dalej.",
            portfolio_item6_description: "Ulepszono doświadczenie użytkownika poprzez usprawnienie przepływu pracy i optymalizację komponentów interfejsu i tak dalej.",
            portfolio_case_study_link: "Studium Przypadku →",
            portfolio_more_projects_btn: "Więcej Projektów",

            // Testimonial Section
            testimonial_title: "Referencje",
            testimonial_intro_p: "Współpraca z ThoReSt była fantastycznym doświadczeniem. Ich dbałość o szczegóły i zaangażowanie w jakość przerosło nasze oczekiwania.",
            testimonial_quote: "„Od początkowych konsultacji do końcowej realizacji, każdy etap był prowadzony profesjonalnie. Efektem końcowym był produkt, który nie tylko spełnił nasze potrzeby, ale także zrobił wrażenie na naszych interesariuszach. Gorąco polecam!”",
            testimonial_author_title: "Danier02",

            // Call to Action Section
            cta_title: "Masz pomysł na projekt? <br> Porozmawiajmy o nim!",
            cta_description: "Zawsze jestem otwarty na dyskusję o nowych projektach i kreatywnych pomysłach. Skontaktujmy się i stwórzmy coś niesamowitego razem.",
            cta_btn: "Pracujmy Razem →",

            // Contact Section
            contact_info_title: "Porozmawiajmy o Twoim Projekcie",
            contact_info_p: "Jestem dostępny do pracy jako freelancer. Napisz do mnie, jeśli masz projekt, do którego mógłbym pasować.",
            contact_address_heading: "Adres:",
            contact_email_heading: "Mój E-mail:",
            contact_phone_heading: "Zadzwoń Teraz:",
            contact_form_intro_p: "Zawsze jestem otwarty na rozmowy o projektowaniu produktów lub możliwościach partnerstwa.",
            contact_form_name_placeholder: "Imię*",
            contact_form_email_placeholder: "E-mail*",
            contact_form_location_placeholder: "Lokalizacja*",
            contact_form_budget_placeholder: "Budżet*",
            contact_form_subject_placeholder: "Temat*",
            contact_form_message_placeholder: "Wiadomość*",
            contact_form_submit_btn: "Wyślij →",

            // Footer
            footer_copyright: "Prawa autorskie"
        }
    };

    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLanguage = localStorage.getItem('lang') || 'en'; // Get saved language or default to English

    // Function to apply translations
    function applyTranslations(lang) {
        // Translate elements with data-translate-key
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translations[lang] && translations[lang][key]) {
                // Use innerHTML for text that might contain HTML tags (like <br> or <span>)
                element.innerHTML = translations[lang][key];
            }
        });

        // Translate placeholders
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        // Translate the page title specifically
        const pageTitleElement = document.querySelector('title[data-translate-key="page_title"]');
        if (pageTitleElement && translations[lang] && translations[lang].page_title) {
            document.title = translations[lang].page_title;
        }

        // Update active class on language buttons
        langButtons.forEach(button => {
            button.classList.remove('active');
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            }
        });
    }

    // Event listeners for language switcher buttons
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentLanguage = button.dataset.lang;
            localStorage.setItem('lang', currentLanguage); // Save preferred language
            applyTranslations(currentLanguage);
        });
    });

    // Apply translations on page load
    applyTranslations(currentLanguage);
});
