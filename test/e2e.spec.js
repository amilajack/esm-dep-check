const edc = require('../src/DepCheck').default;

describe('e2e', () => {
  it('should test basic snapshot', () => {
    expect(edc()).toMatchSnapshot();
  });
});
