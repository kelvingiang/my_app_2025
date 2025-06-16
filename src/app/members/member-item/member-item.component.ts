import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-member-item',
    templateUrl: './member-item.component.html',
    styleUrls: ['../members.component.scss']
})
export class MemberItemComponent implements OnInit {
    // khai báo input
    @Input() id?: string;
    @Input() member_id?: string;
    @Input() member_name?: string;
    @Input() member_email?: string;

    // khai báo output
    @Output() MemberDetail = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void { }

    // giá trị trả về ID sau khi click 
    viewDetail(id:any){
       return this.MemberDetail.emit(this.id);
    }
}
