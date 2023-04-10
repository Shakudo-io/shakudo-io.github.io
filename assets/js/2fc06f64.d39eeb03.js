"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7690],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6188:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],p={sidebar_position:1},l="Create a React App",s={unversionedId:"Tutorials/buildareactapp",id:"Tutorials/buildareactapp",title:"Create a React App",description:"You can create a React application on the Shakudo Platform as a service. Follow the steps below to get started!",source:"@site/docs/Tutorials/buildareactapp.md",sourceDirName:"Tutorials",slug:"/Tutorials/buildareactapp",permalink:"/Tutorials/buildareactapp",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial",permalink:"/category/tutorial"}},c={},u=[{value:"1. Prepare your environment",id:"1-prepare-your-environment",level:2},{value:"2. Create a pipeline yaml",id:"2-create-a-pipeline-yaml",level:2},{value:"3. Edit your <code>package.json</code> to host your React app",id:"3-edit-your-packagejson-to-host-your-react-app",level:2},{value:"4. Create your React App on the dashboard",id:"4-create-your-react-app-on-the-dashboard",level:2}],d={toc:u};function h(e){var t=e.components,p=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-react-app"},"Create a React App"),(0,o.kt)("p",null,"You can create a React application on the Shakudo Platform as a service. Follow the steps below to get started!"),(0,o.kt)("h2",{id:"1-prepare-your-environment"},"1. Prepare your environment"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start a ",(0,o.kt)("a",{parentName:"li",href:"/shakudo-platform-core/sessions"},"Session")," with the NodeJs image"),(0,o.kt)("li",{parentName:"ol"},"Open your sessions and check your node version using: ",(0,o.kt)("inlineCode",{parentName:"li"},"node \u2014version")),(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("inlineCode",{parentName:"li"},"npx")," using ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install npx")),(0,o.kt)("li",{parentName:"ol"},"Create a React app using ",(0,o.kt)("inlineCode",{parentName:"li"},"npx create-react-app my-react-app"))),(0,o.kt)("h2",{id:"2-create-a-pipeline-yaml"},"2. Create a pipeline yaml"),(0,o.kt)("p",null,"Create a .yaml file to list your steps. You can start with adding the following template to ",(0,o.kt)("inlineCode",{parentName:"p"},"react_pipeline.yaml"),":  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'pipeline:\n  name: "Example pipeline"\n  tasks:\n  - ...\n')),(0,o.kt)("p",null,"Add a Bash script step by adding the following block to your YAML. The Bash script should be runnable with ",(0,o.kt)("inlineCode",{parentName:"p"},"bash [bash_script_path]"),". This will install the dependencies and start your Node server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  - name: "[another_step_name]"\n    type: "bash script"\n    bash_script_path: "[sh/file/relative/to/top/level/of/repo.sh]"\n')),(0,o.kt)("p",null,"An example bash script to start your React application is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'PROJECT_DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"\ncd "$PROJECT_DIR"\n\nyes Y | curl -sL https://deb.nodesource.com/setup_14.x | bash -\napt update\napt install nodejs\nnpm install\nnpm start\n')),(0,o.kt)("h2",{id:"3-edit-your-packagejson-to-host-your-react-app"},"3. Edit your ",(0,o.kt)("inlineCode",{parentName:"h2"},"package.json")," to host your React app"),(0,o.kt)("p",null,"When you want to host a React application on the Shakudo platform you have to specifiy the homepage of your application. This will be the root domain plus the the prefix which will host your React application. "),(0,o.kt)("p",null,"You should also set your host as 0.0.0.0 and the port as 8787 on your start script, and turn of VS Rewrite."),(0,o.kt)("p",null,"An example ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "name": "my-react-app",\n  "version": "0.1.0",\n  "private": true,\n  "homepage": "https://[CLUSTER_NAME].hyperplane.dev/[my-app]/",\n  ...\n  "scripts": {\n    "start": "HOST=0.0.0.0 PORT=8787 react-scripts start",\n    "build": "react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject"\n  },\n  ...\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ","[my-app]"," prefix should match the dashboard URL prefix when creating your service in step 4"))),(0,o.kt)("h2",{id:"4-create-your-react-app-on-the-dashboard"},"4. Create your React App on the dashboard"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("strong",{parentName:"p"},"Services")," tab on the dashboard to start your React application\n",(0,o.kt)("img",{alt:"services dashboard",src:a(5356).Z,title:"services dashboard",width:"2878",height:"1414"})),(0,o.kt)("p",null,"Set the pipeline YAML path and the endpoint for your React app. The endpoint should be the same as the one specified in previous step. Also turn off the Virtual Service Path Rewrite.\n",(0,o.kt)("img",{alt:"create a service on dashboard",src:a(3993).Z,title:"create a service on dashboard",width:"2872",height:"1400"})),(0,o.kt)("p",null,"Then click ",(0,o.kt)("strong",{parentName:"p"},"Create")," on the top right corner. You React App should appear in the services tab in the dashboard."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important notes when cloning other git repositories")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Exclude the ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," folder when committing your code to your Shakudo repository"),(0,o.kt)("li",{parentName:"ul"},"Remove the ",(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json")," to avoid mismatching packages."),(0,o.kt)("li",{parentName:"ul"},"Ensure that your bash script can start your React app when your run it on your session. ")))),(0,o.kt)("p",null,"You can use our GraphQL mutation query in the GraphQL playground to create your React App Service. Copy the GraphQL mutation created on the left handside of the service creation dialogue or simply copy the code block below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'mutation {\n    createShakudoService(\n        jobName: "my-react-app",\n        maxRetries: 2, \n        urlPrefix:  "my-app",\n        jobType: "basic",\n        pipelineYamlPath: "my-react-app/react_pipeline.yaml",\n        defaultCommands: true,\n        gitInit: true,\n        vsRewrite: false,\n        parameters: { create: [\n            ]}  \n    ) {\n        id\n        jobName\n        dashboardPrefix\n        parameters {\n            key\n            value\n        }\n        noGitInit\n        noHyperplaneCommands\n    }\n}\n')),(0,o.kt)("p",null,"Open the GraphQL playground from the dashabord and paste the code above into the lefthand side and press the play button. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Note the the ",(0,o.kt)("inlineCode",{parentName:"li"},"urlPrefix")," should match the dashboard URL prefix set in your ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," file as the homepage of your application.")))}h.isMDXComponent=!0},3993:function(e,t,a){t.Z=a.p+"assets/images/create_service_panel-315824b35b2e617ffca009a4c3982c61.png"},5356:function(e,t,a){t.Z=a.p+"assets/images/services_panel-1d01cdc03d398ff94441d3f684229a10.png"}}]);