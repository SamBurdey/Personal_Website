//Scrolling Function @ https://stackoverflow.com/questions/15935318/smooth-scroll-to-top?answertab=scoredesc#tab-top

// When the user scrolls down 30px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

// Checks if Button should be visible
function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("gotoTop").style.display = "block";
    } else {
        document.getElementById("gotoTop").style.display = "none";
    }
   
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}