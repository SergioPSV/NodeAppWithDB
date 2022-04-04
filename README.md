# Node.js app with PostgreSQL
Node.js app use redis and search in PostgreSQL DB

### For this app you must have Node.js, redis-server and directory with app

* for Node.js go to the [Node.js site](https://nodejs.org/) and install
* install redis using `brew install redis` on MacOS or use `npm install redis`
* start server `brew services start redis` or run manually using `redis-server /usr/local/etc/redis.conf`

> I use `/usr/local/bin/redis-server` for run server and connects to **localhost** on port **6379**
> 
> <img width="616" alt="image" src="https://user-images.githubusercontent.com/32548311/161568195-0b6db5aa-ab05-4973-a5a7-ff4d6ca78a16.png">

### Starting app

- Clone this app using `git clone` or download zip
- Change to the project directory and run `node app.js`
- If everythink is ok the terminal will display 
  - `Server listening on port:  3000`

### Testing app

> redis-server and app.js are working 

- Go to https://www.postman.com/ for test app

> work only `GET` requests

- Use endpoint `/film/:title` where :title - name of the film
- For example run `localhost:3000/film/Fargo_Gandhi`
  - It is from database
  
<img width="600" alt="image" src="https://user-images.githubusercontent.com/32548311/161574370-c07e6ec7-0f3f-41f2-b4ad-b165c88fd20a.png">

  - From cache

<img width="600" alt="image" src="https://user-images.githubusercontent.com/32548311/161574993-f23dd72b-14c0-49c5-bf4a-ed383b02856b.png">

