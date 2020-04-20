import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private translate: TranslateService) {}
  private lang: string = 'zh'
  ngOnInit() {
    // ngx-translate国际化服务相关的配置
    this.translate.addLangs(['zh', 'en'])
    this.translate.setDefaultLang(this.lang)
    const browserLang = this.translate.getBrowserLang()
    console.log('获取到浏览器的语言 = ' + browserLang)
    this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'en')
  }
}
