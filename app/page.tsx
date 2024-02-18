import Faq from '@/components/shared/Faq'
import Partners from '@/components/shared/Partners'
import Pricing from '@/components/shared/Pricing'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { categories, tags } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'


export default async function Home() {

  return (
    <>
      <section className='py-5 md:py-10'>
        <div className='wrapper grid grid-cols-1 md:grid-cols-2 gap-5 2xl:gap-0'>
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Supercharge your meetings and made it effective</h1>

            <p className="p-regular-16 md:p-regular-18 text-grey-400">Experience the future of virtual communication today. Say hello to a whole new way of connecting!</p>

            <Button asChild className="button w-full sm:w-fit" size="lg">
              <Link href="#events">
                Start meeting now
              </Link>
            </Button>
          </div>

          <Image src="/assets/images/hero.png" alt="Events" width={1000} height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]" />
        </div>
      </section>

      <section className="bg-grey-50 py-10">
        <Partners />

        <div className='grid grid-cols-2 md:grid-cols-4 place-items-center text-grey-400'>
          <div>
            <h1 className='h2-semibold text-black'>200k+</h1>
            <p className='p-medium-12'>User using the platform</p>
          </div>
          <div>
            <h1 className='h2-semibold text-black'>98%</h1>
            <p className='p-medium-12'>Revenue growth</p>
          </div>
          <div>
            <h1 className='h2-semibold text-black'>150+</h1>
            <p className='p-medium-12'>Coperation companies</p>
          </div>
          <div>
            <h1 className='h2-semibold text-black'>10pb</h1>
            <p className='p-medium-12'>Data served</p>
          </div>
        </div>
      </section>


      <section className='py-10 grid grid-cols-1 md:grid-cols-2 place-items-center'>
        <div className='flex flex-col items-start'>
          <h1 className='h2-semibold'>Flexible sloutions <br /> for all your need.</h1>
          <div className="w-full rounded-md p-4 flex gap-2 text-grey-500">
            <div className="h-60 border-4 rounded-lg group-hover:border-blue-500" />
            <ul className='flex flex-col gap-2'>
              {tags.map((tag, index) => (
                <li key={index} className='
              group p-2 rounded-md hover:cursor-pointer hover:text-black '>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <Image src="/assets/images/video-chat.png" alt="chat" width={600} height={500} />
      </section>

      <section>
        <div className='flex-wrap flex-center text-center py-10'>
          {categories.map((category, index) => (
            <div key={index}>
              <button className={`px-[33px] py-2 font-semibold  text-grey-500 hover:border-b-4 rounded-[2px] hover:border-blue-500 transition duration-500`}
              >
                {category}
              </button>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center'>
          <Image src={'/assets/images/share-meeting.jpg'} alt="share" width={600} height={500} />
          <div className="">
            <h1 className='h2-semibold'>Make your team<br /> Collaboration easy</h1>
            <p className='p-medium-14 text-grey-400 max-w-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi enim voluptatem perspiciatis cumque doloribus quod, molestiae unde dolorum voluptatum? Reprehenderit minus illo alias amet placeat nulla recusandae fugiat dolores suscipit?</p>
          </div>
        </div>
      </section>

      <Pricing />

      <Faq />

      <section className='py-20 bg-blue-600 text-white flex flex-col items-center justify-center'>
        <h1 className='h2-bold text-center'>You've get this far. <br />Ready to get started your <br />important meeting</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 pt-10'>
          <Button asChild className="button w-full sm:w-fit border border-white bg-transparent hover:bg-white hover:text-black" size="lg">
            <Link href="#events">
              Plan and Pricings
            </Link>
          </Button>
          <Button asChild className="button w-full sm:w-fit bg-white text-black hover:bg-white" size="lg">
            <Link href="#events">
              Start my meeting
            </Link>
          </Button>
        </div>
      </section>


    </>
  )
}
