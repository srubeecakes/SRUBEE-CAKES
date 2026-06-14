import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://srubee-cakes-bgsn.onrender.com";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  const [form, setForm] = useState({
    name: "",
    review: "",
  });

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/reviews`);
      setReviews(res.data);
    } catch (err) {
      console.log("GET ERROR:", err);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitReview = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${BASE_URL}/reviews`, {
        name: form.name,
        review: form.review,
      });

      setForm({
        name: "",
        review: "",
      });

      await loadReviews(); // IMPORTANT FIX
    } catch (err) {
      console.log("POST ERROR:", err);
    }
  };

  return (
    <>
      <Navbar />

      <section className="reviews-section">
        <h1>Customer Reviews ⭐</h1>

        <p>Share your experience</p>

        <form className="review-form" onSubmit={submitReview}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <textarea
            name="review"
            placeholder="Write your review..."
            value={form.review}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Post Review</button>
        </form>

        <div className="reviews-container">
          {reviews.length === 0 ? (
            <p>No reviews yet...</p>
          ) : (
            reviews.map((r) => (
              <div key={r._id} className="review-card">
                <h3>{r.name}</h3>
                <p>⭐⭐⭐⭐⭐</p>
                <p>{r.review}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}

export default Reviews;