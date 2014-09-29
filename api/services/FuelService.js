module.exports = {
    
     getFuelPrice: function(latitude, longitude, callback) {
                
        var http = require("http");
        var radius = 15;
         
        var url = 'http://devapi.mygasfeed.com/stations/radius/'+latitude+'/'+longitude+'/'+radius+'/pre/price/rfej9napna.json?';
     
        http.get(url, function(res) {
            var response = '';
                
            res.on('data', function(chunk) {
                response += chunk;
            });
            
            res.on('end', function() {
                var obj = JSON.parse(response);
                var price = 0.0;
                
                obj.stations.forEach(function(item) {
                    if (item.mid_price != 'N\/A') {
                        price = item.mid_price;                        
                        return true;
                    }
                });
                
                callback(price);
            });
            
        });
    }  
    
    
};