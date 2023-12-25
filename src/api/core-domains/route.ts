// pages/api/core-domains.ts

import { NextApiRequest, NextApiResponse } from 'next';
import Inventory from '../../models/inventory';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const applicants = await Inventory.find({
      'Core Domains (If Proficient in any)': { $exists: true, $ne: '' },
    });

    const coreDomainsApplicants = applicants.map((applicant) => ({
      category: 'core-domains',
      skill: applicant.get('Core Domains (If Proficient in any)') as string,
      name: applicant.Name,
      skillset: applicant.get(
        'What is your Skillset (any software/language) in the selected domain? (CD)'
      ),
      experience: applicant.get('What is your Experience (however little) in the selected domain? (CD)'),
      rollno: applicant['Roll No'][''].toString(),
      achievement: applicant.get('What are your Achievements (however small) in the selected domain? (CD)'),
      email: applicant.get('Email ID'),
      linkedin: applicant.get('LinkedIn Handle'),
    }));

    res.json(coreDomainsApplicants);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}
