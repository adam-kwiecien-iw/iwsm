# IntegrationWorks Skills Matrix

This is a front end for the Skills Matrix written in Vue 3, which utilizes the iw-skills-matrix database within the IWSandpit within AWS.

It displays the Employees, relevant skills/technologies to the company and a rating that the employee has given themselves at that skill/technology

### Confidence Rating
0 = No knowledge

1 = Some knowledge but not confident

2 = Some hands on experience, but not confident

3 = Hands on experience and competent

4 = Confident

5 = Expert


There are calls to the REST API located within this vue project which then accesses the lambda functions deployed to GET, POST, DELETE and PUT to the database  

### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Project dependancies
-Bootsrap 5

-vue-loading-overlay

-vue-data-table


### Coinciding project

https://github.com/IntegrationWorks/iw-skills-matrix.git
