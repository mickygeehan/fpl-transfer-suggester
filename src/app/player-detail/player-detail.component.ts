import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  private routeSub: any;
  private id: number;
  private player: Player;



  constructor(private route: ActivatedRoute, private playerService: PlayerService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = Number.parseInt(params['id']);
    });
    this.player = this.playerService.getPlayer(this.id);

  }

  ngOnDestroy() {

  }

}
