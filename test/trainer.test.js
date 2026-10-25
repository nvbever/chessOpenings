import test from 'node:test';
import assert from 'node:assert/strict';
import { Chess } from 'chess.js';
import { openings } from '../src/openings.js';
import { Trainer } from '../src/trainer.js';
for(const opening of openings)for(const line of opening.lines)for(const color of ['w','b'])test(`${opening.name}: ${line.name} as ${color}`,()=>{
 const trainer=new Trainer(line,color);
 while(!trainer.complete){assert.equal(trainer.game.turn(),color); const expected=new Chess(trainer.game.fen()).move(trainer.moves[trainer.index]);assert.deepEqual(trainer.play(expected.from,expected.to,expected.promotion),{correct:true});}
 assert.equal(trainer.error,null);assert.equal(trainer.game.history().length,line.moves.split(' ').length);
});
test('legal off-line move keeps position and offers correction',()=>{const t=new Trainer(openings[0].lines[0]);const fen=t.game.fen();assert.deepEqual(t.play('d2','d4'),{wrong:true});assert.equal(t.game.fen(),fen);assert.equal(t.error.expected,'e4');assert.ok(t.error.reason);assert.deepEqual(t.play('e2','e4'),{blocked:true});t.continue();assert.deepEqual(t.game.history(),['e4','e5']);assert.equal(t.game.turn(),'w');assert.equal(t.mistakes,1);t.reset();assert.equal(t.index,0);assert.equal(t.mistakes,0)});
test('illegal moves do not count as repertoire mistakes',()=>{const t=new Trainer(openings[0].lines[0]);assert.deepEqual(t.play('e2','e5'),{illegal:true});assert.equal(t.mistakes,0);assert.equal(t.index,0)});
