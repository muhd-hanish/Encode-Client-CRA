import React, { ChangeEvent } from 'react'
import { FormValues } from '../../../../../dtos/Form';

interface InputProps {
  sessionState: FormValues;
  setSessionState: (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

const TitleInput: React.FC<InputProps> = ({ sessionState ,setSessionState}) => {
  return (
    <>
      <div className="w-full h-fit  flex ">
        <div className="flex flex-col w-full justify-center items-start h-fit p-3">
          <span className="text-sm font-medium">
            Coursename <span className="text-red-500">*</span>
          </span>
          <div className="p-1 w-full h-fit">
            <input
              type="text"
              placeholder="coursename (max-50)"
              className="border text-[14px] p-2 w-full   rounded-md outline-none shadow-md"
              name="coursename"
              onChange={setSessionState}
              value={sessionState.coursename}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleInput