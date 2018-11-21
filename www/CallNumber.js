var CallNumber = function(){};

function onSuccess(resolve) {
    return resolve();
}

function onFailure(reject) {
    return reject();
}

CallNumber.prototype.callNumber = function(success, failure, number, bypassAppChooser) {
    return new Promise(function(resolve, reject) {
        cordova.exec(onSuccess(resolve), onFailure(reject), "CallNumber", "callNumber", [number, bypassAppChooser]);
    });
};

CallNumber.prototype.isCallSupported = function() {
    return new Promise(function(resolve, reject) {
        cordova.exec(onSuccess(resolve), onFailure(reject), "CallNumber", "isCallSupported");
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