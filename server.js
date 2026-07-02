const express = require('express');
const connectDB = require('./DB/connection');
const app = express();
const port = process.env.PORT || 3000;	

connectDB();
app.use(express.json({ extended: false }));
app.use('/api/userModel', require('./api/user'));
	
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
