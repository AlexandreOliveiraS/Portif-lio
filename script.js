
function escrevendoLetra(){
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML  = '';
        arrTexto.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra; 
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
} 

escrevendoLetra()

function ativacaoMenu(){
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')


    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-x')
        navMenu.classList.toggle('ativado')
    })
}

ativacaoMenu()

function sobreMim(){
    const DivExperiencia = document.querySelectorAll('.experience_content div');
    const liExperiencia = document.querySelectorAll('.experience_content ul li')
    const DivEducation = document.querySelectorAll('.education_content div');
    const liEducation = document.querySelectorAll('.education_content ul li')


    function slideShow(index){
        DivExperiencia.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liExperiencia.forEach((item)=>{
            item.classList.remove('ativo');
        });
        DivExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    }

   function slideShow2(index){
        DivEducation.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liEducation.forEach((item)=>{
            item.classList.remove('ativo');
        });
        DivEducation[index].classList.add('ativo');
        liEducation[index].classList.add('ativo');
    }
    
    liExperiencia.forEach((event,index)=> {
        event.addEventListener('click', ()=>{
            slideShow(index)
        });
    });

     liEducation.forEach((event,index)=> {
        event.addEventListener('click', ()=>{
            slideShow2(index)
        });
    });

}
sobreMim();