import { Directive } from '@angular/core';
import { HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  @HostBinding('style.backgroundColor') color!:string;
@HostListener('mouseenter') mouseEnter(){
  this.color = 'green ';
}
@HostListener('mouseleave') mouseLeave(){
  this.color = 'white'
}
  constructor() { }
  ngOnInit(){
    this.color = 'white'
  }
}
