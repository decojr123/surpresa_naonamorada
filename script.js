function mostrarSurpresa() {
const surpresa = document.getElementById("surpresa");
surpresa.classList.remove("hidden");

const musica = document.getElementById("musica");
musica.play();

const imagens = [
"Imagens/foto1.jpeg",
"Imagens/foto2.jpeg",
"Imagens/foto3.jpeg",
"Imagens/foto4.jpeg",
"Imagens/foto5.jpeg",
"Imagens/foto6.jpeg",
"Imagens/foto7.jpeg",
"Imagens/foto8.jpeg",
"Imagens/foto9.jpeg",
"Imagens/foto10.jpeg",
"Imagens/foto12.jpeg",
"Imagens/foto13.jpeg",
"Imagens/foto14.jpeg",
"Imagens/foto15.jpeg",
"Imagens/foto16.jpeg",
"Imagens/foto17.jpeg",
"Imagens/foto18.jpeg",
// Adicione mais se quiser
];

let index = 0;
const img = document.getElementById("imagem-carrossel");

setInterval(() => {
index = (index + 1) % imagens.length;
img.src = imagens[index];
}, 3000); // troca a imagem a cada 3 segundos
}