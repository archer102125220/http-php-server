<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Composition Example Component</div>

                    <div class="card-body">
                        I'm an composition example component.
                    </div>
                </div>
            </div>
        </div>
        <button @click="increment">Count is: {{ count }}</button>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const count = ref(0);

function increment() {
    count.value++;
}

onMounted(() => {
    console.log(`The initial count is ${count.value}.`);
    console.log("Component mounted.");
});
</script>
