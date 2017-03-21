import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const todoItemSchema = new Schema({
  table: { type: 'String', required: true }, 
  id: { type: 'Number', required: true },
  text: { type: 'String', required: true },
  completed: { type: 'Bool', default: false, required: true },
});

export default mongoose.model('TodoItem', todoItemSchema);
