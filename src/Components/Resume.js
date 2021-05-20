import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { MdWork } from "react-icons/md";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>

      {/* education */}

      <div className="row other__resume">
        <div className="three columns header-col">
          <h1>
            <span>Experince</span>
          </h1>
        </div>
        <div className="six columns education">
          <div className="single__education">
            <div className="single__education__icon">
              <IoBookOutline className="book_icon"/>
            </div>
            <div className="single__education__content">
              <span>Dhanmondi Govt Boys High School - February 2022 </span>
              <h3>SSC</h3>
              <p>Passed SSC with 5.0 GPA</p>
            </div>
          </div>

          <div className="single__education">
            <div className="single__education__icon">
              <IoBookOutline className="book_icon"/>
            </div>
            <div className="single__education__content">
              <span>Dhanmondi Govt Boys High School - February 2019 </span>
              <h3>JSC</h3>
              <p>Passed JSC with 5.0 GPA</p>
            </div>
          </div>

          <div className="single__education">
            <div className="single__education__icon">
              <IoBookOutline className="book_icon"/>
            </div>
            <div className="single__education__content">
              <span>Dhanmondi Govt Boys High School - February 2027 </span>
              <h3>PSC</h3>
              <p>Passed PSC with 5.0 GPA</p>
            </div>
          </div>
        </div>

        {/* work experince */}

        <div className="six columns work">
          <div className="single__work">
            <div className="single__work__icon">
              <MdWork className='worked_icon'/>
            </div>
            <div className="single__work__content">
              <span>OM SOFTWARE - (May 2021 - Present)</span>
              <h3>CEO and Founder</h3>
              <p>
                we create website firm that specializes in growing business to
                business companies. Our designs are cutting edge, and our
                results are unmatched. In a time where digital proficiency
                matters more than ever, we are the partner you are looking for.
              </p>
            </div>
          </div>
          <div className="single__work">
            <div className="single__work__icon">
              <MdWork className='worked_icon'/>
            </div>
            <div className="single__work__content">
              <span>KS Devware - (April 2021 - Present)</span>
              <h3>Web Developer</h3>
              <p>
                Developed many websites. Worked on improving user interfaces for
                websites. Optimized website speed. Helped to solve websites
                issues/bugs
              </p>
            </div>
          </div>
          <div className="single__work">
            <div className="single__work__icon">
              <MdWork className='worked_icon'/>
            </div>
            <div className="single__work__content">
              <span>FN'S SOFTWARE - (January 2021 - Present)</span>
              <h3>Web Developer</h3>
              <p>
                we create website firm that specializes in growing business to
                business companies. Our designs are cutting edge, and our
                results are unmatched. In a time where digital proficiency
                matters more than ever, we are the partner you are looking for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
