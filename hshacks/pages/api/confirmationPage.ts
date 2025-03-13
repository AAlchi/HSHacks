import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const {firstName, lastName, email, laptop, experience, grade, shirt, diet, other} = req.body;
        const errors: string[] = [];
        const names: string[] = [firstName, lastName];
        const explains: string[] = [experience, diet, other];
        const choices: string[] = [laptop, grade, shirt];
        const combinedArr = names.concat(email.concat(choices));
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const namePattern = /^[a-zA-Z\s'-]{2,25}$/;
        const explainPattern = /^[a-zA-Z0-9\s.,'!?\-()]{0,500}$/;

        for (let i = 0; i < combinedArr.length; i++) {
            if (combinedArr[i] == null) {
                return res.status(400).json({ message: "Empty Required Inputs"});
            }
        }

        for (const s of names) {
            let c = 0;
            if (c == 0 && !namePattern.test(s)) {
                errors.push("Name Error");
                c++;
            }
        }

        if (!emailPattern.test(email)) {
            errors.push("Email Error");
        }

        for (const s of explains) {
            if (!explainPattern.test(s)) {
                errors.push("Explain Error");
            }
        }

        if (errors.length > 0) {
            return res.status(400).json({ message: "Errors", details: errors, requestBody: req.body });
          } else {
            return res.status(200).json({ message: "OK", requestBody: req.body })
          }
    } catch (err) {
        return res.status(500).json({ message: "Server Error", err })
    }
}