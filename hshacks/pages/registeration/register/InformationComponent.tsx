import React from 'react'

interface InformationComponentInterface {
    name: string;
}

const InformationComponent: React.FC<InformationComponentInterface> = ({
    name
}) => {
  return (
    <div className="pb-4">
    <p className="pb-1 font-bold text-slate-500">{name}</p>
    <div className="bg-slate-300 w-full" style={{height: "2px"}} />
  </div>
  )
}

export default InformationComponent