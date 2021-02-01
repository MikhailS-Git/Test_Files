var css= ".container{width:200px;height:75px;position:fixed;top:20px;left:50%;transform:translateX(-50%);background:green;}"

var head = document.head || document.getElementsByTagName('head')[0];

var style = document.createElement('style');

head.appendChild(style);

style.type = 'text/css';

if (style.styleSheet)
{
	style.styleSheet.cssText = css;
}
else
{
	style.appendChild(document.createTextNode(css));
}
