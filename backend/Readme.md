
mkdir backend
cd backend
npm init -y

npm install express jsonwebtoken bcryptjs body-parser
npm install --save-dev typescript @types/node @types/express ts-jest jest

npm i --save-dev @types/bcryptjs
npm i --save-dev @types/jsonwebtoken

npm i --save-dev @types/supertest
npm i --save-dev @types/jest
npm i --save-dev ts-node


#start the server
npm start
