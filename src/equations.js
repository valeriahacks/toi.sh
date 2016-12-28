/* eslint-disable */

export default [
/*1*/	(x, y, n) => Math.floor((Math.sin(y)*Math.cos(x)*n) * 255),
/*2*/	(x, y, n) => (Math.floor(Math.sin(y)*255) + Math.floor(Math.sin(x)*255)) >> Math.floor(Math.sin(n)*6),
/*3*/	(x, y, n) => (~n ^ y | ~x) + Math.sqrt(x + n)*255,
/*4*/	(x, y, n) => (~n ^ ~y & ~x)*255,
/*5*/	(x, y, n) => Math.floor(Math.log(x|y&n)  * n^20 | Math.sqrt(x*n) * y & ~n),
/*6*/	(x, y, i) => (x&x^i|y&y)*(~i*~2888855) ^ (2^x&y * i*255) & (~i),
/*7*/	(x, y, n) => (x^y) | (x&n) * (~y) & n,
/*8*/	(x, y, n) => ((x*y*(Math.pow(n,2))) | (y*(Math.sin(n)*255)) & Math.sin(Math.tanh(n*x)))/(2*n),
/*9*/	(x, y, n) => Math.sqrt((x*y) & (y*n)) ^ Math.tanh(n*x),
/*10*/	(x, y, n) => ((0.4 * Math.cos(n+(x*y)) > y + 0.01 * n * Math.sin(2*n*x)) ? 255 : 0),
/*11*/	(x, y, n) => (1 - (Math.sqrt((x-n)^2 + y^2) * Math.sqrt(x+n)^2 + y^2))*255,
/*12*/	(x, y, n) => ((Math.cos(10 * n)) < Math.tan(x * Math.sin (2*y)) ? 255 : 0),
/*13*/	(x, y, n) => (((x^2) + (y^2) + (n^2) + (Math.sin(x)^4) + Math.sin(y) + Math.sin(n)) <= (x*20) ? ((Math.sin(x)^4) + Math.sin(y) + Math.sin(n)) : (x^2) + (y^2) + (n^2) >> x),
/*14*/	(j, i, x) => Math.floor( (i & j * (Math.sin(i*x) > 0.5 ? Math.sqrt(x*i | j) : 0.2 * x) << Math.sin(j | Math.sqrt(i | j*x))) * 255 ),
/*15*/	(j, i, x) => Math.floor( (i & j | x << Math.sin(j ^ i | i)) * 255 ),
/*16*/	(j, i, x) => Math.floor( (i ^ j & x | j & i) * 255 ),
/*17*/	(j, i, x) => Math.floor( Math.sqrt((0^(Math.sqrt(j^Math.sqrt(x^j))) & (x^i^Math.sin(i)*255))) * 255 )^x,
/*18*/	(j, i, x) => Math.floor( (0^(j^Math.sin(x^j)) & (x^i^Math.sqrt(i))) * 255 )^x, // holy jebus
/*19*/	(j, i, x) => Math.floor( (0^(i^x^j) & (j^x^i^x)) * 255 ),
/*20*/	(j, i, x) => Math.floor( (0^(i^x^j) & (j^x)) * 255 ),
/*21*/	(j, i, x) => Math.floor( (0^(i+x) & (j+x)) * 255 ),
/*22*/	(j, i, x) => Math.floor( (0^(i<<x) & (j<<x)) * 255 ),
/*23*/	(j, i, x) => Math.floor( x>>i<<j * 255 ),
/*24*/	(j, i, x) => Math.floor( Math.sin(i << x*j^i^x^j) * 255 ),
/*25*/	(j, i, x) => Math.floor( (Math.floor(Math.sin(j*x)*255) & Math.floor(i << Math.sin(x)*255) ) ),
/*26*/	(j, i, x) => Math.floor( j^(Math.sin(j^j^j^j^x^i)*x) ),
/*27*/	(j, i, x) => Math.floor( j^j^j^j^j^x^i ),
/*28*/	(j, i, x) => Math.floor( (x*Math.sin(x)*(((x*Math.sin(x)/j)^2)^i+Math.sin(x)*j)*2)^j ),
/*29*/	(j, i, x) => Math.floor( Math.abs(j*(j*(Math.sqrt(x^i) * Math.sqrt(j*i^x))/j) - (2 * j * (x ^ j)))),
/*30*/	(j, i, x) => Math.floor( Math.sqrt(Math.pow(x^i^j, 1/i)/j) * (x^Math.sqrt(i)) * 255),
/*31*/	(j, i, x) => Math.floor( Math.max(Math.sin(j*x), Math.cos(i*x)) * 255 ),
/*32*/	(j, i, x) => Math.floor( Math.max(Math.cos(j*i) * 255, Math.tan(x*j*i)*255) * Math.tanh(x) * 255 * j^Math.E^i + x + i * 255 ),
/*33*/	(j, i, x) => Math.floor( Math.min(Math.sin(x*i) * 255, x*j*i) * Math.sin(x) + j + i * 255 ),
/*34*/	(j, i, x) => Math.floor( Math.atan2(Math.sin(x*i), x*j*i) * Math.tan(x) + j + i * 255 ),
/*35*/	(j, i, x) => Math.floor( (Math.sin(Math.PI ^ (i^2 - Math.sqrt(x^(i*j)))) * 255 > 127 ? 255 : 0 ) ),
/*36*/	(j, i, x) => Math.floor( (Math.tan(j^i) * Math.sin(x^j))/(Math.PI ^ i) * 255 ),
/*37*/	(j, i, x) => Math.floor( Math.sinh((i^j*(x*2)*Math.sin(x))/(Math.sin(x*j)*255)) * 255 ),
/*38*/	(j, i, x) => Math.floor( Math.tan((Math.sin(x*j) / Math.cos(x*i))) * 255 ),
/*39*/	(j, i, x) => Math.floor( (j)^(2)+(i-Math.sqrt(3) * j ^ (2-x)) ^ 2 ),
/*40*/	(j, i, x) => Math.floor( Math.tanh((i^x^x^j)/(x^i^Math.sin(j)^i^i^j))*255 ),
/*41*/	(j, i, x) => Math.floor( Math.sin(x^i^j^i^j^i^j)*255 ),
/*42*/	(j, i, x) => Math.floor( Math.sin(x*1/j*i/x-i^x)*255 ),
/*43*/	(j, i, x) => Math.floor( Math.abs(Math.tanh((1/(i^(x*i)^(j*x)^(i+(j+(x/100))))))*(255-x)*(10000+(x*(i-j))))%255 ),
/*44*/	(j, i, x) => Math.floor( Math.tanh((1/(x^i^j^x))*x)*255 ),
/*45*/	(j, i, x) => Math.floor( Math.tan(x-i-j)/Math.tanh(((j-(x*5000*x^x^x^x^i^j^x^x))/(i*x))/i+j)*255 ),
/*46*/	(j, i, x) => Math.floor( Math.tan(i*(j-i)%(x*i)/j)*Math.tanh(j/(i*(j-x)%(x*i)/j))*255 ),
/*47*/	(j, i, x) => Math.floor( Math.pow(x+i,Math.cosh(1/j)+Math.tanh(1/i)) % 255 ),
/*48*/	(j, i, x) => Math.floor( Math.tan(j)*Math.cos(j*i)*Math.cosh(1/i)+Math.tanh(1/x*i) * 255 ),
/*49*/	(j, i, x) => Math.floor( Math.tan(j*i)*Math.sin(j*i)*(1/(x+i-j)) * 255 ),
/*50*/	(j, i, x) => Math.floor( Math.tan(j*i)*Math.sin(j*i)*(1/x) * 255 ),
/*51*/	(j, i, x) => Math.floor( Math.tan(j*i)*(Math.sin(j*i)+x/i) * 255 ),
/*52*/	(j, i, x) => Math.floor( Math.sin((j-(x/(x%i)))*(i-(x/(x%j)))) * 255 ),
/*53*/	(j, i, x) => Math.floor( Math.sin(x-i+j)*Math.pow(j,Math.cos(i*x)) < 0.25 ? Math.pow(j,Math.cos(i*x)):Math.sin(x-i+j) ),
/*54*/	(j, i, x) => Math.floor( Math.sin(Math.sqrt(j)*Math.sin(Math.exp(x-j*i))^(j/i)) < (j^i)/(x-Math.sin(Math.exp(x-j*i)))-Math.sin(Math.exp(x-j*i)) ? 255:0 ),
/*55*/	(j, i, x) => Math.floor( Math.pow(Math.sqrt(j*i),Math.pow(j*i,Math.sin(j-i-x))) ),
/*56*/	(j, i, x) => Math.floor(Math.tan((x^2)+j*x-(i+j^x^i)) * 255),
/*57*/	(j, i, x) => (j*x)%(i^x-j),
/*58*/	(j, i, x) => ((j*x)%(i^x-j) == 0 ? 255 : 0),
/*59*/	(j, i, x) => Math.floor(((i+j)%Math.sin(x*j))*255),
/*60*/	(j, i, x) => Math.floor(Math.sin(((Math.sin(x-(j/2))>0 ? j : i) + x))* 255),
/*61*/	(j, i, x) => (Math.sin(x*j/i)>0 ? 255 : 0),
/*62*/	(j, i, x) => (j*i<Math.sin(j*0.5)*(x*2) ? 255 : 0),
/*63*/	(j, i, x) => (i^2)/(j+x) * 255,
/*64*/	(j, i, x) => Math.floor(Math.sin(Math.abs(Math.sin(i))*(j*x)) * 255),
/*65*/	(j, i, x) => Math.floor(Math.sin(Math.sin(j)*Math.tan(x*i)) * 255),
/*66*/	(j, i, x) => Math.floor(Math.sin((j^i)/(x-i)) * 255),
/*67*/	(j, i, x) => Math.floor(Math.sin(j*i*x) * 255),
/*68*/	(j, i, x) => Math.floor(Math.sin((j-i)*(x-i)) * 255),
/*69*/	(j, i, x) => Math.floor(Math.sin(x^(j*i)) * 255),
/*70*/	(j, i, x) => Math.floor(Math.sin(x-(j%(i^x))) * 255),
/*71*/	(j, i, x) => Math.floor(Math.sin(Math.sqrt(j)*x^(j/i)) * 255),
/*72*/	(j, i, x) => Math.floor(Math.sin(Math.cos(x^(j))/Math.tan(i)) * 255),
/*73*/	(j, i, x) => Math.floor(Math.sin(Math.max(j^x,i^x)*Math.sqrt(x)) * 255),
/*74*/	(j, i, x) => Math.floor(Math.sin(Math.atan(x)%Math.sin(Math.log(j)*i)) * 255),
/*75*/	(j, i, x) => Math.floor(Math.sin(Math.log(j*Math.sin(i*Math.cos(x*j)))) * 255),
/*76*/	(j, i, x) => Math.floor(Math.sin(Math.sqrt(i)*Math.log(x)*Math.sin(j*i)) * 255),
/*77*/	(j, i, x) => Math.floor(Math.sin(Math.log(x)*j*i) * 255),
/*78*/	(j, i, x) => Math.floor(Math.sin(Math.max(j,i,x)-Math.min(j,i,x)) * 255),
/*79*/	(j, i, x) => Math.floor(Math.sin(Math.min(j,i)*x*Math.max(j,i)) * 255),
/*80*/	(j, i, x) => Math.floor(Math.sin(Math.exp(x-j*i)) * 255),
/*81*/	(j, i, x) => Math.floor(Math.sin(j*i+(i*(i-j-x))) * 255),
/*82*/	(j, i, x) => Math.floor(Math.sin(Math.sin(x)+Math.sin(j)+Math.sin(i)) * 255),
/*83*/	(j, i, x) => Math.floor(Math.sin((j^(i*x))/(i^(j*x))/(x^(i*j))*(x^(i-j))) * 255),
/*84*/	(j, i, x) => Math.floor(Math.sin((j^(i*x))/(i^(j*x))/(x^(i*j))*x*i*j) * 255),
/*85*/	(j, i, x) => Math.floor(Math.sin(j+Math.sin(i)*x) * 255),
/*86*/	(j, i, x) => Math.floor(Math.sin((j^2/x)+(j*i*x)+(i^2/x)) * 255),
/*87*/	(j, i, x) => Math.floor(Math.sin(j-x-(i*x^j)) * 255),
/*88*/	(j, i, x) => Math.floor(Math.sin(x^-(j-i)) * 255),
/*89*/	(x, y, n) => Math.floor((x-y|n)&(y+x|n)),
/*90*/	(x, y, n) => Math.floor(Math.sin((x-y|n)&(y+x|n))*255),
/*91*/	(x, y, n) => Math.floor(Math.tan((x-y&n)+(y+x&n))*255),
/*92*/	(x, y, n) => Math.floor(Math.cos((x&y+n)%(y+x&n))*255),
/*93*/	(x, y, n) => Math.floor(((x&y+n)%(y+x&n)))
]