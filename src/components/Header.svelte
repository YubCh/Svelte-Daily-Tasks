

<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let current_img;
</script>

<header>
<h1>

  <img src= {current_img} alt="background image" on:click>

</h1>


</header>


<style>
  header{
    background: whitesmoke;
    padding: 5px;
  }

  h1{
    margin: 0;
    text-align: center;
  }


  img{
    max-width: 400px;
  }
</style>