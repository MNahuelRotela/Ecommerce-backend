const server = require('./src/app.js');
const { sequelize } = require('./src/db.js'); 


sequelize.sync({ alter: true }).then(() => { 
  server.listen(8080, () => {
    console.log('server listening at 8080'); 
  });
});
