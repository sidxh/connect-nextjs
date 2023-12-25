// pages/api/media-design.ts

import { NextApiRequest, NextApiResponse } from 'next';
import Inventory from '../../models/inventory';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const applicants = await Inventory.find({
      'Media & Design (If Proficient in any)': { $exists: true, $ne: '' },
    });

    const mediaDesignApplicants = applicants.map((applicant) => ({
      category: 'media-design',
      skill: applicant.get('Media & Design (If Proficient in any)') as string,
      name: applicant.Name,
      skillset: applicant.get(
        'What is your Skillset (any software/language) in the selected domain? (MD)'
      ),
      experience: applicant.get('What is your Experience (however little) in the selected domain? (MD)'),
      rollno: applicant['Roll No'][''].toString(),
      achievement: applicant.get('What are your Achievements (however small) in the selected domain? (MD)'),
      email: applicant.get('Email ID'),
      linkedin: applicant.get('LinkedIn Handle'),
    }));

    res.json(mediaDesignApplicants);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}
