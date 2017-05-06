import Vue from  "vue"
import Vuex from "vuex"


Vue.use(Vuex);
console.log(Vuex)

const state = {
    // notes:存储当前页;
    //activeNotes:当前正在编辑的note页;
    notes:[{
      text:"new Note",
      favorite:false
    }],
    activeNote:{},
}

const mutations = {
    //添加note
    addNote(state) {
      const newNote = {
        /*
        * text 是文本内容、
        * favorite 是指是否收藏
        * */
        "text":"new Note",
        "favorite":false,
      }
      state.notes.push(newNote);
      state.activeNote = newNote;
    },
    // 编辑笔记;
    editNote(state,text){
      state.activeNote.text = text;
    },

    // 设置当前激活的笔记;
    setActiveNote(state,note){
      state.activeNote = note;
    },

    //切换之前的收藏与取消收藏;
    toggleFavorite(state){
      state.activeNote.favorite = !state.activeNote.favorite
    },

    //删除笔记
    deteleNote(state){
      //删除当前
      state.notes.forEach((v,i)=>{
        if(v == state.activeNote){
          state.notes.splice(i,1);
        }
      })
    },
}

const actions = {
  addNote({commit}){
    commit("addNote")
  },
  /*
  * text 叫做mutation 的payLoad
  * */
  editNote({commit},text){
    commit("editNote",text)
  },
  updateActiveNote({commit},note){
    commit("setActiveNote",note)
  },
  toggleFavorite({commit}){
    commit("toggleFavorite")
  },
  deteleNote({commit}){
    commit("deteleNote");
  },
}

const getters = {
  notes:state => state.notes,
  activeNote:state => state.activeNote,
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})




