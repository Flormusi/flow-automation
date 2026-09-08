"use client"

import type { AnchorHTMLAttributes, MouseEventHandler, ReactNode } from "react"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

type WhatsAppCTAProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  contentName: string
  children: ReactNode
}

export default function WhatsAppCTA({ contentName, onClick, children, ...anchorProps }: WhatsAppCTAProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead", { content_name: contentName })
    }
    onClick?.(event)
  }

  return (
    <a {...anchorProps} onClick={handleClick}>
      {children}
    </a>
  )
}
