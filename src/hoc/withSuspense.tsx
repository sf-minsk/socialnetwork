import React from "react";


export const withSuspense = (Component: JSX.Element) => {
    return <React.Suspense fallback={<div>Loading...</div>}>
        {Component}
    </React.Suspense>
}


