"use strict";(self["webpackChunkxytj"]=self["webpackChunkxytj"]||[]).push([[843],{843:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=function(){var e=this,t=e._self._c;return t("div",[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),t("el-breadcrumb-item",[e._v("账户管理")]),t("el-breadcrumb-item",[e._v("管理员管理")])],1),t("el-card",[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:8,offset:0}},[t("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.getList},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getList},slot:"append"})],1)],1),t("el-col",{attrs:{span:4,offset:0}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加商品")])],1)],1),t("el-table",{attrs:{data:e.list,stripe:"",border:"","header-cell-style":{textAlign:"center"},"cell-style":{"text-align":"center"}}},[t("el-table-column",{attrs:{type:"index"}}),t("el-table-column",{attrs:{prop:"name",label:"名称"}}),t("el-table-column",{attrs:{prop:"price",label:"价格(元)"}}),t("el-table-column",{attrs:{prop:"carbonIntegral",label:"所需碳积分"}}),t("el-table-column",{attrs:{prop:"description",label:"描述"}}),t("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-switch",{attrs:{"active-text":"启用"},on:{change:function(t){return e.stateChanged(a.row)}},model:{value:a.row.status,callback:function(t){e.$set(a.row,"status",t)},expression:"scope.row.status"}})]}}])}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.editInfo(a.row)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.deleteCate}},[e._v("删除")])]}}])})],1),t("el-pagination",{attrs:{"current-page":e.queryInfo.page,"page-sizes":[5,10,15],"page-size":e.queryInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),t("el-drawer",{ref:"addDialogRef",attrs:{title:"填写商品信息","before-close":e.handleClose,visible:e.addDialogVisible,direction:"rtl",size:"40%"},on:{"update:visible":function(t){e.addDialogVisible=t}}},[t("el-card",[t("div",{staticClass:"demo-drawer__content"},[t("el-steps",{attrs:{active:e.activeIndex-"0","finish-status":"success","align-center":""}},[t("el-step",{attrs:{title:"基本信息"}}),t("el-step",{attrs:{title:"商品图片"}}),t("el-step",{attrs:{title:"商品描述"}}),t("el-step",{attrs:{title:"完成"}})],1),t("el-form",{ref:"addFormRef",attrs:{rules:e.addFormRules,model:e.addForm,"label-width":"100px","label-position":"top",id:"addForm"}},[t("el-tabs",{attrs:{"tab-position":"left","before-leave":e.beforeTabLeave},model:{value:e.activeIndex,callback:function(t){e.activeIndex=t},expression:"activeIndex"}},[t("el-tab-pane",{attrs:{label:"基本信息",name:"0"}},[t("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[t("el-input",{model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),t("el-form-item",{attrs:{label:"商品价格(元)",prop:"price"}},[t("el-input",{attrs:{type:"number"},model:{value:e.addForm.price,callback:function(t){e.$set(e.addForm,"price",t)},expression:"addForm.price"}})],1),t("el-form-item",{attrs:{label:"碳积分",prop:"carbonIntegral"}},[t("el-input",{attrs:{type:"number"},model:{value:e.addForm.carbonIntegral,callback:function(t){e.$set(e.addForm,"carbonIntegral",t)},expression:"addForm.carbonIntegral"}})],1)],1),t("el-tab-pane",{attrs:{label:"商品图片",name:"1"}},[t("el-upload",{attrs:{limit:1,action:this.$http.defaults.baseURL+"/common/upload","on-remove":t=>{e.addForm.image=""},"list-type":"picture","on-success":e.handleSuccess}},[t("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1),t("el-tab-pane",{attrs:{label:"商品内容",name:"2"}},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.addForm.description,expression:"addForm.description"}],attrs:{maxlength:"20",cols:"60",rows:"10",autofocus:""},domProps:{value:e.addForm.description},on:{input:function(t){t.target.composing||e.$set(e.addForm,"description",t.target.value)}}}),t("el-button",{staticClass:"btnAdd",attrs:{type:"primary"},on:{click:e.add}},[e._v("添加商品")])],1)],1)],1)],1)])],1),t("el-dialog",{attrs:{title:"修改信息",visible:e.editDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editFormClosed}},[t("el-form",{ref:"editFormRef",attrs:{"label-position":"left",model:e.editForm,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"商品名",prop:"name"}},[t("el-input",{model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),t("el-form-item",{attrs:{label:"碳积分",prop:"carbonIntegral"}},[t("el-input",{model:{value:e.editForm.carbonIntegral,callback:function(t){e.$set(e.editForm,"carbonIntegral",t)},expression:"editForm.carbonIntegral"}})],1),t("el-form-item",{attrs:{label:"价格",prop:"price"}},[t("el-input",{model:{value:e.editForm.price,callback:function(t){e.$set(e.editForm,"price",t)},expression:"editForm.price"}})],1),t("el-form-item",{attrs:{label:"商品描述",prop:"description"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.editForm.description,callback:function(t){e.$set(e.editForm,"description",t)},expression:"editForm.description"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.updateEdit}},[e._v("确 定")])],1)],1)],1)},i=[],s=a(3834),o={data(){var e=(e,t,a)=>{const r=/^\+?[1-9]\d*$/;r.test(t)&&a(),a(new Error("不能为负数或0"))};return{queryInfo:{name:"",page:1,pageSize:5},total:0,editForm:{id:"",carbonIntegral:0,description:"",image:"",name:"",price:0},cateInfo:{carbonIntegral:"",description:"",image:"",name:"",price:"",id:""},addForm:{carbonIntegral:"",description:"",image:"",name:"",price:""},list:[],addDialogVisible:!1,editDialogVisible:!1,activeIndex:"0",addFormRules:{name:[{required:!0,message:"请填写商品名称",trigger:"blur"}],carbonIntegral:[{required:!0,message:"请填写商品兑换积分",trigger:"blur"},{validator:e,trigger:"blur"}],price:[{required:!0,message:"请填写商品价格",trigger:"blur"},{validator:e,trigger:"blur"}]}}},methods:{async getList(){const e=await(0,s.Xf)(this.queryInfo);if(0===e.code)return this.$message.error("获取商品列表失败");this.list=e.data.records;for(let t of this.list)t.status=!!t.status;this.total=e.data.total},stateChanged(e){this.getCateForm(e),this.updateCateForm(e)},editInfo(e){this.editForm.id=e.id,this.editForm.name=e.name,this.editForm.price=e.price,this.editForm.image=e.image,this.editForm.description=e.description,this.editForm.carbonIntegral=e.carbonIntegral,this.editDialogVisible=!0},getCateForm(e){const{carbonIntegral:t,description:a,image:r,name:i,price:s,id:o}=e;this.cateInfo={carbonIntegral:t,description:a,image:r,name:i,price:s,id:o}},async updateCateForm(){const e=await(0,s.ci)(this.cateInfo);if(0===e.code)return this.$message.error("服务器错误，修改失败");this.$message.success("修改成功")},deleteCate(){this.$message.info("还没写")},handleClose(){this.$refs.addFormRef.resetFields(),this.addDialogVisible=!1},submitAdd(){},cancelForm(){clearTimeout(this.timer)},handleSuccess(e){this.addForm.image=e.data},beforeTabLeave(e,t){if("0"===t){let e=!1;return this.$refs.addFormRef.validate((t=>{e=t})),e}if("1"===t&&"2"===e&&""===this.addForm.image)return this.$message.error("请先上传商品图片"),!1},async add(){const e=await(0,s.O_)(this.addForm);if(0===e.code)return this.$message.error("新增失败");this.$message.success("新增商品成功"),this.addDialogVisible=!1,this.getList()},handleSizeChange(e){this.queryInfo.pageSize=e,this.getList()},async updateEditForm(){const e=await(0,s.ci)(this.editForm);if(console.log(e),0===e.code)return this.$message.error("修改失败");this.$message.success("修改成功"),this.getList()},handleCurrentChange(e){this.queryInfo.page=e,this.getList()},editFormClosed(){this.$refs.editFormRef.resetFields()},updateEdit(){this.$refs.editFormRef.validate((e=>{e&&(this.updateEditForm(),this.editDialogVisible=!1)}))}},created(){this.getList()}},l=o,n=a(5395),d=(0,n.Z)(l,r,i,!1,null,"782090a0",null),c=d.exports}}]);
//# sourceMappingURL=843.6ca5f521.js.map