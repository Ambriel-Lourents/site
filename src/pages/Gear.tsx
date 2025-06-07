import { motion } from 'framer-motion';
import { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { FadeInSection } from '../utils/FadeInSection';

interface GearItem {
  category: string;
  items: {
    name: string;
    description?: string;
    link: string;
    image: string;
  }[];
}

const Gear = () => {
  usePageTitle('Gear');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const gearList: GearItem[] = [    {
      category: "Desk",
      items: [
        {
          name: "AOC Gaming 27G2ZNE",
          description: "27\" 240Hz Gaming Monitor",
          link: "https://www.amazon.nl/AOC-Gaming-27G2ZNE-1920x1080-DisplayPort/dp/B0BT4Y1FY4?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A17D2BRD4YMT0X&gQT=0",
          image: "https://m.media-amazon.com/images/I/71SahTHP2vL._AC_SL1500_.jpg"
        },
        {
          name: "IDÅSEN",
          description: "Desk, Black/Dark Grey",
          link: "https://www.ikea.com/nl/en/p/idasen-desk-black-dark-grey-s19281024/",
          image: "https://www.ikea.com/nl/en/images/products/idasen-desk-black-dark-grey__0736566_pe740637_s5.jpg?f=xs"
        },
        {
          name: "FLINTAN",
          description: "Ergonomic Office Chair",
          link: "https://www.ikea.com/nl/en/p/flintan-office-chair-with-armrests-black-s89424468/",
          image: "https://www.ikea.com/nl/en/images/products/flintan-office-chair-with-armrests-black__1007241_pe825960_s5.jpg?f=xs"
        },
      ]
    },
    {
      category: "PC Build",
      items: [
        {
          name: "Intel Core i5-12600K",
          description: "10-Core CPU",
          link: "https://www.amazon.com/Intel-i5-12600K-Desktop-Processor-Unlocked/dp/B09FX4D72T?sr=8-1",
          image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/c68f4e1a-9026-4848-b6f6-2fb599132d4c.__CR0,0,970,600_PT0_SX970_V1___.jpg"
        },
        {
          name: "MSI Gaming GeForce RTX 3080",
          description: "Graphics Card",
          link: "https://www.amazon.com/MSI-GeForce-320-Bit-Architecture-Graphics/dp/B09J1QCT9Y?sr=8-2",
          image: "https://m.media-amazon.com/images/I/812JVvCtU-L._AC_SX355_.jpg"
        },
        {
          name: "Thermaltake View 270 Plus",
          description: "Mid Tower E-ATX Case",
          link: "https://www.amazon.com/Included-Radiator-Tempered-CA-1Y7-00M1WN-01-Warranty/dp/B0D1MM3961?sr=8-3",
          image: "https://m.media-amazon.com/images/I/81cM7DCrzSL._AC_SY355_.jpg"
        },
        // Add other PC components...
      ]
    },
    {
      category: "Peripherals",
      items: [
        {
          name: "Pulsar X2 v2 Mini ",
          description: "Wireless Gaming Mouse",
          link: "https://www.pulsar.gg/products/x2v2-mini-gaming-mouse?variant=44194583707902",
          image: "https://www.pulsar.gg/cdn/shop/products/X2V2gamingmouse_mini_White_Top_2e620b2b-c4af-4514-b784-f982684f57b1-978476_large.png?v=1718795907"
        },
        {
          name: "Tecurs MR02",
          description: "XLR/USB Microphone",
          link: "https://www.amazon.com/Microphone-TECURS-Condenser-Compatible-MR02/dp/B09KLL9QHT/ref=mp_s_a_1_3?crid=14GT51BEBARBR&dib=eyJ2IjoiMSJ9.fk0CEYHs9AniCLQAC6nBKr9QdYsO4bGbickzQ3c64CwQ5DYh-vXRf9lgWrdnNec9Ndi5j4HiOpXLFzej5zoronA8_2dzOkP0h6lkrK2rGpApbH26fx8DswvGSBQEyJb76NG21Ult_8P1aitj22gwPukZODlQCfoD-oCO2zIg77GsPJ8tYe9rL_jySf16yj73C2ijalCPzgE7PeHOSTb18w.HoRpdgF8idWlhNuvDExkJ_y1tZSlbUnJwQwdBtj6KG4&dib_tag=se&keywords=tecure+mic+pc&qid=1749128882&sprefix=tecure+mic+p%2Caps%2C347&sr=8-3",
          image: "https://m.media-amazon.com/images/I/71A7XJbdIXL._AC_SY450_.jpg"
        },
        {
          name: "HUANUO Dual Monitor Arm",
          description: "Monitor Mount",
          link: "https://amzn.to/3CYbDUg",
          image: "https://m.media-amazon.com/images/I/61CcipLafUL._AC_SL1280_.jpg"
        },
        {
          name: "EPOMAKER Ajazz AK820 Pro",
          description: "75% Wireless Mechanical Keyboard",
          link: "https://www.amazon.com/EPOMAKER-Mechanical-Keyboard-Gasket-Mounted-Bluetooth/dp/B0CMWY2QJZ?adgrpid=159321544709&hvadid=693042478468&hvdev=m&hvexpln=68&hvlocphy=1026339&hvnetw=g&hvocijid=12550447549016785687--&hvqmt=e&hvrand=12550447549016785687&hvtargid=kwd-2256761594103&hydadcr=24185_13544223&mcid=d0005f23b7b33d03bba97a02ffa77ce9&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9waG9uZV9zZWFyY2hfYXRm",
          image: "https://m.media-amazon.com/images/I/614U66QoZQL._AC_SY355_.jpg"
        },
      ]
    }
  ];

  return (
    <div>
      <FadeInSection>
        <motion.h1 className="text-3xl font-bold">
          Gear
        </motion.h1>
        <motion.p className="text-sm sm:text-base leading-relaxed mb-6">
          What I use.
        </motion.p>
      </FadeInSection>

      <div className="space-y-8">
        {gearList.map((category, index) => (
          <FadeInSection key={category.category} delay={index * 0.2}>
            <h2 className="text-lg font-medium">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((item, itemIndex) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredItem === null || hoveredItem === item.name ? 1 : 0.5,
                    scale: hoveredItem === item.name ? 1.02 : 1,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + itemIndex * 0.05
                  }}
                  onHoverStart={() => setHoveredItem(item.name)}
                  onHoverEnd={() => setHoveredItem(null)}
                  style={{
                    transformOrigin: 'center left'
                  }}
                >
                  <div 
                    className="flex items-center p-3 rounded-xl transition-colors" 
                    style={{ 
                      transition: '0.2s ease-in-out'
                    }}
                  >
                    {/* Image */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        draggable={false}
                        animate={{
                          scale: hoveredItem === item.name ? 1.1 : 1
                        }}
                        transition={{
                          duration: 0.3
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-grow px-3 sm:px-4">
                      <h3 className="font-medium mb-1 text-sm sm:text-base">{item.name}</h3>
                      {item.description && (
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Link Icon */}
                    <motion.div 
                      className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"
                      animate={{
                        x: hoveredItem === item.name ? 2 : 0
                      }}
                      transition={{
                        duration: 0.2
                      }}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.a>
              ))}
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default Gear; 