// Before Implementing the AppRouting, we used EventEmitters
// import { Component, EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    // Before Implementing the AppRouting, we used EventEmitters
    // @Output() featureSelected = new EventEmitter<string>();
    
    // onSelect(feature: string) {
    //     this.featureSelected.emit(feature);
    // }
}