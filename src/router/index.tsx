import React,{lazy} from 'react'
//navigate
import {Navigate} from 'react-router-dom'
import Home from "@/views/Home"
//lazy load
const About = lazy(()=>import("@/views/About"))
const Page1 = lazy(()=>import("@/views/Page1"))
const Page2 = lazy(()=>import("@/views/Page2"))

// loading
const withLoadingComponent = (comp:JSX.Element)=> (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)

const routes = [
    {
        path:"/",
        element:<Navigate to={"/Page1"}/>
    },
    {
        path:"/",
        element:<Home />,
        children:[
            {
                path:"/About",
                element:withLoadingComponent(<About />)
            },
            {
                path:"/Page1",
                element:withLoadingComponent(<Page1 />)
            },
            {
                path:"/Page2",
                element:withLoadingComponent(<Page2 />)
            },

        ]
    }
]

export default routes