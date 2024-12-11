<script setup>
//Importamos el ref
import { ref } from 'vue';
//Creamos una variable NavBarOpen
const NavBarOpen = ref(false);
</script>

<template>
    <!--El div nos permite agrupar contenido-->
    <div>
        <!--Mobile-->
        <div class="sm:hidden px-4 px-2 bg-indigo-500">
            <div>
                <button @click ="NavBarOpen = !NavBarOpen">
                    <svg :class="NavBarOpen ? 'hidden':''"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    <svg :class="NavBarOpen ? '':'hidden'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <nav :class="NavBarOpen ? '':'hidden'">
                <a href = # class ="block">Inicio</a>
                <a href = # class ="block">Proyectos</a>
                <a href = # class ="block">Contacto</a>
            </nav>
        </div>

        <!--Desktop-->
        <div class="px-4 px-2 bg-indigo-500 hidden sm:block">
            <div class="flex gap-x-4">  
                <a href = # class ="block">Inicio</a>
                <a href = # class ="block">Proyectos</a>
                <a href = # class ="block">Contacto</a>
            </div>
        </div>

    </div>
</template>