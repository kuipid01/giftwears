import dynamic from "next/dynamic";
import React from "react";

// Define the dynamically imported component outside the component function
const FirebaseComponent = dynamic(() => import("../_not-found/page"), {
  ssr: false, // Disable server-side rendering for this component
});

const Page = () => {
  return (
    <div>
      <FirebaseComponent />
    </div>
  );
};

export default Page;
