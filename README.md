# Cocktails Project

## Group members- Josie Cantu, Taylor Reichner, Vance Mills, Stephen Tamiesie.

# Description
- This project is designed to help people make cocktails! Users will be able to search cocktails by name or ingredient and see a list of the ingredients, measurements, and a description of how to make them. As an added bonus they will be able to get a random cocktail! This project is designed to help non-bartenders make drinks correctly and find out what drinks they are able to make with the type of alcohal in their home.

# User Story
- User will need to sign up when they first enter the site, following first sign up users will be able to log into their account with their credentials. After getting signed in users will be able to navigate to the search page, here users will be able to seach by drink, ingredient or select the random button to get a drink. If user wants to save a drink to look at later they can select the add to menu button. To see users full menu you can select the menu page and see whats on their menu. While in the menu page you can select a cocktail picture the see the details about how the drink is made and more!

# TechStack
- PostgreSQL, Express, Node, React, JavaScript, HTML, CSS

# Dev Tools
- Jest, Postman, PgAdmin, Heroku, Netlify, Github, Slack, Miro

# Endpoints
- get'/cocktails' - gets all cocktails from API
- get'/api/search' - gets cocktails based on user query of cocktail name
- get'/api/ingredients' - gets cocktails based on user query of contail ingredient
- get'/api/details/:id' - gets a large list of items about one cocktail from api
- get'/api/menu' - gets a list of menu items from a single owner
- get'/api/menu/:id_drink' - finds id of menu item
- post'/api/menu' - puts a item into a users menu 
- delete'/api/menu/:id' - deletes item from users menu
- put'/api/menu/:id - changes times drank of a menu item

# Data Schemas
- CREATE TABLES users - creates table for login and assigns owneer id
- CREATE TABLE cocktails - grabs specific data from api.

While this project was predominantly mob programmed each developer owned specific sections.
Josie Cantu - Wrote the authentication, CRUD routes, and the React frontend with CSS.
Taylor Reichner - Managed the Github repo, utils functions and final touches.
Vance Mills - Took charge of testing the API and fundamental logic on the frontend.
Stephen Tamiesie - In charge of the router paths and navigation bar in React.


