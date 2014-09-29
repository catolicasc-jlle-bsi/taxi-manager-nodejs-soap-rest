module.exports = {
    
     getCurrencyTodayQuote: function(from, to, value, callback) {
                
        var http = require("http");
        
        var url = 'http://rate-exchange.appspot.com/currency?from='+from+'&to='+to+'&q='+value;
     
        http.get(url, function(res) {
            var response = '';
                
            res.on('data', function(chunk) {
                response += chunk;
            });
            
            res.on('end', function() {
                callback(JSON.parse(response).v);
            });
            
        });
    }    
    
};