import{_ as i,c as m,a as e,b as n,d as s,e as l,w as p,r,o}from"./app-GL2ZUgto.js";const h={};function c(d,a){const t=r("RouteLink");return o(),m("div",null,[a[5]||(a[5]=e('<h1 id="physics" tabindex="-1"><a class="header-anchor" href="#physics"><span>Physics</span></a></h1><h2 id="measurements" tabindex="-1"><a class="header-anchor" href="#measurements"><span>Measurements</span></a></h2><h3 id="time-measurement" tabindex="-1"><a class="header-anchor" href="#time-measurement"><span>Time measurement</span></a></h3><p>Robocode is turn-based, and hence time is measured in turns. With each turn, each bot receives new information and events about what is going on in the arena. And with each turn, the bot needs to send new commands to the server.</p><p>A battle has one or more rounds, for example, 10 rounds. Turns and rounds are measured are provided as a number. Rounds start at round number 1, and each round starts with turn number 1.</p><h3 id="distance-measurement" tabindex="-1"><a class="header-anchor" href="#distance-measurement"><span>Distance measurement</span></a></h3><p>Distance in Robocode is measured as <em>units</em> which are floating-point numbers using double precision.</p><h2 id="movement" tabindex="-1"><a class="header-anchor" href="#movement"><span>Movement</span></a></h2><h3 id="acceleration-a" tabindex="-1"><a class="header-anchor" href="#acceleration-a"><span>Acceleration (a)</span></a></h3><p>Bots accelerate at the rate of 1 unit per turn but decelerate at the rate of 2 units per turn. Hence, the bot is twice as fast at braking than gaining speed. Robocode determines acceleration for your bot, based on the speed or distance that is set as target for the bot.</p><h3 id="speed-velocity-v" tabindex="-1"><a class="header-anchor" href="#speed-velocity-v"><span>Speed / velocity (v)</span></a></h3><p>The speed (velocity) equation is:</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>v</mi><mo>=</mo><mi>a</mi><mo>×</mo><mi>t</mi></mrow><annotation encoding="application/x-tex">v = a × t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">v</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span></span></span></span></p><p>Hence speed = acceleration × time, or deceleration × time.</p><h4 id="maximum-speed" tabindex="-1"><a class="header-anchor" href="#maximum-speed"><span>Maximum speed</span></a></h4><p>The speed can never exceed 8 units per turn. Note that technically, velocity is a vector, but in Robocode we simply assume the direction of the vector to be the bot´s heading.</p><h3 id="distance-d" tabindex="-1"><a class="header-anchor" href="#distance-d"><span>Distance (d)</span></a></h3><p>The distance formula is:</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi><mo>=</mo><mi>v</mi><mi>t</mi></mrow><annotation encoding="application/x-tex">d = vt</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">d</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">v</span><span class="mord mathnormal">t</span></span></span></span></p><p>Hence, distance = speed × time.</p><h2 id="rotation" tabindex="-1"><a class="header-anchor" href="#rotation"><span>Rotation</span></a></h2><p>Rotation is measured in degrees in Robocode.</p><h3 id="bot-base-rotation" tabindex="-1"><a class="header-anchor" href="#bot-base-rotation"><span>Bot base rotation</span></a></h3><p>If standing still (0 units/turn), the maximum rate is 10° per turn. But the turn rate of a bot is limited by its speed.</p><p>The maximum rate of rotation is:</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>10</mn><mo>−</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi mathvariant="normal">∣</mi><mi>v</mi><mi mathvariant="normal">∣</mi></mrow><annotation encoding="application/x-tex">10 - \\frac{3}{4}|v|</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">10</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">4</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.03588em;">v</span><span class="mord">∣</span></span></span></span></p><p>This means that the faster you&#39;re moving, the slower you turn.</p><p>If moving with a max. speed of 8 units/turn, the maximum rate of rotation is only 4° per turn.</p><h3 id="gun-rotation" tabindex="-1"><a class="header-anchor" href="#gun-rotation"><span>Gun rotation</span></a></h3><p>The maximum rate of rotation is 20° per turn. This is added to the current rate of rotation of the bot.</p><h3 id="radar-rotation" tabindex="-1"><a class="header-anchor" href="#radar-rotation"><span>Radar rotation</span></a></h3><p>The maximum rate of rotation is 45° per turn. This is added to the current rate of rotation of the gun.</p><h2 id="bullets" tabindex="-1"><a class="header-anchor" href="#bullets"><span>Bullets</span></a></h2><h3 id="firepower" tabindex="-1"><a class="header-anchor" href="#firepower"><span>Firepower</span></a></h3><p>The maximum firepower is 3 and the minimum firepower is 0.1. The amount of energy used on the firepower is subtracted from the bot´s energy.</p><h3 id="bullet-damage" tabindex="-1"><a class="header-anchor" href="#bullet-damage"><span>Bullet damage</span></a></h3><p>Bullet damage depends on firepower. When a bullet hits a bot the damage is:</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>4</mn><mo>×</mo><mi>f</mi><mi>i</mi><mi>r</mi><mi>e</mi><mi>p</mi><mi>o</mi><mi>w</mi><mi>e</mi><mi>r</mi></mrow><annotation encoding="application/x-tex">4 × firepower</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">i</span><span class="mord mathnormal">re</span><span class="mord mathnormal">p</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mord mathnormal" style="margin-right:0.02778em;">er</span></span></span></span></p><p>If firepower &gt; 1, it does additional damage:</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>2</mn><mo>×</mo><mo stretchy="false">(</mo><mi>f</mi><mi>i</mi><mi>r</mi><mi>e</mi><mi>p</mi><mi>o</mi><mi>w</mi><mi>e</mi><mi>r</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">2 × (firepower - 1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">i</span><span class="mord mathnormal">re</span><span class="mord mathnormal">p</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mord mathnormal" style="margin-right:0.02778em;">er</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">)</span></span></span></span></p><h3 id="bullet-speed" tabindex="-1"><a class="header-anchor" href="#bullet-speed"><span>Bullet speed</span></a></h3><p>The bullet speed (v) is constant and depends on the firepower used for firing the gun:</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>20</mn><mo>−</mo><mn>3</mn><mo>×</mo><mi>f</mi><mi>i</mi><mi>r</mi><mi>e</mi><mi>p</mi><mi>o</mi><mi>w</mi><mi>e</mi><mi>r</mi></mrow><annotation encoding="application/x-tex">20 - 3 × firepower</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">20</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">3</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">i</span><span class="mord mathnormal">re</span><span class="mord mathnormal">p</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mord mathnormal" style="margin-right:0.02778em;">er</span></span></span></span></p><p>This means that the maximum bullet speed is 19.7 units/turn with the minimum bullet power of 0.1, and the minimum bullet speed is 11 units/turn with the maximum bullet power of 3.</p><h3 id="gun-heat" tabindex="-1"><a class="header-anchor" href="#gun-heat"><span>Gun heat</span></a></h3><p>The gun gets heated when fired. The amount of gun heat produced is:</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mrow><mn>1</mn><mo>+</mo><mi>f</mi><mi>i</mi><mi>r</mi><mi>e</mi><mi>p</mi><mi>o</mi><mi>w</mi><mi>e</mi><mi>r</mi></mrow><mn>5</mn></mfrac></mrow><annotation encoding="application/x-tex">\\frac{1 + firepower}{5}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.2772em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9322em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">5</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.4461em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mbin mtight">+</span><span class="mord mathnormal mtight" style="margin-right:0.10764em;">f</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight">re</span><span class="mord mathnormal mtight">p</span><span class="mord mathnormal mtight">o</span><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mord mathnormal mtight" style="margin-right:0.02778em;">er</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></p><p>Bots cannot fire if gun heat &gt; 0. All guns start hot at the start of each round and start at 3.</p><h3 id="energy-gain" tabindex="-1"><a class="header-anchor" href="#energy-gain"><span>Energy gain</span></a></h3><p>Bots get awarded by receiving energy when one of their bullets hits another bot. The amount of energy received is:</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>3</mn><mo>×</mo><mi>f</mi><mi>i</mi><mi>r</mi><mi>e</mi><mi>p</mi><mi>o</mi><mi>w</mi><mi>e</mi><mi>r</mi></mrow><annotation encoding="application/x-tex">3 × firepower</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">3</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">i</span><span class="mord mathnormal">re</span><span class="mord mathnormal">p</span><span class="mord mathnormal">o</span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mord mathnormal" style="margin-right:0.02778em;">er</span></span></span></span></p><h2 id="collisions" tabindex="-1"><a class="header-anchor" href="#collisions"><span>Collisions</span></a></h2><p>When a bot collides with another bot or a wall, it is stopped. The exception is a bot being hit by another bot, which it is moving away from. In this case, the bot is not stopped.</p><h3 id="bot-collisions" tabindex="-1"><a class="header-anchor" href="#bot-collisions"><span>Bot collisions</span></a></h3><p>Each bot takes 0.6 damage when colliding with each other.</p><h3 id="ramming" tabindex="-1"><a class="header-anchor" href="#ramming"><span>Ramming</span></a></h3>',56)),n("p",null,[a[1]||(a[1]=s("If a bot is hitting another bot by moving forward, this counts as ")),a[2]||(a[2]=n("em",null,"ramming",-1)),a[3]||(a[3]=s(", meaning that the bot is deliberately trying to hit the other bot. Both bots take damage, but a ramming bot will get a ramming kill bonus. (see more under ")),l(t,{to:"/articles/scoring.html"},{default:p(()=>a[0]||(a[0]=[s("Scoring")])),_:1}),a[4]||(a[4]=s(")."))]),a[6]||(a[6]=e('<h3 id="wall-damage" tabindex="-1"><a class="header-anchor" href="#wall-damage"><span>Wall damage</span></a></h3><p>When a bot hits a wall it will take damage depending on its speed (v):</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mrow><mi mathvariant="normal">∣</mi><mi>v</mi><mi mathvariant="normal">∣</mi></mrow><mn>2</mn></mfrac><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">\\frac{|v|}{2} - 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.355em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">∣</span><span class="mord mathnormal mtight" style="margin-right:0.03588em;">v</span><span class="mord mtight">∣</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></p><p>Hence, the higher speed the more damage.</p><p>Note that if the damage is negative, it is reduced to zero.</p>',5))])}const u=i(h,[["render",c],["__file","physics.html.vue"]]),b=JSON.parse('{"path":"/articles/physics.html","title":"Physics","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Measurements","slug":"measurements","link":"#measurements","children":[{"level":3,"title":"Time measurement","slug":"time-measurement","link":"#time-measurement","children":[]},{"level":3,"title":"Distance measurement","slug":"distance-measurement","link":"#distance-measurement","children":[]}]},{"level":2,"title":"Movement","slug":"movement","link":"#movement","children":[{"level":3,"title":"Acceleration (a)","slug":"acceleration-a","link":"#acceleration-a","children":[]},{"level":3,"title":"Speed / velocity (v)","slug":"speed-velocity-v","link":"#speed-velocity-v","children":[]},{"level":3,"title":"Distance (d)","slug":"distance-d","link":"#distance-d","children":[]}]},{"level":2,"title":"Rotation","slug":"rotation","link":"#rotation","children":[{"level":3,"title":"Bot base rotation","slug":"bot-base-rotation","link":"#bot-base-rotation","children":[]},{"level":3,"title":"Gun rotation","slug":"gun-rotation","link":"#gun-rotation","children":[]},{"level":3,"title":"Radar rotation","slug":"radar-rotation","link":"#radar-rotation","children":[]}]},{"level":2,"title":"Bullets","slug":"bullets","link":"#bullets","children":[{"level":3,"title":"Firepower","slug":"firepower","link":"#firepower","children":[]},{"level":3,"title":"Bullet damage","slug":"bullet-damage","link":"#bullet-damage","children":[]},{"level":3,"title":"Bullet speed","slug":"bullet-speed","link":"#bullet-speed","children":[]},{"level":3,"title":"Gun heat","slug":"gun-heat","link":"#gun-heat","children":[]},{"level":3,"title":"Energy gain","slug":"energy-gain","link":"#energy-gain","children":[]}]},{"level":2,"title":"Collisions","slug":"collisions","link":"#collisions","children":[{"level":3,"title":"Bot collisions","slug":"bot-collisions","link":"#bot-collisions","children":[]},{"level":3,"title":"Ramming","slug":"ramming","link":"#ramming","children":[]},{"level":3,"title":"Wall damage","slug":"wall-damage","link":"#wall-damage","children":[]}]}],"git":{"updatedTime":1721032400000},"filePathRelative":"articles/physics.md"}');export{u as comp,b as data};