# metadata

All the SEO meta tags you might need in one React component.

# Why?

I can NOT entirely say that there's a motivation behind building this, to be honest. I was just tired of having to copy the same meta tags that I've been using for my blog whenever I share an article on the internet &mdash; mostly on social platforms.

# What are the "perks" of using it?

Well... for one, you won't have to copy meta tags from one component to the other.

And if you're that person that goes: **"I can just build this myself"**. Well, you're in luck. Because yo don't have to do that.

`<Metadata />` accepts a `children` prop, so you can still add other HTML tags that goes into the `<head>` element.

```jsx
<Metadata>
  <link href="style.css" />
</Metadata>
```

# Usage

You can use the component by installing it from the NPM registry.

```bash
yarn add three-data
```

Import the component into any of your pages, or wherever it is needed like so:

```jsx
import { MetaData } from "three-data";

export default function pageComponent() {
  return (
    <>
      <MetaData
        pageTitle="Homepage"
        url="your-website.com"
        description="description of the page"
        previewImage="path-to-image or a remote link to where it is located."
      />
      // rest of the page content falls below
    </>
  );
}
```

`pageTitle`, `url`, and `description` are required props. `previewImage` is optional if you decide that you do not want to have a social sharing card that is rendered with an image.

I've tested `MetaData` and this is what your website metadata will look like on Google search, Facebook &mdash; and meta related websites i.e LinkedIn &mdash; and Twitter.

Below are some screenshots of my website's preview

| Facebook                                                                                                                                      | Twitter                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Preview of Caleb's website on Facebook](https://res.cloudinary.com/meje/image/upload/v1688397658/oss-packages/metadata/facebook_yqn4ea.png) | ![Preview of Caleb's website on Twitter](https://res.cloudinary.com/meje/image/upload/v1688397658/oss-packages/metadata/twitter_ueklo5.png) |

| Google Search                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![Preview of Caleb's website on Google Search](https://res.cloudinary.com/meje/image/upload/v1688397658/oss-packages/metadata/google_dbr0mj.png) |

Try sharing your link on Slack or Discord, it works fine there too.

Another optional prop you might want to consider using is `contentType`. Under the hood, it uses the `og:type` meta tag attribute.

This attribute helps you describe the type of content you share. Is it a blog post, pictures, videos or whatever you want really. By default the value is "website", since it is assumed that you're using this component on the web.

There's a list that covers all the available values [here](https://ogp.me/#types)

# Usage with Next.js

When you try to use `<MetaData />` in a Next.js project, you might end up with an error similar to the one in the image below

![Hydration error with Next.js when you try to use MetaData](https://res.cloudinary.com/meje/image/upload/v1688397658/oss-packages/metadata/nextjs-hydration-error_k2xgrc.png)

The reason you're seeing this error could be because you have `_document.ts|js` file in `/pages` and you've imported `<Head />` from `"next/document``.

```tsx
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

Removing it from the markup fixes the error you're seeing.

Athough, when you follow this approach, You'd still end up with some hydration error in React, as the Next.js Head component does not match the one that `MetaData` extends.

It is recommended that you use the optional prop &mdash; `next` if you want compatibility with Next.js like so:

```tsx
<MetaData
  next
  url="website.com"
  pageTitle="name of site"
  description="Some description of your website"
>
  <link rel="icon" href="./icon.svg" />
</MetaData>
```

# Contributing

Want to contribute? Please feel free to create an issue or submit a Pull Request.

# License

[MIT](LICENSE)
