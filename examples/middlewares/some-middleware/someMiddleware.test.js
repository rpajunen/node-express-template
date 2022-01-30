const { someMiddleware } = require('./someMiddleware');

describe('someMiddleware', () => {
  let reqStub;
  let resStub;
  let nextMock;

  beforeEach(() => {
    reqStub = {};
    resStub = {};
    nextMock = jest.fn();

    someMiddleware(reqStub, resStub, nextMock);
  });

  it('calls next function', () => {
    expect(nextMock).toHaveBeenCalled();
  });
});
