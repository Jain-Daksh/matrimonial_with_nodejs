require('dotenv').config()

module.exports = {
  
  "development": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": "postgres",
    "define": {
      "timestamp" : true
    }
    
  },
  "test": {
    "username": "postgres",
    "password": "daksh",
    "database": "matrimonial_project",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "daksh",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
  
}
