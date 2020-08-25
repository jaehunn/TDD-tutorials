var App = App || {};

/**
 * @param {object} _data
 * @return {object}
 */
App.Counter = (_data) => {
  const data = _data;
  data.value = data.value || 0;

  const appCounter = {
    getValue: () => data.value,
  };

  return appCounter;
};
