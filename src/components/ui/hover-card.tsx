import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> & {
    variant?: "default" | "premium"
  }
>(({ className, align = "center", sideOffset = 8, variant = "default", ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 outline-none",
      // Premium entrance animation
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-4 data-[side=left]:slide-in-from-right-4",
      "data-[side=right]:slide-in-from-left-4 data-[side=top]:slide-in-from-bottom-4",
      // Default variant
      variant === "default" && "w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md",
      // Premium variant - refined luxury aesthetic
      variant === "premium" && [
        "w-80",
        "bg-gradient-to-b from-white via-white to-slate-50/80",
        "rounded-3xl",
        "border border-slate-200/60",
        "shadow-[0_32px_64px_-16px_rgba(15,23,42,0.18),0_16px_32px_-8px_rgba(15,23,42,0.1),0_0_0_1px_rgba(15,23,42,0.04)]",
        "backdrop-blur-2xl",
        "overflow-hidden",
      ],
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }
