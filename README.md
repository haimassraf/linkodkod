# linkodkod project

## My application is divided into two parts, CLIENT (REACT) and SERVER (EXPRESS)
The idea of ​​the app is to simulate "KOSHER INSTAGRAM", which is an app that displays posts that include a photo, description, and author
Of course, in order to see (and add) all the posts, you need to be registered in the system, only after logging in does the user receive a TOKEN which gives him the option to continue on the site.
The site is divided into two parts, LANDING PAGE and LAYOUT, where LANDING PAGE is responsible for the AUTH pages, and LAYOUT for the layers of the application itself.
The LAYOUT is divided into two main parts, HEADER and MAIN.
The HEADER is fixed and has a logo, slogan and buttons for LOGOUT, see all, and add.
On the main page in MAIN you can see all the posts displayed as tabs, as I click on a certain tab it opens for me on the entire MAIN.
Under each tab I will be shown two buttons, one to delete and the other to edit.
urrently all my DATA (POSTS and USERS) are stored in a local JSON file on the server

## If you want to run the app first go to /server and write npm i; npm start, and then go back to the client file /linkodkod and again write npm i; npm run dev