const { get } = require('lodash/fp');
const { someService: requiredSomeService } = require('../../services/some-service/someService');

exports.dependencies = {
  someService: requiredSomeService,
};

exports.someController = (req, res, next) => {
  const someService = get('someService', this.dependencies);

  try {
    const result = someService();

    res.status(200);
    res.send(result);
  } catch (e) {
    next(e);
  }
};
