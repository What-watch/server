# what-watch

**Register User**
----
  Returns json data about a single user.

* **URL**

  /register or /users/register

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

  /login or /users/register

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `none`

* **Data Params**

  `email=[STRING], password=[STRING], nohp=[STRING],`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJtYWlsQG1haWwuY29tIiwiaWF0IjoxNTgzNDgxNDA1fQ.SkRDh0NAJ2KXCCo7S_9mrzSxdYBSudJSTtZKnbxne38"
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```javascript
    {
        "errs": ["Email is required", "Password is required" ]
    }
    ```


  * **Code:** 400 NOT FOUND <br />
      **Content:** 
    ```javascript
    {
        "err": "Email / Password is Wrong"
  OR

  * **Code:** 500 UNAUTHORIZED <br />
    **Content:** 
    ```javascript
    { error : "Interal Server Error" }
    ```


**Google Login User**
----
  Returns json data about a single user.

* **URL**

  /goologin or /users/goologin

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `none`

* **Data Params**

  `email=[STRING]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJtYWlsQG1haWwuY29tIiwiaWF0IjoxNTgzNDgxNDA1fQ.SkRDh0NAJ2KXCCo7S_9mrzSxdYBSudJSTtZKnbxne38"
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```javascript
    {
        "errs": ["Email is required", "Password is required" ]
    }
    ```


  * **Code:** 400 NOT FOUND <br />
      **Content:** 
    ```javascript
    {
        "err": "Email / Password is Wrong"
  OR

  * **Code:** 500 UNAUTHORIZED <br />
    **Content:** 
    ```javascript
    { error : "Interal Server Error" }
    ```


**List Movies On Going**
----
  Returns  array of json data about a single user.

* **URL**

  /movies/now

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `none`

* **Data Params**

  `now`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    [
        {
            "id": "1223394285311766528",
            "title": "AKU TAHU KAPAN KAMU MATI",
            "movie_id": "1223394285261434880",
            "synopsis": "Setelah mati suri, SIENA bisa melihat pertanda orang akan mati. SIENA ketakutan dan ingin keluar dari situasi yang mengerikan ini. FLO, NENI dan VINA sahabat SIENA tidak percaya dengan kemampuan yang tiba tiba di miliki oleh SIENA. Tapi SIENA terus meyakinkan dengan penglihatannya. Apalagi satu persatu orang di sekitarnya mati setelah SIENA melihat pertanda dengan munculnya arwah yang menjemput orang tersebut. Hingga akhirnya pertanda tersebut muncul di dekat BRAMA, kakak kelas yang di cintainya. SIENA berusaha menggagalkan kematian BRAMA yang akan menjemputnya. Ternyata bukan hanya BRAMA. SIENA juga melihat pertanda orang orang terdekatnya akan mati. SIENA berusaha menggagalkan kematian kematian itu. Hingga pertanda kematian itu sendiri datang mengancam dirinya.",
            "production_company": "Unlimited Production",
            "actor": "Natasha Wilona, Ria Ricis, Al Ghazali, Fitria Rasyidi, Sonia Alexa, Ryma Gembala, Rita Nurmaliza, Elizabeth Christine, Adinda Halona, Opie Kumis, Asri Welas, Catherine Wilson, Daus Separo",
            "genre_ids": [
                {
                    "id": "1577",
                    "name": "Horror",
                    "updated_at": "2019-07-10T00:24:28.707741Z"
                }
            ],
            "duration": 92,
            "poster_path": "https://asset.tix.id/movie/a4dabdb8551677071a646c4fb44fd602.jpg",
            "age_category": "R",
            "trailer_path": "http://202.159.121.187/movie-trailer/10ATKK.mp4",
            "trailer_thumbnail_path": "https://asset.tix.id/movie_thumbnail/1c64338ce7b32fcdbb7da070fe9fa824.jpg",
            "producer": "Oswin Bonifanz, Yoen K",
            "director": "Hadrah Daeng Ratu",
            "presale_flag": 0,
            "is_custom_event": false,
            "rating_score": 8.5,
            "score_home_display": false,
            "merchant": [
                {
                    "merchant_id": "2224f7e3-da00-4fb9-9de3-2b888d83ac02",
                    "merchant_name": "XXI"
                },
                {
                    "merchant_id": "2224f7e3-da00-4fb9-9de3-2b888d83ac03",
                    "merchant_name": "CGV"
                }
            ]
        },
        {
            "id": "1228458915298029568",
            "title": "SEBELUM IBLIS MENJEMPUT AYAT 2",
            "movie_id": "1228458915226726400",
            "synopsis": "Dua tahun setelah lepas dari teror iblis, Alfie (Chelsea Islan) dan Nara (Hadijah Shahab) mencoba melanjutkan kehidupan mereka. \r\nNamun Alfie masih terus dihantui perasaan bersalah dan penglihatan tidak wajar. Mimpi terburuk Alfie nyatanya baru dimulai dan \r\nbahaya yang menunggu semakin mengancam, sosok kegelapan yang begitu haus akan jiwa bangkit untuk menjemput nyawa mereka.",
            "production_company": "Frontier Pictures, Legacy Pictures, Rapi Films",
            "actor": "Chelsea Islan, Baskara Mahendra, Widika Sidmore, Hadijah Shahab, Lutesha, Arya Vasco, Aurelie Moeremans, Karina Salim, Shareefa Daanish",
            "genre_ids": [
                {
                    "id": "1577",
                    "name": "Horror",
                    "updated_at": "2019-07-10T00:24:28.707741Z"
                }
            ],
            "duration": 110,
            "poster_path": "https://asset.tix.id/movie/28d35566596304cd9f9cd5394784a3e8.jpg",
            "age_category": "D",
            "trailer_path": "http://202.159.121.187/movie-trailer/10SIM2.mp4",
            "trailer_thumbnail_path": "https://asset.tix.id/movie_thumbnail/c873d74db375945147f0dcf55b61badb.jpg",
            "producer": "Wicky V. Olindo, Timo Tjahjanto",
            "director": "Timo Tjahjanto",
            "presale_flag": 0,
            "is_custom_event": false,
            "rating_score": 8.7,
            "score_home_display": false,
            "merchant": [
                {
                    "merchant_id": "2224f7e3-da00-4fb9-9de3-2b888d83ac02",
                    "merchant_name": "XXI"
                },
                {
                    "merchant_id": "2224f7e3-da00-4fb9-9de3-2b888d83ac03",
                    "merchant_name": "CGV"
                }
            ]
        }
    ]
    ```
 
* **Error Response:**

  * **Code:** 500 <br/>
    **Content:** 
    ``` 
    {
        error: "Internal Server Error"
    }
    ```



**List Movies Upcoming**
----
  Returns  array of json data about a single user.

* **URL**

  /movies/upcoming

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `none`

* **Data Params**

  `now`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    [
        {
            "id": "1223394285311766528",
            "title": "AKU TAHU KAPAN KAMU MATI",
            "movie_id": "1223394285261434880",
            "synopsis": "Setelah mati suri, SIENA bisa melihat pertanda orang akan mati. SIENA ketakutan dan ingin keluar dari situasi yang mengerikan ini. FLO, NENI dan VINA sahabat SIENA tidak percaya dengan kemampuan yang tiba tiba di miliki oleh SIENA. Tapi SIENA terus meyakinkan dengan penglihatannya. Apalagi satu persatu orang di sekitarnya mati setelah SIENA melihat pertanda dengan munculnya arwah yang menjemput orang tersebut. Hingga akhirnya pertanda tersebut muncul di dekat BRAMA, kakak kelas yang di cintainya. SIENA berusaha menggagalkan kematian BRAMA yang akan menjemputnya. Ternyata bukan hanya BRAMA. SIENA juga melihat pertanda orang orang terdekatnya akan mati. SIENA berusaha menggagalkan kematian kematian itu. Hingga pertanda kematian itu sendiri datang mengancam dirinya.",
            "production_company": "Unlimited Production",
            "actor": "Natasha Wilona, Ria Ricis, Al Ghazali, Fitria Rasyidi, Sonia Alexa, Ryma Gembala, Rita Nurmaliza, Elizabeth Christine, Adinda Halona, Opie Kumis, Asri Welas, Catherine Wilson, Daus Separo",
            "genre_ids": [
                {
                    "id": "1577",
                    "name": "Horror",
                    "updated_at": "2019-07-10T00:24:28.707741Z"
                }
            ],
            "duration": 92,
            "poster_path": "https://asset.tix.id/movie/a4dabdb8551677071a646c4fb44fd602.jpg",
            "age_category": "R",
            "trailer_path": "http://202.159.121.187/movie-trailer/10ATKK.mp4",
            "trailer_thumbnail_path": "https://asset.tix.id/movie_thumbnail/1c64338ce7b32fcdbb7da070fe9fa824.jpg",
            "producer": "Oswin Bonifanz, Yoen K",
            "director": "Hadrah Daeng Ratu",
            "presale_flag": 0,
            "is_custom_event": false,
            "rating_score": 8.5,
            "score_home_display": false,
            "merchant": [
                {
                    "merchant_id": "2224f7e3-da00-4fb9-9de3-2b888d83ac02",
                    "merchant_name": "XXI"
                },
                {
                    "merchant_id": "2224f7e3-da00-4fb9-9de3-2b888d83ac03",
                    "merchant_name": "CGV"
                }
            ]
        },
        {
            "id": "1228458915298029568",
            "title": "SEBELUM IBLIS MENJEMPUT AYAT 2",
            "movie_id": "1228458915226726400",
            "synopsis": "Dua tahun setelah lepas dari teror iblis, Alfie (Chelsea Islan) dan Nara (Hadijah Shahab) mencoba melanjutkan kehidupan mereka. \r\nNamun Alfie masih terus dihantui perasaan bersalah dan penglihatan tidak wajar. Mimpi terburuk Alfie nyatanya baru dimulai dan \r\nbahaya yang menunggu semakin mengancam, sosok kegelapan yang begitu haus akan jiwa bangkit untuk menjemput nyawa mereka.",
            "production_company": "Frontier Pictures, Legacy Pictures, Rapi Films",
            "actor": "Chelsea Islan, Baskara Mahendra, Widika Sidmore, Hadijah Shahab, Lutesha, Arya Vasco, Aurelie Moeremans, Karina Salim, Shareefa Daanish",
            "genre_ids": [
                {
                    "id": "1577",
                    "name": "Horror",
                    "updated_at": "2019-07-10T00:24:28.707741Z"
                }
            ],
            "duration": 110,
            "poster_path": "https://asset.tix.id/movie/28d35566596304cd9f9cd5394784a3e8.jpg",
            "age_category": "D",
            "trailer_path": "http://202.159.121.187/movie-trailer/10SIM2.mp4",
            "trailer_thumbnail_path": "https://asset.tix.id/movie_thumbnail/c873d74db375945147f0dcf55b61badb.jpg",
            "producer": "Wicky V. Olindo, Timo Tjahjanto",
            "director": "Timo Tjahjanto",
            "presale_flag": 0,
            "is_custom_event": false,
            "rating_score": 8.7,
            "score_home_display": false,
            "merchant": [
                {
                    "merchant_id": "2224f7e3-da00-4fb9-9de3-2b888d83ac02",
                    "merchant_name": "XXI"
                },
                {
                    "merchant_id": "2224f7e3-da00-4fb9-9de3-2b888d83ac03",
                    "merchant_name": "CGV"
                }
            ]
        }
    ]
    ```
 
* **Error Response:**

  * **Code:** 500 <br/>
    **Content:** 
    ``` 
    {
        error: "Internal Server Error"
    }
    ```


**Delete WishList**
----
  Returns  array of json data about a single user.

* **URL**

  /wishlists

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `none`

* **Data Params**

  `now`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
        message: 'Delete Movie from Wishlist successfully'
    }
    ```
 
* **Error Response:**

  * **Code:** 500 <br/>
    **Content:** 
    ``` 
    {
        error: "Internal Server Error"
    }
    ```

**IMDB MOVIES AND YOUTUBE**
----
  Returns  json data about a single user.

* **URL**

  /imdb/movies

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `none`

* **Data Params**

  `search=[STRING]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    [
        {
            data: {
                Title: "Frozen",
                Year: "2013",
                Rated: "8.8",
                Released: "20 Mei 2018",
                Director: "Adam Smith",
                Ratings: "9.0",
                imdbRating: "9.0",
                imdbID: "23847t32874t,
                Production: "Disney",
                Poster: "data:image/jpeg;base64,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",
                Country: "USA",
                Plot: "Twist".
                YTLink: "https://www.youtube.com/watch?v=FLzfXQSPBOg"
            }
        }
    ]
    ```
 
* **Error Response:**

  * **Code:** 500 <br/>
    **Content:** 
    ``` 
    {
        error: "Internal Server Error"
    }
    ```

