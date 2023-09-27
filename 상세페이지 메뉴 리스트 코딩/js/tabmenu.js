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


	//tab1 tab2 tab3판 하이드
	});
