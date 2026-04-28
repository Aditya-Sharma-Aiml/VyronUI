import React, { useState } from "react";

export const MultiStepForm = ({ steps = [], onSubmit = () => {}, accent = "#6366f1", bg = "#0f172a", brandName = "VyronUI" }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <div style={{ background: bg, padding: "20px", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.4)" }}>
      <div style={{ marginBottom: "20px" }}>
        <div style={{ height: "8px", background: accent, width: (currentStep + 1) / steps.length * 100 + "%", transition: "width 0.3s ease" }} />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
          <span>{currentStep + 1} / {steps.length}</span>
          <span>{Math.round(((currentStep + 1) / steps.length) * 100)}% Complete</span>
        </div>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {steps.map((_, index) => (
            <div key={index} style={{ position: "relative", textAlign: "center" }}>
              <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: index <= currentStep ? accent : "rgba(255,255,255,0.07)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>{index + 1}</div>
              {index < steps.length - 1 && <div style={{ position: "absolute", top: "50%", left: "100%", width: "100px", height: "2px", background: "rgba(255,255,255,0.1)" }} />}
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={currentStep === steps.length ? handleSubmit : (e) => e.preventDefault()}>
        {currentStep < steps.length ? (
          <div style={{ transition: "transform 0.3s ease", transform: `translateX(${currentStep * -100}%)`, display: "flex", width: "100%" }}>
            {steps.map((step, index) => (
              <div key={index} style={{ width: "100%", padding: "20px", boxSizing: "border-box" }}>
                <h2 style={{ color: "#fff" }}>{step.title}</h2>
                {step.fields.map((field) => (
                  <div key={field.name} style={{ marginBottom: "15px" }}>
                    <label style={{ color: "#fff", display: "block", marginBottom: "5px" }} htmlFor={field.name}>{field.label}{field.required ? " *" : ""}</label>
                    <input type={field.type} id={field.name} name={field.name} placeholder={field.placeholder} required={field.required} style={{ width: "100%", padding: "10px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.1)", color: "#fff" }} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ padding: "20px" }}>
            <h2 style={{ color: "#fff" }}>Review your information</h2>
            {steps.map((step, index) => (
              <div key={index} style={{ marginBottom: "15px" }}>
                <h3 style={{ color: "#fff" }}>{step.title}</h3>
                {step.fields.map((field) => (
                  <div key={field.name} style={{ marginBottom: "5px" }}>
                    <strong style={{ color: "#fff" }}>{field.label}:</strong> {""} <span style={{ color: "#fff" }}>{field.placeholder}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          {currentStep > 0 && <button type="button" onClick={handleBack} style={{ padding: "10px 20px", borderRadius: "10px", border: "none", background: "rgba(255,255,255,0.1)", color: accent, cursor: "pointer" }}>Back</button>}
          {currentStep < steps.length ? <button type="button" onClick={handleNext} style={{ padding: "10px 20px", borderRadius: "10px", border: "none", background: accent, color: "#fff", cursor: "pointer" }}>Next</button> : <button type="submit" style={{ padding: "10px 20px", borderRadius: "10px", border: "none", background: accent, color: "#fff", cursor: "pointer" }}>Submit</button>}
        </div>
      </form>
      <footer style={{ marginTop: "20px", textAlign: "center", color: "rgba(255,255,255,0.5)" }}>
        <p>Powered by {brandName}</p>
      </footer>
    </div>
  );
};