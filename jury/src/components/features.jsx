import React from 'react';

const Features = () => {
  return (
    <div className="w-full h-[617px] bg-gray-950 flex items-center justify-center">
      <div className="w-[1168px] h-[436px] bg-gradient-to-r from-slate-600 to-gray-800 rounded-lg pl-5 backdrop-blur-2xl flex">
        <img src="/images/logo.png" alt="JuryDAO Logo" className="h-[382px] w-[364px] pt-12 pl-12" />
        <div className="w-auto h-[290px] text-sky-100 text-xl font-normal font-['Nunito'] leading-[33.28px] pt-12 px-[135px]">
          Metis is an open protocol and the Metis Andromeda network is open to any developer or team that wants to launch a DApp, token, or any other kind of project on our EVM-Equivalent platform.
          <br />
          Some of these projects may also choose to incorporate the Metis name into their own. However, Metis does not support or endorse any of these DApps, tokens, or projects unless specifically indicated by MetisLabs Foundation and its team members.
        </div>
      </div>
    </div>
  );
}

export default Features;
