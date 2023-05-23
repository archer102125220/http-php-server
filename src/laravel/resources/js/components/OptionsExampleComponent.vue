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

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count += 1;
    }
  },
  mounted() {
    console.log(`The initial count is ${this.count}.`);
    console.log("Component mounted.");
  },
};
</script>
