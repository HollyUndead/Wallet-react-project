import styled from 'styled-components';
import './Loader.css';

import backgroundDesktop from '../../img/bg-images/bg-image-desktop.png';
import backgroundTablet from '../../img/bg-images/bg-image-tablet.png';
import backgroundDesktopRetina from '../../img/bg-images/bg-image-desktop-2x.png';
import backgroundTabletRetina from '../../img/bg-images/bg-image-tablet-2x.png';

export const Loader = () => {
  return (
    <LoaderWrap>
      <svg
        role="img"
        aria-label="Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all parts rotate and merge into 3:00"
        class="smiley"
        viewBox="0 0 128 128"
        width="128px"
        height="128px"
      >
        <defs>
          <clipPath id="smiley-eyes">
            <circle
              class="smiley__eye1"
              cx="64"
              cy="64"
              r="8"
              transform="rotate(-40,64,64) translate(0,-56)"
            />
            <circle
              class="smiley__eye2"
              cx="64"
              cy="64"
              r="8"
              transform="rotate(40,64,64) translate(0,-56)"
            />
          </clipPath>
          <linearGradient id="smiley-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#000" />
            <stop offset="100%" stop-color="#fff" />
          </linearGradient>
          <mask id="smiley-mask">
            <rect
              x="0"
              y="0"
              width="128"
              height="128"
              fill="url(#smiley-grad)"
            />
          </mask>
        </defs>
        <g
          stroke-linecap="round"
          stroke-width="12"
          stroke-dasharray="175.93 351.86"
        >
          <g>
            <rect
              fill="hsl(193,90%,50%)"
              width="128"
              height="64"
              clip-path="url(#smiley-eyes)"
            />
            <g fill="none" stroke="hsl(193,90%,50%)">
              <circle
                class="smiley__mouth1"
                cx="64"
                cy="64"
                r="56"
                transform="rotate(180,64,64)"
              />
              <circle
                class="smiley__mouth2"
                cx="64"
                cy="64"
                r="56"
                transform="rotate(0,64,64)"
              />
            </g>
          </g>
          <g mask="url(#smiley-mask)">
            <rect
              fill="hsl(223,90%,50%)"
              width="128"
              height="64"
              clip-path="url(#smiley-eyes)"
            />
            <g fill="none" stroke="hsl(223,90%,50%)">
              <circle
                class="smiley__mouth1"
                cx="64"
                cy="64"
                r="56"
                transform="rotate(180,64,64)"
              />
              <circle
                class="smiley__mouth2"
                cx="64"
                cy="64"
                r="56"
                transform="rotate(0,64,64)"
              />
            </g>
          </g>
        </g>
      </svg>
    </LoaderWrap>
  );
};

const LoaderWrap = styled.div`
  pointer-events: none;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f7;
  z-index: 100;
  @media screen and (min-width: 768px) {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${backgroundTablet});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${backgroundTabletRetina});
    }
  }
  @media screen and (min-width: 1200px) {
    background-size: cover;
    background-image: url(${backgroundDesktop});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${backgroundDesktopRetina});
    }
  }
`;
