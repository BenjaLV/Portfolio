import React from "react"
import { SVGProps } from "react"

type IconProps = { size?: number } & SVGProps<SVGSVGElement>

declare namespace JSX {
    interface IntrinsicElements {
        set: any;
    }
}

export const GitHubIcon = ({ className, mode, ...rest }: SVGProps<SVGSVGElement> & { mode: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 512 512"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h512v512H0z" />
        <path
            fill={mode === "dark" ? "white" : "dark"}  
            d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
        />
    </svg>
)

export const LinkedInIcon = ({ className, ...rest }: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 256 256"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h256v256H0z" />
        <g fill="none">
            <rect width={256} height={256} fill="#fff" rx={60} />
            <rect width={256} height={256} fill="#0A66C2" rx={60} />
            <path
                fill="#fff"
                d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
            />
        </g>
    </svg>
);


export const ExternalLink = ({ className, ...rest }: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        {...rest}
    >
        <path fill="rgba(255, 255, 255, 0)" d="M0 0h24v24H0z" />
        <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
        />
    </svg>
)


export const FullStackDeveloperIcon = ({ size = 480, className, ...rest }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 1080 1080"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path d="M537.7 16.7c-.4.3-.7 6.3-.7 13.2-.1 6.9-.5 17.1-1 22.6-1.7 17.6-3.7 59.2-2.9 60 .3.2 5.6.5 11.9.7l11.5.3.8-17c.4-9.3 1.2-17.4 1.7-17.9.6-.6 5.8-.5 13.7.2 7.1.7 16.3 1.2 20.6 1.2 9.2 0 9.2 0 9.2-11v-7.5l-19-.7c-10.4-.5-20-1-21.2-1.3-2.2-.5-2.3-1-2.3-10.8 0-5.6.4-10.7.8-11.3.5-.7 7.9-.8 23.2-.3 12.4.4 22.7.5 22.8.4.9-.8 2.2-8.4 2.2-12.6v-4.5l-15.2-1.2c-8.4-.7-22.3-1.4-30.8-1.7-8.5-.3-17.6-.8-20.1-1-2.5-.3-4.8-.2-5.2.2zM480.5 42.9c-3.7 1.7-10.5 8.3-13.1 12.7-1.1 1.7-1.2 1.5-1.9-2.1-1.2-7.1-.8-6.9-9.3-6.2-4.2.4-9.2.9-11.1 1.3l-3.4.7.6 6.6c.3 3.7 1.2 10.2 2 14.6s2.2 12.3 3.1 17.5c.9 5.2 2.1 12.4 2.7 16 .6 3.6 1.4 8.6 1.8 11.3.4 2.6 1.2 5.2 1.8 5.8 1.4 1.4 19.8-.8 21.3-2.6.7-.8.5-4-.6-10.1-.8-4.9-1.9-11.4-2.4-14.4-.4-3.1-1.3-7.4-2-9.7-2.6-8.7 4-18.4 14.9-21.8 6.1-2 6.2-2.1 5.7-5-.4-1.7-.9-5-1.2-7.5-1.2-10.1-1.6-10.4-8.9-7.1zM621 46.5c0 1-.7 3.8-1.5 6.4-2.8 8.7-7.8 30.6-9 38.7-2 14.9 1.6 23.9 12.1 29.6 9.3 5.1 20.1 4.9 28.3-.6l4.8-3.2-.1 6-.1 6.1 8.5 1.8c4.7 1 9.4 2.1 10.6 2.3 1.8.5 2.2-.3 3.8-7.3 2.1-9.4 4.9-20.8 9.6-40.3 1.2-4.7 2.7-11.2 3.5-14.5.8-3.3 1.7-6.8 2-7.7.5-1.3 0-1.9-2.2-2.4-1.5-.3-6.3-1.5-10.6-2.6-8.8-2.2-10.2-1.8-11.2 3.5-1.1 5.9-4.7 21.2-6 25.7-.7 2.5-1.6 5.7-1.9 7.2-.9 3.8-6.5 9.4-10.8 10.6-4.7 1.3-10.9-.2-13.8-3.3-4.1-4.4-3.4-13.5 2.6-33.9.8-2.6 1.4-5.5 1.4-6.3 0-.8.7-3.7 1.6-6.4 1-2.9 1.3-5.4.8-5.9-.8-.7-6.1-2-19.6-4.7-2.2-.4-2.8-.1-2.8 1.2zM724.5 48.4c-.8 1.9-1.5 3.8-1.5 4.1 0 .3-.8 2.5-1.9 4.8-1 2.3-4.2 10.3-7.1 17.7-2.9 7.4-5.6 14.2-6 15.1-.4.8-2 4.7-3.5 8.5-1.4 3.8-3 7.8-3.5 8.9-3.8 8.3-12 29.8-12 31.2 0 1.3 2.6 2.8 10.1 5.7 5.5 2.1 10.4 3.5 10.8 3 .4-.5 1.8-3.6 3-6.9 1.3-3.3 3.1-7.8 4.1-10 .9-2.2 2.4-5.8 3.2-8 .9-2.2 3-7.4 4.7-11.5 1.6-4.1 4.7-11.8 6.7-17 2-5.2 4.5-11.4 5.5-13.7 1.1-2.3 1.9-4.7 1.9-5.3 0-.7.6-2.4 1.4-3.8 2.9-5.4 6.6-16.1 6-17.6-.3-.8-4.2-2.8-8.7-4.4-4.5-1.7-9-3.3-10-3.7-1.3-.6-2 .1-3.2 2.9zM395.5 60.9c-24.9 4.6-38.7 23.9-33.1 46.1 3.6 14 9.3 21.5 20.3 26.6 6 2.9 8.3 3.4 14.3 3.4 11.1 0 24.6-4.8 32.2-11.4 4-3.5 9.9-11.6 9.2-12.7-.3-.5-3.6-2.5-7.3-4.4l-6.8-3.4-3.7 4.5c-8.3 9.9-20.2 11.9-28.6 4.7-2.2-1.9-4-3.8-4-4.3 0-.4 6.6-3 14.8-5.6 8.1-2.6 15.1-5.1 15.6-5.6.6-.4 1.8-.8 2.8-.8 2.1 0 13.9-3.9 15.1-5 1.1-1-1.4-9.3-4.3-14.5-3.1-5.7-9.7-12.3-15-15-5-2.5-15.2-3.7-21.5-2.6zm10 18.1c3.3 2 6.5 6 6.5 8 0 1.3-4.4 3.2-15.3 6.6-4.8 1.4-9 3-9.2 3.4-.3.5-1.5.6-2.6.3-1.9-.5-2.1-1.1-1.5-5.7 1.3-11.6 13-18.2 22.1-12.6zM766.9 72.3c-2.3 4.5-7.4 14.5-11.4 22.2-25.8 49.8-30.4 59.3-29.2 60.8 1.5 1.8 16.1 9.7 18 9.7.8 0 4-5.1 7.4-11.8 5.3-10.5 22.7-44.3 35.4-68.9 3.4-6.7 4.4-9.5 3.6-10.1-1.2-1-14.8-8.1-18-9.4-1.4-.6-2.4.7-5.8 7.5zM316.8 92.4c-10.1 3.6-16.4 9.4-19.7 18.1l-1.7 4.6-1.9-3.6c-1.1-1.9-2.6-3.5-3.3-3.5-2.2 0-19.2 9.4-19.2 10.6 0 1.1 6.4 13.8 8 15.9.4.5 2.5 4.1 4.5 8 2.1 3.8 5 9.2 6.5 12 1.5 2.7 4.9 9 7.5 14 2.6 4.9 5.1 9.4 5.5 10 .7 1 7.1 12.7 11.9 21.9 2.8 5.3 4.5 6.5 7.2 4.8 1-.6 4.9-2.8 8.8-4.7 4.1-2.1 7.1-4.3 7.1-5.1 0-1.5-1.8-5-11.8-23.5l-4.1-7.5 8.8.4c7.7.4 9.4.1 14.3-2.1 6.9-3.2 13.9-10 16.9-16.4 3.3-7.1 3.3-19.6-.1-27.8-5.2-13-14.1-22.3-24.8-26.1-4.7-1.7-15.6-1.7-20.4 0zm12.8 21.3c2 1 5 4.1 7.4 7.5 3.6 5.3 4 6.5 4 12 0 9.1-3.5 13.8-12.2 16.7-12.4 4.1-25.8-11.4-22.7-26 1.1-5.1 3.8-8.3 9.6-11 4.2-2 8.5-1.7 13.9.8zM836.6 123.4c-10.7 4-18.6 14.2-18.6 24.2 0 5.6 3.9 14.1 11.9 26.3 9.9 14.9 10.8 16.9 8.7 21-.9 1.7-2.5 3.5-3.6 4.1-8.3 4.5-23.9-11.8-29.5-30.8-.9-2.8-2-5.2-2.5-5.2-.4 0-4.5 1.7-9 3.7l-8.2 3.7.6 4.4c.7 5.3 6.6 17.2 11.4 23.1 15.6 19.1 33.7 27.6 48.4 22.5 6.3-2.1 11.8-7.1 15.2-13.8 2.6-5 2.8-6.4 2.4-12.5-.6-7.6-3.1-13-11.5-24.8-4.8-6.9-9.3-15.8-9.3-18.6 0-1 1.2-2.9 2.6-4.4 5.3-5.3 12.9-.8 22 12.8 2.4 3.6 5.3 8.7 6.4 11.3 1.7 3.8 2.4 4.5 3.8 3.7.9-.5 4.8-2.3 8.5-4 3.7-1.7 7.1-3.9 7.4-4.8 1.1-2.9-6.4-15.8-13.8-23.7-14-15-31.8-22.5-43.3-18.2zM241.8 143c-16.6 4.2-33.2 21.8-35.3 37.5-1.8 14.1 8.7 31.7 23 38.4 18.8 8.9 43.9-1.7 54.3-22.9 2.4-4.9 2.7-6.6 2.7-16 0-9.8-.2-10.9-3-15.9-7.3-13.2-18.4-20.9-31.2-21.6-3.8-.2-8.5 0-10.5.5zm10.6 22.4c4.9 2 10.1 7.9 12.4 14.2 2 5.2 2.1 5.7.6 9.7-2.1 5.5-7.2 10.3-12.4 11.7-11.1 3-24-8.4-24-21.2 0-12 11.8-19.3 23.4-14.4zM152.3 182.5c-3.7 4.2-6.8 7.9-6.8 8.4 0 .8 25.6 25 37.5 35.5 2.5 2.2 10.1 9.2 17 15.6 17 15.9 19.8 18.2 20.9 17.6.5-.3 4-4.1 7.9-8.4l7.1-7.9-16.7-15.5c-9.2-8.5-21.9-20.1-28.2-25.8-6.3-5.7-15.4-14.1-20.1-18.7-4.8-4.6-9.3-8.3-10.2-8.3-.9 0-4.6 3.4-8.4 7.5zM905.6 187.5l-7.4 6.5-2.9-3c-1.5-1.7-3.4-3-4.1-3-1.5 0-10.2 7-10.2 8.3 0 .4 1.2 2.3 2.6 4.2 3 4 2.6 4.9-4.5 10.9-12.2 10.4-21.3 19.5-23.1 23.2-2.7 5.5-2.6 12.6.4 18.9 3.6 7.7 15 17.5 20.4 17.5 1.3 0 3.1-2 5.6-6.1 3.7-6.3 4.3-7.9 2.6-7.9-.5 0-2.5-1.4-4.5-3.1-6.5-5.7-4.7-8.8 15.5-26.4l6.5-5.6 6.8 7.2 6.8 7.3 4.4-4.4c2.5-2.4 4.5-5.3 4.5-6.3s-2.5-4.7-5.5-8l-5.5-6.2 7.6-7 7.6-7-6.7-7.5c-3.7-4.1-7.3-7.8-8-8.3-.9-.5-3.9 1.4-8.9 5.8zM151.8 236.6c-11 3.3-24.4 18.1-27 29.8-.5 2.3-1.2 5.4-1.5 6.9-.8 3.9 1.6 14.3 4.3 19.2 3.6 6.3 12 14 19.3 17.6 6 3 7.4 3.3 15.6 3.3 7.8 0 9.8-.4 14.7-2.8 11.4-5.6 22.7-21.2 24.9-34.3 1-6.5.3-14.3-1.5-14.2-.6 0-4 .6-7.6 1.3l-6.5 1.2-.6 5.4c-.9 7.4-3.2 12.3-7.8 16.9-2.7 2.7-5.1 4.1-8 4.6-4.8.8-10.1-.2-10.1-1.8 0-.7 4.1-7.1 9.1-14.2 5-7.2 11.5-16.5 14.5-20.7l5.3-7.7-2.5-2c-1.5-1.1-5.6-3.5-9.3-5.2-5.6-2.7-7.9-3.3-15.1-3.5-4.7-.2-9.3-.1-10.2.2zm12.5 20.6c1.7.9 1.7 1.1-.5 4.6-1.2 2-3.6 5.6-5.3 7.9-1.6 2.3-4.5 6.2-6.3 8.7-1.8 2.6-3.7 4.6-4.2 4.6s-2.1-1.8-3.5-4c-5.4-8.6-1.5-20 8-23.2 2.3-.8 9.2 0 11.8 1.4zM929 246.7l-4.4 6.7 2.9 2c10.5 7.5 17.5 16.8 17.5 23.1 0 4-3.2 9.5-5.5 9.5-.8 0-4.6-4.7-8.5-10.4-10.5-15.5-17-20.6-26-20.6-4.8 0-12.3 3.6-16.2 7.7-5.7 6-7.1 13.6-4.2 23.2 2.1 7.2 11.8 17.3 18.4 19.2 2.5.7 4.6 1.4 4.8 1.5.2.1-.8 1.3-2.2 2.7-1.4 1.5-2.6 3-2.6 3.5 0 .4 2.3 4.3 5 8.5 3.5 5.4 5.6 7.7 7 7.7 1.1 0 6.9-3.2 12.8-7.2 5.9-3.9 15.2-10.1 20.6-13.8 5.5-3.6 11.3-8.3 12.9-10.2 8.5-10.5 5.5-27.9-7.2-42.3-4.4-4.9-14.1-13.5-17.9-15.7l-2.8-1.7-4.4 6.6zm-13.3 31.8c1.2.9 4.5 5 7.3 9.2l5 7.7-2.2 2.3c-1.7 1.8-3.2 2.3-7.1 2.3-8.2 0-14.6-5.6-15.5-13.5-.4-3.7-.1-4.7 2.1-6.9 3-3 7.1-3.4 10.4-1.1zM102.2 299.4c-2.3 4.8-4.2 9.8-4.2 11.1 0 1.7 3.9 6 15.3 16.5 8.3 7.9 16.6 15.2 18.3 16.3 1.8 1.2 3.7 2.9 4.3 3.9 1.1 1.7.7 1.8-4.6 1.2-3.2-.3-8.1-1-10.8-1.5-5.1-.9-24.9-3.7-33.6-4.6l-4.6-.5-2.1 4.4c-6.2 13.4-7.3 16-6.7 16.6.4.4 7.5 1.2 15.8 1.8 8.4.7 21.3 1.7 28.7 2.2 7.4.6 18 1.2 23.5 1.4l10 .3 5.2-10.5 5.1-10.5-10.2-10.5c-5.6-5.8-18.1-18.6-27.8-28.4l-17.5-17.9-4.1 8.7zM953.8 317.9c-4.5 1.5-15.1 7.7-17.4 10.3-5.7 6.2-10.4 17.3-10.4 24.4 0 10.4 6.8 25.2 14.9 32.6 5.7 5.2 14.9 9.7 17 8.4 1.2-.8 3.1-9.6 3.1-14.7 0-3.6-.3-4-3.9-5.5-9.4-3.7-13.3-16.4-7.7-24.9 4.2-6.3 15.6-10.4 23.7-8.5 5.4 1.3 8.1 3.8 10.4 9.8 1.6 4 1.6 6.8 0 13.3-.6 2.4 0 3.1 6 7.3 3.6 2.5 7.2 4.6 8 4.6 2.3 0 4.3-4 5.6-11.3 2.9-15.7-5.4-34.1-19.4-42.8-5-3.2-5.7-3.3-16.2-3.6-6-.1-12.2.2-13.7.6zM84.5 378.9c-8.5 2.3-17.4 9.2-21.1 16.4-3.8 7.2-5.6 15.9-5.2 24.6.4 8.1 1.2 10.9 5.2 17.9 3.4 6 14.8 14.2 19.8 14.2 1.3.1 3.4.7 4.8 1.5 3.4 2 15.2 1.9 19.8-.1 11.5-4.8 17.2-9.9 21.6-18.9 5.3-10.8 6.7-26.7 3.1-36.3-1.1-2.9-2.4-5.7-3-6.2-1.7-1.4-14.8 6.8-14.2 8.9 3 10.3 3.1 11.1 1.9 15.8-1.7 6.3-4.8 10.7-9.3 13.2-3.8 2.2-9.9 2.8-9.9 1.1 0-.5 1.1-4.4 2.6-8.7 1.4-4.3 3.1-10.5 3.9-13.8.8-3.3 2.3-9.2 3.5-13 1.1-3.9 2.3-8.6 2.6-10.6.6-3.4.4-3.7-2.7-4.9-4.2-1.5-19.3-2.2-23.4-1.1zm7.2 28.9c-1 4.3-2.5 10.2-3.2 13.4-1.6 7.1-2.2 8-4.7 7.2-4.2-1.3-9.8-9.8-9.8-14.9 0-2.9 3.1-9.5 5.4-11.4 2.7-2.2 9.9-3.9 12.2-2.9l2.1 1-2 7.6zM1019.5 386.1c-13.2 3.2-26.2 6.6-29 7.4-2.7.8-13.9 3.5-24.8 6.1-18.6 4.4-19.8 4.8-19.4 6.8.3 1.2 1.2 5.4 2.1 9.5.9 4.1 2.2 8.1 2.8 8.9 1.2 1.4 1.9 1.4 14.4-1 6-1.1 6.3-1 11 1.7l4.8 2.8-11.9 11.5-11.9 11.4 1.7 7.6c1 4.3 2.2 10.1 2.8 12.9.6 2.9 1.6 5.3 2.2 5.3.6 0 9-8.1 18.7-18 9.6-9.9 18.2-18 19-18 1.4 0 20.1 10.2 29.5 16l3.8 2.3-.6-2.9c-2.2-11.3-3-14.4-4.3-18.5-.9-2.8-2.4-5.1-3.7-5.7-1.2-.6-4.4-2.4-7.2-3.9-2.7-1.6-8.5-4.8-12.8-7.2-4.3-2.4-7.5-4.7-7-5.2.4-.4 4.6-1.7 9.3-2.9 41-10.1 39.5-9.7 40.3-12.1.9-2.7-3.2-20.1-4.8-20.5-.6-.1-11.8 2.4-25 5.7zM55.5 458c-8.2 2.4-14.3 6.1-20.2 12-10.2 10.2-13.6 20.8-15.3 48-.6 10.2-1.4 20.6-1.7 23.1l-.5 4.6 11.4.7c6.2.4 16 1.1 21.8 1.7 5.8.5 18.8 1.4 29 2 10.2.6 22.2 1.3 26.8 1.6l8.2.4v-9.8c0-5.4.5-11.8 1.1-14.3.6-2.5 1.1-10.6 1.2-18 .1-14.2-.8-18.9-5.7-28.9-4.5-9.4-19.6-22.1-26.2-22.1-1.1 0-3.7-.7-5.9-1.5-5.4-1.9-16.7-1.7-24 .5zM78 482.1c5.9 1.3 12 5.6 16.7 11.8l3.3 4.3v13.1c0 7.3-.4 13.8-.8 14.5-.8 1.2-11.4.8-43.7-1.8-5.5-.4-11-.8-12.3-.9-2.3-.1-2.3-.2-1.7-9.9.9-12.4 1.8-15.9 5.5-21 7-9.7 18.5-13.2 33-10.1zM969.4 536.8c-1.3.8-2.9 12.6-4.4 32.7-1.8 25.4 1.4 37.8 12.9 49.3 7 7 13.9 10.7 23.5 12.7 30.5 6.4 55.1-11.8 58.6-43.5.5-4.7 1.4-12.1 1.9-16.5s1.1-12.3 1.3-17.5l.3-9.5-9.5-.7c-5.2-.4-13.5-1.2-18.5-1.8-4.9-.6-14.2-1.5-20.5-2-6.3-.5-15.5-1.4-20.5-1.9-15.6-1.7-24-2.1-25.1-1.3zm33.1 26.2c6.6.6 15.8 1.4 20.5 2 4.7.5 11.1 1.2 14.3 1.5l5.7.6v5.4c0 12.2-4.9 25.1-11.3 29.8-6.1 4.5-10.1 5.7-18.7 5.7-13.6 0-22.5-5.1-27.5-15.7-2.8-5.8-3.1-10.1-1.4-22 1.3-9.2 1.5-9.6 4.3-8.9 1.1.3 7.5 1 14.1 1.6zM107 590.3c-5.2 5.1-14.1 13.4-19.7 18.6l-10.2 9.3-6.8-4.4c-3.7-2.5-8.2-5.3-10-6.4-1.7-1-5.9-3.6-9.3-5.7-3.5-2.1-6.4-3.6-6.6-3.4-.2.2.2 2.8 1 5.8.7 3 1.7 7.2 2 9.4 1.5 9.2 1.4 9 9.4 14.2 4.2 2.8 9.2 5.9 11.1 6.9 4.4 2.5 6.1 3.5 9.1 5.7 3.1 2.2 1.8 3.3-5.5 4.2-2.7.4-7.7 1.3-11 2-6.8 1.5-31.9 6.5-33 6.5-.9 0 .4 10.1 1.5 11.5.4.5 1 3 1.3 5.4.3 2.4.9 4.7 1.4 5.2.4.4 4.2.1 8.3-.7 4.1-.8 10-1.9 13-2.4 3-.6 8.4-1.6 12-2.4 3.6-.8 9.9-2.2 14-3 7.9-1.5 17.9-3.6 29.5-6.2 3.9-.8 9.6-1.9 12.8-2.4 10.2-1.7 11.1-3 8.2-12.6-.8-2.7-1.5-6-1.5-7.4-.1-4.7-.8-4.9-11-3l-9.5 1.9-4.4-2.7c-2.5-1.5-4.6-3.2-4.8-3.7-.2-.6 5.1-5.6 11.7-11.3l11.9-10.3-.6-4.7c-.3-2.6-1.2-6.5-1.9-8.7-.8-2.2-1.4-5.4-1.5-7-.3-8.2-.7-8.1-10.9 1.8zM973.5 634.4c-7 1.8-10.3 3.7-15.9 9.2-8.1 8.2-12.6 19.7-12.6 32.7 0 9.1 1.2 14.4 3.8 17.7l1.7 2.1 6.5-3.4c5.5-2.9 6.5-3.7 6.2-5.8-1.4-11.7-1.3-15.1.3-19.1.9-2.4 2.4-5.2 3.3-6.2 2.1-2.3 8.9-5.5 11.8-5.6 2.2 0 3.8 3.1 2.4 4.7-.4.4-1.7 4.2-2.9 8.3-1.3 4.1-2.9 9.3-3.6 11.5-.7 2.2-2.3 7.4-3.5 11.5-1.2 4.1-2.5 8.7-3 10.2-1.3 4.1.6 5.5 10 7.4 7.9 1.6 8.9 1.6 15.5 0 9.2-2.2 15.5-6.3 20-12.8 4.4-6.5 8.5-19.2 8.5-26.2 0-15.8-10.4-29.7-25.9-34.5-8.7-2.7-16.5-3.3-22.6-1.7zm25.6 28.3c5.9 5 7.4 12.4 4 19.2-2.7 5.1-6.1 7.2-12.2 7.3-2.8 0-5.2-.2-5.5-.5-.3-.2.2-2.4 1-4.8.7-2.4 2.4-7.8 3.6-11.9 3.9-13.5 3.9-13.6 9.1-9.3zM117.7 666.7c-.8 1.2-2.7 12.4-2.7 15.2 0 2 .9 3 4.1 4.5 6.5 3 11.2 12.3 9.5 19-.9 3.7-6.2 9.4-11 11.8-5.6 2.9-16.1 3-19.8.3-5-3.8-6.8-7.6-6.8-14.4 0-3.4.5-7.1 1-8.1.9-1.6 0-2.7-5.9-7.5-3.9-3-7.4-5.5-8-5.5-.5 0-2.2 2.6-3.7 5.7-4.6 9.7-3.4 23.7 2.9 36 2.9 5.6 10.6 13 16.4 15.9 5 2.4 7 2.8 14.8 2.8 10 0 17.3-2.1 25-7.4 11.5-7.9 17.2-21.5 14.6-35.3-1.5-8.5-7.1-19.6-12.4-25-6.1-6.1-16.4-10.6-18-8zM921.7 727.5c-2.6 5.2-4.7 10.3-4.7 11.3 0 .9 4.4 6.5 9.8 12.4 27.7 30.3 41.5 44.8 42.7 44.8 1.5 0 10.4-17.9 9.8-19.7-.2-.6-8.4-8.5-18-17.5-9.7-8.9-18.3-17-19.2-17.8-1.3-1.3-1.1-1.5 2.4-1.8 2.1-.2 6.8.3 10.4 1.2 16.3 3.6 39.1 7 40.3 5.8.8-.8 9.8-18.7 9.8-19.5 0-.7-13.8-2.6-32-4.2-8.5-.8-21.6-2.1-29-2.9-7.4-.8-14.4-1.5-15.5-1.5-1.6-.1-3.1 2-6.8 9.4zM155.9 730.8c-1.3 1-10.3 6.5-19.9 12.2-21 12.4-24.8 15.3-28 21.5-7 13.7 2.9 36.4 22.1 50.9 4.9 3.7 6.4 4.4 7.6 3.5 2-1.7 7.3-9.8 7.3-11.2 0-.7-3.1-3.9-6.8-7.3-9.8-8.9-12.9-16.2-10.1-24.2.9-2.8 4.2-4.8 6-3.6.4.2 3.4 4.8 6.6 10.2 7.5 12.7 13.3 18.5 20.7 20.8 5.3 1.7 5.9 1.7 10.9.1 10.4-3.3 16.7-11.5 16.7-21.8-.1-11.6-9.9-24.6-21.5-28.6l-3-1 3.3-1.9c1.8-1.1 3.1-2.4 3-3-.7-2.6-10.4-18.4-11.4-18.4-.6 0-2.2.8-3.5 1.8zm8.8 35.5c3.7 4 4.3 5.2 4.3 9 0 7.8-7.2 11.9-12.7 7.3-3-2.5-11.3-15.4-11.3-17.5 0-2.2 5.4-4.1 10.4-3.7 4.4.3 5.5.9 9.3 4.9zM902.1 774.9c-6.2 2.4-6.8 2.8-14.4 10-8.1 7.7-12.4 15.7-13.7 25.5-1.1 7.4-.7 11.5 1.1 12.7.5.3 4 .1 7.8-.4l6.8-.9.6-6.4c1.3-14.1 12.4-23 24.4-19.8 2.7.7 2.2 2-4.2 10.4-10.1 13.4-21.3 28.7-22.3 30.7-1.1 1.9-.8 2.6 1.5 4.8 1.6 1.4 5.7 4 9.3 5.7 5.9 2.9 7.4 3.2 16 3.3 8.4 0 10.1-.3 14.6-2.7 6.4-3.4 15.2-12.8 19-20.4 2.6-5.4 2.9-6.8 2.9-16.4 0-9.6-.2-11-2.8-15.8-3.7-7.1-11.5-14.3-19.5-18.3-8.7-4.2-18.9-5-27.1-2zm30.9 37.7c1 3.5 1 5.4.1 8.4-1.4 4.6-6.8 9.7-11.3 10.5-4.2.8-11.3-1.5-11.2-3.6.1-.8 3.8-6.6 8.4-12.8l8.3-11.2 2.2 2.1c1.3 1.2 2.8 4.2 3.5 6.6zM192.2 793.8c-1.1 1.5-3.1 4.4-4.5 6.5l-2.6 3.8 4.5 4.3c5.6 5.4 5.7 7.7.1 13C185 826 167.8 840 167 840c-.3-.1-2.7-3-5.5-6.5-2.7-3.6-5.6-6.7-6.3-7-1.4-.5-11.2 7-11.2 8.6 0 .5 2.5 3.8 5.5 7.4 3 3.5 5.5 6.8 5.5 7.3 0 .4-3.1 3.4-7 6.6-3.8 3.1-7 6.3-7 7 0 1.2 12.6 17.6 13.5 17.6.2 0 3.9-2.9 8.2-6.5l7.8-6.6 3.1 3.6c1.7 1.9 3.5 3.5 4.1 3.5.5 0 3.1-2 5.8-4.4l4.9-4.3-2.7-3.6c-1.5-2-2.7-4-2.7-4.5s4.1-4.2 9.1-8.1c12.4-10 21.9-19 23.1-22 .5-1.4.9-5.6.9-9.3 0-5.6-.4-7.7-2.5-11.2-3-5.2-10-11.7-15.4-14.5l-4.1-2.1-1.9 2.8zM847.6 832.7c-4.2 4.3-7.6 8.3-7.6 8.9 0 .6 11.1 11.9 24.8 25.1 13.6 13.1 29.9 29 36.2 35.1l11.5 11.2 7.8-7.9c4.2-4.3 7.7-8.2 7.7-8.8 0-.7-29.4-29.7-63.2-62.1l-9.6-9.3-7.6 7.8zM223.3 843.9c-6.8 2.3-11.7 6.1-15 11.9-2.5 4.2-2.8 5.7-2.8 13.2.1 9.5-.2 8.9 10.6 27.1 5.8 9.9 6.9 12.4 6.9 16.3 0 3.8-.4 4.8-2.6 6.3-6.4 4.1-16.2-4.5-24.5-21.6-2.3-4.7-4.3-8.7-4.4-8.9-.2-.2-5.8 2.1-13.2 5.4-1.7.8-3.6 1.4-4.2 1.4-1.9 0-1.2 2.9 2.5 10.8 4.1 8.7 5.4 10.5 12.7 18.1 11.8 12.3 21.4 17.2 33.3 17.3 11.1 0 19.2-5.2 24-15.7 4.3-9 2.8-15.4-7.3-31.8-11.3-18.5-12.3-21.8-7.8-26.2 2.9-3 6.3-3.2 11.4-.5 6.6 3.3 14.7 15.7 19.1 29.2 1.2 3.8 2.3 6.8 2.5 6.8.4 0 7.5-2.9 10-4 1.1-.5 3.2-1.4 4.8-2 3.2-1.1 3.5-3.5 1.2-10.1-3.7-10.9-9-19.3-17.5-27.9-9.5-9.6-15.4-13.1-25.3-15.4-8.3-1.9-8-1.9-14.4.3zM820.5 863.4c-11.6 2.8-25.4 13.7-31.1 24.6-2.6 5.1-2.9 6.4-2.8 16 0 9.4.3 11 2.7 15.6 4 7.6 10.8 14.6 17.9 18.5 6 3.2 6.8 3.4 16.3 3.4 9.7-.1 10.2-.2 17.3-4 11-6 17.2-12 21.7-21 7.6-15.4 5.3-29-7-42.4-5.4-5.9-10.3-8.8-17.7-10.6-7.4-1.7-10.6-1.8-17.3-.1zm14.1 23.3c6.2 4.7 9.4 10.7 9.4 17.6 0 7.3-2.5 11.9-8.1 14.7-9.9 5.1-21.3-.5-27.2-13.3-.9-2.1-1.7-4.9-1.7-6.3 0-2.9 3.6-10.3 5.9-12.2 6.2-5.1 15.5-5.3 21.7-.5zM744.7 881.1 735 886l1.4 3.3c.7 1.7 4.3 9 7.9 16.2 3.7 7.1 6.5 13 6.4 13.1-.1.1-2.5-.2-5.2-.7-14.5-2.9-28.8 4.5-35.3 18.1-3.1 6.6-4 15.1-2.2 21.8 3.8 13.8 11.7 24.6 22.2 30.3 5.7 3.1 7.1 3.4 14.3 3.4 7 0 8.8-.4 14.6-3.3 6.8-3.3 13.9-9.9 13.9-13 0-.9.8-2.7 1.8-4l1.7-2.2 1.8 3c1 1.6 2.6 3 3.5 3 .9 0 5.4-1.8 9.9-4.1 6.1-3 8.3-4.6 8.3-6.1 0-2.4-41.8-85-44.3-87.5-.9-.9-3.5 0-11 3.8zm10.4 52.9c7.8 4 13.2 16.4 10.9 25-1.3 4.8-7.6 10.6-12.5 11.6-7.5 1.4-15.7-3.2-19.7-11-3.1-5.8-3.2-16.3-.2-20.3 5.4-7.2 13.6-9.3 21.5-5.3zM318.1 909.2c-1.9 3.5-6.9 12.4-11.1 19.8-14 24.6-21.3 37.4-24.4 43-1.6 3-4.7 8.4-6.7 11.9s-3.5 7-3.2 7.7c.6 1.6 16 10.4 18.2 10.4 1.5 0 6.1-7.3 16.6-26.5 1.6-2.8 5.1-9.1 8-14 13.9-24.1 25.5-45.4 25.5-46.8 0-1.3-16.8-11.7-18.9-11.7-.4 0-2.2 2.8-4 6.2zM354 927.2c-1.3 2.9-3.3 7.5-4.5 10.3-17.1 38.3-17 38.1-21.3 47.5-8.5 18.5-10 21.9-10.7 24.1-.4 1.3-1.2 3-1.8 3.7-1.3 1.6-1.6 1.4 8.3 6 12.6 5.9 11.7 6.2 16.7-4.8 2.3-5.2 5.8-12.9 7.7-17 1.9-4.1 5.3-11.8 7.6-17 2.3-5.2 4.8-10.9 5.5-12.5.8-1.7 4.7-10.4 8.8-19.5 4.1-9.1 7.1-16.9 6.6-17.4-1-1.1-17.8-8.6-19.3-8.6-.7 0-2.3 2.4-3.6 5.2zM387.4 943.7c-.9 3.2-2 7.4-2.5 9.3-.4 1.9-1.8 6.6-3 10.5-1.2 3.8-2.7 9.2-3.3 12-.7 2.7-1.8 6.3-2.4 7.8-.7 1.6-1.2 3.7-1.2 4.8 0 1.1-.4 2.8-.9 3.7-.5.9-1.8 4.9-2.9 8.9l-2 7.1 5.7 1.9c3.1 1.1 7.9 2.7 10.7 3.5l5.1 1.5 2-5.6c1.2-3.1 2.8-8.1 3.7-11.1.8-3 2.6-9.3 4-14 4.6-16.5 14.3-22.5 24.9-15.5 3.3 2.1 5.1 7.5 4.3 12.9-.8 4.9-4.4 17.7-9.1 32.7-1 3.1-1.5 6.3-1.2 7.2.3.9 3.1 2.3 6.4 3.2 3.2.8 7.8 2.2 10.2 3 4.6 1.6 6 1 6.1-2.3 0-.7 1.6-6.8 3.6-13.5 1.9-6.7 4.1-14.5 4.9-17.2.8-2.8 2.1-7.3 3-10.2 5.5-18.6-4.4-34.3-22.8-36-7.2-.6-12.9.7-18.1 4.2-2 1.3-3.6 2.3-3.6 2.2 0-.1.6-2.5 1.4-5.4 1.4-5.4.8-7.3-2.4-7.3-.8 0-4.4-.9-7.8-2-10.1-3.2-10.8-3-12.8 3.7zM663.1 944.5c-10.6 2.6-19.6 7.8-25.6 14.7-5.2 6.1-4.8 7.9 3 11.9l6.4 3.4 4.2-4.4c7.9-8.2 18.2-10.4 25.9-5.6 3.4 2.2 6.8 6.1 5.8 7-.2.1-3.4 1.2-7.3 2.4-7 2.2-9.7 3-23.5 7.1-17.2 5-17.5 5.2-17.2 8.9.3 4.6 6.7 17.2 10.5 20.9 10.9 10.4 27.8 12 44 4.3 19.3-9.3 25.8-29.9 16.2-51.6-4-9-12.2-15.8-22.7-18.9-6.5-1.9-12.2-1.9-19.7-.1zm24.9 43c0 4.9-3.4 11.2-7.3 13.5-2.1 1.3-5 2-8.6 2-4.9 0-5.7-.3-9.3-4-6.4-6.4-5.7-7.1 13.2-12.5 11.6-3.3 12-3.3 12 1zM605.8 958.4c-4.8.6-8.9 1.4-9.2 1.7-.6.6 2 23.3 3.4 29.4 3.4 14.6-3.1 24.6-17.3 27-3 .5-3.7 1-3.3 2.3.3.9.8 4.4 1.1 7.7 1.2 11.7 1.9 12.3 10 8.6 3.9-1.8 12.4-10.2 12.6-12.5.1-2 1.8 2.8 1.8 5.4.2 4.9.9 5.1 12 3.9 7.4-.9 10.4-1.6 10.9-2.7.6-1.6-1.1-19.9-2.7-29.2-1.9-10.5-3.1-19.5-4.1-29-.6-5.2-1.2-10.5-1.5-11.8-.6-2.5-.7-2.5-13.7-.8zM509.1 964.4c-.6 1.4-1.5 8.3-2.1 15.3-1.5 18.6-1.4 18.2-5.8 17.7-2-.2-8.6-.8-14.7-1.4-6-.5-14-1.3-17.6-1.6-7.6-.7-7.2-1.3-8.4 10.8l-.7 6.7 3.3.5c5.7 1 19.9 2.5 30.3 3.2l9.9.7-.6 9.6c-.2 5.3-.8 10.4-1.2 11.3-.9 2.2-3.6 2.3-22 .3-7.7-.8-16.6-1.5-19.7-1.5-6.6 0-6.5-.1-7 10.5l-.3 7 12 1.3c56.6 6 57 6 58.3 3.6 1-1.9 2.5-14.2 4.2-34.4 1.4-17.7 4-44.1 4.9-51 .5-3.8.5-7 0-7.6-.5-.7-3.5-1.5-6.7-1.8-3.1-.4-7.8-.9-10.4-1.2-4.4-.5-4.8-.4-5.7 2z" />
    </svg>
)


export const SunIcon = ({ className, ...rest }: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <g strokeDasharray="2">
                <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
                <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.2s"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
            </g>
            <path
                fill="currentColor"
                d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                opacity="0"
            >
                <set attributeName="opacity" begin="0.5s" to="1" />
            </path>
        </g>
        <g fill="currentColor" fillOpacity="0">
            <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
                <animate
                    id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="22" cy="2" r="3" fill="#fff">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="3;12"
                />
            </circle>
            <circle cx="22" cy="2" r="1">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="1;10"
                />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="6"
            fill="currentColor"
            mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
        >
            <set attributeName="opacity" begin="0.5s" to="0" />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.1s"
                dur="0.4s"
                values="6;10"
            />
        </circle>
    </svg>
)


export const MoonIcon = ({ className, ...rest }: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
        <g
            fill="none"
            stroke="currentColor"
            strokeDasharray="2"
            strokeDashoffset="2"
            strokeLinecap="round"
            strokeWidth="2"
        >
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.2s"
                    dur="0.2s"
                    values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.2s"
                    dur="0.2s"
                    values="2;0"
                />
            </path>
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.5s"
                    dur="0.2s"
                    values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.5s"
                    dur="1.2s"
                    values="2;0"
                />
            </path>
            <animateTransform
                attributeName="transform"
                dur="30s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
            />
        </g>
        <g fill="currentColor">
            <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <g
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
            <set attributeName="opacity" begin="0.6s" to="0" />
        </g>
        <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="18" cy="6" r="12" fill="#fff">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="12;3"
                />
            </circle>
            <circle cx="18" cy="6" r="10">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="10;1"
                />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="10"
            fill="currentColor"
            mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
            opacity="0"
        >
            <set attributeName="opacity" begin="0.6s" to="1" />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.6s"
                dur="0.4s"
                values="10;6"
            />
        </circle>
    </svg>
)

