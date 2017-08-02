/**
 * Created by Jean-Baptiste on 4/5/2016.
 */
import {Component,Output,EventEmitter} from 'angular2/core';

@Component({
    selector: 'recorder-app',
    templateUrl: 'app/recorder.component.html',
})

export class RecorderComponent{
    videosrc: string;
    blobURL: string;
    chunks: Array<any> = [];
    recorder: any;
    isRecording : boolean;
    @Output() lastStep = new EventEmitter();
    constructor(){
        navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
        var promise= new Promise<string>((resolve, reject)=>{
            navigator.getUserMedia({video: true,audio: true},(stream) => {
                resolve(stream);
            }, (err) => reject(err));
        }).then((stream)=>{
            this.videosrc= URL.createObjectURL(stream);
            this.recorder = new MediaStreamRecorder(stream);
            this.recorder.mimeType = 'video/webm';
            this.recorder.audioChannels = 1;
            this.recorder.width = 640;
            this.recorder.height = 482;
            this.recorder.bitsPerSecond = 512000;
        }).catch((error)=>{
            console.log(error);
        });
    }

    startRecord(){
        var self = this;
            console.log('start record');
            this.recorder.start();
            this.isRecording = true;
        this.recorder.ondataavailable = function (e) {
            console.log('fdsf');
            self.chunks.push(e.data);
        }

        this.recorder.onstop = function (e) {
            alert('dsads');

        }
    }

    stopRecord(){
        var self = this;
            this.isRecording = false;
            console.log('stop record');
            this.recorder.stop();
        var blob = new Blob(self.chunks, { 'type' : 'video/webm' });
        self.chunks=[];
        self.blobURL = URL.createObjectURL(blob);
        self.lastStep.emit(["step3",self.blobURL]);
        //WARNING ! ondataavailable out of the execution context => force direct DOM update
        document.getElementById('reviewVideo').src=self.blobURL;
        document.getElementById('wrapper').className="step3";
    }


}
declare var navigator: any;
declare var MediaStreamRecorder: any;