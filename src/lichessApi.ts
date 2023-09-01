export const getStudy = async (studyId: string, accessToken: string) => {
    // const url = new URL(`https://lichess.org/api/study/${studyId}.pgn`);

    // url.searchParams.set('clocks', 'false');
    // url.searchParams.set('comments', 'false');
    // url.searchParams.set('source', 'true');
    // url.searchParams.set('orientation', 'true');

    // const res = await fetch(url, { headers: { Authorization: 'Bearer ' + accessToken } });
    // return await res.text();

    return `[Event "My opening repertoire: As White"]
[Site "https://lichess.org/study/dk4YQfB1/OYDT4ITT"]
[Result "*"]
[UTCDate "2023.08.25"]
[UTCTime "07:17:54"]
[Variant "Standard"]
[ECO "C44"]
[Opening "Ponziani Opening"]
[Annotator "https://lichess.org/@/jZJXzWXp4dpbxg7"]
[Source "https://lichess.org/study/dk4YQfB1/OYDT4ITT"]
[Orientation "white"]

1. e4 e5 (1... Nf6 2. e5 Nd5 3. d4) (1... c6 2. Nf3 d5 3. Nc3 dxe4 (3... d4 4. Ne2 c5 5. Ng3 Nc6 6. Bc4 e5 7. d3 Nf6 8. Ng5 Be6 9. Nxe6 fxe6 10. Bxe6) (3... Bg4 4. Be2 d4 (4... e6 5. O-O Nf6 6. h3 Bh5 7. Ne5 Bxe2 8. Qxe2 d4 9. Nb1 Bd6 10. Nxf7 Kxf7 11. e5 Bxe5 12. Qxe5) 5. Nxd4 Bxe2 (5... Qxd4 6. Bxg4) 6. Ndxe2) (3... Nf6 4. e5 Nfd7 (4... Ne4 5. d4) 5. e6 fxe6 6. d4 Nf6 7. Bd3 g6 8. h4 Bg7 9. h5 Nxh5 10. g4 Nf6 11. Bh6 Bxh6 12. Rxh6 Nxg4 13. Rh4) 4. Nxe4 Bf5 (4... Bg4 5. h3 Bh5 6. Ng3 Bg6 7. h4) (4... Nf6 5. Qe2 Bf5 (5... Nbd7 6. Nd6#) (5... Nxe4 6. Qxe4 Nd7 7. Bc4 Nf6 8. Ne5 Nxe4 (8... e6 9. Qe2 Bd6 10. d4 O-O 11. Bg5 h6 12. h4 Be7 13. O-O-O) 9. Bxf7#) 6. Nxf6+ gxf6) 5. Ng3 Bg6 6. h4 h6 7. Ne5 Bh7 8. Qh5 g6 (8... Qd5 9. Bc4 g6 10. Bxd5 gxh5 11. Bxf7+ Kd8 12. Bxh5 Nf6 13. Nf7+ Kc7 14. Nxh8) 9. Bc4 e6 10. Qe2 Bg7 (10... Nf6 11. Nxf7 Kxf7 12. Qxe6+ Kg7 13. Qf7#) (10... Nd7 11. Nxf7 Kxf7 12. Qxe6+ Kg7 13. Qf7#) (10... Qe7 11. d4) 11. Nxf7 Kxf7 12. Qxe6+ Kf8 13. Qf7#) 2. Nf3 Nc6 (2... d6 3. Bc4 h6 4. d4 exd4 5. c3 dxc3 6. Bxf7+ Kxf7 7. Ne5+ Ke8 (7... Ke6 8. Qd5+ Kf6 9. Qf7+ Kxe5 10. Bf4+ Kxe4 11. Nxc3+ Kd3 12. O-O-O#) (7... Ke7 8. Ng6+ Kd7 9. Nxh8) (7... Kf6 8. Qf3+ Kxe5 9. Qf7 Qf6 (9... Be6 10. Qf4+ Kd4 11. Be3+ Kc4 12. e5+ Kd5 13. Nxc3+ Kc6 14. Qa4+ b5 15. Qxb5#) (9... Nf6 10. f4+ Kd4 11. Nxc3 Kc5 12. Be3+ Kc6 13. Nb5 Kxb5 (13... d5 14. Nd4+ Kb6 15. Ne6+ Ka6 16. Nxd8) 14. a4+ Kb4 15. Bd2+ Kc5 16. Rc1+ Kb6 17. Qb3+ Ka6 18. Qb5#) 10. Qd5#) 8. Qh5+ g6 9. Qxg6+ Ke7 10. Qf7#) (2... Nf6 3. Nxe5 Nc6 4. Nxc6 dxc6 (4... bxc6 5. Nc3 Bb4 (5... d5 6. e5 Ne4 (6... Nd7 7. d4 c5 8. Nxd5 cxd4 9. Qxd4 Nb6 10. Bb5+ Bd7 11. Bg5 Qxg5 12. Nxc7+ Kd8 13. Nxa8 Nxa8 14. Qxd7#) 7. Nxe4 dxe4 8. d4 exd3 9. Bxd3 Bb4+ 10. c3) 6. e5 Qe7 7. Qe2 Nd5 8. Nxd5 cxd5 9. c3 Ba5 10. d4) 5. d3 Bc5 (5... Bd6 6. Be2 h5 7. Bg5) 6. Be2 h5 (6... O-O 7. O-O Be6 8. Bg5) (6... Ng4 7. Bxg4 Qh4 8. Qf3 Bxg4 (8... Qxg4 9. Qxg4 Bxg4 10. Be3 Be7 11. Nc3) 9. Qg3 Qh5 10. h3 Be6 (10... Bd1 11. Nc3 Bxc2 (11... Bb4 12. Bd2 Bxc3 13. Rxd1 Be5 14. Qg4 Qxg4 15. hxg4 Bxb2 16. Rb1 Bd4 17. g5) 12. Kd2 Bxd3 13. Kxd3 O-O-O+ 14. Kc2) 11. Qxg7 O-O-O 12. Qg5 Qxg5 13. Bxg5 Rdg8 14. Bf6) (6... Be6 7. c3 Bb6 8. Nd2) (6... Qd6 7. c3) 7. c3 Bb6 (7... Ng4 8. d4 Bb6 9. h3 Nf6 10. Bg5) (7... Be6 8. d4 Bb6 9. Bg5) 8. Nd2 Ng4 (8... Be6 9. Nf3 Ng4 10. d4 Qe7 11. h3 O-O-O 12. hxg4 hxg4 13. Rxh8 Rxh8 14. Nd2) (8... Qd6 9. a4 a5 10. Nc4 Qe6 11. Nxb6 cxb6 12. O-O) 9. d4 c5 (9... Qh4 10. g3 Qf6 (10... Qh3 11. Bf1 Nxf2 12. Kxf2) (10... Qe7 11. a4 a5 12. Nc4 Qxe4 13. f3 Qd5 14. Nxb6 cxb6 15. c4) 11. O-O (11. Nf3)) (9... Qd6 10. a4 a5 11. Nc4 Qg6 12. Nxb6 cxb6) 10. Nc4 cxd4 11. Nxb6 axb6 12. cxd4) 3. c3 Bc5 (3... d6 4. d4) (3... Nf6 4. d4 exd4 (4... Nxe4 5. d5 Ne7 (5... Bc5 6. dxc6) 6. Nxe5 d6 7. Bb5+ c6 8. dxc6 bxc6 (8... Nxc6 9. Nxc6 bxc6 10. Bxc6+ Bd7 11. Bxe4) (8... Qb6 9. cxb7+ Qxb5 10. bxa8=Q) 9. Nxc6 Qb6 10. Nd4+) 5. e5) (3... d5 4. Qa4) (3... f5 4. exf5) 4. d4 exd4 5. cxd4 Bb4+ 6. Nc3 *


[Event "My opening repertoire: As Black"]
[Site "https://lichess.org/study/dk4YQfB1/E0kcnVEq"]
[Result "*"]
[UTCDate "2023.08.25"]
[UTCTime "07:20:02"]
[Variant "Standard"]
[ECO "B12"]
[Opening "Caro-Kann Defense: Advance Variation, Botvinnik-Carls Defense"]
[Annotator "https://lichess.org/@/jZJXzWXp4dpbxg7"]
[Source "https://lichess.org/study/dk4YQfB1/E0kcnVEq"]
[Orientation "black"]

1. e4 (1. d4 Nf6 2. c4 (2. Bf4 e6 3. e3 b6 4. Nf3 Bb7 5. Bd3 Be7 6. Nbd2 O-O 7. c3 c5 8. O-O cxd4 9. exd4 (9. cxd4 Nc6) 9... d6 10. h3 a6) (2. Nc3 e6 3. e4 d5 4. e5 Nfd7) 2... e6 3. Nc3 (3. Nf3 b6) (3. g3 d5 4. Bg2 Be7 5. Nf3 O-O 6. O-O dxc4 7. Qc2) 3... Bb4 4. f3 (4. Qc2 b6 5. e4 c5) (4. Bd2 O-O) 4... c5) (1. Nh3 d5) 1... c6 2. d4 (2. Nf3 d5 3. Nc3 Bg4 4. h3 Bxf3 5. Qxf3 e6) (2. Nc3 d5 3. Qf3 (3. d4 dxe4) 3... d4) 2... d5 3. e5 (3. Nc3 dxe4 4. Nxe4 Nf6) (3. Nd2 dxe4) (3. exd5 cxd5 4. Bd3 (4. c4 Nf6) (4. Nf3 Nc6) 4... Nc6) (3. f3 dxe4 4. fxe4 e5 5. dxe5 Qh4+) (3. c3 dxe4) 3... c5 4. c3 (4. dxc5 Nc6 5. Nf3 Bg4) 4... Nc6 *


`;
};
