function createGreater(name)
{

	let firstname=name.split("")[0]

	function greater()
	{console.log( firstname );
		console.log("Hello" , +firstname );
	}
	return greater ;

}

let j=createGreater("shubham pal");
let i=createGreater("kalyani pal");

j();
i();

let     a=function(){console.log("qdhb")};
let b=a;

