import { useSelector } from "react-redux";
import { courses } from "../../data/courses";
import TopImageTextCard from "../card/bookmarkcard";

const BookMarkCard = () => {
  const { mybookmark } = useSelector((state) => state.bookmark);

  return (
    <div className="row">
      {mybookmark.map((course) => (
        <TopImageTextCard
          banner={course.cover_pic}
          title={course.course_bio}
          level={course.level}
          tutor={course.fullname}
          course={course.course}
          coursefile={course.coursefile}
          all={course}
        />
      ))}

      {/* <!-- end col-lg-4 --> */}
    </div>
  );
};
export default BookMarkCard;
