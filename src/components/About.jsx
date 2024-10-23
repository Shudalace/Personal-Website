import aboutImg from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8 -mt-20"
                >
                    <div className="flex items-center justify-center">
                        {/* Make the image draggable */}
                        <motion.img
                            className="rounded-2xl w-1/2 h-1/2 ml-20"
                            src={aboutImg}
                            alt="about"
                            drag
                            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} 
                            dragElastic={0.5} 
                            whileTap={{ scale: 1.1 }} 
                            animate={{ x: 0, y: 0 }} 
                            transition={{ type: "spring", stiffness: 500, damping: 30 }} 
                        />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                    <a
                        href="/DarrylCV.zip"
                        download
                        className="mt-4 rounded-lg bg-neutral-800 px-6 py-2 text-white transition duration-300 ease-in-out hover:bg-purple-900"
                    >
                        Download CV
                    </a>
                </motion.div>
            </div>
        </div>
    )
};

export default About;
