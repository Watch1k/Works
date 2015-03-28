// Search Button
$(document).ready(function(){
	$("#search-button").click(function(){
			$("#search-text").toggleClass("expand");
	});
});

// Active Link Menu
$(document).ready(function(){
var url=document.location.href;
 $.each($("ul.nav li a"),function(){
  if(this.href==url){$(this).addClass('active');};
 });
});
$(document).ready(function(){
var url=document.location.href;
 $.each($(".pages ul li a"),function(){
  if(this.href==url){$(this).addClass('active');};
 });
});

// Responsive Link Menu
jQuery(function($) {
  $(".nav-wrap > button").click(function(){
    $(".nav").toggleClass("visible");
  });
});

// Sidebar Responsive Menu
jQuery(function($) {
  $(".right-swap").click(function(){
    $(".sidebar").toggleClass("active");
    $(".right-swap").toggleClass("active");
    $("body").toggleClass("noScroll");
    $(".shim-sidebar").toggleClass("active");
      return false;
    });
});

// Sidebar Short Links
jQuery(function($) {

  $(".menu-side li > h3 a").click(function(){
    var active = $(this.parentNode);
        active = $(active.next());
    if($(active).hasClass("active")){
      $(active).removeClass("active");
    }
    
    else{
      $.each($(".menu-side li > h3 a"),function(){
        var active2 = $(this.parentNode);
            active2 = $(active2.next());
        $(active2).removeClass("active");
      });

      $(active).addClass("active");
    }
  });
})

// Tabs Select
// 1
function One()
{
  // Tabs
  document.getElementById('OneTab').className = 'SelectedTab';
  document.getElementById('TwoTab').className = 'Tab';
  document.getElementById('ThreeTab').className = 'Tab';
  document.getElementById('FourTab').className = 'Tab';
 
  // Pages
  document.getElementById('tabs-1').className = 'ActiveTab';
  document.getElementById('tabs-2').className = 'none';
  document.getElementById('tabs-3').className = 'none';
  document.getElementById('tabs-4').className = 'none';
 
}
// 2
function Two()
{
  // Tabs
  document.getElementById('OneTab').className = 'Tab';
  document.getElementById('TwoTab').className = 'SelectedTab';
  document.getElementById('ThreeTab').className = 'Tab';
  document.getElementById('FourTab').className = 'Tab';

  // Pages
  document.getElementById('tabs-1').className = 'none';
  document.getElementById('tabs-2').className = 'ActiveTab';
  document.getElementById('tabs-3').className = 'none';
  document.getElementById('tabs-4').className = 'none';

}
// 3
function Three()
{
  // Tabs
  document.getElementById('OneTab').className = 'Tab';
  document.getElementById('TwoTab').className = 'Tab';
  document.getElementById('ThreeTab').className = 'SelectedTab';
  document.getElementById('FourTab').className = 'Tab';

  // Pages
  document.getElementById('tabs-1').className = 'none';
  document.getElementById('tabs-2').className = 'none';
  document.getElementById('tabs-3').className = 'ActiveTab';
  document.getElementById('tabs-4').className = 'none';
 
}
// 4
function Four()
{
  // Tabs
  document.getElementById('OneTab').className = 'Tab';
  document.getElementById('TwoTab').className = 'Tab';
  document.getElementById('ThreeTab').className = 'Tab';
  document.getElementById('FourTab').className = 'SelectedTab';
 
  // Pages
  document.getElementById('tabs-1').className = 'none';
  document.getElementById('tabs-2').className = 'none';
  document.getElementById('tabs-3').className = 'none';
  document.getElementById('tabs-4').className = 'ActiveTab';
 
}