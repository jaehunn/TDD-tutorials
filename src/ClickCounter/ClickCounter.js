var App = App || {};

/**
 * @param {object} _data
 * @return {object}
 */
App.Counter = (_data) => {
  const data = _data;

  // initial value
  data.value = data.value || 0;
  data.operator = data.operator || (() => data.value);

  const appCounter = {
    getValue: () => data.value,
    increaseValue: () => data.value + 1,
    getOperatedValue: () => data.operator(data.value),
  };

  return appCounter;
};
