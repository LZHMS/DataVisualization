# Getting Started with Create React App with Echarts
## Prepare Project Environment

### `npm install -g create-react-app`

we can install create-react-app globally via `npm install -g create-react-app`. But we can't always use the latest version in that way.
Of course, we recommend using `npx` to install react framework every time.

## Prepare the Project

### `npx create-react-app example`

If we don't install the react framework previously, we need to install it again here.

### `npm install --save echarts`

Here we install the echarts library.

### `npm install --save echarts-for-react`

To work with icons in a react project we need to use the `echart-for-react` package, which depends on the `echarts` package.

## Start the Project

### `npm start`

After preparing the above things, we can start the project now in a browser.

## Experiments
Now we can make some experiments with the echarts library about data visualization.
### 3D Bar
<img src="https://cdn.jsdelivr.net/gh/LZHMS/picx-images-hosting@master/EBlog/Courses/image.4h2k896widm0.webp" alt="image" />



## Deploy React Project to Github Pages(Specifically for Projects)
### Step 1: Add `homepage` to `package.json`
Open your `package.json` and add a `homepage` field for your project, taking my project as an example:
```json
  "homepage": "./",
```
That's take your react project directory as the root directory of your website. Just for me, my react project is `React-With-Echarts/website`. And by the way, github pages will automatically choose your github project as the default directory, so actually we needn't to write the path of your project. 

### Step 2: Install `gh-pages` and add `deploy` to `scripts` in `package.json`
There we need to install `gh-pages` library in order to deploy our project using gh-pages in github.
```
npm install --save gh-pages
```
Add the following scripts in your `package.json`:
```
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```
That's because the `predeploy` script will run automatically before `deploy` is run.
Another point is that if the name of your local repository is not `origin` which is default, you need to configure the `deploy` more detailedly.
```json
    "deploy": "gh-pages -d build -r <repo-url>",
```

### Step 3: Deploy the site by running `npm run deploy`
### Step 4: Ensure your project’s settings use `gh-pages`
<img src="https://cdn.jsdelivr.net/gh/LZHMS/picx-images-hosting@master/EBlog/Courses/image.3xxie10e26w0.png" alt="image" />

## Projects Display: https://lzhms.github.io/DataVisualization/

## Contributors
+ [Zhihao Li](https://lzhms.github.io/)

## References
+ [Create React App](https://create-react-app.dev/docs/)


