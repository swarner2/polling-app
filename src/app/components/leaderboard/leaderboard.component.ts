import { Component, OnInit } from '@angular/core';


export interface LeaderBoardElement {
  name: string;
  position: number;
  asked: number;
  answered: number;
}

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'asked', 'answered'];
  dataSource = [  ];
  constructor() { }

  ngOnInit(): void {
  }

}