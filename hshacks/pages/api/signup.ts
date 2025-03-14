import { NextApiRequest, NextApiResponse } from "next";
import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import axios from "axios"; 

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != "POST") {
    return res.status(405).json({ message: "Request method is invalid" });
  }

  try {
    const { dietaryRestrictions, email, experience, firstName, grade, laptop, lastName, otherInfo } = req.body;

    const requiredFields = [
      dietaryRestrictions,
      email,
      experience,
      firstName,
      grade,
      laptop,
      lastName,
      otherInfo
    ];

    const isFieldEmpty = requiredFields.some(field => field === null || field === undefined);

    if (isFieldEmpty) {
      return res.status(400).send('One or more fields are empty');
    }

    const userId = firstName + email + Math.random();

    const docRef = doc(db, "users", userId);
    
    await setDoc(docRef, {
      uid: userId,
      dietaryRestrictions,
      email,
      experience,
      firstName,
      grade,
      laptop,
      lastName,
      otherInfo,
      createdAt: new Date(),
    });

    await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: { email: "team@hshacks.org" },
        to: [{ email }],
        subject: 'HSHacks Signup Confirmation',
        htmlContent: `
<html> 
  <body style="font-family: sans-serif; padding: 10px">
    <div style="font-weight: bold; font-size: 30px; color: #3e3e3e; padding: 30px 0px 30px 0px"><span>You're Confirmed for </span> <span style="color: #5480d0;">HSHacks 2025</span><span>!</span></div>
    <div style="padding: 10px; background-color: #f7f7f7; border-radius: 20px">
    <p style="padding: 10px 0px 10px 10px; font-weight: bold">Here are the details of the event:</p>
    
    <ul>
    	<li style="padding: 10px 0px 10px 0px">Event location: Northwest Suburbs, 1900 E Thomas St, Arlington Heights, IL 60004</li>
        <li style="padding: 10px 0px 10px 0px">Event Date: April 12, 2025</li>
        <li style="padding: 10px 0px 10px 0px">Event Time: 8am - 8pm (Central Time) </li>
        <li style="padding: 10px 0px 10px 0px">Our website: <a href="https://hshacks.org">https://hshacks.org</a></li>
    </ul>
    <p style="padding: 10px 0px 10px 10px">Questions? Contact us at team@hshacks.org</p> 
    <p style="font-weight: bold; font-size: 20px; padding: 10px 0px 10px 10px">HSHacks is brought to you by: </p>
    <ul style="list-style-type: none; font-size: 18px;">
        <li style="padding-bottom: 15;">Normandy Remodeling</li>
        <li style="padding-bottom: 15;">Legat Architects</li>
        <li style="padding-bottom: 15;">CodeCrafters</li>
        <li style="padding-bottom: 15;">XYZ</li>
    </ul>

    </div>
    <p style="font-weight: bold; text-align: center">* Make sure you or your parent/guardian has a school/state ID upon enterance *</p>
  </body>
</html>
              `,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY,
        },
      }
    );

    return res.status(200).json({ message: "Signup Complete" })
  } catch (err) {
    return res.status(500).json({ message: "Server Error", err })
  }
} 