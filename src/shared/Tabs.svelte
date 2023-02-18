<script>

  import { createEventDispatcher } from 'svelte';
  let dispatch = createEventDispatcher();
  
  export let tabs;
  export let current_tab;

</script>

<div class="tabs">
  <ul>
    {#each tabs as item}
      <li on:click={() => dispatch('tabChange', item)}>
        <div class:active={item === current_tab}>{ item }</div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .tabs{
    margin-bottom: 40px;
  }
  ul{
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }
  li{
    margin: 0 16px;
    font-size: 18px;
    color: #555;
    cursor: pointer;
  }
  .active{
    color: #d12a4b;
    border-bottom: 2px solid #da254a;
    padding-bottom: 8px;
  }
</style>