<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import CreateTaskForm from './components/CreateTaskForm.svelte';
	import TaskList from './components/TaskList.svelte';
  import Tabs from './shared/Tabs.svelte';
  

  let tabs = ['Current Task', 'Add New Task'];
  let current_tab = 'Current Task';
	let placeholder = "/img/JJ.png"
	let current_img = placeholder;
	let header_img_list = ["/img/JJ.png","/img/KK.png","/img/RR.jpg","/img/II.jpg","/img/CC.jpg"]
  const tabChange = (e) => current_tab = e.detail;

  const handleAdd = () => {
    current_tab = 'Current Task';
  }

	const imgChange = () => {
		let index;
		for(let i = 0; i < header_img_list.length; i++){
			if(header_img_list[i] === current_img){
				index = (i + 1) % header_img_list.length;
			}
		}
		 //current_img = header_img_list[Math.floor(Math.random() * header_img_list.length)]; Random pic
		 current_img = header_img_list[index];
	}
</script>

<Header {current_img} on:click={imgChange}/>

<main>
  <Tabs current_tab={current_tab} {tabs} on:tabChange={tabChange} />
  {#if current_tab === 'Current Task'}
    <TaskList />
  {:else if current_tab === 'Add New Task'}
    <CreateTaskForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
	main{
    width: 100%;
    max-width: 960px;
    margin: 40px auto;
  }
</style>