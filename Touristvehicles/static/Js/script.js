/* ===================== PACKAGE CARDS ===================== */
const cards = document.querySelectorAll(".cards");
const packageSection = document.querySelector(".packagesection_first");

const packageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            cards.forEach((card, index) => {
                card.classList.remove("animate__animated", "animate__bounceInUp");

                setTimeout(() => {
                    card.classList.add(
                        "animate__animated",
                        "animate__bounceInUp"
                    );
                    card.style.opacity = "1";
                }, index * 200);
            });
        } else {
            cards.forEach(card => {
                card.classList.remove("animate__animated", "animate__bounceInUp");
                card.style.opacity = "0";
            });
        }
    });
}, { threshold: 0.2 });

packageObserver.observe(packageSection);

/* ===================== MAP + CONTACT ===================== */

const map = document.querySelector(".home_section_map");
const form = document.querySelector(".home_contact_us");
const contactSection = document.querySelector(".home_contact_map_section");

const contactObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            // reset first (important for retrigger)
            map.classList.remove("animate__animated", "animate__fadeInLeft");
            form.classList.remove("animate__animated", "animate__fadeInRight");

            setTimeout(() => {
                map.classList.add("animate__animated", "animate__fadeInLeft");
                map.style.opacity = "1";
            }, 0);

            setTimeout(() => {
                form.classList.add("animate__animated", "animate__fadeInRight");
                form.style.opacity = "1";
            }, 200);

        } else {
            // reset when leaving viewport
            map.classList.remove("animate__animated", "animate__fadeInLeft");
            form.classList.remove("animate__animated", "animate__fadeInRight");

            map.style.opacity = "0";
            form.style.opacity = "0";
        }
    });
}, { threshold: 0.2 });

if (contactSection && map && form) {
    contactObserver.observe(contactSection);
}

document.addEventListener("DOMContentLoaded", function () {

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(
                    "animate__animated",
                    "animate__bounceInUp"
                );
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll(".animate-on-scroll").forEach(card => {
        observer.observe(card);
    });

});