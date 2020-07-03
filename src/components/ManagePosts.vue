<template>
    <div>
    <div v-if="local_posts_array.length>0 && !edit" id="posts">
        <!-- Div which loops x times depends on the lenght of local_posts_array -->
      <div class="post" v-bind:key="post.id" v-for="post in local_posts_array">
          <p>{{post.title}}</p>
          <div class="manage-btns">
              <!-- Button which on click call method editPost() and pass there id,title,description,content of current editing post -->
          <button v-on:click="editPost(post.id,post.title,post.description,post.content)" class="manage-btn">EDIT</button>
              <!-- Button which on click call method delPost() and pass there id -->
          <button v-on:click="delPost(post.id)" class="manage-btn">DELETE</button>
          </div>
      </div>
    </div>
        <!-- Checking if there are no posts to edit if so, it renders this message -->
        <div v-if="!local_posts_array.length>0" id="no_posts">
            <h1 class="pagetitle">There are no posts to manage. <br>Click on Create Post in nav to make one.</h1>
            </div>

        <div v-if="edit" id="editpost">
            <h1 class="pagetitle">Edit post</h1>
            <input v-model="etitle" class="input-title" type="text"  value="stop">
            <input v-model="edescription" class="input-descripion"   type="text" placeholder="Write the description here">
            <textarea v-model="econtent" class="input-content" name="Text1" cols="1" rows="1" placeholder="Write your story here"></textarea>
            <!-- On click call method save()-->
            <button v-on:click="save()" class="post-btn">Save</button>
        </div>
        </div>
</template>
<script>
    import {posts_array} from "../exportvariables";

    export default {
        name: "ManagePosts",
        data() {

            return {
                //Local variable for array of posts
                local_posts_array: posts_array,
                //Value that specify if user wants to edit a post
                edit: false,
                //Title of a post which is editing atm
                etitle: '',
                //Description of a post which is editing atm
                edescription: '',
                //Content of a post which is editing atm
                econtent: '',
                eid: ''
            }
        },
        methods:{
            //Method which is used for deleting posts
            delPost(id) {
                //This is a loop which is looking for post that user wants to delete and delete it.
                for(let i = 0; i < this.local_posts_array.length; i++) {
                    if(this.local_posts_array[i].id == id) {
                        //Calling method splice to delete array on pos of current index in for and delete 1.
                        this.local_posts_array.splice(i,1);
                    }
                }
            },
            //Method which is used for editing a post, it has paramaters id, title, description, content which are passed from html button event
            editPost(id,title,description,content) {

                //Edit -> true -> renders v-if div for editing a post
                this.edit = true;
                //Setting local id value to the editing post id value
                this.eid = id;
                //Setting local title value to the editing post title value
                this.etitle = title;
                //Setting local description value to the editing post description value
                this.edescription = description;
                //Setting local content value to the editing content description value
                this.econtent = content;


            },
            //Method used for saving changes user mad in the article
            save() {
            //This loop is looping in posts_array and looking for the right post to update
            for(let i=0; i<posts_array.length; i++) {
                if(posts_array[i].id == this.eid) {
                    //Updating the values
                    posts_array[i].title = this.etitle;
                    posts_array[i].description = this.edescription;
                    posts_array[i].content = this.econtent;
                    this.edit=false;
                }
            }
            }

        }
    }
</script>
<style scoped>
    #editpost {
        position: relative;
        top: 50px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        background-color: #1A181B;
        width: 600px;
        margin: 0 auto;
        color:#2CDA9D;
    }

    input {
        color: #2CDA9D;
        margin-bottom: 10px;
        background-color: #352f36;
        height: 30px;
        border-radius: 10px;
        border: 1px solid white;
    }

    ::placeholder {
        color: #2CDA9D;
        text-align: center;
    }
    input {
        color: #2CDA9D;
        margin-bottom: 10px;
        background-color: #352f36;
        height: 30px;
        border-radius: 10px;
        border: 1px solid white;
    }
    .input-title {
        color: #2CDA9D;
    }
    .input-content {
        color: #2CDA9D;
        height: 300px;
    }
    .post-btn {
        margin-bottom: 10px;
        background-color: #352f36;
        height: 30px;
        border-radius: 10px;
        border: 1px solid white;
        color: #2CDA9D;
    }
    textarea {
        background-color: #352f36;
        margin-bottom: 10px;
        border: 1px solid white;
        border-radius: 10px;
    }
#no_posts {
  margin-top: 60px;
}
    .post {
        display: flex;
        width: 90%;
        background-color: #352f36;
        padding: 10px;
        margin: 0 auto;
        margin-top: 20px;
        border: 1px solid #2CDA9D;
        color: white;
    }
    .manage-btn {
        height: 100%;
        margin-left: 5px;
        border: 1px solid #2CDA9D;
        background-color: #352f36;
        color: white;
        width:100px
    }
    .post div     {
        margin-left: auto;
    }
</style>
