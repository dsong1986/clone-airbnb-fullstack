# airbnb clone
 this is danni‘s first full stack to clone airbnb website 

# client side
## install vite  react-router-dom 
    npm i vite
    npm i react-router-dom
    npm i react-icons

## create a project with react vite and tailwindcss
    refer to https://tailwindcss.com/docs/guides/vite

    npm create vite@latest client -- --template react
    cd client
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    npx install
    npx run dev
  
## Outlet  react-dom-route
refer to https://reactrouter.com/en/main/components/outlet

## axios 
 install: npm install axios
 refer to  https://reflectoring.io/tutorial-guide-axios/





# Server Side
## getting started, install all packages
1. node js express project
npm init
npm install express

2. install axios (in the diretory of client)
npm i axios

3. install CORS (server)
npm install cors
refer to https://www.npmjs.com/package/cors#simple-usage-enable-all-cors-requests

4. npm install bcrypt (for password )

5. image downloader
refer to https://www.npmjs.com/package/image-downloader


## Database   -mongodb
reference: https://www.mongodb.com/docs/drivers/node/current/quick-start/download-and-install/
1. install: npm install mongodb (inside server directory)
 npm install --global mongoosh

2. connect
mongodb+srv://ststns:<password>@cluster0.8jcmsc0.mongodb.net/?retryWrites=true&w=majority

reference https://www.mongodb.com/docs/drivers/node/current/quick-start/connect-to-mongodb/

## jason web token (login)
npm install jsonwebtoken
refer to: https://www.npmjs.com/package/jsonwebtoken
reference https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/

## createContext & useContext
refer to: https://dmitripavlutin.com/react-context-and-usecontext/

## install cookie parser
npm install cookie-parser

# Others
## react snippets for Vs
    ## rcc
    ## np
    refer to: https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets

## add google font 
refer to: https://daily-dev-tips.com/posts/using-google-fonts-in-a-tailwind-project/

## add resuable css 
refer to: https://tailwindcss.com/docs/adding-custom-styles

## git
create a new repository on the command line
echo "# clone-airbnb-fullstack" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/dsong1986/clone-airbnb-fullstack.git
git push -u origin main

## .env
refer to  https://www.npmjs.com/package/dotenv


# Todo List
1. think about jwt