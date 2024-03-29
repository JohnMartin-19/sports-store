import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";
import { cartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";  
import { RouterModule } from "@angular/router";  
@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule,RouterModule],
    declarations: [StoreComponent, CounterDirective,cartSummaryComponent,CartDetailComponent,CheckoutComponent],
    exports: [StoreComponent,CartDetailComponent,CheckoutComponent],  // make sure the component can be exported for other modules to use it
})
export class StoreModule { }
