import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output() backgroundClickEmitter = new EventEmitter<null>();

  constructor() {}

  ngOnInit(): void {}

  onBackgroundClick() {
    this.backgroundClickEmitter.emit();
  }
}
