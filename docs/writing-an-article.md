# Writing an article


## Adding frontmatter to your article

Frontmatter follows [Hugo's standards](https://gohugo.io/content-management/front-matter/).

Please refer to `contentlayer.config.ts` for an up to date list of supported fields. The following fields are supported:

```
title (required)
date (required)
tags (optional)
lastmod (optional)
draft (optional)
summary (optional)
images (optional)
authors (optional list which should correspond to the file names in `data/authors`. Uses `default` if none is specified)
layout (optional list which should correspond to the file names in `data/layouts`)
canonicalUrl (optional, canonical url for the post for SEO)
```

Here's an example of a post's frontmatter:

```
---
title: 'Introducing Tailwind Nexjs Starter Blog'
date: '2021-01-12'
lastmod: '2021-01-18'
tags: ['next-js', 'tailwind', 'guide']
draft: false
summary: 'Looking for a performant, out of the box template, with all the best in web technology to support your blogging needs? Checkout the Tailwind Nextjs Starter Blog template.'
images: ['/static/images/your-article-name/mountains.jpg', '/static/images/your-article-name/toronto.jpg']
authors: ['default', 'sparrowhawk']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/introducing-tailwind-nextjs-starter-blog
---
```

### Configuring canonical URLs for your article

If your article was originally published on another site, you can specify the canonical URL in the frontmatter. This will help search engines to understand that the article was originally published on another site and avoid duplicate content issues. Simply add the `canonicalUrl` field to your frontmatter.

## Selecting a layout for your article
- There are currently 3 post layouts available: `PostLayout`, `PostSimple` and `PostBanner`. `PostLayout` is the default 2 column layout with meta and author information. `PostSimple` is a simplified version of `PostLayout`, while `PostBanner` features a banner image.

## Adding images to your article
You can add images to your article by specifying the image path in the `images` field in the frontmatter. The image path should be relative to `public/static/images/your-article-name/`. For example, if you have an image at `public/static/images/your-article-name/mountains.jpg`, you can add it to your article by specifying `images: ['/static/images/your-article-name/mountains.jpg']` in the frontmatter.

## Adding videos to your article
You can add videos to your article by uploading it to YouTube or serving it in the public folder

For YouTube videos (recommended approach):
1. Get the video ID from the YouTube URL. For example, if the YouTube URL is `https://www.youtube.com/watch?v=9bZkp7q19f0`, the video ID is `9bZkp7q19f0`.
2. Add the `<YouTube id="your-video-id"/>` component to your article
3. Refresh the page and you should see the video embedded in your article

For videos in the public folder:
1. Add the video to the `public/static/blog/your-article-name/` folder
2. Add the `<VideoAtom src="/static/blog/a-declarative-approach-to-rn-space-navigation/demo.mp4" type="video/mp4"/>` component to your article
3. Refresh the page and you should see the video embedded in your article

> Try to avoid adding large videos to the public folder as it will increase the build time and bundle size of the blog. If you need to add a large video (>5MB), please upload it to YouTube instead. If your videos are small and don't require audio, consider converting them to GIFs instead.

## Adding JSX or React components to your article

You can pass your own JSX code or React component by specifying it in `components/MDXComponents.js`. You can then use them directly in the `.mdx` or `.md` file. By default, a custom link, `next/image` component, table of contents component and Newsletter form are passed down. Note that the components should be default exported to avoid [existing issues with Next.js](https://github.com/vercel/next.js/issues/51593)

