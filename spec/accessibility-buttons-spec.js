describe("iniciando função", function () {
	var buttons = '<button aria-label="" id="accessibility-font" class="js-acessibility"></button><button aria-label="" id="accessibility-contrast" class="js-acessibility"></button>';

	function hasClass(element, clazz) {
		return (' ' + element.className + ' ' ).indexOf( ' '+clazz+' ' ) > -1;
	}

	document.body.innerHTML += buttons;

	accessibilityButtons();

	it("Click font button", function () {
		document.getElementById('accessibility-font').click();
		expect(hasClass(document.body, 'accessibility-font')).toBeTruthy;
	})

});
