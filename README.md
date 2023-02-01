# rs-clone-server
Api for "RS Clone".

## Setup and Running

- Clone this repo: `$ git clone https://github.com/hel-sidoruk/rs-clone-server`.
- Go to downloaded folder: `$ cd rs-clone-server`.
- Install dependencies: `$ npm install`.
- Setup environment variables
- Start server: `$ npm start`.
- Now you can send requests to the address: `http://localhost:5000`.

## Usage

- **Katas**
    - [Get Katas](https://github.com/hel-sidoruk/rs-clone-server#get-katas)
    - [Get Kata](https://github.com/hel-sidoruk/rs-clone-server#get-kata)
    - [Create Kata](https://github.com/hel-sidoruk/rs-clone-server#create-kata)
- **Users**
    - [Get Users](https://github.com/hel-sidoruk/rs-clone-server#get-users)
    - [Get User](https://github.com/hel-sidoruk/rs-clone-server#get-user)
    - [Create User](https://github.com/hel-sidoruk/rs-clone-server#create-user)
    - [Update User](https://github.com/hel-sidoruk/rs-clone-server#update-user)
- **Discuss**
    - [Get Comments](https://github.com/hel-sidoruk/rs-clone-server#get-comments)
    - [Create Comment](https://github.com/hel-sidoruk/rs-clone-server#create-comment)
    - [Update Comment](https://github.com/hel-sidoruk/rs-clone-server#update-comment)
- **Authorization**
    - [Registration](https://github.com/hel-sidoruk/rs-clone-server#registration)
    - [Login](https://github.com/hel-sidoruk/rs-clone-server#login)
    - [Github Registration](https://github.com/hel-sidoruk/rs-clone-server#github-registration)
    - [Github Login](https://github.com/hel-sidoruk/rs-clone-server#github-login)
    - [Check](https://github.com/hel-sidoruk/rs-clone-server#check)

**Get Katas**
----
Returns json data about all katas in a database.

<details>

* **URL**

    /api/kata

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:**
    ```json
      [
        {
          "id": "583710ccaa6717322c000105",
          "name": "Simple multiplication",
          "description": "This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.",
          "totalAttempts": 134553,
          "totalCompleted": 90509,
          "totalStars": 301,
          "slug": "simple-multiplication",
          "createdBy": "grace555",
          "publishedAt": "2016-11-24T16:10:57.141Z",
          "createdAt": "2016-11-24T16:09:48.508Z",
          "rank": "8 kyu",
          "category": "reference",
          "tags": [ "Fundamentals" ]
        }
      ]
    ```

</details>

**Get Kata**
----
Returns json data about specified kata.

<details>

* **URL**

    /api/kata/:id

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    **Required:**

    `id=[string]`

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:**
    ```json
      {
        "id": "583710ccaa6717322c000105",
        "name": "Simple multiplication",
        "description": "This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.",
        "totalAttempts": 134553,
        "totalCompleted": 90509,
        "totalStars": 301,
        "slug": "simple-multiplication",
        "createdBy": "grace555",
        "publishedAt": "2016-11-24T16:10:57.141Z",
        "createdAt": "2016-11-24T16:09:48.508Z",
        "rank": "8 kyu",
        "category": "reference",
        "tags": [ "Fundamentals" ]
      }
    ```

</details>

**Create Kata**
----
Adds a new kata in a database.

<details>

* **URL**

    /api/kata

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`


* **Data Params**

    ```typescript
      {
        id: string,
        name: string,
        description: string,
        totalAttempts: number,
        totalCompleted: number,
        totalStars: number,
        slug: string,
        createdBy: string,
        publishedAt: string,
        createdAt: string,
        rank: string,
        category: string,
        tags: string[]
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```json
      {
        "id": "583710ccaa6717322c000105",
        "name": "Simple multiplication",
        "description": "This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.",
        "totalAttempts": 134553,
        "totalCompleted": 90509,
        "totalStars": 301,
        "slug": "simple-multiplication",
        "createdBy": "grace555",
        "publishedAt": "2016-11-24T16:10:57.141Z",
        "createdAt": "2016-11-24T16:09:48.508Z",
        "rank": "8 kyu",
        "category": "reference",
        "tags": [ "Fundamentals" ]
      }
    ```

</details>

**Get Users**
----
Returns json data about all users in a database.

<details>

* **URL**

    /api/user

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```json
      [
        {
          "id": "508f2708b3be0c0200000002",
          "name": "Jake Hoffner",
          "leaderboardPosition": 4,
          "username": "jhoffner",
          "honor": 300857,
          "clan": "Codewars",
          "totalCompleted": 418,
          "rank": "2 kyu",
          "score": 12211
        }
      ]
    ```

</details>

**Get User**
----
Returns json data about specified user.

<details>

* **URL**

    /api/user/:id

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    **Required:**

    `id=[string]`

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:**
    ```json
      {
        "id": "508f2708b3be0c0200000002",
        "name": "Jake Hoffner",
        "leaderboardPosition": 4,
        "username": "jhoffner",
        "honor": 300857,
        "clan": "Codewars",
        "totalCompleted": 418,
        "rank": "2 kyu",
        "score": 12211
      }
    ```

</details>

**Create User**
----
Adds a new user in a database.

<details>

* **URL**

    /api/user

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`


* **Data Params**

    ```typescript
      {
        id: string,
        name: string | null,
        leaderboardPosition: number,
        username: string,
        honor: number,
        clan: string | null,
        totalCompleted: number,
        rank: string,
        score: number
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```json
      {
        "id": "508f2708b3be0c0200000002",
        "name": "Jake Hoffner",
        "leaderboardPosition": 4,
        "username": "jhoffner",
        "honor": 300857,
        "clan": "Codewars",
        "totalCompleted": 418,
        "rank": "2 kyu",
        "score": 12211
      }
    ```

</details>

**Update User**
----
Updates specified user.

<details>

* **URL**

    /api/user/:id

* **Method:**

    `PATCH`

* **Headers:**

    `'Content-Type': 'application/json'`


* **Data Params**

    ```typescript
      {
        name?: string | null,
        leaderboardPosition?: number,
        honor?: number,
        clan?: string | null,
        totalCompleted?: number,
        rank?: string,
        score?: number
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```json
      {
        "status": "ok"
      }
    ```

</details>

**Get Comments**
----
Returns json data about all comments for specified kata.

<details>

* **URL**

    /api/kata/:id/discuss

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    **Required:**

    `id=[string]`

    id - Kata id

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```json
      [
        {
          "id": 1,
          "kataId": "51c8991dee245d7ddf00000e",
          "username": "rsschool_085c30fe4e1fbd81",
          "text": "Hello",
          "rank": "4 kyu",
          "votes": 2,
          "createdAt": "2023-01-26T09:44:26.477Z",
          "spoiler": false,
          "label": "Question"
        }
      ]
    ```

</details>

**Create Comment**
----
Creates new comment for specified kata.

<details>

* **URL**

    /api/kata/:id/discuss

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`

*  **URL Params**

    **Required:**

    `id=[string]`

    id - Kata id

* **Data Params**

    ```typescript
      {
        username: string,
        rank: string,
        text: string,
        label: 'Question' | 'Suggestion' | 'Issue' | null,
      }
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:**
    ```json
      {
        "id": 1,
        "kataId": "51c8991dee245d7ddf00000e",
        "username": "rsschool_085c30fe4e1fbd81",
        "text": "Hello",
        "rank": "4 kyu",
        "votes": 2,
        "createdAt": "2023-01-26T09:44:26.477Z",
        "spoiler": false,
        "label": "Question"
      }
    ```

</details>

**Update Comment**
----
Updates specified comment in a database.

<details>

* **URL**

    /api/kata/:id/discuss/:commentId

* **Method:**

    `PATCH`

* **Headers:**

    `'Content-Type': 'application/json'`

*  **URL Params**

    **Required:**

    `id=[string]`
    `commentId=[number]`

    id - Kata id

* **Data Params**

    ```typescript
      {
        votes?: number,
        spoiler?: boolean,
        text?: string,
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
  **Content:**
  ```json
    {
      "status": "ok"
    }
  ```

</details>

**Registration**
----
Registrate new user. If the user already exists in database returns an error. If you pass the same username as registered on Codewars, loads your profile data.

<details>

* **URL**

    /api/auth/registration

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`

* **Data Params**

    ```typescript
      {
        username: string
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
  **Content:**
  ```typescript
    {
      "token": string
    }
  ```

* **Error Response:**

  * **Code:** 403 <br />
      **Content:**

      ```json
        {
          "message": "User with this name already exists"
        }
      ```

</details>

**Login**
----
Login user. If the user not found in the database, returns an error.

<details>

* **URL**

    /api/auth/login

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`

* **Data Params**

    ```typescript
      {
        username: string
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
  **Content:**
  ```typescript
    {
      "token": string
    }
  ```

* **Error Response:**

  * **Code:** 403 <br />
      **Content:**

      ```json
        {
          "message": "User not found"
        }
      ```


</details>

**Check**
----
Checks if the user is authorized.

<details>

**Github Registration**
----
Registrate new user with Github OAuth access token.

<details>

* **URL**

    /api/auth/github-registration

* **Method:**

    `GET`

*  **URL Params**

    **Required:**

    `code=[string]`
    `option=registration`

* **Success Response:**

  * **Code:** 200 <br />
  **Content:**
  ```typescript
    {
      "token": string
    }
  ```

* **Error Response:**

  * **Code:** 401, 403 <br />
      **Content:**

      ```typescript
        {
          "message": string
        }
      ```

</details>

**Github Login**
----
Login user with Github OAuth access token.

<details>

* **URL**

    /api/auth/github-login

* **Method:**

    `GET`

*  **URL Params**

    **Required:**

    `code=[string]`
    `option=login`

* **Success Response:**

  * **Code:** 200 <br />
  **Content:**
  ```typescript
    {
      "token": string
    }
  ```

* **Error Response:**

  * **Code:** 401, 403 <br />
      **Content:**

      ```typescript
        {
          "message": string
        }
      ```


</details>

**Check**
----
Checks if the user is authorized.

<details>

* **URL**

    /api/auth/check

* **Method:**

    `GET`

* **Headers:**

    `'Authorization': 'Bearer <token>'`

* **Success Response:**

  * **Code:** 200 <br />
  **Content:**
  ```typescript
    {
      "token": string
    }
  ```

* **Error Response:**

  * **Code:** 401 <br />
      **Content:**

      ```json
        {
          "message": "User is not authorized"
        }
      ```

</details>
