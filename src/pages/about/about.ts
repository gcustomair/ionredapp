import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Api} from '../../providers/api';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [Api]
})
export class AboutPage {
  datas:any;
  constructor(public navCtrl: NavController, private api: Api) {
    api.index(1).subscribe( data => {
      this.datas = data.json();
    });
  }

}
