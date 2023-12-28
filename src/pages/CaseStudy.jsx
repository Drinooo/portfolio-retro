import { Typography } from "@material-tailwind/react";
import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { CONTENT } from "../utils/CaseStudies";
import { motion } from "framer-motion";
import CopyToClipboard from "react-copy-to-clipboard";

const CaseStudy = () => {
  const { id } = useParams();

  const caseStudy = CONTENT[id];

  const copy = {
    value: "",
    copied: false,
  };

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
          <div className="flex gap-[250px]">
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
            <div className="space-y-[48px]">
              <div>
                <p className="text-black text-body2 font-semibold">
                  {caseStudy.objectiveTitle1}
                </p>
                <h6 className="text-black text-body2">
                  {caseStudy.objectiveDesc1}
                </h6>
              </div>
              <div>
                <p className="text-black text-body2 font-semibold">
                  {caseStudy.objectiveTitle2}
                </p>
                <h6 className="text-black text-body2">
                  {caseStudy.objectiveDesc2}
                </h6>
              </div>
              <div>
                <p className="text-black text-body2 font-semibold">
                  {caseStudy.objectiveTitle3}
                </p>
                <h6 className="text-black text-body2">
                  {caseStudy.objectiveDesc3}
                </h6>
              </div>
              <div>
                <p className="text-black text-body2 font-semibold">
                  {caseStudy.objectiveTitle4}
                </p>
                <h6 className="text-black text-body2">
                  {caseStudy.objectiveDesc4}
                </h6>
              </div>
            </div>
          </div>

          {/* STRATEGIES IMPLEMENTED */}
          <div className="space-y-[38px]">
            <p className="text-gray2 text-caption">Strategies Implemented</p>
            <div className="space-y-[48px]">
              <div>
                <p className="text-black text-body2 font-semibold">
                  {caseStudy.strategiesTitle1}
                </p>
                <h6 className="text-black text-body2">
                  {caseStudy.strategiesDesc1}
                </h6>
              </div>
              <div>
                <p className="text-black text-body2 font-semibold">
                  {caseStudy.strategiesTitle2}
                </p>
                <h6 className="text-black text-body2">
                  {caseStudy.strategiesDesc2}
                </h6>
              </div>
              <div>
                <p className="text-black text-body2 font-semibold">
                  {caseStudy.strategiesTitle3}
                </p>
                <h6 className="text-black text-body2">
                  {caseStudy.strategiesDesc3}
                </h6>
              </div>
              <div>
                <p className="text-black text-body2 font-semibold">
                  {caseStudy.strategiesTitle4}
                </p>
                <h6 className="text-black text-body2">
                  {caseStudy.strategiesDesc4}
                </h6>
              </div>
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
            <div className="flex gap-[48px]">
              <div className="space-y-4">
                <p className="text-gray2 text-caption">Primary Colors</p>
                <div className="flex gap-[24px]">
                  <div
                    className="p-[50px]"
                    style={{ background: caseStudy.primaryColor1 }}
                  >
                    <p className={`text-${caseStudy.contrastText1}`}>
                      {caseStudy.primaryColor1}
                    </p>
                  </div>
                  <div
                    className="p-[50px]"
                    style={{ background: caseStudy.primaryColor2 }}
                  >
                    <p className={`text-${caseStudy.contrastText1}`}>
                      {caseStudy.primaryColor2}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray2 text-caption">Accent Colors</p>
                <div className="flex gap-[24px]">
                  <div
                    className="p-[50px]"
                    style={{ background: caseStudy.accentColor1 }}
                  >
                    <p className={`text-${caseStudy.contrastText2}`}>
                      {caseStudy.accentColor1}
                    </p>
                  </div>
                  <div
                    className="p-[50px]"
                    style={{ background: caseStudy.accentColor2 }}
                  >
                    <p className={`text-${caseStudy.contrastText2}`}>
                      {caseStudy.accentColor2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TYPOGRAPHY */}
          <div>
            <div>
              <h4 className="text-h4 font-semibold">Typeface</h4>
            </div>
            <div className="flex justify-evenly items-center">
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
