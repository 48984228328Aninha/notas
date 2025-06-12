function calcular() {
    const nota = document.getElementById("nota1").value;
    const nota1 = document.getElementById("nota2").value;
    const nota2 = document.getElementById("nota3").value;
    
        const media = (parseFloat(nota) + parseFloat(nota1) + parseFloat(nota2)) / 3;
        alert("A média é: " + media);
        return;
    }
if (isNaN(media)) {
        alert("Insira números válidos");
        return;
}
else {
    const nota = parseFloat(document.getElementById("nota1").value);
    const nota1 = parseFloat(document.getElementById("nota2").value);
    const nota2 = parseFloat(document.getElementById("nota3").value);
    const media = (nota + nota1 + nota2) / 3;

    if (isNaN(media)) {
        alert("Insira números válidos");
        return;
    }
    else {
        alert("A média é: " + media);
    }
    if (nota > 0 && nota <= 10 && nota1 > 0 && nota1 <= 10 && nota2 > 0 && nota2 <= 10) {
        alert("Notas válidas");
    }

    if (nota === "" || nota1 === "" || nota2 === "") {
        alert("Por favor, preencha pelo menos uma nota.");
        return;
    } else if (media >= 18 && media <= 30) {
        alert("Aprovado");
    } else if (media < 18 && media >= 0) {
        alert("Reprovado");
    } else {
        alert("Notas inválidas");
    }


    document.getElementById("calcular").addEventListener("input", calcular);
    calcular();
    //Exemplo de uso:
    // calcular();
    // const nota1 = 20;
    // const nota2 = 15;
    // const nota3 = 25;
    // const media = calcularMedia(nota1, nota2, nota3);
    // console.log("A média é: " + media);
    //function calcularMedia(nota1, nota2, nota3 ) {
    //     return (nota1 + nota2 + nota3) / 3;
    // }
//     const notas = [nota1, nota2, nota3];
//     const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
//     console.log("A média é: " + media);
}
//exemplos de como criar um objeto não literal


