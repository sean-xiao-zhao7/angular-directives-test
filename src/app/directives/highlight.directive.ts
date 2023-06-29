import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.backgroundColor = 'red';
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'blue';
  }
}
