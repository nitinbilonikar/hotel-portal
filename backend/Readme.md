
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


npm install --save-dev mysql2 dotenv 
npm install pg
npm i --save-dev @types/pg

#run the test using folowing command
npx jest

#start the server ensure its run in backedn folder
npm start
