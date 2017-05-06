<template>
   <div id="editor">	
		<textarea @keyup.enter="editNote">{{text}}</textarea>
	</div> 
</template>

<script>
    export default {
       computed:{
           text(){
               return this.$store.getters.activeNote.text;
           },
       },
       methods:{
           editNote(e){
               return this.$store.dispatch("editNote",e.target.value);
           }
       }
    }

</script>

 <style>
    #editor{
			padding-left: 390px;
			height: 100%;
			width: 100%;
		}

	#editor textarea{
			width: 100%;
			height: 100%;
			outline: none;
			resize: none;
			border: none;
		}

 </style>
