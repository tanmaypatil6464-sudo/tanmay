document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // ELEMENTS
    // ========================================

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.querySelector(".navbar");
    const startBtn = document.getElementById("startBtn");
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");


    // ========================================
    // MOBILE NAVIGATION
    // ========================================

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", () => {
            navbar.classList.toggle("active");

            // Change menu icon
            if (navbar.classList.contains("active")) {
                menuBtn.textContent = "✕";
            } else {
                menuBtn.textContent = "☰";
            }
        });


        // Close menu after clicking a navigation link
        const navLinks = navbar.querySelectorAll("a");

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navbar.classList.remove("active");
                menuBtn.textContent = "☰";
            });
        });
    }


    // ========================================
    // GET STARTED BUTTON
    // ========================================

    if (startBtn) {

        startBtn.addEventListener("click", () => {

            const servicesSection =
                document.getElementById("services");

            if (servicesSection) {
                servicesSection.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    }


    // ========================================
    // CONTACT FORM
    // ========================================

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            // Prevent page refresh
            event.preventDefault();

            // Get form values
            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();


            // Basic validation
            if (name === "" || email === "" || message === "") {

                formMessage.textContent =
                    "Please fill in all fields.";

                formMessage.style.color = "#dc2626";

                return;
            }


            // Email validation
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                formMessage.textContent =
                    "Please enter a valid email address.";

                formMessage.style.color = "#dc2626";

                return;
            }


            // Successful submission
            formMessage.textContent =
                `Thank you, ${name}! Your message has been submitted successfully.`;

            formMessage.style.color = "#16a34a";


            // Clear form
            contactForm.reset();

        });
    }


    // ========================================
    // SERVICE BUTTONS
    // ========================================

    const serviceButtons =
        document.querySelectorAll(".service-card .btn");

    serviceButtons.forEach((button, index) => {

        button.addEventListener("click", () => {

            const serviceNumber = index + 1;

            alert(
                `You selected Service ${serviceNumber}.`
            );

        });

    });


    // ========================================
    // CLOSE MOBILE MENU WHEN RESIZING
    // ========================================

    window.addEventListener("resize", () => {

        if (window.innerWidth > 650) {

            if (navbar) {
                navbar.classList.remove("active");
            }

            if (menuBtn) {
                menuBtn.textContent = "☰";
            }
        }

    });

});
