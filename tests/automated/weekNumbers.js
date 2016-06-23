
describe('weekNumbers', function() {

	var options;
	var counts;

	beforeEach(function() {
		affix('#cal');
		counts = {};
		options = {};
	});

	afterEach(function() {
		$('#cal').fullCalendar('destroy');
	});

	describe('when using month view', function() {

		beforeEach(function() {
			options.defaultView = 'month';
			options.weekMode = 'fixed'; // will make 6 rows
		});

		describe('with default weekNumbers', function() {

			describe('and default weekNumberColumn', function() {
				it('should not display week numbers at all', function() {
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(0);
				});
			});

			describe('and weekNumberColumn set to true', function() {
				it('should not display week numbers at all', function() {
					options.weekNumberColumn = true;
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(0);
				});
			});

			describe('and weekNumberColumn set to auto', function() {
				it('should not display week numbers at all', function() {
					options.weekNumberColumn = 'auto';
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(0);
				});
			});

		});

		describe('with weekNumbers to false', function() {

			beforeEach(function() {
				options.weekNumbers = false;
			});

			describe('and default weekNumberColumn', function() {
				it('should not display week numbers at all', function() {
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(0);
				});
			});

			describe('and weekNumberColumn set to true', function() {
				it('should not display week numbers at all', function() {
					options.weekNumberColumn = true;
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(0);
				});
			});

			describe('and weekNumberColumn set to auto', function() {
				it('should not display week numbers at all', function() {
					options.weekNumberColumn = 'auto';
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(0);
				});
			});

		});

		describe('with weekNumbers to true', function() {

			beforeEach(function() {
				options.weekNumbers = true;
			});

			describe('and default weekNumberColumn', function() {
				it('should display week numbers along the side only', function() {
					counts = getCounts();
					// TODO: Is it possible to remove class fc-week-number from
					// headers and fillers, bringing allWeekNumbers down to 6?
					expect(counts.allWeekNumbers).toEqual(19);
					expect(counts.colWeekNumbers).toEqual(6);
					expect(counts.cellWeekNumbers).toEqual(0);
					expect(counts.cornerWeekNumbers).toEqual(0);
				});
			});

			describe('and weekNumberColumn set to true', function() {
				it('should display week numbers along the side only', function() {
					options.weekNumberColumn = true;
					counts = getCounts();
					// TODO: Is it possible to remove class fc-week-number from
					// headers and fillers, bringing allWeekNumbers down to 6?
					expect(counts.allWeekNumbers).toEqual(19);
					expect(counts.colWeekNumbers).toEqual(6);
					expect(counts.cellWeekNumbers).toEqual(0);
					expect(counts.cornerWeekNumbers).toEqual(0);
				});
			});

			describe('and weekNumberColumn set to auto', function() {
				it('should display week numbers in the day cells only', function() {
					options.weekNumberColumn = 'auto';
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(6);
					expect(counts.colWeekNumbers).toEqual(0);
					expect(counts.cellWeekNumbers).toEqual(6);
					expect(counts.cornerWeekNumbers).toEqual(0);
				});
			});

		});

	});

	describe('when using basicWeek view', function() {

		beforeEach(function() {
			options.defaultView = 'basicWeek';
		});

		describe('with default weekNumbers', function() {

			describe('and default weekNumberColumn', function() {
				it('should not display week numbers at all', function() {
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(0);
				});
			});

			describe('and weekNumberColumn set to true', function() {
				it('should not display week numbers at all', function() {
					options.weekNumberColumn = true;
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(0);
				});
			});

			describe('and weekNumberColumn set to auto', function() {
				it('should not display week numbers at all', function() {
					options.weekNumberColumn = 'auto';
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(0);
				});
			});

		});

		describe('with weekNumbers to false', function() {

			beforeEach(function() {
				options.weekNumbers = false;
			});

			describe('and default weekNumberColumn', function() {
				it('should not display week numbers at all', function() {
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(0);
				});
			});

			describe('and weekNumberColumn set to true', function() {
				it('should not display week numbers at all', function() {
					options.weekNumberColumn = true;
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(0);
				});
			});

			describe('and weekNumberColumn set to auto', function() {
				it('should not display week numbers at all', function() {
					options.weekNumberColumn = 'auto';
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(0);
				});
			});

		});

		describe('with weekNumbers to true', function() {

			beforeEach(function() {
				options.weekNumbers = true;
			});

			describe('and default weekNumberColumn', function() {
				it('should display week numbers along the side only', function() {
					counts = getCounts();
					// TODO: Is it possible to remove class fc-week-number from
					// headers and fillers, bringing allWeekNumbers down to 1?
					expect(counts.allWeekNumbers).toEqual(4);
					expect(counts.colWeekNumbers).toEqual(1);
					expect(counts.cellWeekNumbers).toEqual(0);
					expect(counts.cornerWeekNumbers).toEqual(0);
				});
			});

			describe('and weekNumberColumn set to true', function() {
				it('should display week numbers along the side only', function() {
					options.weekNumberColumn = true;
					counts = getCounts();
					// TODO: Is it possible to remove class fc-week-number from
					// headers and fillers, bringing allWeekNumbers down to 1?
					expect(counts.allWeekNumbers).toEqual(4);
					expect(counts.colWeekNumbers).toEqual(1);
					expect(counts.cellWeekNumbers).toEqual(0);
					expect(counts.cornerWeekNumbers).toEqual(0);
				});
			});

			describe('and weekNumberColumn set to auto', function() {
				it('should display week numbers in the day cells only', function() {
					options.weekNumberColumn = 'auto';
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(1);
					expect(counts.colWeekNumbers).toEqual(0);
					expect(counts.cellWeekNumbers).toEqual(1);
					expect(counts.cornerWeekNumbers).toEqual(0);
				});
			});

		});

	});

	describe('when using an agenda view', function() {

		beforeEach(function() {
			options.defaultView = 'agendaWeek';
		});

		describe('with default weekNumbers', function() {

			describe('and default weekNumberColumn', function() {
				it('should not display week numbers at all', function() {
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(0);
				});
			});

			describe('and weekNumberColumn set to true', function() {
				it('should not display week numbers at all', function() {
					options.weekNumberColumn = true;
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(0);
				});
			});

			describe('and weekNumberColumn set to auto', function() {
				it('should not display week numbers at all', function() {
					options.weekNumberColumn = 'auto';
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(0);
				});
			});

		});

		describe('with weekNumbers to false', function() {

			beforeEach(function() {
				options.weekNumbers = false;
			});

			describe('and default weekNumberColumn', function() {
				it('should not display week numbers at all', function() {
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(0);
				});
			});

			describe('and weekNumberColumn set to true', function() {
				it('should not display week numbers at all', function() {
					options.weekNumberColumn = true;
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(0);
				});
			});

			describe('and weekNumberColumn set to auto', function() {
				it('should not display week numbers at all', function() {
					options.weekNumberColumn = 'auto';
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(0);
				});
			});

		});

		describe('with weekNumbers to true', function() {

			beforeEach(function() {
				options.weekNumbers = true;
			});

			describe('and default weekNumberColumn', function() {
				it('should display week numbers in the top left corner only', function() {
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(1);
					expect(counts.colWeekNumbers).toEqual(0);
					expect(counts.cellWeekNumbers).toEqual(0);
					expect(counts.cornerWeekNumbers).toEqual(1);
				});
			});

			describe('and weekNumberColumn set to true', function() {
				it('should display week numbers in the top left corner only', function() {
					options.weekNumberColumn = true;
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(1);
					expect(counts.colWeekNumbers).toEqual(0);
					expect(counts.cellWeekNumbers).toEqual(0);
					expect(counts.cornerWeekNumbers).toEqual(1);
				});
			});

			describe('and weekNumberColumn set to auto', function() {
				it('should display week numbers in the top left corner only', function() {
					options.weekNumberColumn = 'auto';
					counts = getCounts();
					expect(counts.allWeekNumbers).toEqual(1);
					expect(counts.colWeekNumbers).toEqual(0);
					expect(counts.cellWeekNumbers).toEqual(0);
					expect(counts.cornerWeekNumbers).toEqual(1);
				});
			});

		});

	});

	function getCounts() {
		var t = {};

		$('#cal').fullCalendar(options);

		t.allWeekNumbers = $('.fc-week-number').length;
		t.colWeekNumbers = $('.fc-content-skeleton thead td.fc-week-number').length;
		t.cellWeekNumbers = $('.fc-content-skeleton thead .fc-day-top span.fc-week-number').length;
		t.cornerWeekNumbers = $('.fc-axis.fc-widget-header.fc-week-number').length;

		return t;
	}

});
