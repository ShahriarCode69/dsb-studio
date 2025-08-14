import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiMinus, FiArrowRight } from 'react-icons/fi';

const FAQ = () => {
  // Sample FAQ data
  const faqItems = [
    {
      question: 'What types of video editing services do you offer?',
      answer: 'We offer a comprehensive range of video editing services including commercial editing, music videos, social media content, corporate videos, documentary editing, and gaming/streaming content. Each service is tailored to meet the specific needs and goals of your project.'
    },
    {
      question: 'How long does the editing process typically take?',
      answer: 'The timeline varies depending on the complexity and length of your project. Simple edits may take 2-3 business days, while more complex projects with extensive color grading, motion graphics, and sound design can take 1-2 weeks. We\'ll provide you with a specific timeline during our initial consultation.'
    },
    {
      question: 'What file formats do you accept for raw footage?',
      answer: 'We accept most standard video formats including MP4, MOV, AVI, and ProRes. We can also work with footage from most cameras and smartphones. If you have footage in a different format, please contact us to confirm compatibility.'
    },
    {
      question: 'How do you handle revisions to the edit?',
      answer: "Our standard packages include two rounds of revisions. During each revision round, you can provide comprehensive feedback, and we'll implement the changes. Additional revision rounds can be arranged at an hourly rate if needed."
    },
    {
      question: 'Do you provide music and sound effects for videos?',
      answer: "Yes, we can source royalty-free music and sound effects that enhance your video. We have access to premium libraries with a wide variety of options. If you have specific licensed music you'd like to use, you'll need to provide the license for commercial use."
    },
    {
      question: 'Can you add subtitles or captions to my videos?',
      answer: 'Absolutely! We offer subtitling and captioning services in multiple languages. This is especially important for accessibility and for videos that will be watched without sound on social media platforms.'
    },
    {
      question: 'How do you handle the transfer of large video files?',
      answer: 'We use secure cloud-based transfer services for both receiving your raw footage and delivering the final edited videos. For extremely large projects, we can arrange alternative transfer methods if needed.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing is project-based and depends on factors such as video length, complexity of editing required, turnaround time, and additional services like motion graphics or sound design. We provide detailed quotes after understanding your specific requirements during the initial consultation.'
    },
    {
      question: 'Do you offer rush services for tight deadlines?',
      answer: 'Yes, we offer rush services for projects with tight deadlines, subject to our current schedule and capacity. Rush services incur an additional fee, which will be clearly outlined in your quote.'
    },
    {
      question: 'How do I get started with your services?',
      answer: "The process begins with a consultation where we discuss your project goals, timeline, and specific requirements. After that, we'll provide a detailed quote. Once approved, we'll send a contract and request your raw footage to begin the editing process."
    }
  ];

  // Terms and conditions content
  const termsContent = [
    {
      title: 'Service Agreement',
      content: 'By engaging our services, clients enter into a binding agreement governed by the terms outlined in our contract. This includes project scope, deliverables, timeline, and payment terms.'
    },
    {
      title: 'Intellectual Property',
      content: 'Upon full payment, clients receive ownership rights to the edited video content we create. However, we retain the right to showcase the work in our portfolio unless otherwise specified in a confidentiality agreement.'
    },
    {
      title: 'Payment Terms',
      content: 'We require a 50% deposit before beginning work, with the remaining balance due upon project completion and before the delivery of final files. For projects exceeding $2,000, we offer installment payment options.'
    },
    {
      title: 'Revisions Policy',
      content: 'Standard packages include two rounds of revisions. Additional revisions are billed at our hourly rate. Major changes to project scope may require a revised quote.'
    },
    {
      title: 'Cancellation Policy',
      content: 'If a project is cancelled after work has begun, the client is responsible for payment proportional to the work completed, with a minimum fee of 25% of the total project cost.'
    }
  ];

  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-32"> {/* Padding top to account for navbar */}
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-12 bg-black">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="heading-xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-200">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-violet-100/80 mb-8 max-w-2xl mx-auto">
              Find answers to common questions about our video editing services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`card transition-all duration-300 ${openIndex === index ? 'bg-neutral-800/30' : 'hover:bg-neutral-900/40'}`}
                >
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-xl font-bold pr-8">{item.question}</h3>
                    <span className="flex-shrink-0">
                      {openIndex === index ? (
                        <FiMinus className="text-violet-400 text-xl" />
                      ) : (
                        <FiPlus className="text-violet-400 text-xl" />
                      )}
                    </span>
                  </button>
                  <div 
                    id={`faq-answer-${index}`}
                    className={`mt-4 text-violet-100/70 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-violet-100/70 mb-6">Don't see your question here?</p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Contact Us <FiArrowRight className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg mb-8 text-center">Terms & Conditions</h2>
            
            <div className="card">
              <div className="space-y-8">
                {termsContent.map((term, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold mb-3">{term.title}</h3>
                    <p className="text-neutral-100/70">{term.content}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-violet-800/30">
                <p className="text-violet-100/70 text-sm">
                  These terms are provided as a general overview and do not constitute a complete legal agreement. A detailed contract will be provided before the commencement of any project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Transform Your Videos?</h2>
            <p className="text-lg text-violet-100/70 mb-8">
              Contact us today to discuss your project and get started with our professional editing services.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Book a Consultation <FiArrowRight className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;