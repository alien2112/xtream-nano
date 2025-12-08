import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IServiceFeature {
    titleAr: string;
    descriptionAr: string;
    icon?: string;
}

export interface IService extends Document {
    titleAr: string;
    descriptionAr: string;
    longDescription: string;
    longDescriptionAr: string;
    image: string;
    imageFileId?: string;
    slug: string;
    features: IServiceFeature[];
    benefits: string[];
    benefitsAr: string[];
    warranty?: string;
    warrantyAr?: string;
    featured?: boolean;
    order?: number;
    createdAt: Date;
}

const ServiceSchema: Schema = new Schema({
    titleAr: { type: String, required: true },
    descriptionAr: { type: String, required: true },
    longDescription: { type: String, required: false },
    longDescriptionAr: { type: String, required: false },
    image: { type: String, required: false },
    imageFileId: { type: String, required: false },
    slug: { type: String, required: true, unique: true },
    warranty: { type: String, required: false },
    warrantyAr: { type: String, required: false },
    featured: { type: Boolean, default: false, index: true },
    order: { type: Number, default: 0 },
    features: [{
        titleAr: String,
        descriptionAr: String,
        icon: String
    }],
    benefits: [String],
    benefitsAr: [String],
    createdAt: { type: Date, default: Date.now },
});

const Service: Model<IService> = mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);

export default Service;
