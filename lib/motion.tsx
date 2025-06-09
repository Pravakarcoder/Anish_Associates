const noop = { 
  animate: () => null,
  initial: () => null,
  transition: () => null,
  variants: () => null,
  whileHover: () => null,
  whileTap: () => null,
  whileInView: () => null,
};

export const motion = {
  div: (props: any) => <div {...props} />,
  p: (props: any) => <p {...props} />,
  h1: (props: any) => <h1 {...props} />,
  h2: (props: any) => <h2 {...props} />,
  h3: (props: any) => <h3 {...props} />,
  h4: (props: any) => <h4 {...props} />,
  span: (props: any) => <span {...props} />,
  button: (props: any) => <button {...props} />,
  ul: (props: any) => <ul {...props} />,
  li: (props: any) => <li {...props} />,
  img: (props: any) => <img {...props} />,
  a: (props: any) => <a {...props} />,
  section: (props: any) => <section {...props} />,
  ...noop
};