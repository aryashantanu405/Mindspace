import mongoose from 'mongoose';

const testDataSchema = new mongoose.Schema({
  name: String,
  value:Number,
});

const TestData = mongoose.model('testdata',testDataSchema,'test');

// Default export
export default TestData;
