import { Component, OnInit, ElementRef, Renderer2 } from "@angular/core";
import { XmlService } from "../service/xml.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  showMenu: boolean = false;
  applyClass: boolean = false;
  icon: boolean = false;
  mouseOver: boolean = false;
  subMenu: boolean = false;
  xmlData: any[] = [];

  // bắt đối tượng khi rẻ chuột và rời khỏi đối tượng đó
  isLeave: boolean[] = [];
  isEnter: boolean[] = [];

  constructor(private _xmlService: XmlService) {
    // set tất cả về false
    this.isLeave = Array(this.xmlData.length).fill(false);
    this.isEnter = Array(this.xmlData.length).fill(false);
  }

  ngOnInit() {
    const xmlUrl = "../../assets/xml/menu.xml";
    this._xmlService.getXmlData(xmlUrl).subscribe((data) => {
      this.xmlData = data;
    });
  }

  onChangMenu() {
    this.applyClass = true;
    this.showMenu = !this.showMenu;
    this.icon = !this.icon;
  }

  openSubMenu(index: number) {
    for (let i = 0; i < this.xmlData.length; i++) {
      if (i !== index) {
        this.xmlData[i].isSubMenuVisible = true;
      }
    }

    this.xmlData[index].isSubMenuVisible =
      !this.xmlData[index].isSubMenuVisible;
  }

  // toggleSubMenuVisibility(index: number) {
  //   this.xmlData[index].isSubMenuVisible = !this.xmlData[index].isSubMenuVisible;
  // }

  // index chuyển là la index của *ngFor="let menu of xmlData; ; let i = index" ở file html
  onMouseEnter(index: number) {
    // khi rẻ chuột vào đổi tương tất cả biến isEnter đều bằng false
    this.isEnter = new Array(this.xmlData.length).fill(false);
    // 移除其他元素的样式
    // riêng đổi tượng được rê chuột vào là true để add class cần thiết vào
    this.isEnter[index] = true;
  }
  // index chuyển là la index của *ngFor="let menu of xmlData; ; let i = index" ở file html
  onMouseLeave(index: number) {
    // khi chuột rời đổi tương tất cả biến isEnter isLeave đều bằng false để xóa hết các class không cần thiết đi
    this.isLeave = new Array(this.xmlData.length).fill(false);
    this.isEnter = new Array(this.xmlData.length).fill(false);
    // 移除其他元素的样式
    // riêng đổi tượng chuột mới rời đi  là true để add class cần thiết vào
    this.isLeave[index] = true;
  }
}
