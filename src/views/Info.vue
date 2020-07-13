<template>
    <div class="info_item">
        <Alert :msg="msg" @goNull="handleunset"/>
        <h1>用户信息</h1>
        <div class="layui-input-block">
            <input style="width: 100%; padding-left: 30px;margin-bottom: 20px" v-model="inputName" type="text" placeholder="输入用户名信息" autocomplete="on" class="layui-input"/>
        </div>
        <table class="layui-table">
            <colgroup>
                <col width="150">
                <col width="200">
                <col>
            </colgroup>
            <thead>
            <tr>
                <th>姓名</th>
                <th>毕业院校</th>
                <th>学位</th>
                <th>职位</th>
                <th>手机号</th>
                <th>邮箱</th>
                <th>简介</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in filterUser(users , inputName)" :key="item.id">
                <th>{{item.name}}</th>
                <th>{{item.school}}</th>
                <th>{{item.education}}</th>
                <th>{{item.job}}</th>
                <th>{{item.phone}}</th>
                <th>{{item.email}}</th>
                <th>{{item.intro}}</th>
                <th>
                    <span  @click="edit(item.id)" class="layui-icon layui-icon-edit icon"></span>
                    <span  @click="deleteUser(item.id)" class="layui-icon layui-icon-delete icon_1"></span>
                </th>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import '../static/layui/layui'
    import Alert from '../components/Alert'

    export default {
        name: "Info",
        async created(){
            this.users = await this.allUser();
            console.log(this.users);
            if(this.$route.query.msg){
                this.msg = this.$route.query.msg;
            }
        },
        data(){
            return{
                users: [],
                msg: '',
                inputName: '',
            };
        },
        components: {
            Alert,
        },
        methods: {
            async allUser(){
                const resp = await this.$http.get("http://localhost:3000/users");
                return resp.body;
            },
            handleunset(e){
                this.msg = e;
                this.$route.query.msg = e;
            },
            async edit(id){
                this.$router.push({name:'detail', query:{id:id}});
            },
            async deleteUser(id){
                const resp = await this.$http.delete("http://localhost:3000/users/"+id);
                console.log(resp);
                if(resp.status === 200){
                    alert("删除成功");
                    this.$router.push({name:'info', query: {msg:'用户信息删除成功'}});
                }else{
                    alert("删除失败");
                    this.$router.push({name:'info', query: {msg:'用户信息删除失败'}});
                }
            },
            filterUser(Users, inputValue){
                return Users.filter(user => user.name.match(inputValue))
            }
        },
        watch: {
            '$route' (to, from) {
                this.$router.go(0);
            }
        },
    }
</script>

<style scoped>
    @import "../static/layui/css/layui.css";
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .info_item{
        width: 1300px;
        margin:20px auto 0;
    }
    .info_item h1{
        margin-left: 30px;
        margin-top: 30px;
        margin-bottom: 10px;
    }
    .info_item .icon{
        width: 20px;
        line-height: 20px;
        text-align: center;
        height: 20px;
        display: inline;
        border-radius: 3px;
        cursor: pointer;
        background-color: #1E9FFF;
        color: white;
        margin-right: 10px;
    }
    .info_item .icon_1{
        width: 20px;
        line-height: 20px;
        text-align: center;
        height: 20px;
        display: inline;
        border-radius: 3px;
        cursor: pointer;
        background-color: mediumseagreen;
        color: white;
    }
</style>
