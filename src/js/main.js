


// ---- REMPLACER toogle par un if (add & remove class)

/*if (button && main){
    button.addEventListener("click", open);
    function open(event){
       if (main.classList.contains("is-opened")){
           main.classList.remove("is-opened");
       } else {
           main.classList.add("is-opened");
       }
    }
}*/

const burgerMenu={
    stockElements(){
        this.main = document.querySelector('.main');
        this.button = document.querySelector('.nav-button');
    },
    init(){
        document.documentElement.classList.add('js-enabled');
        this.stockElements();
        this.addEventListeners();
    },
    addEventListeners(){
        this.button.addEventListener('click', () =>{
            this.main.classList.toggle('is-opened');
        });
    }
};
burgerMenu.init();

/*
---- VERSION SIMPLE avec Toogle ----

navButton.addEventListener('click', openNav);

function openNav(event){
    document.querySelector('main').classList.toggle('is-opened');
};

---- VERSION SMART avec Toogle ----

if (button && main){
  button.addEventListener("click", open);
  function open(event){
   main.classList.toggle('is-opened');
  }
}

*/