import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'app';
  showMessage = false;
  message = "";
  public simpleList = [
    [
    ],
    [
    ]
  ];
  people = ['Sam Darnold - QB', 'Josh Rosen - QB',
    'Josh Allen - QB',
    'Baker Mayfield - QB',
    'Saquon Barkley - RB',
    'Bradley Chubb - DL',
    'Quenton Nelson - OL',
    'Calvin Ridley - WR',
    'Minkah Fitzpatrick - S',
    'Roquon Smith - LB',
    'Denzel Ward - CB',
    'Derwin James - S',
    'Vita Vea - DL',
    'Tremaine Edmunds - LB',
    'Marcus Davenport - DE',
    'Lamar Jackson - QB',
    'Courtland Sutton - WR',
    'Mason Rudolph - QB',
    'Mike McGlinchey - OL',
    'Derrius Guice - RB',
    'Ronald Jones - RB',
    'D.J. Moore - WR',
    'Jaire Alexander - CB',
    'Christian Kirk - WR',
    'D.J. Chark - WR',
    'Hayden Hurst - TE',
    'Mike Geisecki - TE',
    'Dallas Goedart - TE',
    'Mark Andrews - TE',
    'Orlando Brown - OL',
    'Isaiah Wynn - OL',
    'Connor Williams - OL',
    'Da\'Ron Payne - DL',
    'Taven Bryan - DL',
    'Maurice Hurst - DL',
    'Harold Landry - LB',
    'Rashaan Evans - LB',
    'Leighton Vander Esch - LB',
    'Josh Jackson - CB',
    'Mike Hughes - CB',
    'Donte Jackson - CB'];
    constructor(private appService: AppService) {
      for (var i = 1; i <= this.people.length; ++i) {
        this.simpleList[0].push({name: this.people[i]});
      }
    }
    private done() {
      if (this.simpleList[1].length !== 10) {
        alert('You need to select at least 10 items');
        return;
      }
      this.showMessage = true;
      this.message = "Uploading...";
      let text = this.simpleList[1].map((name, i) => `${i}. ${name}  `);
      let self = this;
      this.appService.postData({text, recipients: ["nickspano"], contentType: "ContentTypeText"})
        .subscribe(
        () => {
          self.showMessage = true;
          self.message = "Submitted";
        },
        err => {
          // this.isCompleted = true;
          self.showMessage = true;
          self.message = "Error";
          console.log(`error ${err}`);
        }
      );      
    }
    public removeItem(item: any, list: any[]): void {
      list.splice(list.indexOf(item), 1);
    }
    public classForItem(i) {
      if (i === 0) {
        return ['red-background'];
      }
      return [];
    }
}
