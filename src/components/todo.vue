<template>
  <div>
    <input type="date" v-model="todoDate">
    <input class="write" type="text" v-model="todoItem">  
    <button @click="addTodo">추가하기</button>
  </div>  
  <ul>
    <li v-for="(todo,index) in todolist" :key="todo" 
    @click="complete(todo , index)"
    v-bind:class="{complted: todo.complete}">
      {{ index + 1 }}
      {{ todo.dates }}
      {{ todo.item }}
      
      <span @click="removetodo(todo,index)"> 삭제 </span></li>
  </ul>
  <div></div>
  </template>
  
  <script>
  
  export default {
    data: function(){
      return{
        todoDate:"",
        todoItem:"",
        todolist:[],
      }
    },  
    methods:{
      addTodo : function(){
        console.log(this.todoItem)
        if(this.todoItem != ""){
          var obj = {dates : this.todoDate, item: this.todoItem, complete : false};
          localStorage.setItem(this.todoItem, JSON.stringify(obj));
          console.log(obj)
          this.todolist.push(obj);
        }
      },
      removetodo : function(todo, index){
        localStorage.removeItem(todo.item);
        this.todolist.splice(index, 1);
        console.log(localStorage.length)
      },
      complete: function(todo,index){
        todo.complete = !todo.complete;   
      },
     },
    created: function(){
        if(localStorage.length>0){
          for(var i = 0; i<localStorage.length; i++){
            if(localStorage.key(i) !== "loglevel:webpack-dev-server"){
              this.todolist.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
            }
          }
        }
      }
  }
  </script>
  <style scoped>
  .complted{
    background-color: yellow;
  }
  .write{
    height: 30px;
    border: 1px solid rgb(179, 179, 179);
    border-radius: 10px;
    margin:0 5px;
  }
  button{
    width: 100px;
    height: 34px;
    background-color: #88bdff;
    border: 0px;
    border-radius: 10px;
  }
  </style>