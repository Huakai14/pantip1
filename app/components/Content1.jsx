"use client";
import React, { useState, useRef } from "react";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import {Image} from "@nextui-org/react";

const projectsData = [
    {
      id: 1,
      date: "13/10/2567",
      description: "ทำกิจกรรมร่วมกับ Pantip Happy Prize",
      tag: ["All", "PantipPick"],
      image: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
    },
    {
      id: 2,
      date: "2/4/2567",
      description: "ค่าใช้จ่ายในการมีลูก 1 คนต้องเตรียมเงินแค่ไหน",
      tag: ["All", "PantipPick"],
      image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    },
    {
      id: 3,
      date: "1/4/2567",
      description: "และแล้ววันนี้ก็มาถึง วันที่ต้องปิดกิจการมาขอกำลังใจและไอเดียในการพูดกับพนักงานค่ะ ตอนสมองยังอึ้งคิดอะไรไม่ออก",
      tag: ["All", "PantipHitz"],
      image: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
    },
  ];

const Content1 = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };
  
  return (
    <div>
        <div className='' id="projects">
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                onClick={handleTagChange}
                name="All"
                isSelected={tag === "All"}
                />
                <ProjectTag
                onClick={handleTagChange}
                name="PantipPick"
                isSelected={tag === "PantipPick"}
                />
                <ProjectTag
                onClick={handleTagChange}
                name="PantipHitz"
                isSelected={tag === "PantipHitz"}
                />
            </div>
            <ul ref={ref} className="flex flex-col px-96 mb-24">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                        className="py-2"
                    >
                        <div key = {project.id} className="flex">
                            <div className="mr-3">
                                <Image
                                    width={300}
                                    alt="NextUI hero Image"
                                    src={project.image}
                                />
                            </div>
                            <div className="text-white">
                                <p>{project.description}</p>
                                <p>{project.date}</p>
                            </div>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Content1