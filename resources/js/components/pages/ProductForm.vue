<template>
<div>
  <h2>Add Product</h2>

  <form @submit.prevent="saveProduct">
    <input type="text" v-model="name" placeholder="Name"><br>
    <input type="number" v-model="price" placeholder="Price"><br>
    <input type="file" @change="handleFile"><br>
    <button type="submit">Save</button>
  </form>

</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      price: '',
      image: null
    }
  },
  methods: {
    handleFile(e) {
      this.image = e.target.files[0]
    },
    saveProduct() {
      let formData = new FormData()
      formData.append('name', this.name)
      formData.append('price', this.price)
      formData.append('image', this.image)

      axios.post('/products', formData)
      .then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>