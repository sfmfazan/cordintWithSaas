### create a route called '/my/secret/hide' do these:
- post an object data whch has id as random number, secret_message which has a sentence or message 
- res.json() this object data in thunder client/postman
- now use bcrypt and hide this secret_message then res.json again and see the difference
- use 15 round of salts
- use a secret/private key to make a hash of secret_message

### create route '/my/secret/show' :
- use bcrypt.compare() to test if you can retrieve the data back(decrypt)

### create a route called '/employee/register' which can do:
- post employee info as name, country, address, zip, role, salary, password, email
- save employee info using Employee model(create a model also)
- When saving this data lets hide salary, password of user by 'bcrypt' so no one can read this

### create a route called '/employee/login' which can check employee login using email and password
- if login successfully matched with DB data redirect employee to '/employee/profile' page where he can see all his/her data
- else redirect employee to '/employee/login' page again and display a message say 'login failed'