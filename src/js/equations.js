/* eslint-disable */

export default [
/*0*/	(x, y, n) => Math.ceil(Math.sin(x | n) * 255) - Math.floor(Math.tan(y | n) * 127.5),
/*1*/	(x, y, n) => Math.floor(Math.sin(y) * Math.cos(x) * n * 255),
/*2*/	(x, y, n) => (~n ^ y | ~x) + Math.sqrt(x + n) * 255,
/*3*/	(x, y, n) => (~n ^ ~y & ~x) * 255,
/*4*/	(x, y, n) => Math.floor(Math.log(x | y & n) * n ^ 20 | Math.sqrt(x * n) * y & ~n),
/*5*/	(x, y, i) => (x & x ^ i | y & y) * (~i * ~2888855) ^ (2 ^ x & y * i * 255) & ~i,
/*6*/	(x, y, n) => x ^ y | (x & n) * ~y & n,
/*7*/	(x, y, n) => Math.cos(10 * n) < Math.tan(x * Math.sin(2 * y)) ? 255 : 0,
/*8*/	(j, i, x) => Math.floor((i ^ j & x | j & i) * 255),
/*9*/	(j, i, x) => Math.floor(Math.sqrt(0 ^ Math.sqrt(j ^ Math.sqrt(x ^ j)) & (x ^ i ^ Math.sin(i) * 255)) * 255) ^ x,
/*10*/	(j, i, x) => Math.floor((0 ^ (j ^ Math.sin(x ^ j)) & (x ^ i ^ Math.sqrt(i))) * 255) ^ x,
/*11*/	(j, i, x) => Math.floor((0 ^ (i ^ x ^ j) & (j ^ x)) * 255),
/*12*/	(j, i, x) => Math.floor((0 ^ i + x & j + x) * 255),
/*13*/	(j, i, x) => Math.floor(x >> i << j * 255),
/*14*/	(j, i, x) => Math.floor(Math.sin(i << x * j ^ i ^ x ^ j) * 255),
/*15*/	(j, i, x) => Math.floor(Math.floor(Math.sin(j * x) * 255) & Math.floor(i << Math.sin(x) * 255)),
/*16*/	(j, i, x) => Math.floor(j ^ Math.sin(j ^ j ^ j ^ j ^ x ^ i) * x),
/*17*/	(j, i, x) => Math.floor(x * Math.sin(x) * (x * Math.sin(x) / j ^ 2 ^ i + Math.sin(x) * j) * 2 ^ j),
/*18*/	(j, i, x) => Math.floor(Math.sqrt(Math.pow(x ^ i ^ j, 1 / i) / j) * (x ^ Math.sqrt(i)) * 255),
/*19*/	(j, i, x) => Math.floor(Math.min(Math.sin(x * i) * 255, x * j * i) * Math.sin(x) + j + i * 255),
/*20*/	(j, i, x) => Math.floor(Math.sin(Math.PI ^ (i ^ 2 - Math.sqrt(x ^ i * j))) * 255 > 127 ? 255 : 0),
/*21*/	(j, i, x) => Math.floor(Math.tan(j ^ i) * Math.sin(x ^ j) / (Math.PI ^ i) * 255),
/*22*/	(j, i, x) => Math.floor( Math.sinh((i^j*(x*2)*Math.sin(x))/(Math.sin(x*j)*255)) * 255 ),
/*23*/	(j, i, x) => Math.floor(Math.tan(Math.sin(x * j) / Math.cos(x * i)) * 255),
/*24*/	(j, i, x) => Math.floor(Math.sin(x ^ i ^ j ^ i ^ j ^ i ^ j) * 255),
/*25*/	(j, i, x) => Math.floor(Math.sin(x * 1 / j * i / x - i ^ x) * 255),
/*26*/	(j, i, x) => Math.floor( Math.tan(x-i-j)/Math.tanh(((j-(x*5000*x^x^x^x^i^j^x^x))/(i*x))/i+j)*255 ),
/*27*/	(j, i, x) => Math.floor(Math.tan(j * i) * (Math.sin(j * i) + x / i) * 255),
/*28*/	(j, i, x) => Math.floor(Math.sin(Math.sqrt(j) * Math.sin(Math.exp(x - j * i)) ^ j / i) < (j ^ i) / (x - Math.sin(Math.exp(x - j * i))) - Math.sin(Math.exp(x - j * i)) ? 255 : 0),
/*29*/	(j, i, x) => Math.floor(Math.pow(Math.sqrt(j * i), Math.pow(j * i, Math.sin(j - i - x)))),
/*30*/	(j, i, x) => j * (x + 700) % (i ^ (x + 700) - j),
/*31*/	(j, i, x) => j * x % (i ^ x - j) == 0 ? 255 : 0,
/*32*/	(j, i, x) => Math.floor((i + j) % Math.sin(x * j) * 255),
/*33*/	(j, i, x) => Math.floor(Math.sin((Math.sin(x - j / 2) > 0 ? j : i) + x) * 255),
/*34*/	(j, i, x) => Math.sin(x * j / i) > 0 ? 255 : 0,
/*35*/	(j, i, x) => j * i < Math.sin(j * 0.5) * (x * 2) ? 255 : 0,
/*36*/	(j, i, x) => Math.floor(Math.sin(j * i * x) * 255),
/*37*/	(j, i, x) => Math.floor(Math.sin((j - i) * (x - i)) * 255),
/*38*/	(j, i, x) => Math.floor(Math.sin(x - j % (i ^ x)) * 255),
/*39*/	(j, i, x) => Math.floor(Math.sin(Math.sqrt(j) * x ^ j / i) * 255),
/*40*/	(j, i, x) => Math.floor(Math.sin(Math.max(j ^ x, i ^ x) * Math.sqrt(x)) * 255),
/*41*/	(j, i, x) => Math.floor(Math.sin(Math.log(j * Math.sin(i * Math.cos(x * j)))) * 255),
/*42*/	(j, i, x) => Math.floor(Math.sin(Math.log(x) * j * i) * 255),
/*43*/	(j, i, x) => Math.floor(Math.sin(Math.max(j, i, x) - Math.min(j, i, x)) * 255),
/*44*/	(j, i, x) => Math.floor(Math.sin(j * i + i * (i - j - x)) * 255),
/*45*/	(j, i, x) => Math.floor(Math.sin(Math.sin(x) + Math.sin(j) + Math.sin(i)) * 255),
/*46*/	(j, i, x) => Math.floor(Math.sin((j ^ i * x) / (i ^ j * x) / (x ^ i * j) * (x ^ i - j)) * 255),
/*47*/	(j, i, x) => Math.floor(Math.sin(j + Math.sin(i) * x) * 255),
/*48*/	(j, i, x) => Math.floor(Math.sin(x ^ -(j - i)) * 255),
/*49*/	(x, y, n) => Math.floor(Math.sin((x - y | n) & (y + x | n)) * 255),
/*50*/	(x, y, n) => Math.floor(Math.tan((x - y & n) + (y + x & n)) * 255),
/*51*/	(x, y, n) => Math.floor(Math.cos((x & y + n) % (y + x & n)) * 255),
/*52*/	(x, y, n) => Math.floor(Math.sin(x) * y * n ^ (y | x)),
/*53*/	(x, y, n) => Math.sin(x | y | n + 100) * 255,
/*54*/	(x, y, n) => Math.sin(x + n * 5 & y - n & n + 100) * 255,
/*55*/	(x, y, n) => n * y << (((n | x) << y | n & x) >> x)
]
