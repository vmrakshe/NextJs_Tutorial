//import Head from "next/head";
import React from "react";
import Link from "next/link";
//import Footer from "../../../components/Footer";

const About = () => {
  return (
    <>
      <div>
        <h2 className=" p-2 font-bold text-2xl">about page</h2>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
          repudiandae? Quod ducimus deserunt, officiis blanditiis distinctio hic
          eum dignissimos sequi modi! Natus pariatur non earum sunt accusamus
          eum maiores fuga?
        </div>
      </div>
    </>
  );
};

export const metadata = {
  title: "About Us",
};

export default About;
