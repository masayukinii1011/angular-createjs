import { Component, ViewChild, OnInit, DoCheck } from '@angular/core';
import * as createjs from 'createjs-module';

@Component({
  selector: 'app-canvas02',
  templateUrl: './canvas02.component.html',
  styleUrls: ['./canvas02.component.scss']
})
export class Canvas02Component implements OnInit, DoCheck {
  stage;
  shape;
  size = 10;
  height = 200;
  color = '#FF00FF';

  constructor() { }

  @ViewChild('myCanvas', { static: false }) myCanvas;

  ngOnInit() {
    this.stage = new createjs.Stage('myCanvas');
    this.shape = new createjs.Shape();
    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener('tick', this.stage);
  }

  ngDoCheck() {
    this.shape.graphics.beginFill(this.color).drawCircle(0, 0, this.size);
    this.shape.y = this.height;

    this.stage.addChild(this.shape);
    this.stage.update();

    createjs.Tween.get(this.shape, { loop: true })
      .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
      .to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));
  }
}
