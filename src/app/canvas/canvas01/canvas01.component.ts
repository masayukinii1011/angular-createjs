import { AfterViewInit, Component, DoCheck, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas01',
  templateUrl: './canvas01.component.html',
  styleUrls: ['./canvas01.component.scss']
})

export class Canvas01Component implements AfterViewInit, DoCheck {
  rectW = 100;
  rectH = 100;
  rectColor = '#FF0000';
  context: CanvasRenderingContext2D;

  constructor() { }

  @ViewChild('myCanvas', { static: false }) myCanvas;

  ngAfterViewInit() {
    // 参照をとれる
    const canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');

    this.draw();
  }

  /** 値の変更時を監視するライフサイクルイベント */
  ngDoCheck() {
    this.draw();
  }

  /** Canvas要素を更新します。 */
  draw() {
    const ctx = this.context;
    if (ctx) {
      ctx.clearRect(0, 0, 400, 400);
      ctx.fillStyle = this.rectColor;
      ctx.fillRect(0, 0, this.rectW, this.rectH);
    }
  }
}

