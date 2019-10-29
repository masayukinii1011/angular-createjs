import { Component, AfterViewInit } from '@angular/core';
import * as createjs from 'createjs-module';
import { ShapeGenerator } from './shapeGenerator';

@Component({
  selector: 'app-shape-generate',
  templateUrl: './shape-generate.component.html',
  styleUrls: ['./shape-generate.component.scss']
})
export class ShapeGenerateComponent implements AfterViewInit {
  stage: createjs.Stage;
  background: createjs.Shape;
  bg1 = '#ff9a9e';
  bg2 = '#a18cd1';
  shapeGenerator: ShapeGenerator;
  scale = 1;
  nowScale = 'Small';
  maxLife = 100;
  nowMaxLife = 'Short';
  gravity = 0.1;
  nowGravity = 'Light';

  width:number = 600;
  height:number = 600;

  constructor() { }

  ngAfterViewInit() {
    this.initStage();
    this.setBackground(this.bg1, this.bg2);
    this.initShape();
    this.initTicker();
  }

  initStage() {
    this.stage = new createjs.Stage('canvas');
  }

  setBackground(bg1, bg2) {
    this.background = new createjs.Shape();
    this.background.graphics.beginRadialGradientFill([bg1, bg2], [1, 0], 0, 0, 0, 300, 300, 600)
      .rect(0, 0, 600, 600);
    this.background.alpha = 0.4;
    this.background.cache(0, 0, 600, 600);
    this.stage.addChild(this.background);
  }

  initShape() {
    this.shapeGenerator = new ShapeGenerator();
  }

  initTicker() {
    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener('tick', this.draw.bind(this));
  }

  draw() {
    this.shapeGenerator.generate(this.stage, this.scale, this.maxLife, this.gravity);
    this.stage.update();
  }

  toggleScale() {
    if (this.scale === 1) {
      this.scale = 4;
      this.nowScale = 'Big';
    } else {
      this.scale = 1;
      this.nowScale = 'Small';
    }
  }

  toggleMaxLife() {
    if (this.maxLife === 100) {
      this.maxLife = 400;
      this.nowMaxLife = 'Long';
    } else {
      this.maxLife = 100;
      this.nowMaxLife = 'Short';
    }
  }

  toggleGravity() {
    if (this.gravity === 0.1) {
      this.gravity = 1;
      this.nowGravity = 'Heavy';
    } else {
      this.gravity = 0.1;
      this.nowGravity = 'Light';
    }
  }

  changeBackground() {
    if (this.bg1 === '#ff9a9e') {
      this.bg1 = '#fda085';
    } else if (this.bg1 === '#fda085') {
      this.bg1 = '#96e6a1';
    } else if (this.bg1 === '#96e6a1') {
      this.bg1 = '#e2ebf0';
    } else if (this.bg1 === '#e2ebf0') {
      this.bg1 = '#ff9a9e';
    }
    if (this.bg2 === '#a18cd1') {
      this.bg2 = '#ffecd2';
    } else if (this.bg2 === '#ffecd2') {
      this.bg2 = '#84fab0';
    } else if (this.bg2 === '#84fab0') {
      this.bg2 = '#a18cd1';
    }
    this.setBackground(this.bg1, this.bg2);
  }
}
