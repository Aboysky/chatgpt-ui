import{_ as e,p as t,q as a,a1 as r}from"./framework-5866ffd3.js";const d={},n=r(`<h1 id="configuration-reference" tabindex="-1"><a class="header-anchor" href="#configuration-reference" aria-hidden="true">#</a> Configuration Reference</h1><h2 id="database" tabindex="-1"><a class="header-anchor" href="#database" aria-hidden="true">#</a> Database</h2><p>By default, the backend uses the built-in Sqlite to store data. If an external database is not connected, the data will be lost after the container is destroyed.</p><p>The <code>chatgpt-ui-wsgi-server</code> image provides the environment variable <code>DB_URL</code> to configure the connection to an external database. The following table shows the link format of the <code>DB_URL</code>.</p><table><thead><tr><th>DB</th><th>LINK</th></tr></thead><tbody><tr><td>PostgreSQL</td><td>postgres://USER:PASSWORD@HOST:PORT/DATABASE_NAME</td></tr><tr><td>MySQL</td><td>mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME</td></tr><tr><td>SQLite</td><td>sqlite:///PATH</td></tr></tbody></table><p>For example, if I am using PostgreSQL, the configuration is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>backend-wsgi-server:
    image: wongsaang/chatgpt-ui-wsgi-server:latest
    environment:
      - DB_URL=postgres://postgres:postgrespw@localhost:49153/chatgpt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="email-verification" tabindex="-1"><a class="header-anchor" href="#email-verification" aria-hidden="true">#</a> Email verification</h2><p>If you open the user registration feature and need to send email activation links to users, you need to configure the following environment variables in the <code>wsgi-server</code> service:</p><table><thead><tr><th>Parameters</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td>ACCOUNT_EMAIL_VERIFICATION</td><td>E-mail authentication method, optional value: none, optional, mandatory</td><td>optional</td></tr><tr><td>EMAIL_HOST</td><td>SMTP server address</td><td>smtp.mailgun.org</td></tr><tr><td>EMAIL_PORT</td><td>SMTP server port</td><td>587</td></tr><tr><td>EMAIL_HOST_USER</td><td>User name</td><td>-</td></tr><tr><td>EMAIL_HOST_PASSWORD</td><td>Password</td><td>-</td></tr><tr><td>EMAIL_USE_TLS</td><td>Whether to encrypt</td><td>True</td></tr><tr><td>EMAIL_FROM</td><td>From email</td><td>webmaster@localhost</td></tr></tbody></table><h2 id="api-proxy" tabindex="-1"><a class="header-anchor" href="#api-proxy" aria-hidden="true">#</a> API Proxy</h2><p>If you are unable to request the OpenAI API address due to network restrictions, you can configure a proxy in the <code>wsgi-server</code> service. You will need to search for how to set up a proxy server on your own.</p><p>For example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>backend-wsgi-server:
    image: wongsaang/chatgpt-ui-wsgi-server:latest
    environment:
      - OPENAI_API_PROXY=https://openai.proxy.com/v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="backend-csrf-whitelist" tabindex="-1"><a class="header-anchor" href="#backend-csrf-whitelist" aria-hidden="true">#</a> Backend CSRF whitelist</h2><p>If you encounter <code>CSRF verification failed</code> while accessing the management background, your <code>APP_DOMAIN</code> may not be configured correctly. Under the <code>wsgi-server</code> service, there is an environment variable <code>wsgi-server</code>. Its value should be the address and port of <code>backend-web-server</code>, default: <code>localhost:9000</code>.</p><p>Suppose I have resolved the domain name <code>chagpt.com</code> to the server, and my <code>backend-web-server</code> service is bound to port 9000. The correct configuration is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>backend-wsgi-server:
    image: wongsaang/chatgpt-ui-wsgi-server:latest
    environment:
      - APP_DOMAIN=chagpt.com:9000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="client-configuration" tabindex="-1"><a class="header-anchor" href="#client-configuration" aria-hidden="true">#</a> Client Configuration</h2><table><thead><tr><th>Parameter</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>SERVER_DOMAIN</td><td>Server Address</td><td>http://backend-web-server</td></tr><tr><td>DEFAULT_LOCALE</td><td>Default Language</td><td>en</td></tr><tr><td>NUXT_PUBLIC_APP_NAME</td><td>Application Name</td><td>ChatGPT UI</td></tr><tr><td>NUXT_PUBLIC_TYPEWRITER</td><td>Enable Typewriter Effect [true/false]</td><td>true</td></tr><tr><td>NUXT_PUBLIC_TYPEWRITER_DELAY</td><td>Typewriter Effect Delay in milliseconds</td><td>50</td></tr></tbody></table><h2 id="user-registration-control" tabindex="-1"><a class="header-anchor" href="#user-registration-control" aria-hidden="true">#</a> User Registration Control</h2><p>After deployment, there is an <code>open_registration</code> setting under <code>Chat-&gt;Settings</code> in the admin panel to control whether user registration is allowed. The default value is <code>True</code> (allowing user registration). If not needed, please change it to <code>False</code>.</p><h2 id="web-search-function-control" tabindex="-1"><a class="header-anchor" href="#web-search-function-control" aria-hidden="true">#</a> Web Search Function Control</h2><p>This feature is disabled by default. You can enable it in the admin panel under <code>Chat-&gt;Settings</code>. There is a setting called <code>open_web_search</code>, set its value to <code>True</code>.</p>`,24),i=[n];function o(s,c){return t(),a("div",null,i)}const h=e(d,[["render",o],["__file","configuration.html.vue"]]);export{h as default};
