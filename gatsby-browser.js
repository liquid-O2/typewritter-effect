const React = require("react")
const Layout = require("./src/components/layout")
exports.wrapPageElement = ({ element, props }) => {
  const Layout = element.type.Layout ?? React.Fragment
  return <Layout {...props}>{element}</Layout>
}
