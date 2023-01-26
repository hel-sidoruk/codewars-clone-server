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

    /kata

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

    /user

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
