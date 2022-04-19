const labels = document.querySelectorAll('.form-control label')

console.log(labels);

labels.forEach(label => {
    
    label.innerHTML = label.innerText //recebe o texto puro
        .split('') //Separar as letras
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) //criando span e tempo
        .join('') //juntar as letras
    console.log(label);
});