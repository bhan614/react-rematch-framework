### react-rematch-webpack基础框架
#### react16 + react-router4 + rematch + webpack4

#### Install
~~~
npm install
~~~

#### Dll
第一次运行需要打包vendor，仅运行一次。当依赖(vendor)改变时需重新打包，更改index.html内引入的路径。
本地引用加快构件速度，生产环境不引用
~~~
npm run dll
~~~

#### Run
~~~
npm start
~~~

#### Build
~~~
npm run build
~~~
