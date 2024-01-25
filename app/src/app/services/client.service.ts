import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";


@Injectable()
export class ClientService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get<ClientsGlobal[]>(`${this.apiUrl}/clients`);
  }

  getById(id: string) {
    return this.http.get<Client>(`${this.apiUrl}/clients/${id}`);
  }

  getByName(name: string) {


    return this.getAll().pipe(
      map((clientes: ClientsGlobal[]) => clientes.find(cliente => cliente.name === name))
    );

  }

  getGeneralTotals() {
    return this.http.get<TotalsGeneric>(`${this.apiUrl}/clients/totalities`);

  }

  getTotalsByCompany(id: string) {
    return this.http.get<TotalForCompany>(`${this.apiUrl}/clients/totalities/${id}`);

  }
}
