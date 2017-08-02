System.register(['angular2/core', './kreator-form.component', './recorder.component', './review.component', './thanks.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, kreator_form_component_1, recorder_component_1, review_component_1, thanks_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (kreator_form_component_1_1) {
                kreator_form_component_1 = kreator_form_component_1_1;
            },
            function (recorder_component_1_1) {
                recorder_component_1 = recorder_component_1_1;
            },
            function (review_component_1_1) {
                review_component_1 = review_component_1_1;
            },
            function (thanks_component_1_1) {
                thanks_component_1 = thanks_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.step = 'step1';
                    this.videoUrl2 = "";
                }
                AppComponent.prototype.setReview = function (url) {
                    var _self = this;
                    setTimeout(function () { return function () {
                        _self.step = url[0];
                        _self.videoUrl2 = url[1];
                        console.log(url[0] + ' ' + url[1]);
                    }; }, 1000);
                };
                AppComponent.prototype.setStep = function (step) {
                    this.step = step;
                    console.log(step);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<div id=\"wrapper\" class=\"{{step}}\" >\n                 <kreator-form (nextStep)=\"setStep($event)\"></kreator-form>\n                 <recorder-app (lastStep)=\"setReview($event)\" ></recorder-app>\n                 <review-app (previousStep)=\"setStep($event)\" [videoUrl]=\"videoUrl2\" (lastStep)=\"setStep($event)\" ></review-app>\n                 <thanks-app></thanks-app>\n               </div>",
                        directives: [kreator_form_component_1.KreatorFormComponent, recorder_component_1.RecorderComponent, review_component_1.ReviewComponent, thanks_component_1.ThanksComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map