import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import React from "react";

export interface HintProps {
    label: string;
    children: React.ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    align: "start" | "center" | "end";
    sideOffset?: number;
    alignOffset?: number;
};

export const Hint = ({ label, children, side, align, sideOffset, alignOffset }: HintProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger>
                    {children}
                </TooltipTrigger>
                <TooltipContent
                    side={side} sideOffset={sideOffset} alignOffset={alignOffset} align={align}
                    className="text-white bg-black border-black"
                >
                    <p className="font-semibold capitalize">
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}