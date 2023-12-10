import React from 'react';

const Features = () => {
  return (
    <div className="w-full h-[617px] bg-gray-950 flex items-center justify-center">
      <div className="w-[1168px] h-[436px] bg-gradient-to-r from-slate-600 to-gray-800 rounded-lg pl-5 backdrop-blur-2xl flex">
        <img src="/images/logo.png" alt="JuryDAO Logo" className="h-[382px] w-[364px] pt-12 pl-12" />
        <div className="w-auto h-[290px] text-sky-100 text-xl font-normal font-['Nunito'] leading-[33.28px] pt-12 px-[135px]">
          With JuryDAO, we are coming up with a nonpartisan selection system. The jurors can join to our DAO by a simple Anon Aadhar verification and joining the official Push Channel. This Channel sends out summons to the members of the DAO when a jury formation is initiated. If they accept the duty, they are applicable to mint a soul bounded ERC721 NFT. Holding this NFT is the primary rule for the on-chain governance system. For a particular case proposal, seven governors are randomly selected to leverage unbiased decision making after the final court hearing. The ERC721 tokens of these governors are burned once the proposal is exected. 
        </div>
      </div>
    </div>
  );
}

export default Features;
