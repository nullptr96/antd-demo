<template>
    <div class="login-layout">
        <div class="title">
            <span class="desc">
                This is title
            </span>
        </div>
        <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
        >
        <a-form-item>
        <a-input
            v-decorator="[
            'userName',
            { rules: [{ required: true, message: 'Please input your username!' }] },
            ]"
            placeholder="Username"
        >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
        </a-form-item>
        <a-form-item>
        <a-input
            v-decorator="[
            'password',
            { rules: [{ required: true, message: 'Please input your Password!' }] },
            ]"
            type="password"
            placeholder="Password"
        >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
        </a-form-item>
        <a-form-item>
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
        </a-form-item>
        </a-form> 
    </div>
  
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
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
    background-size: 100%;
    position: relative;
    background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;
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