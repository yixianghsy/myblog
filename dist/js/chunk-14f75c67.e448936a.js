(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14f75c67"],{"90ab":function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"content"},[t("el-form",{ref:"form",attrs:{model:a.form,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"昵称"}},[t("el-input",{staticClass:"nickname",model:{value:a.form.nickname,callback:function(e){a.$set(a.form,"nickname",e)},expression:"form.nickname"}})],1),t("el-form-item",{attrs:{label:"头像"}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://127.0.0.1:3000/api/user/upload","show-file-list":!1,"on-success":a.handleAvatarSuccess,"before-upload":a.beforeAvatarUpload,name:"head_img"}},[t("img",{staticClass:"avatar",attrs:{src:null!=a.imageUrl?a.imageUrl:a.imgDefault}})]),t("p",{staticClass:"tips"},[a._v("tips:请上传2M以内JPG/PNG格式的图片，比例最好1:1")])],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:a.save}},[a._v("保存")]),t("el-button",{on:{click:a.signOut}},[a._v("退出登录")])],1)],1)],1)])},i=[],s=t("cf05"),o=t.n(s),r=t("a78e"),c=t.n(r),l={data:function(){return{form:{nickname:this.nickname},imageUrl:null,imgDefault:o.a}},methods:{save:function(){var a=this;this.$axios.post("/api/user/updateUser",{nickname:this.form.nickname,head_img:this.imageUrl}).then((function(e){console.log(e),0===e.data.code&&(a.$message({message:"更新成功",type:"success"}),setTimeout((function(){location.reload()}),1500))})).catch((function(a){console.log(a)}))},handleAvatarSuccess:function(a){this.imageUrl=a.data},beforeAvatarUpload:function(a){var e="image/jpeg"===a.type,t=a.size/1024/1024<2;return e||this.$message.error("上传头像图片只能是 JPG 格式!"),t||this.$message.error("上传头像图片大小不能超过 2MB!"),e&&t},getUserInfo:function(){var a=this;this.$axios.get("/api/user/info").then((function(e){var t=e.data;0===t.code&&(a.form.nickname=t.data.nickname,""===t.data.head_img||null===t.data.head_img?a.imageUrl=null:a.imageUrl=t.data.head_img)})).catch((function(a){console.log(a)}))},signOut:function(){c.a.remove("token"),this.$store.commit("setToken",""),this.$store.commit("changIsSignIn",0),this.$router.push({name:"home"})}},created:function(){this.getUserInfo()}},m=l,u=(t("b784"),t("2877")),f=Object(u["a"])(m,n,i,!1,null,"05742532",null);e["default"]=f.exports},b784:function(a,e,t){"use strict";var n=t("ba3d"),i=t.n(n);i.a},ba3d:function(a,e,t){},cf05:function(a,e,t){a.exports=t.p+"img/logo.82b9c7a5.png"}}]);
//# sourceMappingURL=chunk-14f75c67.e448936a.js.map