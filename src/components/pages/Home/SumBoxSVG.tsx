import { useEffect } from "react";
import styled from "styled-components";

export default function SumBoxSVG() {
  // const signTopGradient0 = "rgb(64, 124, 220)";
  // const signTopGradient1 = "rgb(7, 63, 151)";

  // const signBordersGradient0 = "rgb(0, 85, 218)";
  // const signBordersGradient1 = "rgb(0, 52, 133)";

  const signTopGradient0 = "rgb(220, 64, 64)";
  const signTopGradient1 = "rgb(151, 7, 7)";

  const signBordersGradient0 = "rgb(218, 0, 0)";
  const signBordersGradient1 = "rgb(133, 0, 0)";

  useEffect(() => {}, []);

  return (
    <Container>
      <svg
        id="sumbox"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 281 128"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <defs>
          <linearGradient
            id="sumbox-u-box-shadow-fill"
            x1="-0.096256"
            y1="-0.20656"
            x2="1"
            y2="1"
            spreadMethod="pad"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(0 0)"
          >
            <stop
              id="sumbox-u-box-shadow-fill-0"
              offset="0%"
              stopColor="rgba(0,0,0,0)"
            />
            <stop
              id="sumbox-u-box-shadow-fill-1"
              offset="100%"
              stopColor="rgba(0,0,0,0.15)"
            />
          </linearGradient>
          <linearGradient
            id="sumbox-u-metal-base-fill"
            x1="-0.280009"
            y1="-0.335628"
            x2="1.214382"
            y2="1.194792"
            spreadMethod="pad"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(0 0)"
          >
            <stop
              id="sumbox-u-metal-base-fill-0"
              offset="0%"
              stopColor="#202020"
            />
            <stop
              id="sumbox-u-metal-base-fill-1"
              offset="100%"
              stopColor="#7c7c7c"
            />
          </linearGradient>
          <linearGradient
            id="sumbox-u-metal-borders-fill"
            x1="0.267846"
            y1="-0.298237"
            x2="0.68213"
            y2="1.160906"
            spreadMethod="pad"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(0 0)"
          >
            <stop
              id="sumbox-u-metal-borders-fill-0"
              offset="1%"
              stopColor="#303030"
            />
            <stop
              id="sumbox-u-metal-borders-fill-1"
              offset="48%"
              stopColor="#818181"
            />
            <stop
              id="sumbox-u-metal-borders-fill-2"
              offset="100%"
              stopColor="#919191"
            />
          </linearGradient>
          <linearGradient
            id="sumbox-u-glass-borders-fill"
            x1="0.267847"
            y1="-0.264929"
            x2="0.766447"
            y2="1.35709"
            spreadMethod="pad"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(0 0)"
          >
            <stop
              id="sumbox-u-glass-borders-fill-0"
              offset="0%"
              stopColor="#d3fff5"
            />
            <stop
              id="sumbox-u-glass-borders-fill-1"
              offset="100%"
              stopColor="rgba(188,188,188,0.75)"
            />
          </linearGradient>
          <linearGradient
            id="sumbox-u-glass-top-fill"
            x1="-0.142229"
            y1="-0.147846"
            x2="1.079654"
            y2="1.373184"
            spreadMethod="pad"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(0 0)"
          >
            <stop
              id="sumbox-u-glass-top-fill-0"
              offset="0%"
              stopColor="#a5d0df"
            />
            <stop
              id="sumbox-u-glass-top-fill-1"
              offset="100%"
              stopColor="#005370"
            />
          </linearGradient>
          <linearGradient
            id="sumbox-u-sign-shadow-fill"
            x1="0.026185"
            y1="-0.104433"
            x2="0.89395"
            y2="0.895567"
            spreadMethod="pad"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(0 0)"
          >
            <stop
              id="sumbox-u-sign-shadow-fill-0"
              offset="0%"
              stopColor="rgba(0,0,0,0)"
            />
            <stop
              id="sumbox-u-sign-shadow-fill-1"
              offset="100%"
              stopColor="rgba(0,0,0,0.15)"
            />
          </linearGradient>
          <linearGradient
            id="sumbox-u-sign-borders-fill"
            x1="0.316512"
            y1="0.010675"
            x2="0.60585"
            y2="0.775477"
            spreadMethod="pad"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(0 0)"
          >
            <stop
              id="sumbox-u-sign-borders-fill-0"
              offset="0%"
              stopColor={signBordersGradient0}
            />
            <stop
              id="sumbox-u-sign-borders-fill-1"
              offset="100%"
              stopColor={signBordersGradient1}
            />
          </linearGradient>
          <linearGradient
            id="sumbox-u-sign-top-fill"
            x1="0.094426"
            y1="0.06527"
            x2="0.822341"
            y2="1"
            spreadMethod="pad"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(0 0)"
          >
            <stop
              id="sumbox-u-sign-top-fill-0"
              offset="0%"
              stopColor={signTopGradient0}
            />
            <stop
              id="sumbox-u-sign-top-fill-1"
              offset="100%"
              stopColor={signTopGradient1}
            />
          </linearGradient>
        </defs>
        <g
          id="sumbox-u-box"
          transform="translate(-9.42392-84.746628)"
        >
          <rect
            id="sumbox-u-box-shadow"
            width="29.149556"
            height="34.758671"
            rx="0"
            ry="0"
            transform="matrix(6.579253 0-2.57115 3.064178 98.793739 106.746625)"
            fill="url(#sumbox-u-box-shadow-fill)"
          />
          <g
            id="sumbox-u-metal"
            transform="translate(0 0.000001)"
          >
            <rect
              id="sumbox-u-metal-base"
              width="29.149556"
              height="34.758671"
              rx="0"
              ry="0"
              transform="matrix(6.579253 0-2.57115 3.064178 98.793739 96.746626)"
              fill="url(#sumbox-u-metal-base-fill)"
              strokeWidth="0.1"
              strokeMiterlimit="1"
            />
            <path
              id="sumbox-u-metal-borders"
              d="M98.79372,96.74663L17.81494,193.25338h183.3913l80.97877-96.50675h-183.3913.00001Zm0-10v0h191.78228v.00002l.00002-.00002v10L201.20625,203.25338h-191.7823v-10v0L98.79372,86.74663Z"
              fill="url(#sumbox-u-metal-borders-fill)"
              strokeWidth="0.6"
            />
          </g>
          <g
            id="sumbox-u-glass"
            transform="translate(0 0.000001)"
          >
            <path
              id="sumbox-u-glass-borders"
              d="M290.57602,84.74663l-.00002,2-89.36976,106.50675v0h-191.7823l-.00002-2h191.78233v0L290.57602,84.74663Z"
              fill="url(#sumbox-u-glass-borders-fill)"
              fillOpacity="0.6"
              strokeWidth="0.6"
            />
            <rect
              id="sumbox-u-glass-top"
              width="29.149556"
              height="34.758671"
              rx="0"
              ry="0"
              transform="matrix(6.579253 0-2.57115 3.064178 98.793707 84.746625)"
              fill="url(#sumbox-u-glass-top-fill)"
              fillOpacity="0.15"
              strokeWidth="0.1"
              strokeOpacity="0.5"
              strokeMiterlimit="1"
            />
          </g>
        </g>
        <g
          id="sumbox-u-sign"
          transform="translate(-9.424015-85.746621)"
        >
          <path
            id="sumbox-u-sign-shadow"
            d="M131.74666,139.7752v-35h-34.99998v-30h34.99998v-35h30v35h35.00002v30h-35.00002v35h-30Z"
            transform="matrix(1.305407 0-.642788 0.766044 16.1422 79.228207)"
            fill="url(#sumbox-u-sign-shadow-fill)"
            strokeWidth="0.5"
          />
          <g
            id="sumbox-u-sign2"
            transform="translate(0 0.000001)"
          >
            <path
              id="sumbox-u-sign-base"
              d="M131.74666,139.7752v-35h-34.99998v-30h34.99998v-35h30v35h35.00002v30h-35.00002v35h-30Z"
              transform="matrix(1.305407 0-.642788 0.766044 16.1422 71.228207)"
              fill="rgba(0,70,180,0.8)"
              strokeWidth="0.5"
            />
            <path
              id="sumbox-u-sign-borders"
              d="M98.27948,178.30222v-5h39.16222v5h-39.16222Zm61.65987-31.81155h45.6892l.00008,5h-45.68936l.00008-5Zm45.6892,0l19.28363-22.98133v5l-19.28355,22.98133-.00008-5Zm-45.68928,5l-22.49749,26.81156-.00008-5l22.49765-26.81155-.00008,4.99999Zm-84.85145-5h45.68923v5h-45.77713l.0879-5ZM201.72046,96.69778v5l-22.49757,26.81156v-5l22.49757-26.81156Z"
              fill="url(#sumbox-u-sign-borders-fill)"
              strokeWidth="0.6"
            />
            <path
              id="sumbox-u-sign-top"
              d="M161.74666,39.7752v35h35.00002v30h-35.00002v35h-30v-35h-34.99998v-30h34.99998v-35h30"
              transform="matrix(1.305407 0-.642788 0.766044 16.1422 66.228207)"
              fill="url(#sumbox-u-sign-top-fill)"
              strokeWidth="0.5"
            />
          </g>
        </g>
      </svg>
    </Container>
  );
}

const Container = styled.div`
  & {
    position: absolute;
  }
`;
