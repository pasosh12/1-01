import { SVGProps } from "react";


const Github_Cat = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg
        width={20}
        height={20}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
            fill="#666666"
        />
    </svg>
);


const Chain = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (

        <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M11.2864 8.7133C10.6038 8.031 9.67822 7.64771 8.71309 7.64771C7.74797 7.64771 6.82235 8.031 6.13976 8.7133L3.56559 11.2866C2.88299 11.9692 2.49951 12.895 2.49951 13.8604C2.49951 14.8257 2.88299 15.7515 3.56559 16.4341C4.24819 17.1167 5.174 17.5002 6.13934 17.5002C7.10469 17.5002 8.03049 17.1167 8.71309 16.4341L9.99976 15.1475"
                stroke="black"
                strokeWidth={1.66667}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.71289 11.2867C9.39548 11.969 10.3211 12.3523 11.2862 12.3523C12.2513 12.3523 13.177 11.969 13.8596 11.2867L16.4337 8.71334C17.1163 8.03074 17.4998 7.10493 17.4998 6.13959C17.4998 5.17424 17.1163 4.24844 16.4337 3.56584C15.7511 2.88324 14.8253 2.49976 13.86 2.49976C12.8946 2.49976 11.9688 2.88324 11.2862 3.56584L9.99956 4.8525"
                stroke="black"
                strokeWidth={1.66667}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>

);
export const ProjectsIcons ={
    Chain,
    Github_Cat
}