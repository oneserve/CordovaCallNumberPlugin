var CallNumber = function(){};

CallNumber.prototype.callNumber = function(number, bypassAppChooser) {
    return new Promise(function(resolve, reject) {
        cordova.exec(resolve, reject, "CallNumber", "callNumber", [number, bypassAppChooser]);
    });
};

CallNumber.prototype.isCallSupported = function() {
    return new Promise(function(resolve, reject) {
        cordova.exec(resolve, reject, "CallNumber", "isCallSupported");
    });
}

//Plug in to Cordova
cordova.addConstructor(function() {

    if (!window.Cordova) {
        window.Cordova = cordova;
    };

    if(!window.plugins) window.plugins = {};
    window.plugins.CallNumber = new CallNumber();
});

module.exports = { CallNumber };