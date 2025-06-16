import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { PickerService, PickerRef } from 'ng-zorro-antd-mobile';
import { MemberService } from "src/app/service/member.service";

@Component({
  selector: "app-member",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.scss"],
})
export class MembersComponent implements OnInit {

  MemberList: any = [];
  memberItem: any = [];
  groupList: any = [];
  
  // TAO CHUYỂN NGÔN NGỮ TRONG FILE TS ==================
  search: string = this._translateService.instant('msg.select_member');

  value: any = [];
  name: string = "";

  state = {
    modalMember: false,
  };

  constructor(
    private _memberService: MemberService,
    private _picker: PickerService,
    private _translateService: TranslateService
  ) {}

  ngOnInit() {
    // MỚI MỞ TRANG CẤP DỮ LIỆU ĐƯỢC GET TỪ SERVICE ====================================
    this.MemberList = this._memberService.memberList();
    this.groupList = this._memberService.groupMember();
  }

  // MỞ NODEL HIỂN THỊ PHẦN CHI TIẾT MEMBER ==========================================
  showMemberDetail(id: number) {
    this.state.modalMember = true;
    this.memberItem = this._memberService.getMemberByID(id);
  }


  // ĐÓNG MODAL HIỂN THỊ PHẦN CHI TIẾT MEMBER ========================================
  closeModalMember() {
    this.state.modalMember = false;
  }


  // PHẦN SHOW SELECT TÌM PHẦN GROUP ANT DESIGN ============================
  showPicker() {

    const nameArray = this.groupList.map((obj: any) => obj.name);
    const valueArray = this.groupList.map((obj: any) => obj.id);

    const ref: PickerRef = this._picker.showPicker(
      {
        value: this.value,
        data: nameArray,
        okText: this._translateService.instant("btn.ok"),
        dismissText: this._translateService.instant("btn.cancel"),
        title: this._translateService.instant("msg.select_member"),
      },

      (result) => {
        if (result.length > 0) {
          console.log(this.value);
          this.name = result;
          this.MemberList = this._memberService.getMemberByName(result);
        } else {
          console.log("nho hon khong");
        }
      },
      (cancel) => {
        this.MemberList = this._memberService.memberList();
        this.name = this._translateService.instant("msg.select_member");
      }
    );
  }
}
