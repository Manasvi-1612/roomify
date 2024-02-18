'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Virtual } from 'swiper/modules'
import Link from 'next/link';


const Partners = () => {
    return (
        <section className="py-14 pb-[160p] lg:py-[100px]">
            <div className="container">
                <div className="heading text-center">
                    <h2 className='p-semibold-24'>Used by proffesionals on</h2>
                </div>
            </div>
            <div className="mx-auto w-4/5 py-10">
                <Swiper
                    modules={[Navigation, Autoplay, Virtual]}
                    slidesPerView="auto"
                    spaceBetween={30}
                    speed={2500}
                    loop={true}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.7,
                        },
                        600: {
                            slidesPerView: 3,
                        },
                        1000: {
                            slidesPerView: 5,
                        },
                        1600: {
                            slidesPerView: 8,
                        },
                    }}
                >
                    <SwiperSlide>
                        <Link href="#" className="flex items-center gap-3">
                            <div>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_298_1769)">
                                        <mask
                                            id="mask0_298_1769"
                                            style={{ maskType: 'alpha' }}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="30"
                                            height="30"
                                        >
                                            <circle cx="15" cy="15" r="15" fill="#C4C4C4" />
                                        </mask>
                                        <g mask="url(#mask0_298_1769)">
                                            <circle cx="7.86398" cy="-2.66231" r="12.4449" transform="rotate(-22 7.86398 -2.66231)" fill="#47BDFF" />
                                            <circle cx="22.1375" cy="32.6639" r="12.4449" transform="rotate(-22 22.1375 32.6639)" fill="#47BDFF" />
                                            <circle cx="-2.6629" cy="22.1365" r="12.4449" transform="rotate(-22 -2.6629 22.1365)" fill="#B476E5" />
                                            <circle cx="32.337" cy="7.05449" r="12.4449" transform="rotate(-22 32.337 7.05449)" fill="#B476E5" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_298_1769">
                                            <rect width="30" height="30" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-black dark:text-white">Camera</span>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="#" className="flex items-center gap-3">
                            <div>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2 12.7576C2 6.26406 7.26406 1 13.7576 1V17.2417C13.7576 23.7352 8.49355 28.9993 2 28.9993V12.7576Z"
                                        fill="#FFBD11"
                                    />
                                    <path
                                        d="M15.4633 7.38899C15.4633 3.86045 18.3237 1 21.8522 1C25.3808 1 28.2412 3.86045 28.2412 7.38899V7.75786C28.2412 11.2864 25.3808 14.1469 21.8522 14.1469C18.3237 14.1469 15.4633 11.2864 15.4633 7.75786V7.38899Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M15.4633 22.2425C15.4633 18.714 18.3237 15.8535 21.8522 15.8535C25.3808 15.8535 28.2412 18.714 28.2412 22.2425V22.6114C28.2412 26.1399 25.3808 29.0004 21.8522 29.0004C18.3237 29.0004 15.4633 26.1399 15.4633 22.6114V22.2425Z"
                                        fill="#B476E5"
                                    />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-black dark:text-white">Startup</span>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="#" className="flex items-center gap-3">
                            <div>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_301_1299)">
                                        <rect x="5.55554" y="5.55469" width="18.8889" height="18.8889" rx="8" fill="#47BDFF" />
                                        <rect x="9.42285" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                        <rect x="13.559" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                        <rect x="17.696" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                        <rect y="20.5762" width="2.88247" height="4.44444" rx="1.44123" transform="rotate(-90 0 20.5762)" fill="#B476E5" />
                                        <rect y="16.4395" width="2.88247" height="4.44444" rx="1.44123" transform="rotate(-90 0 16.4395)" fill="#B476E5" />
                                        <rect y="12.3047" width="2.88247" height="4.44444" rx="1.44123" transform="rotate(-90 0 12.3047)" fill="#B476E5" />
                                        <rect
                                            x="25.5558"
                                            y="20.5762"
                                            width="2.88247"
                                            height="4.44444"
                                            rx="1.44123"
                                            transform="rotate(-90 25.5558 20.5762)"
                                            fill="#B476E5"
                                        />
                                        <rect
                                            x="25.5558"
                                            y="16.4395"
                                            width="2.88247"
                                            height="4.44444"
                                            rx="1.44123"
                                            transform="rotate(-90 25.5558 16.4395)"
                                            fill="#B476E5"
                                        />
                                        <rect
                                            x="25.5558"
                                            y="12.3047"
                                            width="2.88247"
                                            height="4.44444"
                                            rx="1.44123"
                                            transform="rotate(-90 25.5558 12.3047)"
                                            fill="#B476E5"
                                        />
                                        <rect x="9.42285" y="25.5547" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                        <rect x="13.559" y="25.5547" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                        <rect x="17.696" y="25.5547" width="2.88247" height="4.44444" rx="1.44123" fill="#B476E5" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_301_1299">
                                            <rect width="30" height="30" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-black dark:text-white">Software</span>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="#" className="flex items-center gap-3">
                            <div>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.7705 5.24752C16.7705 3.4509 18.9554 2.56542 20.2062 3.85514L29.1466 13.0738C29.5085 13.4469 29.7109 13.9463 29.7109 14.4661V25.0644C29.7109 26.861 27.526 27.7465 26.2752 26.4568L17.3348 17.2381C16.9729 16.865 16.7705 16.3656 16.7705 15.8457V5.24752Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M8.75098 4.93502C8.75098 3.1384 10.9359 2.25292 12.1867 3.54264L21.1271 12.7613C21.489 13.1344 21.6914 13.6338 21.6914 14.1536V24.7519C21.6914 26.5485 19.5064 27.434 18.2556 26.1443L9.31526 16.9256C8.95337 16.5525 8.75098 16.0531 8.75098 15.5332V4.93502Z"
                                        fill="#FFBD11"
                                    />
                                    <path
                                        d="M1 5.24752C1 3.4509 3.18492 2.56542 4.43571 3.85514L13.3761 13.0738C13.738 13.4469 13.9404 13.9463 13.9404 14.4661V25.0644C13.9404 26.861 11.7555 27.7465 10.5047 26.4568L1.56429 17.2381C1.20239 16.865 1 16.3656 1 15.8457V5.24752Z"
                                        fill="#B476E5"
                                    />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-black dark:text-white">Techlify</span>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="#" className="flex items-center gap-3">
                            <div>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_301_1325" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="1" y="0" width="28" height="30">
                                        <path
                                            d="M12.0903 0.695468C13.6964 -0.231822 15.6753 -0.231823 17.2814 0.695467L25.7762 5.59995C27.3823 6.52724 28.3717 8.24094 28.3717 10.0955V19.9045C28.3717 21.7591 27.3823 23.4728 25.7762 24.4001L17.2814 29.3045C15.6753 30.2318 13.6964 30.2318 12.0903 29.3045L3.59552 24.4001C1.98941 23.4728 1 21.7591 1 19.9045V10.0955C1 8.24094 1.98941 6.52724 3.59552 5.59995L12.0903 0.695468Z"
                                            fill="#C4C4C4"
                                        />
                                    </mask>
                                    <g mask="url(#mask0_301_1325)">
                                        <rect
                                            width="17.3224"
                                            height="17.3224"
                                            transform="matrix(0.866025 0.5 -0.866025 0.5 14.686 -1.06055)"
                                            fill="#B476E5"
                                        />
                                        <rect
                                            width="15.939"
                                            height="15.939"
                                            transform="matrix(0.866025 0.5 -2.20305e-08 1 0.881958 7.72656)"
                                            fill="#47BDFF"
                                        />
                                        <rect
                                            width="15.939"
                                            height="15.939"
                                            transform="matrix(0.866025 -0.5 2.20305e-08 1 14.686 15.6973)"
                                            fill="#FFBD11"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-black dark:text-white">Blockly</span>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="#" className="flex items-center gap-3">
                            <div>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.7673 26.3704C12.5926 26.3704 12.4091 26.3529 12.2256 26.3005C11.0285 26.0034 10.2946 24.7888 10.5916 23.5918L15.0653 5.69711C15.3711 4.50006 16.5857 3.77484 17.7827 4.06318C18.9798 4.36899 19.705 5.58353 19.4079 6.78058L14.9342 24.6753C14.6809 25.6888 13.7721 26.3704 12.7673 26.3704Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M23.2896 21.8976C22.7129 21.8976 22.1449 21.6791 21.7081 21.2422C20.8343 20.3685 20.8343 18.953 21.7081 18.0792L24.6002 15.1871L21.7081 12.2949C20.8343 11.4211 20.8343 10.0056 21.7081 9.13189C22.5818 8.25812 23.9973 8.25812 24.8711 9.13189L29.3448 13.6056C30.2185 14.4793 30.2185 15.8948 29.3448 16.7686L24.8711 21.2422C24.4342 21.6791 23.8663 21.8976 23.2896 21.8976Z"
                                        fill="#B476E5"
                                    />
                                    <path
                                        d="M6.7105 21.8976C6.13382 21.8976 5.56587 21.6791 5.12899 21.2422L0.655323 16.7686C-0.218441 15.8948 -0.218441 14.4793 0.655323 13.6056L5.12899 9.13189C6.00275 8.25812 7.41825 8.25812 8.29201 9.13189C9.16578 10.0056 9.16578 11.4211 8.29201 12.2949L5.39986 15.1871L8.29201 18.0792C9.16578 18.953 9.16578 20.3685 8.29201 21.2422C7.85513 21.6791 7.28718 21.8976 6.7105 21.8976Z"
                                        fill="#B476E5"
                                    />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-black dark:text-white">Codelify</span>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="#" className="flex items-center gap-3">
                            <div>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="3" width="28.5828" height="24.7945" rx="2" fill="#47BDFF" />
                                    <path
                                        d="M28.0001 10.8555H15.9614C14.8569 10.8555 13.9614 11.7509 13.9614 12.8555V17.9394C13.9614 19.044 14.8569 19.9394 15.9614 19.9394H28.0001C29.1046 19.9394 30.0001 19.044 30.0001 17.9394V12.8555C30.0001 11.7509 29.1046 10.8555 28.0001 10.8555Z"
                                        fill="#B476E5"
                                    />
                                    <circle cx="18.3508" cy="15.3979" r="2.27099" fill="white" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-black dark:text-white">Financely</span>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="#" className="flex items-center gap-3">
                            <div>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.4159 6.37499C14.4159 3.95781 12.8496 2 10.9159 2C8.98433 2 7.41589 3.95781 7.41589 6.37499C7.41589 8.78998 8.98433 10.75 10.9159 10.75C12.8496 10.75 14.4159 8.78998 14.4159 6.37499Z"
                                        fill="#B476E5"
                                    />
                                    <path
                                        d="M7.99998 12.791C7.99998 10.3738 6.43373 8.41602 4.49999 8.41602C2.56625 8.41602 1 10.3738 1 12.791C1 15.2082 2.56625 17.166 4.49999 17.166C6.43373 17.166 7.99998 15.2082 7.99998 12.791Z"
                                        fill="#B476E5"
                                    />
                                    <path
                                        d="M29 12.791C29 10.3738 27.4337 8.41602 25.5 8.41602C23.5662 8.41602 22 10.3738 22 12.791C22 15.2082 23.5662 17.166 25.5 17.166C27.4337 17.166 29 15.2082 29 12.791Z"
                                        fill="#B476E5"
                                    />
                                    <path
                                        d="M22.5841 6.37499C22.5841 3.95781 21.0157 2 19.0841 2C17.1504 2 15.5841 3.95781 15.5841 6.37499C15.5841 8.78998 17.1504 10.75 19.0841 10.75C21.0157 10.75 22.5841 8.78998 22.5841 6.37499Z"
                                        fill="#B476E5"
                                    />
                                    <path
                                        d="M24.8808 23.0331C24.7561 21.8825 24.3864 20.7712 23.7958 19.7759C23.5267 19.3362 23.2708 18.9009 23.017 18.4787C20.928 14.9569 19.1255 11.9141 14.9999 11.9141C10.8743 11.9141 9.08052 14.9569 6.99147 18.4787C6.73991 18.9031 6.48178 19.3362 6.21272 19.7781C5.6221 20.7712 5.25022 21.8825 5.12772 23.0331C4.9571 24.4922 5.41866 25.9556 6.39647 27.0537C7.40709 28.1846 8.85303 28.8321 10.3711 28.83H19.6374C21.1555 28.8321 22.6014 28.1846 23.612 27.0537C24.5877 25.9556 25.0492 24.4922 24.8808 23.0331Z"
                                        fill="#47BDFF"
                                    />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-black dark:text-white">Veterinary</span>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Partners
