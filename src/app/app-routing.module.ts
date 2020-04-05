import { Routes, RouterModule } from "@angular/router";
import { HistogramComponent } from "./histogram/histogram.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        'path': '',
        'component': HistogramComponent
    }
];

@NgModule({ 
    imports: [
       RouterModule.forRoot(routes)
    ],
    exports: [RouterModule] 
 }) 
export class AppRoutingModule {}