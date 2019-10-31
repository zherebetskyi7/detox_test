Given('I should see {string}', function (string) {
    expect(element(by.text(string))).toBeVisible();
  });