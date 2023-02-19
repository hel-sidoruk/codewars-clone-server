# Account
  - [Get Account info](https://github.com/hel-sidoruk/rs-clone-server/blob/main/docs/account.md#get-account-info)
  - [Edit Account info](https://github.com/hel-sidoruk/rs-clone-server/blob/main/docs/account.md#edit-account-info)
  - [Delete Account](https://github.com/hel-sidoruk/rs-clone-server/blob/main/docs/account.md#delete-account)
  - [Add trained kata](https://github.com/hel-sidoruk/rs-clone-server/blob/main/docs/account.md#add-trained-kata)
  - [Add solved kata](https://github.com/hel-sidoruk/rs-clone-server/blob/main/docs/account.md#add-solved-kata)
  - [Add starred kata](https://github.com/hel-sidoruk/rs-clone-server/blob/main/docs/account.md#add-starred-kata)
  - [Add forfeited kata](https://github.com/hel-sidoruk/rs-clone-server/blob/main/docs/account.md#add-forfeited-kata)

**Get Account info**
----
Returns json data about registered account. Returns error if user is not authorized

<details>

* **URL**

    /api/account

* **Method:**

    `GET`

* **Headers:**

    `'Authorization': 'Bearer <token>'`

* **Success Response:**

  * **Code:** 200 <br />
  **Content:**
  ```json
    {
      "id": "105039101",
      "username": "hel-sidoruk",
      "password": null,
      "avatar": "https://avatars.githubusercontent.com/u/105039101?v=4",
      "github": "hel-sidoruk",
      "solvedKatas": [
        "583710ccaa6717322c000105"
      ],
      "trainedKatas": [],
      "starredKatas": ["61432694beeca7000f37bb57"],
      "forfeitedKatas": []
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

**Edit Account info**
----
Edit account info in database. You can change avatar image, username, name or clan.

<details>

* **URL**

    /api/account/edit

* **Method:**

    `PATCH`

* **Headers:**

    `'Authorization': 'Bearer <token>'`
    `'Content-type': 'multipart/form-data'`

* **Data Params**

    ```typescript
      {
        newUsername: string,
        name: string,
        clan: string,
        avatarImage: File
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
  **Content:**
  ```json
    {
      "username": "new username",
      "name": "new name",
      "clan": "new clan",
      "avatar": "https://host.com/avatar.png",
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

**Delete Account**
----
Deletes account from database.

<details>

* **URL**

    /api/account/

* **Method:**

    `DELETE`

* **Headers:**

    `'Authorization': 'Bearer <token>'`

* **Success Response:**

  * **Code:** 200 <br />
  **Content:**
  ```json
    {
      "status": "ok",
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

**Add trained kata**
----
Add kata id to trainedKatas array. Returns error if user is not authorized

<details>

* **URL**

    /api/account/trained

* **Method:**

    `PATCH`

* **Headers:**

    `'Authorization': 'Bearer <token>'`
    `'Content-Type': 'application/json'`

* **Data Params**

    ```typescript
      {
        kataId: string
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

* **Error Response:**

  * **Code:** 401 <br />
      **Content:**

      ```json
        {
          "message": "User is not authorized"
        }
      ```

</details>

**Add solved kata**
----
Add kata id to solvedKatas array. Returns error if user is not authorized

<details>

* **URL**

    /api/account/solved

* **Method:**

    `PATCH`

* **Headers:**

    `'Authorization': 'Bearer <token>'`
    `'Content-Type': 'application/json'`

* **Data Params**

    ```typescript
      {
        kataId: string
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

* **Error Response:**

  * **Code:** 401 <br />
      **Content:**

      ```json
        {
          "message": "User is not authorized"
        }
      ```

</details>

**Add starred kata**
----
Add kata id to starredKatas array or removes kata id if it is already in array. Returns error if user is not authorized

<details>

* **URL**

    /api/account/starred

* **Method:**

    `PATCH`

* **Headers:**

    `'Authorization': 'Bearer <token>'`
    `'Content-Type': 'application/json'`

* **Data Params**

    ```typescript
      {
        kataId: string
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

* **Error Response:**

  * **Code:** 401 <br />
      **Content:**

      ```json
        {
          "message": "User is not authorized"
        }
      ```

</details>

**Add forfeited kata**
----
Add kata id to forfeitedKatas array. Returns error if user is not authorized

<details>

* **URL**

    /api/account/forfeited

* **Method:**

    `PATCH`

* **Headers:**

    `'Authorization': 'Bearer <token>'`
    `'Content-Type': 'application/json'`

* **Data Params**

    ```typescript
      {
        kataId: string
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

* **Error Response:**

  * **Code:** 401 <br />
      **Content:**

      ```json
        {
          "message": "User is not authorized"
        }
      ```

</details>
