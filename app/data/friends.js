// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

const tableArray = [
	{
	  "name":"Archie Andrews",
	  "photoUrl":"https://upload.wikimedia.org/wikipedia/en/0/0d/Archieandrwcmc.png",
	  "scores":[
	      5,
	      1,
	      4,
	      1,
	      5,
	      1,
	      2,
	      5,
	      4,
	      1
	    ]
	},
	{
	  "name":"Betty Cooper",
	  "photoUrl":"https://s-media-cache-ak0.pinimg.com/originals/2b/f1/66/2bf16634681059a53d164021a9efddec.png",
	  "scores":[
	      2,
	      3,
	      2,
	      1,
	      3,
	      3,
	      2,
	      3,
	      2,
	      5
	    ]
	},
	{
	  "name":"Veronica Lodge",
	  "photoUrl":"https://upload.wikimedia.org/wikipedia/en/6/6a/Veronicaldg.png",
	  "scores":[
	      2,
	      5,
	      1,
	      1,
	      5,
	      5,
	      1,
	      5,
	      2,
	      3
	    ]
	},
	{
	  "name":"Jughead Jones",
	  "photoUrl":"https://upload.wikimedia.org/wikipedia/en/7/75/Jugheadjns.png",
	  "scores":[
	      5,
	      5,
	      1,
	      1,
	      5,
	      5,
	      1,
	      5,
	      1,
	      3
	    ]
	},
	{
	  "name":"Reggie Mantle",
	  "photoUrl":"https://static.comicvine.com/uploads/square_small/4/49448/1894899-reggie5.jpg",
	  "scores":[
	      1,
	      5,
	      1,
	      3,
	      5,
	      2,
	      2,
	      2,
	      1,
	      3
	    ]
	},
	{
	  "name":"Moose Mason",
	  "photoUrl":"https://upload.wikimedia.org/wikipedia/en/8/85/Moosemsn.png",
	  "scores":[
	      1,
	      5,
	      1,
	      1,
	      3,
	      5,
	      5,
	      5,
	      2,
	      3
	    ]
	},
	{
	  "name":"Cheryl Blossom",
	  "photoUrl":"https://static.comicvine.com/uploads/scale_small/11/111746/3346758-2033876218-28308.jpg",
	  "scores":[
	      1,
	      5,
	      1,
	      1,
	      5,
	      5,
	      1,
	      5,
	      1,
	      3
	    ]
	}

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
