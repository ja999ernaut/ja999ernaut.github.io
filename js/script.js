$(document).ready(function(){
 	
 	$(".bar a").mPageScroll2id({ scrollSpeed: 1200 });

 	$(".bar a").animated("zoomIn", "zoomIn");
 	$(".main_bar").animated("fadeIn","fadeIn");
 	$(".profile .photo").animated("bounceInLeft", "bounceInLeft");
 	$(".profile .details").animated("bounceInRight", "bounceInRight");
 	$(".contact_info i").animated("flash");
 	


    $("#scaleHTML5").animated("html", "html");
    $("#scaleCSS3").animated("css", "css");
    $("#scaleJS").animated("js", "js");
    $("#scalejQuery").animated("jQuery", "jQuery");
    $("#scaleBoot").animated("bootstrap", "bootstrap");
    $("#scaleSASS").animated("sass", "sass");
    $("#scaleCMS").animated("cms", "cms"); 	

	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$(".scrollup").fadeIn();
		} else {
			$(".scrollup").fadeOut();
		}
	});
 
	$(".scrollup").click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1200);
		return false;
	});

	$("#mailForm").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
 
});



