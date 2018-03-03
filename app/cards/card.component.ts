import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { GestureTypes, SwipeGestureEventData } from "ui/gestures";
import { GridLayout } from "ui/layouts/grid-layout";
import { AbsoluteLayout } from "ui/layouts/absolute-layout";
import { Label } from "ui/label";
import { Button } from "ui/button";
import { CardService } from './card.service';
import { Emoji } from './emoji';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { BackendService } from "../shared/backend.service";
import * as ImageModule from "tns-core-modules/ui/image";

@Component({
    selector: 's-card',
    moduleId: module.id,
    templateUrl: "./card.component.html"
})
export class CardComponent implements OnInit {

    constructor(private cardService: CardService,
        private fonticon: TNSFontIconService, private router: Router) {
    }

    emoji: any[];
    uri: string;
    code: string;
    i: number = 0;

    @ViewChild("absolutelayout") al: ElementRef;
    @ViewChild("yes") yes: ElementRef;
    @ViewChild("no") no: ElementRef;
    @ViewChild("swipeleft") swipeleft: ElementRef;
    @ViewChild("swiperight") swiperight: ElementRef;

    ngOnInit() {
        this.emoji = this.cardService.getEmoji();
        //initial card
        this.code = this.emoji[this.i].code;
        this.uri = this.emoji[this.i].uri;
        //get ready for the swiping!
        for (var key in this.emoji) {
            this.handleSwipe(key);
        }
    }

    onFilter() {
        this.router.navigate(['/filter'])
    }

    handleSwipe(key: any) {

        this.i--;

        let grid = new GridLayout();
        let emoji = new Label();
        let plaatje = new ImageModule.Image()



        let yes = <Label>this.yes.nativeElement;
        let no = <Label>this.no.nativeElement;
        let absolutelayout = <AbsoluteLayout>this.al.nativeElement;

        //set the emoji on the card
        emoji.text = this.emoji[key].code;
        plaatje.src = this.emoji[key].uri;
        //android specific
        emoji.verticalAlignment = "middle";

        //build the grid which is the card
        grid.cssClasses = new Set(['card', this.emoji[key].color]);
        grid.id = 'card' + Number(key);
        grid.marginTop = this.i;

        //add the emoji to the grid, and the grid to the absolutelayout
        if (emoji.text) grid.addChild(emoji);
        if (plaatje.src) grid.addChild(plaatje);
        absolutelayout.addChild(grid);

        // //handle tapping
        // swiperight.addEventListener("tap", function(){
        //     //animate yes
        // });
        // swipeleft.addEventListener("tap", function(){
        //     //animate no
        // });

        //make card swipable
        grid.on(GestureTypes.swipe, function (args: SwipeGestureEventData) {
            if (args.direction == 1) {
                //right
                yes.animate({ opacity: 0, duration: 200 })
                    .then(() => yes.animate({ opacity: 1, duration: 200 }))
                    .then(() => yes.animate({ opacity: 0, duration: 200 }))
                    .then(() =>
                        grid.animate({ translate: { x: 1000, y: 100 } })
                            .then(function () {
                                return grid.animate({ translate: { x: 0, y: -2000 } });
                            })
                            .catch(function (e) {
                                console.log(e.message);
                            })
                    )
                    .catch((e) => {
                        console.log(e.message);
                    });
            }
            else {
                //left
                no.animate({ opacity: 0, duration: 100 })
                    .then(() => no.animate({ opacity: 1, duration: 100 }))
                    .then(() => no.animate({ opacity: 0, duration: 100 }))
                    .then(() =>
                        grid.animate({ translate: { x: -1000, y: 100 } })
                            .then(function () {
                                return grid.animate({ translate: { x: 0, y: -2000 } });
                            })
                            .catch(function (e) {
                                console.log(e.message);
                            })
                    )
                    .catch((e) => {
                        console.log(e.message);
                    });
            }
        });
    }

}