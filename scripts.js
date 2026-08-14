document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       PHOTO SLIDER
    ========================== */

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        dots.forEach((dot) => {
            dot.classList.remove("active");
        });

        slides[index].classList.add("active");
        dots[index].classList.add("active");
    }

    function nextSlide() {
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);


    /* =========================
       GET SCREENS
    ========================== */

    const screenOne = document.getElementById("screenOne");
    const screenTwo = document.getElementById("screenTwo");
    const screenThree = document.getElementById("screenThree");
    const screenFour = document.getElementById("screenFour");


    /* =========================
       GET BUTTONS
    ========================== */

    const continueBtn = document.getElementById("continueBtn");
    const yesBtn = document.getElementById("yesBtn");
    const thinkBtn = document.getElementById("thinkBtn");

    const closeModal = document.getElementById("closeModal");
    const modalYesBtn = document.getElementById("modalYesBtn");
    const modalCloseBtn = document.getElementById("modalCloseBtn");

    const persuasionYesBtn =
        document.getElementById("persuasionYesBtn");

    const persuasionStayBtn =
        document.getElementById("persuasionStayBtn");

    const whatsappBtn =
        document.getElementById("whatsappBtn");

    const thinkModal =
        document.getElementById("thinkModal");


    /* =========================
       SCREEN 1 → SCREEN 2
    ========================== */

    continueBtn.addEventListener("click", () => {

        screenOne.style.display = "none";
        screenTwo.classList.add("show");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =========================
       SCREEN 2 → SCREEN 3
       YES I'M IN
    ========================== */

    yesBtn.addEventListener("click", () => {

        showSuccessScreen();

    });


    /* =========================
       SCREEN 2 → MODAL
       LET ME THINK
    ========================== */

    thinkBtn.addEventListener("click", () => {

        thinkModal.classList.add("show");

    });


    /* =========================
       CLOSE MODAL
       X BUTTON
    ========================== */

    closeModal.addEventListener("click", () => {

        thinkModal.classList.remove("show");

    });


    /* =========================
       MODAL → SCREEN 4
       I'LL THINK ABOUT IT
    ========================== */

    modalCloseBtn.addEventListener("click", () => {

        thinkModal.classList.remove("show");

        screenTwo.style.display = "none";

        screenFour.classList.add("show");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =========================
       MODAL → SCREEN 3
       OKAY OKAY, I'M IN
    ========================== */

    modalYesBtn.addEventListener("click", () => {

        thinkModal.classList.remove("show");

        showSuccessScreen();

    });


    /* =========================
       SCREEN 4 → SCREEN 3
       YES I'M IN
    ========================== */

    persuasionYesBtn.addEventListener("click", () => {

        showSuccessScreen();

    });


    /* =========================
       SCREEN 4
       STILL NEED TIME
    ========================== */

    persuasionStayBtn.addEventListener("click", () => {

        persuasionStayBtn.innerHTML =
            'No pressure <i class="fa-regular fa-heart"></i>';

        persuasionStayBtn.disabled = true;
    });


    /* =========================
       SHOW SCREEN 3
    ========================== */

    function showSuccessScreen() {

        screenOne.style.display = "none";
        screenTwo.style.display = "none";
        screenFour.style.display = "none";

        thinkModal.classList.remove("show");

        screenThree.classList.add("show");

        createConfetti();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* =========================
       CONFETTI
    ========================== */

    function createConfetti() {

        const container =
            document.getElementById("confettiContainer");

        container.innerHTML = "";

        const pieces = 35;

        for (let i = 0; i < pieces; i++) {

            const piece = document.createElement("span");

            piece.classList.add("confetti");

            piece.style.left =
                `${Math.random() * 100}%`;

            piece.style.animationDuration =
                `${3 + Math.random() * 3}s`;

            piece.style.animationDelay =
                `${Math.random() * 1.5}s`;

            container.appendChild(piece);

        }

    }


    /* =========================
       WHATSAPP
    ========================== */

    whatsappBtn.addEventListener("click", () => {

        const whatsappGroupLink =
            "PASTE_WHATSAPP_GROUP_LINK_HERE";

        window.open(
            whatsappGroupLink,
            "_blank"
        );

    });

});