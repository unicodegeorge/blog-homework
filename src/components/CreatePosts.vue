<template>

    <div id="postspage">
        <h1 class="pagetitle">Write a post</h1>
        <!-- This input is a v-model for local variable input_title -->
        <input v-model="input_title" class="input-title" type="text" placeholder="Write the title here">
        <!-- This input is a v-model for local variable input_description -->
        <input v-model="input_description" class="input-descripion" type="text" placeholder="Write the description here">
        <!-- This input is a v-model for local variable input_content -->
        <textarea v-model="input_content" class="input-content" name="Text1" cols="1" rows="1" placeholder="Write your story here"></textarea>
        <!-- This button calls method post() on click -->
        <button v-on:click="post()" class="post-btn">Post</button>


    </div>
</template>
<script>
    import {posts_array} from '../exportvariables';
    export default {

        name: "CreatePosts",
        data() {
            return {
                //Setting post id to 0
                post_id: 0,
                //Setting input_title to null
                input_title: '',
                //Setting input_description to null
                input_description: '',
                //Setting input_content to null
                input_content: '',
                //Setting local array of posts
                local_posts_array: posts_array,
                tempTitle: '',
                tempDescription: '',
                tempContent: ''
            }
        },
        methods: {
            //Method post which is used to push an object into the array
            post() {
                //Increasing post id by one
                this.post_id++;
                //Checking if method checkIfEmpty returns true
                if(this.checkIfEmpty()) {
                    //If so, calling method alert to display an alert box saying that title description content are all required.
                    alert("Title\nDescription\nContent\nare all required.");
                } else {
                    //Pushing into the array
                    posts_array.push({
                            id: this.post_id,
                            title: this.input_title,
                            description: this.input_description,
                            content: this.input_content,
                            descriptionVisible: false
                        });


                }
            },
            //Method which is cheking if inputs are empty
            checkIfEmpty() {

                this.tempTitle = this.input_title.replace(/^\s+/, '').replace(/\s+$/, '');
                this.tempDescription = this.input_description.replace(/^\s+/, '').replace(/\s+$/, '');
                this.tempContent = this.input_title.replace(/^\s+/, '').replace(/\s+$/, '');

                //If only one of these conditions is true method -> returns true
                if(this.input_title == '' || this.input_description == '' || this.input_content == '' || this.tempTitle === '' || this.tempDescription == '' || this.tempContent == '') {
                    return true;
                }
            }
        }
    }
</script>

<style scoped>

    .posted-title {
        font-size: 30pt;
        text-decoration: underline;
    }


    #postspage {
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
</style>
