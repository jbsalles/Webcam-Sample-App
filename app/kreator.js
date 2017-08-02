System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Kreator;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by Jean-Baptiste on 4/4/2016.
             */
            Kreator = (function () {
                function Kreator(id, name, email, youtubeId) {
                    this.id = id;
                    this.name = name;
                    this.email = email;
                    this.youtubeId = youtubeId;
                }
                return Kreator;
            }());
            exports_1("Kreator", Kreator);
        }
    }
});
//# sourceMappingURL=kreator.js.map