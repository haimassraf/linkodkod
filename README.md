# linkodkod project

## My application is divided into two parts, CLIENT (REACT) and SERVER (EXPRESS)
Currently what the application does is simply display a HEADER - with a logo and text inside,
and the HOME-PAGE itself which is to fetch all the posts from the server and simply show them to me by calling a component called POST for each post which receives the appropriate post as a prop and shows them to me.
My server - EXPRESS, currently has one ROUTE of POSTS which contains two GET requests, one GET-ALL and the other GET-BY-ID.
The request is passed to the CONTROLLER which does the logic and through the SERVICE it fetches the data from the DB (currently a JSON file)

## If you want to run the app first go to /server and write npm i; npm start, and then go back to the client file /linkodkod and again write npm i; npm run dev