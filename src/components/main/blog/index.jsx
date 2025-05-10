import { Link } from "react-router";
import blogImg from "../../../assets/blog.png";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "How to set up a Gym or Personal Training studio",
    description:
      "How to set up a gym or personal training studio Why? One of the very first questions to ask is why do you want to set up your own business, Is this righ...",
    image: blogImg,
  },
  {
    id: 2,
    title: "How to set up a Gym or Personal Training studio",
    description:
      "How to set up a gym or personal training studio Why? One of the very first questions to ask is why do you want to set up your own business, Is this righ...",
    image: blogImg,
  },
  {
    id: 3,
    title: "How to set up a Gym or Personal Training studio",
    description:
      "How to set up a gym or personal training studio Why? One of the very first questions to ask is why do you want to set up your own business, Is this righ...",
    image: blogImg,
  },
];

export default function BlogSection() {
  return (
    <section className="container mx-auto py-20 bg-white">
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center mb-5 md:mb-12 p-3 md:p-0">
        <div>
          <h2 className="text-[30px] md:text-[48px] text-center md:text-start font-bold text-textmain font-roboto">
            Latest Blog Archive
          </h2>
          <p className="text-[#5C5C5C] text-[18px] font-normal font-dosis mt-4">
            Latest from the Personal Trainer Blog Archive
          </p>
        </div>
        <Link to="https://copt.org.uk/blogs">
          {" "}
          <Button className="bg-primary hover:bg-blue-700 text-white text-sm px-10">
            See All
          </Button>
        </Link>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3 md:p-0">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg   border-0 overflow-hidden max-w-md"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-0 py-3">
              <h3 className="text-black font-roboto text-2xl font-semibold leading-normal">
                {post.title}
              </h3>
              <p className="text-[#5C5C5C] font-dosis text-base font-normal leading-normal mt-2">
                {post.description}
              </p>
              <Link to="https://copt.org.uk/blogs">
                {" "}
                <Button
                  variant="outline"
                  className="mt-4 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
