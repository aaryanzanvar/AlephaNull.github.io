// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
  
    // Original:
    // const sectionTop = current.offsetTop - 50;
    //  
    // Alex Turnwall's update:
    // Updated original line (above) to use getBoundingClientRect instead of offsetTop, based on:
    // https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
    // https://newbedev.com/difference-between-getboundingclientrect-top-and-offsettop
    // This allows the use of sections inside a relative parent, which I'm not using here, but needed for a project
    //
    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
    const sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }


  });
}

// Selecting DOM elements 
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close-x");
const nav = document.querySelector("nav");

// listens for click events and when a click occurs a class is created see CSS
hamburger.addEventListener('click', () => {
  nav.classList.add('open-nav');

})

close.addEventListener('click', () => {
  nav.classList.remove('open-nav');

})


//// //////////////////
var rgb = $('nav').css('backgroundColor');
var colors = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
var brightness = 1;

var r = colors[1];
var g = colors[2];
var b = colors[3];

var ir = Math.floor((255-r)*brightness);
var ig = Math.floor((255-g)*brightness);
var ib = Math.floor((255-b)*brightness);

$('#test').css('color', 'rgb('+ir+','+ig+','+ib+')');

