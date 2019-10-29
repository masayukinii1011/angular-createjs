import * as createjs from 'createjs-module';

export class Shape extends createjs.Shape {
  vx: number;
  vy: number;
  life: number;

  constructor(vx: number, vy: number, life: number) {
    super();
    this.vx = vx;
    this.vy = vy;
    this.life = life;
  }
}
