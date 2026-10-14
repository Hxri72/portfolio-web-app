import { BriefcaseIcon, MapPinIcon } from "./Icons";
import { formatMonth, getDuration } from "../utils/date";

function TimelineItem({ item }) {
  const duration = getDuration(item.startDate, item.endDate);

  return (
    <div className="timeline-item">
      <div className="timeline-dot">
        <BriefcaseIcon size={16} />
      </div>

      <div className="card timeline-content">
        <div className="timeline-head">
          <div>
            <h3>{item.role}</h3>
            <h4>{item.company}</h4>
            {item.location && (
              <span className="timeline-location">
                <MapPinIcon size={14} /> {item.location}
              </span>
            )}
          </div>
          <div className="timeline-dates">
            <span className="timeline-date">
              {formatMonth(item.startDate)} - {formatMonth(item.endDate)}
            </span>
            {duration && <span className="muted">{duration}</span>}
          </div>
        </div>

        {item.summary && <p className="timeline-summary">{item.summary}</p>}

        {item.points.length > 0 && (
          <ul className="timeline-points">
            {item.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}

        {item.tech?.length > 0 && (
          <div className="tags">
            {item.tech.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TimelineItem;
