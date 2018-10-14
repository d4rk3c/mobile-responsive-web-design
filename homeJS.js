
 function roadHelp() {
     var modal = document.getElementById('myModal');
    var image = document.getElementById('modalImg');
     var btn = document.getElementById("myBtn");
     var span = document.getElementsByClassName("close")[0];

     image.addEventListener('click', function () {
         modal.style.display = "block";
     })
    span.onclick = function () {
         modal.style.display = "none";
     }
    // When the user clicks anywhere outside of the modal, close it
     window.onclick = function (event) {
       if (event.target == modal) {
          modal.style.display = "none";
         }
     }
 }
 roadHelp()

// $(document).ready(function(){
//     $("#openup").click(function(){
//         $("ul").slideToggle("slow");
//     });
// });

// Responsive Nav
$(function() {
    menu = $('nav ul');
  
    $('#openup').on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });
  
    $(window).resize(function() {
      var w = $(this).width();
      if (w > 480 && menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  
    $('nav li').on('click', function(e) {
      var w = $(window).width();
      if (w < 480) {
        menu.slideToggle();
      }
    });
    $('.open-menu').height($(window).height());
  });
  
  // Smooth Scrolling
  $('.cf a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });


  