let backendHost; //백엔드 호스트 주소 결정

const hostname = window && window.location && window.location.hostname;

if(hostname === "localhost") {
  backendHost = "http://localhost:8080";
}else{
  // backendHost = "http://todoapplication00-backend0-dev.ap-northeast-2.elasticbeanstalk.com";
  // backendHost = "http://dev.ygyg.kro.kr";
  backendHost = "https://dev.ygyg.kro.kr";
}

export const API_BASE_URL = `${backendHost}`;