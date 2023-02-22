import { courses } from "../../data/courses";
import TopImageTextCard from "../card/bookmarkcard";

const BookMarkCard = () => {
  const getSavedCourse = courses.filter((item) =>
    item.saveCourse === true ? item : console.log("none")
  );
  console.log(getSavedCourse);
  return (
    <div className="row">
      {getSavedCourse.map((course) => (
        <TopImageTextCard
          banner={course.banner}
          title={course.title}
          level={course.level}
          tutor={course.tutor}
          rating={course.rating}
        />
      ))}

      {/* <!-- end col-lg-4 --> */}
    </div>
  );
};
export default BookMarkCard;
