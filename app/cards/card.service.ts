import { Injectable } from "@angular/core";
import { Emoji } from "./emoji";

@Injectable()
export class CardService {
    private emoji = new Array<any>(

        { code: '🍮', color: 'b1' },
        { code: '🍡', color: 'b2' },
        { code: '🍨', color: 'b3' },
        { code: '🍩', color: 'b4' },
        { code: '🍪', color: 'b5' },
        { code: '🍰', color: 'b5' },
        { code: '🍬', color: 'b1' },
        { code: '🍭', color: 'b2' },
        { code: '🎂', color: 'b3' },
        { code: '🍧', color: 'b4' },
        { code: '🍫', color: 'b5' },
        { code: '🍦', color: 'b6' },
        { uri: 'res://1', color: 'b1' },
        { uri: 'res://2', color: 'b2' },
        { uri: 'res://3', color: 'b3' },
        { uri: 'res://4', color: 'b4' },
        { uri: 'res://5', color: 'b5' },
        { uri: 'res://6', color: 'b6' },
        { uri: 'res://8', color: 'b3' },
    );

    getEmoji(): Emoji[] {
        return this.emoji;
    }

}