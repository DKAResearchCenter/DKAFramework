import v1 from "./v1";

const Controller = async(app, opts, next) => {
    await app.register(v1, { prefix : '/v1'});
    next();
};

export default Controller;