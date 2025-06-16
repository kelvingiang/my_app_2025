import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  AfterViewInit,
  OnInit,
} from "@angular/core";
import { ScrollService } from "src/app/service/scroll.service";

@Component({
  selector: "app-scroll",
  templateUrl: "./scroll.component.html",
  styleUrls: ["./scroll.component.scss"],
})
export class ScrollComponent implements AfterViewInit, OnInit {
  abcElements: HTMLElement[] = [];
  listData: any = [];
  page: number = 1; // 当前页面

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private service: ScrollService
  ) {}

  ngOnInit() {
    this.listData = this.service.getdate(this.page);
  }

  // sau khi load page xong tim den cac class item ========
  ngAfterViewInit() {
    this.abcElements = this.elementRef.nativeElement.querySelectorAll(".item");

    // Add 'show' class to the first 5 elements
    for (let i = 0; i < Math.min(3, this.abcElements.length); i++) {
      this.renderer.addClass(this.abcElements[i], "show");
    }
  }

  // khi DOM có thay đổi sẽ cập nhật lại số lượng các class item
  ngAfterViewChecked(): void {
    this.abcElements = this.elementRef.nativeElement.querySelectorAll(".item");
  }

  // bắt sử kiện scrolling
  @HostListener("window:scroll", ["$event"])
  // khi scroll den xuat hien tren man hinh se them class show vao class item
  onScroll() {
    this.abcElements.forEach((element) => {
      const isVisible = this.isVisible(element);
      if (isVisible) {
        this.renderer.addClass(element, "show");
      } else {
        // this.renderer.removeClass(element, 'show');
      }
    });

    //=====================================================================================
    // khi scroll xuống đến cuối màn hình sẽ load thêm dữ liệu
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

  ///============================================================================
  // cho man hinh cam ung mobile 
  // khi mobile re đến cuối trang sẽ load thêm dữ liệu
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

  doSwipeUp(event: any) {
    let pageNum = this.page++;
    this.loadMore(pageNum);
  }

  doSwipeDown(event: any) {
    console.log("swipe down", event);
  }
//================================================================================================



  // kiem tra cac vi tri class item voi do cao man hinh de tra ve true flash
  isVisible(element: HTMLElement): boolean {
    const elementRect = element.getBoundingClientRect();
    const elementTopOffset = elementRect.top;
    const windowHeight = window.innerHeight;

    return elementTopOffset <= windowHeight && elementTopOffset >= 500;
  }

  //======================================================================================
// load thêm dữ liệu 
  loadMore(pageNum: number): void {
    if (pageNum != this.page || this.page == 0) {
      // concat là cộng mản với mản =====
      this.listData = this.listData.concat(this.service.getdate(this.page));
    }
  }
}
