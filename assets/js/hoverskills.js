// SKILLS JS SECTION

export function hover(nameCard, text) {
    var changeDescription = document.querySelector(".changeDescription");

    document.querySelector(nameCard).addEventListener("mouseover", () => {
        changeDescription.innerHTML = text;
    });

    document.querySelector(nameCard).addEventListener("mouseout", () => {
        changeDescription.innerHTML = `// Passe o mouse por cima para ver`;
    });
}


