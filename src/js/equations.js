/* eslint-disable */

export default [
  /*0*/	function(t,e,n){return(~n^e|~t)+255*Math.sqrt(t+n)},
  /*1*/	function(t,e,n){return Math.floor(Math.log(t|e&n)*n^20|Math.sqrt(t*n)*e&~n)},
  /*2*/	function(t,e,n){return Math.floor(Math.sqrt(Math.pow(n^e^t,1/e)/t)*(n^Math.sqrt(e))*255)},
  /*3*/	function(t,e,n){return Math.floor(255*Math.sin((Math.sin(n-t/2)>0?t:e)+n))},
  /*4*/	function(t,e,n){return Math.floor(255*Math.sin(n-t%(e^n)))},
  /*5*/	function(t,e,n){return Math.floor(255*Math.sin(Math.max(t,e,n)-Math.min(t,e,n)))},
  /*6*/	function(t,e,n){return Math.floor(255*Math.sin(Math.sin(n)+Math.sin(t)+Math.sin(e)))},
  /*7*/	function(t,e,n){return Math.floor(255*Math.sin(t+Math.sin(e)*n))},
  /*8*/	function(t,e,n){return n*(e+t)},
  /*9*/	function(t,e,n){return n*(t/e)|t^e},
  /*10*/  function(x, y, n){return Math.sin(n/50)*x*y},
  /*11*/	function(x, y, n){return Math.log10(Math.log(n))*n*x},
  /*12*/	function(x, y, n){return x|(y*n)}
]
