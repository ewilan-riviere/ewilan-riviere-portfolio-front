# **Portfolio · Front**

[![nuxtjs](https://img.shields.io/static/v1?label=NuxtJS&message=v2.14&color=00C58E&style=flat-square&logo=nuxt.js&logoColor=ffffff)](https://nuxtjs.org/)
[![tailwindcss](https://img.shields.io/static/v1?label=Tailwind%20CSS&message=v2.0&color=38B2AC&style=flat-square&logo=tailwind-css&logoColor=ffffff)](https://tailwindcss.com/)

[![NodeJS](https://img.shields.io/static/v1?label=NodeJS&message=v14.15&color=339933&style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/en)
[![Yarn](https://img.shields.io/static/v1?label=Yarn&message=v1.2&color=2C8EBB&style=flat-square&logo=yarn&logoColor=ffffff)](https://classic.yarnpkg.com/lang/en/)

- 🌐 [**ewilan-riviere.com**](https://ewilan-riviere.com) : production
- [**Portfolio · Back**](https://github.com/ewilan-riviere/portfolio-back) : back-end repository (Laravel framework)

## TODO

- [ ] add bit.dev link into footer

## **I. Setup**

Create `.env`, you can change API used into this file

```bash
cp .env.example .env
```

Udpate `.env` variables for production, `BASE_URL` for portfolio app and `API_URL` for API

Install Node.js dependencies

``` bash
yarn
```

Serve with hot reload at [localhost:3000](http://localhost:3000)

```bash
yarn dev
```

### *Production*

Build for production

```bash
yarn build
```

Launch server with [pm2](https://pm2.keymetrics.io/)

```js
// ecosystem.config.js
module.exports = {
  apps : [
    // ...
    {
      name: 'portfolio',
      script: 'npm',
      cwd: '/home/ewilan/www/portfolio-front',
      args: 'start',
      env: {
        PORT: 3002
      },
    }
  ]
};
```

```nginx
# /etc/nginx/sites-available/ewilan-riviere.com
server {
  listen 80;
  server_name ewilan-riviere.com www.ewilan-riviere.com;

  location / {
    include proxy_params;
    proxy_pass http://localhost:3002;
  }
}
```

**OR**

With manual command

```bash
yarn start
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Technical log

- Use [**Masonry**](https://masonry.desandro.com): JavaScript cascading grid layout library

## Todo

- [ ] lateral menu social
- [ ] improve readme with repos links
- [ ] dark mode
- [x] fresh project nuxtjs without ts
- [ ] i18n

Links:

- <https://tailwindui.com/components>
- <https://mertjf.github.io/tailblocks>
- <https://merakiui.com>
- <https://headlessui.dev>
- <https://www.tailwindtoolbox.com/templates/landing-page>
- <https://www.creative-tim.com/learning-lab/tailwind-starter-kit/landing>
- <https://www.creative-tim.com/product/vue-notus>
- <https://www.creative-tim.com/product/paper-kit-2>
- <https://dribbble.com>
  - <https://dribbble.com/shots/14603554-THE-ADVNTR-Travel-Agency-Service>
- mask on images
  - <https://css-tricks.com/almanac/properties/m/mask-image/>
  - <https://stackoverflow.com/questions/28623446/hover-effect-expand-bottom-border>
  - <https://www.web-eau.net/blog/15-effets-css3-pour-vos-images>
  - <https://codepen.io/peterramsing/pen/jAxVBB>
  - <https://codepen.io/Chester/pen/KyJpoK>
  - <https://thinkshout.com/blog/2017/06/fade-to-black-responsive-css-gradients/>
