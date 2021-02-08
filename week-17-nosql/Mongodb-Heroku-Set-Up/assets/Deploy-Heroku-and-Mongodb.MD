# Deploy with Heroku and Mondgodb Atlas

This guide provides instructions required to deploy your application to Heroku with Mongodb database using Mongodb Atlas. If you dont have an account please establish Mongodb and Heroku account.

## Create a Databse on Mongodb Atlas Dashboar.

You will create a database for your application first.

    1.  You will see something like the following image:

![clusters](../week-17-nosql/Mongodb-Heroku-Set-Up/assets/clusters.png)

    2.  Then, create a databse for your application, click the Collections button in your sandbox Clusters box.  If you have not created a database you will be taken to a page similar to the one below.

![explore](../week-17-nosql/Mongodb-Heroku-Set-Up/assets/clusters.png)

    3.  Provide a database name and a collection name, be creative of your naming convention.

    4.  When youre done creating your database and initial collection, the dashboard should looks like below.

![dashboard](../week-17-nosql/Mongodb-Heroku-Set-Up/assets/dashboard.png)

Cool! Your database has been set-up. Lets connect database to your application in production.

# Connect the Database to Heroku

In order for your Heroku application to use the Mongodb Atlas databse, you have to do the following steps:

    1.  Set up an environment variable in your Heroku application to hold the database's connection string.

    2.  Ensure that your application's code is set up and pointed to heroku environment variable, and if its not found--connect to local database instead.  This is important because that environment variable will only exist in production with Heroku.

## Set Up the Environment Variable in Heroku

Initially, you will add the database's connection string to an environment variable in Heroku.

    1.  To get started, make sure Heroku app was created for your application.  To create an app, navigate to your application's directory from the command line interface--type the command below:

        heroku create

    2.  Heroku will automatically kick-off and ask you to log-in with your credentials.

    3.  After logging-in navigate to the Settings tab on the right side of application's menu.  You will see a section "Config Vars" with a form to enter key/value field.  This area you will add your product database's information.  This time just type "MONGODb_URI in the key field.  For the value, we'll fetch the database connection string from MONGODB Atlas in the next step.  The image should look like below:

![config](../week-17-nosql/Mongodb-Heroku-Set-Up/assets/config.png)

## Open Your MongoDB Atlas Dashboard

Navigate to your MongoDB Atlas dashboard in a separate browser tab so you dont have to leave your Heroku page. Once there, locate the "Connect" button and click it. The image should like below.

![connect](../week-17-nosql/Mongodb-Heroku-Set-Up/assets/connect.png)

## Modal Dialog of MongoDB

Navigate to MongoDB Atlas connection interface dialog box, you should see three options shown below. Click on the "Connect your application" button.

![connect](../week-17-nosql/Mongodb-Heroku-Set-Up/assets/connect.png)

## Database Connection

Select the second option, "Connect your application". See below image.

![connect](../week-17-nosql/Mongodb-Heroku-Set-Up/assets/dialog.png)

## Copy Connection String

Click the "Copy" button.

![connect](../week-17-nosql/Mongodb-Heroku-Set-Up/assets/datacon.png)

With the connection string copied, navigate back to Heroku application settings and paste it into the "Value form field".

## Update the Connection String

Update the connection string to include your database name, password, and username. It should looked like below:

mongodb+srv://dbadmin:<password>$@cluster0.06lnd.mongodb.net/<dbname>?retryWrites=true&w=majority

Dont forget to update the above "Value" with your password and database name.

## Update the "Hide Config Vars"

Then click on the "Add" button in the config bars. The resulting image should bear resemblance below.

![connect](../week-17-nosql/Mongodb-Heroku-Set-Up/assets/add.png)

## Update Application Code for MongoDB Connection

Lastly, update the application's code to accomodate the Mongodb connection.

    1.  In VS code, go to your application and locate wher you connect to your database.  Once in there, update it so it looks like the following code:

        mongoose.connect("mongodb://localhost/obscure-waters", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });

    2.  With the above code, the mongoose.connect() command will attempt to use the environment first.  If it is running on Heroku, it will find that variable and use it.

    3.  Save your code and use the following Git commands to add, commit, and push it to Heroku.

        git add -A
        git commit -m "deploying to Heroku"
        # make sure that you are in your local master branch
        git push heroku master

    The End!
