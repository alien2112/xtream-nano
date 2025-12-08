import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ISiteImage extends Document {
    key: string;
    url: string;
    imageFileId?: string;
    section: string;
    label: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}

const SiteImageSchema: Schema = new Schema({
    key: { type: String, required: true, unique: true },
    url: { type: String, required: true },
    imageFileId: { type: String, required: false },
    section: { type: String, required: true },
    label: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const SiteImage: Model<ISiteImage> = mongoose.models.SiteImage || mongoose.model<ISiteImage>('SiteImage', SiteImageSchema);

export default SiteImage;
