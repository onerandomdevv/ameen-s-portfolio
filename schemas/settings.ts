import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroBanners',
      title: 'Hero Banners',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Upload high-resolution images for the Hero Slider. Recommended size: 1920x1080px (16:9). The Cinematic Ken Burns effect works best with high-quality landscape images.',
    }),
    defineField({
      name: 'aboutImages',
      title: 'About Section Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Images for the interactive slider in the About section.',
    }),
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'Ameen Portfolio',
    }),
  ],
})
