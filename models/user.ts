import mongoose, { Document, Schema, Types, model } from "mongoose";

// Subdocument definition

interface PlantProps {
  id: number;
  common_name: string;
  watering: string;
  manualWateringLvl?: number;
  pictureLink?: string;
  scienceName?: string;
}

// Document definition

interface UserProps extends Document {
  _id: Types.ObjectId;
  name: string;
  email: string;
  image?: string;
  city?: string;
  weather?: any;
  garden?: Types.DocumentArray<PlantProps>;
  createdAt?: Date;
  updatedAt?: Date;
  weekLog?: number;
}

// Subdocument Schema

const plantSchema = new Schema<PlantProps>({
  id: {
    type: Number,
    required: true,
  },
  common_name: {
    type: String,
    required: true,
  },
  watering: {
    type: String,
    required: true,
  },
  manualWateringLvl: {
    type: Number,
  },
  pictureLink: {
    type: String,
  },
  scienceName: {
    type: String,
  },
});

// Document Schema

const userSchema = new Schema<UserProps>(
  {
    _id: {
      type: Schema.ObjectId,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
    },
    city: {
      type: String,
    },
    garden: [plantSchema],
    weather: {
      type: Array,
    },
    weekLog: {
      type: Number,
    },
  },
  { timestamps: true }
);

// Subdocument Model

let PlantModel: mongoose.Model<PlantProps>;

try {
  // Try to get the existing model from mongoose
  PlantModel = model<PlantProps>("Plant");
} catch {
  // If the model doesn't exist, define it
  PlantModel = model<PlantProps>("Plant", plantSchema);
}

// Document Model

let UserModel: mongoose.Model<UserProps>;

try {
  // Try to get the existing model from mongoose
  UserModel = model<UserProps>("User");
} catch {
  // If the model doesn't exist, define it
  UserModel = model<UserProps>("User", userSchema);
}

export { UserModel, PlantModel };