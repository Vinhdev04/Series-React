const courses = [{
    title: "React",
    img: "https://img.png",
    desc: "React is a JavaScript library for building user interfaces"
  },
  {
    title: "React Native",
    img: "https://img.png",
    desc: "React Native is a JavaScript framework for building native user interfaces"
  },
  {
    title: "Redux",
    img: "https://img.png",
    desc: "Redux is a predictable state container for JavaScript apps"
  },
  {
    title: "React Router",
    img: "https://img.png",
    desc: "React Router is a routing library for React.js"
  },
]
const CourseItem = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <img src={props.img} alt=""/>
      <p>{props.desc}</p>

    </>
  )
}

export default CourseItem

