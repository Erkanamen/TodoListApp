const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/Todo',
  port: process.env.PORT || 8000,
  itemIndex: 0
};

export default config;
