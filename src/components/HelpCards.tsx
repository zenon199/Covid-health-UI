// import React from 'react'

interface HelpCardsProps{
    icon: string;
    heading: string;
    text: string;
};

const HelpCards =({icon, heading, text}: HelpCardsProps) => {
    return (
        <div className="p-6 bg-white rounded-xl border-[1px] border-grey-2200 text-center py-12">
            <div className="bg-brandWhite p-4 rounded-full w-fit mx-auto">
                <img src={icon} alt="" className="w-12 mx-auto" />
            </div>
            <h4 className="my-4 text-lg font-bold">{heading}</h4>
            <p className="text-grey-400 text-sm">{text}</p>
        </div>
    );
};

export default HelpCards;