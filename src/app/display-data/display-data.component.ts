import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { SpaceXServiceService } from "../Services/space-xservice.service";

@Component({
  selector: "app-display-data",
  templateUrl: "./display-data.component.html",
  styleUrls: ["./display-data.component.css"],
})
export class DisplayDataComponent implements OnInit {
  spaceX_Data: any = [];
  spinner: Observable<Boolean>;
  p: any;

  constructor(
    private spaceXService: SpaceXServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.spinner = of(true);

    this.spaceXService  
      .getData()
      .pipe(
        switchMap((data) => {
          this.spaceX_Data = data;
          return this.route.queryParamMap;
        })
      )
      .subscribe(
        (data) => {
          if (this.route.snapshot.queryParamMap.keys.length > 0) {
            console.log("queryparamap call");
            this.spinner = of(true);

            this.spaceXService.getData(data).subscribe(
              (data) => {
                this.spaceX_Data = data;
                this.spinner = of(false);
              },
              (error) => {
                console.log(error);
                this.spinner = of(false);
              },
              () => {
                console.log(this.spaceX_Data);
              }
            );
          }
          if(this.route.snapshot.queryParamMap.keys.length == 0)
            this.spinner = of(false);
        },
        (error) => {
          console.log(error);
          this.spinner = of(false);
        },
        () => {
          console.log(this.spaceX_Data);
        }
      );
  }
}
