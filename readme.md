## What it includes

* Sequelize user model/migration
* Settings for PostgreSQL
* Passport and passport-local for authentication
* Sessions to keep user logged in between pages
* Flash messages for errors and successes
* Passwords that are hashed with BCrypt
* EJS templating and EJS layouts

### User Model

| Column Name | Data Type | Notes |
|------------------|-----------------|--------------------------------|
| id | Integer | Serial Primary Key |
| createdAt | Date | Auto generated |
| updatedAt | Date | Auto generated |
| firstName | String | - |
| lastName | String | - |
| userName | String | - |
| email | String | Must be unique && used for login |
| password | string | hashed |
| photoUrl | String | profilepic | 
| admin | boolean | default:false |
| bio | text | |
| birthday | date | - |


### Default Routes

| Method | Path | Location | Purpose |
| ------ | ----------------| ------- |
| Get | / | index.js | home page |
| get | * | index.js | render error/404 page |
| GET | /auth/login | auth.js | Login form |
| GET | /auth/signup | auth.js | Signup form |
| POST | /auth/login | auth.js | Login user |
| POST | /auth/signup | auth.js | Creates User |
| GET | /auth/logout | auth.js | Removes session info |
| GET | /profile | profile.js | Regular User Profile |
| GET | /profile/admin | profile.js | Admin User Profile |

## Steps to use

#### 1 . Clone repo with diff name

~~git clone <repo_link> <new_name>

#### 2. Install node modules

~~npm install

#### 3. Customize with new project name

Remove defaulty type stuff. Some areas to consider are:

* Title in layout.ejs
* Logo in NavBar
* Description/Repo Link in `package.json`
* Remove boilerplate's README content and replace with your own

#### 4. Create a new database for the new project

~~createdb <new_db_name>

#### 5. Update config.json

* Change the database name

#### 6. Check the models and migrations for relevance to your project's needs

If project does not require birthdate, don't keep it

#### 7. Run the migrations

sequelize db:migrate

#### 8. Add a .env file with the following fields:

* SESSON_SECRET: Can be any random string

#### 9. Run server, make sure it works

nodemon

#### 10. Create a NEW repository on github
*Create a new repo on github acc(via gui)
* delete teh old remote to origin
git remote remove origin

* add the new repo remote