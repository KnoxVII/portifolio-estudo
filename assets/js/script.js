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

escrevendoLetra(); 

function menuMobile() {
  const ativaMenu = document.querySelector('.fa-bars');
  const navMenu = document.querySelector('header .navegacao-primaria');

  ativaMenu.addEventListener('click',()=>{
    ativaMenu.classList.toggle('fa-x');
    navMenu.classList.toggle('ativado');
  });
}

menuMobile();

function sobreMim(){
  const divExperiencia = document.querySelectorAll('.experience_content div');
  const liExperiencia = document.querySelectorAll('.experience_content ul li');
  
  const divEducation = document.querySelectorAll('.education_content div');
  const liEducation = document.querySelectorAll('.education_content ul li');
  
  divExperiencia[0].classList.add('ativo');
  liExperiencia[0].classList.add('ativo');
  divEducation[0].classList.add('ativo');
  liEducation[0].classList.add('ativo');

  function slideShow(index){
    divExperiencia.forEach((div)=>{
      div.classList.remove('ativo')
    });
    liExperiencia.forEach((botao)=>{
      botao.classList.remove('ativo')
    });
    divExperiencia[index].classList.add('ativo')
    liExperiencia[index].classList.add('ativo')
  }

  function slideShow2(index){
    divEducation.forEach((div)=>{
      div.classList.remove('ativo');
    })
    liEducation.forEach((botao)=>{
      botao.classList.remove('ativo')
    })
    divEducation[index].classList.add('ativo')
    liEducation[index].classList.add('ativo')
  }

  liExperiencia.forEach((event, index)=>{
    event.addEventListener('click', ()=>{
      slideShow(index)
    })
  })

  liEducation.forEach((event, index)=>{
    event.addEventListener('click', ()=>{
      slideShow2(index)
    })
  })
}

sobreMim();

const listaAll = document.querySelectorAll('.projects_armazenamento ul li');
const buttomGeral = document.querySelectorAll('.projects_models ul li');
const buttomAll = document.querySelectorAll('.projects_models .all');

function removeClick(index) {
  buttomGeral.forEach((item)=>{
    item.classList.remove('ativo');
  })
  buttomGeral[index].classList.add('ativo');
}

buttomGeral.forEach((item, index)=>{
  item.addEventListener('click', ()=>{
    removeClick(index);
  })
})

function showList(lista, buttom = 'all') {
  lista.forEach((item)=>{
    item.classList.remove('ativo')
  })
  if (buttom == "design") {
    lista[0].classList.add('ativo');
    lista[1].classList.add('ativo');
  }
  if (buttom == "graphic") {
    lista[2].classList.add('ativo');
    lista[3].classList.add('ativo');
  }
  if (buttom == "website") {
    lista[4].classList.add('ativo');
    lista[5].classList.add('ativo');
    lista[6].classList.add('ativo');
    lista[7].classList.add('ativo');
  }
  if (buttom == "all") {
    lista[0].classList.add('ativo');
    lista[1].classList.add('ativo');
    lista[2].classList.add('ativo');
    lista[3].classList.add('ativo');
    lista[4].classList.add('ativo');
    lista[5].classList.add('ativo');
    lista[6].classList.add('ativo');
    lista[7].classList.add('ativo');
  } 
}

buttomGeral.forEach((item)=>{
  item.addEventListener('click', (e)=>{
    let currentButtom = e.target;
    if (currentButtom.classList.contains('all')){
      showList(listaAll);
    }
    if (currentButtom.classList.contains('design')){
      showList(listaAll, 'design');
    }
    if (currentButtom.classList.contains('graphic')){
      showList(listaAll, 'graphic');
    }
    if (currentButtom.classList.contains('website')){
      showList(listaAll, 'website');
    }
    if (currentButtom.classList.contains('all')){
      showList(listaAll, 'all');
    }
  })
})

