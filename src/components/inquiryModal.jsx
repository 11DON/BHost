import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

export default function InquiryModal({ show, onHide }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    service: "",
    products: "",
    message: "",
  });

  function update(field) {
    return (e) => setForm((s) => ({ ...s, [field]: e.target.value }));
  }

  function sendEmail() {
    const subject = encodeURIComponent(`Inquiry from ${form.name || "Website"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nCompany: ${form.company}\nCountry: ${form.country}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nProducts: ${form.products}\n\nMessage:\n${form.message}`);
    const mailto = `mailto:info@psystems.co?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    onHide();
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Send Inquiry</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control value={form.name} onChange={update("name")} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Company</Form.Label>
            <Form.Control value={form.company} onChange={update("company")} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Country</Form.Label>
            <Form.Control value={form.country} onChange={update("country")} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={form.email} onChange={update("email")} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Phone</Form.Label>
            <Form.Control value={form.phone} onChange={update("phone")} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Needed Service</Form.Label>
            <Form.Control as="select" value={form.service} onChange={update("service")}>
              <option value="">Select a service</option>
              <option>Applications Development</option>
              <option>Integration</option>
              <option>Data Management</option>
              <option>Managed Services</option>
              <option>Cloud</option>
              <option>Consulting</option>
                            <option value="">Select product</option>
              <option>Reaya Insurance</option>
              <option>CRM</option>
              <option>eduSIS</option>
              <option>SPM</option>
            </Form.Control>
          </Form.Group>
        
          <Form.Group className="mb-2">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} value={form.message} onChange={update("message")} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cancel</Button>
        <Button variant="primary" onClick={sendEmail}>Send Email</Button>
      </Modal.Footer>
    </Modal>
  );
}
