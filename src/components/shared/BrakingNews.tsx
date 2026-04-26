import { Button } from "@heroui/react";
import Marquee from "react-fast-marquee";

const news = [
    {
        _id: "1",
        title: "Breaking News: Major Event Unfolds in the City",
    },
    {
        _id: "2",
        title: "Breaking News: New Policy Announced by the Government",
    },
    {
        _id: "3",
        title: "Breaking News: Sports Team Wins Championship",
    },
];

const BrakingNews = () => {
    return (
        <div className=" flex justify-between gap-4 items-center border-gray-200 py-4 container mx-auto">
            <Button className=""> Latest News</Button>
            <Marquee pauseOnHover={true}>
                {
                    news.map((n) => (
                        <span key={n._id}>{n.title}</span>
                    ))
                }
            </Marquee>
        </div>
    );
};

export default BrakingNews;