import React, { useState } from "react";
import { ExternalLink, Play, Apple } from "lucide-react";
import boomPopImg from "../assets/portfolio/boom.png";
import adaniImg from "../assets/portfolio/adani.png";
import cePoliteImg from "../assets/portfolio/ce-polite.png";
import farmpikImg from "../assets/portfolio/farmpik.png";
import tataEarlyEdgeImg from "../assets/portfolio/tata-early-edge.png";
import tataNeuImg from "../assets/portfolio/tata-neu-app.png";
import tataStudiImg from "../assets/portfolio/tata-studi.png";
import weCuraImg from "../assets/portfolio/we-cura.png";

const portfolioData = [
  {
    id: "boompop",
    title: "BoomPop",
    category: "Website",
    categoryColor: "text-blue-400",
    // Using a subtle blue glow inspired by the screenshot's light blue background
    accentGradient: "from-blue-600/10 to-indigo-600/10",
    logoUrl:
      "https://ui-avatars.com/api/?name=BP&background=2563EB&color=fff&rounded=true",
    description:
      "Built The Backend System For This Leading Platform In Corporate Event Planning And Remote Team Experiences. Our Work Involved Secure API Development, Microservice Architecture, And Scalable Server-Side Infrastructure.",
    tags: ["React", "Node.js", "Microservices"], // Inferred tags, you can update these
    links: [
      { text: "Visit Site", url: "https://boompop.com/", type: "external" },
    ],
    mockupUrl: boomPopImg,
  },
  {
    id: "adani-one",
    title: "Adani One",
    category: "Mobile App",
    categoryColor: "text-orange-400",
    // Subtle peach/orange glow
    accentGradient: "from-orange-500/10 to-red-500/10",
    logoUrl:
      "https://ui-avatars.com/api/?name=AO&background=EA580C&color=fff&rounded=true",
    description:
      "Adani One Is A Lifestyle And Travel App That Streamlines The Travel Experience By Providing Features Like Flight Bookings, Airport Services, Real-Time Updates, Loyalty Programs, And Exclusive Offers, All In One Seamless Platform.",
    tags: ["Flutter", "React Native", "API Integration"],
    links: [
      {
        text: "App Store",
        url: "https://apps.apple.com/in/app/adani-oneapp-for-smart-travel/id1630064188",
        type: "appstore",
      },
      {
        text: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.adanione.android&hl=en_IN",
        type: "playstore",
      },
    ],
    mockupUrl: adaniImg,
  },
  {
    id: "tata-neu",
    title: "Tata Neu",
    category: "Website & Mobile App",
    categoryColor: "text-purple-400",
    // Subtle purple/blue glow
    accentGradient: "from-purple-500/10 to-blue-500/10",
    logoUrl:
      "https://ui-avatars.com/api/?name=TN&background=000&color=fff&rounded=true",
    description:
      "Tata Neu Is A Comprehensive Lifestyle App Offering Seamless Shopping, Travel And Payment Experiences, Integrating Various Services From The Tata Group Into One Platform For Enhanced User Engagement.",
    tags: ["React", "iOS", "Android", "E-commerce"],
    links: [
      {
        text: "App Store",
        url: "https://apps.apple.com/in/app/tata-neu-shop-travel-pay/id1584669293",
        type: "appstore",
      },
      {
        text: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.tatadigital.tcp&pcampaignid=web_share",
        type: "playstore",
      },
    ],
    mockupUrl: tataNeuImg,
  },
  {
    id: "wecura",
    title: "WeCura",
    category: "Mobile App",
    categoryColor: "text-cyan-400",
    // Subtle cyan glow
    accentGradient: "from-cyan-500/10 to-blue-500/10",
    logoUrl:
      "https://ui-avatars.com/api/?name=WC&background=06B6D4&color=fff&rounded=true",
    description:
      "WeCura And WeCura Pro Are Healthcare Management Apps That Enable Patient Communication, Appointment Scheduling, And Medical Record Tracking. The Apps Aim To Simplify Healthcare Services For Both Patients And Medical Professionals.",
    tags: ["Healthcare", "Mobile", "Scheduling"],
    links: [
      {
        text: "App Store",
        url: "https://apps.apple.com/in/app/wecura/id6743443368",
        type: "appstore",
      },
      {
        text: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.wecura.patient",
        type: "playstore",
      },
    ],
    mockupUrl: weCuraImg,
  },
  {
    id: "tata-studi",
    title: "Tata Studi",
    category: "Mobile App",
    categoryColor: "text-blue-500",
    // Subtle dark blue glow
    accentGradient: "from-blue-500/10 to-indigo-500/10",
    logoUrl:
      "https://ui-avatars.com/api/?name=TS&background=3B82F6&color=fff&rounded=true",
    description:
      "Tata Studi Is An E-Learning Application For Nursery To 12th Grade Students. Designed To Connect All State Boards, The App Focuses On Developing Better Learning Habits In Students And Includes Features Like Big Idea Videos, Revision Videos, Practice Tests, Notes, Study Plans, Digital Tests, OMR Tests, And Assignments.",
    tags: ["EdTech", "Video Streaming", "Assessments"],
    links: [
      {
        text: "App Store",
        url: "https://apps.apple.com/in/app/tata-studi/id1532854969",
        type: "appstore",
      },
      {
        text: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.tce.studi&pcampaignid=web_share",
        type: "playstore",
      },
    ],
    mockupUrl: tataStudiImg,
  },
  {
    id: "tata-early-edge",
    title: "Tata Early edge",
    category: "Mobile App",
    categoryColor: "text-yellow-400",
    // Subtle yellow glow
    accentGradient: "from-yellow-500/10 to-amber-500/10",
    logoUrl:
      "https://ui-avatars.com/api/?name=TE&background=EAB308&color=fff&rounded=true",
    description:
      "Tata EarlyEdge Home Is An E-Learning Application For Nursery, Junior KG, And Senior KG Students. Aimed At Fostering Better Learning Habits, The App Connects Various State Boards And Offers Books, Videos, Worksheets, Audio, Notes, Ebooks, And Images For An Interactive Learning Experience.",
    tags: ["EdTech", "Early Learning", "Interactive Content"],
    links: [
      {
        text: "App Store",
        url: "https://apps.apple.com/in/app/earlyedge-home/id6504813745",
        type: "appstore",
      },
      {
        text: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.tce.ee.parent&pcampaignid=web_share",
        type: "playstore",
      },
    ],
    mockupUrl: tataEarlyEdgeImg,
  },
  {
    id: "ce-polite",
    title: "CE Polite",
    category: "Website & Mobile App",
    categoryColor: "text-blue-600",
    // Subtle deep blue glow
    accentGradient: "from-blue-600/10 to-blue-800/10",
    logoUrl:
      "https://ui-avatars.com/api/?name=CE&background=1D4ED8&color=fff&rounded=true",
    description:
      "An Interactive Whiteboard App For Teachers, CE Polite Allows Educators To Manage All Syllabus-Related Content Assigned To Them. It Enables The Creation Of Notes Using Multiple Shapes And Freehand Drawing, Which Are Saved In Relation To The Content Being Taught. This App Enhances The Teaching Experience By Offering Video, Quiz, And Other Content-Related Resources.",
    tags: ["EdTech", "Whiteboard", "WebRTC"],
    links: [
      {
        text: "Visit Site",
        url: "https://www.tataclassedge.com/",
        type: "external",
      },
    ],
    mockupUrl: cePoliteImg,
  },
  {
    id: "adani-farmpik",
    title: "Adani FarmPik",
    category: "Mobile App",
    categoryColor: "text-green-500",
    // Subtle green glow
    accentGradient: "from-green-500/10 to-emerald-500/10",
    logoUrl:
      "https://ui-avatars.com/api/?name=AF&background=22C55E&color=fff&rounded=true",
    description:
      "Adani FarmPik Connects Farmers With Buyers To Improve Market Access. The Platform Offers Features Such As Product Listings, Order Management, And Secure Transactions, Helping To Streamline The Farming Supply Chain.",
    tags: ["AgriTech", "Marketplace", "Mobile"],
    links: [
      {
        text: "App Store",
        url: "https://apps.apple.com/in/app/adani-farmpik/id6449207612",
        type: "appstore",
      },
      {
        text: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.adani.farmpik&pcampaignid=web_share",
        type: "playstore",
      },
    ],
    mockupUrl: farmpikImg,
  },
];

const categories = ["All", "Website", "Mobile App", "Website & Mobile App"];

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = portfolioData.filter((project) =>
    activeFilter === "All" ? true : project.category === activeFilter,
  );

  const renderButton = (link) => {
    if (link.type === "playstore") {
      return (
        <a
          key={link.text}
          href={link.url}
          className="inline-flex items-center gap-2 bg-[#00c853] hover:bg-[#00e676] text-black px-4 py-2 rounded-full text-sm font-semibold transition-colors"
        >
          <Play size={16} fill="currentColor" />
          {link.text}
        </a>
      );
    }
    if (link.type === "appstore") {
      return (
        <a
          key={link.text}
          href={link.url}
          className="inline-flex items-center gap-2 bg-[#007aff] hover:bg-[#3395ff] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
        >
          <Apple size={18} fill="currentColor" />
          {link.text}
        </a>
      );
    }
    // Default External Link Button
    return (
      <a
        key={link.text}
        href={link.url}
        className="inline-flex items-center gap-2 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white bg-[#111] hover:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium transition-colors"
      >
        {link.text}
        <ExternalLink size={14} />
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans selection:bg-cyan-500/30 selection:text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center bg-gradient-to-b from-[#0b0b0b] to-black">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">
            Our Portfolio
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our collection of websites, mobile applications, and
            enterprise solutions built for startups and global brands.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="bg-black/80 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-white/10 text-white border border-white/20"
                  : "bg-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5 border border-transparent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List - Alternating Layout */}
      <main className="flex flex-col">
        {filteredProjects.map((project, index) => {
          // Alternate sides based on index
          const isEven = index % 2 === 0;

          return (
            <section
              key={project.id}
              className={`w-full overflow-hidden border-b border-white/5 relative ${isEven ? "bg-[#050505]" : "bg-[#0a0a0a]"}`}
            >
              {/* Subtle background glow based on accent gradient */}
              <div
                className={`absolute top-1/2 ${isEven ? "-left-64" : "-right-64"} -translate-y-1/2 w-96 h-96 bg-gradient-to-tr ${project.accentGradient} rounded-full blur-[120px] opacity-40 pointer-events-none`}
              ></div>

              <div
                className={`max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-32 flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 lg:gap-20 relative z-10`}
              >
                {/* Text Content Block */}
                <div className="flex-1 space-y-6 w-full">
                  {/* Category Pill & Logo (Optional: removing logo to stay closer to original dark theme, but keeping pill) */}
                  <div
                    className={`inline-block border border-white/10 bg-white/5 px-3 py-1 rounded-full text-xs font-medium tracking-wide ${project.categoryColor}`}
                  >
                    {project.category}
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                    {project.title}
                  </h2>

                  <p className="text-base md:text-lg leading-relaxed text-gray-400 max-w-xl">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 bg-[#111] text-gray-400 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    {project.links.map(renderButton)}
                  </div>
                </div>

                {/* Image / Mockup Block */}
                <div className="flex-1 w-full flex justify-center">
                  <div className="relative w-full max-w-lg group">
                    {/* The Image (Using the provided filenames) */}
                    <div className="relative flex items-center justify-center">
                      {/* 
                         Note: Depending on the aspect ratio of the provided images, 
                         we remove the fixed aspect ratio container to let the image dictate its size,
                         especially since some are tall mobile mockups and some are wide laptop mockups.
                       */}
                      <img
                        src={project.mockupUrl}
                        alt={project.title}
                        className="w-full h-auto max-h-[600px] object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
