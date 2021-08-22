import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition.js';
function Features() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section id='/timeline' className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Activity Log</h1>
            <p className="text-xl text-gray-600">Working alongside with professionals from the Berkeley Optometry School and the Dell Medical School at UT Austin, we bring awareness to the next generation and share our journey with those wanting to improve the quality and assuance of healthcare for those in need.</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Latest Update</h3>
                <p className="text-xl text-gray-600">Dropnu is nearing the completion of the eyedropper attachment from utilizing home 3D plastic construction to injection molds for utmost precision alongside medical and AutoCAD professionals as of July 2021.</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Finalized Prototype - June 2021</div>
                    <div className="text-gray-600">In collaboration with Originex Engineering, we worked with Dr. Shuping Wang where we completely redesigned our tip and successfully reduced the diameter of the drop from 4.0 micrometers to 3.0 micrometers. Now, the Dropnu eyedrop attachment successfully exports less than x2 of the original drop size and we've been able to customize the attachment for other eyebottles.</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Different Models - April 2021</div>
                    <div className="text-gray-600">In hopes of being limited to just one bottle, we worked alongside with Borislav Sekulic to make these minor adjustments and ran trials with an assortment of optical solutions ranging from Visine to Dorzomramide HCI. This was done in order to determine viable prints amongst the solutions, and to further investigate the flaws.</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Improving Precision - March 2021</div>
                    <div className="text-gray-600">In collaboration with CAD designer, Adam Gasper, we struggled to find an accurate nozzle design in order to reduce drop size, using high quality prints, but wasn't able to as we discovered limitations within the 3D printed attachment. Even though under the assumptions of using different print materials, we had issues with the sporatic accuracy of the attachment as few drops were similar in size to those with no attachment.</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 4 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(4); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">The Beginning - circa December 2020</div>
                    <div className="text-gray-600">Originally, we started our focus on a customized eyedropper attachment for Alcon bottles, particularly with Systane eyedrops. Started off collaborating with Bruce Gehrman for 3D design and as being limited with resources during quarantine, we were successfully able to replicate the appropriate groves inside the eye bottle cap.</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 5 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(5); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Origin of Dropnu</div>
                    <div className="text-gray-600">Dropnu originated in October 2018 from learning about waste medication through "How Drug Companies Make You Buy More Medicine Than You Need." One of the main cuases results from eyedroppers as their designs' focus was meant for profit over the user's needs, which brough Dropnu to fruition as we aim to alleviate the burden of those struggling financially.</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={require('../images/finalprototype.png').default} width="500" height="462" alt="Features bg" />
                    {/* <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={require('../images/finalprototype.png').default} width="500" height="44" alt="Element" style={{ top: '30%' }} /> */}
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={require('../images/models.png').default} width="500" height="462" alt="Features bg" />
                    {/* <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={require('../images/features-element.png').default} width="500" height="44" alt="Element" style={{ top: '30%' }} /> */}
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={require('../images/features-bg.png').default} width="500" height="462" alt="Features bg" />
                    {/* <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={require('../images/features-element.png').default} width="500" height="44" alt="Element" style={{ top: '30%' }} /> */}
                  </div>
                </Transition>
                <Transition
                  show={tab === 4}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={require('../images/features-bg.png').default} width="500" height="462" alt="Features bg" />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={require('../images/features-element.png').default} width="500" height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>
                <Transition
                  show={tab === 5}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={require('../images/features-bg.png').default} width="500" height="462" alt="Features bg" />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={require('../images/features-element.png').default} width="500" height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;
