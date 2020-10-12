# DataServer - Exercise

## REST workout

Now we wanna train again our REST call muscle. If we can REST, we will rest in more peace.

  - Find the given server.js file
    - here we got some small Express app... and a magical array of fruits

  - Do `npm i express` to install express

  - Create the classical 5 routes to manage your fruits
    - Setup two GET routes (one for getting all & one for getting one specific fruit)
    - Setup POST, PATCH, DELETE routes for changing fruits
      - PATCH route: Allow updating of a single field (name / color) or both fields in one call!
    - Setup body parsing (`app.use( express.json() )`)
      - only that way someone can send data (= a body) to our API...

  - Do route testing with RESTED / POSTMAN
      - Perform a POST & PATCH call with sending in some fields
      - Console log the body in your POST & PATCH routes

  - Bonus: Provide a route /fruits/plain
      - Instead of your array of fruit objects: return an array of just the fruit names!
        - example: `['Banana', 'Cherry', 'Lemon']`
        - you remember what to use, if you wanna convert each element in an array into something else... right? :) I just say: Map it or leave it

  - Bonus: Get me an array of all fruit colors we have
      - Each color should only be included ONCE in the array, so we don't get an array with duplicates. 
        - e.g. we do not want to have `['green', 'green', 'orange']`, we want `['green', 'orange']` instead
      - Hint: You can do this in several ways, like always
