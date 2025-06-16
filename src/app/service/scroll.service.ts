import { Injectable } from "@angular/core";
import { ClassScroll } from "./../class/class.scroll";

@Injectable({
  providedIn: "root",
})
export class ScrollService {
  private list: ClassScroll[] = [];

  constructor() {
    for (let i = 1; i < 21; i++) {
      this.addToList(
        new ClassScroll(
          i,
          "title " + i,
          "lorem 50 dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dol duis. Ut enim ad minim veniam,"
        )
      );
    }
  }

  public getdate(num: number) {
    const data: any[] = [];
    if (num === 1) {
      for (let i = 0; i <= 4; i++) {
        data.push(this.list[i]);
      }
    }

    if (num === 2) {
      for (let i = 5; i <= 9; i++) {
        data.push(this.list[i]);
      }
    }

    if (num === 3) {
      for (let i = 10; i <= 14; i++) {
        data.push(this.list[i]);
      }
    }

    if (num === 4) {
      for (let i = 15; i <= this.list.length - 1; i++) {
        data.push(this.list[i]);
      }
    }
    return data;
  }

  public addToList(item: ClassScroll) {
    this.list.push(item);
    return this.list;
  }

  // public memberList() {
  //   return this.members;
  // }

  // public getMemberByName(name: string) {

  //   // lấy dong dữ liệu so sánh giá trị trả về là tên
  //   const selectItem = this.groupList.find(x => x.name == name);
  //   // lay iD để so sánh lấy giá trị trả về
  //   let obj = this.members.filter((item) => item.group_id === selectItem.id);
  //   return obj;
  // }

  // public getMemberByID(id: number) {
  //   // lấy dong dữ liệu so sánh giá trị trả về là id
  //   const selectItem = this.members.find(x => x.id == id);
  //   // lay iD để so sánh lấy giá trị trả về
  //  // let obj = this.members.filter((item) => item.group_id === selectItem.id);
  //   return selectItem;
  // }
}
