// api/web-technologies/route.ts

import { NextApiRequest, NextApiResponse } from 'next';
import Inventory from '../../models/inventory';
import connectDB from '../../utils/connectDB';

export async function get(req: NextApiRequest, res: NextApiResponse) {
  // Ensure that only GET requests are handled
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    await connectDB();
    const applicants = await Inventory.find({
      'Web Technologies': { $exists: true, $ne: '' },
    });

    const webTechApplicants = applicants.map((applicant) => ({
      category: 'web-technologies',
      skill: applicant.get('Web Technologies') as string,
      name: applicant.Name,
      skillset: applicant.get('What is your Technical Skillset (any software/language) in the selected domain? (WT)'),
      experience: applicant.get('What is your Experience (however little) in the selected domain? (WT)'),
      rollno: applicant['Roll No'][''].toString(),
      achievement: applicant.get('What are your Achievements (however small) in the selected domain? (WT)'),
      email: applicant.get('Email ID'),
      linkedin: applicant.get('LinkedIn Handle'),
    }));

    console.log('Data being sent to frontend:', webTechApplicants);
    res.json(webTechApplicants);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}
