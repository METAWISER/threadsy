import { Schema, model, models, Model, Document } from 'mongoose';

export interface IUser extends Document {
  id: string;
  username: string;
  name: string;
  image: string;
  bio: string;
  threads: string[];
  onboarded: boolean;
  communities: string[];
}

const userSchema = new Schema({
  id: { 
    type: String, 
    required: true 
  },
  username: { 
    type: String, 
    required: true , 
    unique: true
  },
  name: { 
    type: String, 
    required: true 
  },
  image: String,
  bio: String,
  threads: [
    { 
      type: Schema.Types.ObjectId, 
      ref: 'Thread' 
    }
  ],
  onboarded: { 
    type: Boolean, 
    default: false },
  communities: [
    { 
      type: Schema.Types.ObjectId, 
      ref: 'Community' 
    }
  ],
});

const User: Model<IUser> = models.User || model<IUser>('User', userSchema);

export default User;