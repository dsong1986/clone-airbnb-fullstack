# airbnb clone
 this is danni‘s first full stack to clone airbnb website 

<<<<<<< HEAD
# client side
# install vite  react-router-dom 
=======
## client side
### install vite  react-router-dom 
>>>>>>> 7e125f32b96b08de20fc1709d5ba69a01cc943dd
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
  

# react snippets for Vs
    ## rcc
    ## np
    refer to https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets


# add google font 
https://daily-dev-tips.com/posts/using-google-fonts-in-a-tailwind-project/



 # add resuable css 
 refer to  https://tailwindcss.com/docs/adding-custom-styles


# Outlet  react-dom-route
refer to https://reactrouter.com/en/main/components/outlet


 ### git
 create a new repository on the command line
echo "# clone-airbnb-fullstack" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/dsong1986/clone-airbnb-fullstack.git
git push -u origin main






### Server Side
# getting started
1. node js express project
npm init
npm install express

2. install axios (in the diretory of client)
npm i axios

3. install CORS (server)
npm install cors
refer to https://www.npmjs.com/package/cors#simple-usage-enable-all-cors-requests


## Database   -mongodb
reference: https://www.mongodb.com/docs/drivers/node/current/quick-start/download-and-install/
1. install: npm install mongodb (inside server directory)
 npm install --global mongoosh

2. connect
mongodb+srv://ststns:<password>@cluster0.8jcmsc0.mongodb.net/?retryWrites=true&w=majority

reference https://www.mongodb.com/docs/drivers/node/current/quick-start/connect-to-mongodb/

3 npm install bcrypt

 ### TODO Lists

 4. .env
 refer to  https://www.npmjs.com/package/dotenv

 2. axios 
 install: npm install axios
 refer to  https://reflectoring.io/tutorial-guide-axios/
