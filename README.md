# what-watch

**Register User**
----
  Returns json data about a single user.

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `none`

* **Data Params**

  `fullname=[STRING], email=[STRING], password=[STRING], nohp=[STRING],`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```javascript
    {
        "id": 2,
        "fullname": "tamara zu",
        "email": "mail@mail.com",
        "no_hp": "08796213"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```javascript
    {
        "errs": ["Email is required", "Password is required" ]
    }
    ```


  * **Code:** 404 NOT FOUND <br />

  OR

  * **Code:** 500 UNAUTHORIZED <br />
    **Content:** 
    ```javascript
    { error : "Interal Server Error" }
    ```


**Login User**
----
  Returns json data about a single user.

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `none`

* **Data Params**

  `email=[STRING], password=[STRING], nohp=[STRING],`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```javascript
    {
        "id": 2,
        "fullname": "tamara zu",
        "email": "mail@mail.com",
        "no_hp": "08796213"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```javascript
    {
        "errs": ["Email is required", "Password is required" ]
    }
    ```


  * **Code:** 404 NOT FOUND <br />

  OR

  * **Code:** 500 UNAUTHORIZED <br />
    **Content:** 
    ```javascript
    { error : "Interal Server Error" }
    ```

