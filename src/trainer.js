import { Chess } from 'chess.js';
import { explanation } from './openings.js';
export class Trainer {
 constructor(line, color='w') { this.reset(line,color); }
 reset(line=this.line,color=this.color) { this.line=line; this.color=color; this.moves=line.moves.split(' '); this.game=new Chess(); this.index=0; this.error=null; this.mistakes=0; this.correct=0; this.reply(); }
 get complete() {return this.index===this.moves.length;}
 reply() {while(!this.complete && this.game.turn()!==this.color) {this.game.move(this.moves[this.index++]);}}
 play(from,to,promotion='q') {
  if(this.error || this.complete) return {blocked:true};
  const trial=new Chess(this.game.fen()); let move;
  try {move=trial.move({from,to,promotion});} catch {return {illegal:true};}
  const expected=this.moves[this.index];
  if(move.san!==expected) {this.mistakes++; this.error={played:move.san,expected,reason:explanation(expected,this.line)}; return {wrong:true};}
  this.game.move(move.san); this.index++; this.correct++; this.reply(); return {correct:true};
 }
 continue() {if(!this.error)return; this.game.move(this.error.expected); this.index++; this.error=null; this.reply();}
}
