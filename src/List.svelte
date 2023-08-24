<script>

    import {DataStore} from './store'

    import { fade, scale } from 'svelte/transition'

    const handleDelete = (dataID) => {

    DataStore.update((currentData) => {

      return currentData.filter(data => data.id != dataID)

    })

  }
  
</script>

{#each $DataStore as data (data.id)}

    <div in:scale out:fade="{{ duration: 500 }}" class="list-item">

        <div class='card'>

            <div class="title">

                {data.title}

            </div>

            <button class="close" on:click={() => handleDelete(data.id)}>X</button>

            <p class="text-display">

                {data.description}

            </p>

        </div>

    </div>

{/each}

<style>

    .list-item {
        margin-bottom: 20px;
    }

    .card {
        background-color: #f9f9f9;
        color: #333;
        border-radius: 15px;
        padding: 30px 40px;
        margin: 20px 0;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        max-width: 600px;
        margin: auto;
        position: relative;
    }
  
    .title {
        font-size: 22px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 10px;
    }
  
    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        color: rgb(150, 150, 150);
        font-size: 20px;
        cursor: pointer;
    }
  

    @media (max-width: 600px) {

        .card {
            padding: 20px;
        }
    
        .title {
            font-size: 18px;
        }
    
        .close {
            top: 5px;
            right: 5px;
            font-size: 18px;
        }

    }

</style>