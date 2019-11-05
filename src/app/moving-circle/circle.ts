import * as createjs from 'createjs-module';

export class Circle {
  private circle: createjs.Shape;

  constructor() { }

  public draw(stage: any, color: string, circleSize: number, speed: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
    this.circle = new createjs.Shape();
    this.circle.graphics.beginFill(color).drawCircle(0, 0, circleSize);

    stage.addChild(this.circle);

    createjs.Tween.get(this.circle, { loop: true })
      .to({ x: x1, y: y1 }, speed)
      .to({ x: x2, y: y2 }, speed)
      .to({ x: x3, y: y3 }, speed);
  }
}
