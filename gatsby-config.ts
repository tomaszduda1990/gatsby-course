import type { GatsbyConfig } from "gatsby";
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-workplace`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [ 
  "gatsby-plugin-styled-components",    
  'gatsby-plugin-image',
  {
  resolve: 'gatsby-plugin-react-svg',
  options: {
    rule: {
      include: `/svg/`
    }
  }
<<<<<<< HEAD
}, 
{
  resolve: 'gatsby-source-sanity',
  options: {
    projectId: '7lrtv4r5',
    dataset: 'production',
    watchMode: true,
    token: process.env.SANITY_TOKEN
  }
}
]
=======
}]

>>>>>>> 8bfc0297107c61b7444d01f814f8dc2d5bf1bdac
};

export default config;
