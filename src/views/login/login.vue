<template>
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<form @keydown.enter="login" class="login100-form validate-form" autocomplete="off">
					<span class="login100-form-title p-b-43">
							Iview-Pro
							<p>VUE后台管理通用解决方案</p>
						</span>
					<div class="wrap-input100 validate-input ">
						<input class="input100"  :class="{'has-val':usernameEmpty}" type="text" v-model="username">
						<span class="focus-input100"></span>
						<span class="label-input100">用户名</span>
					</div>

					<div class="wrap-input100 validate-input">
						<input class="input100 "  :class="{'has-val':passwordEmpty}" type="password" v-model="password">
						<span class="focus-input100"></span>
						<span class="label-input100">密码</span>
					</div>

					<div class="flex-sb-m w-full p-t-3 p-b-32">
						<div class="contact100-form-checkbox">
							<Checkbox v-model="remember">
								<span class="remember-text">记住账号</span>
							</Checkbox>
						</div>
					</div>
					<div class="container-login100-form-btn">
						<a class="login100-form-btn" @click="login">
								登录
							</a>
					</div>
				</form>
				<div class="login100-more" :style="{backgroundImage:'url(' + loginBg + ')'}">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import loginBg from './images/pexels-photo.jpg'
	export default {
		data() {
			return {
				loginBg: loginBg,
				remember: false,
				username: "",
				password: "",
			}
		},
		computed: {
			usernameEmpty() {
				if (this.username != '') {
					return true
				} else {
					return false
				}
			},
			passwordEmpty() {
				if (this.password != '') {
					return true
				} else {
					return false
				}
			}
		},
		methods: {
			login() {
				if(this.username == ''){
					this.$Message.error('请填写用户名！');
				}else if(this.password == ''){
					this.$Message.error('请输入密码！');
				}else {
					this.$router.push('/home')
				}

			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './login.scss';
	.p-b-43 {
		padding-bottom: 43px;
	}
	.p-t-3 {
		padding-top: 3px;
	}
	.p-b-32 {
		padding-bottom: 32px;
	}
</style>
