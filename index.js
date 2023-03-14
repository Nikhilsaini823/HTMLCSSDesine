$(document).ready(function(){
    $(".navbar-header .navbar-toggle").click(function(){
        $(".navbar-collapse").addClass('show');
    });
    $(".navbar-collapse button.navbar-toggle").click(function(){
        $(".navbar-collapse").removeClass('show');
    });
        
    });