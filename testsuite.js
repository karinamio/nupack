describe ( "flat markup", function () {
	it("is a string and has a dollar sign", function () {
		expect(flatMarkup('$514.33')).toEqual(540.0465);
	});

	it("is a string and does not have a dollar sign", function () {
		expect(flatMarkup('514.33')).toEqual(540.0465);
	});
});

describe ( "wage markup", function () {
	it("is a string", function () {
		expect(wageMarkup('1')).toEqual(0.012);
	});

	it("is an integer", function () {
		expect(wageMarkup(1)).toEqual(0.012);
	});

	it("is a float", function () {
		expect(wageMarkup(1.00)).toEqual(0.012);
	});

	it("is not an integer", function () {
		expect(wageMarkup(1.35)).toEqual('Error');
	});

	it("is parses an integer from person", function () {
		expect(wageMarkup('1 person')).toEqual(0.012);
	});

	it("is parses an integer from people", function () {
		expect(wageMarkup('3 people')).toEqual(0.036);
	});
});

describe ( "material markup", function () {
	it("is pharmaceuticals", function () {
		expect(materialMarkup('drugs')).toEqual(0.075);
	});

	it("is food", function () {
		expect(materialMarkup('food')).toEqual(0.13);
	});	

	it("is electronics", function () {
		expect(materialMarkup('electronics')).toEqual(0.02);
	});

	it("is something else", function () {
		expect(materialMarkup('poop')).toEqual(0);
	});
});

describe ( "markup calculator", function () {
	describe ( "given test cases", function () {
		it("runs the first test case", function () {
			expect(markupCalculator('$1299.99', '3 people', 'food')).toEqual('$1591.58');
		});

		it("runs the second test case", function () {
			expect(markupCalculator('$5432.00', '1 person', 'drugs')).toEqual('$6199.81');
		});

		it("runs the third test case", function () {
			expect(markupCalculator('$12456.95', '4 people', 'books')).toEqual('$13707.63');
		});
	});
	describe ( "other test cases", function () {
		it("takes in an invalid input for base price", function () {
			expect(markupCalculator('$1299.99.00', '3 people', 'food')).toEqual('Error');
		});

		it("takes in an invalid input for number of workers", function () {
			expect(markupCalculator('$5432.00', '1.99 persons', 'drugs')).toEqual('$6199.81');
		});
	});
});
