document.addEventListener("DOMContentLoaded", () => {
    // =========================
    // SCREENS
    // =========================

    const screenOne = document.getElementById("screenOne");
    const screenTwo = document.getElementById("screenTwo");
    const screenThree = document.getElementById("screenThree");
    const screenFour = document.getElementById("screenFour");

    // =========================
    // BUTTONS & MODAL
    // =========================

    const continueBtn = document.getElementById("continueBtn");
    const yesBtn = document.getElementById("yesBtn");
    const thinkBtn = document.getElementById("thinkBtn");

    const thinkModal = document.getElementById("thinkModal");
    const closeModal = document.getElementById("closeModal");
    const modalYesBtn = document.getElementById("modalYesBtn");
    const modalCloseBtn = document.getElementById("modalCloseBtn");

    const persuasionYesBtn = document.getElementById("persuasionYesBtn");
    const persuasionStayBtn = document.getElementById("persuasionStayBtn");

    const whatsappBtn = document.getElementById("whatsappBtn");

    // =========================
    // SCREEN 1 → SCREEN 2
    // =========================

    continueBtn.addEventListener("click", () => {
        screenOne.style.display = "none";
        screenTwo.classList.add("show");

        scrollToTop();
    });

    // =========================
    // YES → SCREEN 3
    // =========================

    yesBtn.addEventListener("click", showSuccessScreen);

    // =========================
    // THINK → MODAL
    // =========================

    thinkBtn.addEventListener("click", () => {
        thinkModal.classList.add("show");
    });

    // =========================
    // CLOSE MODAL
    // =========================

    closeModal.addEventListener("click", closeThinkModal);

    // =========================
    // MODAL → SCREEN 3
    // =========================

    modalYesBtn.addEventListener("click", () => {
        closeThinkModal();
        showSuccessScreen();
    });

    // =========================
    // MODAL → SCREEN 4
    // =========================

    modalCloseBtn.addEventListener("click", () => {
        closeThinkModal();

        screenTwo.style.display = "none";
        screenFour.classList.add("show");

        scrollToTop();
    });

    // =========================
    // SCREEN 4 → SCREEN 3
    // =========================

    persuasionYesBtn.addEventListener("click", showSuccessScreen);

    // =========================
    // SCREEN 4 → STAY
    // =========================

    persuasionStayBtn.addEventListener("click", () => {
        persuasionStayBtn.innerHTML =
            'No pressure <i class="fa-regular fa-heart"></i>';

        persuasionStayBtn.disabled = true;
    });

    // =========================
    // SUCCESS SCREEN
    // =========================

    function showSuccessScreen() {
        screenOne.style.display = "none";
        screenTwo.style.display = "none";
        screenFour.style.display = "none";

        closeThinkModal();

        screenThree.classList.add("show");

        createConfetti();
        scrollToTop();
    }

    // =========================
    // CONFETTI
    // =========================

    function createConfetti() {
        const container = document.getElementById("confettiContainer");

        container.innerHTML = "";

        const pieces = 35;

        for (let i = 0; i < pieces; i++) {
            const piece = document.createElement("span");

            piece.classList.add("confetti");

            piece.style.left = `${Math.random() * 100}%`;
            piece.style.animationDuration = `${3 + Math.random() * 3}s`;
            piece.style.animationDelay = `${Math.random() * 1.5}s`;

            container.appendChild(piece);
        }
    }

    // =========================
    // WHATSAPP
    // =========================

    whatsappBtn.addEventListener("click", () => {
        const whatsappGroupLink = "#";

        window.open(whatsappGroupLink, "_blank");
    });

    // =========================
    // HELPERS
    // =========================

    function closeThinkModal() {
        thinkModal.classList.remove("show");
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});