import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { GuestService } from "./../../service/guest.service";
import { ActivatedRoute,  Router  } from "@angular/router";


@Component({
  selector: "app-guest-modify",
  templateUrl: "./guest-modify.component.html",
  styleUrls: ["../guest.component.scss"],
})
export class GuestModifyComponent implements OnInit {
  id: string = "";
  @Input()  guest: any = [];
  @Output() closePopup: EventEmitter<void> = new EventEmitter();
  @Output() updateResult: EventEmitter<any>  = new EventEmitter();
  
  constructor(
    private _guestService: GuestService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) {}

  ngOnInit() {
    // chú ý snapshot get params sự dụng tốt khi không tại sự dụng
    // vd: nhập số id mới không phải lick vô link thì sẽ không tự lấy data mới
    // this.id = this._activatedRoute.snapshot.params["id"];

    // lay du lieu tu service phai ap dung cach nay
    // this._guestService.getGuestDetail(this.id).subscribe(
    //   (res) => {
    //     this.guest.id = res.id;
    //     this.guest.name = res.name;
    //     this.guest.email = res.email;
    //     return this.guest;
    //   },
    //   (err) => {
    //     console.log("error", err);
    //   }
    // );
  }

  onSubmit() {
    this._guestService.updateGuest(this.guest.id, this.guest).subscribe({
      next: (response) => {
        // console.log('User updated successfully:', response);
        // console.log(this.guest);
        // alert('Update successful!');
        this.updateResult.emit(this.guest); // 發送事件通知父元件
        this.closePopup.emit();
        // return response;
        // this._router.navigate(["guest"]);
      },
      error: (err) => {
        console.error('Error updating user:', err);
        alert('Update failed! ..');
      },
    });
  } 
  

  cancel() {
    this.closePopup.emit(); // 發送事件通知父元件
  }
}
