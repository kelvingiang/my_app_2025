import {
  Component,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-child-onChanges",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"],
})
export class ChildOnChangesComponent implements OnInit {
  @Input() lampStatus: boolean = false;
  messenger: string = "";
  lampColor: string = "";
  color: string = "";

  constructor() {}

  ngOnInit(): void {}

  //ngOnChanges 是 Angular 生命周期钩子之一，用于在输入属性发生变化时执行一些操作。
  //当输入属性的值发生变化时，Angular 会自动调用 ngOnChanges 方法，并传递一个参数，该参数包含了变化的信息
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["lampStatus"]) {
      this.lampStatus = changes["lampStatus"].currentValue;
      if (this.lampStatus) {
        this.messenger = "lamp on";
      } else {
        this.messenger = "lamp off";
      }
    }
  }

  //ngDoCheck 是 Angular 生命周期钩子之一，用于监测并在组件每次检测变化时执行自定义逻辑。
  //与 ngOnChanges 不同，ngDoCheck 不仅在输入属性发生变化时被调用，还会在其他变化引起的检测周期内被调用
  ngDoCheck(): void {
    if (this.lampStatus == true) {
      console.log("DO check");
      this.lampColor = this.color;
    }
  }

  selectColor(color: string) {
    this.color = color;
    console.log(color);
  }
}
