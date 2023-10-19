import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  gameType:string="Digital PS4"
  @Input()
  gamePrice:string="R$399"
  @Input()
  gameLabel:string=""
  @Input()
  gameCover:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
