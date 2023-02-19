# Katas
  - [Get Katas](https://github.com/hel-sidoruk/rs-clone-server/blob/main/docs/katas.md#get-katas)
  - [Get Random Katas](https://github.com/hel-sidoruk/rs-clone-server/blob/main/docs/katas.md#get-random-katas)
  - [Get Kata](https://github.com/hel-sidoruk/rs-clone-server/blob/main/docs/katas.md#get-kata)
  - [Create Kata](https://github.com/hel-sidoruk/rs-clone-server/blob/main/docs/katas.md#create-kata)

**Get Katas**
----
Returns json data about 10 katas in a database per page.

<details>

* **URL**

    /api/kata

* **Method:**

    `GET`

*  **Query Params**

    `page=[number]`

    **Optional:**
    `limit=[number]`
    `search=[string]`
    `sort=[hardest | easiest | name | oldest | popularity]`
    `difficulty=[8 kyu | 7 kyu | 6 kyu]`
    `tags=[string]`
    `progress=[completed | not completed | not trained]`

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

**Get Random Katas**
----
Returns json data about random katas in a database. If there is "id_only" parameter, returns only kata ID.

<details>

* **URL**

    /api/kata/random

* **Method:**

    `GET`

*  **Query Params**

    **Optional:**
    `limit=[number]`
    `tags=[string]`
    `id_only=[boolean]`

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

* **Error Response:**

  * **Code:** 404 <br />
      **Content:**

      ```json
        {
          "message": "No kata found"
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
