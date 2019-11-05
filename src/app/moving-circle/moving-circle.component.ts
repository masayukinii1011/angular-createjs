import { Component, OnInit } from '@angular/core';
import * as createjs from 'createjs-module';
import { CreateJsService } from '../service/create-js.service';
import { Circle } from './circle';

@Component({
  selector: 'app-moving-circle',
  templateUrl: './moving-circle.component.html',
  styleUrls: ['./moving-circle.component.scss'],
  providers: [CreateJsService]
})
export class MovingCircleComponent implements OnInit {
  private object: Circle;
  public margin: string;
  public size: number;

  public color = '#000';
  public circleSize = 10;
  public speed = 500;
  public x1 = 100;
  public y1 = 100;
  public x2 = 200;
  public y2 = 200;
  public x3 = 300;
  public y3 = 300;

  constructor(private createJsService: CreateJsService) { }

  ngOnInit() {
    this.object = new Circle();
    this.margin = this.createJsService.margin;
    this.size = this.createJsService.setSize();
    this.createJsService.setStage();
    this.createJsService.setObject(this.object);
    this.createJsService.setTicker();
    createjs.Ticker.addEventListener('tick', this.update.bind(this));
    this.draw();
    this.setBackground();
  }

  private update() {
    this.createJsService.update();
  }

  public draw() {
    this.object.draw(this.createJsService.stage, this.color, this.circleSize, this.speed, this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }

  public setBackground() {
    this.createJsService.setBackground();
  }
}
