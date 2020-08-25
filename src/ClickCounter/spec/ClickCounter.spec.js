describe("AppCounter", () => {
  let data;
  let appCounter;

  beforeEach(() => {
    // state
    data = { value: 0 };

    // object
    appCounter = App.Counter(data);
  });

  describe("getValue()", () => {
    it("Return value", () => {
      expect(appCounter.getValue()).toBe(data.value);
    });
  });
});
