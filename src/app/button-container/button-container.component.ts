import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-container',
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.scss']
})
export class ButtonContainerComponent implements OnInit {
  @Input() color1: string;
  @Input() color2: string;
  @Input() color3: string;
  @Input() color4: string;

  @Input() label1: string;
  @Input() label2: string;
  @Input() label3: string;
  @Input() label4: string;

  @Input() isWork1: boolean;
  @Input() isWork2: boolean;
  @Input() isWork3: boolean;

  @Output() buttonClick1 = new EventEmitter();
  @Output() buttonClick2 = new EventEmitter();
  @Output() buttonClick3 = new EventEmitter();
  @Output() buttonClick4 = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
