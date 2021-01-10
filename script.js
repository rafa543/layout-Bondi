let botaoToggle = document.querySelector('#menu-toggle');
let navMenu = document.querySelector('#menu');


botaoToggle.addEventListener('click', function(){

    navMenu.classList.toggle('show')    

})

function scroolSuave(){
    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
        const topo = section.offsetTop;
    
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth'
        // })
    }
    
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    });
}

scroolSuave();

function initAnimacaoScroll(){
    const sections = document.querySelectorAll('.js-scroll');
    if(sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScrool(){
            sections.forEach( (section) => {
                const sectionTop = section.getBoundingClientRect().top - windowMetade;
                const isSectionVisible = sectionTop - windowMetade;
                if(sectionTop < 0 ){
                    section.classList.add('ativo')
                }
            })
        }
        animaScrool()
        window.addEventListener('scroll', animaScrool)
    }
}

initAnimacaoScroll()