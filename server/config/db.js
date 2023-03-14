const mongoose = require('mongoose')
        const username = "melese999";
        const password = "nvK9EZLqcxZJrTa9";
        const cluster = "cluster0.xfakash";
        const dbname = "myFirstDatabase";
        
      mongoose.connect(
          `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
          {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }
        );
    
  
 