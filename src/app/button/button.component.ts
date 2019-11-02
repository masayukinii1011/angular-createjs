import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() link: string;
  @Input() class: string;
  @Input() isWork: boolean;

  @Output() buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
