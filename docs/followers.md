- **Followers**
    - [Get following](https://github.com/hel-sidoruk/rs-clone-server/docs/followers.md#get-following)
    - [Get followers](https://github.com/hel-sidoruk/rs-clone-server/docs/followers.md#get-followers)
    - [Follow](https://github.com/hel-sidoruk/rs-clone-server/docs/followers.md#follow)
    - [Unfollow](https://github.com/hel-sidoruk/rs-clone-server/docs/followers.md#unfollow)
    - [Check following](https://github.com/hel-sidoruk/rs-clone-server/docs/followers.md#check-following)

**Get following**
----
Returns json data about all following users of specified user

<details>

* **URL**

    /api/social/:username/following

* **Method:**

    `GET`

*  **URL Params**

    **Required:**

    `username=[string]`

* **Success Response:**

  * **Code:** 200 <br />
  **Content:**
  ```json
    [
      {
        "id": "tFxX4D8x1vN3g6hjOGQbQ",
        "followUser": "randomUser",
        "rank": "6 kyu",
        "honor": 125,
        "clan": "clan name",
        "followerAvatar": "https://www.codewars.com/packs/assets/profile-pic.f3a90aca.png",
        "followingAvatar": "https://www.codewars.com/packs/assets/profile-pic.f3a90aca.png"
      }
    ]
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

**Get followers**
----
Returns json data about all followers of specified user

<details>

* **URL**

    /api/social/:username/followers

* **Method:**

    `GET`

*  **URL Params**

    **Required:**

    `username=[string]`

* **Success Response:**

  * **Code:** 200 <br />
  **Content:**
  ```json
    [
      {
        "id": "tFxX4D8x1vN3g6hjOGQbQ",
        "username": "hel-sidoruk",
        "followUser": "randomUser",
        "rank": "6 kyu",
        "honor": 125,
        "clan": "clan name",
        "followerAvatar": "https://www.codewars.com/packs/assets/profile-pic.f3a90aca.png",
        "followingAvatar": "https://www.codewars.com/packs/assets/profile-pic.f3a90aca.png"
      }
    ]
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

**Follow**
----
Add new following user for current user

<details>

* **URL**

    /api/social/

* **Method:**

    `POST`

* **Headers:**

    `'Authorization': 'Bearer <token>'`
    `'Content-Type': 'application/json'`

* **Data Params**

    ```typescript
      {
        followUser: string,
        rank: string,
        honor: number,
        clan: string,
        followerAvatar: string,
        followingAvatar: string,
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
  **Content:**
  ```json
    {
      "id": "tFxX4D8x1vN3g6hjOGQbQ",
      "username": "hel-sidoruk",
      "followUser": "randomUser",
      "rank": "6 kyu",
      "honor": 125,
      "clan": "clan name",
      "followerAvatar": "https://www.codewars.com/packs/assets/profile-pic.f3a90aca.png",
      "followingAvatar": "https://www.codewars.com/packs/assets/profile-pic.f3a90aca.png"
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

  * **Code:** 404 <br />
      **Content:**

      ```typescript
        {
          message: string
        }
      ```

</details>

**Unfollow**
----
Deletes following user

<details>

* **URL**

    /api/social/:id

* **Method:**

    `DELETE`

* **Headers:**

    `'Authorization': 'Bearer <token>'`

*  **URL Params**

    **Required:**

    `id=[string]`

* **Success Response:**

  * **Code:** 200 <br />
  **Content:**
  ```json
    {
      "status": "ok"
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

**Check following**
----
Checks if current user is follow specified user

<details>

* **URL**

    /api/social/check

* **Method:**

    `GET`

* **Headers:**

    `'Authorization': 'Bearer <token>'`

* **Query Params**

    ```typescript
      {
        follow: string
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
  **Content:**
  ```json
    {
      "isFollowed": "tFxX4D8x1vN3g6hjOGQbQ" | false,
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
