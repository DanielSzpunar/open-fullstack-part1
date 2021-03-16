import React from "react"

//Part:1.4
const Header = (props) => {
  return <h1>{props.course}</h1>
}
const Content = (props) => {
  console.log(props.parts[0].name)
  console.log(props.parts[0].exercises)
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises}  />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises}  />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises}  />
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
    <p>{props.name} : {props.exercises}</p>
    </div>
  )
}
const Total = (props) => {
  return (
    <p>Total: {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = "Half Stack application development"
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
// //Part 1.3:
// const Header = (props) => {
//   //console.log(props)
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )
// }
// const Content = (props) => {
//   console.log("Content:" + props.name.part1.name)
//   return (
//     <div>
//        <Part name={props.name.part1.name} exercises={props.exercises.part1.exercises}  />
//        <Part name={props.name.part2.name} exercises={props.exercises.part2.exercises}  />
//        <Part name={props.name.part3.name} exercises={props.exercises.part3.exercises}  />
//     </div>
//   )
// }
// const Part = (props) => {
//   console.log("Part: " + props.name)
//   return (
//     <p>
//       {props.name}: {props.exercises}
//     </p>
//   )
// }

// const Total = (props) => {
//   return (
//     <p>
//       Total: {props.total}
//     </p>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <Header course={course} />
//       {/* <Content name = {part1.name} exercises = {part1.exercises}/>
//       <Content name = {part2.name} exercises = {part2.exercises}/>
//       <Content name = {part3.name} exercises = {part3.exercises}/> */}
//       <Content
//         name={{part1:part1, part2:part2,part3:part3}}
//         exercises={{part1:part1,part2:part2,part3:part3}}
//        />

//       <Total total={part1.exercises + part2.exercises + part3.exercises} />
//     </div>
//   )
// }

/* Used in Part 1.1-1.2 */
// const Header = (props) => {
//   return (
//     <>
//       <h1>{props.course}</h1>
//     </>
//   )
// }
// const Content = (props) => {
//   return (
//     <div>
//       <Part
//         part={props.exercises.part1}
//         exercise={props.exercises.s}
//       />
//       <Part
//         part={props.exercises.part2}
//         exercise={props.exercises.exercises2}
//       />
//       <Part
//         part={props.exercises.part3}
//         exercise={props.exercises.exercises3}
//       />
//     </div>
//   )
// }
// const Part = (props) => {
//   console.log(props)
//   return (
//     <p>
//       {props.part}: {props.exercise}
//     </p>
//   )
// }
// const Total = (props) => {
//   return <p> Number of Exercises: {props.exercises}</p>
// }

// const App = () => {
//   const course = "Half Stack application development"
//   const part1 = "Fundamentals of React"
//   const exercises1 = 10
//   const part2 = "Using props to pass data"
//   const exercises2 = 7
//   const part3 = "State of a component"
//   const exercises3 = 14
//   return (
//     <div>
//       <Header course={course} />
//       <Content
//         exercises={{
//           part1: part1,
//           exercises1: exercises1,
//           part2: part2,
//           exercises2: exercises2,
//           part3: part3,
//           exercises3: exercises3,
//         }}
//       />
//       <br />
//       <Total exercises={exercises1 + exercises2 + exercises3} />
//     </div>
//   )
// }
