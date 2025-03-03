import { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import Accreditation from "./Accreditation";
import LocationSetup from "./LocationSetup";
import Logo from "@/assets/allocatr-dark.svg";
import AllocatrIcon from "@/assets/icon-variant-01.svg";
import { useAuth0 } from "@auth0/auth0-react";

const steps = ["Profile Info", "Accreditation", "Location"];

const ProfileSetup = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const { user } = useAuth0();

  return (
    // <div className="h-screen py-[4%] bg-gradient-to-r from-alc-primary to-alc-red">
    <div className="h-screen py-[4%] bg-alc-light-gray/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between py-4">
          <span className="flex items-center">
            <img
              src={AllocatrIcon}
              alt="allocatr" width={80}
              className="p-2"
            />
            <span className="text-alc-gray">
              <h1 className="font-bold text-xl">
                Welcome {user?.given_name}
              </h1>
              <span className="text-sm">
                Let's quickly setup your profile
              </span>
            </span>
          </span>

          <img
            src={Logo}
            alt="allocatr" width={90}
            className="p-4"
          />

        </div>
        <div className="p-6 rounded-lg shadow-lg bg-alc-primary">
          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-6">
            {steps.map((step, index) => (
              <div key={index} className={`flex-1 text-center py-2 
                ${index <= currentStep ? "bg-alc-sky-blue text-white font-bold" : "bg-alc-light-gray text-alc-gray"}`}>
                {step}
              </div>
            ))}
          </div>

          {/* Step Content */}
          {currentStep === 0 && <ProfileInfo />}
          {currentStep === 1 && <Accreditation />}
          {currentStep === 2 && <LocationSetup />}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevStep}
              className="px-4 py-2 bg-alc-gray text-white rounded disabled:opacity-50"
              disabled={currentStep === 0}
            >
              Back
            </button>
            <button
              onClick={nextStep}
              className="px-4 py-2 bg-alc-secondary text-alc-primary rounded"
            >
              {currentStep === steps.length - 1 ? "Finish" : "Save & Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
