$(document).ready(function() {
  $(".items").hide();

  // NAVBAR
  var count = 0;
  $(".cst-toggle").click(function() {
    
    count++;

    if (count % 2 == 0)
    {
      $(".item4").animate(
        {
          opacity:'toggle'
        }
      ,200,function(){
        $(".item3").animate(
          {
            opacity:'toggle'
          }
        ,200,function(){
          $(".item2").animate(
            {
              opacity:'toggle'
            }
          ,200,function(){
            $(".item1").animate(
              {
                opacity:'toggle'
              }
            ,200);
          });
        });
      });
      
    }

    else { 
      $(".item1").animate(
        {
          opacity:'toggle'
        }
      ,200,function(){
        $(".item2").animate(
          {
            opacity:'toggle'
          }
        ,200,function(){
          $(".item3").animate(
            {
              opacity:'toggle'
            }
          ,200,function(){
            $(".item4").animate(
              {
                opacity:'toggle'
              }
            ,200);
          });
        });
      });
    }
    
    

      $("#phone").click(function(){
      // $("#about-overlay").show("slow","swing");
      $("#about-overlay").animate({
        opacity:1,
        left:"0vw",
        
        width:"100vw",
      },"slow");
      console.log("test");
      });
      $(".close-button").click(function(){
      // $("#about-overlay").hide("slow","swing");
      $("#about-overlay").animate({
        left:"100vw",
        opacity:0,
       
        width:"0vw"
      },"slow");
      });
      $("#suitcase").click(function(){
        $("#form").animate({
          opacity:1,
          left:"0vw",
          
          width:"100vw",
        },"slow");
      });
      $("#cls").click(function(){
        $("#form").animate({
          left:"100vw",
        opacity:0,
       
        width:"0vw"
        },"slow");
      });

   
  });

  // $(".trap-logo").click(function() {
  //   $(".fb").fadeOut();
  //   $(".insta").fadeOut();
  //   $(".items").fadeOut();
  //   $(".cst-toggle").fadeOut();

  //   //$(".btn-container").css("width", "200%");

  //   $(".trap-logo").animate({
  //     left: $(window).width() / 3.3
  //     // height: "200%",
  //     // width: "200%"
  //   });
  
  // contact form jquery
  $('.flip').click(function(){
    $('.cont-flip').toggleClass('flipped');
    return false;
  });


});
