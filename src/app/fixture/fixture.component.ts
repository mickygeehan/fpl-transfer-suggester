import { Component, OnInit } from '@angular/core';

import { PlayerService } from '../service/player.service';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  private fixtures: any[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.fixtures = this.playerService.getFixtures();
  }

  getTeamName(id: number): string {
    return this.playerService.getTeamName(id);
  }

  getDiffClass(diff: number): string {
    return this.playerService.getDifficultyClass(diff);
  }

}
