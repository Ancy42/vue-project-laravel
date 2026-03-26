<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/contact">Contact</router-link> | 

            <router-link to="/list">List Product</router-link> | 
            <router-link to="/add">Add Product</router-link> 
        </nav>

        <router-view></router-view>
    </div>
</template>