export default function PortfolioPage() {
  return (
    <div>
      <h1>Portfolio page</h1>
    </div>
  );
}

/* Notes:
    - Creating a new directory and creating this file with the name index.js
      tells Next.JS to create a path '/portfolio' to navigate to. The difference between
      this and about.js is now, a .js file that we create on the same level as this will
      be treated as a nested path. (e.g. 'https://[baseURL]/portfolio/[newFile]) 

*/
