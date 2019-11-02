import { Injectable } from '@angular/core';
import * as createjs from 'createjs-module';

@Injectable({
  providedIn: 'root'
})
export class CreateJsService {
  public stage: createjs.Stage;
  public object: createjs.Shape;
  public background: createjs.Shape;

  constructor() { }

  public setStage() {
    this.stage = new createjs.Stage('canvas');
  }

  public setObject(object) {
    this.object = object;
  }

  public setTicker() {
    createjs.Ticker.framerate = 60;
  }

  public update() {
    this.stage.update();
  }

  public setBackground(bg1, bg2) {
    this.background = new createjs.Shape();
    this.background.graphics.beginRadialGradientFill([bg1, bg2], [1, 0], 0, 0, 0, 300, 300, 600)
      .rect(0, 0, 600, 600);
    this.background.alpha = 0.4;
    this.background.cache(0, 0, 600, 600);
    this.stage.addChild(this.background);
  }
}
