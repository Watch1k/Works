$(document).ready(function(){
var url=document.location.href;
 $.each($("ul.nav li a"),function(){
  if(this.href==url){$(this).addClass('active');};
 });
});