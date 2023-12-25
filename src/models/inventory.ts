// models/inventory.ts

import mongoose, { Document, Model } from 'mongoose';

interface InventoryItem extends Document {
  Name: string;
  'Email ID': string;
  'Roll No': { '': string };
  'LinkedIn Handle': string;
  'Web Technologies': string;
  'What is your Technical Skillset (any software/language) in the selected domain? (WT)': string;
  'What is your Experience (however little) in the selected domain? (WT)': string;
  'What are your Achievements (however small) in the selected domain? (WT)': string;
  'Non - Technical (If Proficient in any)': string;
  'What is your Skillset (any software/language) in the selected domain? (NT)': string;
  'What is your Experience (however little) in the selected domain? (NT)': string;
  'What are your Achievements (however small) in the selected domain? (NT)': string;
  'Media & Design (If Proficient in any)': string;
  'What is your Skillset (any software/language) in the selected domain? (MD)': string;
  'What is your Experience (however little) in the selected domain? (MD)': string;
  'What are your Achievements (however small) in the selected domain? (MD)': string;
  'Core Domains (If Proficient in any)': string;
  'What is your Skillset (any software/language) in the selected domain? (CD)': string;
  'What is your Experience (however little) in the selected domain? (CD)': string;
  'What are your Achievements (however small) in the selected domain? (CD)': string;
  'Miscellaneous (If Proficient in any)': string;
  'What is your Skillset (any software/language) in the selected domain? (MC)': string;
  'What is your Experience (however insignificant) in the selected domain? (MC)': string;
  'What are your Achievements (however small) in the selected domain? (MC)': string;
}

const inventorySchema = new mongoose.Schema<InventoryItem>({
  Name: {
    type: String,
    required: true,
  },
  'Email ID': {
    type: String,
    required: true,
  },
  'Roll No': {
    '': {
      type: String,
    },
  },
  'LinkedIn Handle': {
    type: String,
  },
  'Web Technologies': {
    type: String,
  },
  'What is your Technical Skillset (any software/language) in the selected domain? (WT)': {
    type: String,
  },
  'What is your Experience (however little) in the selected domain? (WT)': {
    type: String,
  },
  'What are your Achievements (however small) in the selected domain? (WT)': {
    type: String,
  },
  'Non - Technical (If Proficient in any)': {
    type: String,
  },
  'What is your Skillset (any software/language) in the selected domain? (NT)': {
    type: String,
  },
  'What is your Experience (however little) in the selected domain? (NT)': {
    type: String,
  },
  'What are your Achievements (however small) in the selected domain? (NT)': {
    type: String,
  },
  'Media & Design (If Proficient in any)': {
    type: String,
  },
  'What is your Skillset (any software/language) in the selected domain? (MD)': {
    type: String,
  },
  'What is your Experience (however little) in the selected domain? (MD)': {
    type: String,
  },
  'What are your Achievements (however small) in the selected domain? (MD)': {
    type: String,
  },
  'Core Domains (If Proficient in any)': {
    type: String,
  },
  'What is your Skillset (any software/language) in the selected domain? (CD)': {
    type: String,
  },
  'What is your Experience (however little) in the selected domain? (CD)': {
    type: String,
  },
  'What are your Achievements (however small) in the selected domain? (CD)': {
    type: String,
  },
  'Miscellaneous (If Proficient in any)': {
    type: String,
  },
  'What is your Skillset (any software/language) in the selected domain? (MC)': {
    type: String,
  },
  'What is your Experience (however insignificant) in the selected domain? (MC)': {
    type: String,
  },
  'What are your Achievements (however small) in the selected domain? (MC)': {
    type: String,
  },
});

const Inventory: Model<InventoryItem> = mongoose.models.Inventory || mongoose.model('Inventory', inventorySchema);

export default Inventory;
