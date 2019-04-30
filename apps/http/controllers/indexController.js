class indexController {
  static async index(ctx) {
    ctx.body = {
      title: 'Welcome to koa',
    };
  }
}

export default indexController;
