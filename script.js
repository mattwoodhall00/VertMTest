document.addEventListener("DOMContentLoaded", function () {
//mobile nav menu variables
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const navMenu = document.querySelector(".nav-menu");
  const overlay = document.querySelector(".overlay");
  navMenu.style.display = "none";

  // Toggle the menu visibility on click - mobile view
  hamburgerIcon.addEventListener("click", function () {
    navMenu.classList.toggle("open");
    overlay.classList.toggle("open");
    if (navMenu.classList.contains("open")) {
      navMenu.style.display = "block";
    } else {
      navMenu.style.display = "none";
    }
  });

 
  //feature to change the button text from "Personalised video" to "book a test drive" as per the designs
  function changeTopFeatureBtnText(){
    const topFeatureBtn = document.querySelector(".personalised-video-btn");
    if(checkBreakpoint() == "mobile"){
      topFeatureBtn.innerHTML = "Book a test drive";
    }else{
      topFeatureBtn.innerHTML = "Request a Personalised Video";
    }
  }
 
  
  function checkBreakpoint() {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const breakpoint = 768;
  
    if (windowWidth < breakpoint) {
      return "mobile"
    } else {
      return "desktop"
    }
  }

  // Attach the event listener to the 'resize' event of the window to call the btn text change function "changeTopFeatureBtnText"
window.addEventListener('resize', changeTopFeatureBtnText);

});
