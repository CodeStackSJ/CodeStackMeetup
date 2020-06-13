import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  participants: string[] = [];
  name: string;
  chosenName: string;

  constructor() {}

  addParticipant() {
    if (this.name) {
      this.participants.push(this.name);
      this.name = '';
    }
  }

  deleteParticipant(i: number) {
    this.participants.splice(i, 1);
  }

  randomizeNames() {
    const randomNumber = Math.floor(Math.random() * this.participants.length);
    this.chosenName = this.participants[randomNumber];
  }
  reset() {
    this.participants = [];
    this.chosenName = '';
    this.name = '';
  }

}
