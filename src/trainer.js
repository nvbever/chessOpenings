import { Chess } from 'chess.js';
import { explanation } from './openings.js';

export class Trainer {
 constructor(opening, color='w', random=Math.random) { this.random=random; this.reset(opening,color); }
 reset(opening=this.opening,color=this.color) {
  this.opening=opening; this.color=color;
  this.lines=opening.lines.map(line=>({...line,sequence:line.moves.split(' ')}));
  this.game=new Chess(); this.error=null; this.mistakes=0; this.correct=0;
 }
 get index() { return this.game.history().length; }
 get candidates() { const history=this.game.history(); return this.lines.filter(line=>history.every((move,i)=>line.sequence[i]===move)); }
 get options() { return this.candidates.filter(line=>line.sequence.length>this.index); }
 get complete() { return this.options.length===0; }
 get opponentTurn() { return !this.complete && this.game.turn()!==this.color; }
 get maxDepth() { return Math.max(...this.candidates.map(l=>l.sequence.length)); }
 get nextMoves() { return [...new Set(this.options.map(line=>line.sequence[this.index]))]; }
 hint(name) {
  const line=this.options.find(l=>l.name===name);
  if(!line)return null;
  const move=line.sequence[this.index];
  return {name,move,reason:explanation(move,line)};
 }
 apply(san) {this.game.move(san);this.error=null;}
 reply(name) {
  if(!this.opponentTurn||this.error)return false;
  const chosen=name?this.options.find(l=>l.name===name):this.options[Math.floor(this.random()*this.options.length)];
  if(!chosen)return false;
  this.apply(chosen.sequence[this.index]);return true;
 }
 play(from,to,promotion='q') {
  if(this.error||this.complete||this.opponentTurn)return {blocked:true};
  const trial=new Chess(this.game.fen());let move;
  try {move=trial.move({from,to,promotion});}catch{return {illegal:true};}
  if(!this.nextMoves.includes(move.san)) {
   this.mistakes++;this.error={played:move.san,alternatives:this.nextMoves};return {wrong:true};
  }
  this.apply(move.san);this.correct++;return {correct:true};
 }
 continue(name) {
  if(!this.error)return false;
  const line=this.options.find(l=>l.name===name)||this.options[0];
  this.apply(line.sequence[this.index]);return true;
 }
}
