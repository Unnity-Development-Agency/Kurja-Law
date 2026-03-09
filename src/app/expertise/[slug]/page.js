"use client";
import React from "react";
import { useParams } from "next/navigation";
import Header from "@/app/components/Header";
import InfoBar from "@/app/components/InfoBar";
import expertise from "../../data/expertise.json";
import { MdAddCall } from "react-icons/md";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { GiInjustice } from "react-icons/gi";
import Link from "next/link";

const page = () => {
  const params = useParams();
  const slug = params.slug.split("-").join(" ");

  return (
    <div>
      <InfoBar />
      <Header />
      <section className="bg-[#F1DDBF]">
        {/* Hero Banner */}
        <div className="max-w-full w-full pb-10 md:pb-16">
          <div className="relative max-w-full w-full h-44">
            <img
              src="/Expertise-hero.jpg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#2c1f0e8b] flex items-center justify-center">
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#8B6D38]/50" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#8B6D38]/50" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#8B6D38]/50" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#8B6D38]/50" />
              <div className="text-center">
                <p className="text-[11px] tracking-[0.25em] uppercase text-[#8B6D38] font-light mb-3">
                  Practice Areas
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#8B6D38] mb-5 first-letter:uppercase">
                  {slug}
                </h2>
                <div className="flex items-center justify-center gap-3">
                  <span className="block w-16 h-px bg-linear-to-r from-transparent to-[#8B6D38]" />
                  <span className="block w-2 h-2 rotate-45 bg-[#8B6D38]" />
                  <span className="block w-16 h-px bg-linear-to-l from-transparent to-[#8B6D38]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-7xl w-full mx-auto px-4 pb-16">
          <div className="  grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Left Sidebar — filter/links */}
            <div className="md:col-span-1 order-2 md:order-1">
              <div className="bg-[#2C1F0E] rounded-sm overflow-hidden shadow-lg">
                {/* Sidebar Header */}
                <div className="px-5 py-4 border-b border-[#8B6D38]/30">
                  <div className="flex items-center gap-2">
                    <span className="text-[#8B6D38] text-sm">
                      <GiInjustice />
                    </span>
                    <p className="text-[#8B6D38] text-xs uppercase tracking-widest font-medium">
                      Practice Areas
                    </p>
                  </div>
                </div>

                {/* Links */}
                <ul className="flex flex-col">
                  {expertise?.map((item) => {
                    const isActive =
                      item.title.toLowerCase() === slug.toLowerCase();
                    return (
                      <li key={item.id}>
                        <Link href={`/expertise/${item.slug}`}>
                          <div
                            className={`
                            group flex items-center justify-between px-5 py-3.5
                            border-b border-[#8B6D38]/10
                            transition-all duration-300
                            ${
                              isActive
                                ? "bg-[#8B6D38] text-white"
                                : "text-[#c9a880] hover:bg-[#3d2b12] hover:text-white"
                            }
                          `}
                          >
                            <span className="text-sm font-medium tracking-wide">
                              {item.title}
                            </span>
                            <span
                              className={`
                              text-xs transition-transform duration-300
                              ${isActive ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100"}
                            `}
                            >
                              <HiMiniArrowLongRight />
                            </span>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Contact card below sidebar */}
              <div className="mt-4 bg-[#2C1F0E] rounded-sm p-5 shadow-lg">
                <p className="text-[#8B6D38] text-xs uppercase tracking-widest font-medium mb-3">
                  Need Help?
                </p>
                <p className="text-[#c9a880] text-sm leading-relaxed mb-4">
                  Speak with our legal experts for a confidential consultation.
                </p>
                <a
                  href="tel:+911234567890"
                  className="flex items-center gap-2 text-white text-sm font-semibold bg-[#8B6D38] px-4 py-2.5 rounded-sm hover:bg-[#a07d42] transition-colors duration-300"
                >
                  <span>
                    <MdAddCall />
                  </span>{" "}
                  +91 1234567890
                </a>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="md:col-span-3 order-1 md:order-2">
              <div className="bg-white/60 backdrop-blur-sm rounded-sm shadow-md p-8 min-h-96">
                {expertise?.map((item) => {
                  if (item.title.toLowerCase() !== slug.toLowerCase())
                    return null;
                  return (
                    <div key={item.id}>
                      {/* Content heading */}
                      <div className="mb-6">
                        <p className="text-[11px] tracking-[0.25em] uppercase text-[#8B6D38] font-medium mb-2">
                          Practice Area
                        </p>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1F0E] first-letter:uppercase mb-4">
                          {item.title}
                        </h3>
                        {/* Gold divider */}
                        <div className="flex items-center gap-3">
                          <span className="block w-16 h-px bg-linear-to-r from-transparent to-[#8B6D38]" />
                          <span className="block w-2 h-2 rotate-45 bg-[#8B6D38]" />
                          <span className="block w-16 h-px bg-linear-to-l from-transparent to-[#8B6D38]" />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[#3d2b12] text-base leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
