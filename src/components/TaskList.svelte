<script>
  import { onMount, onDestroy } from 'svelte';
  import Store from '../stores/Store.js';
  import TaskDetails from './TaskDetails.svelte';
</script>



<div class="task-list">
  {#each $Store as task (task.id)}
    <div>
      <TaskDetails {task} />
    </div>
  {/each}
</div>



<style>
  .task-list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>