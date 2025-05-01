import { InstagramIcon, Twitter } from 'lucide-react'
import AiImg from './assets/images/illustration-ai-content.webp'
import AudienceImg from './assets/images/illustration-audience-growth.webp'
import CalendarImg from './assets/images/illustration-consistent-schedule.webp'
import CreateImg from './assets/images/illustration-create-post.webp'
import RatingStars from './assets/images/illustration-five-stars.webp'
import GrowthImg from './assets/images/illustration-grow-followers.webp'
import PostsImg from './assets/images/illustration-schedule-posts.webp'
import BentoCard from './component/BentoCard'

function App() {
  return (
    <main className="px-4 py-8 lg:container lg:mx-auto lg:py-12">
      <section className="lg:grid-rows-auto grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-3 lg:grid-cols-12 lg:gap-4 xl:gap-8">
        <BentoCard className="bg-primary-purple order-1 px-4 py-10 sm:row-span-2 md:row-span-1 lg:order-2 lg:col-span-6 lg:row-span-2 lg:px-8 lg:py-16">
          <div className="flex flex-col items-center space-y-6 sm:h-full sm:justify-center lg:space-y-10">
            <h1 className="text-center text-5xl text-pretty text-white lg:text-7xl lg:font-medium lg:text-balance">
              Social Media &nbsp;
              <span className="text-primary-yellow">10x</span>
              &nbsp;
              <span className="italic lg:inline-block">Faster</span>
              &nbsp; with AI
            </h1>
            <img
              src={RatingStars}
              alt="rating-stars"
              className="mb-2 max-w-[70%] text-center lg:max-w-[40%]"
            />
            <p className="text-secondary-yellow text-base lg:text-2xl">
              Over 4,000 5-star reviews
            </p>
          </div>
        </BentoCard>

        <BentoCard className="order-2 bg-white p-4 sm:row-span-1 md:col-span-2 lg:order-4 lg:col-span-3 lg:row-span-2 lg:overflow-x-clip">
          <div className="flex flex-col items-center space-y-4 md:h-full md:justify-center">
            <div className="flex w-full items-center justify-evenly lg:space-x-2">
              <div className="flex flex-shrink-0 items-center justify-between space-x-2 rounded-full bg-white p-3 shadow-lg">
                <div className="bg-primary-yellow text-primary-purple flex size-10 items-center justify-center rounded-full">
                  <InstagramIcon />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <p className="text-sm font-bold text-black">@YourCo</p>
                  <p className="text-xs text-black/50">12K Followers</p>
                </div>
              </div>
              <div className="flex flex-shrink-0 items-center justify-between space-x-2 rounded-full bg-white p-3 shadow-lg">
                <div className="bg-primary-yellow text-primary-purple flex size-10 items-center justify-center rounded-full">
                  <Twitter />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <p className="text-sm font-bold text-black">@YourCo</p>
                  <p className="text-xs text-black/50">8K Followers</p>
                </div>
              </div>
            </div>
            <p className="text-2xl leading-6 font-medium lg:text-4xl lg:leading-8 lg:text-pretty">
              Manage multiple accounts and platforms.
            </p>
          </div>
        </BentoCard>

        <BentoCard className="bg-primary-yellow order-3 flex flex-col px-3 pt-4 md:order-8 md:row-span-1 lg:relative lg:order-5 lg:col-span-3 lg:row-span-2 lg:items-center lg:justify-between lg:overflow-clip lg:px-6 lg:pt-8">
          <h1 className="text-2xl leading-6 font-medium text-black lg:text-4xl lg:leading-8 lg:text-pretty">
            Maintain a consistent posting schedule.
          </h1>
          <img
            src={CalendarImg}
            alt="calendar-img"
            className="mt-8 max-w-[80%] lg:absolute lg:-bottom-20 lg:mt-0 lg:max-w-[80%]"
          />
        </BentoCard>

        <BentoCard className="bg-secondary-purple order-4 px-4 py-8 sm:row-span-2 lg:order-3 lg:col-span-3 lg:row-span-4 lg:overflow-hidden lg:p-10">
          <div className="flex flex-col items-center space-y-5 lg:h-full lg:justify-center lg:gap-y-4">
            <h1 className="text-2xl font-medium text-black lg:text-5xl lg:text-pretty">
              Schedule to social media.
            </h1>
            <img src={PostsImg} alt="posts-img" className="lg:-mr-[75%]" />
            <p className="text-center text-lg leading-5 text-pretty text-black lg:text-start lg:text-2xl lg:leading-8">
              Optimize post timings to publish content at the perfect time for
              your audience.
            </p>
          </div>
        </BentoCard>

        <BentoCard className="bg-primary-purple order-5 px-4 py-6 sm:row-span-2 lg:order-8 lg:col-span-6 lg:row-span-2">
          <div className="flex flex-col items-center space-y-8 sm:h-full sm:justify-center lg:flex-row lg:space-y-0 lg:gap-x-4">
            <img
              src={GrowthImg}
              alt="growth-image"
              className="max-w-[60%] lg:max-w-[45%]"
            />
            <h1 className="max-w-[60%] text-center text-3xl leading-6 text-pretty text-white lg:max-w-full lg:text-start lg:text-4xl lg:leading-8 lg:font-medium">
              Grow followers with non-stop content.
            </h1>
          </div>
        </BentoCard>

        <BentoCard className="order-6 bg-white p-6 sm:col-span-2 md:order-8 md:col-span-3 lg:order-7 lg:col-span-3 lg:row-span-2 lg:flex lg:flex-col lg:items-center">
          <h1 className="mb-6 leading-6 text-black lg:mb-12 lg:text-xl">
            <span className="block text-4xl font-medium lg:text-6xl">
              &gt;56%
            </span>
            &nbsp;faster audience growth
          </h1>
          <img
            src={AudienceImg}
            alt="audience-img"
            className="max-w-[60%] lg:max-w-[80%]"
          />
        </BentoCard>

        <BentoCard className="bg-secondary-yellow order-7 p-6 md:order-4 md:row-span-3 lg:order-1 lg:col-span-3 lg:row-span-3 lg:py-12">
          <div className="flex flex-col space-y-4 sm:h-full sm:justify-center lg:space-y-8">
            <h1 className="text-2xl leading-6 font-medium text-balance text-black lg:text-5xl lg:leading-none lg:font-medium">
              Create and schedule content&nbsp;
              <span className="text-primary-purple italic lg:block">
                quicker.
              </span>
            </h1>
            <img
              src={CreateImg}
              alt="create-img"
              className="max-w-[60%] lg:max-w-[75%] lg:self-center"
            />
          </div>
        </BentoCard>

        <BentoCard className="bg-primary-yellow order-8 p-6 md:order-7 lg:order-6 lg:col-span-3 lg:row-span-3 lg:py-12">
          <div className="flex flex-col items-start space-y-6 lg:space-y-10">
            <h1 className="text-3xl leading-7 font-medium text-black lg:text-start lg:text-4xl lg:leading-9 lg:font-medium lg:text-pretty">
              Write your content using AI.
            </h1>
            <img
              src={AiImg}
              alt="ai-img"
              className="max-w-[75%] sm:max-w-[50%] lg:max-w-full"
            />
          </div>
        </BentoCard>
      </section>
    </main>
  )
}

export default App
