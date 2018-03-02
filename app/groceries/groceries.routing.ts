import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GroceriesComponent } from "./groceries.component";
import { AuthGuard } from "../auth-guard.service";
import { CardComponent } from "../cards/card.component";

const groceriesRoutes: Routes = [
  { path: "groceries", component: CardComponent, canActivate: [AuthGuard] },
];
export const groceriesRouting: ModuleWithProviders = RouterModule.forChild(groceriesRoutes);