export const PROFILE_TEMPLATES = [
	{
		id: 'basic-profile',
		name: 'Basic Profile',
		template: `
      <html>
      <body>
        <div class="profile-basic">
          <h1>{{author.profile.name}}</h1>
          <p>{{bio}}</p>
          <img src="{{avatarUrl}}" alt="avatar" class="avatar"/>
        </div>
      </body>
      </html>
      `,
		tags: ['#basic', '#profile'],
	},
	{
		id: 'extended-profile',
		name: 'Extended Profile',
		template: `
      <html>
      <body>
        <div class="profile-extended">
          <h1>{{name}}</h1>
          <h3>{{location}}</h3>
          <p>{{bio}}</p>
          <div>Followers: {{followersCount}}</div>
          <img src="{{avatarUrl}}" alt="avatar" class="avatar"/>
        </div>
      </body>
      </html>
      `,
		tags: ['#extended', '#profile'],
	},
]

export const SHORT_POST_TEMPLATES = [
	{
		id: 'minimal-post',
		name: 'Minimalist Post',
		template: `
      <html>
      <body>
        <div class="post-minimal">
          <h2>{{title}}</h2>
          <p>{{content}}</p>
        </div>
      </body>
      </html>
      `,
		tags: ['#minimal', '#post'],
	},
	{
		id: 'image-post',
		name: 'Image Post',
		template: `
      <html>
      <body>
        <div class="post-image">
          <h2>{{title}}</h2>
          <img src="{{imageUrl}}" alt="post image"/>
          <p>{{content}}</p>
        </div>
      </body>
      </html>
      `,
		tags: ['#image', '#post'],
	},
	{
		id: 'author-post',
		name: 'Author Post',
		template: `
      <html>
      <body>
        <div class="post-author">
          <h2>{{title}}</h2>
          <p>{{content}}</p>
          <div>Author: {{author}}</div>
        </div>
      </body>
      </html>
      `,
		tags: ['#author', '#post'],
	},
]

export const LONG_POST_TEMPLATES = [
	{
		id: 'informational-long-post',
		name: 'Informational Long Post',
		template: `
   <html>
    <head>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&display=swap');
            *{
            margin: 0;
            border: 0;
            padding: 0;
            outline: 0;
            font-family: 'Rubik', sans-serif;
            }
            *, *:after, *:before{
            box-sizing: border-box;
            }
            html{
            position: relative;
            overflow: hidden;
            font-size: 16px;
            }
            @media screen and (max-width: 768px) {
            html {
            font-size:15px
            }
            }
            @media screen and (max-width: 465px) {
            html {
            font-size:14px
            }
            }
            body{
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            background: #f1f3f6;
            }
            .card{
            width: 25rem;
            height: auto;
            background: #fff;
            border-radius: 1.5rem;
            padding: 1.5rem;
            overflow: hidden;
            position: relative;
            }
            .card-img-holder{
            width: 100%;
            height: auto;
            position: relative;
            }
            .card-img-holder img{
            width: 100%;
            height: auto;
            max-height: 15rem;
            object-fit: cover;
            border-radius: 1.5rem;
            }
            .blog-title{
            color: #22215B;
            padding: 1rem 0;
            font-size: 1.5rem;
            }
            .description{
            padding: 1rem 0;
            color: #22215B80;
            font-size: 1rem;
            }
            .blog-time{
            font-size: .8rem;
            color: #22215B;
            }
            .options{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1rem;
            }
            .options span{
            font-weight: 600;
            color: #22215B;
            }
            .btn{
            font-size: 1rem;
            padding: .5rem 1rem;
            border-radius: .5rem;
            font-weight: 400;
            background: #EEF7FE;
            color: #22215B;
            cursor: pointer;
            }
        </style>
    </head>
    <body>
        <div class="card">
            <div class="card-img-holder">
                <img src="{{author.profile.banner}}" alt="Blog image">
            </div>
            <h3 class="blog-title">Author: {{displayName author.profile}}</h3>
            <span class="blog-time"> {{author.profile.website}}</span>
            <p class="description">
              {{author.profile.about}}
            </p>
            <div class="options">
                <span>
                Read Full Blog
                </span>
                <button class="btn">Blog</button>
            </div>
        </div>
    </body>
</html>
      `,
		tags: ['#informational', '#longpost'],
	},
	{
		id: 'sectioned-long-post',
		name: 'Sectioned Long Post',
		template: `<html>
    <head>
        <style>
            @import url('https://fonts.googleapis.com/css?family=Heebo:400,700|Open+Sans:400,700');
            :root {
            --color: #3c3163;
            --transition-time: 0.5s;
            }
            * {
            box-sizing: border-box;
            }
            body {
            margin: 0;
            min-height: 100vh;
            font-family: 'Open Sans';
            background: #fafafa;
            }
            a {
            color: inherit;
            }
            .cards-wrapper {
            display: grid;
            justify-content: center;
            align-items: center;
            height: 100%;
            }
            .card {
            font-family: 'Heebo';
            --bg-filter-opacity: 0.5;
            background-image: linear-gradient(rgba(0,0,0,var(--bg-filter-opacity)),rgba(0,0,0,var(--bg-filter-opacity))), var(--bg-img);
            height: 20em;
            width: 15em;
            font-size: 1.5em;
            color: white;
            border-radius: 1em;
            padding: 1em;
            /*margin: 2em;*/
            display: flex;
            align-items: flex-end;
            background-size: cover;
            background-position: center;
            box-shadow: 0 0 5em -1em black;
            transition: all, var(--transition-time);
            position: relative;
            overflow: hidden;
            border: 10px solid #ccc;
            text-decoration: none;
            }
            .card:hover {
            transform: rotate(0);
            }
            .card h1 {
            margin: 0;
            font-size: 1.5em;
            line-height: 1.2em;
            }
            .card p {
            font-size: 0.75em;
            font-family: 'Open Sans';
            margin-top: 0.5em;
            line-height: 2em;
            }
            .card .tags {
            display: flex;
            }
            .card .tags .tag {
            font-size: 0.75em;
            background: rgba(255,255,255,0.5);
            border-radius: 0.3rem;
            padding: 0 0.5em;
            margin-right: 0.5em;
            line-height: 1.5em;
            transition: all, var(--transition-time);
            }
            .card:hover .tags .tag {
            background: var(--color);
            color: white;
            }
            .card .date {
            position: absolute;
            top: 0;
            right: 0;
            font-size: 0.75em;
            padding: 1em;
            line-height: 1em;
            opacity: .8;
            }
            .card:before, .card:after {
            content: '';
            transform: scale(0);
            transform-origin: top left;
            border-radius: 50%;
            position: absolute;
            left: -50%;
            top: -50%;
            z-index: -5;
            transition: all, var(--transition-time);
            transition-timing-function: ease-in-out;
            }
            .card:before {
            background: #ddd;
            width: 250%;
            height: 250%;
            }
            .card:after {
            background: white;
            width: 200%;
            height: 200%;
            }
            .card:hover {
            color: var(--color);
            }
            .card:hover:before, .card:hover:after {
            transform: scale(1);
            }
            .card-grid-space .num {
            font-size: 3em;
            margin-bottom: 1.2rem;
            margin-left: 1rem;
            }
            .info {
            font-size: 1.2em;
            display: flex;
            padding: 1em 3em;
            height: 3em;
            }
            .info img {
            height: 3em;
            margin-right: 0.5em;
            }
            .info h1 {
            font-size: 1em;
            font-weight: normal;
            }
            /* MEDIA QUERIES */
            @media screen and (max-width: 1285px) {
            .cards-wrapper {
            grid-template-columns: 1fr 1fr;
            }
            }
            @media screen and (max-width: 900px) {
            .cards-wrapper {
            grid-template-columns: 1fr;
            }
            .info {
            justify-content: center;
            }
            .card-grid-space .num {
            /margin-left: 0;
            /text-align: center;
            }
            }
            @media screen and (max-width: 500px) {
            .cards-wrapper {
            padding: 4rem 2rem;
            }
            .card {
            max-width: calc(100vw - 4rem);
            }
            }
            @media screen and (max-width: 450px) {
            .info {
            display: block;
            text-align: center;
            }
            .info h1 {
            margin: 0;
            }
            }     
        </style>
    </head>
    <body>
    
        <section class="cards-wrapper">
            <div class="card-grid-space">
                <a class="card" href="{{author.profile.website}}" style="--bg-img: url({{author.profile.banner}})">
                    <div>
                        <h1>{{displayName author.profile}}</h1>
                        <p>{{author.profile.about}}</p>
                        <div class="date">{{formatDate created_at}}</div>
                        <div class="tags">
                            <div class="tag">Blog</div>
                        </div>
                    </div>
                </a>
            </div>        
            <!-- https://images.unsplash.com/photo-1520839090488-4a6c211e2f94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38951b8650067840307cba514b554ba5&auto=format&fit=crop&w=1350&q=80 -->
        </section>
    </body>
</html>`,
		tags: ['#sectioned', '#longpost'],
	},
]

export const PRODUCT_TEMPLATES = [
	{
		id: 'basic-product',
		name: 'Basic Product',
		template: `
      <html>
      <body>
        <div class="product-basic">
          <h1>{{name}}</h1>
          <p>{{description}}</p>
          <div>Price: {{price}}</div>
          <img src="{{imageUrl}}" alt="product image"/>
        </div>
      </body>
      </html>
      `,
		tags: ['#basic', '#product'],
	},
	{
		id: 'detailed-product',
		name: 'Detailed Product',
		template: `
      <html>
      <body>
        <div class="product-detailed">
          <h1>{{name}}</h1>
          <p>{{description}}</p>
          <ul>
            {{#each features as |feature|}}
              <li>{{feature}}</li>
            {{/each}}
          </ul>
          <div>Price: {{price}}</div>
          <img src="{{imageUrl}}" alt="product image"/>
        </div>
      </body>
      </html>
      `,
		tags: ['#detailed', '#product'],
	},
]
