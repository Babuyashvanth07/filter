import React from "react";
function Footer() {
  const currentyeat = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © {currentyeat};</p>
    </footer>
  );
}
export default Footer;
