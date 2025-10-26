import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Startseite',
  type: 'document',
  fields: [defineField({ name: 'hero', title: 'Hero', type: 'heroSection' })],
});
