const button = document.getElementById("wishButton");
const message = document.getElementById("wishMessage");

button.addEventListener("click", () => {

    message.textContent =
        "Wish officially sent to the universe. ✨";

    button.textContent = "Wish sent ✓";

    button.disabled = true;

    createConfetti();
});


function createConfetti() {

    for (let i = 0; i < 70; i++) {

        const piece = document.createElement("div");

        piece.style.position = "fixed";
        piece.style.left = "50%";
        piece.style.top = "55%";

        piece.style.width = "8px";
        piece.style.height = "14px";

        piece.style.background =
            i % 2 === 0 ? "#ff78a8" : "#b58cff";

        piece.style.borderRadius = "2px";

        piece.style.zIndex = "999";

        piece.style.pointerEvents = "none";


        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            120 + Math.random() * 320;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;


        document.body.appendChild(piece);


        const animation = piece.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        rotate(${Math.random() * 720}deg)`,

                    opacity: 0
                }
            ],
            {
                duration:
                    1000 + Math.random() * 900,

                easing:
                    "cubic-bezier(.2,.7,.2,1)"
            }
        );


        animation.onfinish = () => {
            piece.remove();
        };
    }
}