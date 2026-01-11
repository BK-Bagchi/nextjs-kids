import Image from "next/image";
import React from "react";
import BannerImg from "../../../public/assets/hero.png";
import { fontBangla } from "@/app/layout";

const Banner = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1 space-y-5">
        <h1 className={`${fontBangla.className} text-6xl font-bold leading-20`}>
          আপনার সন্তানকে দিন একটি{" "}
          <span className="text-primary">সুন্দর ভবিষ্যৎ</span>
        </h1>
        <p className="py-6 capitalize">But every toy with upto 15% discount</p>
        <button className="btn btn-primary btn-outline">
          Explore Products
        </button>
      </div>
      <div className="flex-1">
        <Image src={BannerImg} alt="hero" />
      </div>
    </div>
  );
};

export default Banner;
