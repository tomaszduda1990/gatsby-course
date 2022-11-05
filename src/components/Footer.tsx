import React from "react";

export default function Footer (): JSX.Element {
  return (
    <>
      <footer>
        <p>&copy; Pizza Page {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}