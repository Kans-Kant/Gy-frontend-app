
//get days between two date : now, other date
export function getDays(a){
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    
  let today = new Date();
  let date = new Date(a);
  var diffDays = Math.round(Math.abs((today - date) / oneDay));
  return diffDays;
}

//convert a number around 1000 to render like 1k
export function convertNumber(n,d){
	var x=(''+n).length;
	var p=Math.pow;
	d=p(10,d);
	x-=x%3;
return Math.round(n*d/p(10,x))/d+" kMGTPE"[x/3]
}