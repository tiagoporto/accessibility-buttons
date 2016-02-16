// jasmine.getFixtures().fixturesPath = 'accessibility-buttons/spec/fixtures';

describe("Functions events", function () {
	var fixture;

	beforeEach(function() {
		// loadFixtures('example.html');
		fixture = setFixtures('<body><button aria-label="" id="accessibility-font" class="js-acessibility"></button><button aria-label="" id="accessibility-contrast" class="js-acessibility"></button></body>');

		body = $('body');

		accessibilityButtons();
	});


	it("Clicked font button", function () {

		body.removeClass('accessibility-font');

		$('#accessibility-font').click();

		expect($('#accessibility-font')).toHaveText('-A');

		expect(body).toHaveClass('accessibility-font');
	})

	it("Clicked font button twice", function () {
		body.removeClass('accessibility-font');

		$('#accessibility-font').click().click();

		expect(body).not.toHaveClass('accessibility-font');
	})

	it("Clicked font contrast", function () {
		body.removeClass('accessibility-contrast');

		$('#accessibility-contrast').click();

		expect(body).toHaveClass('accessibility-contrast');
	})


	it("Clicked font contrast twice", function () {
		body.removeClass('accessibility-contrast');

		$('#accessibility-contrast').click().click();

		expect(body).not.toHaveClass('accessibility-contrast');
	})

});
