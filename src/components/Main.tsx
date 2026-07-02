import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profileImg from '../assets/images/hyojeong.JPG'; // 1. 이미지 임포트 완료!


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* 2. 기존 문자열 경로를 중괄호 처리된 profileImg 변수로 변경합니다. */}
          <img src={profileImg} alt="Hyojeong Profile" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/hyojeong33" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hyojeong-lee-5299a0266" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          
          <h1>Hyojeong Lee</h1> 
          <p>Cognitive Science & Machine Learning</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/hyojeong33" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hyojeong-lee-5299a0266" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;