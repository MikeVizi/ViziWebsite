
	$(function() {
    //caches a jQuery object containing the header element
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var contactBtn = $("#contactBtn");
    	var contactDiv = $("#contact");
    	var contactPos = contactDiv.offset().top;

        if (scroll >= contactPos -500) {
        	contactBtn.css("display", "none");
        } else {
            contactBtn.css("display", "");
        }
    });
});


// Arrow
$(function() {
    //caches a jQuery object containing the header element
    var upArrow = $("#arrowBtn");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll <= 500) {
        	upArrow.removeClass('arrowBtn').addClass("arrowHidden");
        } else {
            upArrow.removeClass("arrowHidden").addClass('arrowBtn');
        }
    });
});


//SmoothScroll
$('a[href*=#]').click(function SmoothScroll() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	&& location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body').animate({scrollTop: targetOffset}, 600);
					return false;
			}
	}
});

$(function() {
    var CTA = $(".contactBtn");
    var CTAbanner = $(".CTAbanner");
    $( "#ExitCTA" ).click(function() {
        CTA.removeClass("ContactBtn").addClass("contactBtnCTA");
        CTAbanner.removeClass("CTAbanner").addClass("CTAclosed");

    });
});

//navbar

$('a[href*=#]').click(function SmoothScroll() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $('html,body').animate({scrollTop: targetOffset}, 600);
                    return false;
            }
    }
});

//navbar class changes on scroll
$(function() {
    var Logo = $(".Logo-large");
    var Padding =$(".Padding-large")
    var fontSize =$(".Font-large")
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            Logo.removeClass('Logo-large').addClass("Logo-small");
            Padding.removeClass('Padding-large').addClass("Padding-small");
        } else {
            Logo.removeClass("Logo-small").addClass('Logo-large');
            Padding.removeClass('Padding-small').addClass("Padding-large");
        }
    });
});

// Add data-toggle - dropdown to navbar when below 1000px
$('#navClick').on("click", function() {
    var width = $(window).width();

    if ( width >= 1000) {
        $(".dropdown-toggle").attr("data-toggle", "");
    }
    else {
        $(".dropdown-toggle").attr("data-toggle", "dropdown");
        $("#navOverview").css("display" , "");
    }
});
