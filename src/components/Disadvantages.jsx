import { FiClock, FiStar, FiUsers } from "react-icons/fi";


const Disadvantages = () => {
  const badEditingCards = [
    {
      icon: <FiClock className="text-4xl text-violet-400" />,
      title: "Lost Engagement",
      description:
        "Poor editing fails to capture attention, leaving your content unnoticed and reducing shares.",
    },
    {
      icon: <FiStar className="text-4xl text-violet-400" />,
      title: "Damaged Reputation",
      description:
        "Low-quality visuals hurt your brand’s credibility, making it hard to build trust with your audience.",
    },
    {
      icon: <FiUsers className="text-4xl text-violet-400" />,
      title: "Missed Opportunities",
      description:
        "Without professional editing, your videos may struggle to grow your audience and retain viewers."
    }
  ];
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-violet-950/10">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg">
            Don’t Let Bad Editing <br /> Hold You Back
          </h2>
          <p className="description mx-auto">
            Without Good Editing No One Will Pay Attention To Your Content. In This Era Of Fast Pace Videos, Your Content Will Stay Under The Rock If Your Dont Stand Out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badEditingCards.map((card, index) => (
            <div
              key={index}
              className="card group hover:bg-neutral-800/30 hover:-translate-y-2 w-full h-full relative"
            >
                {/* Violet Abyss */}
                <div
                  className="absolute inset-0 -z-10 rounded-2xl"
                  style={{
                    background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #7c3aed70 100%)",
                  }}
                />
              <div className="mb-6">{card.icon}</div>
              <h3 className="heading-sm group-hover:text-violet-300 transition-colors">
                {card.title}
              </h3>
              <p className="description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Disadvantages;
