<template>
    <form class="form" @submit.prevent="handleSubmit">
      <CustomSelect :items="cities" v-model="city" class="form__select" />
      <CustomInput
        v-model="price"
        placeholder="Ціна, від"
        error-message="Не повинно бути пустим"
        :rules='rules'
      />
      <SubmitButton class="form__submit" type="submit">
        Підбір житла
      </SubmitButton>
    </form>
  </template>

<script>
import CustomInput from '../shared/CustomInput.vue'
import CustomSelect from '../shared/CustomSelect.vue'
import SubmitButton from '../shared/Button.vue'
import { isRequired, charLimit } from '../../utils/validationRules'

export default {
  components: {
    CustomSelect,
    CustomInput,
    SubmitButton,
  },
  data() {
    return {
      city: '',
      price: '',
    };
  },
  computed: {
    rules() {
      return [isRequired, charLimit(10)]
    },
    cities() {
      return [
        { value: '', label: 'Місто', selected: true },
        'Kyiv',
        'Odesa',
        'Poltava',
        'Kharkiv',
        'Dnipro',
        'Lviv',
        'Kherson',
        'Mariupol',
      ];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', {
        city: this.city,
        price: this.price,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>