<script>
  import Store from '../stores/Store.js';
  import Card from '../shared/Card.svelte';
  import Button from '../shared/Button.svelte';

  
  export let task;
  let finished = "not finished";
  let card_color = "white";

  const date = "Today";
  


  const handleDelete = (id) => {
    Store.update(tasks => {
      return tasks.filter(task => task.id != id);
    });
  };

  const handleClick = (f) => {
    if(card_color === "white"){
      card_color = "#D9FEE5";
      finished = "done"
    }
    else if(card_color === "#D9FEE5"){
      card_color = "white";
      finished = "not finished"}
  }
</script>

<Card {card_color} on:click={() => handleClick(card_color)}>
  <div class="task">
    <h3>{ task.daily_task }</h3>
    <p>Finish: {finished}</p>
    <h4 class="time"> { task.time } </h4>
    <div>
      <div class="description"></div>
      <span>{ task.description }</span>
    </div>
    <div class="delete">
      <Button flat={true} on:click={() => handleDelete(task.id)}>Delete</Button>
    </div>
  </div>
</Card>

<style>
  h3{
    margin: 0 auto;
    color: rgb(99, 97, 97);
  }
  p{
    margin-top: 5px;
    font-size: 15px;
    color: rgb(148, 140, 140);
    margin-bottom: 20px;
  }
  .time{
    background: #e9e7e7;
    cursor: pointer;
    margin-top: 1px;
  }
  span{
    display: inline-block;
    padding: 10px 10px;
  }
  .delete{
    margin-top: 30px;
    text-align: center;
  }
</style>