import TwoColumnImg from '/images/hero_thumb.jpeg'

const TwoColumn = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-violet-950/10 to-transparent">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6">Stop Searching. We’ve got <br /> you covered.</h2>
            <p className="text-lg text-violet-100/70 mb-8">
              Our expert editors transform ordinary footage into compelling visual stories that engage viewers and drive action.
            </p>
            <a href="#work" className="btn-primary inline-flex items-center gap-2">
              See Our Work
            </a>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-violet-600/20 to-violet-800/20 rounded-2xl blur-xl opacity-70 -z-10"></div>
            <div className="aspect-w-3 aspect-h-4 rounded-2xl overflow-hidden border border-violet-700/30 shadow-xl">
              <img
                src={TwoColumnImg}
                alt="Video editing process"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwoColumn