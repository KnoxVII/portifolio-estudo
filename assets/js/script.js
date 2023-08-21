function escrevendoLetra() {
  function ativaLetra(elemento) {
    const arrayTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrayTexto.forEach((letra, i)=>{
      setTimeout(()=>{
        elemento.innerHTML += letra;
      }, 75 * i);
    }); 
  }
  
  const titulo = document.querySelector('.digitando');
  ativaLetra(titulo);
}

const ativaMenu = document.querySelector('.fa-bars');
ativaMenu.addEventListener('click',()=>{
  ativaMenu.classList.toggle('fa-x');
})

