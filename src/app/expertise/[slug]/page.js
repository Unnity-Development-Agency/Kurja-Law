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
import Image from "next/image";
import Footer from "@/app/components/Footer";

const page = () => {
  const params = useParams();
  const slug = params.slug.split("-").join(" ");

  return (
    <div>
      <InfoBar />
      <Header />
      <section className="bg-[#F9F6F2]">
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
                <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#8B6D38] mb-5">
                  Our Expertise
                </h2>
                <div className="flex items-center justify-center gap-3">
                  <span className="block w-16 h-px bg-gradient-to-r from-transparent to-[#8B6D38]" />
                  <span className="block w-2 h-2 rotate-45 bg-[#8B6D38]" />
                  <span className="block w-16 h-px bg-gradient-to-l from-transparent to-[#8B6D38]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-7xl w-full mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:items-start">
            {/* Left Sidebar */}
            <div className="md:sticky md:top-20 md:col-span-1 order-2 md:order-1">
              <div className="bg-[#525E75] rounded-sm overflow-hidden shadow-lg">
                {/* Sidebar Header */}
                <div className="px-5 py-4 border-b border-white/15">
                  <div className="flex items-center gap-2">
                    <span className="text-white/70 text-sm">
                      <GiInjustice />
                    </span>
                    <p className="text-white/70 text-xs uppercase tracking-widest font-medium">
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
                            border-b border-white/10 transition-all duration-300
                            ${
                              isActive
                                ? "bg-white/20 text-white"
                                : "text-white/60 hover:bg-white/10 hover:text-white"
                            }
                          `}
                          >
                            <span className="text-sm font-medium tracking-wide">
                              {item.title}
                            </span>
                            <span
                              className={`
                              text-xs transition-all duration-300
                              ${
                                isActive
                                  ? "translate-x-0 opacity-100 text-white"
                                  : "opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100"
                              }
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

              {/* Contact card */}
              <div className="mt-4 bg-[#525E75] rounded-sm p-5 shadow-lg">
                <p className="text-white/60 text-xs uppercase tracking-widest font-medium mb-3">
                  Need Help?
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Speak with our legal experts for a confidential consultation.
                </p>
                <a
                  href="tel:+919654656822"
                  className="flex items-center gap-2 text-white text-sm font-semibold bg-white/15 border border-white/20 px-4 py-2.5 rounded-sm hover:bg-white/25 transition-colors duration-300"
                >
                  <span>
                    <MdAddCall />
                  </span>
                  +91 9654656822
                </a>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="md:col-span-3 order-1 md:order-2">
              <div className="bg-white/60 backdrop-blur-sm rounded-sm shadow-md py-6 px-4 min-h-96">
                {expertise?.map((item) => {
                  if (item.title.toLowerCase() !== slug.toLowerCase())
                    return null;
                  return (
                    <div key={item.id}>
                      {/* Content heading */}
                      <div className="mb-6">
                        <p className="text-[11px] tracking-[0.25em] uppercase text-[#525E75] font-medium mb-2">
                          Practice Area
                        </p>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1F0E] first-letter:uppercase mb-4">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="block w-16 h-px bg-linear-to-r from-transparent to-[#525E75]" />
                          <span className="block w-2 h-2 rotate-45 bg-[#525E75]" />
                          <span className="block w-16 h-px bg-linear-to-l from-transparent to-[#525E75]" />
                        </div>
                      </div>

                      {/* Description */}
                      <p
                        style={{
                          textAlign: "justify",
                          textJustify: "inter-word",
                        }}
                        className="text-black text-base leading-relaxed font-sans"
                      >
                        {item.description}
                      </p>

                      {/* Gallery */}
                      {item?.gallery?.length > 0 && (
                        <div className="mt-10">
                          <div className="flex items-center gap-3 mb-5">
                            <div className="w-6 h-px bg-[#525E75]" />
                            <p className="text-[11px] tracking-[0.22em] uppercase text-[#525E75] font-medium">
                              Gallery
                            </p>
                            <div className="flex-1 h-px bg-linear-to-r from-[#525E75]/30 to-transparent" />
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            {item.gallery.map((img, idx) => (
                              <div
                                key={img}
                                className={`
                                  relative overflow-hidden rounded-sm group cursor-pointer
                                  
                                `}
                              >
                                <Image
                                  src={img}
                                  alt={`${item.title} ${idx + 1}`}
                                  width={400}
                                  height={400}
                                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#525E75]/0 group-hover:bg-[#525E75]/25 transition-all duration-300" />
                                <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-[#525E75]/0 group-hover:border-[#525E75]/80 transition-all duration-300" />
                                <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-[#525E75]/0 group-hover:border-[#525E75]/80 transition-all duration-300" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
