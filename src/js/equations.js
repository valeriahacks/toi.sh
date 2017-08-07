/* eslint-disable */

export default [
/*0*/	(x, y, n) => (~n ^ y | ~x) + Math.sqrt(x + n) * 255,
/*1*/	(x, y, n) => Math.floor(Math.log(x | y & n) * n ^ 20 | Math.sqrt(x * n) * y & ~n),
/*2*/	(j, i, x) => Math.floor(Math.sqrt(Math.pow(x ^ i ^ j, 1 / i) / j) * (x ^ Math.sqrt(i)) * 255),
/*3*/	(j, i, x) => Math.floor(Math.sin((Math.sin(x - j / 2) > 0 ? j : i) + x) * 255),
/*4*/	(j, i, x) => Math.floor(Math.sin(x - j % (i ^ x)) * 255),
/*5*/	(j, i, x) => Math.floor(Math.sin(Math.max(j, i, x) - Math.min(j, i, x)) * 255),
/*6*/	(j, i, x) => Math.floor(Math.sin(Math.sin(x) + Math.sin(j) + Math.sin(i)) * 255),
/*7*/	(j, i, x) => Math.floor(Math.sin(j + Math.sin(i) * x) * 255),
/*8*/	(x, y, n) => n * (y + x),
/*9*/	(x, y, n) => n * (x / y) | x ^ y,
]
