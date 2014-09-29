module.exports = {

    getDistanceOfPoitns: function(origin, destiny, callback) {
                
        var http = require("http");
        
        var url = 'http://maps.googleapis.com/maps/api/distancematrix/json?origins='+origin+'&destinations='+destiny+'&sensor=false';
     
        http.get(url, function(res) {
            var response = '';
                
            res.on('data', function(chunk) {
                response += chunk;
            });
            
            res.on('end', function() {
                callback(JSON.parse(response).rows[0].elements[0].distance.value);
            });
            
        });
    },
    
    getPositionOfLocale: function(locale, callback) {
                
        var http = require("http");
        
        var url = 'http://maps.googleapis.com/maps/api/geocode/json?address='+locale+'&sensor=false';
     
        http.get(url, function(res) {
            var response = '';
                
            res.on('data', function(chunk) {
                response += chunk;
            });
            
            res.on('end', function() {
                var lat = JSON.parse(response).results[0].geometry.location.lat;
                var lng = JSON.parse(response).results[0].geometry.location.lng;
                
                var position = {lat:lat, lng:lng};
            
                callback(position);
            });
            
        });
        
    }
};