import {Component} from '@angular/core';
import {Dude} from './Dude';

/**
 * Based on article:
 * https://medium.com/@ghoul.ahmed5/pure-vs-impure-pipe-in-angular-2152cf073e4d
 * Many Thanks to author: Ghoul Ahmed
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sample-rest-app';
  coolDudes: Dude[] = [

    {name: 'Snake', age: 33, skills: {mojo: true}},
    {name: 'Cool Hand Luke', age: 40},
    {name: 'Steve McQueen', age: 45},
    {name: 'Leonard', age: 80},
    {name: 'Bob', age: 77}
  ];
  pharse: string = '';
  refDudes: Dude[];

  changeProperty() {
    this.coolDudes[0].name = 'Paul';
  }

  /**
   * In order to solve problem with changing property you may:
   * - use impure Pipe
   * - or change the reference as it is shown below
   */
  changeReference() {
    // 1)
    // this.refDudes = [...this.coolDudes];

    // 2)
    // this.refDudes = Object.assign([], this.coolDudes);

    // 3)
    // this.refDudes = this.coolDudes.slice();
    // console.log(this.refDudes === this.coolDudes);
    // console.log(this.refDudes[0] === this.coolDudes[0]);


     this.coolDudes = this.refDudes;
  }


  showCopy() {
    console.log('refDudes: ', this.refDudes);
  }


}
