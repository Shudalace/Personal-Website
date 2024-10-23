import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl">Get in Touch</motion.h1>
            <div className="text-center tracking-tighter">

                {/* Address linked to Google Maps */}
                <motion.a
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="my-4 block hover:underline"
                    style={{ color: 'inherit' }}
                >
                    {CONTACT.address}
                </motion.a>

                {/* Phone number linked to dialer */}
                <motion.a
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    href={`tel:${CONTACT.phoneNo}`}
                    className="my-4 block hover:underline"
                    style={{ color: 'inherit' }}
                >
                    {CONTACT.phoneNo}
                </motion.a>

                {/* Email linked to mail client */}
                <a
                    href={`mailto:${CONTACT.email}`}
                    className="border-b hover:underline"
                    style={{ color: 'inherit' }}
                >
                    {CONTACT.email}
                </a>
            </div>
        </div>
    );
};

export default Contact;
