import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Bureau() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex flex-col w-full min-h-full flex-grow justify-center items-center ">
        <h1 className="font-[Gabarito]">Les membres du bureau</h1>
        <div className="flex flex-row flex-wrap justify-center items-center w-2/4 m-12 gap-16  ">
          <div>
            <img
              src="/images/profile-pic.jpg"
              width={150}
              height={195}
              className="mb-3 rounded-md"
            ></img>
            <div className="flex flex-col w-150px justify-center items-center bg-blue-200 rounded-md h-16">
              <p>Marko Luka</p>
              <p>Trésorier</p>
            </div>
          </div>

          <div>
            <img
              src="/images/profile-pic.jpg"
              width={150}
              height={195}
              className="mb-3 rounded-md"
            ></img>
            <div className="flex flex-col w-150px justify-center items-center bg-blue-200 rounded-md h-16">
              <p>Marko Luka</p>
              <p>Trésorier</p>
            </div>
          </div>
          <div>
            <img
              src="/images/profile-pic.jpg"
              width={150}
              height={195}
              className="mb-3 rounded-md"
            ></img>
            <div className="flex flex-col w-150px justify-center items-center bg-blue-200 rounded-md h-16">
              <p>Marko Luka</p>
              <p>Trésorier</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
