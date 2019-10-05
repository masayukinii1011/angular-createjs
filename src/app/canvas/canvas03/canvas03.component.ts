import { Component, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import * as createjs from 'createjs-module';

@Component({
  selector: 'app-canvas03',
  templateUrl: './canvas03.component.html',
  styleUrls: ['./canvas03.component.scss']
})
export class Canvas03Component implements AfterViewInit, AfterViewChecked {
  stage;
  shape;
  color = '#ff0000';
  red = 0;
  green = 0;
  blue = 0;
  aaa = 200;
  bbb = 200;
  ccc = 1;
  ddd = 1;

  @ViewChild('canvas', { static: false }) canvas;

  constructor() { }

  ngAfterViewInit() {
    this.stage = new createjs.Stage('canvas');
    this.shape = new createjs.Shape();
  }

  ngAfterViewChecked() {
    this.shape.graphics.beginFill(createjs.Graphics.getRGB(this.red, this.green, this.blue));
    this.shape.graphics.drawCircle(0, 0, 100);
    this.shape.x = this.aaa;
    this.shape.y = this.bbb;
    this.shape.scaleX = this.ccc;
    this.shape.scaleY = this.ccc;
    this.shape.alpha = this.ddd;
    this.stage.addChild(this.shape);
    this.stage.update();
  }
}
