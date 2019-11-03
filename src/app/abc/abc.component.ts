import { Component, OnInit } from '@angular/core';
import * as createjs from 'createjs-module';
import { CreateJsService } from '../service/create-js.service';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.scss'],
  providers: [CreateJsService]
})
export class AbcComponent implements OnInit {
  private object;

  public margin: string;
  public width: number;
  public height: number;

  constructor(private createJsService: CreateJsService) { }

  ngOnInit() {
    // this.object = new ShapeGenerator();
    this.margin = this.createJsService.margin;
    this.width = this.createJsService.width;
    this.height = this.createJsService.height;
    this.createJsService.setStage();
    this.createJsService.setObject(this.object);
    this.createJsService.setTicker();
    createjs.Ticker.addEventListener('tick', this.update.bind(this));
    createjs.Ticker.addEventListener('tick', this.draw.bind(this));
    this.setBackground();
  }

  private update() {
    this.createJsService.update();
  }

  private draw() {
    return this.object;
  }

  public setBackground() {
    this.createJsService.setBackground();
  }
}
