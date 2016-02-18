// jasmine.getFixtures().fixturesPath = 'accessibility-buttons/spec/fixtures';

describe("Functions events", function () {
	var fixture;

	beforeEach(function() {
		// loadFixtures('example.html');
		fixture = setFixtures('<body><button aria-label="" id="accessibility-font" class="js-acessibility"></button><button aria-label="" id="accessibility-contrast" class="js-acessibility"></button></body>');

		body = $('body');

		$_fontButton = $('#accessibility-font');

		$_contrastButton = $('#accessibility-contrast');

		accessibilityButtons();
	});


	it("Clicked font button", function () {

		body.removeClass('accessibility-font');

		$('#accessibility-font').click();

		expect($('#accessibility-font')).toHaveText('-A');

		expect(body).toHaveClass('accessibility-font');
		expect($_fontButton).toHaveText('-A');
		expect($_fontButton).toHaveAttr('aria-label', 'Decrease Font');
	})

	it("Clicked font button twice", function () {
		body.removeClass('accessibility-font');

		$('#accessibility-font').click().click();

		expect(body).not.toHaveClass('accessibility-font');
		expect($_fontButton).toHaveText('+A');
		expect($_fontButton).toHaveAttr('aria-label', 'Increase Font');
	})

	it("Clicked font contrast", function () {
		body.removeClass('accessibility-contrast');

		$('#accessibility-contrast').click();

		expect(body).toHaveClass('accessibility-contrast');
		expect($_contrastButton).toHaveText('Remove Contrast');
		expect($_contrastButton).toHaveAttr('aria-label', 'Remove Contrast');
	})


	it("Clicked font contrast twice", function () {
		body.removeClass('accessibility-contrast');

		$('#accessibility-contrast').click().click();

		expect(body).not.toHaveClass('accessibility-contrast');
		expect($_contrastButton).toHaveText('Add Contrast');
		expect($_contrastButton).toHaveAttr('aria-label', 'Add Contrast');
	})

});
