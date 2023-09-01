# Lichess Practice

Objective: To practice positions in a repertoire.

How will I do this?

## App flow

    1. Open the app, which shows a chess board in the starting position.
    2. The first time, the user is playing as white. The next time, they are playing as black.
    3. The use is expected to play the move specified as the move in the study.
    4. The "opponent" then plays one of the branches.
    5. This continues until the end of the branch is reached.
    6. Repeat until all branches reached.

## Tools

[`chessops/pgn`](https://github.com/niklasf/chessops) to parse, the study pgn, [chess.js](https://github.com/jhlywa/chess.js) for handling move logic, [chessground](https://github.com/lichess-org/chessground) for rendering the board.

The [Lichess Api](https://lichess.org/api). Specify the study id in a config file. Then [`studyChapterPgn`](https://lichess.org/api#tag/Studies/operation/studyChapterPgn) to get the pgns for white and for black.
