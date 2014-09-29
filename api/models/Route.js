/**
* Route.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    schema: true,
    
    attributes: {
      
        from: {
            type: 'string',
            required: true
        },
        to: {
	  		type: 'string',
	  		required: true
	  	},
        currency: {
	  		type: 'string',
	  		required: true
	  	},
        distance: {
	  		type: 'number'
	  	},
        fuel: {
	  		type: 'number'
	  	},
        value: {
	  		type: 'number'
	  	},
        lat: {
	  		type: 'number'
	  	},
        lng: {
	  		type: 'number'
	  	}
    }
};

