import clsx from "clsx"
import {
  type ComponentPropsWithRef,
  type ElementType,
  forwardRef,
  type Ref,
} from "react"

import styles from "./Link.module.css"

type LinkOwnProps<T extends ElementType> = {
  as?: T
  decoration?: "none" | "underline"
}

export type LinkProps<T extends ElementType = "a"> = LinkOwnProps<T> &
  Omit<ComponentPropsWithRef<T>, keyof LinkOwnProps<T>>

const decorationClasses = {
  none: undefined,
  underline: styles.underline,
} as const

export const Link = forwardRef(
  <T extends ElementType = "a">(
    { as, className, decoration = "underline", ...props }: LinkProps<T>,
    ref: Ref<Element>,
  ) => {
    const Component = (as ?? "a") as ElementType
    return (
      <Component
        ref={ref}
        className={clsx(styles.link, decorationClasses[decoration], className)}
        {...props}
      />
    )
  },
) as <T extends ElementType = "a">(
  props: LinkProps<T>,
) => React.ReactElement | null
