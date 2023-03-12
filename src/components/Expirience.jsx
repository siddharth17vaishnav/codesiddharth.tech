import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className={'bg-[#4831D4] md:px-[170px] text-[#4831D4] px-4'}>
        <div className="flex pt-4">
            <h1 className="text-4xl font-bold text-[#CCF381] ">Expirience</h1>
            <span className="w-full h-[1px] bg-[#CCF381] my-auto"/>
        </div>
      <div className="experience">
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2010 - 2014"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              New Model Higher Secondary School,Surat
            </h3>
            <p> High School</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2014 - 2018"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Gujarat Technology University
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Bachelor's Degree
            </h4>

            <p> Bachelor's in Computer Applications</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2020"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
               FrontEnd Engineer - VAMVERSE
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
                Surat,Gujarat
            </h4>
            <p>Developed the frontend infrastructure for many projects.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - present"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title" >
              Full Stack Engineer - Propelius Technologies
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Surat, Gujarat
            </h4>
            <p>
              Learned and Worked in many project as an both Frontend and Backend Engineer
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
