import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"],
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() input_name = "";
  @Input() the_title = "";

  @Output() OutputText = new EventEmitter<string>();

  data: Array<any> = [];
  childMessage: string = "";
  back: string = "back value";
  checkTitle: boolean = true;
  checkContent: boolean = false;
  checkView: boolean = false;
  showDiv: boolean = false;

  constructor() {
    console.log("Constructor");
  }

  ngOnInit(): void {
 
    this.data.push("ngOnInit");
    console.log("ngOnInit");
    setTimeout(() => {
      this.checkView = true;
      this.showDiv = true;
    }, 20000);
  }

  // khi có thay đổi ngoài ng-content hay input sẽ chạy function này =========
  // khi fucntion này sẽ chạy luôn các fucntion như ngAfterContentChecked =========
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["the_title"]) {
      this.childMessage = changes["the_title"].currentValue;
      console.log("the title changed haaaaaaaa");
      this.checkTitle = !this.checkTitle;
      this.checkContent = !this.checkContent;
    }
    this.data.push("ngOnChanges");
    console.log("ngOnChanges");
    this.data = [];
  }

  // se chạy khi có thay đổi
  ngDoCheck(): void {
 
    this.data.push("ngDoCheck");
    console.log("ngDoCheck");
  }

  ngAfterContentInit(): void {
    this.data.push("ngAfterContentInit");
    //  console.log("ngAfterContentInit");
  }

  // khi thay đổi nội dụng trong ng-content chạy function này
  // khi chạy function này không ảnh hưởng các function khác
  ngAfterContentChecked(): void {
    this.data.push("ngAfterContentChecked");
    console.log("ngAfterContentChecked");
    this.checkContent = !this.checkContent;
  }

  ngAfterViewInit(): void {
    this.data.push("ngAfterViewInit");
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    this.data.push("ngAfterViewChecked");
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy roi khoi component vong doi");
  }
  //==================================================

  changeInput(text: string) {
    this.OutputText.emit(text);
  }
}
