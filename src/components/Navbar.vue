<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion">

    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/customer/neworder">
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div class="sidebar-brand-text mx-3">marketing shop</div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - new order -->
    <li class="nav-item {{#neworder}}active{{/neworder}}">
      <a class="nav-link" href="/customer/neworder">
        <i class="fas fa-fw fa-shopping-cart"></i>
        <span>새로운 주문</span></a>
    </li>

    <!-- Nav Item - orders -->
    <li class="nav-item {{#orders}}active{{/orders}}">
      <a class="nav-link" href="/customer/orders">
        <i class="fas fa-fw fa-list-ul"></i>
        <span>주문 내역</span></a>
    </li>

    <!-- Nav Item - subscription -->
    <li class="nav-item {{#subscriptions}}active{{/subscriptions}}">
      <a class="nav-link" href="/customer/subscriptions">
        <i class="fas fa-fw fa-reply-all"></i>
        <span>자동화 내역</span></a>
    </li>

    <!-- Nav Item - deposit -->
    <li class="nav-item {{#deposit}}active{{/deposit}}">
      <a class="nav-link" href="/customer/deposit/1">
        <i class="fas fa-fw fa-won-sign"></i>
        <span>결제</span></a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block">

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>


  </ul>
</template>

<script>

export default {
  name: 'DefaultLayout',

  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-laptop',
          title: '메인',
          to: '/',
        },
        {
          icon: 'mdi-pirate',
          title: '할일',
          to: '/todos',
        },
      ],
      miniVariant: false,
      head_title: "",
    }
  },

  computed: {
    title() {
      this.change_title();
      return this.head_title;
    },

  },

  methods:{
    change_title(){
      this.head_title = this.$route.name;
      switch(this.head_title){
        case '':
          this.head_title="메인";
          break;
        case 'todos':
          this.head_title="할일";
          break;
        default:
          this.head_title="";
          break;
      }
    },

  },


}
</script>
