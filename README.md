#linkodkod project

## My app is divided into two parts, CLIENT (REACT) and SERVER (EXPRESS)
The idea of ​​the app is to simulate "KOSHER INSTAGRAM", which is an app that displays posts that include a photo, description and author.
Of course. To see (and add) all the posts, you need to be registered in the system, only after logging in does the user receive a TOKEN that gives him the option to continue on the site.
The client site is divided into two parts, LANDING PAGE and LAYOUT, with LANDING PAGE responsible for the AUTH pages, and LAYOUT for the layers of the application itself.
The LAYOUT is divided into two main parts, HEADER and MAIN.
The HEADER is fixed and has a logo, the name of the logged-in user, a slogan and buttons for LOGOUT, See all and Add.
On the main, page in main you can see all the posts displayed as cards, when I click on a specific card it opens up the entire main. Under each tab I will be shown two buttons, one for deletion and the other for editing.
Currently, all my data (posts and users) is stored in a local JSON file on the server.

When we create or edit a new POST, there is an option to upload a local image, and with the EXPRESS-FILEUPLOAD library I save each new image on the server, and to display it I use EXPRESS-STATIC, this makes the site more convenient and flexible.

My server side works with EXPRESS, currently I have two main ROUTERS, POST-ROUTE (responsible for POST-CRUD) and AUTH ROUT (responsible for the login, registration and logout system). Of course all my CRUD functions go through the AUTH MIDDLE-WARE which checks whether my user has church inspiration (valid TOKEN)

My routers call CONTROLLERS where all the logic happens, and the controller calls SERVICE where the interaction with my database happens.
The server runs by default on port 3000

## If you want to run the application, first go to the /server file and type npm i; npm start, then go back to the /linkodkod client file and type npm i; npm run dev again.