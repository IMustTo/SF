"use strict";

process.env.DEBUG = process.env.DEBUG || '*';

const serverConfig = require('./server.json');
const makeConfig = require('../src/utils').makeConfig;

module.exports = makeConfig({
  // vhost配置
  vhost: {
    '127.0.0.1': 'enterprise',
    'localhost': 'mobile',
  },

  // router配置
  router: {
    prefix: {
    }
  },

  // proxy配置
  proxy: {
    // 超时配置 
    timeout: 15000
  },

  // controller中请求各类数据前缀和域名的键值对
  api: {
    manager: 'https://manager.i3618.com.cn/',
    mock: 'http://localhost:3000/__MOCK__/mobile/',
  },

  // mock server配置
  mock: {
    prefix: '/__MOCK__/'
  },

  // 站点相关的配置
  site: {
    env: 'development',
    port: 3000,
    hostname: 'localhost'
  },

  // 通用参数，以模板参数的形式传递给模板引擎
  constant: {
    cdn: '',
    domain: {
    }
  },

  // 路径相关的配置
  path: {
    // project
    project: './app/',
    // 当直接访问域名时的默认路由
    default_path: {
      enterprise: '/home/index',
    },
    // 如果设置jump为false，则当直接访问域名时不重定向到default_path
    default_jump: {
      enterprise: false,
    }
  },

  // 模板引擎配置，默认：swig
  template: {},

  // 上传文件配置
  xload: {
    path: 'files/',
    upload: {
      encoding: 'utf-8',
      maxFieldsSize: 2 * 1024 * 1024,
      maxFields: 1000,
      keepExtensions: true
    },
    download: {}
  },

  // csrf配置
  csrf: {
    // 需要进行xsrf防护的模块
    module: []
  },

  // session配置
  session: {
  }
}, serverConfig)
