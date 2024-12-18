<!-- src/routes/__layout.svelte -->
<script context="module" lang="ts">
  export const prerender = true;
</script>

<script>
  import { onMount } from "svelte";
  
  onMount(() => {
    document.title = "Chase Reynolds"; 
  });
</script>

<slot />