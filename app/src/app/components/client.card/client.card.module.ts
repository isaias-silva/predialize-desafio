import { NgModule } from "@angular/core";
import { ClientCardComponent } from "./client.card.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ClientCardComponent],
    exports: [ClientCardComponent],
    imports: [CommonModule],
})
export class ClientCardModule { }
