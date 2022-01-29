Steps followed -
1.Created a backend using Nodejs which is connected to Dynamo db installed locally.
2.Front end is done using React Js, here we have search bar, and has a table which displays title and description only.
3.When you enter anything in the searchbar this does prefix search on the database and return the Title which starts with the entered value.
4.When you click on any of the displayed titles it will redirect to a static page and also a url gets appended in the database.

--- Client folder has the frontend part and server has the backend part.
--- I have used Axios to send the request and fetch the data from the server(Post request).
--- I have used ''Bordertest'' as the table name in our database(DynamoDB).
--- The frontend is running at 3000 port and backend at 5000 port and Dynamo db at 8000 port.


Note : I have used a Movie dataset which was available online out of the available fields I have used three fields
  --- Title
  --- Description
  --- ImageUrl(When you click the title the image url gets updated to www.google.com and as required user is directed to a static page).

I have attached the screenshots of the user interface as well as the Image url updation in my AWS CLI.
