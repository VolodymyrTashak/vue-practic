<template>
    <AuthContainer class="login">
      <MainTitle class="login__title">Логін</MainTitle>
      <Form ref="form" class="login__form" @submit.prevent="handleSubmit">
        <CustomInput
          v-model="formData.email"
          placeholder="Email"
          autocomplete="email"
          name="email"
          :rules="emailRules"
          class="login__input"
        />
        <CustomInput
          v-model="formData.password"
          placeholder="Password"
          autocomplete="current-password"
          type="password"
          name="password"
          :rules="passwordRules"
          class="login__input"
        />
        <Button class="login__btn" type="submit" :loading="loading">Вхід</Button>
      </Form>
    </AuthContainer>
  </template>

<script>
import Form from '../../shared/form/index.vue'
import CustomInput from '../../shared/CustomInput.vue'
import Button from '../../shared/Button.vue'
import AuthContainer from '../AuthContainer.vue'
import MainTitle from '../../shared/MainTitle.vue'
import { emailValidation, passwordValidation, isRequired } from '../../../utils/validationRules.js'
import { loginUser } from '../../../services/auth.service.js'
    export default {
        name: 'Login',
        components: {
            Form,
            CustomInput,
            Button,
            AuthContainer,
            MainTitle
        },
        data() {
            return {
                formData: {
                    email: '',
                    password: ''
                }
            }
        },
        computed: {
           rules() {
            return {
                emailValidation, passwordValidation, isRequired
            }
           },
           emailRules() {
            return [this.rules.isRequired, this.rules.emailValidation]
           },
           passwordRules() {
            return [this.rules.isRequired]
           },  
        },
        methods: {
            async handleSubmit() {
                const isFormValid = this.$refs.form.validate();
                if (isFormValid) {
                  try {
                    const { data } = await loginUser(this.formData)
                    console.log(data);
                  } catch (error) {
                    console.log(error);
                  }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    text-align: center;
  }

//   &__input {
//     margin-bottom: 20px;
//     width: 100%;
//   }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>