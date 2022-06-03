<template>
  <div class="container">
    <h2>to-do</h2>
    <form class="d-flex gap-2" @submit.prevent="addTodo">
      <div class="flex-grow-1">
        <input
            class="form-control align-items-center"
            type="text"
            v-model="todo"
            placeholder="type new to do"
        >
      </div>
      <div>
        <button class="btn btn-primary ml-2"
                type="submit">
          클릭
        </button>
      </div>
    </form>
    {{ todos }}
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const todo = computed(()=>store.state.todo);
    const todos = computed(()=>store.state.todos);

    // const menu = reactive([
    //   {
    //     header: 'Main Navigation',
    //     hiddenOnCollapse: true
    //   },
    //   {
    //     href: '/',
    //     title: 'Dashboard',
    //     icon: 'fa fa-user'
    //   },
    //   {
    //     href: '/charts',
    //     title: 'Charts',
    //     icon: 'fa fa-chart-area',
    //     child: [
    //       {
    //         href: '/charts/sublink',
    //         title: 'Sub Link'
    //       }
    //     ]
    //   }]);

    const addTodo = () => {
      console.log(todo);
    };



    return {
      todo,
      todos,
      addTodo,
      // onInput,
    };
  },

  name: 'TodosPage',
  // components: {
  //   // HelloWorld,
  // }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
