<template>
    <AuthContainer class="registration">
      <MainTitle class="registration">Реєстрація</MainTitle>
      <Form ref="form" class="registration" @submit.prevent="handleSubmit">
        <CustomInput
          v-model="formData.name"
          placeholder="Name"
          autocomplete="username"
          name="name"
          :rules="nameRules"
          class="registration"
        />
        <CustomInput
          v-model="formData.email"
          placeholder="Email"
          autocomplete="email"
          name="email"
          :rules="emailRules"
          class="registration"
        />
        <CustomInput
          v-model="formData.password"
          placeholder="Password"
          autocomplete="current-password"
          type="password"
          name="password"
          :rules="passwordRules"
          class="registration"
        />
        <CustomInput
          v-model="formData.confirmPassword"
          placeholder="Confirm password"
          autocomplete="current-password"
          type="password"
          name="password"
          :rules="confirmPassword"
          class="registration"
        />
        <Button class="registration" type="submit" :loading="loading">Вхід</Button>
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
import { registerUser } from '../../../services/auth.service.js'
    export default {
        name: 'Registration',
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
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                }
            }
        },
        computed: {
           rules() {
            return {
                emailValidation, passwordValidation, isRequired
            }
           },
           nameRules() {
            return [this.rules.isRequired]
           },
           emailRules() {
            return [this.rules.isRequired, this.rules.emailValidation]
           },
           passwordRules() {
            return [this.rules.isRequired, this.rules.passwordValidation]
           }, 
           confirmPassword() {
            return [
                (val) => ({
                hasPassed: val === this.formData.password,
                message: 'Паролі не співпадають'
            })]
           }, 
        },
        methods: {
            async handleSubmit() {
                const { form } = this.$refs
                const isFormValid = form.validate();
                const { name, password, email } = this.formData;
                if (isFormValid) {
                  try {
                    const { data } = await registerUser({ name, password, email });
                    console.log(data);
                    form.reset();
                  } catch (error) {
                    console.log(error);
                  }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.registration {
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