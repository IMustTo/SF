module.exports = {
  async demo() {
    await this.render('demo', {
      content: 'hello~',
    });
  },
};
