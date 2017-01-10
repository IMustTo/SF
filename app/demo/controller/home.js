exports.index = async function () {
  await this.bindDefault();

  await this.proxy({
    repoInfo: 'github:repos/xiongwilee/koa-grace'
  })

  await this.render('home', {
    title: this.backData.repoInfo
  });
}