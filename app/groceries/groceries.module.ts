import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { groceriesRouting } from "./groceries.routing";
import { GroceriesComponent } from "./groceries.component";
import { GroceryListComponent } from "./grocery-list/grocery-list.component";
import { ItemStatusPipe } from "./grocery-list/item-status.pipe";
import { CardModule } from "../cards/card.module";
import { FilterComponent } from "./filter.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        groceriesRouting,
        CardModule
    ],
    declarations: [
        GroceriesComponent,
        GroceryListComponent,
        ItemStatusPipe,
        FilterComponent,
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class GroceriesModule {
}
