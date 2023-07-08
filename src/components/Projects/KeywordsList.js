const KeyWordsList = ({ keywords }) => {
  return (
    <div
      style={{
        backgroundColor: "transparent",
        minHeight: "1vh",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: "4xl", margin: "0 auto", padding: "4rem" }}>
        <div
          className="grid"
          style={{ gridGap: "2.5rem", gridTemplateColumns: "repeat(20, 1fr)" }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {keywords.map((keyword, index) => (
              <div
                key={index}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.5rem 1rem",
                  borderRadius: "9999px",
                  backgroundColor: "#6E47FF",
                  color: "white",
                }}
              >
                {keyword}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyWordsList;
