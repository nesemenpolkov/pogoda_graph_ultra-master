<template>
  <v-network-graph
      class="graph"
      :nodes="nodes"
      :edges="edges"
      :layouts="layouts"
  />
</template>

<script>
export default {
  name: "GraphView",
  data() {
    return {
      nodes: null,
      edges: null,
      layouts: null
    }
  },
  mounted() {
    this.nodes = JSON.parse(localStorage.getItem("nodes"));
    this.edges = JSON.parse(localStorage.getItem("edges"));
    this.layouts = JSON.parse(localStorage.getItem("layouts"));
  }
}
</script>

<style scoped>

</style>