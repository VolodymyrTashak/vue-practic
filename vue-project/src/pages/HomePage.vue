<template>
    <main class="homepage">
      <SectionWithHeaderSpacer>
        <Container>
         <ApartmentsFilterForm class="apartments-filter" @submit="filter" />
         </Container>
        <Container>
         <p v-if="!filteredApartments.length">Нічого не знайдено</p>
         <ApartmentsList v-else :items="filteredApartments">
          <template v-slot:apartment="{ apartment }">
            <ApartmentsItem
              :key="apartment.id"
              :id="apartment.id"
              :descr="apartment.descr"
              :rating="apartment.rating"
              :imgSrc="apartment.imgUrl"
              :price="apartment.price"
            />
          </template>
         </ApartmentsList>
        </Container>
      </SectionWithHeaderSpacer>
    </main>
</template>

<script>
import ApartmentsList from '../components/apartment/ApartmentsList.vue'
import ApartmentsItem from '../components/apartment/ApartmentsItem.vue'
import ApartmentsFilterForm from '../components/apartment/ApartmentsFilterForm.vue'
import Container from '../components/shared/Container.vue'
import SectionWithHeaderSpacer from '../components/shared/SectionWithHeaderSpacer.vue'
// import apartments from '../components/apartment/apartments.js'
import { getApartmentsList } from '../services/apartments.service'

export default {
   name: 'App',
     components: {
      ApartmentsList,
      ApartmentsItem,
      ApartmentsFilterForm,
      Container,
      SectionWithHeaderSpacer
    },
    data() {
    return {
      text: '',
      apartments: [],
      filters: {
        city: '',
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  async created() {
    try {
      const { data } = await getApartmentsList();
      this.apartments = data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;

      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;

      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
    },
  },
  }

</script>

<style lang="scss" scoped>

.apartsments-filter {
  margin-bottom: 40px;
}

</style>