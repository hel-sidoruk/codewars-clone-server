# Authorization
  - [Registration](https://github.com/hel-sidoruk/rs-clone-server/blob/main/docs/auth.md#registration)
  - [Login](https://github.com/hel-sidoruk/rs-clone-server/blob/main/docs/auth.md#login)
  - [Github Registration](https://github.com/hel-sidoruk/rs-clone-server/blob/main/docs/auth.md#github-registration)
  - [Github Login](https://github.com/hel-sidoruk/rs-clone-server/blob/main/docs/auth.md#github-login)
  - [Check](https://github.com/hel-sidoruk/rs-clone-server/blob/main/docs/auth.md#check)

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
