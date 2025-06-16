import { Component, OnInit } from "@angular/core";
import { AgmCoreModule } from '@agm/core';

declare const google: any;
@Component({
  selector: "app-local-map",
  templateUrl: "./local-map.component.html",
  styleUrls: ["./local-map.component.scss"],
})
export class LocalMapComponent implements OnInit {
  ngOnInit(): void {
   this.initMap();
  }

  initMap() {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        // 10.787722546155852, 106.70526914360407
        center: { lat: 10.787722546155852, lng: 106.70526914360407 },
        zoom: 18,
      }
    );

    // 获取用户位置
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLatLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          console.log("geolocation lat" + userLatLng.lat);
          console.log("geolocation lng" + userLatLng.lng);
          // 在地图上标注用户位置
          new google.maps.Marker({
            position: userLatLng,
            map: map,
            title: "Your Location sssssssssssss",
          });
          // 将地图中心设置为用户位置
          map.setCenter(userLatLng);
          console.log(userLatLng);
     
        },
        (error) => {
          console.log("error 6669696969");
          console.error("Error getting user location:");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }
}
