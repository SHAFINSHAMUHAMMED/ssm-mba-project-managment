import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PopupProvider } from './components/Hoocks/PopupContext';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
const RECAPTCHA_SITE_KEY =  '6Lc0HaYqAAAAAPd5XOQndIqluiv7zakAbWZVXPnU';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <GoogleReCaptchaProvider
      reCaptchaKey={RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head'
      }}
    >
  <PopupProvider>
 <App />
 </PopupProvider>
 </GoogleReCaptchaProvider>
</React.StrictMode>,
)
