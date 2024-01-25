<script lang="ts">
  import type {ColorI} from '$lib/utility/colorsFunction';
  export let colors: ColorI[];
  export let checkColor: (color: ColorI) => void; 

  import Card from './Card.svelte';

</script>


<div class="group">
  {#each colors as color, index (index)}
    <Card color={color} checkColor={checkColor} />
  {/each}
</div>
