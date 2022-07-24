# Data Fetching

## What's different than regular React?

Unlike React, which only has the capability for client-side fetching (i.e. getting data after the page has been generated through componentDidMount, useEffect, etc.), Next.JS has the ability to perform data-fetching on the server side. Pre-fetching inside getStaticProps allows the data to be ready to be displayed on the page before it's rendered. In getStaticProps you have the ability to run Node.js code such as 'fs' which can read files, and is not available to run on the browser. 

Revalidate is a property passed into getStaticProps which tells Next.JS to continually regenerate a page every X seconds, even after build and deployment. This is useful for various cases in which data might be more/less dynamic.

getStaticPaths is a built in function which tells Next.JS exactly how many paths to pre-generate, in the case the page contains a dynamic path. If the list of paths to pre-generate is ever-changing, the property 'fallback' on the function's return object can be set to true, to ensure that if a user navigates to a non-prerendered path, it will fetch the data for that new path just in time.

getServerSideProps runs on the server, not during the build process, and can be used to pre-render on the fly, as needed. This is useful for a page that might rely on a very specific data for the url param (e.g. user cookies to load a user page, and ensure it's the correct user), which would be too specific to pre-generate a path for.

Likewise, sometimes the standard method of client side fetching is necessary or useful. If there's a specific part of the page whose data is more dynamic than other parts, or the page altogether has very dynamic data, then it would be good to fetch new data while the page is open. Again, this is achieved through the useEffect hook or componentDidMount in class components, but I also learned about SWR. The useSWR hook not only simplifies fetching data and returning it into one single function, but allows data to be fetched again when losing and regaining browser tab focus.

## What I learned in this Section

- getStaticProps and ISR ('/pages/index.js')
- getServerSideProps ('/pages/[uid.js]')
- getStaticPaths ('/pages/products/[id.js]', '/pages/user-profile.js')
- combining client-side and server-side data fetching ('/pages/last-sales.js')

Credit goes to Maximilian Schwarzmuller's Udemy course ["Next.js & React - The Complete Guide"](https://www.udemy.com/share/104coM3@pGgssWaMY2gLx2vIPm8UH0E0NBGERwYVmvjCTz5Yc_5r_jDYCgQYGcCFTkIUDClHbA==/) for my learning of this content
