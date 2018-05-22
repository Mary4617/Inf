function $()
{ var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{ var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; }  

function f1()
{
alert('111');
$('MyDiv1').style.borderBottom='solid yellow';
}
function f2()
{
alert('222');
$('MyDiv2').style.borderTop='solid purple';
}
function f3()
{
alert('333');
$('MyDiv3').style.fontVariant='small-caps';
}
function f4()
{
alert('444');
$('MyDiv4').style.marginTop='2.5in';
}
function f5()
{
alert('555');
$('MyDiv5').style.textDecoration='Line-Through';
}
function f6()
{
alert('666');
$('MyDiv6').style.backgroundImage='url(rickmorty.gif)';
}
function f7()
{
alert('777');
$('MyDiv7').style.borderRightColor='brown';
}