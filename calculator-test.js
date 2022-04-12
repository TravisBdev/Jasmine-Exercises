
it('should calculate the monthly rate correctly', function () {
  let values = {amount: 12000, years: 4, rate: 3.0};
  expect(calculateMonthlyPayment(values)).toEqual('265.61');
});


it("should return a result with 2 decimal places", function() {
  let values = {amount: 70000, years: 30, rate: 3.5};
  expect(calculateMonthlyPayment(values)).toEqual('314.33');
});

/// etc



