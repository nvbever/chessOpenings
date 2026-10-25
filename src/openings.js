// A curated training repertoire, not an engine evaluation of all legal moves.
export const openings = [
 {name:'Italian Game',eco:'C50',intro:'Build a strong center, develop naturally, and bring your king to safety.',lines:[
  {name:'Quiet Italian',moves:'e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O',tips:{Bc4:'Develop the bishop to an active diagonal, aiming at the vulnerable f7 square.',c3:'Prepare d4 and build a stronger pawn center.',d3:'Support e4 while keeping a flexible, quiet position.'}},
  {name:'Two Knights Defense',moves:'e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Bc5 O-O d6 c3 O-O',tips:{Nf6:'Develop with a threat against the e4 pawn.',d3:'Protect e4 and prepare to develop the queenside.'}}
 ]},
 {name:'Ruy Lopez',eco:'C60',intro:'Pressure the defender of e5 and develop toward a lasting central advantage.',lines:[
  {name:'Morphy Defense',moves:'e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6',tips:{Bb5:'Pressure the knight that defends the e5 pawn.',a6:'Ask the bishop to decide its future before expanding on the queenside.',Re1:'Support e4 and place the rook on the central file.'}},
  {name:'Berlin Defense',moves:'e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6 Bxc6 dxc6',tips:{Nf6:'Attack e4 immediately: the defining idea of the Berlin.',d4:'Challenge the center while the black king is still uncastled.',dxc6:'Recapture with the d-pawn to open lines for the bishop.'}}
 ]},
 {name:'Sicilian Defense',eco:'B20',intro:'Trade a flank pawn for a central pawn and create an unbalanced game.',lines:[
  {name:'Najdorf setup',moves:'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3 e5 Nb3 Be6',tips:{c5:'Challenge d4 from the flank and create an asymmetric pawn structure.',a6:'Keep white pieces out of b5 and prepare queenside expansion.',e5:'Gain central space and force the d4 knight to move.'}},
  {name:'Dragon setup',moves:'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O',tips:{g6:'Prepare to fianchetto the bishop along the long diagonal.',f3:'Support e4 and prevent a black knight from jumping to g4.'}}
 ]},
 {name:'French Defense',eco:'C00',intro:'Challenge White’s center with a solid pawn chain and timely pawn breaks.',lines:[
  {name:'Advance Variation',moves:'e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 Bd3 cxd4 cxd4',tips:{e5:'Gain space and establish the Advance pawn chain.',c5:'Attack the base of White’s pawn chain on d4.',Qb6:'Add pressure to d4 and the undefended b2 pawn.'}},
  {name:'Exchange Variation',moves:'e4 e6 d4 d5 exd5 exd5 Nf3 Nf6 Bd3 Bd6 O-O O-O',tips:{exd5:'Resolve the central tension and open the position for development.'}}
 ]},
 {name:'Queen’s Gambit',eco:'D06',intro:'Challenge Black’s central foothold and develop behind a strong pawn center.',lines:[
  {name:'Declined · Orthodox setup',moves:'d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7',tips:{c4:'Challenge d5 and offer a flank pawn to gain central influence.',e6:'Defend d5 while preparing kingside development.',Bg5:'Pin the knight and increase the pressure on d5.'}},
  {name:'Slav Defense',moves:'d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5 e3 e6 Bxc4',tips:{c6:'Support d5 while keeping the light-squared bishop free.',a4:'Prevent Black from keeping the extra pawn with b5.',Bf5:'Develop the bishop outside the pawn chain before playing e6.'}}
 ]},
 {name:'Caro–Kann Defense',eco:'B10',intro:'Build a sturdy center while leaving the light-squared bishop room to develop.',lines:[
  {name:'Advance Variation',moves:'e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2 c5 O-O Nc6',tips:{c6:'Prepare d5 with solid pawn support.',Bf5:'Develop the bishop before closing its diagonal with e6.',c5:'Strike at White’s central pawn chain.'}},
  {name:'Classical Variation',moves:'e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7',tips:{Bf5:'Develop with tempo by attacking the knight on e4.',Ng3:'Save the knight while gaining time against the bishop.',h6:'Give the bishop a retreat square on h7.'}}
 ]}
];
export function explanation(san, line) {
 return line.tips[san] || ({e4:'Claim central space and open lines for the bishop and queen.',d4:'Occupy the center and open lines for development.',Nf3:'Develop a knight toward the center and prepare kingside castling.',Nc3:'Develop a knight and reinforce control of the central squares.', 'O-O':'Bring the king to safety and connect the rook with the center.',Nf6:'Develop toward the center and prepare kingside castling.',Nc6:'Develop the knight toward the center.'}[san]) || `Play ${san} to follow the selected variation’s development plan.`;
}
