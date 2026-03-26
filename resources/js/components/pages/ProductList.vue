<template>
<div>
  <h2>Products</h2>

  <table border="1">
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Image</th>
      <th>Action</th>
    </tr>

    <tr v-for="product in products" :key="product.id">
      <td>{{ product.name }}</td>
      <td>{{ product.price }}</td>
      <td>
        <img :src="'/storage/' + product.image" width="50">
      </td>
      <td>
        <button @click="deleteProduct(product.id)">Delete</button>
      </td>
    </tr>
  </table>

  <button 
    v-for="link in pagination"
    v-html="link.label"
    @click="getProducts(link.url)">
  </button>

</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: [],
      pagination: []
    }
  },
  mounted() {
    this.getProducts('/products')
  },
  methods: {
    getProducts(url) {
      axios.get(url).then(res => {
        this.products = res.data.data
        this.pagination = res.data.links
      })
    },
    deleteProduct(id) {
      axios.delete('/products/' + id)
      .then(() => this.getProducts('/products'))
    }
  }
}
</script>