# Data Fetching Project - Events Page

## Overview

For this project, we took the same events page from the previous project and added SSG and ISR to the pages. This was a quick project, and not completely in depth as the previous, but still has a lot of important concepts to remember, one being how to optimize your pre-generation. For example, in the home page, it would make sense to not only get the featured events only, but also only pregenerate every so often (by adding a larger revalidate property to the getStaticProps object). In the All Events page and specific Event page, we also used getStaticProps, and ensured to revalidate at appropriate intervals. On the event page, we also used getStaticPaths to at least pregenerate featured pages, allowing the rest of the paths to generate on the fly using {fallback: true}. The only page to rely on SSG was the Filtered Events Page, which took the filter from the url query and fetched data as needed. We did this because there are a large number of date combinations and it wouldn't be ideal to attempt to pre-generate all of those possibilities.

I should note, the last video in this section entailed refactoring the FilteredEventsPage to use client-side rendering. I opted not to make this change, as I found the first method (SSG) to be a more optimal, readable approach.

## What I used in this Project

- getStaticProps and ISR ('/pages/index.js', '/pages/events/index.js', '/pages/events/[eventId.js]')
- getServerSideProps ('/pages/events/[...slug.js]')
- getStaticPaths ('/pages/events/[eventId.js]')

Credit goes to Maximilian Schwarzmuller's Udemy course ["Next.js & React - The Complete Guide"](https://www.udemy.com/share/104coM3@pGgssWaMY2gLx2vIPm8UH0E0NBGERwYVmvjCTz5Yc_5r_jDYCgQYGcCFTkIUDClHbA==/) for my learning of this content
