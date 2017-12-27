// check off completed to-do items by clicking on them
$("ul").on("click", "li", function(){
	// if li is gray, turn it black
	$(this).toggleClass("completed");
});

// click on x to delete to-do item
$("ul").on("click", "span", function(event){
	// want to-do item to fade out before being removed
	$(this).parent().fadeOut("slow", function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// add to-do items to list
$("input").keypress(function(event){
	// only want to add item when 'enter' key is pressed
	if(event.which === 13){
		// extract new to-do item from input
		var inputValue = $(this).val();
		// clear text from input box
		$(this).val("");
		// create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + inputValue + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input").fadeToggle();
});