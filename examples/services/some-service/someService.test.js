const { someService } = require('./someService');

describe('someService', () => {
  it('when called, returns correct value', () => {
    const result = someService();

    expect(result).toEqual({ result: 'some-result' });
  });
});
