import { Directive, HostListener, Host, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private ele: ElementRef) { }

  @Input('appInputFormat') format;

   @HostListener('blur') onBlur() {
     
    let val:string = this.ele.nativeElement.value;

    if (this.format == 'uppercase')
     this.ele.nativeElement.value = val.toUpperCase();
    else
     this.ele.nativeElement.value = val.toLowerCase();
  }
}
