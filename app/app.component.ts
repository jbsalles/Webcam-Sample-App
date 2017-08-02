/**
 * Created by Jean-Baptiste on 4/4/2016.
 */
import {Component,Input} from 'angular2/core';
import {KreatorFormComponent} from './kreator-form.component';
import {RecorderComponent} from './recorder.component';
import {ReviewComponent} from './review.component';
import {ThanksComponent} from './thanks.component';

@Component({
    selector: 'my-app',
    template: `<div id="wrapper" class="{{step}}" >
                 <kreator-form (nextStep)="setStep($event)"></kreator-form>
                 <recorder-app (lastStep)="setReview($event)" ></recorder-app>
                 <review-app (previousStep)="setStep($event)" [videoUrl]="videoUrl2" (lastStep)="setStep($event)" ></review-app>
                 <thanks-app></thanks-app>
               </div>`,
    directives: [KreatorFormComponent,RecorderComponent,ReviewComponent,ThanksComponent]
})

export class AppComponent{
    public step = 'step1';
    public videoUrl2: string ="";

    constructor(){
    }

    setReview(url){
        var _self = this;
            setTimeout(() => function(){
                _self.step = url[0];
                _self.videoUrl2 = url[1];
                console.log( url[0]+' '+ url[1] );
            }, 1000);
    }

    setStep(step:string) {
        this.step = step;
        console.log(step);
    }


}