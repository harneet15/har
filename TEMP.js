
window.onload= setup;
function setup()
{
	
	document.getElementById("cel").onclick=function(){setunit("C");};
	document.getElementById("far").onclick=function(){setunit("F");};
	
	
	}
	
	
	
	function setunit(u)
	{
		
		document.getElementById("unit").innerHTML="&deg;"+u;
		
	}
	
function convert()
{
	validate();


}

function cc()
	{var temp1=document.getElementById("temp").value;


if(document.getElementById("far").checked)
{
	var c = (temp1-32)*5/9;
	document.getElementById("ca").innerHTML=c.toFixed(1)+"&deg; C";
	
}
else
{
	var f = (temp1*9)/5+32;
	document.getElementById("ca").innerHTML=f.toFixed(1)+"&deg; F";
}

}
function validate()
{
	var temp1=document.getElementById("temp").value;
	if(temp1>0 && temp1< 100)
		cc();
	else
	{alert("Please enter Temp between 0 and 100");
var a =["mon","tue","wed","thur"];
a.push("3");
a.push("sun");
a.pop();
a.push(90);
	for(var i = 0 ;i<5;i++)
	{
	document.getElementById("dd").innerHTML=a[i];
	}

}}


