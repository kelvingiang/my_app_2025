import { Component, OnInit, HostListener } from "@angular/core";
import { UsersService } from "../service/users.service";

@Component({
  selector: "app-load-more",
  templateUrl: "./load-more.component.html",
  styleUrls: ["./load-more.component.scss"],
})
export class LoadMoreComponent implements OnInit {
  items: any[] = [];
  page: number = 1; // 当前页面
  pageSize: number = 3; // 每页显示的数据数量
  hasMoreData = true; // 是否还有更多数据

  constructor(private _usersService: UsersService) {}

  ngOnInit(): void {
    // khi load dong data đầu tiên sẽ là 0
    this.loadMore(0);
  }
  // cho man hinh thuong
  @HostListener("window:scroll", ["$event"])
  onScroll(event: Event): void {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body,
      html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight) {
      let pageNum = this.page++;
      this.loadMore(pageNum);
    }
  }

  // cho man hinh cam ung =================
  @HostListener("window:touchmove", ["$event"])
  onTouchMove(event: Event): void {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition + windowHeight >= documentHeight) {
      let pageNum = this.page++;
      this.loadMore(pageNum);
    }
  }
  ///============================================================================
  // cho man hinh cam ung mobile
  defaultTouch = { x: 0, y: 0, time: 0 };

  @HostListener("touchstart", ["$event"])
  //@HostListener('touchmove', ['$event'])
  @HostListener("touchend", ["$event"])
  @HostListener("touchcancel", ["$event"])
  handleTouch(event: any) {
    let touch = event.touches[0] || event.changedTouches[0];

    // check the events
    if (event.type === "touchstart") {
      this.defaultTouch.x = touch.pageX;
      this.defaultTouch.y = touch.pageY;
      this.defaultTouch.time = event.timeStamp;
    } else if (event.type === "touchend") {
      let deltaX = touch.pageX - this.defaultTouch.x;
      let deltaY = touch.pageY - this.defaultTouch.y;
      let deltaTime = event.timeStamp - this.defaultTouch.time;

      // simulte a swipe -> less than 500 ms and more than 60 px
      if (deltaTime < 500) {
        // touch movement lasted less than 500 ms
        if (Math.abs(deltaX) > 60) {
          // delta x is at least 60 pixels
          if (deltaX > 0) {
            this.doSwipeRight(event);
          } else {
            this.doSwipeLeft(event);
          }
        }

        if (Math.abs(deltaY) > 30) {
          // delta y is at least 60 pixels
          if (deltaY > 0) {
            this.doSwipeDown(event);
          } else {
            this.doSwipeUp(event);
          }
        }
      }
    }
  }

  doSwipeLeft(event: any) {
    console.log("swipe left", event);
    // alert("left");
  }

  doSwipeRight(event: any) {
    console.log("swipe right", event);
    // alert("right");
  }

  doSwipeUp(event: any) {
    console.log("swipe up", event);
    // alert("up");
    let pageNum = this.page++;
    this.loadMore(pageNum);
  }

  doSwipeDown(event: any) {
    console.log("swipe down", event);
    // alert("down");
  }
  //======================================================================================

  loadMore(pageNum: number): void {
    if (pageNum != this.page || this.page == 0) {
      this._usersService
        .getUserLoadMore(pageNum, this.pageSize)
        .subscribe((response: any) => {
          this.items = this.items.concat(response.data);
          this.hasMoreData = response.hasMore;
        });
    }
  }
}
