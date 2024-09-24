## 如何将安卓多模块组件封装成原生组件


# 环境 ⚠️⚠️⚠️⚠️⚠️
1. node v18.16.1 (npm v9.5.1)

# 运行 参考（https://docs.expo.dev/modules/native-module-tutorial）

1. npm i
2. npm run build
3. cd example
4. npx expo run:android

# 目录结构  

第三方包 mylibrary 在 example/android/mylibrary
需要更改
```
example/android/settings.gradle
android/build.gradle 
```

