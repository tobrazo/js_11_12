$(function(){

	var html = $('#template').html();

	var data = 

				{

		name: 'Albert',

		age: '19',

		sex: 'man',

		activity: 'student',

		discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
						
			}				

	var result = tmpl(html, data);

	$('body').append(result);

})

	