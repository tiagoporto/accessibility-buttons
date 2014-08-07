function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++){
		var c = ca[i].trim();
		if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	return "";
}

var body = $('body');

var cookieFont = getCookie("accessibility_font");

var cookieContrast = getCookie("accessibility_contrast");


if (cookieFont) {
	body.addClass('accessibility-font');
	$("#accessibility-font").html('Diminuir fonte').attr('title', 'Diminuir fonte');
};

if (cookieContrast) {
	body.addClass('accessibility-contrast');

	$("#accessibility-contrast").html('Remover contraste').attr('title', 'Remover contraste');
};

$('.js-acessibility').click(function(event) {
	if(body.hasClass($(this).attr('id'))){

		body.removeClass($(this).attr('id'));

		if ($(this).attr('id') == 'accessibility-font') {

			$(this).html('Aumentar fonte').attr('title', 'Aumentar fonte');

			document.cookie = "accessibility_font=True; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

		}else{
			$(this).html('Inserir contraste').attr('title', 'Inserir contraste');

			document.cookie = "accessibility_contrast=True; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
		};

	}else{
		body.addClass($(this).attr('id'));

		if ($(this).attr('id') == 'accessibility-font') {
			if (!cookieFont) {
				document.cookie = "accessibility_font=True; path=/";
			};
			$(this).html('Diminuir fonte').attr('title', 'Diminuir fonte');

		}else{
			if (!cookieContrast) {
				document.cookie = "accessibility_contrast=True; path=/";
			};

			$(this).html('Remover contraste').attr('title', 'Remover contraste');
		};
	}
});