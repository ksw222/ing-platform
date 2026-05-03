"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { useState } from "react";
import { waitlistInterestOptions } from "../data/landing-criteria";
import styles from "../styles/landing.module.css";

type WaitlistInterestValue = (typeof waitlistInterestOptions)[number]["value"];

type WaitlistSubmissionPayload = {
  email: string;
  interest: WaitlistInterestValue;
  note: string;
  requestedAt: string;
  source: "landing-waitlist";
  page: "/";
  formVersion: "mvp-responsive-v1";
  externalFormEnabled: boolean;
};

const waitlistFormUrl = process.env.NEXT_PUBLIC_WAITLIST_FORM_URL;

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState<WaitlistInterestValue>(
    waitlistInterestOptions[0].value,
  );
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload: WaitlistSubmissionPayload = {
      email,
      interest,
      note,
      requestedAt: new Date().toISOString(),
      source: "landing-waitlist",
      page: "/",
      formVersion: "mvp-responsive-v1",
      externalFormEnabled: Boolean(waitlistFormUrl),
    };

    console.log("[ING waitlist submit]", payload);

    setSubmitted(true);
    setEmail("");
    setNote("");
    setInterest(waitlistInterestOptions[0].value);
  }

  return (
    <section
      id="waitlist"
      className={`${styles.pageSection} ${styles.waitlistSection}`}
    >
      <div className={`container ${styles.waitlistWrap}`}>
        <div className={styles.waitlistIntro}>
          <span className={styles.sectionEyebrow}>베타 알림</span>
          <h2 className={styles.sectionTitle}>베타 오픈 때 알려드릴게요.</h2>
          <p className={styles.sectionBody}>
            아직 완성된 서비스는 아니지만, 실제로 필요한 기준부터 먼저 만들고
            있습니다. 써보고 싶은 기준이 있다면 남겨주세요.
          </p>
          <p className={styles.waitlistSupport}>
            매번 같은 성분표를 다시 찾고 있다면, 어떤 기준이 가장 먼저
            필요했는지도 함께 적어주세요.
          </p>
        </div>

        <div className={styles.waitlistCard}>
          <form className={styles.waitlistForm} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="waitlist-email" className={styles.label}>
                이메일
              </label>
              <input
                id="waitlist-email"
                className={styles.input}
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="name@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <fieldset className={styles.field}>
              <legend className={styles.label}>관심 기준</legend>
              <div className={styles.interestGrid}>
                {waitlistInterestOptions.map((option) => {
                  const isActive = interest === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      className={`${styles.interestButton} ${
                        isActive ? styles.interestActive : ""
                      }`}
                      aria-pressed={isActive}
                      onClick={() => setInterest(option.value)}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className={styles.field}>
              <label htmlFor="waitlist-note" className={styles.label}>
                의견 (선택)
              </label>
              <textarea
                id="waitlist-note"
                className={styles.textarea}
                rows={5}
                placeholder="자주 확인하는 성분이나 먼저 써보고 싶은 흐름이 있다면 적어주세요."
                value={note}
                onChange={(event) => setNote(event.target.value)}
              />
            </div>

            <div className={styles.submitRow}>
              <button type="submit" className={styles.submitButton}>
                베타 알림 받기
              </button>

              {waitlistFormUrl ? (
                <Link
                  href={waitlistFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.altLink}
                >
                  Google Form으로 30초 신청하기
                </Link>
              ) : null}
            </div>

            <p className={styles.helperText}>
              현재는 로컬 폼으로 흐름만 검증 중이며, 실제 저장 연동은 다음
              단계에서 붙일 예정입니다.
            </p>

            {submitted ? (
              <p role="status" className={styles.successMessage}>
                신청이 접수되었습니다. 남겨주신 기준은 베타 기능 우선순위에
                참고하겠습니다.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
