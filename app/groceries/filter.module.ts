import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import { FilterComponent } from "./filter.component";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";

@NgModule({
    imports: [
        TNSCheckBoxModule
    ],
    declarations: [
        FilterComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class FilterModule {

}
