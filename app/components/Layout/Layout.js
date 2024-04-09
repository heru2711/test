import layoutStyles from "./layout.module.css";

const Layout = ({ children }) => {
  return <main className={layoutStyles.container}>{children}</main>;
};
export default Layout;
