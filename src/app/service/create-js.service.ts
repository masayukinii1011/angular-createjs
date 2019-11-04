import { Injectable } from '@angular/core';
import * as createjs from 'createjs-module';

@Injectable({
  providedIn: 'root'
})
export class CreateJsService {
  public stage: createjs.Stage;
  public object: createjs.Shape;
  private background: createjs.Shape;
  private bg = ['#ff9a9e', '#fda085', '#96e6a1', '#e2ebf0', '#a18cd1', '#ffecd2', '#84fab0'];
  public margin = '0 auto';

  private innerWidth = window.innerWidth * 0.94;
  private innerHeight = window.innerHeight * 0.82;

  public width: number;
  public height: number;

  constructor() {
    this.setSize();
  }

  private setSize() {
    if (this.innerWidth < this.innerHeight) {
      this.width = this.height = this.innerWidth;
    } else {
      this.width = this.height = this.innerHeight;
    }
  }

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

  public setBackground() {
    // ランダムに並び替え
    for (let i = this.bg.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = this.bg[i];
      this.bg[i] = this.bg[j];
      this.bg[j] = tmp;
    }
    this.background = new createjs.Shape();
    this.background.graphics.beginRadialGradientFill([this.bg[0], this.bg[1]], [1, 0], 0, 0, 0, 300, 300, 600)
      .rect(0, 0, this.width, this.height);
    this.background.alpha = 0.4;
    this.background.cache(0, 0, this.width, this.height);
    this.stage.addChild(this.background);
  }
}
