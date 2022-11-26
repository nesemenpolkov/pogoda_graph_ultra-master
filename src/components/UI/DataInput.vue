<template>
  <label class="custom-field">
    <input id="inputString" type="email" max="10" v-model="text" @input="$emit('update:data', $event.target.value)">
  </label>
</template>

<script>
export default {
  name: "DataInput",
  props: {
    data: String,
    placeHolderText: String
  },
  data() {
    return {
      text: ""
    }
  },
  methods: {
    placeHolderTextChange() {
      const inputEl = document.getElementById("inputString");
      inputEl.placeholder = this.placeHolderText;
    }
  },
  watch: {
    data() {
      if (this.data) {
        this.text = this.data;
      }
    }
  },
  mounted() {
    this.text = this.data;
    this.placeHolderTextChange();
  }
}
</script>

<style scoped>

*, *::before, *::after {
  box-sizing: border-box;
}

.custom-field {
  font-size: 14px;
  position: relative;
  --field-padding: 12px;
  border-top: 20px solid transparent;
}

.custom-field input {
  border: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #f2f2f2;
  padding: 12px;
  border-radius: 3px;
  width: 250px;
  font-size: 14px;
  padding: var(--field-padding);
}

.custom-field .placeholder {
  position: absolute;
  left: 12px;
  bottom: 50%;
  top: 22px;
  transform: translateY(-50%);
  width: calc(100% - 24px);
  color: black;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  left: var(--field-padding);
  width: calc(100% - (var(--field-padding) * 2));
}
</style>