import React, { useState } from "react";
import { Container, Row, Col, Form } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import "../styles/profile.css";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    age: 25,
    dietaryRestrictions: "Vegetarian",
    medicalConditions: "None"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Helmet title="Profile">
      <CommonSection title="My Profile" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="10" className="m-auto">
              <div className="profile__container">
                <Form className="form mb-5">
                  <div className="form__group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div className="form__group">
                    <label>Age</label>
                    <input
                      type="number"
                      name="age"
                      value={profile.age}
                      onChange={handleChange}
                      placeholder="Your Age"
                    />
                  </div>
                  <div className="form__group">
                    <label>Dietary Restrictions</label>
                    <select
                      name="dietaryRestrictions"
                      value={profile.dietaryRestrictions}
                      onChange={handleChange}
                    >
                      <option value="None">None</option>
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Vegan">Vegan</option>
                      <option value="Gluten-Free">Gluten-Free</option>
                      <option value="Lactose-Free">Lactose-Free</option>
                    </select>
                  </div>
                  <div className="form__group">
                    <label>Medical Conditions</label>
                    <textarea
                      rows={3}
                      name="medicalConditions"
                      value={profile.medicalConditions}
                      onChange={handleChange}
                      placeholder="List any medical conditions or allergies"
                    />
                  </div>
                  <button type="button" className="addTOCart__btn">
                    Update Profile
                  </button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Profile;