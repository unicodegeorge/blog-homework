<template>
    <div>
 <nav>
     <!--Setting up router navigation -->
     <router-link :to="{name: 'home'}" class="nav-btn">Home</router-link>
     <router-link :to="{name: 'create_posts'}" class="nav-btn">Create Post</router-link>
     <router-link :to="{name: 'manage_posts'}" class="nav-btn">Manage Posts</router-link>

 </nav>
    </div>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>

    nav {
        display: flex;
        flex-direction: row;
        color: white;
        justify-content: center;
        width: 100%;
        padding-top: 10px;
        background-color: #352f36;
        border-bottom: 1px solid #2CDA9D;
        border-top: 1px solid #2CDA9D;
    }

    .nav-btn {
    color: white;
        text-decoration: none;
        margin-bottom: 9px;
        margin-left: 25px;
        margin-right: 25px;
    }
</style>
