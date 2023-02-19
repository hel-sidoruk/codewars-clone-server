# Notifications
  - [Get notifications](https://github.com/hel-sidoruk/rs-clone-server/blob/main/docs/notifications.md#get-notifications)
  - [Add notification](https://github.com/hel-sidoruk/rs-clone-server/blob/main/docs/notifications.md#add-notification)
  - [Delete notification](https://github.com/hel-sidoruk/rs-clone-server/blob/main/docs/notifications.md#delete-notification)

**Get notifications**
----
Returns json data about all notifications for authorized user

<details>

* **URL**

    /api/notifications

* **Method:**

    `GET`

* **Headers:**

    `'Authorization': 'Bearer <token>'`

* **Success Response:**

  * **Code:** 200 <br />
  **Content:**
  ```json
    [
      {
        "id": "3M5_aZOk9_tI8sCfa4hPu",
        "username": "hel-sidoruk",
        "text": "50+ Honor: You now have the ability to mark another's comment as a spoiler",
        "createdAt": "2023-02-10T08:44:44.638Z"
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

**Add notification**
----
Add new notification for authorized user

<details>

* **URL**

    /api/notifications

* **Method:**

    `POST`

* **Headers:**

    `'Authorization': 'Bearer <token>'`
    `'Content-Type': 'application/json'`

* **Data Params**

    ```typescript
      {
        text: string
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
  **Content:**
  ```json
    {
      "id": "tFxX4D8x1vN3g6hjOGQbQ",
      "username": "hel-sidoruk",
      "text": "Test note",
      "createdAt": "2023-02-10T09:58:39.614Z"
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

**Delete notification**
----
Deletes specified notification

<details>

* **URL**

    /api/notifications/:id

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
