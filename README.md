# react-notion-x-worker
Express api server to fetch [react-notion-x](https://github.com/NotionX/react-notion-x) data from client-side.

## Why ?
I wanted to use `react-notion-x` from the client side, but it doesn't work due to CORS restrictions.

By deploying this `react-notion-x-worker`, **you can fetch the notion api from the client side**.


## How to use
```sh
git clone https://github.com/kohheepeace/react-notion-x-worker.git
cd react-notion-x-worker

heroku login
heroku create
git push heroku main
heroku open
```

Then, you can obtain recordMap of `react-notion-x` by sending a GET request to the following url.

```
https://example.herokuapp.com/pages/:id
```

## Demo URL
https://react-notion-x-worker-demo.herokuapp.com/pages/067dd719a912471ea9a3ac10710e7fdf
*This demo is slow because of heroku free plan.
