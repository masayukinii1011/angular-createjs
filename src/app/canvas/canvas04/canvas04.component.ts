import { Component, AfterViewInit } from '@angular/core';
import * as createjs from 'createjs-module';
import { ShapeGenerator } from './shapeGenerator';

@Component({
  selector: 'app-canvas04',
  templateUrl: './canvas04.component.html',
  styleUrls: ['./canvas04.component.scss']
})
export class Canvas04Component implements AfterViewInit {
  stage: createjs.Stage;
  shapeGenerator: ShapeGenerator;

  // @ViewChild('canvas', { static: false }) canvas;

  constructor() { }

  ngAfterViewInit() {
    this.initStage();
    this.initShape();
    this.initTicker();
  }

  initStage() {
    this.stage = new createjs.Stage('canvas');
  }

  initShape() {
    this.shapeGenerator = new ShapeGenerator();
  }

  initTicker() {
    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener('tick', this.draw.bind(this));
  }

  draw() {
    this.shapeGenerator.generateShape(this.stage);
    this.shapeGenerator.updateShape(this.stage);
    this.stage.update();
  }
}
