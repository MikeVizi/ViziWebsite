$('.feature-header-box').on("click", function(){
	var div_id = $(this).attr('id');

	var id = div_id.substr(4, div_id.length);

	//alert(id);
});

$('.carousel').carousel({
    interval: false
}); 