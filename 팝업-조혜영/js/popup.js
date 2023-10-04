$(function(){
  if($.cookie("pop") != "no") $(".pop_wrap").show();
  $(".pop_wrap").css("cursor","move").draggable();
  $(".pop_wrap area:eq(0)").on("click",function(){
  $(".pop_wrap").fadeOut("fast");   
});

$(".pop_wrap area:eq(1)").on("click",function(){
  $.cookie("pop","no",{expires:1});    
  //클릭한 경우 쿠키의 value값을 no로 setting
  $(".pop_wrap").fadeOut("fast"); 
}); 
});