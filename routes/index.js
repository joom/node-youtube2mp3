var getVideoID = require('./../modules/getVideoID');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.error = function(req, res){
  res.render('index', { title: 'Error' });
};

exports.form = function(req, res) {
	var id = getVideoID(req.query.url);
	if(typeof id === 'undefined') {
		res.redirect('/error');
	} else {
		res.redirect('/download/' + id);
	}
};