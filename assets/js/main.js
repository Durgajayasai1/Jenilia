const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav__close');

if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add('show-sidebar');
    })
}

if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove('show-sidebar');
    })
}

const sidebarLinks = document.querySelectorAll('#sidebar a');

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-sidebar');
    });
});

const tabs = document.querySelectorAll('[data-target]'), tabcontent = document.querySelectorAll('[data-content]');

tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
        const target=document.querySelector(tab.dataset.target);

        tabcontent.forEach(tabcontents=>{
            tabcontents.classList.remove('skills__active');
        })

        target.classList.add('skills__active');

        tabs.forEach(tab=>{
            tab.classList.remove('skills__active');
        })

        tab.classList.add('skills__active');
    })
})

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

const linkwork = document.querySelectorAll('.work__item');

function activework(){
    linkwork.forEach(l=>l.classList.remove('active__work'));
    this.classList.add('active__work');
}

linkwork.forEach(l=>l.addEventListener("click", activework));

document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("work__button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
});

function togglePortfolioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click",togglePortfolioPopup);

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value==""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input)=>{
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})
