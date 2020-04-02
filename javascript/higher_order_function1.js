function getfirstname(fullname)
{
	return fullname.split(" ")[0]
}

function greater(findname,fullname)
{
	let firstname=findname(fullname)
	console.log("Hello "+firstname);
}

greater( getfirstname,"Shubham Pal" );