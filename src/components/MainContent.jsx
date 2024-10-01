import Card from "./Card";
import CardData from "./CardData";
import ContactCard from "./ContactCard";
import ContactCardData from "./ContactCardData";
import Slider from "react-infinite-logo-slider";

export default function MainContent() {
  const cards = CardData.map((card) => {
    return (
      <>
        <Card key={card.id} {...card} />
      </>
    );
  });

  const contactCards = ContactCardData.map((contactCard) => {
    return (
      <>
        <ContactCard
          key={contactCard.id}
          img={contactCard.img}
          name={contactCard.name}
          phone={contactCard.phone}
          email={contactCard.email}
        />
      </>
    );
  });
  return (
    <>
      <div className="pt-[50px] px-[200px]">
        <div className="flex gap-5 items-center justify-center h-[60vh] mt-[100px] mb-[100px]">
          <div>
            <img
              className="w-[150px] rounded-[30px]"
              src="https://i.pinimg.com/474x/4b/45/21/4b45218eb2c9813357c80ba5fe8cff50.jpg"
              alt=""
            />
          </div>
          <div>
            <div className="pb-5">
              <img
                className="w-[150px] rounded-[30px]"
                src="https://4.img-dpreview.com/files/p/TS560x560~forums/62874631/bc92070aff0b4ed6afe0819c96f61f78"
                alt=""
              />
            </div>
            <div className="pb-5">
              <img
                className="w-[150px] rounded-[30px]"
                src="https://shotkit.com/wp-content/uploads/2020/07/portrait-orientation.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="pb-5">
              <img
                className="w-[150px] rounded-[30px]"
                src="https://img.freepik.com/premium-vector/beautiful-portrait-view-scene-nature-illustration-art-poster_605379-27360.jpg"
                alt=""
              />
            </div>
            <div className="pb-5">
              <img
                className="w-[150px] rounded-[30px]"
                src="https://i0.wp.com/frederikboving.com/wp-content/uploads/2022/12/R0000612-scaled.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="pb-5">
              <img
                className="w-[150px] rounded-[30px]"
                src="https://live.staticflickr.com/65535/53422240240_72a8364d42_z.jpg"
                alt=""
              />
            </div>
            <div className="pb-5">
              <img
                className="w-[150px] rounded-[30px]"
                src="https://i.pinimg.com/236x/4d/ce/3f/4dce3f28145698d912a19733b6597529.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="pb-5">
              <img
                className="w-[150px] rounded-[30px]"
                src="https://i.pinimg.com/236x/6e/07/5c/6e075cac85b14ca233df039fb9fefe8e.jpg"
                alt=""
              />
            </div>
            <div className="pb-5">
              <img
                className="w-[150px] rounded-[30px]"
                src="https://petapixel.com/assets/uploads/2022/05/jeremy-gray-landscape-guide-kirkjufell-bw-vertical-1-640x800.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="mt-[100px] mb-[100px]">
          <h1 className="text-[40px] font-bold">Online Experiences</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
          <ul className="list-disc list-inside text-[25px] marker:text-orange-400 pt-[20px]">
            <li>Created by John</li>
            <li>100K stars on GitHub</li>
            <li>Maintained by FB</li>
            <li>Thousands of apps</li>
          </ul>
        </div>

        <div className="flex gap-5 items-center justify-center h-[60vh] my-[100px] mb-[100px]">
          {cards}
        </div>

        <Slider
          width="250px"
          duration={40}
          pauseOnHover={true}
          blurBorders={false}
          blurBoderColor={"#fff"}
        >
          <Slider.Slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/sco/thumb/c/cc/Chelsea_FC.svg/2048px-Chelsea_FC.svg.png"
              alt="any"
              className="h-5"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="https://cdn.freebiesupply.com/logos/thumbs/2x/liverpool-fc-4-logo.png"
              alt="any2"
              className="h-5"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/hif/f/ff/Manchester_United_FC_crest.png"
              alt="any3"
              className="h-5"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="https://www.edigitalagency.com.au/wp-content/uploads/barcelona-fc-logo-png-transparent-296x300.png
"
              alt="any3"
              className="h-5"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="https://seeklogo.com/images/R/Real_Madrid_Club_de_Futbol-logo-60682932F8-seeklogo.com.png"
              className="h-5"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="https://seeklogo.com/images/R/Real_Madrid_Club_de_Futbol-logo-60682932F8-seeklogo.com.png"
              className="h-5"
            />
          </Slider.Slide>
        </Slider>

        <div className="flex flex-col gap-5 items-center justify-center my-[10px] mb-[10px]">{contactCards}</div>
      </div>
    </>
  );
}
