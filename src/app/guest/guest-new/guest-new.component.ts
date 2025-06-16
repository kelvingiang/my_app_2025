import { Component, OnInit } from "@angular/core";
import { GuestService } from "./../../service/guest.service";
import { ActivatedRoute, Router } from "@angular/router";
import {FormControl} from '@angular/forms';

@Component({
  selector: "app-guest-new",
  templateUrl: "./guest-new.component.html",
  styleUrls: ["../guest.component.scss"],
})
export class GuestNewComponent implements OnInit {
  formData = {
    name: "",
    country: "",
    position: "",
    email: "",
    phone: "",
    date: "",
  };
  selectedFile: File | null = null;

  // const formData = new FormData();

  constructor(
    private _guestService: GuestService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {}

  // 生成當天的日期
  // getCurrentDate(): string {
  //   const today = new Date();
  //   const year = today.getFullYear();
  //   const month = String(today.getMonth() + 1).padStart(2, "0"); // 月份從 0 開始，需要加 1
  //   const day = String(today.getDate()).padStart(2, "0");
  //   return `${day}-${month}-${year}`; // 例如: "2024-11-25"
  // }

  // 處理檔案選擇
  // onFileSelected(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   if (input?.files?.length) {
  //     this.selectedFile = input.files[0];
  //     console.log("選擇的檔案:", this.selectedFile);
  //   }
  // }

  onFileSelected(event: Event): void {
    console.log(event);
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files && input.files.length > 0 ? input.files[0] : null;
  }

  onSubmit() {

    const formData = new FormData();
    formData.append("full_name", this.formData.name);
    formData.append("country", this.formData.country);
    formData.append("position", this.formData.position);
    formData.append("email", this.formData.email);
    formData.append("phone", this.formData.phone);
    // formData.append("create_date", this.getCurrentDate());

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
 //   } else {
      // console.warn('尚未選擇檔案');
      //return;
    }
    // formData.append("file", this.selectedFile);
    // 加入當天的日期到 formData 中
    // this.formData.date = this.getCurrentDate();
    // this.formData.file = this.selectedFile;
    // console.log(formData);
    this._guestService.addGuest(formData).subscribe({
      next: (response) => {
        console.log(response);
        // console.log('User insert successfully:', response);
        alert("insert successful!");
        this._router.navigate(["guest"]);
      },
      error: (err) => {
        console.error('Error insert user:', err);
        alert("insert failed! ..");
      },
    });
  }

  cancel() {
    this._router.navigate(["guest"]);
  }
}
