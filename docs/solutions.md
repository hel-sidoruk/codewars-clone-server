- **Solutions**
    - [Get Kata Solutions](https://github.com/hel-sidoruk//docs/solutions.md#get-kata-solutions)
    - [Get User Solutions](https://github.com/hel-sidoruk//docs/solutions.md#get-user-solutions)
    - [Add Solution](https://github.com/hel-sidoruk//docs/solutions.md#add-solution)
    - [Update Solution](https://github.com/hel-sidoruk//docs/solutions.md#update-solution)

**Get Kata Solutions**
----
Returns json data about all solutions for specified kata. If "username" query parameter is passed, returns solutions of specified user for the kata.

<details>

* **URL**

    /api/kata/:kataId/solutions

* **Method:**

    `GET`

*  **URL Params**

    **Required:**

    `kataId=[string]`

*  **Query Params**

    **Optional:**

    `username=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```json
      [
        {
          "id": "wF6meI4by4fWPHEP5lwPX",
          "kataId": "583710ccaa6717322c000105",
          "username": "hel-sidoruk",
          "solution": "function simpleMultiplication(number) {\nreturn number % 2 === 0 ? number * 8 : number * 9\n}",
          "createdAt": "2023-02-04T09:52:20.745Z",
          "cleverVotes": 1,
          "bestPracticesVotes": 0
        }
      ]
    ```

</details>

**Get User Solutions**
----
Returns json data about all solutions for current user.

<details>

* **URL**

    /api/solutions

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
          "id": "wF6meI4by4fWPHEP5lwPX",
          "kataId": "583710ccaa6717322c000105",
          "username": "hel-sidoruk",
          "solution": "function simpleMultiplication(number) {\nreturn number % 2 === 0 ? number * 8 : number * 9\n}",
          "createdAt": "2023-02-04T09:52:20.745Z",
          "cleverVotes": 1,
          "bestPracticesVotes": 0
        }
      ]
    ```

</details>

**Add Solution**
----
Creates new solution for specified kata.

<details>

* **URL**

    /api/kata/:kataId/solutions

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`

*  **URL Params**

    **Required:**

    `kataId=[string]`

* **Data Params**

    ```typescript
      {
        username: string,
        solution: string,
      }
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:**
    ```json
      {
        "id": "wF6meI4by4fWPHEP5lwPX",
        "kataId": "583710ccaa6717322c000105",
        "username": "hel-sidoruk",
        "solution": "function simpleMultiplication(number) {\nreturn number % 2 === 0 ? number * 8 : number * 9\n}",
        "createdAt": "2023-02-04T09:52:20.745Z",
        "cleverVotes": 0,
        "bestPracticesVotes": 0
      }
    ```

</details>

**Update Solution**
----
Updates specified solution in a database.

<details>

* **URL**

    /api/kata/:kataId/solutions/:solutionId

* **Method:**

    `PATCH`

* **Headers:**

    `'Content-Type': 'application/json'`

*  **URL Params**

    **Required:**

    `kataId=[string]`
    `solutionId=[string]`

* **Data Params**

    ```typescript
      {
        cleverVotes?: number,
        bestPracticesVotes?: number,
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

