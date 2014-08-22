	//Font Button
	var nameButtonIncreaseFont = "+A";
	var nameTitleButtonIncreaseFont = "Increase Font";

	var nameButtonDecreaseFont = "-A";
	var nameTitleButtonDecreaseFont = "Decrease Font";

	//Contrast Button
	var nameButtonAddContrast = "Add Contrast";
	var nameTitleButtonAddContrast = "Add Contrast";

	var nameButtonRemoveContrast = "Remove Contrast";
	var nameTitleButtonRemoveContrast = "Remove Contrast";


	function getCookie(cname){
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++){
			var c = ca[i].trim();
			if (c.indexOf(name)==0) return c.substring(name.length,c.length);
		}
		return "";
	}

	var $_body = $('body');

	var cookieFont = getCookie("accessibility_font");

	var cookieContrast = getCookie("accessibility_contrast");


	if (cookieFont) {
		$_body.addClass('accessibility-font');

		$("#accessibility-font").html(nameButtonDecreaseFont).attr('title', nameTitleButtonDecreaseFont);
	}else{
		$("#accessibility-font").html(nameButtonIncreaseFont).attr('title', nameTitleButtonIncreaseFont);
	};

	if (cookieContrast) {
		$_body.addClass('accessibility-contrast');

		$("#accessibility-contrast").html(nameButtonRemoveContrast).attr('title', nameTitleButtonRemoveContrast);
	}else{
		$("#accessibility-contrast").html(nameButtonAddContrast).attr('title', nameTitleButtonAddContrast);
	};

	$('.js-acessibility').click(function(event) {
		var $_this = $(this);
		
		if($_body.hasClass($_this.attr('id'))){

			$_body.removeClass($_this.attr('id'));

			if ($_this.attr('id') == 'accessibility-font') {

				$_this.html(nameButtonIncreaseFont).attr('title', nameTitleButtonIncreaseFont);

				document.cookie = "accessibility_font=True; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

			}else{
				$_this.html(nameButtonAddContrast).attr('title', nameTitleButtonAddContrast);

				document.cookie = "accessibility_contrast=True; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
			};

		}else{
			$_body.addClass($_this.attr('id'));

			if ($_this.attr('id') == 'accessibility-font') {
				if (!cookieFont) {
					document.cookie = "accessibility_font=True; path=/";
				};
				$_this.html(nameButtonDecreaseFont).attr('title', nameTitleButtonDecreaseFont);

			}else{
				if (!cookieContrast) {
					document.cookie = "accessibility_contrast=True; path=/";
				};

				$_this.html(nameButtonRemoveContrast).attr('title', nameTitleButtonRemoveContrast);
			};
		}
	});
