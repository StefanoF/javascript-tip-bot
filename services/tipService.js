module.exports = {
	getBasePath: function(){
		return 'public/img/';
	},
	getRandom: function(){
		var _this = this;
		var all = _this.getAll();

		var randomIndex = Math.floor(Math.random() * (all.length - 0) + 0);
		return all[randomIndex];
	},
	getAll: function(){
		var _this = this;
		var tips = [
			{
				msg: 'Don\'t use reserved words as keys. It won\'t work in IE8',
				img: 'reserved.png',
				basePath: _this.getBasePath()
			},
			{
				msg: 'Use typeof <variable> === "undefined" \n'+
				     'instead of <variable> == undefined',
				img: 'typeof.png',
				basePath: _this.getBasePath()
			},
			{
				msg: 'Use the literal syntax for object creation',
				img: 'literalobject.png',
				basePath: _this.getBasePath()
			},
			{
				msg: 'Use the literal syntax for array creation',
				img: 'literalarray.png',
				basePath: _this.getBasePath()
			},
			{
				msg: 'Use single quotes \'\' for strings',
				img: 'singlequote.png',
				basePath: _this.getBasePath()
			},
			{
				msg: 'Use braces with all multi-line blocks',
				img: 'braces.png',
				basePath: _this.getBasePath()
			},
			{
				msg: 'If you want to extend and contribute to this repository: '+
				     'github.com/StefanoF/javascript-tip-bot',
				img: 'github-logo.jpg',
				basePath: _this.getBasePath()
			}
		];
		return tips;
	}
};