import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Tic Tac Toe';
  opponent: string;
  sign: string;
  sign2: string;
  settings: boolean;
  board: boolean;
  turn: string;
  xbg: string = "url('x.png')";
  obg: string = "url('o.png')";
  plot1: boolean;
  plot2: boolean;
  plot3: boolean;
  plot4: boolean;
  plot5: boolean;
  plot6: boolean;
  plot7: boolean;
  plot8: boolean;
  plot9: boolean;

  plot1bg: string;
  plot2bg: string;
  plot3bg: string;
  plot4bg: string;
  plot5bg: string;
  plot6bg: string;
  plot7bg: string;
  plot8bg: string;
  plot9bg: string;

  constructor(){
    this.opponent = "Computer"
    this.sign = "x";
    this.sign2 = "o";
    this.settings = true;
    this.board = false;
    this.turn = "x";
    this.plot1 = this.plot2 = this.plot3 = this.plot4 = this.plot5 = this.plot6 = this.plot7 = this.plot8 = this.plot9 = false;
    this.plot1bg = this.plot2bg = this.plot3bg = this.plot4bg = this.plot5bg = this.plot6bg = this.plot7bg = this.plot8bg = this.plot9bg = '';
  }
  
  ngOnInit() {
  }

  firstSetup(){
    
  }

  initializingame(event: any) {
    let name = event.target.value;
    this.sign2 = (this.sign === "x") ? "o" : "x";
    if(name === "start") {
      this.plot1 = this.plot2 = this.plot3 = this.plot4 = this.plot5 = this.plot6 = this.plot7 = this.plot8 = this.plot9 = false;
      this.plot1bg = this.plot2bg = this.plot3bg = this.plot4bg = this.plot5bg = this.plot6bg = this.plot7bg = this.plot8bg = this.plot9bg = '';
      this.settings = false;
      this.board = true;
      this.turnCheck();

  
      }
    else {
      this.plot1 = this.plot2 = this.plot3 = this.plot4 = this.plot5 = this.plot6 = this.plot7 = this.plot8 = this.plot9 = false;
      this.plot1bg = this.plot2bg = this.plot3bg = this.plot4bg = this.plot5bg = this.plot6bg = this.plot7bg = this.plot8bg = this.plot9bg = '';
      this.opponent = "Computer"
      this.sign = "x";
      this.sign2 = "o";
      this.settings = true;
      this.board = false;
      this.turn = "x";
  
    }
  }

  gameSetting(event: any) {
    (event.target.name === "player") ? this.opponent = event.target.value
    : (event.target.name === "sign") ? this.sign = event.target.value 
    : this.turn = event.target.value;

  }

  computerTurn() {
    let randomNum = this.randomNum();
    switch (randomNum) {
      case 1:
        if (this.plot1) {
          this.computerTurn();
          break;
        } else {
          this.action('plot1');
          break;
        }
      case 2:
        if (this.plot2) {
          this.computerTurn();
          break;
        } else {
          this.action('plot2');
          break;
        }
      case 3:
        if (this.plot3) {
          this.computerTurn();
          break;
        } else {
          this.action('plot3');
          break;
        }
      case 4:
        if (this.plot4) {
          this.computerTurn();
          break;
        } else {
          this.action('plot4');
          break;
        }
      case 5:
        if (this.plot5) {
          this.computerTurn();
          break;
        } else {
          this.action('plot5');
          break;
        }
      case 6:
        if (this.plot6) {
          this.computerTurn();
          break;
        } else {
          this.action('plot6');
          break;
        }
      case 7:
        if (this.plot7) {
          this.computerTurn();
          break;
        } else {
          this.action('plot7');
          break;
        }
      case 8:
        if (this.plot8) {
          this.computerTurn();
          break;
        } else {
          this.action('plot8');
          break;
        }
      case 9:
        if (this.plot9) {
          this.computerTurn();
          break;
        } else {
          this.action('plot9');
          break;
        }
    
      default:
        break;
    }
  }

  action(plot: string) {
    let bg: string = (this.turn === "x") ? this.xbg : this.obg;
      switch (plot) {
        case "plot1":
          this.plot1 = true;
          this.plot1bg = bg;
          this.gameStatusCheck();
          this.turnToggle();
          break;
        case "plot2":
          this.plot2 = true;
          this.plot2bg = bg;
          this.gameStatusCheck();
          this.turnToggle();
          break;
        case "plot3":
          this.plot3 = true;
          this.plot3bg = bg;
          this.gameStatusCheck();
          this.turnToggle();
          break;
        case "plot4":
          this.plot4 = true;
          this.plot4bg = bg;
          this.gameStatusCheck();
          this.turnToggle();
          break;
        case "plot5":
          this.plot5 = true;
          this.plot5bg = bg;
          this.gameStatusCheck();
          this.turnToggle();
          break;
        case "plot6":
          this.plot6 = true;
          this.plot6bg = bg;
          this.gameStatusCheck();
          this.turnToggle();
          break;
        case "plot7":
          this.plot7 = true;
          this.plot7bg = bg;
          this.gameStatusCheck();
          this.turnToggle();
          break;
        case "plot8":
          this.plot8 = true;
          this.plot8bg = bg;
          this.gameStatusCheck();
          this.turnToggle();
          break;
        case "plot9":
          this.plot9 = true;
          this.plot9bg = bg;
          this.gameStatusCheck();
          this.turnToggle();
          break;
      
        default:
          break;
      }
    this.turnCheck();
  }

  turnCheck() {
    if (!(this.plot1 && this.plot2 && this.plot3 && this.plot4 && this.plot5 && this.plot6 && this.plot7 && this.plot8 && this.plot9 === true)) {
      if (this.opponent === "Computer") {
        if (this.sign2 === this.turn) {
          this.computerTurn();
        }
      }
    }
  }

  gameStatusCheck() {
      if (
        (this.plot1bg === this.xbg && this.plot2bg === this.xbg && this.plot3bg === this.xbg) || 
        (this.plot4bg === this.xbg && this.plot5bg === this.xbg && this.plot6bg === this.xbg) || 
        (this.plot7bg === this.xbg && this.plot8bg === this.xbg && this.plot9bg === this.xbg) ||
        (this.plot1bg === this.xbg && this.plot4bg === this.xbg && this.plot7bg === this.xbg) ||
        (this.plot2bg === this.xbg && this.plot5bg === this.xbg && this.plot8bg === this.xbg) ||
        (this.plot3bg === this.xbg && this.plot6bg === this.xbg && this.plot9bg === this.xbg) ||
        (this.plot1bg === this.xbg && this.plot5bg === this.xbg && this.plot9bg === this.xbg) ||
        (this.plot3bg === this.xbg && this.plot5bg === this.xbg && this.plot7bg === this.xbg)) {
        if (this.sign === "x") {
          this.plot1 = this.plot2 = this.plot3 = this.plot4 = this.plot5 = this.plot6 = this.plot7 = this.plot8 = this.plot9 = true;
          alert("you Won!!!");
        } else {
          this.plot1 = this.plot2 = this.plot3 = this.plot4 = this.plot5 = this.plot6 = this.plot7 = this.plot8 = this.plot9 = true;
          alert(this.opponent + " Won!!!");
        }
      }
      else if (
        (this.plot1bg === this.obg && this.plot2bg === this.obg && this.plot3bg === this.obg) || 
        (this.plot4bg === this.obg && this.plot5bg === this.obg && this.plot6bg === this.obg) || 
        (this.plot7bg === this.obg && this.plot8bg === this.obg && this.plot9bg === this.obg) ||
        (this.plot1bg === this.obg && this.plot4bg === this.obg && this.plot7bg === this.obg) ||
        (this.plot2bg === this.obg && this.plot5bg === this.obg && this.plot8bg === this.obg) ||
        (this.plot3bg === this.obg && this.plot6bg === this.obg && this.plot9bg === this.obg) ||
        (this.plot1bg === this.obg && this.plot5bg === this.obg && this.plot9bg === this.obg) ||
        (this.plot3bg === this.obg && this.plot5bg === this.obg && this.plot7bg === this.obg)) {
        if (this.sign === "o") {
          this.plot1 = this.plot2 = this.plot3 = this.plot4 = this.plot5 = this.plot6 = this.plot7 = this.plot8 = this.plot9 = true;
          alert("you Won!!!");
        } else {
          this.plot1 = this.plot2 = this.plot3 = this.plot4 = this.plot5 = this.plot6 = this.plot7 = this.plot8 = this.plot9 = true;
          alert(this.opponent + " Won!!!");
        }
      } else if (this.plot1 && this.plot2 && this.plot3 && this.plot4 && this.plot5 && this.plot6 && this.plot7 && this.plot8 && this.plot9 === true) {
          alert("Game Draw!!!");
        }
      
  }

  $(id: string) {
    return document.getElementsByClassName(id);
  }
  randomNum(): number {
    return Math.floor(Math.random() * 9) + 1;
  }

  turnToggle() {
    (this.turn === "x") ? this.turn = "o" : this.turn = "x";
  }

}
