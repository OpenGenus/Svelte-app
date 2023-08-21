import { writable } from 'svelte/store'

export const DataStore = writable([

  {
    id: 1,
    title: 'Default',
    description: 'Default data from Svelte store'
  }

])