<template>
    <div id="toolbar">
      <i class="glyphicon glyphicon-plus" @click = "addNote"></i>
      <i class="glyphicon glyphicon-star" v-bind:class = "{current:favorite}" @click = "toggleFavorite" ></i>
      <i class="glyphicon glyphicon-remove" @click = "deleteNote" ></i>
    </div>
</template>
<script>
    export default {  
        computed:{
            favorite(){
              return this.$store.getters.activeNote.favorite;
            }
        },
        methods:{
            addNote(){
                //通过dispatch分发action中addnote
                this.$store.dispatch("addNote");
            },
            toggleFavorite(){
                this.$store.dispatch("toggleFavorite");     
            },
            deleteNote(){
                this.$store.dispatch("deteleNote");
            }
        }
    }
    
</script>


<style>
        *{
			margin: 0px;
			padding: 0px;
		}
		html,body{
			height: 100%;
		}

		#toolbar{
			height: 100%;
			float: left;
			width: 70px;
			background: #2F414E;

		}
		#toolbar i{
			width: 100%;
			height: 60px;
			line-height: 60px;
			font-size: 30px;
			text-align: center;
			color: #686A6C;
		}

		#toolbar .current{
			color: lightcoral;
		}
        #toolbar i:hover{
            color: lightyellow;
        }

</style>

