import { Component } from "@angular/core";
import { BackendService } from "./shared/backend.service";

@Component({
  selector: "gr-main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent { }

BackendService.token = '';