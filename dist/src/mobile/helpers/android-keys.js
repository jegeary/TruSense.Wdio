"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AndroidKeys = /** @class */ (function () {
    function AndroidKeys() {
        this.Zero = 7;
        this.One = 8;
        this.Two = 9;
        this.Three = 10;
        this.Four = 11;
        this.Five = 12;
        this.Six = 13;
        this.Seven = 14;
        this.Eight = 15;
        this.Nine = 16;
        this.Pound = 18;
        this.A = 29;
        this.B = 30;
        this.C = 31;
        this.D = 32;
        this.E = 33;
        this.F = 34;
        this.G = 35;
        this.H = 36;
        this.I = 37;
        this.J = 38;
        this.K = 39;
        this.L = 40;
        this.M = 41;
        this.N = 42;
        this.O = 43;
        this.P = 44;
        this.Q = 45;
        this.R = 46;
        this.S = 47;
        this.T = 48;
        this.U = 49;
        this.V = 50;
        this.W = 51;
        this.X = 52;
        this.Y = 53;
        this.Z = 54;
        this.Enter = 66;
        this.BackSpace = 67;
        this.Space = 62;
        this.At = 77;
        this.Period = 56;
    }
    AndroidKeys.prototype.getKey = function (letter) {
        switch (letter.toUpperCase()) {
            case '0':
                return this.Zero;
            case '1':
                return this.One;
            case '2':
                return this.Two;
            case '3':
                return this.Three;
            case '4':
                return this.Four;
            case '5':
                return this.Five;
            case '6':
                return this.Six;
            case '7':
                return this.Seven;
            case '8':
                return this.Eight;
            case '9':
                return this.Nine;
            case 'A':
                return this.A;
            case 'B':
                return this.B;
            case 'C':
                return this.C;
            case 'D':
                return this.D;
            case 'E':
                return this.E;
            case 'F':
                return this.F;
            case 'G':
                return this.G;
            case 'H':
                return this.H;
            case 'I':
                return this.I;
            case 'J':
                return this.J;
            case 'K':
                return this.K;
            case 'L':
                return this.L;
            case 'M':
                return this.M;
            case 'N':
                return this.N;
            case 'O':
                return this.O;
            case 'P':
                return this.P;
            case 'Q':
                return this.Q;
            case 'R':
                return this.R;
            case 'S':
                return this.S;
            case 'T':
                return this.T;
            case 'U':
                return this.U;
            case 'V':
                return this.V;
            case 'W':
                return this.W;
            case 'X':
                return this.X;
            case 'Y':
                return this.Y;
            case 'Z':
                return this.Z;
            case ' ':
                return this.Space;
            case '@':
                return this.At;
            case '.':
                return this.Period;
            case '#':
                return this.Pound;
            default:
                return -1;
        }
    };
    return AndroidKeys;
}());
var Key = new AndroidKeys();
exports.default = Key;
//# sourceMappingURL=android-keys.js.map