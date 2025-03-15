import {defineType} from 'sanity'

export const sectionType = defineType({
  name: 'section',
  type: 'document',
  title: 'Section',
  fields: [
    {
      name: 'section',
      title: 'Section',
      type: 'string',
      options: {
        list: [
          {title: 'Hero', value: 'hero-section'},
          {title: 'Key Features', value: 'key-feature-section'},
          {title: 'Faq', value: 'faq-section'},
          {title: 'Blog', value: 'blog-section'},
          {title: 'Contact Form', value: 'contact-form-section'},
          {title: 'Contact Details', value: 'contact-detail-section'},
        ],
        layout: 'dropdown',
      },
    },
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'image', title: 'Image', type: 'image'},
  ],
  preview: {
    select: {
      title: 'title', // This field will be used as the display title
      subtitle: 'section', // Optional subtitle
    },
  },
})
