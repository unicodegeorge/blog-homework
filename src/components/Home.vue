<template>

    <div id="HomePage">
        <h1 class="pagetitle"> Home Page </h1>
        <p class="home-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nulla accumsan, elit sit amet
            varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo.
            Nullam rhoncus aliquam metus. Pellentesque arcu. Vestibulum fermentum tortor id mi.
            Maecenas libero. Nullam faucibus mi quis velit.
            Mauris elementum mauris vitae tortor.
            Fusce tellus. Mauris dictum facilisis augue. Aliquam ornare wisi eu metus. Etiam bibendum elit eget erat.

        </p>
        <p class="home-content">
            Curabitur vitae diam non enim vestibulum interdum. In enim a arcu imperdiet malesuada. Aenean id metus id
            velit ullamcorper pulvinar.
            Pellentesque pretium lectus id turpis. Fusce consectetuer risus a nunc. Aliquam ante. Mauris elementum
            mauris vitae tortor.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
            Integer in sapien. Donec quis nibh at felis congue commodo. Vestibulum fermentum tortor id mi. Sed vel
            lectus.
            Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
            Maecenas aliquet accumsan leo.
            Nam sed tellus id magna elementum tincidunt. Nullam eget nisl. Nulla pulvinar eleifend sem.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla quis
            diam.
        </p>

        <h1 style="color: white">Newest Posts</h1>
        <!-- Displayed when there are no existing posts-->
        <p style="color: #b932b5" v-if="!local_posts_array.length>0">There are no posts yet. Go to create post and write one.</p>
        <!-- Displayed when there is atleast one existing post-->
        <div v-if="local_posts_array.length>0" id="Posts">
            <!-- Div which is looped x times depending on number of posts in the array-->
            <div id="post" v-bind:key="post.id" v-for="post in local_posts_array">
                <!-- Displaying post title-->
                <h3 class="post-title">{{post.title}}</h3>
                <!-- Rendering only if the boolean value of descriptionVisible is set to true-->
                <p class="post-description" v-if="post.descriptionVisible">{{post.description}}</p>
                <!-- Rendering only if the boolean value of descriptionVisible is set to false-->
                <button v-if="!post.descriptionVisible" v-on:click="toggleDescription(post.id)" class="post-btn">Show
                    Description
                </button>
                <!-- Rendering only if the boolean value of descriptionVisible is set to true-->
                <button v-if="post.descriptionVisible" v-on:click="toggleDescription(post.id)" class="post-btn">Hide
                    Description
                </button>
                <!-- Button which calls method navigateToArticle on click and passing the  id,title,description,content of the article-->
                <button  v-on:click="navigateToArticle(post.id,post.title,post.description,post.content)" class="post-btn">Read</button>
            </div>
        </div>
    </div>


</template>

<script>
    //Necessary imports
    import {posts_array} from '../exportvariables';
    import {postItem} from "../exportvariables";

    export default {
        name: "Home",
        data() {
            return {
                //setting the local array
                local_posts_array: posts_array,

            }
        },
        methods: {
            //Method which is used to toggle description
            toggleDescription: function (id) {
                //This loop is looking for the right post in post array
                for (let i = 0; i < this.local_posts_array.length; i++) {
                    //Checking if it's the right one.
                    if (this.local_posts_array[i].id == id) {
                        //If so, changing the description visible value to the opposite
                        this.local_posts_array[i].descriptionVisible = !this.local_posts_array[i].descriptionVisible;
                    }
                }
            },
            //Method which is used to navigate user to the article he chose
            navigateToArticle: function(id,title,description,content) {
                //Setting the values to a global object postItem, which is then displayed in Post.vue component
                postItem.id=id;
                postItem.title = title;
                postItem.description = description;
                postItem.content = content;
                //Using router to redirect user to the post
                this.$router.push({ name: 'post'});

            }
        }
    }
</script>

<style scoped>
    .post-description {
        word-wrap:break-word;
        width: 90%;
    }
    .home-content {
        text-align: justify;
    }
    #HomePage {
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

    #Posts {
        height: 400px;
        overflow-y: scroll;

    }

    ::-webkit-scrollbar {
        height: 12px;
        width: 50px;
        background: #7a2277;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #2CDA9D;
    }

    .post-title {
        border-bottom: 2px solid  #7a2277;
      width: 90%;
        padding-bottom: 10px;
        word-wrap:break-word;
        color: white;
    }

    .post-btn {
        border: 1px solid #2CDA9D;
        background: none;
        color: white;
        padding: 5px;
        margin-right: 5px;
    }

    button.active.focus, button.active:focus,
    button.focus, button:active.focus,
    button:active:focus, button:focus {
        outline: none;
        box-shadow: none;

    }

</style>
