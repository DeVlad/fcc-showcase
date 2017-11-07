$(document).ready(function () {
    // Initialize collapse button
    $(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    //$('.collapsible').collapsible();
})

$( "#close-sidebar" ).click(function() {
    $('.button-collapse').sideNav('hide');
});

