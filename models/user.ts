import mongoose, { Document, Schema, Types, model } from "mongoose";

// Subdocument definition

interface WaterProps {
  precip: number;
  manualWater: boolean;
  shouldWater: boolean;
}

interface GuideProps {
  watering_guide: string;
  pruning_guide: string;
  sunlight_guide: string;
}

interface PlantProps {
  id: number;
  common_name: string;
  wateringRequested: string;
  totalWateringLvl?: number;
  pastWaterActivity: Types.DocumentArray<WaterProps>;
  currentWaterActivity: Types.DocumentArray<WaterProps>;
  pictureLink?: string;
  scienceName?: string;
  plantDetails?: GuideProps;
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

const waterSchema = new Schema<WaterProps>({
  precip: {
    type: Number,
  },
  manualWater: {
    type: Boolean,
  },
  shouldWater: {
    type: Boolean,
  },
});

const guideSchema = new Schema<GuideProps>({
  watering_guide: {
    type: String,
  },
  sunlight_guide: {
    type: String,
  },
  pruning_guide: {
    type: String,
  },
});

const plantSchema = new Schema<PlantProps>({
  id: {
    type: Number,
    required: true,
  },
  common_name: {
    type: String,
    required: true,
  },
  wateringRequested: {
    type: String,
    required: true,
  },
  pastWaterActivity: {
    type: [waterSchema],
  },
  currentWaterActivity: {
    type: [waterSchema],
  },
  totalWateringLvl: {
    type: Number,
  },
  pictureLink: {
    type: String,
  },
  scienceName: {
    type: String,
  },
  plantDetails: {
    type: guideSchema,
  },
});

// Document Schema

const userSchema = new Schema<UserProps>(
  {
    _id: {
      type: Schema.ObjectId,
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
