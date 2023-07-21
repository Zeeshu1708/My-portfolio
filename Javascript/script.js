/* ============== Typing animation   ==================*/
var typed = new Typed(".typing", {
    strings: ["", "Frontend Web Developer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

/* ============== Aside   ==================*/
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavlist = navList.length,
    allSections = document.querySelectorAll(".section"),
    totalSections = allSections.length;
for (let i = 0; i < totalNavlist; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavlist; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
                // allSections[j].classList.add("backsection");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerbtn();
        }
    })
}
function removeBackSection(){
    for (let i = 0; i < totalSections; i++) {
        allSections[i].classList.remove("backsection");
    }
}
function addBackSection(num) {
    allSections[num].classList.add("backsection");
}

function showSection(element) {
    for (let i = 0; i < totalSections; i++) {
        allSections[i].classList.remove("active");
    }
    const target = (element.getAttribute("href").split("#")[1]);
    document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
    for (let i = 0; i < totalNavlist; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = (element.getAttribute("href").split("#")[1]);
        if (target === ( navList[i].querySelector("a").getAttribute("href").split("#")[1])) {
            navList[i].querySelector("a").classList.add("active");
        }
        
    }
}
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    // console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav_toggler"),
      aside = document.querySelector(".aside");
      navTogglerBtn.addEventListener("click",() => {
        asideSectionTogglerbtn();
      })
      function asideSectionTogglerbtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for (let i = 0; i < totalSections; i++) {
            allSections[i].classList.toggle("open");     
        }
      }
      {
        window.addEventListener("DOMContentLoaded", function () {
          // get the form elements defined in your form HTML above
      
          var form = document.getElementById("my-form");
          var status = document.getElementById("status");
      
          // Success and Error functions for after the form is submitted
      
          function success() {
            form.reset();
            status.classList.add("success");
            status.innerHTML = "Thanks for sending message!";
          }
      
          function error() {
            status.classList.add("error");
            status.innerHTML = "Oops! There was a problem.";
          }
      
          // handle the form submission event
      
          form.addEventListener("submit", function (ev) {
            ev.preventDefault();
            var data = new FormData(form);
            ajax(form.method, form.action, data, success, error);
          });
        });
      
        // helper function for sending an AJAX request
      
        function ajax(method, url, data, success, error) {
          var xhr = new XMLHttpRequest();
          xhr.open(method, url);
          xhr.setRequestHeader("Accept", "application/json");
          xhr.onreadystatechange = function () {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
              success(xhr.response, xhr.responseType);
            } else {
              error(xhr.status, xhr.response, xhr.responseType);
            }
          };
          xhr.send(data);
        }
      }