import Slider from "react-slick";
import "./StepsCarousel.css";
import timeIcon from "../../assets/time-icon.svg";

export type Step = { name: string; description: string };

type Props = {
  steps: Step[];
};

export default function StepsCarousel({ steps }: Props) {
  if (!steps?.length) return null;

  const settings: import("react-slick").Settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipe: true,
    touchThreshold: 8,
    appendDots: (dots) => (
      <ul
        style={{
          margin: "16px 0 0",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {dots}
      </ul>
    ),
    customPaging: (i) => (
      <button
        aria-label={`Go to step ${i + 1}`}
        style={{
          width: 8,
          height: 8,
          borderRadius: 9999,
          background: "#d9d9d9",
          border: "none",
          transition: "all 0.3s ease",
        }}
      />
    ),
  };

  return (
    <Slider {...settings}>
      {steps.map((st, idx) => {
        // 👇 괄호 안의 시간(ex: "(예상 시간: 15분)") 분리
        const match = st.name.match(/\(([^)]+)\)/); // 괄호 안 내용
        const timeText = match ? match[1] : "";
        const title = st.name.replace(/\s*\(.*?\)\s*/g, ""); // 괄호 포함 부분 제거

        return (
          <div key={idx} style={{ padding: "4px 0 8px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  margin: 0,
                }}
              >
                Step {idx + 1}
              </h2>

              {timeText && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "black",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    marginRight: "5px",
                  }}
                >
                  <img src={timeIcon} alt="timer" width={20} height={20} />
                  <span>
                    {timeText.replace(
                      /(예상\s*시간|estimated\s*time)[:：]?\s*/i,
                      ""
                    )}
                  </span>
                </div>
              )}
            </div>

            <div style={{ fontWeight: 700, marginBottom: 6 }}>{title}</div>

            <p
              style={{
                lineHeight: 1.6,
                color: "#222",
                margin: 0,
                whiteSpace: "pre-line",
              }}
            >
              {st.description}
            </p>
          </div>
        );
      })}
    </Slider>
  );
}
