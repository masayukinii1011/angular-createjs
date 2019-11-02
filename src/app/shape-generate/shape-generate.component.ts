import { Component, AfterViewInit } from '@angular/core';
import * as createjs from 'createjs-module';
import { CreateJsService } from '../service/create-js.service';
import { ShapeGenerator } from './shapeGenerator';

@Component({
  selector: 'app-shape-generate',
  templateUrl: './shape-generate.component.html',
  styleUrls: ['./shape-generate.component.scss'],
  providers: [CreateJsService]
})
export class ShapeGenerateComponent implements AfterViewInit {
  private object: ShapeGenerator;
  private bg1 = '#ff9a9e';
  private bg2 = '#a18cd1';
  private scale = 1;
  private maxLife = 100;
  private gravity = 0.1;

  public nowScale = 'Small';
  public nowMaxLife = 'Short';
  public nowGravity = 'Light';

  width = 600;
  height = 600;

  constructor(private createJsService: CreateJsService) {
    this.object = new ShapeGenerator();
  }

  ngAfterViewInit() {
    this.createJsService.setStage();
    this.createJsService.setObject(this.object);
    this.createJsService.setTicker();
    createjs.Ticker.addEventListener('tick', this.update.bind(this));
    createjs.Ticker.addEventListener('tick', this.draw.bind(this));
    this.createJsService.setBackground(this.bg1, this.bg2);
  }

  private update() {
    this.createJsService.update();
  }

  private draw() {
    this.object.draw(this.createJsService.stage, this.scale, this.maxLife, this.gravity);
  }

  public toggleScale() {
    if (this.scale === 1) {
      this.scale = 4;
      this.nowScale = 'Big';
    } else {
      this.scale = 1;
      this.nowScale = 'Small';
    }
  }

  public toggleMaxLife() {
    if (this.maxLife === 100) {
      this.maxLife = 400;
      this.nowMaxLife = 'Long';
    } else {
      this.maxLife = 100;
      this.nowMaxLife = 'Short';
    }
  }

  public toggleGravity() {
    if (this.gravity === 0.1) {
      this.gravity = 1;
      this.nowGravity = 'Heavy';
    } else {
      this.gravity = 0.1;
      this.nowGravity = 'Light';
    }
  }

  public changeBackground() {
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
    this.createJsService.setBackground(this.bg1, this.bg2);
  }
}
