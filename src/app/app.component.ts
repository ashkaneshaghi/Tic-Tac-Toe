import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
// Global Variables   
  title = 'Tic Tac Toe';
  isOpponentComputer: boolean = true;
  opponentName: string = 'Computer';
  playerSign: string = "x";
  opponentSign: string = "o";
  settings: boolean = true;
  turn: string = "x";
  isWinner: boolean = false;
  winnerSide:string = '';
  numberOfMoves: number = 0;
  gameBoardAttr: Array<FieldAttr> = [];
  xbg: string = "url('assets/image/x.png')";
  obg: string = "url('assets/image/o.png')";


  constructor(){
    this.initialGameBoard();
  }

  defaultValue() {
    this.isOpponentComputer = true;
    this.opponentName = 'Computer';
    this.playerSign = "x";
    this.opponentSign = "o";
    this.settings = true;
    this.turn = "x";
    for (let i = 0; i <= 8; i++) {
      this.gameBoardAttr[i].fieldBackground = '';
      this.gameBoardAttr[i].fieldStatus = false
    }
    this.winnerSide = '';
    this.isWinner = false;
    this.numberOfMoves = 0;
  }
  
  ngOnInit() {
  }

  initialGameBoard(){
    for (let i = 0; i <= 8; i++) {
      let field: FieldAttr = new FieldAttr();
      field.fieldName = field.fieldName + (i + 1).toString();
      field.fieldBackground = field.fieldBackground;
      field.fieldStatus = field.fieldStatus;
      this.gameBoardAttr.push(field);
    }
  }

  initializinGame(event: any) {
    let eventName = event.target.name;
    if (eventName === "start") {
      this.settings = !this.settings;
      this.nextTurnCheck();
    } else {
      this.defaultValue();
    }
  }

  gameSetting(event: any) {
    let eventName = event.target.name;
    let eventValue = event.target.value;
    if (eventName === "player decider") {
      this.opponentName = eventValue;
      if (eventValue === "Player 2") {
        this.isOpponentComputer = false;
      } else {
        this.isOpponentComputer = true;
      }
    } else if (eventName === "sign") {
      this.playerSign = eventValue;
      this.opponentSign = (this.playerSign === "x") ? "o" : "x";
    } else if (eventName === "turn") {
      this.turn = eventValue;
    }
  }

  action(field: FieldAttr) {
    let fieldData = field;
    let index = this.gameBoardAttr.findIndex( x => x.fieldName === fieldData.fieldName);
    this.gameBoardAttr[index].fieldBackground = this.backgroundCheck();
    this.gameBoardAttr[index].fieldStatus = !this.gameBoardAttr[index].fieldStatus;
    this.numberOfMoves++;
    this.turnToggle();
    this.gameStatusCheck();
    this.nextTurnCheck();
  }

  backgroundCheck() {
    if (this.turn === "x") {
      return this.xbg;
    }
    else {
      return this.obg;
    }
  }

  nextTurnCheck() {
    if (this.isOpponentComputer && this.opponentSign === this.turn) {
      this.computerMove();
    }
}

  computerMove() {
    let index = this.randomNum();
    if (!this.gameBoardAttr[index].fieldStatus) {
      this.action(this.gameBoardAttr[index])
    } else {
      this.computerMove();
    }
  }

  // checking for a win situation
  winSituationCheck() {
    let winSituation = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ]
    for(let i = 0; i < 8; i++) {
      let [a, b ,c] = winSituation[i];
      if(this.gameBoardAttr[a - 1].fieldBackground === this.gameBoardAttr[b - 1].fieldBackground && 
        this.gameBoardAttr[a - 1].fieldBackground === this.gameBoardAttr[c - 1].fieldBackground &&
        this.gameBoardAttr[a - 1].fieldBackground != ''){
          this.isWinner = true;
          this.winnerSide = this.gameBoardAttr[a - 1].fieldBackground;
        }
    }
  }

  gameStatusCheck() {
    this.winSituationCheck();
    if (this.isWinner) {
//  Disabling the remaining board fields
      for (let i = 0; i < 9; i++){
        this.gameBoardAttr[i].fieldStatus = true;
      }
      if (this.winnerSide === this.xbg) {
        if (this.playerSign === "x") {
          alert("You won!!!");
        } else {
          alert(this.opponentName + " won!!!");
        }
      } else {
        if (this.playerSign === "o") {
          alert("You won!!!");
        } else {
          alert(this.opponentName + " won!!!");
        }
      }
    } else {
      if (this.numberOfMoves === 9) {
        alert("Draw !!!")
      }
    }
  }

  randomNum(): number {
    return Math.floor(Math.random() * 8);
  }

  turnToggle() {
    (this.turn === "x") ? this.turn = "o" : this.turn = "x";
  }

}

export class FieldAttr {
  fieldName: string = "plot";
  fieldBackground: string = '';
  fieldStatus: boolean = false;
}
