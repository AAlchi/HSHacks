import { NextApiRequest, NextApiResponse } from "next"; 

const handler = async (req: NextApiRequest, res: NextApiResponse) => { 
  try {
    const formFields = [
        {
          group: 0,
          type: "text",
          component: "TextFieldComponent",
          required: true,
          props: {
            name: "firstName",
            placeHolder: "John",
            type: "text", 
            question: "First Name",
            subtext: "",
          },
        },
        {
          group: 0,
          type: "text",
          component: "TextFieldComponent",
          required: true,
          props: {
            name: "lastName",
            placeHolder: "Doe",
            type: "text", 
            question: "Last Name",
            subtext: "",
          },
        },
        {
          group: 0,
          type: "email",
          component: "TextFieldComponent",
          required: true,
          props: {
            name: "email",
            placeHolder: "john.doe@website.com",
            type: "text", 
            question: "Email",
            subtext: "",
          },
        },
        {
          group: 1,
          type: "radio",
          component: "RadioComponent",
          required: true,
          props: {
            name: "laptop",
            listOfNames: ["Yes: Please bring it!", "No"],
            question: "Do you have a laptop you can bring?",
            subtext: "Unfortunately, we aren’t able to provide laptops this year.", 
          },
        },
        {
          group: 1,
          type: "text",
          component: "ParagraphComponent",
          required: false,
          props: {
            name: "experience",
            placeHolder: "e.x. classes, projects, years of programming experience",
            type: "text", 
            question: "What is your experience level in programming?",
            subtext: "This doesn't make a difference! Just for us to know. You can participate regardless of experience level.",
          },
        },
        {
          group: 1,
          type: "radio",
          component: "RadioComponent",
          required: true,
          props: {
            name: "grade",
            listOfNames: ["9", "10", "11", "12"],
            question: "What grade are you in?",
            subtext: "This year, we are only accepting participants in grades 9-12", 
          },
        },
        // {
        //   group: 1,
        //   type: "radio",
        //   component: "RadioComponent",
        //   required: false,
        //   props: {
        //     name: "shirtSize",
        //     listOfNames: ["SM", "MD", "LG", "XL"],
        //     question: "T-shirt size",
        //     subtext: "While this field is optional, we highly recommend selecting an option to better help us with picking t-shirt sizes", 
        //   },
        // },
        {
          group: 2,
          type: "text",
          component: "ParagraphComponent",
          required: false,
          props: {
            name: "dietaryRestrictions",
            placeHolder: "e.x. Peanuts, gluten, lactose",
            type: "text", 
            question: "Dietary restrictions",
            subtext: "Ex: Peanuts, gluten, lactose",
          },
        },
        {
          group: 2,
          type: "text",
          component: "ParagraphComponent",
          required: false,
          props: {
            name: "otherInfo",
            placeHolder: "",
            type: "text", 
            question: "Other information",
            subtext: "",
          },
        },
      ]


    return res.status(200).json(formFields)
  } catch (err) {  
    return res.status(500).json({ message: "Server Error" + err})
  }
} 

export default handler;
