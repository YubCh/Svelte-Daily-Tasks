<script>
  import Store from '../stores/Store.js';
  import { createEventDispatcher } from 'svelte';
  import Button from '../shared/Button.svelte';
  let dispatch = createEventDispatcher();

  let submit_fields = { daily_task: '', time: '', description: '' };
  let given_errors = { daily_task: '', time: '', description: '' };
  let valid = false;

  const submitHandler = () => {
    valid = true;


    if (submit_fields.daily_task.trim().length < 1) {
      valid = false;
      given_errors.daily_task = 'Task must be at least 5 chars long'
    } else {
      given_errors.daily_task = ''
    }

    if (submit_fields.time.trim().length < 1) {
      valid = false;
      given_errors.time = 'Time should not be empty'
    } else {
      given_errors.time = ''
    }

    if (submit_fields.description.trim().length < 1) {
      valid = false;
      given_errors.description = 'No Description'
    } else {
      given_errors.description = ''
    }

    if (valid) {
      let task = {...submit_fields, id: Math.random()};

      Store.update(currentTasks => {
        return [task, ...currentTasks];
      });
      dispatch('add');
    }
  }
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="task">Task:</label>
    <input type="text" id="task" bind:value={submit_fields.daily_task}>
    <div class="error">{ given_errors.daily_task }</div>
  </div>
  <div class="form-field">
    <label for="time">Time:</label>
    <input type="text" id="time" bind:value={submit_fields.time}>
    <div class="error">{ given_errors.time }</div>
  </div>
  <div class="form-field">
    <label for="description">Description:</label>
    <input type="text" id="description" bind:value={submit_fields.description}>
    <div class="error">{ given_errors.description }</div>
  </div>
  <Button>Add Task</Button>
</form>

<style>
  form{
    width: 350px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field{
    margin: 20px auto;
  }
  input{
    width: 100%;
    border-radius: 6px;
  }
  label{
    margin: 15px auto;
    text-align: left;
  }
  .error{
    font-weight: bold;
    font-size: 12px;
    color: #d3294b;
  }
</style>