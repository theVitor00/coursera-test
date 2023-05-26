const clicaBotao = document.querySelector("#btn");

clicaBotao.addEventListener("click", (e) => {
    e.preventDefault();
    const ola = document.querySelector("#inserir");
    const saudacao = ola.value;
    alert(saudacao);
    console.log(saudacao);
    
});
