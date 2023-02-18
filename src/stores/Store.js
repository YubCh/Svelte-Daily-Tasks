import { writable } from 'svelte/store';

const Store = writable([
  {
    id: 1,
    daily_task: 'Today',
    time: '00:00',
    description: 'Todo',
  },
]);

export default Store;