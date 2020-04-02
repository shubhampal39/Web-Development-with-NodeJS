let menu=[
	"shubham","anushri","piyush","krishna","rohini","daisy","Dam"
]

function name(first)
{
	if(first.toLowerCase().indexOf("shubham")!==-1) return false;
    
	if(first.toLowerCase().indexOf("anushri")!==-1) return false;
	return true;
}


function last(first)
{
	if(first.toLowerCase().indexOf("rohini")!==-1) return false;
    
	if(first.toLowerCase().indexOf("dami")!==-1) return false;
	return true;
}

let vegMenu=menu.filter(first)
let jaimenu=menu.filter(first).filter(last)

console.log("vegMenu");
console.log("jaimenu");