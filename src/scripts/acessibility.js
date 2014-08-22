	//Font Button
	var nameButtonIncreaseFont		  = "+A",
		ariaLabelButtonIncreaseFont   = "Increase Font",
		nameButtonDecreaseFont		  = "-A",
		ariaLabelButtonDecreaseFont   = "Decrease Font",
	//Contrast Button
		nameButtonAddContrast		  = "Add Contrast",
		ariaLabelButtonAddContrast 	  = "Add Contrast",
		nameButtonRemoveContrast	  = "Remove Contrast",
		ariaLabelButtonRemoveContrast = "Remove Contrast",
	//Cache jQuery Elements
		$_body = $('body'),
		$_fontButton = $("#accessibility-font"),
		$_contrastButton = $("#accessibility-contrast"),
	//Cookies
		cookieFont = getCookie("accessibility_font"),
		cookieContrast = getCookie("accessibility_contrast");


	function getCookie(cname){
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++){
			var c = ca[i].trim();
			if (c.indexOf(name)==0) return c.substring(name.length,c.length);
		}
		return "";
	}

	if (cookieFont) {
		$_body.addClass('accessibility-font');

		$_fontButton.html(nameButtonDecreaseFont).attr('aria-label', ariaLabelButtonDecreaseFont);
	}else{
		$_fontButton.html(nameButtonIncreaseFont).attr('aria-label', ariaLabelButtonIncreaseFont);
	};

	if (cookieContrast) {
		$_body.addClass('accessibility-contrast');

		$_contrastButton.html(nameButtonRemoveContrast).attr('aria-label', ariaLabelButtonRemoveContrast);
	}else{
		$_contrastButton.html(nameButtonAddContrast).attr('aria-label', ariaLabelButtonAddContrast);
	};

	$('.js-acessibility').click(function(event) {
		var $_this = $(this);

		if($_body.hasClass($_this.attr('id'))){

			$_body.removeClass($_this.attr('id'));

			if ($_this.attr('id') == 'accessibility-font') {

				$_this.html(nameButtonIncreaseFont).attr('aria-label', ariaLabelButtonIncreaseFont);

				document.cookie = "accessibility_font=True; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
			}else{
				$_this.html(nameButtonAddContrast).attr('aria-label', ariaLabelButtonAddContrast);

				document.cookie = "accessibility_contrast=True; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
			};

		}else{
			$_body.addClass($_this.attr('id'));

			if ($_this.attr('id') == 'accessibility-font') {
				if (!cookieFont) {
					document.cookie = "accessibility_font=True; path=/";
				};
				$_this.html(nameButtonDecreaseFont).attr('aria-label', ariaLabelButtonDecreaseFont);

			}else{
				if (!cookieContrast) {
					document.cookie = "accessibility_contrast=True; path=/";
				};

				$_this.html(nameButtonRemoveContrast).attr('aria-label', ariaLabelButtonRemoveContrast);
			};
		}
	});
