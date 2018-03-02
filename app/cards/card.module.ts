import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";


import { CardComponent } from "./card.component";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        TNSFontIconModule.forRoot({
            'fa': 'fonts/font-awesome.css'
        }),
    ],
    declarations: [
        CardComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class CardModule {
}
