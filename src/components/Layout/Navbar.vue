<template>
    <nav class="navbar may-green" role="navigation" aria-label="main navigation">

        <div class="container is-max-desktop px-2">
            <div class="navbar-brand">

                <RouterLink to="/">
                    <div class="navbar-item is-size-4 is-family-monospace has-text-white">
                            Memo Grass
                    </div>
                </RouterLink>
    
                <a 
                    role="button" 
                    class="navbar-burger has-text-white" 
                    :class="{ 'is-active': showMobileNav}"
                    aria-label="menu" 
                    aria-expanded="false" 
                    data-target="navbarBasicExample" 
                    @click.prevent="showMobileNav = !showMobileNav" 
                    ref="navbarBurgerRef"
                >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>
    
            <div 
                id="navbarBasicExample" 
                class="navbar-menu" 
                :class="{ 'is-active': showMobileNav}" 
                ref="navbarMenuRef"
            >
                <div class="navbar-start">
                    <button 
                        class="button laurel-green is-small mt-3 ml-3" 
                        @click="logout" 
                        v-if="storeAuth.user.id"
                    >
                        Log out {{ storeAuth.user.email }}
                    </button>
                </div>
                <div class="navbar-end">
                    <RouterLink 
                        to="/"
                        class="navbar-item white-ft" 
                        active-class="is-active" 
                        @click="showMobileNav = false"
                    >
                        Notes
                    </RouterLink>
    
                    <RouterLink 
                        to="/stats"
                        class="navbar-item white-ft" 
                        @click="showMobileNav = false"
                    >
                        Stats
                    </RouterLink>
    
                    <!-- <a class="navbar-item">
                        Documentation
                    </a> -->
                    <!-- <div class="navbar-item">
                        <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                            Log in
                        </a>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup>

import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useStoreAuth } from '@/stores/storeAuth'

/* mobile nav */
const showMobileNav = ref(false)

const navbarMenuRef = ref(null)
const navbarBurgerRef = ref(null)

const storeAuth = useStoreAuth()


onClickOutside(navbarMenuRef, () => {
    showMobileNav.value = false
}, {
    ignore: [navbarBurgerRef]
})

const logout = () => {
    showMobileNav.value = false
    storeAuth.logoutUser()
}

</script>

<style>

.white-ft {
    /* background-color: rgba(184, 224, 82, 0.3); */
    color: #fff !important;
}

.white-ft:hover, .lite-jun-bud {
    background-color: rgb(88, 158, 75) !important;
}

.laurel-green {
    background-color: rgb(163, 182, 139) !important;
    border-color: transparent !important;
    color: #fff !important;
}

@media (max-width: 1023px) {
    .navbar-menu {
        position: absolute;
        left: 0;
        width: 100%;
    }

    .white-ft {
        /* background-color: rgba(184, 224, 82, 0.3); */
        color: #000 !important;
    }
}
</style>