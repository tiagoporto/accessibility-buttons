// jasmine.getFixtures().fixturesPath = 'accessibility-buttons/spec/fixtures';

describe("iniciando função", function () {
	var fixture;

	beforeEach(function() {
		// loadFixtures('example.html');
		fixture = setFixtures('<body><button aria-label="" id="accessibility-font" class="js-acessibility"></button><button aria-label="" id="accessibility-contrast" class="js-acessibility"></button></body>');

		body = $('body');

		accessibilityButtons();
	});


	it("Click font button", function () {

		body.removeClass('accessibility-font');

		$('#accessibility-font').click();

		expect(body).toHaveClass('accessibility-font');
	})

	it("Click font button again", function () {
		body.removeClass('accessibility-font');

		$('#accessibility-font').click().click();

		expect(body).not.toHaveClass('accessibility-font');
	})

	it("Click font contrast", function () {

		$('#accessibility-contrast').click();

		expect(body).toHaveClass('accessibility-contrast');
	})


});
