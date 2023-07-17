## What is Middleware?
- functions that works between request(req) and response(res) cycle
source: https://expressjs.com/en/guide/writing-middleware.html

## Type of middleware:
### Build-in middleware as : express.json()
### 3rd-party middleware as: cors, multer, nodemailer, passport, JWT token etc
### custom middleware as: 
```
(req, res, next)=>{
    //do something
    next() 
    }
```

## How to use middleware?
- try to use it at the middle of 2 processes request and response
- use application use() function as : app.use(middlewareName or function)
e.g 1: 
```
app.use((req, res, next) => {
  console.log('Today is:', Date.now())
  next()
})
```
e.g 2: 
```
app.use(cors())
```

e.g 3: 
```
app.use(express.json())
```

## What is 'next' in custom middleware?
- next is a function: next()
- the name next is using inside custom middleware to say you can now go to next process without waiting
- it should be the last callback paramemter in middleware(req, res, next)

more details:
https://expressjs.com/en/guide/using-middleware.html

