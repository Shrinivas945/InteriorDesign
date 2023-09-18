import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { FooterComponent } from "../footer/footer.component";
import { Expansion } from "@angular/compiler";
import { HeaderComponent } from "../header/header.component";

@NgModule({
    declarations: [ 
        FooterComponent,
        HeaderComponent
    ],
imports:[
    IonicModule
],
exports:[
    FooterComponent,
    HeaderComponent
]
})
export class SharedModule{
    
}

