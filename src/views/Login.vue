<template>
    <div class="login-layout">
        <div class="title">
            <span class="desc">
                This is title
            </span>
        </div>
        <a-form-model
            ref="ruleForm"
            id="components-form-demo-normal-login"
            class="login-form"
            :model="loginForm"
            @submit="handleSubmit"
            @submit.native.prevent
        >
        <a-form-model-item ref="username" prop="username">
            <a-input v-model="loginForm.user"
                    placeholder="Username"
            >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
        </a-form-model-item>
        <a-form-model-item>
            <a-input
                v-model="loginForm.password" 
                placeholder="Password"
            >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
        </a-form-model-item>
        <a-form-model-item>
        <a-checkbox
            v-decorator="[
            'remember',
            {
                valuePropName: 'checked',
                initialValue: true,
            },
            ]"
        >
            Remember me
        </a-checkbox>
        <a class="login-form-forgot" href="">
            Forgot password
        </a>
        <a-button type="primary" html-type="submit" class="login-form-button">
            Log in
        </a-button>
        Or
        <a href="">
            register now!
        </a>
        </a-form-model-item>
        </a-form-model> 
    </div>
  
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        user: '',
        password: '',
      }
    };
  },
  methods: {
    handleSubmit() {
        this.$router.push({path:'/Home'});
    },
    resetForm() {
      this.$refs.ruleForm.resetFields()
    }
  },
  mounted () {//添加user-layout
    document.body.classList.add('userLayout')
  },
  beforeDestroy () {
    document.body.classList.remove('userLayout')
  }
};
</script>
<style lang="less" scoped>
.ant-form-item {
    width: 100%;
}
.login-layout {
    padding: 10%;
    height: 100%;
    min-height: 100%;
    position: relative;
    background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;
    background-size: 100%;
}
#components-form-demo-normal-login .login-form {
  max-width: 400px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

.login-form {
    padding: 20px 0 34px 0;
    margin: 0 auto;
    width: 386px;
}

.title {
    text-align:center;
    .desc {
        padding: 32px 0 24px;

        font-size: 33px;
        color: rgba(0, 0, 0, .85);
        font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
        font-weight: 600;
        position: relative;
        top: 2px;
}

}
</style>