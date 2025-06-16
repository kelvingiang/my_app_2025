import { Component, OnInit } from '@angular/core';

// chen TranslateService để chuyên đổi ngôn ngữ =========
import { TranslateService } from '@ngx-translate/core';
import { StateService } from '../service/state.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent implements OnInit {

  lang= localStorage.getItem('lang');

  constructor(
    private _state: StateService,
    private _translate: TranslateService
  ) {}

  ngOnInit() {
    // this._translate.addLangs(['zh_TW', 'en_US', 'vi_VN']); // các loại ngôn ngữ sẽ được chuyển đổi
    // this._translate.setDefaultLang('en_US'); // det ngôn ngữ default,
    // this._translate.setDefaultLang('en_US');
    // this._translate.use(this._state.language || 'en_US');

  }

  // function chuyên đổi ngôn ngữ ============================
  switchLang(language: string) {
    // set lại state ngôn ngữ trong service 
    this._state.setLanguage(language);
    this._translate.use(language);
    // this.reloadPage();
  }

//   reloadPage() {
//     window.location.reload();
//  }
}
