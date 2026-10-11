import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { createPortalRecord, portalRecordTypes } from '../services/portalData';
import { readPhotoAsDataUrl } from '../utils/certificationClaims';
import './CertificationClaimCard.css';

const maxPhotoSize = 5 * 1024 * 1024;

const contributionTypes = [
  'Data Collection',
  'Data Cleaning',
  'Translation',
  'Code Contribution',
  'Documentation',
  'Community Outreach',
  'Other'
];

export default function CertificationClaimCard() {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const fileInputRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [photoError, setPhotoError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const selectPhoto = (file) => {
    setMessage('');
    if (!file) {
      setPhoto(null);
      setPhotoError('');
      return;
    }

    if (!['image/png', 'image/jpeg'].includes(file.type)) {
      setPhoto(null);
      setPhotoError('Choose a PNG or JPG image.');
      return;
    }
    if (file.size > maxPhotoSize) {
      setPhoto(null);
      setPhotoError('The photo must be 5 MB or smaller.');
      return;
    }

    setPhotoError('');
    setPhoto(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');

    if (!isAuthenticated) {
      setMessageType('error');
      setMessage('Please sign in before submitting a certification claim.');
      navigate('/login', { state: { from: '/bca' } });
      return;
    }

    if (photoError) {
      setMessageType('error');
      setMessage(photoError);
      return;
    }
    const form = event.currentTarget;
    setIsSubmitting(true);
    try {
      const formData = new FormData(form);
      const photoDataUrl = await readPhotoAsDataUrl(photo);
      const newClaim = {
        fullName: formData.get('fullName').trim(),
        email: formData.get('email').trim().toLowerCase(),
        offUsername: formData.get('offUsername').trim(),
        githubUsername: formData.get('githubUsername').trim(),
        contributionType: formData.get('contributionType'),
        agreementAccepted: formData.get('agreement') === 'on',
        photoDataUrl,
        photoName: photo?.name || '',
        status: 'pending',
        receiptEmailStatus: 'not sent',
        certificateEmailStatus: 'not sent'
      };

      await createPortalRecord(portalRecordTypes.certificationClaim, newClaim, user.id);
      setMessageType('success');
      setMessage('Your certification request has been saved for admin review. No email has been sent.');
      form.reset();
      setPhoto(null);
      setPhotoError('');
    } catch (error) {
      setMessageType('error');
      console.error('Unable to submit certification claim to Supabase.', error);
      setMessage(error.message || 'Unable to save your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="certification-claim-section" aria-labelledby="certification-claim-title">
      <div className="certification-claim-card">
        <div className="certification-promo-panel">
          <div className="certification-brand" aria-label="Open Food Facts">
            <span className="certification-brand-mark" aria-hidden="true">●</span>
            <span>open <strong>FOOD</strong> facts</span>
          </div>
          <h2>Get Certified by<br />Open Food Facts</h2>
          <p className="certification-intro">
            Open Food Facts is a collaborative, free, open database of food products built by a global community.
            Share your contribution details for review and recognition.
          </p>

          <h3>How it Works</h3>
          <ol className="certification-steps">
            <li><span className="certification-step-icon" aria-hidden="true">✓</span><span><strong>Submit contributions</strong><small>Add or improve product data via the platform</small></span></li>
            <li><span className="certification-step-icon" aria-hidden="true">✓</span><span><strong>Verified by community</strong><small>Edits are reviewed and validated by contributors</small></span></li>
            <li><span className="certification-step-icon certification-star" aria-hidden="true">★</span><span><strong>Earn certification</strong><small>Receive recognition after your claim is approved</small></span></li>
          </ol>

          <h3 className="certification-impact-title">Impact</h3>
          <div className="certification-impact-stats">
            <div><span aria-hidden="true">▥</span><strong>180k+</strong><small>Products Improved</small></div>
            <div><span aria-hidden="true">◎</span><strong>50+</strong><small>Countries</small></div>
            <div><span aria-hidden="true">♧</span><strong>Community</strong><small>Driven</small></div>
          </div>
        </div>

        <div className="certification-form-panel">
          <h2 id="certification-claim-title">Claim Your Certification</h2>
          <p className="certification-form-subtitle">Fill out the form to submit your certification request</p>
          {!isAuthenticated && (
            <div className="certification-login-banner">
              <span>Required sign-in</span>
              <button type="button" onClick={() => navigate('/login', { state: { from: '/bca' } })}>
                Sign in or create account
              </button>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="certification-fields-grid">
              <label>
                Full Name <span aria-hidden="true">*</span>
                <input name="fullName" type="text" autoComplete="name" placeholder="Enter your full name" maxLength="120" required />
              </label>
              <label>
                Email ID <span aria-hidden="true">*</span>
                <input name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength="254" required />
              </label>
              <label>
                OFF Username
                <input name="offUsername" type="text" placeholder="your-off-username" maxLength="80" />
              </label>
              <label>
                GitHub Username
                <input name="githubUsername" type="text" placeholder="@yourgithub" maxLength="80" />
              </label>
            </div>

            <label className="certification-contribution-field">
              Contribution Type
              <select name="contributionType" defaultValue={contributionTypes[0]} required>
                {contributionTypes.map((type) => <option key={type} value={type}>{type}</option>)}
              </select>
            </label>

            <div className="certification-photo-field">
              <span className="certification-photo-label">Photo Upload</span>
              <button
                className={`certification-dropzone${isDragging ? ' is-dragging' : ''}`}
                type="button"
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(event) => { event.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(event) => {
                  event.preventDefault();
                  setIsDragging(false);
                  selectPhoto(event.dataTransfer.files[0]);
                }}
                aria-label="Choose or drop a PNG or JPG photo"
              >
                <span className="certification-upload-icon" aria-hidden="true">⇧</span>
                <span>{photo ? photo.name : 'Drag & drop your photo here or Browse'}</span>
                <small>PNG, JPG up to 5 MB · Photo of contribution or profile</small>
              </button>
              <input
                ref={fileInputRef}
                className="certification-file-input"
                type="file"
                name="photo"
                accept="image/png,image/jpeg"
                onChange={(event) => selectPhoto(event.target.files[0])}
                aria-label="Upload a photo"
              />
              {photoError && <span className="certification-message is-error" role="alert">{photoError}</span>}
            </div>

            <label className="certification-agreement">
              <input type="checkbox" name="agreement" required />
              <span>I agree to the Open Food Facts Contributor Code of Conduct and Licensing</span>
            </label>

            {message && <p className={`certification-message is-${messageType}`} role="status">{message}</p>}
            <button className="certification-submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting…' : 'Claim Your Certification →'}
            </button>
            <p className="certification-review-note">Requests are reviewed before a certificate is issued.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
