import { TopicIcon } from "./Icons";

function SkillCard({ skill }) {
  return (
    <div className="card skill-card">
      <div className="skill-card-head">
        <div className="icon-box">
          <TopicIcon name={skill.icon} size={20} />
        </div>
        <div>
          <h3>{skill.category}</h3>
          <span className="muted">{skill.items.length} skills</span>
        </div>
      </div>

      <div className="tags">
        {skill.items.map((item) => (
          <span key={item} className="tag">{item}</span>
        ))}
      </div>

      {skill.note && <p className="skill-note">{skill.note}</p>}
    </div>
  );
}

export default SkillCard;
