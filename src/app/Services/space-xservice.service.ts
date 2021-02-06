import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SpaceXServiceService {
  constructor(private http: HttpClient) {}

  getData(data?) {
    console.log(data);
    let URL = " ";
    if (data) {
      let params = data.params;
      if (params.year) URL = URL + "&launch_year=" + params.year;
      if (params.lauch) URL = URL + "&launch_success=" + params.launch;
      if (params.land) URL = URL + "&land_success=" + params.land;
    }
    console.log(URL);
    return this.http.get(
      "https://api.spaceXdata.com/v3/launches?limit=100" + URL.trim()
    );
  }
}
