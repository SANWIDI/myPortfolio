//no import here
function SkillsCard(props) {
  // name, description, materials

  let materials = [];
  for (let i = 0; i < props.materials.length; i++) {
    materials.push(<li key={i}>{props.materials[i]}</li>);
  }

  return (
    <div className="skills__card">
      <h3>{props.name}</h3>
      <p className="skills__text">{props.description}</p>
      <ul>{materials}</ul>
    </div>
  );
}

export default SkillsCard;
