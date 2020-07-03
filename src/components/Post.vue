<template>
    <div>
    <div id="post" v-if="postItem.title">
        <!-- Printing post values -->
        <h1 class="post-title">{{this.postItem.title}}</h1>
        <p class="post-description">{{this.postItem.description}}</p>
        <p class="post-content">{{(this.postItem.content)}}</p>
    </div>

        <!-- Displayed if user tries to go on /post without any data -->
        <div id="nopost" v-if="!postItem.title">
            <h1 >Whoops... There is no article. Go to create post and write one!.</h1>
        </div>
    </div>
</template>

<script>
    //Necessary imports
    import {posts_array} from "../exportvariables";
    import {postItem} from "../exportvariables";

    export default {

        name: "Post",

        data() {
            return {
                //Setting up the variables
                local_posts_array: posts_array,
                postItem:postItem
            }
        }
    }
</script>

<style scoped>
#post {
    position: relative;
    top: 100px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: #1A181B;
    width: 600px;
    margin: 0 auto;
    color: #2CDA9D;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

#nopost {
    position: relative;
    top: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: #1A181B;
    width: 600px;
    margin: 0 auto;
    color: #2CDA9D;
}
    .post-description {
        font-style: italic;
        color: white;
        word-wrap:break-word;
    }

    .post-title {
        border-bottom: 1px solid white;
        width: 90%;
        padding-bottom: 10px;
    }

    .post-content {

        word-wrap:break-word
    }
</style>
