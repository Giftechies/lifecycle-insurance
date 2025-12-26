import mongoose  from "mongoose";


const OneMoreSchema = new mongoose.Schema({
    heading: { type: String, required: [true,'Heading is required'] },
    content: { type: String, required: [true,'Content is required'] },
    buttonText: { type: String, required: [true,'Button text is required'] },
    buttonLink: { type: String, required: [true,'Button link is required'] },
    boxheading: { type: String, required: [true,'Box heading is required'] },
    boxcontent: { type: String, required: [true,'Box content is required'] },
    contact: { type: String, required: [true,'Contact information is required'] },
    image:{type:String},
    imageAlt:{type:String},
    image2:{type:String},
    image2Alt:{type:String},
});

const OneMore = mongoose.models.OneMore || mongoose.model('OneMore', OneMoreSchema);

export default OneMore;