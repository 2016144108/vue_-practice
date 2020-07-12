<template>
    <div class="info_item">
        <table class="layui-table">
            <colgroup>
                <col width="150">
                <col width="200">
                <col>
            </colgroup>
            <thead>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
                <th>公司</th>
                <th>手机号</th>
                <th>邮箱</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in users">
                <th>{{item.name}}</th>
                <th>{{item.age}}</th>
                <th>{{item.companyId}}</th>
                <th>{{item.phone}}</th>
                <th>{{item.email}}</th>
                <th>{{item.id}}</th>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import '../static/layui/layui'

    export default {
        name: "Info",
        async created(){
            this.users = await this.allUser();
            console.log(this.users);
        },
        data(){
            return{
                users: [],
            };
        },
        methods: {
            async allUser(){
                const resp = await this.$http.get("http://localhost:3000/users");
                return resp.body;
            }
        }
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
        margin: 100px auto 0;
    }
</style>
