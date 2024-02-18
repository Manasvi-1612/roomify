import { pricingLinks } from '@/constants'
import Link from 'next/link'

const Pricing = () => {
    return (
        <section className="py-14  lg:py-[100px]">
            <div className="container">
                <div className="text-center h2-semibold pb-10">
                    <h2>Simple pricing</h2>
                    <h2>and clear value</h2>
                </div>
                <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col group rounded-3xl border-2 border-gray-100 bg-white p-6 px-4 transitio sm:px-6" data-aos="fade-up" data-aos-duration="1000">
                        <div className="mb-8 text-black text-center">
                            <h3 className="text-[20px] font-medium ">Basic Pro </h3>
                            <p className="text-[19px] font-medium ">only <span className="text-blue-700 text-[22px]">$100</span> / per month </p>
                        </div>


                        <ul className="space-y-5 pb-7 font-semibold">
                            {pricingLinks.map((link, index) => (
                                <li className="flex items-center flex-row gap-2" key={index}>
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="blue" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p>{link.title}<span className='text-grey-400'>{link.subtitle}</span></p>
                                </li>
                            ))}
                        </ul>


                        <div className="mt-auto rounded-2xl bg-gray-100 py-3 flex items-center justify-center ">
                            <span className="text-sm text-grey-500 font-bold sm:pr-5">
                                Buy Now
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col group rounded-3xl border-2 border-gray-100 bg-white p-6 px-4 transitio sm:px-6" data-aos="fade-up" data-aos-duration="1000">
                        <div className="mb-8 text-black text-center">
                            <h3 className="text-[20px] font-medium ">Business Pro </h3>
                            <p className="text-[19px] font-medium ">only <span className="text-blue-700 text-[22px]">$70</span> /per month </p>
                        </div>


                        <ul className="space-y-5 pb-7 font-semibold">
                            {pricingLinks.map((link, index) => (
                                <li className="flex items-center flex-row gap-2" key={index}>
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="blue" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p>{link.title}<span className='text-grey-400'>{link.subtitle}</span></p>
                                </li>
                            ))}
                        </ul>


                        <div className="mt-auto rounded-2xl bg-black py-3 flex items-center justify-center ">
                            <span className="text-sm text-white font-bold sm:pr-5">
                                Buy Now
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col group rounded-3xl border-2 border-gray-100 bg-white p-6 px-4 transitio sm:px-6" data-aos="fade-up" data-aos-duration="1000">
                        <div className="mb-8 text-black text-center">
                            <h3 className="text-[20px] font-medium ">Business Pluse </h3>
                            <p className="text-[19px] font-medium ">only <span className="text-blue-700 text-[22px]">$200</span> / per month </p>
                        </div>


                        <ul className="space-y-5 pb-7 font-semibold">
                            {pricingLinks.map((link, index) => (
                                <li className="flex items-center flex-row gap-2" key={index}>
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="blue" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p>{link.title}<span className='text-grey-400'>{link.subtitle}</span></p>
                                </li>
                            ))}
                        </ul>


                        <div className="mt-auto rounded-2xl bg-gray-100 py-3 flex items-center justify-center ">
                            <span className="text-sm text-grey-500 font-bold sm:pr-5">
                                Buy Now
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
