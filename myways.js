<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2299.4">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'}
  </style>
</head>
<body>
<p class="p1">function FizzBuzz(sum){</p>
<p class="p1"><span class="Apple-converted-space">    </span>let outputArr=[]</p>
<p class="p1"><span class="Apple-converted-space">    </span>for(i=1;i&lt;100;i++){</p>
<p class="p1"><span class="Apple-converted-space">        </span>if(i%3==0 &amp;&amp; i%4==0)</p>
<p class="p1"><span class="Apple-converted-space">            </span>outputArr.push("FizzBuzz");</p>
<p class="p1"><span class="Apple-converted-space">        </span>else if(i%3==0)</p>
<p class="p1"><span class="Apple-converted-space">            </span>outputArr.push("Fizzz");</p>
<p class="p1"><span class="Apple-converted-space">        </span>else if(i%4==0)</p>
<p class="p1"><span class="Apple-converted-space">            </span>outputArr.push("Buzz");</p>
<p class="p1"><span class="Apple-converted-space">        </span>else</p>
<p class="p1"><span class="Apple-converted-space">            </span>outputArr.push(i);</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>console.log(...outputArr)</p>
<p class="p1">}</p>
<p class="p1">function calculateSum(number){</p>
<p class="p1"><span class="Apple-converted-space">    </span>let sum=0;</p>
<p class="p1"><span class="Apple-converted-space">    </span>while(number&gt;=0){</p>
<p class="p1"><span class="Apple-converted-space">        </span>sum+=(number%10);</p>
<p class="p1"><span class="Apple-converted-space">        </span>number=Math.floor(number/10);</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>return sum;</p>
<p class="p1">}</p>
<p class="p1">FizzBuzz(calculateSum(9398500518))</p>
</body>
</html>
