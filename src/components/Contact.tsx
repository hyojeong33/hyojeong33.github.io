import React from 'react';
import '../assets/styles/Contact.scss';
import DescriptionIcon from '@mui/icons-material/Description';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Feel free to reach out for collaborations or inquiries! <br/>
            Email: <b>lovelee010303@gmail.com</b> | Phone: <b>(858)-214-4823</b>
          </p>
          
          {/* 🌟 스타일이 확실하게 적용되는 커스텀 버튼 구조 */}
          <div className="resume-container">
            <a 
              href={process.env.PUBLIC_URL + '/Hyojeong_Lee_Resume.pdf'} 
              download="Hyojeong_Lee_Resume.pdf" 
              className="custom-resume-btn"
            >
              <DescriptionIcon style={{ fontSize: '20px' }} />
              <span>Download My Resume</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
