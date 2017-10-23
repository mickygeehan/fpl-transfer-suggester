import { Component, OnInit, OnDestroy } from '@angular/core';

// my imports
import { PlayerService } from '../service/player.service';
import { Player } from '../models/player';
import { FilterPipe } from '../pipe/filter.pipe';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit, OnDestroy {

  // variables
  private req: any;
  private players: Player[];
  private teamNames: string[];


  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    // Get the players
    // if there's no players then call get players
    this.players = this.playerService.getPlayers();
    this.teamNames = this.playerService.getTeamNames();
  }

  ngOnDestroy() {

  }

}
