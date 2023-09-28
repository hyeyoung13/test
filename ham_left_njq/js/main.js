$(function(){
    $( ".hamburger" ).click(function() {
        $(".menu").animate({marginLeft:"200px"}, 300);
     });	
    
     $(".menu >ul >li> a").click(function(){
        if($(this).next().is(":visible"))
        {
            $(this).next().stop().slideUp(500);
            $(this).children("img").attr("src","img/arrow-down.png");
        }else{
            $(".sub").stop().slideUp(500);
        $(".menu >ul >li> a").children("img").attr("src","img/arrow-down.png");
            $(this).next().stop().slideDown(500);
            $(this).children("img").attr("src","img/arrow-up.png");   
        }
     }); 
     
     $( ".cross" ).click(function() {
        $(".menu").animate({marginLeft:"0"}, 300);
   });

});