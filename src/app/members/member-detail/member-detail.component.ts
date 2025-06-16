import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-member-detail',
    templateUrl: './member-detail.component.html',
    styleUrls: ['../members.component.scss']
})
export class MemberDetailComponent implements OnInit {
    @Input() id?: string;
    @Input() member_id?: string;
    @Input() member_name?: string;
    @Input() member_email?: string;
    @Input() member_address?: string;


    constructor() { }

    ngOnInit(): void { }
}
