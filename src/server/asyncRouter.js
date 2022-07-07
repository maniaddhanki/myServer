const createCycler = (handlers) => {
  let index = -1;
  const next = (req, res) => {
    index++;
    handlers[index](req, res, () => next(req, res));
  }
  return next;
};

const createRouter = (handlers) => {
  return (req, res) => {
    const next = createCycler(handlers);
    next(req, res);
  };
};

module.exports = { createRouter };
