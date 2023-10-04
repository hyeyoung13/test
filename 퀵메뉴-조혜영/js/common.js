$(function(){
  const defaultTop=parseInt($("#quick_menu").css("top"));
  $(window).on("scroll",function(){
   const scv=$(window).scrollTop();
   $("#quick_menu").stop().animate({top:scv+defaultTop+"px"},1000);
  });
//quick menu top값을 기억하라
//스크롤 할 때 스크롤 탑값. 스크롤 할 때마다 스크롤 거리를 계속 뽑아야함. scv에 저장
//quikckmenu 무ㅑㅡㅁㅅㄷgksmsep. top값을 scv(스크롤한 거리)+defaultTop(100px)
//해쉬찾아서 가라...
//a클릭했을 때 해쉬찾아가거나, 스크롤탑 0으로 가게 하시오.
$("#quick_menu ul a ").click(function(e){
  $.scrollTo(this.hash || 0,1500);
  //scroll to min..플러그인 때문에 쓸 수 있음.플러그인에 있음
  //plug쓰는게 #으로 팍팍 가지 않기 위히ㅏㅁ
  //현재 선택한 hash가 #. ||가 또는. scroll top이 꼭대기 0
  //csstop 이 붙는다...css의 위치를 잡아주는거라
  e.preventDefault();
});
});
/*1초 만에 스크롤바가 이동된 만큼 퀵 메뉴가 애니메이션이 적용되어 이동됨. 이때
css를 이용해 문서 상단에서 벌린 100px 만큼 거리를 유지되도록 변수 defaulTop에 할당된 값을더함*/
