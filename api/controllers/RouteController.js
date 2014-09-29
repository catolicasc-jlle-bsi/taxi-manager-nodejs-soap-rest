/**
 * RouteController
 *
 * @description :: Server-side logic for managing Routes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
   
    'new': function (req, res) {
		res.locals.flash = _.clone(req.session.flash);
		res.view();

		req.session.flash = {};
	},
    
    create: function (req, res, next) {
		Route.create( req.params.all(), function routeCreated(err, route) {
            
			if (err) {
				console.log(err);

				req.session.flash = {
					err: err
				}

				res.locals.flash = _.clone(req.session.flash);

				return res.redirect('/route/new');
			}
            
            response = function(value) {                
                res.json(value);
			    req.session.flash = {};
                                
				req.session.flash = {
					route: route
				}
                
				res.locals.flash = _.clone(req.session.flash);

            }
            
            CalculateRaceService.calculate(route, response);

		});
	}
};

