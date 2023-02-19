- **Discuss**
    - [Get Comments](https://github.com/hel-sidoruk/rs-clone-server/docs/discuss.md#get-comments)
    - [Get User Comments](https://github.com/hel-sidoruk/rs-clone-server/docs/discuss.md#get-user-comments)
    - [Create Comment](https://github.com/hel-sidoruk/rs-clone-server/docs/discuss.md#create-comment)
    - [Update Comment](https://github.com/hel-sidoruk/rs-clone-server/docs/discuss.md#update-comment)
    - [Delete Comment](https://github.com/hel-sidoruk/rs-clone-server/docs/discuss.md#delete-comment)

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
          "label": "Question",
          "avatar": "https://avatar.png"
        }
      ]
    ```

* **Error Response:**

  * **Code:** 404 <br />
      **Content:**

      ```json
        {
          "message": "Comments not found"
        }
      ```

</details>

**Get User Comments**
----
Returns json data about all comments of specified user.

<details>

* **URL**

    /api/discuss/:id

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    **Required:**

    `id=[string]`

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
          "label": "Question",
          "avatar": "https://avatar.png"
        }
      ]
    ```

* **Error Response:**

  * **Code:** 404 <br />
      **Content:**

      ```json
        {
          "message": "Comments not found"
        }
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
        "label": "Question",
        "avatar": "https://avatar.png"
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
        label?: 'Question' | 'Suggestion' | 'Issue' | null,
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

**Delete Comment**
----
Deletes specified comment in a database.

<details>

* **URL**

    /api/kata/:id/discuss/:commentId

* **Method:**

    `DELETE`

*  **URL Params**

    **Required:**

    `id=[string]`
    `commentId=[number]`

* **Success Response:**

  * **Code:** 200 <br />
  **Content:**
  ```json
    {
      "status": "ok"
    }
  ```

</details>
