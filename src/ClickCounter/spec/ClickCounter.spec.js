describe("AppCounter", () => {
  let data;
  let appCounter;

  beforeEach(() => {
    // state
    data = { value: 2, operator: (value) => value * 2 };

    // object
    appCounter = App.Counter(data);
  });

  // 1. return value
  describe("getValue()", () => {
    it("Return value", () => {
      expect(appCounter.getValue()).toBe(data.value);
    });
  });

  // 2. increase value
  describe("increaseValue()", () => {
    it("Increase value", () => {
      expect(appCounter.increaseValue()).toBe(data.value + 1);
    });
  });

  // 3. return operated value
  describe("getOperatedValue()", () => {
    it("Calculated by operator", () => {
      const result = data.operator(data.value);

      expect(appCounter.getOperatedValue()).toBe(result);
    });
  });
});
