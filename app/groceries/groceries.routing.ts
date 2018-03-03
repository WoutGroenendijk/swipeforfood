import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GroceriesComponent } from "./groceries.component";
import { AuthGuard } from "../auth-guard.service";
import { CardComponent } from "../cards/card.component";
import { FilterComponent } from "./filter.component";


const groceriesRoutes: Routes = [
  { path: "groceries", component: CardComponent, canActivate: [AuthGuard] },
  { path: "filter", component: FilterComponent, canActivate: [AuthGuard] },
];
export const groceriesRouting: ModuleWithProviders = RouterModule.forChild(groceriesRoutes);