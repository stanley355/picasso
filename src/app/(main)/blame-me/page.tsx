'use client'
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Tooltip} from "react-tooltip";

const BlameMe = () => {
    const [isCopied, setIsCopied] = useState(false);

    const onClick = () => {
        window.navigator.clipboard.writeText("winatastanley355@gmail.com");
        setIsCopied(true);
    };

    return (
        <div>
            <div className="text-center text-xl font-bold py-4 sm:mb-32">AI</div>

            <h1 className="text-3xl font-semibold mb-4 text-center">
                Found a problem
            </h1>
            <div className="px-4 md:max-w-[450px] mx-auto flex flex-col items-center justify-center">
                <div className="text-center mb-2">Email, blame, and criticize the system admin at:</div>
                <Button id="adminEmail" onClick={onClick} className="mb-4">
                    winatastanley355@gmail.com
                </Button>
                <Tooltip anchorSelect="#adminEmail">
                    {isCopied ? "Copied to clipboard" : "Click to copy"}
                </Tooltip>
            </div>
        </div>
    )
};

export default BlameMe;