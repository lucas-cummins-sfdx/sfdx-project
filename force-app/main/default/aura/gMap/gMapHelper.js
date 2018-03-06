({
    sendToVF : function(component, helper) {
        var message = JSON.stringify({
            loadGoogleMap: true,
            mapData: component.get('v.mapData'), 
            mapOptions: component.get('v.mapOptions'),  
            mapOptionsCenter: component.get('v.mapOptionsCenter'),
            origin: window.location.hostname
        });
        var vfWindow = component.find("vfFrame").getElement().contentWindow;
        vfWindow.postMessage(message, component.get("v.vfHost"));
    }
})