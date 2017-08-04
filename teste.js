function inside(point, vs) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

    var x = point[0], y = point[1];

    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];

        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }

    return inside;
};




setores=[
	{
		"nome": "Superior Oeste",
		"pontos":[
			[175,135],
			[220,135],
			[325,125]
		]
	},
	{
		"nome": "Superior Sul",
		"pontos":[
			[70,285]
		]
	},
	{
		"nome": "Superior Leste",
		"pontos":[
			[250,450]
		]
	},	
	{
		"nome": "Superior Norte",
		"pontos":[
			[470,270]
		]
	},
	{
		"nome": "Gol Norte",
		"pontos":[
			[400,270]
		]
	},	
	{
		"nome": "Central Leste",
		"pontos":[
			[250,390]
		]
	},	
	{
		"nome": "Central Oeste",
		"pontos":[
			[250,200]
		]
	},
	{
		"nome": "Gol Sul",
		"pontos":[
			[150,270]
		]
	}		
];


console.log("SETORES DISPONÍVEIS");

$('area[href]').each(function(i,area){
	polygon=[];
	ponto=[0,0];
	$( $(area).attr('coords').split(',') ).each(function(i){
		if (i%2==0) ponto=[0,0];
		ponto[i%2]=Number(this);
		if (i%2==1) polygon.push(ponto);
	});
	
	$(setores).each( function(){
		if(  inside(this.pontos[0], polygon )    ) console.log( this.nome );
	});
});

