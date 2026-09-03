"use client"

import type { SpanProps } from "@chakra-ui/react"
import { Span } from "@chakra-ui/react"
import * as React from "react"

export interface ColorModeProviderProps {
  children?: React.ReactNode
}

export function ColorModeProvider(props: ColorModeProviderProps) {
  return <>{props.children}</>
}

export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function LightMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme light"
        colorPalette="gray"
        colorScheme="light"
        ref={ref}
        {...props}
      />
    )
  },
)
