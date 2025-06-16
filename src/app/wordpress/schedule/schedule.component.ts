import { Component, OnInit, ElementRef, Renderer2 } from "@angular/core";
import { WordpressService } from "../../service/wordpress.service";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.scss"],
})
export class ScheduleComponent implements OnInit {
  scheduleList: any = [];
  loadData: boolean = false;
  newData: any = [];
  year: any = "";
  imgURl: string = "../../../assets/images/error/no-data.png";
  itemContentVisible: number | null = null; // 用于跟踪当前可见的item-content的ID
 


  // toArray(obj: any): any[] {
  //   return Object.values(obj);
  // }

  constructor(
    private _wordpressService: WordpressService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    // 您的日程列表数据

    //  START  KIỂU DỮ LIỆU LÀ ARRAY ===============================================================
    // PHẦN NÀY LÀ SẮP XẾP LẠI TỪ NHỎ TỚI LỚN CỦA YEAR RỒI MONTH VỚI PHẦN DATA CẦN SẮP XẾP LÀ ARRAY
    //===============================================================

    interface DataItem {
      id: string;
      name: string;
      phone: string;
      year: string;
      month: string;
    }

    const data: DataItem[] = [
      { id: "1", name: "ten 01", phone: "123", year: "2004", month: "01" },
      { id: "2", name: "ten 02", phone: "123", year: "2004", month: "04" },
      { id: "3", name: "ten 03", phone: "123", year: "2004", month: "03" },
      { id: "4", name: "ten 04", phone: "123", year: "2001", month: "10" },
      { id: "5", name: "ten 05", phone: "123", year: "2001", month: "11" },
      { id: "6", name: "ten 06", phone: "123", year: "2002", month: "12" },
      { id: "7", name: "ten 07", phone: "123", year: "2002", month: "10" },
      { id: "8", name: "ten 08", phone: "123", year: "2004", month: "01" },
      { id: "9", name: "ten 09", phone: "123", year: "2004", month: "04" },
      { id: "10", name: "ten 10", phone: "123", year: "2004", month: "03" },
      { id: "11", name: "ten 11", phone: "123", year: "2001", month: "10" },
      { id: "12", name: "ten 12", phone: "123", year: "2001", month: "11" },
      { id: "13", name: "ten 13", phone: "123", year: "2002", month: "12" },
      { id: "14", name: "ten 14", phone: "123", year: "2002", month: "01" },
      { id: "15", name: "ten 15", phone: "123", year: "2004", month: "10" },
      { id: "16", name: "ten 16", phone: "123", year: "2004", month: "04" },
      { id: "17", name: "ten 17", phone: "123", year: "2004", month: "03" },
      { id: "18", name: "ten 18", phone: "123", year: "2001", month: "03" },
      { id: "19", name: "ten 19", phone: "123", year: "2002", month: "11" },
      { id: "20", name: "ten 20", phone: "123", year: "2002", month: "10" },
    ];

    // 创建一个对象，用于按年份和月份分组数据
    console.log(data);
    const groupedData: { [year: string]: { [month: string]: DataItem[] } } = {};

    // 遍历数据并按年份和月份分组
    for (const item of data) {
      const year = item.year;
      const month = item.month;

      if (!groupedData[year]) {
        groupedData[year] = {};
      }

      if (!groupedData[year][month]) {
        groupedData[year][month] = [];
      }

      groupedData[year][month].push(item);
    }

    // 将 groupedData 转换为数组
    const groupedDataArray = Object.entries(groupedData).map(
      ([year, months]) => ({
        year,
        months: Object.entries(months).map(([month, items]) => ({
          month,
          items,
        })),
      })
    );
    // 按年份从大到小排序
    groupedDataArray.sort((a, b) => parseInt(b.year) - parseInt(a.year));
    // 然后按月份从大到小排序（在每个年份内）
    for (const group of groupedDataArray) {
      group.months.sort((a, b) => parseInt(b.month) - parseInt(a.month));
    }

    console.log(groupedDataArray);

    this.newData = groupedDataArray;

    // THE END  ===============================================================
    // PHẦN NÀY LÀ SẮP XẾP LẠI TỪ NHỎ TỚI LỚN CỦA YEAR RỒI MONTH VỚI PHẦN DATA CẦN SẮP XẾP LÀ ARRAY
    //===============================================================

    // console.log(this.arr);

    // const groupedByYear: { [year: string]: any[] } = {};

    // this.arr.sort((a: any, b: any) => {
    //   // 首先按照 "year" 属性升序排序
    //   if (a.year > b.year) {
    //     return -1;
    //   } else if (a.year > b.year) {
    //     return 1;
    //   } else {
    //     // 如果 "year" 相同，按照 "month" 属性降序排序
    //     if (a.month < b.month) {
    //       return 1;
    //     } else if (a.month > b.month) {
    //       return -1;
    //     } else {
    //       return 0;
    //     }
    //   }
    // });
    // console.log(this.arr);

    // this.arr.forEach((item: { year: string | number }) => {
    //   if (!groupedByYear[item.year]) {
    //     groupedByYear[item.year] = [];
    //   }
    //   groupedByYear[item.year].push(item);
    // });

    // console.log(groupedByYear);

    // this.newData = groupedByYear;

    // // 遍历并访问每个年份的数据
    // for (const year in groupedByYear) {
    //   if (groupedByYear.hasOwnProperty(year)) {
    //     const dataForThisYear = groupedByYear[year];
    //     console.log(year + ":", dataForThisYear);

    //     // 创建一个按月份分组的对象
    //     // const groupedByMonth: { [month: string]: Item[] } = {};
    //     const groupedByMonth: { [month: string]: any[] } = {};

    //     // 遍历当前年份的数据，按月份进行筛选
    //     for (const item of dataForThisYear) {
    //       const month = item.month;
    //       if (!groupedByMonth[month]) {
    //         groupedByMonth[month] = [];
    //       }
    //       groupedByMonth[month].push(item);
    //     }

    //     // 访问每个月份的数据
    //     for (const month in groupedByMonth) {
    //       if (groupedByMonth.hasOwnProperty(month)) {
    //         const dataForThisMonth = groupedByMonth[month];
    //         console.log(`  ${month}:`, dataForThisMonth);
    //       }
    //     }
    //   }
    // }

    // const multiDimensionalArray = [];

    // for (let i = 0; i < 3; i++) {
    //   const innerArray = [];
    //   for (let j = 0; j < 3; j++) {
    //     innerArray.push(i * 3 + j + 1);
    //   }
    //   multiDimensionalArray.push(innerArray);
    // }
    //  console.log(multiDimensionalArray);
  }

  ngOnInit(): void {
    // START  KIỂU DỮ LIỆU LÀ Object ===============================================================
    // PHẦN NÀY LÀ SẮP XẾP LẠI TỪ NHỎ TỚI LỚN CỦA YEAR RỒI MONTH VỚI PHẦN DATA CẦN SẮP XẾP LÀ Object
    //===============================================================

    interface scheduleInter {
      id: string;
      branch: string;
      createDate: string;
      date: string;
      day: string;
      month: string;
      note: string;
      place: string;
      slug: string;
      status: string;
      time: string;
      title: string;
      weekdays: string;
      year: string;
    }

    this._wordpressService.getSchedules().subscribe(
      // DỮ LIỆU ĐƯỢC GET TỪ api SERVICE
      (res) => {
        this.loadData = true;
        const scheduleData: {
          [year: string]: { [month: string]: scheduleInter[] };
        } = {};

        // 遍历数据并按年份和月份分组
        for (const item of res) {
          const year = item.year;
          const month = item.month;

          if (!scheduleData[year]) {
            scheduleData[year] = {};
          }

          if (!scheduleData[year][month]) {
            scheduleData[year][month] = [];
          }

          scheduleData[year][month].push(item);
        }

        const groupedDataArray = Object.entries(scheduleData).map(
          ([year, monthsData]) => ({
            year,
            months: Object.entries(monthsData).map(([month, items]) => ({
              month,
              items,
            })),
          })
        );

        // 首先按年份从大到小排序
        groupedDataArray.sort((a, b) => parseInt(b.year) - parseInt(a.year));

        // 然后在每个年份内按月份从大到小排序
        for (const group of groupedDataArray) {
          group.months.sort((a, b) => parseInt(b.month) - parseInt(a.month));
        }

        this.scheduleList = groupedDataArray;

        console.log(groupedDataArray);
        // THE END  ===============================================================
        // PHẦN NÀY LÀ SẮP XẾP LẠI TỪ NHỎ TỚI LỚN CỦA YEAR RỒI MONTH VỚI PHẦN DATA CẦN SẮP XẾP LÀ ARRAY
        //===============================================================
      },
      (err) => {
        this.loadData = false;
        console.log("error", err);
      }
    );
  }

  showContent(itemId: number) {
    // 检查当前点击的item是否已经可见，如果是，则隐藏它，否则显示它
    // this.toggleClasses();
   
    if (this.itemContentVisible === itemId) {
      this.itemContentVisible = null; // 隐藏item-content
    } else {
      this.itemContentVisible = itemId; // 显示item-content
    }
  }

  // toggleClasses() {
  //   const divElement = this.el.nativeElement.querySelector(".item-content");
  //   console.log(divElement);
  //   console.log("2222222");
  //   if (divElement.classList.contains("item-content-show")) {
  //     console.log("3332222222");
  //     this.renderer.removeClass(divElement, "item-content-show");
  //     this.renderer.addClass(divElement, "item-content-hide");
  //   }
  // }

  // addHideClassIfShowClassExists() {
  //   const divElement = this.el.nativeElement.querySelector('.item-content');

  //   if (divElement.classList.contains('item-content-show')) {
  //     this.renderer.addClass(divElement, 'item-content-hide');
  //   }
  // }
}
