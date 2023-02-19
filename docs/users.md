- **Users**
    - [Get Users](https://github.com/hel-sidoruk/rs-clone-server/docs/users.md#get-users)
    - [Get User](https://github.com/hel-sidoruk/rs-clone-server/docs/users.md#get-user)
    - [Create User](https://github.com/hel-sidoruk/rs-clone-server/docs/users.md#create-user)
    - [Update User](https://github.com/hel-sidoruk/rs-clone-server/docs/users.md#update-user)

**Get Users**
----
Returns json data about all users in a database sorted by leaderboard position.

<details>

* **URL**

    /api/user

* **Method:**

    `GET`

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

* **Error Response:**

  * **Code:** 404 <br />
    **Content:**
    ```json
      {
        "message": "User not found"
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
