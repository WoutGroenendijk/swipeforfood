import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import { CheckBox } from 'nativescript-checkbox';
import { topmost } from 'ui/frame';

@Component({
    moduleId: module.id,
    templateUrl: "./filter.component.html",
    styleUrls: ["./filter-common.css"],
})

export class FilterComponent {

    @ViewChild("CB1") FirstCheckBox: ElementRef;
    constructor() { }
    public toggleCheck() {
        this.FirstCheckBox.nativeElement.toggle();
    }

    public getCheckProp() {
        console.log('checked prop value = ' + this.FirstCheckBox.nativeElement.checked);
    }
}