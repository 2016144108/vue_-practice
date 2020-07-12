<template>
    <div class="info_item">
        <Alert :msg="msg" @goNull="handleunset"/>
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
            <tr v-for="item in users">
                <th>{{item.name}}</th>
                <th>{{item.school}}</th>
                <th>{{item.education}}</th>
                <th>{{item.job}}</th>
                <th>{{item.phone}}</th>
                <th>{{item.email}}</th>
                <th>{{item.intro}}</th>
                <th><span  @click="edit(item.id)" class="layui-icon layui-icon-edit icon"></span></th>
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
    .info_item .icon{
        width: 20px;
        line-height: 20px;
        text-align: center;
        height: 20px;
        display: block;
        border-radius: 3px;
        cursor: pointer;
        background-color: #1E9FFF;
        color: white;
    }
</style>
