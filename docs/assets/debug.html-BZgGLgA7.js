import{_ as e,c as t,o as a,b as n}from"./app-BB3b8NSm.js";const s={},o=n(`<h1 id="debugging" tabindex="-1"><a class="header-anchor" href="#debugging"><span>Debugging</span></a></h1><p>Here follows some information about <a href="https://en.wikipedia.org/wiki/Debugging" title="Print debugging" target="_blank" rel="noopener noreferrer">print debugging</a> your bot using print statements or a logging framework.</p><h2 id="run-your-bot-from-the-command-line" tabindex="-1"><a class="header-anchor" href="#run-your-bot-from-the-command-line"><span>Run your bot from the command line</span></a></h2><p>One easy way to debug your bot is to run it from the command line and put some print statements into your code to write out debugging information into the command line via stdin and/or stderr. With Java/JVM, you will typically use <a href="https://www.geeksforgeeks.org/system-out-println-in-java/" title="Print debugging in Java" target="_blank" rel="noopener noreferrer">System.out.println()</a>, <a href="https://www.slf4j.org/" title="Simple Logging Facade for Java (SLF4J)" target="_blank" rel="noopener noreferrer">SLF4J</a> or <a href="https://logging.apache.org/log4j/2.x/" title="Apache Log4j 2" target="_blank" rel="noopener noreferrer">Log4j</a>, and for .Net you&#39;ll typically use <a href="https://docs.microsoft.com/en-us/dotnet/api/system.console.writeline?view=net-6.0" title="Print debugging in .Net" target="_blank" rel="noopener noreferrer">Console.WriteLine()</a> or use <a href="https://docs.microsoft.com/en-us/dotnet/core/extensions/logging?tabs=command-line" target="_blank" rel="noopener noreferrer">Logging</a>.</p><p>To see how a bot is started up you can have a look at the sample bots and examine the script files. How your robot is started depends on the programming language and platform you are using. But here follows some examples of what to write in the command line or script file.</p><h4 id="java" tabindex="-1"><a class="header-anchor" href="#java"><span>Java:</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">java</span> <span class="token parameter variable">-cp</span> <span class="token punctuation">..</span>/lib/* MyFirstBot.java</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Here <code>../lib/*</code> assumes the <code>robocode-tankroyale-bot-api-x.y.z.jar</code> is located in the <code>lib</code> directory.</p><h4 id="net" tabindex="-1"><a class="header-anchor" href="#net"><span>.Net</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">dotnet run</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This assumes you have your project file in the directory where you run the <code>dotnet</code> command.</p><h2 id="supply-a-server-secret" tabindex="-1"><a class="header-anchor" href="#supply-a-server-secret"><span>Supply a server secret</span></a></h2><p>The first time the server is running a battle, it creates a random secret (key) that all bots must supply to join the battle. The GUI handles this automatically in the background when starting up bots from the GUI via the booter.</p><p>The secret protects your server against external bots trying to join without (your) permission. They will need the secret from your server to join it.</p><p>So to run your bot from the command line, you&#39;ll need to provide the secret for the server. The easiest way to do this is to set/export the <code>SERVER_SECRET</code> environment variable which the Bot API will read and send to the server ( via the bot handshake).</p><p>You&#39;ll find the generated secret for your server with the <code>server.properties</code> file in the same directory as the GUI application is run from. Copy and paste the value after the equal-sign (=) from the <code>bots-secrets</code> field and use it for defining the value of your <code>SERVER_SECRET</code> variable, e.g.:</p><h4 id="bash" tabindex="-1"><a class="header-anchor" href="#bash"><span>Bash:</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">SERVER_SECRET</span><span class="token operator">=</span>s0m3R0bOc0dEs3crEt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="windows-command-prompt" tabindex="-1"><a class="header-anchor" href="#windows-command-prompt"><span>Windows command prompt:</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token builtin class-name">set</span> <span class="token assign-left variable">SERVER_SECRET</span><span class="token operator">=</span>s0m3R0bOc0dEs3crEt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>You can put this into a script used for running your bot.</p><h2 id="how-to-join-a-new-battle" tabindex="-1"><a class="header-anchor" href="#how-to-join-a-new-battle"><span>How to join a new battle</span></a></h2><h4 id="step-1-start-server-or-new-battle" tabindex="-1"><a class="header-anchor" href="#step-1-start-server-or-new-battle"><span>Step 1: Start server or new battle</span></a></h4><p>First, you need to start a server as your bot needs to join a server. You can do this from the GUI menu by starting a server or a battle. When starting a new battle from the GUI, a server will automatically be started as well.</p><h4 id="step-2-start-your-bot-from-the-command-line" tabindex="-1"><a class="header-anchor" href="#step-2-start-your-bot-from-the-command-line"><span>Step 2: Start your bot from the command line</span></a></h4><p>Now you need to start your bot from the command line as described earlier.</p><h4 id="step-3-wait-for-your-bot-to-show-up-in-joined-bots" tabindex="-1"><a class="header-anchor" href="#step-3-wait-for-your-bot-to-show-up-in-joined-bots"><span>Step 3: Wait for your bot to show up in &#39;Joined Bots&#39;</span></a></h4><p>On the dialog for selecting bots for the battle, you should see your bot show up under the &#39;Joined Bots&#39; list. Add it to the battle and add some other opponent bot(s) as well to start the battle.</p><h4 id="step-4-observe-output-in-the-command-line" tabindex="-1"><a class="header-anchor" href="#step-4-observe-output-in-the-command-line"><span>Step 4: Observe output in the command line</span></a></h4><p>Your print or logging information should be written out to the command line. If not, make sure to put the logging information in the constructor or main method to make sure something is written out.</p>`,30),r=[o];function i(l,d){return a(),t("div",null,r)}const p=e(s,[["render",i],["__file","debug.html.vue"]]),c=JSON.parse('{"path":"/articles/debug.html","title":"Debugging","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Run your bot from the command line","slug":"run-your-bot-from-the-command-line","link":"#run-your-bot-from-the-command-line","children":[]},{"level":2,"title":"Supply a server secret","slug":"supply-a-server-secret","link":"#supply-a-server-secret","children":[]},{"level":2,"title":"How to join a new battle","slug":"how-to-join-a-new-battle","link":"#how-to-join-a-new-battle","children":[]}],"git":{"updatedTime":1692556283000},"filePathRelative":"articles/debug.md"}');export{p as comp,c as data};
