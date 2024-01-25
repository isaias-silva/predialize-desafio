import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  constructor(private clientService: ClientService) { }
  clients: ClientsGlobal[];
  totals: TotalsGeneric

  ngOnInit(): void {
    this.clientService.getAll().subscribe(
      (clients: ClientsGlobal[]) => {
        this.clients = clients;
      },
      (error) => {
        console.error('Erro ao obter clientes', error);
      }
    );
    this.clientService.getGeneralTotals().subscribe(
      (info: TotalsGeneric) => {
        this.totals = info
      },
      (error) => {
        console.error('Erro ao obter clientes', error);
      }
    )
  }
  onInputChange(query: string): void {
    this.clientService.getByName(query).subscribe(
      (clients: ClientsGlobal[]) => {
        this.clients = clients;
      },
      (error) => {
        console.error('Erro ao obter clientes', error);
      }
    );

  }
}
