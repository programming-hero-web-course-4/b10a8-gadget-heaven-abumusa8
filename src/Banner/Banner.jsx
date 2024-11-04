import banner from "../assets/banner.jpg";

function Banner() {
  return (
    <section className="bg-purple-600 text-white h-[600px] py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="text-lg mb-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all.
        </p>
        <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>
      <div className="mt-40 flex justify-center ">
        <img
          src={banner}
          alt="VR Headset"
          className="w-2/3 h-[450px] rounded-xl border-8 border-purple-300"
        />
      </div>
    </section>
  );
}

export default Banner;
