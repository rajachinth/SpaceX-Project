import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-category-data",
  templateUrl: "./category-data.component.html",
  styleUrls: ["./category-data.component.css"],
})
export class CategoryDataComponent implements OnInit {
  yearData = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];

  LaunchData = ["true", "false"];

  LandingData = ["true", "false"];

  selectedYear: any = null;
  selectedLaunch: any = null;
  selectedLanding: any = null;
  url = {
    year: this.selectedYear,
    launch: this.selectedLaunch,
    land: this.selectedLanding,
  };
  constructor(private router: Router) {}

  ngOnInit() {}

  clickYear(data) {
    console.log(data);
    this.selectedYear = this.url.year = data;

    this.router.navigate(["/home"], {
      queryParams: {
        year: this.url.year,
        launch: this.url.launch,
        land: this.url.land,
      },
    });
  }
  clickLaunch(data) {
    console.log(data);

    this.selectedLaunch = this.url.launch = data;
    this.router.navigate(["/home"], {
      queryParams: {
        year: this.url.year,
        launch: this.url.launch,
        land: this.url.land,
      },
    });
  }
  clickLanding(data) {
    console.log(data);

    this.selectedLanding = this.url.land = data;
    this.router.navigate(["/home"], {
      queryParams: {
        year: this.url.year,
        launch: this.url.launch,
        land: this.url.land,
      },
    });
  }
}
