import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent {
  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Input()
  public dynamicPlaceHolder: string = '';

  emitValue(txtInput: string):void {
    this.onValue.emit(txtInput);
  }
}
