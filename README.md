# Module 6 DevOps & Testing
## Mini Todolist

For this project I used Next.js, Heroku, CircleCi and Jest. 
I created a Continuous integration Webhook that connects the github repository to Heroku. When pushing new code to Github it automatically deployes the new version to the Heroku live site.
I made a simple Todo list that stores the todos in localstorage. Then I created unit tests with Jest. 

The test conducts three tests:
1. Rendering todo list from stored items
2. Adding item on button click
3. Deleting item on button click

## Files
+ [Index](./pages/index.js)
+ [Todo List Component](./component/TodoList.js)
+ [Local Storage](./utils/localStoreUtils.js)
+ [Todo list Test](./__tests__/TodoList.test.js)
+ [Circle ci Deploy](./.circleci/config.yml)

## Live version
Link to the live version of the web application
>  [Todo List - DevOps & Testing](https://next-ci.herokuapp.com/)

## Recources
This project was made with:
+ [Next.js](https://nextjs.org/)
+ [CircleCi](https://circleci.com/)
+ [Heroku](https://heroku.com)
+ [Jest](https://jestjs.io/en/)

---

