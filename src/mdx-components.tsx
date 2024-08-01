import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => (
      <h1 className="text-4xl font-bold" {...props}>
        {props.children}
      </h1>
    ),
    h2: (props) => (
      <h2 className="text-3xl font-bold" {...props}>
        {props.children}
      </h2>
    ),
    h3: (props) => (
      <h3 className="text-2xl font-bold" {...props}>
        {props.children}
      </h3>
    ),
    p: (props) => (
      <p className="text-lg" {...props}>
        {props.children}
      </p>
    ),
    a: (props) => (
      <a className="text-blue-500 hover:underline" {...props}>
        {props.children}
      </a>
    ),
  };
}
