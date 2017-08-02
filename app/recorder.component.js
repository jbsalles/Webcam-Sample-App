System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var RecorderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RecorderComponent = (function () {
                function RecorderComponent() {
                    var _this = this;
                    this.chunks = [];
                    this.lastStep = new core_1.EventEmitter();
                    navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
                    var promise = new Promise(function (resolve, reject) {
                        navigator.getUserMedia({ video: true, audio: true }, function (stream) {
                            resolve(stream);
                        }, function (err) { return reject(err); });
                    }).then(function (stream) {
                        _this.videosrc = URL.createObjectURL(stream);
                        _this.recorder = new MediaStreamRecorder(stream);
                        _this.recorder.mimeType = 'video/webm';
                        _this.recorder.audioChannels = 1;
                        _this.recorder.width = 640;
                        _this.recorder.height = 482;
                        _this.recorder.bitsPerSecond = 512000;
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
                RecorderComponent.prototype.startRecord = function () {
                    var self = this;
                    console.log('start record');
                    this.recorder.start();
                    this.isRecording = true;
                    this.recorder.ondataavailable = function (e) {
                        console.log('fdsf');
                        self.chunks.push(e.data);
                    };
                    this.recorder.onstop = function (e) {
                        alert('dsads');
                    };
                };
                RecorderComponent.prototype.stopRecord = function () {
                    var self = this;
                    this.isRecording = false;
                    console.log('stop record');
                    this.recorder.stop();
                    var blob = new Blob(self.chunks, { 'type': 'video/webm' });
                    self.chunks = [];
                    self.blobURL = URL.createObjectURL(blob);
                    self.lastStep.emit(["step3", self.blobURL]);
                    //WARNING ! ondataavailable out of the execution context => force direct DOM update
                    document.getElementById('reviewVideo').src = self.blobURL;
                    document.getElementById('wrapper').className = "step3";
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], RecorderComponent.prototype, "lastStep", void 0);
                RecorderComponent = __decorate([
                    core_1.Component({
                        selector: 'recorder-app',
                        templateUrl: 'app/recorder.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], RecorderComponent);
                return RecorderComponent;
            }());
            exports_1("RecorderComponent", RecorderComponent);
        }
    }
});
//# sourceMappingURL=recorder.component.js.map