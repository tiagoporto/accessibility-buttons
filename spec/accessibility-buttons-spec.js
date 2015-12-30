describe("iniciando função", function () {
	function hasClass(element, clazz) {
		return (' ' + element.className + ' ' ).indexOf( ' '+clazz+' ' ) > -1;
	}

	beforeEach(function() {
		var buttons = '<button aria-label="" id="accessibility-font" class="js-acessibility"></button><button aria-label="" id="accessibility-contrast" class="js-acessibility"></button>';


		document.body.innerHTML += buttons;

		accessibilityButtons();
	});


	it("Click font buttonnn", function () {

		document.getElementById('accessibility-font').click();


		expect( hasClass(document.body, 'accessibility-font') ).toBeTruly;

		// console.log(document.body,  hasClass(document.body, 'accessibility-font'));

	})

	it("Click font contrast", function () {
		document.getElementById('accessibility-contrast').click();

		expect(hasClass(document.body, 'accessibility-contrast') ).toBeTruly;

		// console.log(document.body, hasClass(document.body, 'accessibility-contrast'));
	})

});
