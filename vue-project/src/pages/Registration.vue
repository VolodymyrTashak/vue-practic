<template>
    <main class="registration">
      <AuthSection>
        <RegistrationForm />
      </AuthSection>
    </main>
  </template>
  
  <script>
  import AuthSection from '../components/auth/AuthSection.vue';
  import RegistrationForm from '../components/auth/registration/index.vue';
  
  export default {
    name: 'RegistrationPage',
    components: {
      AuthSection,
      RegistrationForm
    },
  };
  </script>
  
  <style lang="scss" scoped></style>