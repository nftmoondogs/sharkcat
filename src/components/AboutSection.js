// components/AboutSection.js
export default function AboutSection() {
    return (
      <div className="bg-black text-white py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-start"> {/* Reduced gap from 8 to 4 */}
          

          
          {/* Right Side */}
          <div className="pt-4">
            <h2 className="font-courier text-2xl font-bold mb-4">WHAT IS SHARKCAT?</h2>
            <p className="font-simpfxo text-base mb-4">
            $SHARKCAT ISN'T JUST A SHARK CAT, IT IS THE FUTURE OF DIGITAL CURRENCY. IT IS THE PERFECT BALANCE OF BLOCKCHAIN AND OUR FELINE FRIENDS THAT WILL CHANGE THE WORLD OF FINANCE FOREVER.
            </p>
            <h3 className="font-courier-bold text-xl font-bold">KEY POINTS</h3>
            <p className="font-simpfxo text-base mb-4">
            
            </p>
            <ul className="font-simpfxo text-base space-y-2">
  
  <li>• COMMUNITY OWNED</li>
  
  <li>• DEV GOT EATEN BY A SHARK, Just Kidding🦈</li>

  <li>• it swims and it bites, don’t overthink it</li>
  
</ul>

            <div className="space-y-2 mb-4">

              {/* NFT Address and additional content can be added here */}
            </div>
            <a href="https://www.pump.fun/" className="font-courier text-white bg-transparent border border-white py-2 px-4 rounded uppercase">
              Buy now on Pump.fun
            </a>
          </div>
                    {/* Left Side */}
                    <div className="space-y-6 flex justify-center">
            <img src="https://i.ibb.co/7Snd9jS/side-bar-temp-copy.png" alt="A Love Letter To Wen Bros" className="max-w-xs md:max-w-sm" />
          </div>
        </div>
        
      </div>

      

      
    );
  }
  