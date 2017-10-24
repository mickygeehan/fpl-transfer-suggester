import { Component, OnInit } from '@angular/core';

import { PlayerService } from '../service/player.service';
import { Player } from '../models/player';
import { Fixture } from '../models/fixture';


@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  private fixtures: Fixture[];
  private teamNames: string[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.fixtures = this.playerService.getFixtures();
    this.teamNames = this.playerService.getTeamNames();
  }

  getTeamName(id: number): string {
    return this.playerService.getTeamName(id);
  }

  getDiffClass(diff: number): string {
    return this.playerService.getDifficultyClass(diff);
  }

  // getScorers(gameID: number): any {
  //   let toReturn = '';
  //   for (const game of this.fixtures) {
  //     if (game.id === gameID) {
  //       game.stats.forEach(element => {
  //         if (element.goals_scored) {
  //           if (element.goals_scored.h) {
  //             element.goals_scored.h.forEach(scored => {
  //               toReturn += scored.element + ', Goals - ' + scored.value + '<br>;';
  //             });
  //           }
  //         }
  //       });
  //     }
  //   }
  //   return this.sanitizer.transform(toReturn);
  // }

}
