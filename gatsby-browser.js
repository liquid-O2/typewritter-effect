const React = require("react")
exports.wrapPageElement = ({ element, props }) => {
  const Layout = element.type.Layout ?? React.Fragment
  return <Layout {...props}>{element}</Layout>
}
