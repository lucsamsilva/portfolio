// SKILLS JS SECTION
var skillsItens = document.querySelector(".item");



// gerar uma atribução pra namecard e text

function hover(nameCard, text) {
    var changeDescription = document.querySelector(".changeDescription");

    document.querySelector(nameCard).addEventListener("mouseover", () => {
        changeDescription.innerHTML = text;
    });

    document.querySelector(nameCard).addEventListener("mouseout", () => {
        changeDescription.innerHTML = `// Passe o mouse por cima para ver`;
    });
}


hover(
    ".contweb",
    `Realizei o estágio na ContWeb, uma empresa de contabilidade. 
    Onde pela primeira vez tive experiência com o React. Além do
    desenvolvimento frontend criei os designs da nova plataforma da empresa.`
);

skillsItens.addEventListener("mouseover", hover);




