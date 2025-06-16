import { Component, OnInit } from "@angular/core";
import { WordpressService } from "../../service/wordpress.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-advertising",
  templateUrl: "./advertising.component.html",
  styleUrls: ["./advertising.component.scss"],
})
export class AdvertisingComponent implements OnInit {
  AdList: any = [];
  content: string = "";
  loadData: boolean = false;
  imgURl : string = "../../../assets/images/error/no-data.png";

  constructor(
    private _wordpressService: WordpressService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._wordpressService.getAdvertising().subscribe(
      (res) => {
        this.loadData = true;
        this.AdList = res;
        this.content = this.AdList[0]["content"];
      },
      (err) => {
        this.loadData = false;
        console.log("error", err);
      }
    );
  }

  onClickDetail(id: any) {
    this._router.navigate(["advertising-detail", id]);
  }

  splitContent(val: string): string {
    // 使用 split() 方法切分 content，并返回结果数组
    if (val.indexOf("<img") != -1) {
      const parts = val.split("<img");

      return parts[0].substring(0, 50) + "img img img";
    } else {
      return val.substring(0, 50) + 'not not not';
    }
  }
}
