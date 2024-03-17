function loader () {
	setTimeout(function () {
		if ($("#loader").length > 0) {
			$("#loader").removeClass("show");
		}
	}, 1);
};

function contentWayPoint() {
	var i = 0;
	$(".animate").waypoint(
		function (direction) {
			if (
				direction === "down" &&
				!$(this.element).hasClass("animated")
			) {
				i++;

				$(this.element).addClass("item-animate");
				setTimeout(function () {
					$("body .animate.item-animate").each(function (k) {
						var el = $(this);
						setTimeout(
							function () {
								var effect = el.data("animate-effect");
								if (effect === "fadeIn") {
									el.addClass("fadeIn animated");
								} else if (effect === "fadeInLeft") {
									el.addClass("fadeInLeft animated");
								} else if (effect === "fadeInRight") {
									el.addClass("fadeInRight animated");
								} else {
									el.addClass("fadeInUp animated");
								}
								el.removeClass("item-animate");
							},
							k * 50,
							"easeInOutExpo"
						);
					});
				}, 100);
			}
		},
		{ offset: "95%" }
	);
};

(function ($) {
  "use strict";

	loader();
  contentWayPoint();
})(jQuery);
