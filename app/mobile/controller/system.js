module.exports = {
  user: {
    async login() {
      await this.proxy('manager:system/user/login');
    },

    async test() {
      await this.proxy('mock:system/user/test');
    },
  },
};
