({
    doInit : function(component, event, helper) {
        component.set('v.lcHost', window.location.hostname);
        window.addEventListener("message", function(event) {
            if(event.data.state == 'LOADED'){
                component.set('v.vfHost', event.data.vfHost);
                window.setTimeout(
                    $A.getCallback(function() {
                        helper.sendToVF(component, helper);
                    }), 5
                );
            }
        }, false);
    },
    
    setLocation: function (component, event, helper) {
        var params = event.getParam('arguments');
        if (params) {
            var loc = {
                lat: params.lat,
                lng: params.long
            };
            component.set("v.location", loc);
            component.set("v.mapData", [loc]);
            component.set("v.mapOptionsCenter", loc);
        }
    }
})