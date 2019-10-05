import * as createjs from 'createjs-module';

export class Shape extends createjs.Shape {
  vx: number;
  vy: number;
  life: number;

  constructor(vx, vy, life) {
    super();
    this.vx = vx;
    this.vy = vy;
    this.life = life;
  }
}
