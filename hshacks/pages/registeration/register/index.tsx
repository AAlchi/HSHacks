import RadioComponent from "../components/RadioComponent/RadioComponent";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import TextFieldComponent from "../components/TextFieldComponent/TextFieldComponent";
import TimeBoxComponent from "../components/TimeBoxComponent/TimeBoxComponent";
import LoadingComponent from "../components/LoadingComponent/LoadingComponent";
import ButtonComponent from "../components/buttonComponent/ButtonComponent";
import InformationComponent from "./InformationComponent";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import ReCAPTCHA from 'react-google-recaptcha';
import ParagraphComponent from "../components/ParagraphComponent/ParagraphComponent";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  laptop: string;
  experience: string;
  grade: string; 
  dietaryRestrictions: string;
  otherInfo: string;
}


const Register = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    "firstName": "",
    "lastName": "",
    "email": "",
    "laptop": "",
    "experience": "",
    "grade": "", 
    "dietaryRestrictions": "",
    "otherInfo": ""
  });
  const [formFields, setFormFields] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFormFields = async () => {
      try {
        const response = await axios.get('/api/registrationFields');
        setFormFields(response.data);
        setIsLoading(false);
      } catch (error) {
        toast.error('There was an error, please try again later.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    };

    fetchFormFields();
  }, []);

  const redirect = () => {
    console.log(formData)

    axios.post("/api/signup", formData);

    router.push("/registration-complete");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handlePreviousStep = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setStep(step - 1)
  }

  const handleNextStep = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

    if (step + 1 == 3) { 
      setIsLoading(true);

      redirect()
    } else {
      setStep(step + 1);
    }

  }

  const [recaptchaValue, setRecaptchaValue] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/enterprise.js?render=6Ldvt_IqAAAAAKj_XBFehSwEw304Rg4ML0FhfYFr';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleRecaptchaChange = (value: any) => {
    setRecaptchaValue(value);
  };
  return (
    <div className="flex items-center justify-center bg-none relative py-10 rounded-lg" style={{ overflow: "hidden" }}>
      <div className="bg-white flex flex-col rounded w-11/12 p-6 mt-[85px] relative max-w-[600px]">
        <div className="flex flex-col items-start justify-start py-5 gap-3">
          <img style={{ width: "200px", height: "50px", objectFit: "cover" }} src="./HSHacks_Logo.png" alt="HSHacks_Logo" />
          <p className="text-slate-400 font-bold pl-1 text-xs">This is the official registration form for HSHacks 2025. We currently accept no more than 170 signups. Please contact team@hshacks.org for any questions.</p>

        </div>
        <InformationComponent name={step == 0 ? "General Information" : step == 1 ? "Event Information" : "Other Information"} />
        {!isLoading ? (
          <form onSubmit={(e) => handleNextStep(e as any)}>
            {formFields.map((data: any) => (
              <div key={data.props.name}>
                {data.component == "TextFieldComponent" && data.group == step && (
                  <TextFieldComponent required={data.required} name={data.props.name} subtext={data.props.subtext} placeHolder={data.props.placeHolder} question={data.props.question} onChange={(e) => handleInputChange(e)} type={data.type} value={formData[data.props.name as keyof FormData]} />
                )}
                {data.component == "ParagraphComponent" && data.group == step && (
                  <ParagraphComponent required={data.required} name={data.props.name} subtext={data.props.subtext} placeHolder={data.props.placeHolder} question={data.props.question} onChange={(e) => handleInputChange(e as any)} value={formData[data.props.name as keyof FormData]} />
                )}
                {data.component == "RadioComponent" && data.group == step && (
                  <RadioComponent required={data.required} name={data.props.name} subtext={data.props.subtext} listOfNames={data.props.listOfNames} question={data.props.question} onChange={(e) => handleInputChange(e)} chosenElement={formData[data.props.name as keyof FormData]} />
                )}
              </div>
            ))}


            {step == 2 && (
              <div className="flex flex-col gap-1">
                <ReCAPTCHA
                  sitekey="6Ldvt_IqAAAAAKj_XBFehSwEw304Rg4ML0FhfYFr"
                  onChange={handleRecaptchaChange}
                />
                <p className="text-slate-500 text-sm pb-2 py-2">Please read over the <Link style={{ color: "blue" }} href="/codeofconduct" target="_blank">HSHacks code of conduct</Link> before submiting</p>
              </div>
            )}
            <div className="flex gap-2 w-full justify-start">
              {step != 0 && (
                <ButtonComponent secondary name="Back" onClick={(e) => handlePreviousStep(e as any)} />
              )}
              <ButtonComponent name={step == 2 ? "Submit" : "Next"} submit onClick={(e) => redirect} disabled={step == 2 && !recaptchaValue} />
            </div> 
          </form>
        ) : (
          <LoadingComponent />
        )}

      </div>
      <div className="invisible lg:visible absolute bottom-3 right-3"><TimeBoxComponent /></div>


    </div>
  )

}
export default Register;