import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Projects', value: 'projects' },
              { title: 'Building', value: 'building' },
              { title: 'Collabs', value: 'collabs' },
              { title: 'Marketplace', value: 'marketplace' },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required().max(2).min(1),
      description: 'Select up to 2 categories for this project',
    }),
    defineField({
      name: 'teamSize',
      title: 'Team Size',
      type: 'number',
      description: 'Number of people who collaborated on this project',
      validation: (Rule) => Rule.min(2).max(100),
      hidden: ({ document }) => !(document?.category as string[])?.includes('collabs'),
    }),
    defineField({
      name: 'roles',
      title: 'Your Role(s)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Your role(s) in this collaboration (max 3)',
      validation: (Rule) => Rule.max(3),
      hidden: ({ document }) => !(document?.category as string[])?.includes('collabs'),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      description: 'Upload up to 3 additional images to create a cinematic sliding effect on the project details page.',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'technologies',
      title: 'Tech Stack',
      type: 'object',
      fields: [
        defineField({
          name: 'languages',
          title: 'Languages',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'skill' }],
              options: {
                filter: 'category == "Language"',
              },
            },
          ],
        }),
        defineField({
          name: 'frontend',
          title: 'Frontend',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'skill' }],
              options: {
                filter: 'category == "Frontend"',
              },
            },
          ],
        }),
        defineField({
          name: 'backend',
          title: 'Backend',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'skill' }],
              options: {
                filter: 'category == "Backend"',
              },
            },
          ],
        }),
        defineField({
          name: 'database',
          title: 'Database',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'skill' }],
              options: {
                filter: 'category == "Database"',
              },
            },
          ],
        }),
        defineField({
          name: 'tools',
          title: 'Tools',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'skill' }],
              options: {
                filter: 'category == "Tools"',
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live Preview URL',
      type: 'url',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'content',
      title: 'Detailed Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'verified',
      title: 'Verified Project',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
