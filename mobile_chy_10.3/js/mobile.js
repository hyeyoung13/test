



$(function(){
  
  //슬라이드 켜기
  $(".hm a img" ).click(function() {
    $("#menu").animate({marginleft:"100%"}, 300);
$(".cross").stop().show();
 });	

  //카테고리, 커뮤니티
	$("#mainmm> div:not("+$("ul.navi li a.selected").attr("href")+")").hide();
	$('ul.navi li a').click(function(){
    $('ul.navi li a').removeClass('selected')
		$(this).addClass('selected');
    $('ul.navi li').removeClass('active')
    $(this).parent().addClass('active');
		$("#mainmm div").hide();
  $($(this).attr("href")).show();
   return false;
	});

  
  //서브메뉴
  $("#mm> ul >li:nth-child(n+6):nth-child(-n+11) a").click(function(){ 
    if($(this).next().is(":visible"))
    { $(this).next().stop().slideUp(500);
     $(this).children("img").attr("src","image/plus.png");
    }else{
    $(".sub").stop().slideUp(500);
    $("#mm > ul > li:nth-child(n+6):nth-child(-n+11) a").children("img").attr("src","image/plus.png");
    $(this).next().stop().slideDown(500);
    $(this).children("img").attr("src","image/minus.png");
    };	 
 });

 $( ".cross" ).click(function() {
  $("#menu").animate({marginleft:"0"}, 300);
$( ".hm a img" ).stop().show();
$(".cross").stop().hide();
});
 
});

/*상단공지*/
$(function(){
  const ticker=function()
  {setTimeout(function(){

  $('#ticker li:first').animate( {marginTop: '-40px'}, 400, function()
    {
    $(this).detach().appendTo('ul#ticker').removeAttr('style');
    });
    ticker();
  },3000); 
}; 
   ticker();
});




// 메인배너 슬라이드
let slideWrapper = $('.slidewrapper'),
    slides = slideWrapper.find('li'),
    currentIdx = 0,
    timer = undefined,
    pager = slideWrapper.find('.pager a');


  pager.click(function(){
    let idx = $(this).index();
    moveSlide(idx);
  });
  
   function moveSlide(i){
     if(currentIdx ===i )return;
     let currentSlide = slides.eq(currentIdx);
     let nextSlide = slides.eq(i);
     nextSlide.css({left:'100%'}).animate({left:'0%'});
     currentSlide.animate({left:'-100%'});
     currentIdx =i;

   
  
  
  
  pager.removeClass('active');
  pager.eq(currentIdx).addClass('active');

}

function autoSlide(){
  if(timer == undefined){
 timer = setInterval(()=>{
  // let ni =(currentIdx + 1)%slides.length;
  let ni = currentIdx + 1;
  if(ni === slides.length){
    ni=0;
  }
  moveSlide(ni);
 },3000);

}
}
autoSlide();
slideWrapper.mouseenter(function(){
 clearInterval(timer);
 timer = undefined;
})
.mouseleave(function(){
  autoSlide();
});

//베스트 메뉴 탭

$(function(){
	$("ul.panel> li:not("+$("ul.tab li a.selected").attr("href")+")").hide();
	//ul.panel li:not("#tab1").hide(); 같은 의미 */
	$('ul.tab li a').click(function(){
    $('ul.tab li a').removeClass('selected');
		$(this).addClass('selected');
		$("ul.panel>li").hide();
     $($(this).attr("href")).show();
   return false;
	});


	});
