import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-range',
  templateUrl: './input-range.component.html',
  styleUrls: ['./input-range.component.scss']
})
export class InputRangeComponent implements OnInit {
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() value: number;

  @Output() valueChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
