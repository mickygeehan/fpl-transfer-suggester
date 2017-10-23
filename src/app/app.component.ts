import { Component, OnInit } from '@angular/core';
import { PlayerService } from './service/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FPL Transfer Suggester';

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
  }
}
