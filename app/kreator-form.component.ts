/**
 * Created by Jean-Baptiste on 4/4/2016.
 */
import {Component,Directive,Output,EventEmitter} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Kreator} from './kreator';

@Component({
    inputs: ['model'],
    selector: 'kreator-form',
    templateUrl: 'app/kreator-form.component.html',
})

export class KreatorFormComponent {

    private submitted = false;

    model: Kreator = new Kreator();

    @Output() nextStep = new EventEmitter();

    public onSubmit() {
        this.submitted = true;
        this.nextStep.emit("step2");
    }
}