"use client";
import React, { useEffect, useState } from "react";

const TawkMessengerReactLazyLoad = () => {
  const [DependencyModule, setDependencyModule] = useState(null);
  useEffect(() => {
    // Load the dependency after UI load
    import("@tawk.to/tawk-messenger-react")
      .then((module) => {
        // The dependency has been loaded successfully
        setDependencyModule(module.default);
      })
      .catch((error) => {
        // Handle any errors that occur during loading
        console.error("Error loading dependency:", error);
      });
  }, []); // Empty dependency array to run this effect once on mount

  return DependencyModule !== null ? (
    <DependencyModule
      propertyId={process.env.NEXT_PUBLIC_TWAKTO_PROPERTY_ID}
      widgetId={process.env.NEXT_PUBLIC_TWAKTO_WIDGET_ID}
    />
  ) : null;
  // <div>
  //   {/* Your UI content */}
  //   <h1>Your UI Content</h1>

  //   {/* Render the dependency component when it's loaded */}
  //   {dependencyLoaded && <TawkMessengerReact />}
  // </div>
};

export default TawkMessengerReactLazyLoad;
