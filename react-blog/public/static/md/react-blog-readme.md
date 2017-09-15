# React Blog

This project provides a responsive SEO friendly React isomorphic blog.

## Contents
- [Demo](#demo)
- [Code for this project](#code-for-this-project)
- [How to run](#how-to-run)
- [Configuration](#configuration)
- [Developing Blog Content](#developing-blog-content)
- [Content Recommendations and Explanations](#content-recommendations-and-explanations)

### Demo
The following link contains demo content for the blog. These examples are packaged into the current code base. [Demo](http://reactblog-jrossi.rhcloud.com/) 

### Code for this project
The code for this project is located on Github [here](https://github.com/jrossi227/react-blog)

### How to run 

1. Install Gulp - `npm install -g gulp`
2. `npm install` to install dependencies.
3. Run `gulp build-all` to build the code.
4. Run `gulp nodemon` to start the server.
5. Go to http://localhost:9080/
6. You can optionally run `gulp watch` to auto bundle your code changes on update.

### Configuration

The configuration for React Blog is stored in `config.js`
It has the following options:

- **port** - The port that your server is listening on, the default port is `9080`
- **baseUrl** - The baseUrl that is used for all Ajax requests. The hostname used in the baseUrl must be resolvable on the server side. You may need to update your servers host file to accomplish this. The default base url is `http://localhost:9080`
- **pageTitle** - The text that appears in the top left home link for the blog. The default value is `React Blog`
- **itemsPerPage** - The amount of list items to display per page. The The default value is `5`
- **maxPageButtons** - The maximum amount of paging buttons to display in list view before collapsing. The default value is `3`

### Developing Blog content

All Blog content is configured in `public/static/posts.json`. posts.json contains two fields **postListContent** and **posts**

#### postListContent
Contains three fields: 

- **header** - This is the header that appears in the post list view. This value is text only.
- **content** - This is the description that appears in the post list view. You may use html in this field.
- **metaDescription** - This is the meta description tag that is used for seo in list view. 

#### posts
Contains seven fields, some are optional: 

- **id** - A unique id for the article, this will not be seen by anyone.
- **slug** - The url format for the article post. This cannot contain spaces.
- **metaDescription** (Optional) - This is the meta description tag that is used for seo when the article is shown.
- **description** (Optional) - This is a string containing html content for your post. This should only be used if you are not including a file.
- **includes** (Optional) - This is a JSON array of include objects. 

    Each include object has the following fields:
    
    - **type** - Valid types are as follows:
        - **css** - custom styles to apply to the article. **Every article inherits bootstrap 3 css by default**.
        - **html** - custom html content for your post. 
        - **js** - custom javascript content for your post 
        - **md** - a markdown file for your post
        - **jsx** - a React component to use for your post. You can write custom React components and import them into your React component using commonJS. You can only import one jsx file in the includes for a post.
    - **path** - The absolute path in reference to the `public/directory` eg. `/static/md/react-blog.md` 
    
- **author** - This is a JSON object with two fields. Each field is optional, but you must include an author object even if its empty.
    - **photo** - The absolute path in reference to the `public/directory` for an image eg. `/images/jonathan.jpg` 
    - **name** - A text value for an authors name

### Content Recommendations and Explanations 

The Blog currently has three primary options for rendering content.

1. [Using a markdown file.](#using-a-markdown-file)
2. [Using static html, css and js.](#using-static-html,-css-and-js)
3. [Using React Bootstrap and your own React components for dynamic content.](#using-react-bootstrap-and-your-own-react-components-for-dynamic-content)

#### Using a markdown file
This is the easiest way to generate custom markup. Include all of your markdown in one file. The React Blog application will parse your Markdown file and generate styled html content that is displayed to the user. See the first post in `public/static/posts.json` for a sample configuration.

#### Using static html, css and js
You can include custom html, css and js for a blog post. If you wish to import a library to use in your js file(JQuery) then you must do this asynchronously. See the second post in `public/static/posts.json` for sample code.

#### Using React Bootstrap and your own React components for dynamic content
You may use custom React components for a blog post. This blog application was built using React Bootstrap and you may use React Bootstrap components out of the Box. See the third post in `public/static/posts.json` for sample code.

##### React Bootstrap documentation
React Bootstrap is an ongoing project so documentation you encounter online may not be applicable to the version that this Blog is currently using. We have bundled the version that we are using with this repo. To generate the documentation you can do the following:

1. Go to `react-bootstrap-0.26.4`
2. run `npm run docs` and navigate your browser to `http://localhost:4000/components.html`.
3. You should now be able to view all of the components and sample code. You can read `react-bootstrap-0.26.4/docs/README.md` for more information.