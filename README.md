# back_end

# pintereach_backend

Deployment url: "https://te-bw-pintereach-backend.herokuapp.com/"

## Authorization

### POST /users/signup

This creates a new user in the database, and returns both the _user object_ and _user id_

| Name     | Requried | Type   | Unique? | Description              |
| -------- | -------- | ------ | ------- | ------------------------ |
| username | yes      | string | yes     | the username of the user |
| password | yes      | string | no      | the password of the user |

### POST /users/login

This creates a _token_ and returns it if login was successful

| Name     | Requried | Type   | Unique? | Description              |
| -------- | -------- | ------ | ------- | ------------------------ |
| username | yes      | string | yes     | the username of the user |
| password | yes      | string | no      | the password of the user |

## Articles

### GET /articles

Returns a list of all articles

Article Object:

| Name     | Type    | Description                                      |
| -------- | ------- | ------------------------------------------------ |
| id       | Integer | Autoincremented Id                               |
| title    | String  | Name of the article                              |
| author   | String  | Author of the article                            |
| summary  | String  | Short summary of the article in Lorem Ipsum      |
| image    | String  | Link to Randomly Generated Image on Lorem Picsum |
| category | String  | Category name of the article                     |
| rank     | Integer | Ranking between 1-5; 1 being the lowest          |

### GET /articles/:id

Returns the _article with corresponding id_

| Name | Requried | Type          | Unique? | Description           |
| ---- | -------- | ------------- | ------- | --------------------- |
| id   | yes      | URL Parameter | yes     | The Id of the article |

### PUT /edit_articles/:id

**Requires Authentication**

Returns the _updated list_

All values in article object except id can be changed

## Saved Articles

These endpoints require you to be logged in

### GET /

Returns the list of article objects saved by user

Saved Articles Object:

| Name       | Type    | Description                                   |
| ---------- | ------- | --------------------------------------------- |
| Id         | Integer | Autoincremented Id                            |
| user_id    | Integer | Id of the specific user who liked the article |
| article_id | Integer | Id of the article that was liked              |

### POST /:articleId

Returns object with the _current user's id (user_id)_ _article_id, and updated list_

| Name      | Requried | Type          | Unique? | Description                                 |
| --------- | -------- | ------------- | ------- | ------------------------------------------- |
| articleId | yes      | URL Parameter | yes     | The id of the article that you want to save |

### DELETE /:articleId

Returns the updated list of saved articles for user

| Name | Requried | Type          | Unique? | Description                                         |
| ---- | -------- | ------------- | ------- | --------------------------------------------------- |
| id   | yes      | URL Parameter | yes     | The Id of the saved article that you want to delete |
