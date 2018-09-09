$(function() {
	//magnific popup
	$('.popup-link').magnificPopup();

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//sidebar
	 $('#li-1 strong').on('click', function() {
   		 $('#li-1 span').slideToggle(100);
   });

	 $('#li-2 strong').on('click', function() {
   		 $('#li-2 span').slideToggle(100);
   });

	 $('#li-3 strong').on('click', function() {
   		 $('#li-3 span').slideToggle(100);
   });

	 $('#li-4 strong').on('click', function() {
   		 $('#li-4 span').slideToggle(100);
   });

	 $('#li-5 strong').on('click', function() {
   		 $('#li-5 span').slideToggle(100);
   });

	 $('#li-6 strong').on('click', function() {
   		 $('#li-6 span').slideToggle(100);
   });

	 //menu hide and show
	 $('#btn-hide').on('click', function() {
	   	$(".left-sidebar").animate({
	      width: "toggle"
	    },150);
	   });
		  
});
