import { ElementType, forwardRef, memo, ReactNode } from "react";

export const TYPOGRAPHY_CONFIG = {
  heading: {
    tag: "h1" as const,
    classNames:
      "text-2xl font-bold leading-2xl md:text-4xl md:font-bold md:leading-4xl",
  },
  "page-description": {
    tag: "p" as const,
    classNames: "text-5xs md:text-2xs md:leading-2xs font-normal",
  },
  pagination: {
    tag: "div" as const,
    classNames: "text-xs leading-[1.875rem] font-bold",
  },
  "news-tag": {
    tag: "a" as const,
    classNames: "text-4xs md:text-sm font-medium",
  },
  "news-info": {
    tag: "time" as const,
    classNames: "text-6xs md:text-3xs font-medium",
  },
  "news-side-title": {
    tag: "h3" as const,
    classNames: "text-3xs font-semibold",
  },
  "news-heading": {
    tag: "h3" as const,
    classNames: "text-3xs md:text-lg md:leading-lg font-bold",
  },
  "news-description": {
    tag: "p" as const,
    classNames: "text-5xs md:text-xs md:leading-xs font-medium",
  },
  "footer-text": {
    tag: "div" as const,
    classNames: "text-8xs md:text-4xs md:leading-4xs font-semibold",
  },
  "breadcrumbs-text": {
    tag: "div" as const,
    classNames: "text-xs md:text-base leading-base font-normal",
  },
  "breadcrumbs-highlight": {
    tag: "div" as const,
    classNames: "text-xs md:text-base leading-base font-bold highlight",
  },
  "news-side-info": {
    tag: "p" as const,
    classNames: "text-5xs leading-5xs font-medium",
  },
} as const;

type TextType = keyof typeof TYPOGRAPHY_CONFIG;

interface TextProps {
  children?: ReactNode;
  type: TextType;
  classNames?: string;
  truncate?: boolean;
  as?: ElementType;
  className?: string;
  onClick?: () => void;
  dangerouslySetInnerHTML?: { __html: string };
  highlight?: boolean;
}

const Text = memo(
  forwardRef<HTMLElement, TextProps>(
    (
      {
        children,
        type,
        classNames = "",
        truncate = false,
        as,
        dangerouslySetInnerHTML,
        highlight = false,
        ...props
      },
      ref,
    ) => {
      const config =
        TYPOGRAPHY_CONFIG[type] || TYPOGRAPHY_CONFIG["page-description"];
      const Component = (as || config.tag) as ElementType;

      const finalClasses = [
        config.classNames,
        truncate && "truncate",
        classNames,
        props.className,
        highlight && "highlight",
      ]
        .filter(Boolean)
        .join(" ");

      const accessibilityProps =
        truncate && typeof children === "string" ? { title: children } : {};

      return (
        <Component
          ref={ref}
          className={finalClasses}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
          {...accessibilityProps}
          {...props}
        >
          {children && children}
        </Component>
      );
    },
  ),
);

Text.displayName = "Text";

export { Text };
export type { TextProps, TextType };
