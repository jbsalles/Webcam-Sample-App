/**
 * Created by Jean-Baptiste on 4/4/2016.
 */
import {Component,Output,EventEmitter} from 'angular2/core';
import {Kreator} from './kreator';

@Component({
    selector: 'review-app',
    templateUrl: 'app/review.component.html',
})

export class ReviewComponent {
    @Output() previousStep = new EventEmitter();
    @Output() lastStep = new EventEmitter();
    onApprove(){
        this.lastStep.emit("step4");
    }

    onRedo() {
        this.previousStep.emit("step2");
    }
}
