import { Card, CardBody } from "@material-tailwind/react";
import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { CONTENT } from "../utils/CaseStudies";
import { motion } from "framer-motion";

const CaseStudy = () => {
  const { id } = useParams();

  const caseStudy = CONTENT[id];
  const objectivesData = CONTENT[id].objectives;
  const strategiesData = CONTENT[id].strategies;
  const primaryColorsData = CONTENT[id].design.primaryColors;
  const accentColorsData = CONTENT[id].design.accentColors;

  return (
    <Fragment>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <section className="space-y-[94px] max-w-screen-2xl mx-auto sm:pt-12 lg:pt-24 ">
          <div>
            <p className="text-gray2 text-caption">Project Name</p>
            <h2 className="text-black text-h2 font-bold">
              {caseStudy.projectName}
            </h2>
          </div>

          {/* INTRODUCTION */}
          <div>
            <p className="text-gray2 text-caption">Introduction</p>
            <p className="text-black text-body2 font-normal">
              {caseStudy.introduction}
            </p>
          </div>

          {/* TIMELINE */}
          <div className="flex flex-wrap sm:gap-[50px] lg:gap-[250px]">
            <div>
              <p className="text-gray2 text-caption">Timeline</p>
              <h6 className="text-black text-body2 font-normal">
                {caseStudy.timeline}
              </h6>
            </div>
            <div>
              <p className="text-gray2 text-caption">Platform</p>
              <h6 className="text-black text-body2 font-normal">
                {caseStudy.platform}
              </h6>
            </div>
            <div>
              <p className="text-gray2 text-caption">Role</p>
              <h6 className="text-black text-body2 font-normal">
                {caseStudy.role}
              </h6>
            </div>
          </div>

          {/* OBJECTIVES */}
          <div className="space-y-[38px]">
            <p className="text-gray2 text-caption">Objectives</p>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
              {objectivesData.map((objective, index) => (
                <Card
                  className="w-full shadow-none bg-transparent border-3 rounded-none"
                  key={index}
                >
                  <CardBody className="text-center h-full">
                    <p className="text-black text-body2 font-semibold">
                      {objective.title}
                    </p>
                    <p className="text-black text-body2">
                      {objective.description}
                    </p>
                  </CardBody>
                  <div className="border-t-3"></div>
                  <div className="border-gray border-4"></div>
                </Card>
              ))}
            </div>
          </div>

          {/* STRATEGIES IMPLEMENTED */}
          <div className="space-y-[38px]">
            <p className="text-gray2 text-caption">Strategies Implemented</p>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
              {strategiesData.map((strategy, index) => (
                <Card
                  className="w-full shadow-none bg-transparent border-3 rounded-none"
                  key={index}
                >
                  <CardBody className="text-center h-full">
                    <p className="text-black text-body2 font-semibold">
                      {strategy.title}
                    </p>
                    <p className="text-black text-body2">
                      {strategy.description}
                    </p>
                  </CardBody>
                  <div className="border-t-3"></div>
                  <div className="border-gray border-4"></div>
                </Card>
              ))}
            </div>
          </div>

          {/* COLOURS */}
          <div className="space-y-[24px]">
            <div>
              <h4 className="text-h4 font-semibold">Colours</h4>
              <p className="text-black text-body2 font-normal">
                {caseStudy.colorDesc}
              </p>
            </div>
            <div className="flex gap-[48px] flex-wrap">
              <div className="space-y-4">
                <p className="text-gray2 text-caption">Primary Colors</p>
                <div className="flex gap-[24px]">
                  {primaryColorsData.map((item, index) => (
                    <div
                      key={index}
                      className="sm:p-[70px] lg:p-[100px]"
                      style={{ background: item }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray2 text-caption">Accent Colors</p>
                <div className="flex gap-[24px]">
                  {accentColorsData.map((item, index) => (
                    <div
                      key={index}
                      className="sm:p-[70px] lg:p-[100px]"
                      style={{ background: item }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* TYPOGRAPHY */}
          <div>
            <div>
              <h4 className="text-h4 font-semibold">Typeface</h4>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 items-center">
              <div className="w-full">
                <h1 className="text-h2 font-bold">{caseStudy.fontFamily}</h1>
              </div>
              <div className="w-full">
                <p className="text-caption">{caseStudy.fontDesc}</p>
              </div>
            </div>
          </div>

          {/* CONCLUSION */}
          <div>
            <p className="text-gray2 text-caption">Conclusion</p>
            <p className="text-black text-body2 font-normal">
              {caseStudy.conclusion}
            </p>
          </div>
        </section>
      </motion.div>
    </Fragment>
  );
};

export default CaseStudy;
