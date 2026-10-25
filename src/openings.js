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
 {name:'Caro–Kann Defense',eco:'B10–B19',intro:'Explore the major Caro–Kann families. These are representative training lines, not an exhaustive database of every continuation.',lines:[
  {name:'Advance · Short system',moves:'e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2 c5 O-O Nc6',tips:{Bf5:'Develop the bishop before closing its diagonal with e6.',c5:'Challenge the base of the white pawn chain.'}},
  {name:'Advance · Tal variation',moves:'e4 c6 d4 d5 e5 Bf5 h4 h5 Bd3 Bxd3 Qxd3 e6',tips:{h4:'Gain kingside space and threaten to trap the bishop with g4.',h5:'Restrain g4 and give the bishop room.'}},
  {name:'Advance · Van der Wiel attack',moves:'e4 c6 d4 d5 e5 Bf5 Nc3 e6 g4 Bg6 Nge2 c5',tips:{g4:'Gain space with tempo against the bishop.',c5:'Counterattack in the center instead of defending passively.'}},
  {name:'Advance · Bayonet attack',moves:'e4 c6 d4 d5 e5 Bf5 g4 Bd7 Bg2 e6',tips:{g4:'Immediately chase the bishop and gain kingside space.'}},
  {name:'Advance · Botvinnik–Carls defense',moves:'e4 c6 d4 d5 e5 c5 dxc5 e6 Nf3 Bxc5',tips:{c5:'Challenge d4 immediately before developing the bishop.',e6:'Prepare to recover the c5 pawn with the bishop.'}},
  {name:'Classical · Capablanca main line',moves:'e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7',tips:{Bf5:'Develop with tempo against the knight.',h6:'Prepare a retreat square on h7.'}},
  {name:'Modern · Karpov variation',moves:'e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Nf3 Ngf6 Nxf6+ Nxf6',tips:{Nd7:'Prepare Ngf6 and a piece recapture on f6.'}},
  {name:'Bronstein–Larsen variation',moves:'e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nf6 Nxf6+ gxf6 Nf3 Bf5',tips:{gxf6:'Accept doubled pawns for central control and an open g-file.'}},
  {name:'Tartakower variation',moves:'e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nf6 Nxf6+ exf6 Nf3 Bd6',tips:{exf6:'Open the e-file and keep a solid kingside pawn structure.'}},
  {name:'Exchange · Traditional setup',moves:'e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6 Bf4',tips:{Bd3:'Develop actively before arranging the supporting pawn structure.'}},
  {name:'Panov–Botvinnik attack',moves:'e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3 Bb4',tips:{c4:'Attack the center and aim for active piece play, often with an isolated d-pawn.'}},
  {name:'Accelerated Panov attack',moves:'e4 c6 c4 d5 exd5 cxd5 cxd5 Nf6 Nc3 Nxd5',tips:{c4:'Challenge d5 before committing the d-pawn.'}},
  {name:'Fantasy variation',moves:'e4 c6 d4 d5 f3 dxe4 fxe4 e5 Nf3 exd4 Bc4',tips:{f3:'Support e4 aggressively, at the cost of delaying development.',e5:'Strike at the weakened center.'}},
  {name:'Two Knights attack',moves:'e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3 e6',tips:{Bg4:'Pin the knight and put pressure on the white center.',h3:'Ask the bishop to retreat or exchange.'}},
  {name:'Hillbilly attack',moves:'e4 c6 Bc4 d5 exd5 cxd5 Bb3 Nf6',tips:{Bc4:'Aim at f7 early; Black can gain time with d5.',d5:'Gain space while attacking the bishop.'}},
  {name:'Breyer variation',moves:'e4 c6 d3 d5 Nd2 e5 Ngf3 Bd6',tips:{d3:'Choose a restrained center and a flexible development plan.'}},
  {name:'King’s Indian Attack setup',moves:'e4 c6 d3 d5 Nd2 e5 Ngf3 Bd6 g3 Nf6 Bg2 O-O O-O',tips:{g3:'Prepare a kingside fianchetto instead of putting the bishop on e2.'}},
  {name:'Gurgenidze system',moves:'e4 c6 d4 d5 Nc3 g6 Nf3 Bg7 h3',tips:{g6:'Prepare a fianchetto and pressure on the long diagonal.'}},
  {name:'Advance · 3…e6 setup',moves:'e4 c6 d4 d5 e5 e6 Nf3 c5 c3 Nc6',tips:{e6:'Support the center while accepting that the c8 bishop stays inside the pawn chain.'}}
 ]},
 {name:'London System',eco:'D02 · A46',intro:'Develop the dark-squared bishop outside the pawn chain, build a solid center, and adapt to Black’s setup.',lines:[
  {name:'Classical London · …d5 and …e6',moves:'d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 O-O Bd3 c5 c3',tips:{Bf4:'Develop the bishop before playing e3.',Bg3:'Preserve the bishop and keep pressure on the diagonal.'}},
  {name:'London · Early …c5',moves:'d4 d5 Bf4 c5 e3 Nc6 c3 Nf6 Nd2',tips:{c5:'Challenge the d4 pawn immediately.',c3:'Support d4 against Black’s early pressure.'}},
  {name:'London · …Qb6 pressure',moves:'d4 d5 Bf4 Nf6 e3 c5 c3 Nc6 Nd2 Qb6 Qb3',tips:{Qb6:'Pressure b2 and d4 while developing the queen.',Qb3:'Defend b2 and offer a queen exchange.'}},
  {name:'London · King’s Indian setup',moves:'d4 Nf6 Bf4 g6 e3 Bg7 Nf3 O-O Be2 d6 O-O',tips:{g6:'Prepare the kingside fianchetto.',Be2:'Develop safely and prepare castling against the fianchetto.'}},
  {name:'Jobava London · …e6',moves:'d4 d5 Nc3 Nf6 Bf4 e6 e3 Bd6 Bxd6 Qxd6',tips:{Nc3:'Develop actively, leaving the c-pawn behind for a Jobava setup.',Bxd6:'Exchange bishops and change Black’s queen placement.'}},
  {name:'Jobava London · …Bf5',moves:'d4 d5 Nc3 Nf6 Bf4 Bf5 e3 e6 Bd3 Bxd3 Qxd3',tips:{Bf5:'Develop outside the pawn chain before playing e6.',Bd3:'Challenge the active black bishop.'}}
 ]}
];
export function explanation(san, line) {
 return (line.tips || {})[san] || ({e4:'Claim central space and open lines for the bishop and queen.',d4:'Occupy the center and open lines for development.',Nf3:'Develop a knight toward the center and prepare kingside castling.',Nc3:'Develop a knight and reinforce control of the central squares.', 'O-O':'Bring the king to safety and connect the rook with the center.',Nf6:'Develop toward the center and prepare kingside castling.',Nc6:'Develop the knight toward the center.'}[san]) || `Play ${san} to follow the selected variation’s development plan.`;
}
