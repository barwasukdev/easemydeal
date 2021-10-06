import React from 'react';
import BlogPost from '../Blogpost';
import Layout from '../Layout';

/**
* @author
* @function Post
**/

const Post = (props) => {

    console.log(props);


  return(
        <Layout>
          <BlogPost {...props} />
        </Layout>
   )

 }

export default Post;