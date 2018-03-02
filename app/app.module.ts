import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { appRoutes, authProviders } from "./app.routing";
import { AppComponent } from "./app.component";
import { BackendService, LoginService, setStatusBarColors } from "./shared";

import { LoginModule } from "./login/login.module";
import { GroceriesModule } from "./groceries/groceries.module";
import { CardService } from "./cards/card.service";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";

setStatusBarColors();

@NgModule({
    providers: [
        BackendService,
        LoginService,
        authProviders,
        CardService
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        LoginModule,
        GroceriesModule,
        TNSFontIconModule.forRoot({
            'fa': 'fonts/font-awesome.css'
        })
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
