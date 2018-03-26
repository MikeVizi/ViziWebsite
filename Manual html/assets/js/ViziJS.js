// Vizi code

// Floating button

// On the click of a link, the back button appears, target for that back button becomes what has just been clicked. 
// If click on the back button, it gets hidden.

$(function() {

        $('.BackLink').click(function() {
        tempScrollTop = $(window).scrollTop();        
        $('#Floater').show();
        return false;
       });        
});

$(function() {
       $('#Floater').click(function() {
            $(window).animate({scrollTop:tempScrollTop});
            $('#Floater').hide()
           return false;
       });        
});

// Calculate price per user

// IDs for StudentsNo time PriceBasic write to TotalBasic

// var StudentsNo = get.ids("StudentsNo")
// var PriceBasic = get.ids("PriceBasic")

// function() {
//             inner.html ID TotalBasic = StudentsNo * PriceBasic

// }
