import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* 🌟 public 폴더에 저장한 이미지를 절대 경로로 안전하게 불러와 에러를 해결합니다 */}
          <img src={process.env.PUBLIC_URL + '/hyojeong.jpg'} alt="Hyojeong Profile" />
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