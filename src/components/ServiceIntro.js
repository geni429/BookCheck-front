import React, {Component} from 'react';
import '../css/ServiceIntro.css';

class ServiceIntro extends Component{
  render() {
    return (
      <div>
        <div className="section-wrapper first-section" id="first-section">
          <h2 className="section-text-h2" id="section-text-h2">RFID로. 간단하게. 편하게</h2>
          <p className="section-text-p" id="section-text-p">책에 부착된 RFID 태그로 도서를 간단하게 관리하세요.</p> 
          <img id="infinite-image" src="http://uploads.webflow.com/5a2a159ab8745a00019f5581/5a2a159bb8745a00019f558d_infinite-loop.svg" alt=""/>  
        </div>
        <div className="section-wrapper" id="second-section">
          <p className="section-text-p" id="section-text-p">반응형 UI를 적용한 책첵은 당신의 스마트폰에서도 작동합니다.</p>
          <div id="image-crop">
            <img id="phone-image" src="http://uploads.webflow.com/5a2a159ab8745a00019f5581/5a2a159bb8745a00019f5593_flat-yellow.png" alt=""/>
          </div>    
        </div>
        <div className="section-wrapper third-section" id="third-section">
          <h2 className="section-text-h2" id="section-text-h2">초대 링크를 공유하세요.</h2>    
          <p className="section-text-p" id="section-text-p">여러분의 도서 그룹으로 친구들을 초대하세요.</p>
        </div>
      </div>
    )
  }
}

export default ServiceIntro;