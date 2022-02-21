import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]' //using this selector
})
export class HoverEffectDirective {

  constructor(public elementRef:ElementRef) { }
  @Input('appHoverEffect') hoverClass:any;  
  
  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.classList.add(this.hoverClass); //using hostlistener adding the functioanlity of mouseneter
 }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.hoverClass);
  }

}
