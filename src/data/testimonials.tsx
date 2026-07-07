export interface Testimonial {
  review: string;
  rating: number;
  client: string;
  designation: string;
}

export const testimonials: Testimonial[] = [
  {
    review:
      "Ritcore AI delivered our fintech dashboard in three weeks with a level of polish that made it feel like an in-house team had built it.",
    rating: 5,
    client: "Arjun Mehta",
    designation: "CEO, FinEdge",
  },
  {
    review:
      "The mobile app they built for us has earned a 4.8★ rating on the store and improved our onboarding conversion significantly.",
    rating: 5,
    client: "Priya Sharma",
    designation: "Founder, EduSpark",
  },
  {
    review:
      "Their AI integration helped us optimize operations in days, not months, and the rollout felt seamless from day one.",
    rating: 5,
    client: "Rahul Verma",
    designation: "CTO, LogiTrack",
  },
];
