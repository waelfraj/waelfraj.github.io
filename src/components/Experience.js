import React from "react";
import JobList from "./JobList";
import FadeInSection from "./FadeInSection";

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="relative min-h-[80vh] px-[15%] lg:px-[10%] md:px-6 py-32 md:py-20"
    >
      <FadeInSection>
        <div className="section-header mb-16">
          <h2 className="section-title">
            Where I've Worked
          </h2>
        </div>
        <JobList />
      </FadeInSection>
    </section>
  );
};

export default Experience;
