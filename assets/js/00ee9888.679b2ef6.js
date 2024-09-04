"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3342],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2857:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={},l="Confluence Q&A App on Shakudo with Langchain and ChatGPT",p={unversionedId:"tutorials/confluenceapp",id:"tutorials/confluenceapp",title:"Confluence Q&A App on Shakudo with Langchain and ChatGPT",description:"Chatbot interactions have been revolutionized with advancements in AI and NLP like OpenAI's GPT and LangChain. In this post, we'll explore how to use Shakudo to simplify and enhance the process of building a Q&A app for an Internal Knowledge base from conceptualization to deployment. We chose Confluence for this tutorial because it's an optimal platform for creating internal knowledge bases. Its intuitive interface supports efficient information management, and its advanced search capabilities ensure that you find what you need without unnecessary delays.",source:"@site/docs/tutorials/confluenceapp.md",sourceDirName:"tutorials",slug:"/tutorials/confluenceapp",permalink:"/tutorials/confluenceapp",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a Flask App",permalink:"/tutorials/flaskapp"},next:{title:"Build and Deploy with Streamlit on Shakudo",permalink:"/tutorials/streamlitapp"}},u={},c=[{value:"The problem:",id:"the-problem",level:2},{value:"Solution overview:",id:"solution-overview",level:2},{value:"Setting up the environment",id:"setting-up-the-environment",level:2},{value:"ConfluenceQA initialize",id:"confluenceqa-initialize",level:3},{value:"OpenAI key setup",id:"openai-key-setup",level:3},{value:"Step 1: Creating an Embedding Store from the knowledge base:",id:"step-1-creating-an-embedding-store-from-the-knowledge-base",level:2},{value:"Extract the documents with ConfluenceLoader",id:"extract-the-documents-with-confluenceloader",level:3},{value:"Splitting Documents into Text Snippets:",id:"splitting-documents-into-text-snippets",level:3},{value:"Generating Embeddings and Adding to Chroma Store:",id:"generating-embeddings-and-adding-to-chroma-store",level:3},{value:"Step 2: Computing questions embeddings and finding relevant snippets",id:"step-2-computing-questions-embeddings-and-finding-relevant-snippets",level:2},{value:"Step 3: Prompt engineering and LLM query",id:"step-3-prompt-engineering-and-llm-query",level:2},{value:"Step 4: Streamlit app",id:"step-4-streamlit-app",level:2},{value:"Building a Streamlit App",id:"building-a-streamlit-app",level:3},{value:"Deploying with Shakudo",id:"deploying-with-shakudo",level:3},{value:"Adopting Shakudo into your workflow",id:"adopting-shakudo-into-your-workflow",level:2}],d={toc:c};function h(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"confluence-qa-app-on-shakudo-with-langchain-and-chatgpt"},"Confluence Q&A App on Shakudo with Langchain and ChatGPT"),(0,i.kt)("p",null,"Chatbot interactions have been revolutionized with advancements in AI and NLP like OpenAI's GPT and LangChain. In this post, we'll explore how to use Shakudo to simplify and enhance the process of building a Q&A app for an Internal Knowledge base from conceptualization to deployment. We chose Confluence for this tutorial because it's an optimal platform for creating internal knowledge bases. Its intuitive interface supports efficient information management, and its advanced search capabilities ensure that you find what you need without unnecessary delays."),(0,i.kt)("p",null,"Want to skip to the code? It\u2019s available on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/devsentient/examples/tree/confluence_qa_blog/LLMs/confluence_app"},"GitHub"),"."),(0,i.kt)("h2",{id:"the-problem"},"The problem:"),(0,i.kt)("p",null,"ChatGPT's human-like capability to extract information from vast data has truly transformed the field of language models. But with a 4096-token context limit, extracting details from extensive text documents is still a challenge. There are multiple ways to get around this problem."),(0,i.kt)("p",null,"Option one involves generating text snippets and sequentially prompting the large language model (LLM), refining the answer step by step. Although this method covers the text effectively, it falls short when it comes to time and cost efficiency due to its resource-intensive nature."),(0,i.kt)("p",null,"Option two involves utilizing LLMs with larger context windows, such as the ",(0,i.kt)("a",{parentName:"p",href:"https://www.anthropic.com/index/100k-context-windows"},"Claude model")," by Anthropic, offering a 100k-token window. However, it partially solves the problem as we need to ensure that the model can accurately and comprehensively extract from our extensive knowledge base."),(0,i.kt)("p",null,"Option three capitalizes on the power of embeddings and similarity search and is the one we chose for the tutorial. It maintains an embedding vector store for each text snippet, calculates question embeddings, and retrieves the nearest text snippets via a similarity search on embedding. The retrieved text snippets are used to query the LLM with by constructing a prompt to obtain an answer"),(0,i.kt)("h2",{id:"solution-overview"},"Solution overview:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"fullsys.jpeg",src:n(2434).Z,width:"824",height:"1292"})),(0,i.kt)("p",null,"Our proposed architecture operates as a pipeline that efficiently retrieves information from a knowledge base (in this case, Confluence) in response to user queries. It includes four main steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1: Knowledge base processing"))),(0,i.kt)("p",null,"This step involves transforming information from a knowledge base into a more manageable format for subsequent stages. Information is segmented into smaller text snippets and vector representations (embeddings) of these snippets are generated for quick and easy comparison and retrieval. Here, we use Langchain's ConfluenceLoader with TextSplitter and TokenSplitter to efficiently split the documents into text snippets. Then, we create embeddings using OpenAI's ada-v2 model."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2: User query processing:"))),(0,i.kt)("p",null,"When a user submits a question, it is transformed into an embedding using the same process applied to the text snippets. Langchain's RetrievalQA, in conjunction with ChromaDB, then identifies the most relevant text snippets based on their embeddings."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3: Answer generation"))),(0,i.kt)("p",null,"Relevant text snippets, together with the user's question, are used to generate a prompt. This prompt is processed by our chosen LLM to generate an appropriate response to the user's query."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4: Streamlit service and Shakudo deployment"))),(0,i.kt)("p",null,"Finally, we package everything into a Streamlit application, expose the endpoint, and deploy it on a cluster using Shakudo. This step ensures a seamless transition from development to production quickly and reliably, as Shakudo automates DevOps tasks and lets developers use Langchain, Hugging Face pipelines, and LLM models effortlessly with pre-built images."),(0,i.kt)("h2",{id:"setting-up-the-environment"},"Setting up the environment"),(0,i.kt)("p",null,"We use OpenAI's adav2 for text embeddings and OpenAI's ",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/models/gpt-3-5"},"gpt-3.5-turbo")," as our LLM. OpenAI offers a range of embedding models and LLMs. The ones that we have chosen balance efficiency and cost-effectiveness, but depending on your needs, other models might be more suitable."),(0,i.kt)("h3",{id:"confluenceqa-initialize"},"ConfluenceQA initialize"),(0,i.kt)("p",null,"This stage involves preparing the embedding model for text snippet processing and the LLM model for the final query response. Our go-to models are ada-v2 for embeddings and gpt-3.5-turbo for text generation, respectively. Learn more about embeddings from ",(0,i.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/embeddings"},"OpenAI Documentation"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"embedding = OpenAIEmbeddings()\n")),(0,i.kt)("p",null,"After that, let\u2019s initialize the LLM model to be used for the final LLM call to query with prompt:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"llm = ChatOpenAI(model_name=LLM_OPENAI_GPT35, temperature=0.)\n")),(0,i.kt)("p",null,"The 'temperature' parameter in the LLM initialization impacts the randomness of the model's responses, with higher values producing more random responses and lower values producing more deterministic ones. Here, we've set it to 0, which makes the output entirely deterministic."),(0,i.kt)("h3",{id:"openai-key-setup"},"OpenAI key setup"),(0,i.kt)("p",null,"To wrap up the environment setup, we specify the OpenAI API key, a prerequisite for LangChain's functionality. Make sure the API environment key is named OPENAI_API_KEY \u2013 it's a requirement for LangChain."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import os\nos.environ["OPENAI_API_KEY"] ="sk-**"\n')),(0,i.kt)("p",null,"For security, we store the key in a .env file, and ensure the key is correctly recognized by our application. Never print or share your keys as this can expose them to potential security threats."),(0,i.kt)("p",null,"With our environment set up, we are now ready to start building our Confluence Q&A application."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"step1.jpeg",src:n(347).Z,width:"1504",height:"398"})),(0,i.kt)("h2",{id:"step-1-creating-an-embedding-store-from-the-knowledge-base"},"Step 1: Creating an Embedding Store from the knowledge base:"),(0,i.kt)("p",null,"In this step, we will extract the documents from the Confluence knowledge base, transform these documents into text snippets, generate embeddings for these snippets, and store these embeddings in a Chroma store."),(0,i.kt)("h3",{id:"extract-the-documents-with-confluenceloader"},"Extract the documents with ConfluenceLoader"),(0,i.kt)("p",null,"ConfluenceLoader is a powerful tool that allows us to extract documents from a Confluence site using login credentials. It currently supports username/api_key and OAuth2 authentication methods. Be careful when handling these credentials, as they are sensitive information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'config = {"persist_directory":"./chroma_db/",\n          "confluence_url":"https://templates.atlassian.net/wiki/",\n          "username":None,\n          "api_key":None,\n          "space_key":"RD"\n          }\n\npersist_directory = config.get("persist_directory",None)\nconfluence_url = config.get("confluence_url",None)\nusername = config.get("username",None)\napi_key = config.get("api_key",None)\nspace_key = config.get("space_key",None)\n\n## 1. Extract the documents\nloader = ConfluenceLoader(\n    url=confluence_url,\n    username = username,\n    api_key= api_key\n)\ndocuments = loader.load(\n    space_key=space_key,\n    limit=100\n    )\n')),(0,i.kt)("h3",{id:"splitting-documents-into-text-snippets"},"Splitting Documents into Text Snippets:"),(0,i.kt)("p",null,"Next, we split these documents into smaller, manageable text snippets. We employ CharacterTextSplitter and TokenTextSplitter from LangChain for this task."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'text_splitter = CharacterTextSplitter(chunk_size=100, chunk_overlap=0)\ntexts = text_splitter.split_documents(documents)\ntext_splitter = TokenTextSplitter(chunk_size=1000, chunk_overlap=10, encoding_name="cl100k_base")  # This the encoding for text-embedding-ada-002\ntexts = text_splitter.split_documents(texts)\n')),(0,i.kt)("h3",{id:"generating-embeddings-and-adding-to-chroma-store"},"Generating Embeddings and Adding to Chroma Store:"),(0,i.kt)("p",null,"Lastly, we generate embeddings for these text snippets and store them in a Chroma database. The Chroma class handles this with the help of an embedding function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"if persist_directory and os.path.exists(persist_directory):\n    vectordb = Chroma(persist_directory=persist_directory, embedding_function=embedding)\nelse:\n    vectordb = Chroma.from_documents(documents=texts, embedding=embedding, persist_directory=persist_directory)\n")),(0,i.kt)("p",null,"We have now successfully transformed our knowledge base into a store of embedded text snippets, ready for efficient querying in the subsequent stages of our pipeline."),(0,i.kt)("p",null,"For a dynamic confluence pages, the vector store creation process can be scheduled with the help of Shakudo jobs pipeline (Link Shakudo Jobs pipeline documentation here)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"step2.jpeg",src:n(3384).Z,width:"1504",height:"709"})),(0,i.kt)("h2",{id:"step-2-computing-questions-embeddings-and-finding-relevant-snippets"},"Step 2: Computing questions embeddings and finding relevant snippets"),(0,i.kt)("p",null,"ChromaDB is an advanced indexing system that accelerates retrieval by finding and matching things that have the same meaning. This makes our process quicker and more accurate."),(0,i.kt)("p",null,'Next, we create "questions embeddings" to understand the meaning behind the questions. This is like converting the questions into a language that ChromaDB speaks fluently. Now, ChromaDB can pinpoint the most useful snippets of information. These snippets form the foundation of smart and detailed responses in our app.'),(0,i.kt)("p",null,"These steps enhance the effectiveness of our RetrievalQA chain. This ensures that our app delivers fast, accurate, and useful answers to the questions received. In the next step, we will show you how it works along with prompt engineering."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"step3.jpeg",src:n(5029).Z,width:"1110",height:"593"})),(0,i.kt)("h2",{id:"step-3-prompt-engineering-and-llm-query"},"Step 3: Prompt engineering and LLM query"),(0,i.kt)("p",null,"In this step, we construct a prompt for our LLM. A prompt is a message that sets the context and asks the question that we want the LLM to answer. To pass a custom prompt with context and question, you can define your own template as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'custom_prompt_template = """You are a Confluence chatbot answering questions. Use the following pieces of context to answer the question at the end. If you don\'t know the answer, say that you don\'t know, don\'t try to make up an answer.\n\n{context}\n\nQuestion: {question}\nHelpful Answer:"""\nCUSTOMPROMPT = PromptTemplate(\n    template=custom_prompt_template, input_variables=["context", "question"]\n)\n## Inject custom prompt \nqa.combine_documents_chain.llm_chain.prompt = CUSTOMPROMPT\n\nretriever = vectordb.as_retriever(search_kwargs={"k":4}) #Top4-Snippets\nqa = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff",retriever=retriever)\n\nquestion = "How to organize content in a space?"\n\nanswer = qa.run(question)\nprint(answer)\n\n# Answer: To organize content in a space, you can create pages or blogs for different types of content. Pages can have child pages, which allows you to organize content into categories and subcategories. You can also use labels to categorize and identify content, and create a table of contents for your space using the Content Report Table Macro. Additionally, you can customize the sidebar to make it easier to navigate through your space and add a search box to find content within your space.\n')),(0,i.kt)("p",null,"In the following class, ConfluenceQA, we package all the necessary steps that include initializing the models, embedding, and\xa0 combining the retriever and answer generator into one organized module. This encapsulation improves code readability and reusability."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"\nclass ConfluenceQA:\n    def __init__(self,config:dict = {}):\n        self.config = config\n        self.embedding = None\n        self.vectordb = None\n        self.llm = None\n        self.qa = None\n        self.retriever = None     \n    ...\n# You can see the full script on Github\n")),(0,i.kt)("p",null,"Once the ConfluenceQA class is set up, you can initialize and run it as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Configuration for ConfluenceQA\nconfig = {"persist_directory":"./chroma_db/",\n          "confluence_url":"https://templates.atlassian.net/wiki/",\n          "username":None,\n          "api_key":None,\n          "space_key":"RD"}\n\n# Initialize ConfluenceQA\nconfluenceQA = ConfluenceQA(config=config)\nconfluenceQA.init_embeddings()\nconfluenceQA.init_models()\n\n# Create Vector DB \nconfluenceQA.vector_db_confluence_docs()\n\n# Set up Retrieval QA Chain\nconfluenceQA.retreival_qa_chain()\n\n# Query the model\nquestion = "How to organize content in a space?"\nconfluenceQA.answer_confluence(question)\n')),(0,i.kt)("p",null,"Remember that the above approach is a structured way to access the Confluence knowledge base and get your desired information using a combination of embeddings, retrieval, and prompt engineering. However, the success of the approach would largely depend on the quality of the knowledge base and the prompt that is used to question the LLM."),(0,i.kt)("h2",{id:"step-4-streamlit-app"},"Step 4: Streamlit app"),(0,i.kt)("p",null,"Let\u2019s wrap our solution in a Streamlit app and deploy it as a service. This will make it accessible either locally or on a cloud-based cluster."),(0,i.kt)("h3",{id:"building-a-streamlit-app"},"Building a Streamlit App"),(0,i.kt)("p",null,"To create an interactive web application around our ConfluenceQA class, we use Streamlit, a Python library that simplifies app creation. Below is the breakdown of the code:"),(0,i.kt)("p",null,"We start by importing necessary modules and initializing our ConfluenceQA instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import streamlit as st\nfrom confluence_qa import ConfluenceQA\n\nst.set_page_config(\n    page_title='Q&A Bot for Confluence Page',\n    page_icon='\u26a1',\n    layout='wide',\n    initial_sidebar_state='auto',\n)\n\nst.session_state[\"config\"] = {}\nconfluence_qa = None\n")),(0,i.kt)("p",null,"We then define a sidebar form for user inputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"with st.sidebar.form(key ='Form1'):\n    # Form fields and submit button go here\n")),(0,i.kt)("p",null,"And finally, we provide a user interface for asking questions and getting answers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"st.title(\"Confluence Q&A Demo\")\n\nquestion = st.text_input('Ask a question', \"How do I make a space public?\")\n\nif st.button('Get Answer'):\n    # Code to generate and display the answer\n")),(0,i.kt)("p",null,"This Streamlit app can be launched locally or on a cluster and allows us to interact with our Confluence Q&A system in a user-friendly manner."),(0,i.kt)("h3",{id:"deploying-with-shakudo"},"Deploying with Shakudo"),(0,i.kt)("p",null,"Finally our app is ready, and we can deploy it as a service on Shakudo. The platform makes the process of deployment easier, allowing you to quickly put your app online."),(0,i.kt)("p",null,"To deploy our app on Shakudo, we need two key files: pipeline.yaml, which describes our deployment pipeline, and run.sh, a bash script to set up and run our application. Here's what these files look like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u2018pipeline.yaml\u2019:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:  \n  name: "QA demo"\n  tasks:\n  - name: "QA app"\n    type: "bash script"\n    port: 8787\n    bash_script_path: "LLM/confluence_app/run.sh"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u2018run.sh\u2019:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'PROJECT_DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"\ncd "$PROJECT_DIR"\n\npip install -r requirements.txt\n\nexport PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION=python\nexport STREAMLIT_RUNONSSAVE=True\n\nstreamlit run app.py --server.port 8787 --browser.serverAddress localhost\n')),(0,i.kt)("p",null,"In this script:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set the project directory and navigate into it."),(0,i.kt)("li",{parentName:"ul"},"Install the necessary Python libraries from the requirements.txt file."),(0,i.kt)("li",{parentName:"ul"},"Set two environment variables to: PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION and STREAMLIT_RUNONSSAVE."),(0,i.kt)("li",{parentName:"ul"},"Runthe Streamlit app on port 8787.")),(0,i.kt)("p",null,"After you have these files ready, navigate to the service tab and click the '+' button to create a new service. Fill in the details in the service creation panel and click 'CREATE'. On the services dashboard, click on the \u2018Endpoint URL\u2019 button to access the application. Check out the Shakudo ",(0,i.kt)("a",{parentName:"p",href:"https://docs.shakudo.io/shakudo-platform-core/service"},"docs")," for a more detailed explanation."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"confluence_service",src:n(9369).Z,width:"1119",height:"491"})),(0,i.kt)("p",null,"Now, your application is live! You can browse through the user interface to see how it works."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"confluence_demo.jpeg",src:n(3646).Z,width:"1920",height:"955"})),(0,i.kt)("h2",{id:"adopting-shakudo-into-your-workflow"},"Adopting Shakudo into your workflow"),(0,i.kt)("p",null,"Shakudo is designed to facilitate the entire lifecycle of data and AI applications. Automating all stages of the development process, including the stack integrations, deployment, and the ongoing management of data-driven applications."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"shakudo_sys.jpeg",src:n(4691).Z,width:"1308",height:"677"})),(0,i.kt)("p",null,"By using Shakudo, you\u2019ll take advantage of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Integrated Environment"),": Shakudo is designed to provide compatibility across a diverse range of best-of-breed data tools. This unique feature facilitates experimentation and the creation of a data stack that's not only more reliable and performant but also cost-effective."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Continuous Integration and Deployment (CI/CD)"),": Shakudo automates the stages of application deployment with managed Kubernetes. This ensures rapid deployment and eliminates the complex task of self-managing a cluster, resulting in more reliable releases and data flows."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Services Deployment and Pipelines Orchestration"),": With Shakudo you can deploy your app as a service that shows an endpoint, be it a dashboard, a website, or an API endpoint. It also facilitates the creation and orchestration of data pipelines, reducing setup time to only a few minutes.")),(0,i.kt)("h1",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"This blog provides a comprehensive guide to developing a Confluence Q&A application utilizing the power of Shakudo, Langchain, and ChatGPT, aiming to resolve the challenge posed by ChatGPT's token limit when extracting information from extensive text documents. We used a new method leveraging embeddings and similarity search, ensuring a more efficient process of retrieving accurate information from a knowledge base."),(0,i.kt)("p",null,"Are you ready to start building more efficient data-driven applications? Check out our blog post on \u201c",(0,i.kt)("a",{parentName:"p",href:"https://www.shakudo.io/blog/how-to-easily-and-securely-integrate-llms-in-your-enterprise-data-initiatives-with-shakudo-2023"},"How to Easily and Securely Integrate LLMs for Enterprise Data Initiatives"),"\u201d. Feel free to ",(0,i.kt)("a",{parentName:"p",href:"https://www.shakudo.io/sign-up"},"reach out to our team")," to check out how you can start using Shakudo to help your business. Thank you for reading and happy coding!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"References"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This code is adapted based on the work in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/georgesung/LLM-WikipediaQA/tree/main"},"LLM-WikipediaQA"),", where the author compares FastChat-T5, Flan-T5 with ChatGPT running a Q&A on Wikipedia Articles."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jerpint/buster"},"Buster"),": Overview figure inspired from Buster\u2019s demo. Buster is a QA bot that can be used to answer from any source of documentation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.anthropic.com/index/100k-context-windows"},"Claude model"),": 100K Context Window model from Anthropic AI")))}h.isMDXComponent=!0},3646:function(e,t,n){t.Z=n.p+"assets/images/confluence_demo-60a00052b561aef9f087a0f1a45e541c.jpeg"},9369:function(e,t,n){t.Z=n.p+"assets/images/confluence_service-4ede807dc4e36837872d299b994111aa.png"},2434:function(e,t,n){t.Z=n.p+"assets/images/fullsys-35de38712bf369b30fe5c8b699a38d6a.jpeg"},4691:function(e,t,n){t.Z=n.p+"assets/images/shakudo_sys-4e8b001dd56bede31ed62f161c49c6d0.jpeg"},347:function(e,t,n){t.Z=n.p+"assets/images/step1-36d796476b16d91fd3291b679ae422c0.jpeg"},3384:function(e,t,n){t.Z=n.p+"assets/images/step2-b3d6718c5011dfaef09cad2c387bb292.jpeg"},5029:function(e,t,n){t.Z=n.p+"assets/images/step3-6a6ad005dad306104afa850e79989b43.jpeg"}}]);