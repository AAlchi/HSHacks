import React from 'react'

const CodeOfConductLanding = () => {
    return (
        <div className='background'>
            <div className='text-white flex h-screen flex-col items-start justify-between gap-10 '>
                <div className='text-start flex flex-col gap-10 pb-5 items-start pt-20 justify-center px-4 md:px-8 lg:px-16'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-5xl font-extrabold pt-20'><span className="HSBlue"> HSHacks</span> Code of Conduct</h1>
                    </div>
                    <div className='whitespace-pre-line py-10 px-10 gap-5 flex flex-col justify-start bg-white text-black p-3 rounded-lg text-md'>
                        <div>
                            <h1 className='font-bold text-xl'>Purpose</h1>
                            {`
                                Welcome to HSHacks 2025! We are excited to see the amazing projects you'll build, and we hope to give you inspiration and support you on your programming journey!
                                
                                Our goal is to create an inspiring, safe, and welcoming environment where everyone can feel respected. In order to run HSHacks smoothly, we have established this code of conduct.
                          
                          `}    
                        </div>  
                        <div>
                            <h1 className='font-bold text-xl'>Project Guidelines</h1>
                            {`
                            `}<span className='font-bold pl-5'>• Hardware: </span>{`All projects should be digital and cannot rely on physical devices or components
                            
                                `}<span className='font-bold pl-5'>• Originality: </span>{`All projects must be created during the hackathon and must be original. Plagiarism or submitting pre-built projects developed prior to the event is not allowed and can result in disqualification.
                            
                                    `}<span className='font-bold pl-5'>• Resources: </span>{` Participants may use open-source libraries, frameworks, and APIs, but it is recommended to inform the judges of any resources used.
                            
                                        `}<span className='font-bold pl-5'>• Your Code: </span> {`All code should be open source (on GitHub or a similar website) and shared with the hackathon organizers for evaluation.
                            
                                            `}<span className='font-bold pl-5'>• Project Submission: </span>{`All projects must be submitted to DevPost before the stated deadline to be considered.

                          `}    
                        </div>  
                        <div>
                            <h1 className='font-bold text-xl'>Expected Behavior</h1>
                            {`
                                At HSHacks, we aim to have an environment of respect, professionalism, and collaboration. All participants are expected to follow these guidelines to ensure a smoothly-run hackathon and a positive experience for everyone.

                                     `}<span className='font-bold pl-5'>• Be Respectful</span>{`: Treat all participants, mentors, event staff, and sponsors with respect. Discriminatory and harassment behavior of any kind will not be tolerated.
                                  
                                    `}<span className='font-bold pl-5'>• Maintain Professionalism</span>{`: Please follow the venue's rules and the instructions provided. In addition, please make sure to return everything borrowed in the appropriate condition.
                                    
                                    `}<span className='font-bold pl-5'>• Collaborate Effectively</span>{`: Always credit the right person for their ideas, contributions, code, etc. Plagiarism may get you disqualified from the competition. 
                                    
                                    `}<span className='font-bold pl-5'>• Use Tools Wisely</span>{`: While using AI and other tools is acceptable, you may only use them for guidance. Plagarism or solely AI copied code is not accepted and may get you disqualified from the competition.

                          `}    
                        </div>  
                        <div>
                            <h1 className='font-bold text-xl'>Consequences</h1>
                            {` 
                                    `}<span className='font-bold pl-5'>• Immediate Action</span>{`: Anyone found violating the code of conduct may be asked to leave the event or face further actions.
                                  
                                    `}<span className='font-bold pl-5'>• Reporting</span>{`: If you witness or experience any behavior that violates the code of conduct, please report it to the event staff immediately. 
                                    
                             `}    
                        </div>  
                        <div>
                            <h1 className='font-bold text-xl'>Additional Information</h1>
                            {`
                                Thank you for helping us make HSHacks 2025 a possible event and a great event for everyone. We look forward to your participation and incredible innovations! If you have any questions or concerns, please don't hesitate to reach out to our team at `}<span className='font-bold'>team@hshacks.org</span>{`  
                             `}    
                        </div>  
                    </div> 
                </div> 
            </div>
        </div>
    )
}

export default CodeOfConductLanding