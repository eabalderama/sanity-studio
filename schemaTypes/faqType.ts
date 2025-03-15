import {defineType} from 'sanity'

export const faqType = defineType({
  name: 'faq',
  type: 'document',
  title: 'FAQ',
  fields: [
    {
      name: 'question',
      type: 'string',
      title: 'Question',
    },
    {
      name: 'answer',
      type: 'string',
      title: 'Answer',
    },
  ],
  preview: {
    select: {
      title: 'question', // This field will be used as the display title
      subtitle: 'answer', // Optional subtitle
    },
  },
})
