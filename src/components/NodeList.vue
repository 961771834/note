<template>
  <div id = "nodelist">
    	<h2>NOTES</h2>
   		<div class="list" @click = "text">
   		    <span class="btn" @click = "show = 'all'"  v-bind:class="{choosen:show == 'all'}">All Notes</span><span class="btn" @click="show = 'favorites'"  v-bind:class="{choosen:show == 'favorites'}">Favorites</span>
   		</div>
    	<ul>
    	    <li v-for="item in notes" v-bind:class="{active:item == activeNote}" @click = "updateActiveNote(item)"  >
    	        <a href="javascript:void(0)">{{item.text}}</a>
    	    </li>
    	</ul>
	</div>   
</template>

<script>
    export default {
        data () {
            return {
                show:"all",
                }
            },
        computed:{
            notes(){
                if(this.show == "all"){
                    return this.$store.getters.notes;
                
                }else if(this.show == "favorites"){
                    return this.$store.getters.notes.filter(note=>note.favorite);
                }
            },
            activeNote(){
                return this.$store.getters.activeNote;
                
            }
        },
        methods:{
            updateActiveNote(note){
               this.$store.dispatch("updateActiveNote",note);
            },
            text(){
                 console.log(this.notes);
                 console.log(this.show);
                 console.log(this.$store.getters.notes)
            }
        }  
    }

</script>


<style>
        #nodelist{	
			height: 100%;
			float: left;
			width: 300px;
			background: #F4F4F4;
		}
		#nodelist h2{
			text-align: center;
		}

		#nodelist .list .btn{
			width: 80px;
			display: inline-block;
			height: 30px;
			border: 1px solid #ccc;	
			border-radius: 4px;
		}
		#nodelist .list{
			margin-top: 20px;
		}
		#nodelist .list .btn:nth-child(1){
			margin-left: 70px;
		}

		#nodelist a{
			text-decoration: none;
		}

		#nodelist ul{
			list-style: none;
			margin-top: 20px;
		}

		#nodelist ul li{
			height: 40px;
			line-height: 40px;
			text-indent: 2em;
            overflow: hidden;

		}

		#nodelist .choosen{
			background: #E5E5E5;
		}
        #nodelist .active{
            background: lightgray;
        }

</style>