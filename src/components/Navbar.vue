<template lang="">
    <nav class="navbar">
        <div class='navbar_components'>
            <img src="/setting.png" alt="App-Logo" class="logo">
        
        <div class="links">
        <RouterLink enter-active-class="active" to="/">Home</RouterLink>
        <RouterLink enter-active-class="active" to="/inputtag">Inputtag</RouterLink>
        <RouterLink enter-active-class="active" to="/ktable">Kanban table</RouterLink>
        <RouterLink enter-active-class="active" to="/splitcount">Split Count</RouterLink>
        <!-- <RouterLink to="/freader">Fonts reader</RouterLink>
        <RouterLink to="/menu">Colapse Menu</RouterLink> -->
        </div>
        </div>
    </nav>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    
}
</script>
<style scoped>
    .navbar{
        height: 60px;
        width: 100%;
        background-color: #252B48;
    }

    .navbar .navbar_components{
        padding: 5px 10px 5px 10px;
        display: flex;
        justify-content: space-between;
    }

    .navbar .logo{
        width: 45px;
        height: 45px;
        transition: 0.2s;
    }

    .navbar .logo:hover{
        transform: scale(1.1);
    }

    .links{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px
    }

    .links a{
        text-decoration: none;
        color: white;
    }

      .links a:hover{
        color: #F7E987;
        border-bottom: solid 1px rgb(228, 68, 68);
    }

    .active{
        color: black;
    }


</style>