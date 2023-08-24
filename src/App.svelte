<script>

	import Form from "./Form.svelte"

	import List from "./List.svelte"

	let AppName = 'TODO'

</script>
  
<main>

	<div class="form-container">

		<Form {AppName} />

	</div>

	<div class="list-container"> 

		<List />

	</div>

</main>
  
<style>

	.form-container {
		
		padding-bottom: 20px 

	}
  
	.list-container {
		
		padding-top: 20px

	}

</style>