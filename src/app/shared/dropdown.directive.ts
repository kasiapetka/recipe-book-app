import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class')
  elementClass: string;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)
      && this.elementClass !== 'open') {
        this.elementClass = 'open';
    } else {
      this.elementClass = '';
    }
  }

  constructor(private eRef: ElementRef) {
  }

}
