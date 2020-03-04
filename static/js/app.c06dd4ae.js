(function(e){function t(t){for(var n,s,i=t[0],c=t[1],r=t[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&f.push(l[s][0]),l[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,r||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,i=1;i<o.length;i++){var c=o[i];0!==l[c]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},l={app:0},a=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/gegebigdata/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var r=0;r<i.length;r++)t(i[r]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("85ec"),l=o.n(n);l.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("el-container",{attrs:{direction:e.horizontal}},[o("el-header",[o("el-container",[o("h1",[e._v("大数据离线分析平台")]),o("el-menu",{attrs:{router:!0,"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[o("el-menu-item",{attrs:{index:"/cluster"}},[e._v("集群管理")]),o("el-menu-item",{attrs:{index:"/etl"}},[e._v("数据ETL")]),o("el-menu-item",{attrs:{index:"/query"}},[e._v("数据查询")]),o("el-menu-item",{attrs:{index:"/settings"}},[e._v("连接配置")])],1)],1)],1),o("el-main",[o("router-view")],1)],1)],1)},a=[],s={name:"App",components:{},data:function(){return{activeIndex:"1"}},mounted:function(){},methods:{handleSelect:function(e,t){console.log(e,t)}}},i=s,c=(o("034f"),o("2877")),r=Object(c["a"])(i,l,a,!1,null,null,null),u=r.exports,p=o("5c96"),f=o.n(p),d=(o("0fae"),o("8c4f")),h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",{attrs:{type:"flex",justify:"space-between"}},[o("div",{staticStyle:{display:"inline","font-size":"x-large"}},[e._v("ETL工程管理")]),o("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:e.addProject}},[e._v("添加")])],1),o("el-row",{attrs:{gutter:40}},e._l(e.projects,(function(t){return o("el-col",{key:t.id,attrs:{span:6}},[o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[o("span",[e._v(e._s(t.name))]),o("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(o){return e.openEdit(t.id)}}},[e._v("编辑")]),o("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(o){return e.queryTask(t.id)}}},[e._v("运行")]),o("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(o){return e.deleteTask(t.id)}}},[e._v("删除")])],1),o("div",[e._v(" "+e._s(t.desc)+" ")])])],1)})),1),o("el-dialog",{attrs:{title:"正在执行任务",visible:e.task.dialogShow,"before-close":e.handleCloseTask},on:{"update:visible":function(t){return e.$set(e.task,"dialogShow",t)}}},[o("el-row",[o("div",{style:{color:e.getStateColor()}},[e._v("任务状态:"+e._s(this.task.stateText))]),o("div",[o("el-input",{attrs:{autosize:{minRows:2,maxRows:10},readonly:!0,type:"textarea"},model:{value:e.task.log,callback:function(t){e.$set(e.task,"log",t)},expression:"task.log"}})],1)]),o("el-row",[o("el-button",{attrs:{type:"primary",loading:e.task.executing},on:{click:function(t){return e.submitTask(e.task.projectid)}}},[e._v("重新执行")]),o("el-button",{attrs:{loading:e.querying,type:"primary"},on:{click:function(t){return e.queryTask(e.task.projectid)}}},[e._v("刷新日志和状态")])],1)],1)],1)},m=[],g=(o("a15b"),o("d3b7"),o("bc3a")),v=o.n(g),y=o("4328"),b=o.n(y);function _(e,t){return new Promise((function(o,n){v.a.get(e,{params:t}).then((function(e){o(e)})).catch((function(e){n(e)}))}))}function x(e,t){return new Promise((function(o,n){v.a.get(e,{params:t}).then((function(e){var t=e.data;-1!=t.code?o(t.data):n(t.msg)})).catch((function(e){n(e)}))}))}function k(e,t,o){return new Promise((function(n,l){v.a.put(e,t,o).then((function(e){n(e)})).catch((function(e){l(e)}))}))}function w(e,t,o){return new Promise((function(n,l){v.a.delete(e,t,o).then((function(e){n(e)})).catch((function(e){l(e)}))}))}function C(e,t,o){return console.log("post:"+e),new Promise((function(n,l){v.a.post(e,b.a.stringify(t),o).then((function(e){n(e)})).catch((function(e){l(e)}))}))}function j(e,t,o){return console.log("post:"+e),new Promise((function(n,l){v.a.post(e,b.a.stringify(t),o).then((function(e){var t=e.data;-1!=t.code?n(t.data):l(t.msg)})).catch((function(e){l(e)}))}))}o("a434"),o("b680");function S(e,t){e.splice(0,e.length);for(var o=0;o<t.length;o+=1)e.push(t[o])}function $(e){return e<1024?e+"b":e<1048576?(e/1024).toFixed(2)+"k":e<1073741824?(e/1024/1024).toFixed(2)+"m":e<1099511627776?(e/1024/1024/1024).toFixed(2)+"g":void 0}var E=function(e){return j("/api/etl/submitTask",e)},O=function(e){return j("/api/etl/queryTask",e)},q={computed:{},data:function(){return{querying:!1,task:{dialogShow:!1,projectid:0,log:"暂无日志",state:"",executing:!1,stateText:""},projects:[]}},mounted:function(){console.log("mounted"),this.requestData()},methods:{getState:function(e){return"dead"==e?"已停止":"success"==e?"执行成功":"running"==e?"运行中":"未知状态:"+e},getStateColor:function(){var e=this.task.state;return"dead"==e?"#909399":"success"==e?"#67C23A":"running"==e?"#E6A23C":"未知状态:"+e},addProject:function(){var e=this;console.log("添加project"),C("/api/etl/projects/",{}).then((function(t){console.log("创建工程成功"),console.log(t),e.requestData()})).catch((function(e){console.log(e)}))},setResult:function(e){console.log("设置结果"),console.log(e),e.state.msg?(this.task.log=e.state.msg,this.task.stateText="请求查询错误"):(this.task.log=e.log.log.join("\n"),this.task.state=e.state.state,this.task.stateText=this.getState(this.task.state),"irunning"==this.task.state?this.task.executing=!0:this.task.executing=!1)},deleteTask:function(e){var t=this;w("/api/etl/projects/"+e).then((function(e){console.log("删除成功"),console.log(e),t.requestData()})).catch((function(e){console.log(e)}))},queryTask:function(e){var t=this;this.task.projectid=e,this.task.dialogShow=!0,this.querying=!0,O({id:e}).then((function(e){console.log("查询任务完成"),console.log(e),t.setResult(e)})).catch((function(e){t.task.log="查询任务失败!:"+e})).then((function(){t.querying=!1}))},submitTask:function(e){var t=this;this.task.dialogShow=!0,this.task.executing=!0,console.debug("提交任务:"+e),E({id:e}).then((function(t){console.log("提交结果:完成，正在查询结果"),console.log(t),O(e)})).catch((function(e){console.error("提交任务失败"),console.error(e),t.$alert(e,"执行任务失败")})).then((function(){t.task.executing=!1}))},handleCloseTask:function(){var e=this;this.$confirm("确认关闭?").then((function(){e.task.dialogShow=!1})).catch((function(e){console.log(e)}))},openEdit:function(e){console.log("打开编辑project :"+e),console.log(this.$router.push({name:"etledit",params:{id:e}}))},requestData:function(){var e=this;_("/api/etl/projects/?format=json").then((function(t){console.log("请求所有project:"),console.log(t.data),S(e.projects,t.data),console.log(e.projects)})).catch((function(e){console.log("请求数据失败"),console.log(e)}))}}},T=q,P=Object(c["a"])(T,h,m,!1,null,null,null),U=P.exports,D=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("HDFS 文件浏览 ")]),o("el-tree",{attrs:{props:e.props,label:e.getNodeLabel,load:e.loadNode,lazy:""},on:{"node-click":e.viewfile}}),o("el-dialog",{attrs:{title:"文件信息",visible:e.showDialog},on:{"update:visible":function(t){e.showDialog=t}}},[o("div",[o("div",[e._v(" 完整路径: "),o("span",[e._v(e._s(e.filePath))])]),o("div",[e._v(" 文件大小:"),o("span",[e._v(e._s(e.FileSize(e.fileInfo.length)))])]),o("div",[e._v(" group:"),o("span",[e._v(e._s(e.fileInfo.group))])]),o("div",[e._v(" owener:"),o("span",[e._v(e._s(e.fileInfo.owner))])]),o("div",[e._v(" 权限:"),o("span",[e._v(e._s(e.fileInfo.permission))])])]),"DIRECTORY"==e.fileInfo.type?o("el-row",[o("el-input",{attrs:{placeholder:"新文件夹路径"},model:{value:e.newdir.dirpath,callback:function(t){e.$set(e.newdir,"dirpath",t)},expression:"newdir.dirpath"}}),e._v(" "),o("el-button",{attrs:{loading:e.newdir.loading},on:{click:e.doNewDir}},[e._v("创建文件夹")])],1):e._e(),o("el-row",[o("el-button",{attrs:{loading:e.deleteloading,type:"danger"},on:{click:e.deletedir}},[e._v("删除文件")])],1),"FILE"==e.fileInfo.type?o("el-row",[o("div")]):e._e()],1)],1)},F=[],I=function(e){return x("/api/cluster/newdir",e)},N=function(e){return x("/api/cluster/deletedir",e)},J=function(e){return x("/api/cluster/list_status",e)},L={computed:{},methods:{FileSize:function(e){return $(e)},refresh:function(){console.log("刷新文件列表 "),this.node_root.childNodes=[],this.loadNode(this.node_root,this.resolve_root)},deletedir:function(){var e=this;this.deleteloading=!0,console.log("删除文件"+this.filePath),N({path:this.filePath}).then((function(t){e.$message({message:"删除成功",type:"success"}),e.refresh(),console.log(t)})).catch((function(t){e.$message({message:"删除失败",type:"error"}),console.error(t)})).then((function(){e.deleteloading=!1}))},doNewDir:function(){var e=this;this.newdir.loading=!0,console.log("new dir..."+this.newdir.dirpath),I({path:this.newdir.dirpath}).then((function(t){e.$message({message:"创建文件夹成功",type:"success"}),e.refresh(),console.log(t)})).catch((function(t){e.$message({message:"创建文件夹失败",type:"error"}),console.log("创建文件失败"),console.log(t)})).then((function(){e.newdir.loading=!1}))},viewfile:function(e,t){var o=this.getPath(t);console.log("viewfile ... ab:"+o),this.filePath=o,console.log(e),console.log(t),this.showDialog=!0,this.fileInfo=e,this.newdir.dirpath=this.filePath},getPath:function(e){var t=[],o=e;while("/"!=o.data.pathSuffix)t.push(o.data.pathSuffix),o=o.parent;return console.log(t),t.reverse(),console.log(t),"/"+t.join("/")},getNodeLabel:function(e){return console.log("get label:.."+e.pathSuffix),e.pathSuffix},loadNode:function(e,t){var o=this;if(0==e.level)return this.node_root=e,this.resolve_root=t,t([{pathSuffix:"/",type:"DIRECTORY"}]);var n=this.getPath(e);console.log(n),J({path:n}).then((function(e){var o=e.status;console.log(o),t(o)})).catch((function(e){console.log(e),o.$alert(e,"加载文件列表失败"),o.$message({message:"加载HDFS文件列表失败",type:"error"}),t([])})),console.log("加载node"),console.log(e)}},data:function(){return{node_root:{},resolve_root:{},newdir:{dirpath:"",loading:!1},deleteloading:!1,showDialog:!1,filePath:"",fileInfo:{type:"",accessTime:"",blockSize:"",group:"",supergroup:"",owner:"",length:"",modificationTime:"",permission:"",replication:""},props:{label:"pathSuffix",isLeaf:function(e){return console.log("isfile"),"DIRECTORY"!=e["type"]}},files:[]}}},R=L,z=Object(c["a"])(R,D,F,!1,null,null,null),H=z.exports,A=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",[o("el-input",{attrs:{placeholder:"数据库名称"},model:{value:e.database,callback:function(t){e.database=t},expression:"database"}})],1),o("el-row",[o("h1",[e._v("Hive 查询 ")]),o("el-input",{attrs:{type:"textarea",placeholder:"输入Hive SQL"},model:{value:e.sql,callback:function(t){e.sql=t},expression:"sql"}})],1),o("el-row",[o("el-button",{attrs:{type:"primary",loading:e.execute.isExecuting},on:{click:e.dohivesql}},[e._v("运行")])],1),o("h1",[e._v("结果展示")]),o("div",[e._v("共 "+e._s(e.result.data.length)+" 行")]),o("el-row"),o("el-table",{attrs:{data:e.result.data}},e._l(e.result.columns,(function(e,t){return o("el-table-column",{key:"c"+t,attrs:{label:e,prop:"c"+t}})})),1)],1)},B=[],M=(o("4160"),o("159b"),{methods:{dohivesql:function(){this.queryHiveSql(this.database,this.sql,"json")},queryHiveSql:function(e,t,o){var n=this;console.log(t),this.execute.isExecuting=!0,C("/api/query/hivesql",{sql:t,format:o,database:e}).then((function(e){console.log("请求查询数据"),console.log(e);var t=e.data;n.result.columns=t.columns,t.data.forEach((function(e){var o={};t.columns.forEach((function(t,n){o["c"+n]=e[n]})),n.result.data.push(o)})),console.log(n.result),n.execute.isExecuting=!1})).catch((function(){n.execute.isExecuting=!1}))}},data:function(){return{execute:{isExecuting:!1},result:{columns:[],data:[]},sql:"",database:""}}}),G=M,Y=Object(c["a"])(G,A,B,!1,null,null,null),Q=Y.exports,K=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("连接配置")]),o("el-button",{attrs:{type:"primary"},on:{click:e.saveSetting}},[e._v(" 保存")]),o("el-row",[o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[o("span",[e._v("ETL设置")])]),e._v(" Apache Livy 地址 "),o("el-input",{attrs:{placeholder:"livy地址"},model:{value:e.config.livyUrl,callback:function(t){e.$set(e.config,"livyUrl",t)},expression:"config.livyUrl"}}),e._v(" ETL Spark程序路径"),o("el-input",{attrs:{placeholder:"Jar地址"},model:{value:e.config.coreJar,callback:function(t){e.$set(e.config,"coreJar",t)},expression:"config.coreJar"}})],1),o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[o("span",[e._v("集群管理配置")])]),o("el-row",[e._v(" HDFS地址: "),o("el-input",{attrs:{placeholder:"地址"},model:{value:e.config.hdfsUrl,callback:function(t){e.$set(e.config,"hdfsUrl",t)},expression:"config.hdfsUrl"}})],1)],1),o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[o("span",[e._v("数据查询")])]),o("el-row",[e._v(" Hive Server2 地址: "),o("el-input",{attrs:{placeholder:"地址"},model:{value:e.config.hiveServer2Url,callback:function(t){e.$set(e.config,"hiveServer2Url",t)},expression:"config.hiveServer2Url"}})],1)],1),o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[o("span",[e._v("项目地址")])]),o("el-row",[e._v(" Gitee: "),o("el-link",{attrs:{type:"primary",href:"https://gitee.com/FormatFa/gegeBigdataUI"}},[e._v("https://gitee.com/FormatFa/gegeBigdataUI")])],1),o("el-row",[e._v(" Github: "),o("el-link",{attrs:{type:"primary",href:"https://github.com/FormatFa/gegeBigdataUI"}},[e._v("https://gitee.com/FormatFa/gegeBigdataUI")])],1)],1)],1)],1)},V=[],W={mounted:function(){this.requestData()},methods:{saveSetting:function(){var e=this;j("/api/user/setSetting",{settings:JSON.stringify(this.config)}).then((function(t){e.$message({message:"保存成功",type:"success"}),console.log(t)})).catch((function(t){e.$message({message:t,type:"error"})}))},requestData:function(){var e=this;_("/api/user/getSetting").then((function(t){console.log("请求设置成功"),console.log(t);var o=t.data;e.config.livyUrl=o.livyUrl,e.config.hdfsUrl=o.hdfsUrl,e.config.coreJar=o.coreJar,e.config.hiveServer2Url=o.hiveServer2Url})).catch((function(e){console.log(e)}))}},data:function(){return{config:{livyUrl:"",hdfsUrl:"",hiveServer2Url:"",coreJar:""}}}},X=W,Z=Object(c["a"])(X,K,V,!1,null,null,null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[o("el-row",[o("div",{staticClass:"head1",staticStyle:{display:"inline"}},[e._v(" 正在编辑ETL 工程("+e._s(e.$route.params.id)+") : "),o("span",{class:{change:e.isChange}},[e._v(" "+e._s(e.getName))])])]),o("el-row",[o("el-input",{attrs:{placeholder:"工程名字"},model:{value:e.project.name,callback:function(t){e.$set(e.project,"name",t)},expression:"project.name"}}),o("el-input",{attrs:{type:"textarea",placeholder:"工程描述"},model:{value:e.project.desc,callback:function(t){e.$set(e.project,"desc",t)},expression:"project.desc"}})],1),o("el-row",{attrs:{type:"flex",justify:"end"}},[o("el-col",{attrs:{span:40}},[o("el-button",{attrs:{type:"success"},on:{click:function(t){return e.saveChange()}}},[e._v("保存")])],1)],1),o("el-row",{attrs:{type:"flex",justify:"center"}},[o("el-col",{attrs:{span:18}},e._l(e.comps,(function(t,n){return o("el-card",{key:n,staticClass:"component"},[o("div",{attrs:{slot:"header"},slot:"header"},[o("span",{style:{color:e.getCompColor(e.getCompType(t.compid).type)}},[e._v("组件 "+e._s(n))]),e._v(" "),o("span",[e._v(e._s(e.getCompType(t.compid).label))]),o("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){return e.moveComponent(n,n-1)}}},[e._v("上移")]),o("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){return e.moveComponent(n,n+1)}}},[e._v("下移")]),o("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){return e.deleteComponent(n)}}},[e._v("删除组件")])],1),o(t.compid,{ref:"comp"+n,refInFor:!0,tag:"component",attrs:{conf:t.conf}})],1)})),1)],1),o("el-card",[o("el-cascader",{ref:"addComp",attrs:{options:e.newcomp.options},model:{value:e.newcomp.compid,callback:function(t){e.$set(e.newcomp,"compid",t)},expression:"newcomp.compid"}}),o("el-button",{on:{click:function(t){return e.addComp()}}},[e._v("添加")])],1)],1)},oe=[],ne=(o("b0c0"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._v(" 数据源 "),o("el-input",{attrs:{placeholder:"输入数据源路径"},model:{value:e.path,callback:function(t){e.path=t},expression:"path"}}),o("el-input",{attrs:{placeholder:"分隔符"},model:{value:e.separator,callback:function(t){e.separator=t},expression:"separator"}})],1)}),le=[],ae={props:{data:Object,schema:Object,conf:Object,name:String},mounted:function(){this.setConf()},methods:{setConf:function(){if(void 0!=this.conf){for(var e in this.myconf)this.myconf[e]=this.conf[e];console.log("自定设置组件conf")}else console.error("base component 没有检查到conf配置，跳过配置")},getConf:function(){console.warn(this.name+"组件没有实现getConf方法，这个提示在baseComponent.js中");var e={};for(var t in this.myconf)e[t]=this.myconf[t];return e}}},se=ae,ie={mixins:[se],name:"source-csv",mounted:function(){this.path=this.conf.path,this.separator=this.conf.separator},data:function(){return{separator:",",path:""}},methods:{getConf:function(){return{separator:this.separator,path:this.path}}}},ce=ie,re=Object(c["a"])(ce,ne,le,!1,null,null,null),ue=re.exports,pe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",[o("el-select",{attrs:{placeholder:"添加选择要的字段"},model:{value:e.col,callback:function(t){e.col=t},expression:"col"}},e._l(e.availableColumns,(function(e){return o("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),o("el-input",{attrs:{placeholder:"添加字段，逗号分割，回车输入"},on:{change:function(t){return e.changeCol()}},model:{value:e.inputCol,callback:function(t){e.inputCol=t},expression:"inputCol"}}),o("el-row",e._l(e.columns,(function(t){return o("el-tag",{key:t,attrs:{closable:""},on:{close:function(o){return e.removeCol(t)}}},[e._v(" "+e._s(t)+" ")])})),1)],1)},fe=[],de=(o("c975"),o("ac1f"),o("1276"),{mixins:[se],name:"col-select",methods:{setConf:function(){console.log("col-select自定的setConf"),this.columns=this.conf["columns"].split(","),this.inputCol=this.columns.join(",")},getConf:function(){return{columns:this.columns.join(",")}},changeCol:function(){console.log("change:"+this.inputCol),this.columns=this.inputCol.split(",")},removeCol:function(e){console.log("移除列:"+e),this.columns.splice(this.columns.indexOf(e),1),this.inputCol=this.columns.join(",")}},created:function(){console.log("col-select created")},mounted:function(){},computed:{availableColumns:function(){return this.schema?this.schema.columns:[]}},data:function(){return{inputCol:"",col:"",columns:["11","22"]}}}),he=de,me=Object(c["a"])(he,pe,fe,!1,null,null,null),ge=me.exports,ve=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._v(" Sink 保存路径 "),o("el-input",{attrs:{placeholder:"数据保存路径"},model:{value:e.path,callback:function(t){e.path=t},expression:"path"}}),o("el-input",{attrs:{placeholder:"分隔符"},model:{value:e.separator,callback:function(t){e.separator=t},expression:"separator"}})],1)},ye=[],be={mixins:[se],name:"sink-csv",mounted:function(){this.path=this.conf.path,this.separator=this.conf.separator},methods:{getConf:function(){return{path:this.path,separator:this.separator}}},data:function(){return{path:"",separator:","}}},_e=be,xe=Object(c["a"])(_e,ve,ye,!1,null,null,null),ke=xe.exports,we=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",[o("el-col",[o("el-input",{attrs:{placeholder:"限制日志行数"},model:{value:e.myconf.limit,callback:function(t){e.$set(e.myconf,"limit",t)},expression:"myconf.limit"}})],1)],1)],1)},Ce=[],je={mixins:[se],name:"sink-console",data:function(){return{myconf:{limit:500}}}},Se=je,$e=Object(c["a"])(Se,we,Ce,!1,null,null,null),Ee=$e.exports,Oe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",[o("el-input",{attrs:{placeholder:"分组的字段"},model:{value:e.myconf.columns,callback:function(t){e.$set(e.myconf,"columns",t)},expression:"myconf.columns"}}),o("el-input",{attrs:{placeholder:"聚合的字段"},model:{value:e.myconf.aggColumn,callback:function(t){e.$set(e.myconf,"aggColumn",t)},expression:"myconf.aggColumn"}}),o("el-select",{attrs:{placeholder:"选择聚合操作"},model:{value:e.myconf.operation,callback:function(t){e.$set(e.myconf,"operation",t)},expression:"myconf.operation"}},e._l(e.aggOperations,(function(e){return o("el-option",{key:e.operation,attrs:{label:e.label,value:e.operation}})})),1),o("el-input",{attrs:{placeholder:"保存别名"},model:{value:e.myconf.alias,callback:function(t){e.$set(e.myconf,"alias",t)},expression:"myconf.alias"}})],1)],1)},qe=[],Te={mixins:[se],name:"col-groupby",mounted:function(){},data:function(){return{aggOperations:[{operation:"avg",label:"平均值"},{operation:"sum",label:"总和"},{operation:"count",label:"计数"}],myconf:{columns:"",aggColumn:"",operation:"",alias:""}}}},Pe=Te,Ue=Object(c["a"])(Pe,Oe,qe,!1,null,null,null),De=Ue.exports,Fe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",[o("el-col",[o("el-input",{attrs:{placeholder:"行数"},model:{value:e.myconf.num,callback:function(t){e.$set(e.myconf,"num",t)},expression:"myconf.num"}})],1)],1)],1)},Ie=[],Ne={mixins:[se],name:"row-limit",methods:{},data:function(){return{myconf:{num:10}}}},Je=Ne,Le=Object(c["a"])(Je,Fe,Ie,!1,null,null,null),Re=Le.exports,ze=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",[o("el-input",{model:{value:e.myconf.column,callback:function(t){e.$set(e.myconf,"column",t)},expression:"myconf.column"}}),o("el-select",{model:{value:e.myconf.order,callback:function(t){e.$set(e.myconf,"order",t)},expression:"myconf.order"}},[o("el-option",{attrs:{value:"asc",label:"升序"}}),o("el-option",{attrs:{value:"desc",label:"降序"}})],1)],1),o("el-row")],1)},He=[],Ae={mixins:[se],name:"orderby",methods:{},data:function(){return{myconf:{column:"",order:"desc"}}}},Be=Ae,Me=Object(c["a"])(Be,ze,He,!1,null,null,null),Ge=Me.exports,Ye=[{value:"source-csv",label:"类似csv的数据源",conf:{path:"",separator:","}}],Qe=[{value:"col-select",label:"选择某些列",conf:{columns:"字段1,字段2"}},{value:"col-groupby",label:"分组聚合计算",conf:{columns:"",aggColumn:"",operation:"",alias:""}},{value:"row-limit",label:"提取前面N行",conf:{num:10}},{value:"orderby",label:"按字段排序",conf:{column:"",order:"desc"}}],Ke=[{value:"sink-csv",label:"保存数据",conf:{path:"",separator:","}},{value:"sink-console",label:"打印到日志",conf:{limit:500}}],Ve=[{value:"sources",label:"数据读取",children:Ye},{value:"transforms",label:"转换操作",children:Qe},{value:"sinks",label:"数据输出",children:Ke}],We=Ve,Xe={components:{SourceCsv:ue,ColSelect:ge,SinkCsv:ke,ColGroupby:De,RowLimit:Re,SinkConsole:Ee,orderby:Ge},computed:{getName:function(){return this.isChange?this.project.name+"*":this.project.name}},mounted:function(){console.log("etledit mounted"),this.requestData(this.id)},methods:{getCompColor:function(e){return"sources"==e?"#67C23A":"transforms"==e?"#E6A23C":"sinks"==e?"#F56C6C":void 0},getCompType:function(e){console.log("get type:"),console.log(e),console.log(this.newcomp.options);var t={};return this.newcomp.options.forEach((function(o){o.children.forEach((function(n){console.log(n.value),n.value==e&&(t={type:o.value,label:n.label})}))})),console.log("查找失败;"+e),console.log(t),t},moveComponent:function(e,t){this.comps[t]=this.comps.splice(e,1,this.comps[t])[0],this.isChange=!0},deleteComponent:function(e){console.debug("删除组件:"+e),this.comps.splice(e,1)},saveChange:function(){var e=this;this.loading=!0,console.debug("保存修改,组件个数:"+this.comps.length),this.comps.forEach((function(t,o){console.log(e.$refs);var n=e.$refs["comp"+o][0];e.comps[o].conf=n.getConf()})),k("/api/etl/projects/"+this.id+"/",{name:this.project.name,desc:this.project.desc,data:JSON.stringify(this.comps)}).then((function(t){console.log("post 保存成功!"),console.debug(t),e.isChange=!1,e.$message({message:"保存成功!",type:"success"})})).catch((function(e){console.error("保存失败!"),console.debug(e)})).then((function(){e.loading=!1}))},generate:function(){},addComp:function(){this.isChange=!0;var e=this.$refs["addComp"].getCheckedNodes();if(0!=e.length){var t=e[0].data;console.log(t);var o={compid:t.value,conf:t.conf};console.warn("添加item:"),console.warn(o),this.comps.push(o)}else console.error("没有选择列")},requestData:function(e){var t=this;this.loading=!0,_("/api/etl/projects/"+e).then((function(e){console.log("1. 请求到编辑etl的 data:"),t.project=e.data,console.log("2. 转换请求到的字符串为obj"),console.log(e.data),""!=t.project["data"]&&(t.comps=JSON.parse(t.project["data"])),console.log(t.comps)})).then((function(){t.loading=!1}))},process:function(){}},data:function(){return console.log("get data"),{isChange:!1,loading:!1,project:{id:"",data:"",name:"",desc:""},newcomp:{compid:"",options:We},comp:"col-select",comps:[],id:this.$route.params.id}}},Ze=Xe,et=(o("b703"),Object(c["a"])(Ze,te,oe,!1,null,null,null)),tt=et.exports;n["default"].use(d["a"]);var ot=[{path:"/etl",component:U,name:"etl"},{path:"/etl/:id",component:tt,name:"etledit"},{path:"/cluster",component:H,name:"cluster"},{path:"/query",component:Q,name:"query"},{path:"/settings",component:ee,name:"settings"}],nt=new d["a"]({routes:ot}),lt=nt;n["default"].use(f.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(u)},router:lt}).$mount("#app")},"7f10":function(e,t,o){},"85ec":function(e,t,o){},b703:function(e,t,o){"use strict";var n=o("7f10"),l=o.n(n);l.a}});
//# sourceMappingURL=app.c06dd4ae.js.map