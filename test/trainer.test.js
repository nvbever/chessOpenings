import test from 'node:test';
import assert from 'node:assert/strict';
import { Chess } from 'chess.js';
import { openings } from '../src/openings.js';
import { Trainer } from '../src/trainer.js';
for(const opening of openings)for(const line of opening.lines)for(const color of ['w','b'])test(`${opening.name}: ${line.name} as ${color}`,()=>{
 const trainer=new Trainer(opening,color);
 for(const san of line.moves.split(' ')) {
  assert.ok(trainer.options.some(l=>l.name===line.name));
  const hint=trainer.hint(line.name); assert.equal(hint.move,san); assert.ok(hint.reason);
  const move=new Chess(trainer.game.fen()).move(san);
  if(trainer.opponentTurn)assert.equal(trainer.reply(line.name),true);
  else assert.deepEqual(trainer.play(move.from,move.to,move.promotion),{correct:true});
 }
 assert.ok(trainer.candidates.some(l=>l.name===line.name));
 assert.equal(trainer.error,null);
 assert.equal(trainer.game.history().length,line.moves.split(' ').length);
 // A short line can end before a longer continuation sharing its prefix.
 if(!trainer.complete)assert.ok(trainer.options.every(l=>l.sequence.length>trainer.index));
});
const caro=openings.find(o=>o.name.startsWith('Caro'));
function move(t,san){const m=new Chess(t.game.fen()).move(san);return t.play(m.from,m.to,m.promotion);}
function prefix(t,sans){for(const san of sans.split(' ')){if(t.opponentTurn){const line=t.options.find(l=>l.sequence[t.index]===san);assert.ok(line);t.reply(line.name);}else assert.deepEqual(move(t,san),{correct:true});}}
test('branches narrow only when a move is played; hints do not lock a line',()=>{
 const t=new Trainer(caro);prefix(t,'e4 c6 d4 d5');
 assert.ok(t.nextMoves.includes('e5'));assert.ok(t.nextMoves.includes('exd5'));assert.ok(t.nextMoves.includes('Nc3'));assert.ok(t.nextMoves.includes('f3'));
 const fen=t.game.fen();assert.equal(t.hint('Advance · Short system').move,'e5');assert.equal(t.game.fen(),fen);
 move(t,'exd5');assert.equal(t.candidates.length,2);assert.ok(t.candidates.every(l=>l.moves.startsWith('e4 c6 d4 d5 exd5')));
});
test('computer pauses for overview and follows revealed branch',()=>{
 const t=new Trainer(caro,'b');assert.equal(t.index,0);assert.deepEqual(t.play('c7','c6'),{blocked:true});
 assert.equal(t.reply('Fantasy variation'),true);move(t,'c6');t.reply('Fantasy variation');move(t,'d5');
 assert.equal(t.hint('Fantasy variation').move,'f3');assert.equal(t.reply('Fantasy variation'),true);assert.equal(t.game.history().at(-1),'f3');
});
test('off-repertoire correction supports multiple alternatives and reset',()=>{
 const t=new Trainer(caro);prefix(t,'e4 c6 d4 d5');const fen=t.game.fen();
 assert.deepEqual(move(t,'a3'),{wrong:true});assert.equal(t.game.fen(),fen);assert.ok(t.error.alternatives.includes('f3'));
 assert.deepEqual(move(t,'e5'),{blocked:true});assert.equal(t.reply(),false);
 assert.equal(t.continue('Fantasy variation'),true);assert.equal(t.game.history().at(-1),'f3');assert.equal(t.mistakes,1);
 t.reset();assert.equal(t.index,0);assert.equal(t.mistakes,0);assert.equal(t.candidates.length,caro.lines.length);
});
test('illegal moves do not count as repertoire mistakes',()=>{const t=new Trainer(caro);assert.deepEqual(t.play('e2','e5'),{illegal:true});assert.equal(t.mistakes,0);assert.equal(t.index,0)});
test('finished line blocks further moves',()=>{const t=new Trainer(openings[0]);prefix(t,openings[0].lines[0].moves);assert.equal(t.complete,true);assert.deepEqual(t.play('a2','a3'),{blocked:true});assert.equal(t.reply(),false)});
