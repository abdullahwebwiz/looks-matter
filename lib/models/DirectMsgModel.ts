import mongoose from 'mongoose';

export type DirectMsg = {
name:string;
email:string;
phone:string;
msg:string;
};
const DirectMsgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    required: true,
  },
});

const DirectMsgModel =
  mongoose.models?.DirectMsg ||
  mongoose.model('DirectMsg', DirectMsgSchema);

export default DirectMsgModel;
