import { Chessground } from 'chessground';
import { Api } from 'chessground/api';
import { Config } from 'chessground/config';
import { Dests } from 'chessground/types';

import { Chess, Move, QUEEN, SQUARES } from 'chess.js';
import { ChapterInfo } from './pgnParser';
import { Variation } from './script';

const START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

export class ChessBoard {
    config: Config;
    chessGround: Api;
    boardState: Chess;
    lines: Variation[] | undefined;
    linesIdx: number;
    constructor(container: HTMLElement) {
        //@ts-ignore
        window.chessBoard = this;
        this.linesIdx = 0;

        this.boardState = new Chess(START_FEN);

        this.config = {
            turnColor: 'white',
            movable: {
                free: false,
                dests: this.getDests(),
                showDests: true,
            },
            autoCastle: true,
            events: {
                change: () => {
                    this.chessGround.set({
                        movable: {
                            dests: this.getDests(),
                        },
                    });
                },
                move: (orig, dest, capturedPiece) => {
                    this.boardState.move({ from: orig, to: dest, promotion: QUEEN });
                    // update the board state to match in case of state drift (castling, en passant)
                    this.chessGround.set({ fen: this.boardState.fen() });

                    const history = this.boardState.history({ verbose: true });
                    this.handleMove(history[history.length - 1]);
                },
            },
        };

        this.chessGround = Chessground(container, this.config);
    }

    getDests(): Dests {
        // https://github.com/lichess-org/chessground-examples/blob/a2ada8b52fe5b586353afb6d0c0423f91e4540e4/src/util.ts#L5-L12
        const dests = new Map();
        SQUARES.forEach((s) => {
            const ms = this.boardState.moves({ square: s, verbose: true });
            if (ms.length)
                dests.set(
                    s,
                    ms.map((m) => m.to)
                );
        });
        return dests;
    }

    loadChapter(variations: Variation[]) {
        this.lines = variations;
        this.linesIdx = 0;
        this.loadCurrentVariation();
    }

    loadCurrentVariation() {
        if (this.lines === undefined) {
            throw new Error('lines are not defined');
        }
        const variation = this.lines[this.linesIdx];
        console.log({ variation });
        this.boardState.reset();

        this.chessGround.set({
            orientation: variation.orientation,
            fen: this.boardState.fen(),
        });

        if (variation.orientation === 'black') {
            this.boardState.move(variation.line[0]);
            this.chessGround.set({
                fen: this.boardState.fen(),
                movable: {
                    dests: this.getDests(),
                },
            });
        }
    }

    handleMove(move: Move) {
        debugger;
        console.log(`Handling move: ${move.san}`);
        if (this.lines === undefined) {
            console.log(':(');
            return;
        }

        const currentPly = this.boardState.history().length;
        // ply is 1-based, js are 0-based: we need to offset by one
        const expectedMove = this.lines[this.linesIdx].line[currentPly - 1];
        console.log(`Expected ${expectedMove}, got ${move.san}`);

        // line is over, load the next one
        if (currentPly === this.lines[this.linesIdx].line.length) {
            // lines concluded
            if (this.linesIdx + 1 === this.lines.length) {
                console.log('Study over');
            }

            this.linesIdx += 1;
            this.loadCurrentVariation();
            return;
        }

        //otherwise, load then next move of the varation
        const nextMove = this.lines[this.linesIdx].line[currentPly];

        this.boardState.move(nextMove);
        // update the ui
        this.chessGround.set({
            fen: this.boardState.fen(),
        });

        return;
    }
}
