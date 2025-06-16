import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-vongdoi",
  templateUrl: "./vongdoi.component.html",
  styleUrls: ["./vongdoi.component.scss"],
})
export class VongdoiComponent implements OnInit {
  OnInit: string = "";
  txt_input: string = "vong doi";
  out_name: string = "";
  text_output: string = "";
  Output_value: string = "output back to parent value";

  title: string = " the title";
  content: string = " this is the content";
  show: boolean = false;

  constructor() {}

  // KHI MỚI MỞ TRANG RA SẼ THỰC HIỆN NGAY FUNCTION NÀY ====
  ngOnInit(): void {
    this.OnInit = "this is ngOnInit function";
    console.log("ngOnInit function");
    setTimeout(() => (this.title = "the title has changed"), 10000);
    setTimeout(() => (this.content = "this is the content has changed"), 15000);
    setTimeout(() => (this.show = true), 30000);
  }

  // CHUYÊN GIÁ TRỊ CHO COMPONENT CON
  changeInput() {
    this.out_name = this.txt_input;
  }

  // NHẬN GIÁ TRỊ OUTPUT TRẢ VỀ TỪ COMPONENT CON =====
  OutputText(eventData: string) {
    this.text_output = eventData;
  }

  // sẽ chạy khi view DOM có thay đổi
  ngAfterViewChecked(): void {
    console.log("afterViewChecked by parent");
  }

  // sẽ chạy đi nội dụng thay đổi như input
  ngAfterContentChecked(): void {
    console.log("afterContentChecked by parent");
    
  }

  //KHI THOÁT KHỎI COMPONENT NÀY SẺ THỰC THI FUNCTION NÀY ====
  ngOnDestroy(): void {
    console.log("OnDestroy huy cai component");
  }
}
