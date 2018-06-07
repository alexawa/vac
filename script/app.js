;
$(function(){
	console.clear();
	console.log('on load.');

	var options = {
		  useEasing: true, 
		  useGrouping: true, 
		  separator: '', 
		  decimal: '.', 
	};
	var stats__coffee = new CountUp('stats__coffee', 0, 4599, 0, 2.5, options),
	stats__website = new CountUp('stats__website', 0, 21, 0, 2.5, options),
	stats__clients = new CountUp('stats__clients', 0, 118, 0, 2.5, options),
	stats__team = new CountUp('stats__team', 0, 8, 0, 3.5, options);
	if (!stats__coffee.error) {
		  stats__coffee.start();
	}
	if (!stats__website.error) {
		  stats__website.start();
	}
	if (!stats__clients.error) {
		  stats__clients.start();
	}
	if (!stats__team.error) {
		  stats__team.start();
	}
})