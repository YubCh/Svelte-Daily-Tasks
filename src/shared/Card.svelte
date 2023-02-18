<script>

  export let card_color = "white";
  
</script>



<div class="card" style="background:{card_color}" on:click>
  <slot></slot>
</div>



<style>

  .card{
    background: white;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
    
  }
  .card:hover{
    opacity: 0.8;
  }

</style>