# react
当前分支用了如下的依赖:
- react
- redux
- redux-saga
- ant-design

# 已经优化的地方:
- 按需加载
- vendor文件缓存

# 可以被优化的地方:
- `whatwg-fetch`可以换成`axios`
- 雪碧图合成没有配置完成
- 本地依赖可以换成CDN
- 按需加载的方法`require.ensure`可以换成`import()`

