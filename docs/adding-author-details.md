# Adding author details

You can add your author details to the `data/authors` directory. The file name is your ID, i.e., it should be the same as the `slug` field in the frontmatter of your blog post. For example, if the `slug` field in your blog post is `john-doe`, then the author details should be added to `data/authors/john-doe.md`.

 - e.g. `data/authors/your-name.mdx`
      ```
      ---
      name: Your Name
      avatar: /static/images/authors/sparrowhawk-avatar.jpg
      occupation: Wizard of Earthsea
      company: Earthsea
      twitter: https://twitter.com/sparrowhawk
      linkedin: https://www.linkedin.com/sparrowhawk
      ---

      At birth, Ged was given the child-name Duny by his mother. He was born on the island of Gont, as a son of a bronzesmith. His mother died before he reached the age of one. As a small boy, Ged had overheard the village witch, his maternal aunt, using various words of power to call goats. Ged later used the words without an understanding of their meanings, to surprising effect.

      The witch knew that using words of power effectively without understanding them required innate power, so she endeavored to teach him what little she knew. After learning more from her, he was able to call animals to him. Particularly, he was seen in the company of wild sparrowhawks so often that his "use name" became Sparrowhawk.
      ```

Add your author avatar to `public/static/images/authors/your-name-avatar.jpg`.
