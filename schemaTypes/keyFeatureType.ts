import {defineType} from 'sanity'

export const keyFeatureType = defineType({
  name: 'keyFeature',
  type: 'document',
  title: 'Key Feature',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'image', title: 'Image', type: 'image'},
  ],
})
