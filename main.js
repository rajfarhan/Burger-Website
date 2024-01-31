const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeicon= document.getElementById('nav-close');
const navLink= document.querySelectorAll(".nav__link")

navLink.forEach(link => 
    link.addEventListener("click", () => {
        navMenu.classList.add("hidden")
    })
)

closeicon.addEventListener("click", () => {
    navMenu.classList.add('hidden')
})

hamburger.addEventListener("click", () => {
    navMenu.classList.remove('hidden')

})

const tabs = document.querySelectorAll(".tabs__wrap ul li");
const all = document.querySelectorAll('.item_wrap');
const foods = document.querySelectorAll('.food');
const beverages = document.querySelectorAll('.beverage');
const snacks  = document.querySelectorAll('.snacks');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })
        tab.classList.add('active') 

        const tabval = tab.getAttribute('data-tabs')
        // console.log(tabval)
         
        all.forEach(items => {
            items.style.display = 'none'
        })

        if (tabval == 'food'){
            foods.forEach(items => {
                items.style.display = 'block'
            })
        }
        else if (tabval == 'snacks'){
            snacks.forEach(items => {
                items.style.display = 'block'
            })
        }
        else if (tabval == 'beverage'){
            beverages.forEach(items => {
                items.style.display = 'block'
            })
        }
        else{             
            all.forEach(items => {
            items.style.display = 'block'
        })

        }


    })
    
})


// scrollup 
const scrollup = () => {
    const scrollupbtn = document.getElementById("scroll-up");

    if(this.scrollY >= 250){
        scrollupbtn.classList.remove("-bottom-1/2");
        scrollupbtn.classList.add("bottom-4");
    }else{
        scrollupbtn.classList.add("-bottom-1/2");
        scrollupbtn.classList.remove("bottom-4");
    
    }
}

window.addEventListener("scroll",scrollup)


/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") == "dark") {
    darkMode();
  } else {
    lightMode();
  }
  
  themeBtn.addEventListener("click", (e) => {
    if (localStorage.getItem("mode") == "light") {
      darkMode();
    } else {
      lightMode();
    }
  });
  
  function darkMode() {
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", "dark");
  }
  
  function lightMode() {
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", "light");
  }


//   active link 

const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav__link");
  
    let current = "home";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
  
      if (this.scrollY >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });
  
    navLinks.forEach((item) => {
      item.classList.remove("text-secondaryColor");
      if (item.href.includes(current)) {
        item.classList.add("text-secondaryColor");
      }
    });
  };
  
  window.addEventListener('scroll', activeLink)



  /*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
  })
  
  sr.reveal(".home__image");
  sr.reveal(".home__content",  { origin: "bottom" });
  
  sr.reveal(".category__card", { interval: 300 })
  
  sr.reveal(".promo__card-1",  { origin: "left" });
  sr.reveal(".promo__card-2",  { origin: "right" });
  
  sr.reveal(".about__img",  { origin: "bottom" });
  sr.reveal(".about__content",  { origin: "top" });
  
  sr.reveal(".menu__items",  { origin: "left" });
  
  sr.reveal(".customer__review",  { origin: "right" });
  
  sr.reveal(".footer");
  