import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Language', value: 'Language' },
          { title: 'Frontend', value: 'Frontend' },
          { title: 'Backend', value: 'Backend' },
          { title: 'Database', value: 'Database' },
          { title: 'Tools', value: 'Tools' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Icon/Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
