$(document).ready(function(){
    $(".navbar-header .navbar-toggle").click(function(){
        $(".navbar-collapse").addClass('show');
    });
    $(".navbar-collapse button.navbar-toggle").click(function(){
        $(".navbar-collapse").removeClass('show');
    });
    $(".navbar-collapse li a").click(function(){
        $(".navbar-collapse").removeClass('show');
    });
        
    });