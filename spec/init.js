// jasmine.getFixtures().fixturesPath = 'accessibility-buttons/spec/fixtures';

describe("Init Acessibilit Buttons", function () {
	var fixture;

	beforeEach(function() {
		// loadFixtures('example.html');
		fixture = setFixtures('<body><button aria-label="" id="accessibility-font" class="js-acessibility"></button><button aria-label="" id="accessibility-contrast" class="js-acessibility"></button></body>');

		$_fontButton = $('#accessibility-font');

		$_contrastButton = $('#accessibility-contrast');

	});


	it("Button Font Inner", function () {
		 accessibilityButtons({
	        font: {
	            nameButtonIncrease: 'A+',
	            ariaLabelButtonIncrease: 'Plus Font',
	            nameButtonDecrease: 'A-',
	            ariaLabelButtonDecrease: 'Minus Font'
	        },

	        contrast: {
	            nameButtonAdd: 'Add Contrast',
	            ariaLabelButtonAdd: 'Add Contrast',
	            nameButtonRemove: 'Remove Contrast',
	            ariaLabelButtonRemove: 'Remove Contrast'
	        }
	    });

		 console.log($('body').html())

		expect($('#accessibility-font')).toHaveText('A+');
	})

	// it("Clicked font button twice", function () {
	// 	body.removeClass('accessibility-font');

	// 	$('#accessibility-font').click().click();

	// 	expect(body).not.toHaveClass('accessibility-font');
	// })
});
