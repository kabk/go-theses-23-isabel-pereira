
document.addEventListener("DOMContentLoaded", function() {
    var sups = document.querySelectorAll("sup.footnote a");
    for (var i = 0; i < sups.length; i++) {
      var sup = sups[i];
      var id = sup.getAttribute("href").substr(1);
      var footnote = document.getElementById(id);
      if (footnote) {
        footnote.style.display = "none";
        sup.addEventListener("click", function(event) {
          event.preventDefault();
          footnote.style.display = "block";
          footnote.scrollIntoView();
        });
        var returnLink = footnote.querySelector("a[href='#fn1return']");
        if (returnLink) {
          returnLink.addEventListener("click", function(event) {
            event.preventDefault();
            sup.scrollIntoView();
          });
        }
      }
    }
  });

  

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
