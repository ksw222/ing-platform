"use client";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};

export default function GlobalError({
  error,
  unstable_retry,
}: GlobalErrorProps) {
  console.error(error);

  return (
    <html lang="ko">
      <body
        style={{
          margin: 0,
          fontFamily:
            'Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans KR", sans-serif',
          background: "#fcfcf8",
          color: "#151716",
        }}
      >
        <main
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: "24px",
          }}
        >
          <section
            style={{
              width: "min(520px, 100%)",
              border: "1px solid #e7ebe4",
              borderRadius: "24px",
              padding: "28px",
              background: "#fffdf9",
              boxShadow: "0 18px 54px rgba(34, 47, 36, 0.08)",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#386a3f",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              ING
            </p>
            <h1
              style={{
                margin: "12px 0 0",
                fontSize: "30px",
                lineHeight: 1.2,
                letterSpacing: "-0.05em",
              }}
            >
              문제가 발생했습니다.
            </h1>
            <p
              style={{
                margin: "14px 0 0",
                color: "#515751",
                fontSize: "15px",
                lineHeight: 1.7,
              }}
            >
              잠시 후 다시 시도해주세요. 같은 문제가 계속되면 새로고침 후 다시
              접속해보시는 편이 좋습니다.
            </p>
            <button
              type="button"
              onClick={() => unstable_retry()}
              style={{
                marginTop: "22px",
                minHeight: "48px",
                border: 0,
                borderRadius: "999px",
                padding: "0 18px",
                background: "#203f2a",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              다시 시도
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
