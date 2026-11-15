import { FaGithub, FaEnvelope, FaLinkedin, FaFile } from "react-icons/fa";
import "./icons.css";

export default function Icons() {
  return (
    <div className="icons">
      <a href="https://github.com/wil680" target="_blank">
        <FaGithub size={30} />
      </a>
      <a href="mailto:wy4pang@uwaterloo.ca?subject=Hi" target="_blank">
        <FaEnvelope size={30} />
      </a>
      <a href="https://www.linkedin.com/in/william-y-pang/" target="_blank">
        <FaLinkedin size={30} />
      </a>
      <a href="William_Pang_Resume.pdf" target="_blank">
        <FaFile size={30} />
      </a>
    </div>
  );
}
