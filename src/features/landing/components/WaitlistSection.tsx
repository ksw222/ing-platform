"use client";

import { FormEvent, useState } from "react";
import {
  waitlistInterestOptions,
  waitlistProofPoints,
} from "../data/landing-copy";
import styles from "../styles/landing.module.css";

type WaitlistInterestValue = (typeof waitlistInterestOptions)[number]["value"];

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState<WaitlistInterestValue>(
    waitlistInterestOptions[0].value,
  );
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("[ING waitlist submit]", {
      email,
      interest,
      note,
      submittedAt: new Date().toISOString(),
    });

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
      <div className={`container ${styles.waitlistGrid}`}>
        <div className={styles.waitlistLead}>
          <span className={styles.sectionEyebrow}>베타 알림 받기</span>
          <h2 className={styles.sectionTitle}>
            매번 다시 검색하지 않도록,
            <br />
            내 기준을 저장해두세요.
          </h2>
          <p className={styles.sectionDescription}>
            ING는 현재 베타 MVP입니다. 출시 알림과 테스트 초대를 받고 싶다면
            이메일을 남겨주세요.
          </p>

          <ul className={styles.proofList}>
            {waitlistProofPoints.map((item) => (
              <li key={item} className={styles.proofItem}>
                {item}
              </li>
            ))}
          </ul>
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
                의견
              </label>
              <textarea
                id="waitlist-note"
                className={styles.textarea}
                rows={5}
                placeholder="지금 제품을 고를 때 가장 번거로운 점이 있다면 적어주세요."
                value={note}
                onChange={(event) => setNote(event.target.value)}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              출시되면 먼저 써보기
            </button>

            <p className={styles.subtleText}>
              지금은 로컬 상태로만 접수 메시지를 보여주는 MVP 데모 단계입니다.
            </p>

            {submitted ? (
              <p role="status" className={styles.successMessage}>
                신청이 접수되었습니다. 현재는 MVP 데모이며, 실제 저장 연동은 다음
                단계에서 연결됩니다.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
