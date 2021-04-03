export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return (<>
    <div class = "CourseCard">
      <tr id = "CC">
        <td>
          <div class = "tag">
            <p>Subject: {props.subj}</p>
            <p>GPA: {props.grade}</p>
            <p>Credit: {props.credit}</p>
          </div>
        </td>
        <td>
          <button class = "btn" onClick = {() => {
              props.del(props.subj)
          }}> X </button>
        </td>
      </tr>
    </div>
  </>);
};