import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ClientService } from "src/app/services/client.service";

@Component({
  selector: "app-client-detail",
  templateUrl: "./client.details.component.html",
  styleUrls: ["./client.details.component.scss"],
})
export class ClientDetailsComponent implements OnInit {
  constructor(private clientService: ClientService,private route: ActivatedRoute,private router: Router) { }
  client: Client;
  totals: TotalForCompany

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
     
     const id= params.get('id');

     this.clientService.getById(id).subscribe(
      (client: Client) => {
        this.client = client;
        console.log(client)
        if(!this.client){
          this.router.navigate(['/client'])

        }
      },
      (error) => {
      console.log(error)
        this.router.navigate(['/client'])
      }
     )
     this.clientService.getTotalsByCompany(id).subscribe(
      (info: TotalForCompany) => {
        this.totals=info
      },
      (error) => {
      
        this.router.navigate(['/client'])
      }
     )
    })
  }
  
  
}
