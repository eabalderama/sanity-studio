import {defineType} from 'sanity'

export const contactFormSubmissionsType = defineType({
  name: 'contactFormSubmissions',
  type: 'document',
  title: 'Contact Form Submissions',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'email', title: 'Email', type: 'string'},
    {name: 'subject', title: 'Subject', type: 'string'},
    {name: 'company', title: 'Company', type: 'string'},
    {name: 'message', title: 'Message', type: 'text'},
    {
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name', // This field will be used as the display title
      subtitle: 'email', // Optional subtitle
    },
  },
})
