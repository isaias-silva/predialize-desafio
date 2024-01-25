import { Component, OnInit } from "@angular/core";
import { EnterpriseService } from "src/app/services/enterprise.service";

@Component({
  selector: "app-enterprise",
  templateUrl: "./enterprise.component.html",
  styleUrls: ["./enterprise.component.scss"],
})
export class EnterpriseComponent implements OnInit {
  constructor(private enterpriseService:EnterpriseService) {}

  ngOnInit(): void {}
}
