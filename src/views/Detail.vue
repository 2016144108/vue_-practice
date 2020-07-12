<template>
    <div class="detail_item">
        <h1>编辑用户</h1>
        <form class="layui-form" action="" @submit.prevent="detailUser">
            <div class="layui-form-item">
                <label class="layui-form-label">姓名</label>
                <div class="layui-input-block">
                    <input style="width: 90%;" v-model="user.name" type="text" name="title" required  lay-verify="required" placeholder="name" autocomplete="on" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">电话</label>
                <div class="layui-input-block">
                    <input style="width: 90%;" v-model="user.phone" type="text" name="title" required  lay-verify="required" placeholder="phone" autocomplete="on" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">邮箱</label>
                <div class="layui-input-block">
                    <input style="width: 90%;"  v-model="user.email" type="text" name="title" required  lay-verify="required" placeholder="email" autocomplete="on" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">学历</label>
                <div class="layui-input-block">
                    <input style="width: 90%;"  v-model="user.education" type="text" name="title" required  lay-verify="required" placeholder="education" autocomplete="on" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">毕业学校</label>
                <div class="layui-input-block">
                    <input style="width: 90%;"  v-model="user.school"  type="text" name="title" required  lay-verify="required" placeholder="school" autocomplete="on" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">职业</label>
                <div class="layui-input-block">
                    <input style="width: 90%;"  v-model="user.job" type="text" name="title" required  lay-verify="required" placeholder="job" autocomplete="on" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">个人简介</label>
                <div class="layui-input-block">
                    <textarea style="width: 90%;"  v-model="user.intro" name="desc" class="layui-textarea" required></textarea>
                </div>
            </div>
            <div class="layui-form-item">
                <div class="layui-input-block">
                    <button style="width: 80px;margin-left: 100px" class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>
                    <button style="width: 80px;" type="reset" class="layui-btn layui-btn-primary">重置</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import '../static/layui/layui'

    export default {
        name: "Detail",
        data(){
            return{
                user: {
                    name: '',
                    phone: '',
                    email: '',
                    education: '',
                    school: '',
                    job: '',
                    intro: '',
                }
            }
        },
        async created(){
            let id = this.$route.query.id;
            this.user =await this.edit(id);
            console.log(this.user);
        },
        methods: {
            async edit(id){
                const resp = await this.$http.get('http://localhost:3000/users/'+id);
                console.log(resp.body);
                return resp.body;
            },
        }
    }
</script>

<style scoped>
    @import '../static/layui/css/layui.css';
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .detail_item{
        width: 1300px;
        margin: 0 auto;
    }
    .detail_item h1{
        margin-left: 30px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .detail_item .layui-form-item{
        margin-bottom: 20px;
    }
    .detail_item .layui-form-item .layui-input-block .layui-input{
        height: 36px;
        padding-left: 20px;
        font-size: 13px;
    }
    .detail_item .layui-form-item .layui-form-label{
        height: 36px;
        line-height: 36px;
        margin-right: 20px;
    }
    .detail_item textarea{
        resize: none;
        padding: 10px 20px;
        font-size: 13px;
    }
</style>
