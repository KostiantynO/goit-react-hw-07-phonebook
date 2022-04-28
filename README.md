```shell
npm i -D prettier eslint prop-types
npm i react-router-dom react-redux @reduxjs/toolkit styled-components nanoid react-debounce-input react-toastify react-icons

git init
npx mrm@2 lint-staged

npm start

npm install netlify-cli -g
netlify login
```

`package.json`

```json
  "lint-staged": {
    "*.{js,jsx}": "eslint --cache --fix",
    "*.{js,jsx,css,sass,md}": "prettier --write"
  }

  "scripts": {
    "predeploy": "npm run build",
    "deploy": "netlify deploy -p"
  }

```

`jsconfig.json`

```json
{
  "compilerOptions": { "baseUrl": "src" },
  "exclude": ["node_modules", "build"],
  "include": ["src"]
}
```

Website URL: https://ko-goit-react-hw-07-phonebook.netlify.app/

`.gitignore`

```text
.eslintcache
```
