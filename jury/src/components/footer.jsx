
import React from 'react';

const Footer = () => {
    return(
        <div class="w-full h-[338px] px-[195px] bg-neutral-900 justify-center items-center inline-flex">
        <div class="grow shrink basis-0 self-stretch py-20 flex-col justify-start items-center gap-20 inline-flex">
            <div class="justify-start items-start gap-[30px] inline-flex">
                <div class="w-[238px] flex-col justify-start items-start gap-[25px] inline-flex">
                    <div class="text-white text-2xl font-bold font-['Martel'] leading-loose tracking-tight">Get In Touch</div>
                    <div class="text-white text-sm font-normal font-['Open Sans'] leading-tight tracking-tight">the quick fox jumps over the <br/>lazy dog</div>
                    <div class="justify-start items-center gap-5 inline-flex">
                        <div class="w-6 h-6 relative"></div>
                        <div class="w-6 h-6 relative"></div>
                        <div class="w-6 h-[19.76px] relative"></div>
                        <div class="w-6 h-[17.68px] relative"></div>
                    </div>
                </div>
                <div class="w-[241px] flex-col justify-start items-start gap-5 inline-flex">
                    <div class="text-white text-2xl font-bold font-['Martel'] leading-loose tracking-tight">Company info</div>
                    <div class="flex-col justify-start items-start gap-2.5 flex">
                        <div class="text-white text-sm font-semibold font-['Open Sans'] leading-normal tracking-tight">About Us</div>
                        <div class="text-white text-sm font-semibold font-['Open Sans'] leading-normal tracking-tight">Carrier</div>
                        <div class="text-white text-sm font-semibold font-['Open Sans'] leading-normal tracking-tight">We are hiring</div>
                        <div class="text-white text-sm font-semibold font-['Open Sans'] leading-normal tracking-tight">Blog</div>
                    </div>
                </div>
                <div class="w-60 flex-col justify-start items-start gap-5 inline-flex">
                    <div class="text-white text-2xl font-bold font-['Martel'] leading-loose tracking-tight">Features</div>
                    <div class="flex-col justify-start items-start gap-2.5 flex">
                        <div class="text-white text-sm font-semibold font-['Open Sans'] leading-normal tracking-tight">Business Marketing</div>
                        <div class="text-white text-sm font-semibold font-['Open Sans'] leading-normal tracking-tight">User Analytic</div>
                        <div class="text-white text-sm font-semibold font-['Open Sans'] leading-normal tracking-tight">Live Chat</div>
                        <div class="text-white text-sm font-semibold font-['Open Sans'] leading-normal tracking-tight">Unlimited Support</div>
                    </div>
                </div>
                <div class="flex-col justify-start items-start gap-5 inline-flex">
                    <div class="text-white text-2xl font-bold font-['Martel'] leading-loose tracking-tight">Resources</div>
                    <div class="flex-col justify-start items-start gap-2.5 flex">
                        <div class="text-white text-sm font-semibold font-['Open Sans'] leading-normal tracking-tight">IOS & Android</div>
                        <div class="text-white text-sm font-semibold font-['Open Sans'] leading-normal tracking-tight">Watch a Demo</div>
                        <div class="text-white text-sm font-semibold font-['Open Sans'] leading-normal tracking-tight">Customers</div>
                        <div class="text-white text-sm font-semibold font-['Open Sans'] leading-normal tracking-tight">API</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}


export default Footer;