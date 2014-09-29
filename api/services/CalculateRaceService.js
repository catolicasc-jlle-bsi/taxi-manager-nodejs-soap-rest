module.exports = {

    calculate: function(route, callback) {
                
        locale = function(value) {
            route.lat = value.lat;
            route.lng = value.lng;
            
            console.log("lat: " + value.lat);
            console.log("lng: " + value.lng);
            
            GeoService.getDistanceOfPoitns(route.from, route.to, distance);
        }
        
        distance = function(value) {
            route.distance = value;
            
            console.log("Distancia: " + value);
                        
            FuelService.getFuelPrice(route.lat, route.lng, fuel);
        }
        
        fuel = function(value) {
            route.fuel = value;
            
            console.log("Gasolina: " + value);
            
            QuoteService.getCurrencyTodayQuote("USD", route.currency, (route.distance/1000) * route.fuel, quote);
        }        
        
        quote = function(value) {
            console.log("Valor: " + value);
            
            var numeral = require('numeral');
            
            route.value = numeral(value).format('$ 0,0.00');
            
            callback(route);
        }
        
        GeoService.getPositionOfLocale(route.from, locale);        
            
    }   
                         
};