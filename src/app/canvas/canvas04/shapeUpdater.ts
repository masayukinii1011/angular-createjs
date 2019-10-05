import * as createjs from 'createjs-module';
import { Shape } from './shape';

export class ShapeGenerator {
  shape: Shape;
  shapes: any = [];
  maxLife = 200;
  vx: number;
  vy: number;
  life: number;

  constructor(stage) {
    this.vx = 30 * (Math.random() - 0.5);
    this.vy = 30 * (Math.random() - 0.5);
    this.life = this.maxLife * (Math.random() - 0.5);
    this.generateShape(stage);
    this.updateShape(stage);
  }

  // 図形生成
  generateShape(stage) {
    this.shape = new Shape(this.vx, this.vy, this.life);
    this.shape.graphics
      .beginFill(createjs.Graphics.getHSL(360 * Math.random(), 100 * Math.random(), 100 * Math.random()))
      .beginStroke(createjs.Graphics.getHSL(360 * Math.random(), 100 * Math.random(), 100 * Math.random()))
      .setStrokeStyle(10 * Math.random())
      .drawPolyStar(0, 0, 100 * Math.random(), 20 * Math.random(), Math.random(), 360 * Math.random());

    this.shape.alpha = Math.random() + 0.5;

    // マウス追従
    this.shape.x = stage.mouseX;
    this.shape.y = stage.mouseY;

    this.shapes.push(this.shape);

    stage.addChild(this.shape);
  }

  // 図形更新
  updateShape(stage) {
    for (let i = 0; i < this.shapes.length; i++) {
      const shape = this.shapes[i];

      // 重力
      shape.vy += 1;

      // 摩擦
      shape.vx *= 0.96;
      shape.vy *= 0.96;

      // 速度を位置に適用
      shape.x += shape.vx;
      shape.y += shape.vy;

      // 地面
      if (shape.y > stage.canvas.height) {
        // 行き過ぎ補正
        shape.y = stage.canvas.height;
        // Y軸の速度を反転
        shape.vy *= -1;
      }

      // 図形の大きさを残り寿命依存にする
      const scale = shape.life / this.maxLife;
      shape.scaleX = shape.scaleY = scale;

      // 残り寿命を減らす
      shape.life -= 1;

      // 残り寿命が0以下になったらステージ及び配列から削除
      if (shape.life <= 0) {
        stage.removeChild(shape);
        this.shapes.splice(i, 1);
      }
    }
  }
}
