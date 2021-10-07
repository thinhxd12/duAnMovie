// import React, { Component } from 'react'
// import Cinema from './Cinema/Cinema'
// import HomeCarousel from './HomeCarousel/HomeCarousel'
// import HomeMenu from './HomeMenu/HomeMenu'

// export default class Home extends Component {
//     render() {
//         return (
//             <div>
//                 <HomeCarousel/>
//                 <HomeMenu/>
//                 <Cinema/>
//             </div>
//         )
//     }
// }

import React, { useEffect, useState } from "react";
import Cinema from './Cinema/Cinema';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import HomeMenu from './HomeMenu/HomeMenu';
import News from '../News/News'
import Lottie from "react-lottie";
import * as location from "../../movieGif.json";
import * as success from "../../success.json";

export default function Home() {
  // Loading Page
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: location.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: success.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          // console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 500);
        });
    }, 2000);
  }, []);
  return (
    <>
      {!completed ? (
        <>
          <div className="relative py-20 w-screen mt-15 mb-80">
            {!loading ? (
              <Lottie options={defaultOptions1} height={300} width={300} />
            ) : (
              <Lottie options={defaultOptions2} height={200} width={200} />
            )}
          </div>
        </>
      ) : (
        <div>
          <HomeCarousel />
          <HomeMenu />
          <Cinema />
          <News />
        </div>
      )}
    </>
  );
}
