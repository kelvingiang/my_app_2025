import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChildren,
  ViewChild,
  QueryList,
  Renderer2,
  ElementRef,
} from "@angular/core";
import { WordpressService } from "../../../service/wordpress.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit, AfterViewInit {
  data: any = [];
  allData: any = [];
  content: any = "";
  id:any = "";

  // @ViewChild("imageElement", { static: false }) imageElement!: ElementRef;

  // @ViewChild("container", { static: false }) container!: ElementRef;
  // @ViewChildren('.aligncenter') aligncenterElements!: QueryList<ElementRef>;
  @ViewChild("container", { static: false }) container!: ElementRef;

  constructor(
    private _wordpressService: WordpressService,
    private _ActivatedRouter: ActivatedRoute,
    private _router: Router,
    // private renderer: Renderer2,
    // private el: ElementRef
    
  ) {}

  ngOnInit(): void {
     this._ActivatedRouter.params.subscribe((params) => {
      this.id = params["id"]; // 'id'应该与路由配置中的参数名相对应
      // 在这里可以使用ID参数执行您的逻辑
      this._wordpressService.getAdvertisingDetail(this.id).subscribe(
        (res) => {
          this.data = res;
        },
        (err) => {
          console.log("error", err);
        }
      );

      this._wordpressService.getAdvertising().subscribe(
        (res) => {
          console.log(this.id + 'ssssss');
          this.allData = res.filter((item: { id: any }) => item.id != this.id);
        },(err)=>{
          console.log("Error", err);
        }
      );
    });
  }

  ngAfterViewInit() {
    //phải dùng settimeout để lấy đủ dữ liệu vì data này load chậm
    setTimeout(() => {
      const containerElement = this.container.nativeElement;
      const alignCenterElements =
        containerElement.querySelectorAll(".aligncenter");

      alignCenterElements.forEach((element: Element) => {
        const classNames = element.className;
        console.log("元素的类名：", classNames);
        element.setAttribute('style', 'width: 80%; margin-left: 10%; margin-top: 20px;margin-bottom: 20px; border-radius: 5px;');
        element.removeAttribute('height');
      
      });
    }, 700); // 延迟100毫秒以等待元素加载
    
    
  }

  onClickDetail(id: any) {
    this._router.navigate(["advertising-detail", id]);
  }
}
