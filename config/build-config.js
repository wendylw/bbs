
module.exports = {
  environments: ['dev', 'prod', 'test'],
  // 当前webpack server 配置
  host: process.env.HOST || "localhost",
  port: process.env.PORT || (process.env.NODE_ENV === 'prod' ? 8080 : 8889),

  // API Server 配置
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT || '3030',

  // 在API Server 反向代理配置
  isRemoteProxy: false,
  // webpack proxy context， 包括API，以及不同project的重定向
  proxyPathPrefix: ['/'],
  remoteProxy: ' http://47.101.138.115',
  token: 'rx44w6x63qnz8i3jr2x9jm1c',

  outputDir: 'build',
  theme: {
    'font-family': 'Open Sans'
  }
};
