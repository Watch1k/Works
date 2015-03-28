$(document).ready(function(){
var url=document.location.href;
 $.each($("nav li a"),function(){
  if(this.href == url){$(this).parent().addClass('active');};
 });
 $.each($(".pages ul li a"), function(){
 	if(this.href == url){$(this).parent().addClass('active');}
 });
});

$(document).ready(function(){
	$("nav > ul > li > a").hover(
		function() {
			$(this).parent().addClass("active");
		}, function() {
			if(this.href != document.location.href) {
				$(this).parent().removeClass("active");
			}
		}
	);
});

$(document).ready(function() {
	$(".search-btn").click(function(){
		$(".search-text").toggleClass("active");
	});
});