import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";

type ClientsGlobal = { image_src: string, _id: string, name: string, enterprises: number, realties: number }
type Client = {
  _id: string,
  name: string,
  image_src: string
  enterprises: Enterprise[],
}
type Enterprise = {
  _id: string,
  name: string,
  image_src: string,
  realties: string,
}
type TotalsGeneric = { clients: number, enterprise: number, realties: number }
type TotalForCompany= { enterprise: number, realties: number }
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
