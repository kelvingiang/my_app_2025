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

  constructor(
    private _guestService: GuestService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {}


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

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }
   
    this._guestService.addGuest(formData).subscribe({
    next: (response) => {
      console.log(response);
      alert("insert successful!");
      this._router.navigate(["guest"]);
      },
  error: (err) => {
      console.error('Error insert user:', err);
      alert("insert failed!");
      console.error('錯誤物件:', err);
      console.error('回應內容:', err.error); // 建議加上這行，沒錯
      }
    });
  }

  cancel() {
    this._router.navigate(["guest"]);
  }
}
