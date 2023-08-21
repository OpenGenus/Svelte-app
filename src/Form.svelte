<script>

    import { DataStore } from './store'

    export let AppName

    let title = ''

    let description = ''
  
    const handleSubmit = () => {

        const newData = {

          id: Math.random(),

          title,

          description

        }
  
        DataStore.update((currentData) => {

          return [newData, ...currentData]

        })
  
        title = ''

        description = ''

      }


</script>
  
  
<div class="card">

  <header>

    <h2>Welcome to {AppName} App</h2>

  </header>

  <form on:submit|preventDefault={handleSubmit}>

    <div class="input-group">

      <input type="text" bind:value = {title} required placeholder="Title">

      <input type="text" bind:value = {description} required placeholder="Description">

      <button type="submit">Create</button>

    </div>

  </form>

</div>
  
<style>

    .card {
        background-color: #f9f9f9;
        color: #333;
        border-radius: 15px;
        padding: 30px 40px;
        margin: 20px 0;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        margin: auto;
    }
  
    header h2 {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 20px;
    }
  
    .input-group {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
  
    input {
        border: 1px solid #ccc;
        padding: 10px;
        font-size: 16px;
        border-radius: 5px;
    }
  
    button[type="submit"] {
        background-color: #333;
        color: #fff;
        border: none;
        padding: 8px 15px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.3s ease;
    }
  
    button[type="submit"]:hover {
        background-color: #555;
    }

  </style>