/* eslint-disable react/prop-types */

import MainLayout from "./mainLayout";

const layouts = {
  default: MainLayout,
};

const LayoutWrapper = (props) => {
  const { children } = props;
  // to get the text value of the assigned layout of each component
  const Layout =
    layouts[children.type.layout] || layouts[children.props.layout];
  // if we have a registered layout render children with said layout
  if (Layout != null) {
    return <Layout {...props}>{children}</Layout>;
  }
  // if not render children with fragment
  return <MainLayout {...props}>{children}</MainLayout>;
};

export default LayoutWrapper;
