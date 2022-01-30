const { someController, dependencies } = require('./someController');

describe('someController', () => {
  let reqStub;
  let resMock;
  let nextStub;

  let serviceMock;

  beforeEach(() => {
    reqStub = {};
    resMock = {
      status: jest.fn(),
      send: jest.fn(),
    };

    nextStub = {};

    serviceMock = jest.fn().mockReturnValue('some-json');

    dependencies.someService = serviceMock;

    someController(reqStub, resMock, nextStub);
  });

  it('calls the service', () => {
    expect(serviceMock).toHaveBeenCalled();
  });

  it('calls status with 200', () => {
    expect(resMock.status).toHaveBeenCalledWith(200);
  });

  it('given send mock, when called, is correct', () => {
    expect(resMock.send).toHaveBeenCalledWith('some-json');
  });
});
