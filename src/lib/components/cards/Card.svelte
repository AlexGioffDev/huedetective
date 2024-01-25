<script lang="ts">
	import type { ColorI } from "$lib/utility/colorsFunction";

  export let color: ColorI;
  export let checkColor: (color: ColorI) => void;
</script>


<button class="card-container" on:click={() => checkColor(color)}>
  <div class="card-color" style="background-color: rgb({color.r}, {color.g}, {color.b});" />
</button>
