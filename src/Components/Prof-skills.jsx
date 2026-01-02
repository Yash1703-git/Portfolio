import { Row, Col } from "react-bootstrap";
// import "./Prof-skills.css";

const skills = [
  { label: "Team Work", value: 90 },
  { label: "Communication", value: 85 },
  { label: "Leadership", value: 87 },
  { label: "Creativity", value: 80 },
  { label: "Management", value: 95 },
  { label: "Problem Solving", value: 85 },
];

export default function ProfessionalSkills() {
  return (
    <section className="professional-skill-section">
      <h2 className="section-title">Professional Skills</h2>

      <Row className="justify-content-center">
        {skills.map((skill, idx) => (
          <Col
            key={idx}
            lg={6}
            md={6}
            sm={12}
            className="circle-card"
          >
            <CircularProgress value={skill.value} />
            <p className="skill-label">{skill.label}</p>
          </Col>
        ))}
      </Row>
    </section>
  );
}

function CircularProgress({ value }) {
  const radius = 45;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (value / 100) * circumference;

  return (
    <svg height="120" width="120" className="circle-svg">
      <circle
        stroke="#1f2933"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx="60"
        cy="60"
      />
      <circle
        stroke="#12F7FF"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx="60"
        cy="60"
        className="progress-circle"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        className="circle-text"
      >
        {value}%
      </text>
    </svg>
  );
}
