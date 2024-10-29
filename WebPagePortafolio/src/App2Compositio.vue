<script>
export default{
    setuo() {
        const name = "Don ramon";
        const status = "active";
        const tasks = ["Task One", "Task Two", "Task Three", "Task Four"];
    }
}
</script>

<template>
    <h1>{{ name }}</h1>
    <p v-if="status === 'active'">Status:User is {{ status }}</p>
    <p v-else-if="status === 'pending'">User id {{ status }}</p>
    <p v-else>User status is {{ status }}</p>

    <h3>Tasks :</h3>
    
</template>
