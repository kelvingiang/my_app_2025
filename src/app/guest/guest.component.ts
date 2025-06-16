import {
  Component,
  EventEmitter,
  OnInit,
  Input,
  Output,
  Renderer2,
  HostListener,
} from "@angular/core";
// import { FormsModule } from '@angular/forms';
import { GuestService } from "./../service/guest.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-guest",
  templateUrl: "./guest.component.html",
  styleUrls: ["./guest.component.scss"],
})
export class GuestComponent implements OnInit {
  isPopupOpen: boolean = false;
  isPopupClosing: boolean = false;

  isPopupOpenUpdate: boolean = false;
  isPopupCloseUpdate: boolean = false;
  // loadData: boolean = false;
  limit = 15;
  offset = 0;
  loading = false;
  allLoaded = false;

  AdList: any = [];
  Guest: any = [];
  GuestItem: any = [];
  GuestUpdate: any = [];
  errorMessage: string = "";
  loadDataFailure: boolean = true;

  state = {
    modalGuest: false,
  };

  private scrollPosition = 0;

  // khai báo output
  @Output() GuestDetail = new EventEmitter<string>();

  constructor(
    private _guestService: GuestService,
    private _router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.loadMore();
  }

  @HostListener("window:scroll", [])
  onScroll(event: any): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    // 確認是否接近頁面底部
    if (
      scrollHeight - scrollTop <= clientHeight + 30 &&
      !this.loading &&
      !this.allLoaded
    ) {
      this.loadMore();
    }
  }

  loadMore() {
    this.loading = true;
    this.loadDataFailure = false;
    this._guestService.getGuestList(this.limit, this.offset).subscribe({
      next: (data) => {
        if (data.length > 0) {
          // them so thu tu ============
          data.forEach((item: any, index: any) => {
            item.serialNumber = this.AdList.length + index + 1; // 依據現有資料數量動態生成流水碼
          });

          this.AdList.push(...data);
          this.offset += this.limit;
        } else {
          this.allLoaded = true;
        }
        this.loading = false;
      },
      // (data) => {
      //   console.log("Guest List:", data); // 顯示數據
      //   if (data.length > 0) {
      //     // them so thu tu ============
      //     data.forEach((item: any, index: any) => {
      //       item.serialNumber = this.AdList.length + index + 1; // 依據現有資料數量動態生成流水碼
      //     });

      //     this.AdList.push(...data);
      //     this.offset += this.limit;
      //     console.log(this.AdList);
      //   } else {
      //     this.allLoaded = true;
      //   }
      //   this.loading = false;
      // },
      error: (error) => {
        this.loading = false;
        this.errorMessage = "error load data";
        console.log("error", error);
      },
      complete: () => {
        console.log("Request completed.");
      },
    });
  }

  onClickView(id: any) {
    this.isPopupOpen = true; // mo popup

    this._guestService.getGuestDetail(id).subscribe(
      (res) => {
        this.GuestItem = res;
        return this.GuestItem;
      },
      (err) => {
        console.log("error", err);
      }
    );
  }

  onClickModify(id: any) {
    // this._router.navigate(["guest-modify", id]);
    this.isPopupOpenUpdate = true; // mo popup

    this._guestService.getGuestDetail(id).subscribe(
      (res) => {
        this.GuestUpdate = res;
        // console.log(this.GuestUpdate);
        return this.GuestUpdate;
      },
      (err) => {
        console.log("error", err);
      }
    );
  }

  // updata data không cần phải gọi url
  receivedItem: any;
  outputResult($event: any): void {
    this.receivedItem = $event;
    const index = this.AdList.findIndex(
      (item: { id: number }) => item.id === $event.id
    );
    if (index !== -1) {
      this.AdList[index].fullName = this.receivedItem.name;
      this.AdList[index].email = this.receivedItem.email; // 用修改後的物件替換陣列中的對應項目
    }
  }
  // them moi =================================================
  addNew() {
    this._router.navigate(["guest-new"]);
  }

  //== delete ap dung comform ====================================================

  onClickDelete(id: number, name: string) {
    const userConfirmed = confirm("確定刪除 '"+ name + "' 嗎?");

    if (userConfirmed) {
      this._guestService.deleteGuest(id).subscribe(
        (res) => {
          // cập nhật là Adlist không cẩn phải refrest trang
          this.AdList = this.AdList.filter((ad: { id: number }) => ad.id !== id);
        },
        (err) => {
          console.log("error", err);
        }
      );
    } else {
      console.log("操作已取消。");
    }
  }


  //=======================================================

  closePopup() {
    this.isPopupClosing = true;
    setTimeout(() => {
      this.enableScroll(); // mo lai thanh cuon doc
      this.GuestItem = null;
      this.isPopupOpen = false;
      this.isPopupClosing = false;
    }, 500); // 動畫時間與 SCSS 中的 0.3s 對應
  }

  closePopupUpdate() {
    this.isPopupCloseUpdate = true;
    setTimeout(() => {
      this.enableScroll(); // mo lai thanh cuon doc
      this.GuestItem = null;
      this.isPopupOpenUpdate = false;
      this.isPopupCloseUpdate = false;
    }, 500); // 動畫時間與 SCSS 中的 0.3s 對應
  }

  // khi popup se dung 2 function nay vo hieu qua thanh cuon
  disableScroll() {
    // 紀錄當前滾動位置
    this.scrollPosition = window.scrollY;

    // 固定滾動位置
    this.renderer.setStyle(document.body, "overflow", "hidden");
    this.renderer.setStyle(document.body, "position", "fixed");
    this.renderer.setStyle(document.body, "top", `-${this.scrollPosition}px`);
    this.renderer.setStyle(document.body, "width", "100%");
  }

  enableScroll() {
    // 恢復滾動條
    this.renderer.removeStyle(document.body, "overflow");
    this.renderer.removeStyle(document.body, "position");
    this.renderer.removeStyle(document.body, "width");

    // 恢復滾動到之前的位置
    // window.scrollTo(0, this.scrollPosition);

    // 移除固定位置
    // this.renderer.removeStyle(document.body, "top");
  }
}
