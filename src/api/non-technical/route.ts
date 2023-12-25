// pages/api/non-technical.ts

import { NextApiRequest, NextApiResponse } from 'next';
import Inventory from '../../models/inventory';

export default async function getNonTechnicalData(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const applicants = await Inventory.find({
      'Non - Technical (If Proficient in any)': { $exists: true, $ne: '' },
    });

    const nonTechApplicants = applicants.map((applicant) => ({
      category: 'non-technical',
      skill: applicant.get('Non - Technical (If Proficient in any)') as string,
      name: applicant.Name,
      skillset: applicant.get(
        'What is your Skillset (any software/language) in the selected domain? (NT)'
      ),
      experience: applicant.get('What is your Experience (however little) in the selected domain? (NT)'),
      rollno: applicant['Roll No'][''].toString(),
      achievement: applicant.get('What are your Achievements (however small) in the selected domain? (NT)'),
      email: applicant.get('Email ID'),
      linkedin: applicant.get('LinkedIn Handle'),
    }));

    res.json(nonTechApplicants);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}
