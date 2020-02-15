# AngularCreatejs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Angular
Angularを使用してアニメーション生成アプリを作成しました。
[Angular](https://angular.jp/)

### createJS
canvasを操作できるJavaScriptライブラリです。
createJSを使用することで、canvas単体よりも描画が簡単になります。
`npm install createjs-module`でインストールできます。
参考記事：
https://ics.media/tutorial-createjs/

AngularアプリでcreateJS使用するには下記を参考にしました。
参考記事：
https://qiita.com/clockmaker/items/c9dfe8985d35208a9cb1

ページに共通する処理はcreateJsServiceとして切り出しました。
参考記事：
http://www.fumiononaka.com/Business/html5/FN1805009.html

### Animation
ページ遷移時のアニメーションにはAngularのAnimation機能を使用しています。
参考記事：
https://qiita.com/maaz118/items/c54513537edfa03bc43c

### PWA
AngularアプリのPWA対応は簡単です。
基本的には`ng add @angular/pwa`のコマンドのみです。
参考記事：
https://qiita.com/puku0x/items/a6db78cc67d1eb960384
