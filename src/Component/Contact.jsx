import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import ServiceWrapper from "../hoc/SercicesWrapper";
import axios from "axios";

const Contact = () => {
  const [Mail, setMail] = useState("");
  const [Name, setName] = useState("");
  const [Message, setMessage] = useState("");
  const [Subject, setSubject] = useState("");
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);
  console.log(error);
  const Submit = () => {
    if (!Name.trim()) {
      setError("name");
    } else if (!Mail.trim()) {
      setError("mail");
    } else if (!Subject.trim()) {
      setError("sub");
    } else if (!Message.trim()) {
      setError("msg");
    } else {
      setloading(true);
      const data = {
        from: Name,
        email: Mail,
        subject: Subject,
        message: Message,
      };
      const config = {
        method: "POST",
        url: "https://api.dicetechnologies.tech/con/contacting",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(config)
        .then((response) => {
          console.log(response, "res");
          alert(
            "Thank you for getting in touch, we will get back to you as soon as possible"
          );
          setloading(false);
          setMail("");
          setMessage("");
          setName("");
          setSubject("");
        })
        .catch((err) => {
          console.log(err, "i am error");
        });
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-6 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Name</span>
            <input
              type="text"
              name="name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              placeholder="What's your name?"
              style={{
                border:
                  Name.length > 0
                    ? "1px solid #ECECEC"
                    : error == "name"
                    ? "1px solid red"
                    : "1px solid #ECECEC",
              }}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your email</span>
            <input
              type="email"
              name="email"
              value={Mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="What's your email?"
              style={{
                border:
                  Mail.length > 0
                    ? "1px solid #ECECEC"
                    : error == "mail"
                    ? "1px solid red"
                    : "1px solid #ECECEC",
              }}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Subject</span>
            <input
              type="text"
              name="text"
              placeholder="What's your subject?"
              onChange={(e) => setSubject(e.target.value)}
              value={Subject}
              style={{
                border:
                  Subject.length > 0
                    ? "1px solid #ECECEC"
                    : error == "sub"
                    ? "1px solid red"
                    : "1px solid #ECECEC",
              }}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Message</span>
            <textarea
              rows={4}
              name="message"
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              onChange={(e) => setMessage(e.target.value)}
              value={Message}
              style={{
                border:
                  Message.length > 0
                    ? "1px solid #ECECEC"
                    : error == "msg"
                    ? "1px solid red"
                    : "1px solid #ECECEC",
              }}
            />
          </label>

          <button
            type="submit"
            onClick={() => Submit()}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default ServiceWrapper(Contact, "contact");
