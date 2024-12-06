document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("menu-toggler").addEventListener("click", function () {
      toggleBodyClass("menu-active");
    });
  
    function toggleBodyClass(className) {
      document.body.classList.toggle(className);
    }
  });
  

let a = document.getElementById("form-toggle");
let b = document.getElementById("main-form");
let check = 0;

a.addEventListener("click", function () {
    if (check === 0) {
        b.style.display = "block"; 
        b.classList.add("form-drop-animation"); 
        a.innerHTML = "Close Form";
        check = 1;
    } else {
        b.style.display = "none"; 
        b.classList.remove("form-drop-animation"); 
        a.innerHTML = "Contact Us";
        check = 0;
    }
});


