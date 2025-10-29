'use client';

import styled from 'styled-components';
import { frames, margins, colors } from './styledComponents';
import toast from 'react-hot-toast';
import { useState } from 'react';

const Section = styled.section`
  display: flex;
  align-items: stretch;
  gap: 0;
  min-height: 460px;
  padding: 0 0 ${margins.desktop};

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const FormSide = styled.div`
  width: 50vw;
  padding: 48px 80px;
  background: ${colors.beige100};

  @media (max-width: 1200px) {
    padding: 40px ${frames.mobile};
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  margin: 0 0 24px;
  font-size: 28px;
  text-transform: uppercase;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 16px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  /* champs qui prennent toute la ligne */
  &.full {
    grid-column: 1 / -1;
  }
`;

const Label = styled.label`
  font-weight: 700;
`;

const Required = styled.span`
  color: ${colors.lightRed};
  margin-left: 4px;
`;

const Input = styled.input`
  height: 44px;
  padding: 10px 12px;
  border: 1px solid #ddd;
  background: #fff;
  outline: none;
  border-radius: 6px;
  font-size: 12px;
  font-family: 'helvetica';

  &:focus {
    border-color: #bbb;
  }
`;

const Textarea = styled.textarea`
  min-height: 180px;
  padding: 12px;
  border: 1px solid #ddd;
  background: #fff;
  outline: none;
  border-radius: 6px;
  font-size: 12px;
  resize: vertical;
  font-family: 'helvetica';

  &:focus {
    border-color: #bbb;
  }
`;

const Submit = styled.button`
  grid-column: 1 / -1;
  margin-top: 8px;
  height: 46px;
  padding: 0 18px;
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  background: #f3f3f3;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    filter: brightness(0.98);
  }
`;

const ImgSide = styled.div`
  width: 50vw;
  position: relative;

  @media (max-width: 900px) {
    width: 100%;
    height: 320px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 795px;
  object-fit: cover;
`;

interface ContactBlockProps {
  image: string;
  proPage?: boolean;
}

export default function ContactBlock({ image, proPage }: ContactBlockProps) {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch('/api/contact', { method: 'POST', body: data });
      const json = await res.json().catch(() => ({}));

      if (!res.ok || json.ok === false) throw new Error('send-failed');

      toast.success('Votre message a bien été envoyé 🌷');
    } catch (err) {
      console.log(err);
      toast.error("L'envoi a échoué 🥀 Réessayez dans un instant");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section>
      <ImgSide>
        <Img src={image} alt="contact évènement" />
      </ImgSide>

      <FormSide>
        <Title>Nous contacter</Title>
        <Form onSubmit={handleSubmit} noValidate>
          {/* Honeypot anti-bot */}
          <input
            type="text"
            name="website_trap"
            autoComplete="off"
            tabIndex={-1}
            style={{ position: 'absolute', left: '-10000px' }}
          />

          <Field>
            <Label>
              Prénom<Required>*</Required>
            </Label>
            <Input name="firstName" required />
          </Field>

          <Field>
            <Label>
              Nom<Required>*</Required>
            </Label>
            <Input name="lastName" required />
          </Field>

          <Field className="full">
            <Label>
              E-mail<Required>*</Required>
            </Label>
            <Input name="email" type="email" required />
          </Field>

          <Field className="full">
            <Label>
              Numéro de téléphone<Required>*</Required>
            </Label>
            <Input name="phone" type="phone" required />
          </Field>

          {!proPage && (
            <Field className="full">
              <Label>Date de l’évènement</Label>
              <Input name="date" type="date" />
            </Field>
          )}

          <Field className="full">
            <Label>Dites-nous en plus</Label>
            <Textarea
              name="message"
              placeholder={
                proPage
                  ? 'Décrivez votre projet : type d’évènement, lieu, format, ambiance souhaitée, volume floral, contraintes techniques ou logistiques… Tout ce qui nous aidera à imaginer une création à votre image.'
                  : "Décrivez votre évènement : lieu, style floral souhaité, couleurs préférées, nombre d'invités… Tout ce qui nous aidera à imaginer une décoration à votre image."
              }
            />
          </Field>

          <Submit type="submit" disabled={submitting}>
            {submitting ? 'Envoi…' : 'Envoyer'}
          </Submit>
        </Form>
      </FormSide>
    </Section>
  );
}
