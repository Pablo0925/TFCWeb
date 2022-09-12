import { Component } from "@angular/core";
import { AppComponent } from "../app.component";

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html',
})
export class HeaderComponent{

    title:String="App TFC";
}