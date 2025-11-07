'use client';

import styled from 'styled-components';
import {
  frames,
  margins,
  colors,
  mobileThresholdPixels,
} from './styledComponents';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { media } from '../media';

const Section = styled.section<{ proPage?: boolean }>`
  display: flex;
  align-items: stretch;
  gap: 0;
  min-height: 460px;
  padding: 0 0 ${margins.desktop};

  ${media.tablet(`
    padding: 0 0 ${margins.mobile};
  `)}

  @media (max-width: ${mobileThresholdPixels}) {
    flex-direction: ${(props) => (props.proPage ? 'column-reverse' : 'column')};
    padding: 0 ${frames.mobile} ${margins.mobile};
    min-height: auto;
  }
`;

const FormSide = styled.div<{ proPage?: boolean }>`
  width: 50vw;
  padding: 48px 80px;
  background: ${colors.beige100};

  ${media.mobile(`
    width: 100%;
    padding: 20px ${frames.mobile} 0;
    order: 1;
s  `)}

  @media (max-width: ${mobileThresholdPixels}) {
    width: 100%;
    padding: ${(props) => (props.proPage ? '0' : '20px')} ${frames.mobile} 0;
    order: 1;
  }
`;

const Title = styled.h2`
  margin: 0 0 24px;
  font-size: 28px;
  text-transform: uppercase;

  ${media.mobile(`
    font-size: 24px;
    text-align: center;
  `)}
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 16px;

  ${media.mobile(`
    grid-template-columns: 1fr;
    gap: 12px;
  `)}
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  &.full {
    grid-column: 1 / -1;
  }

  ${media.mobile(`
    gap: 6px;
  `)}
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

  ${media.mobile(`
    font-size: 14px;
  `)}
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

  ${media.mobile(`
    font-size: 14px;
    min-height: 140px;
  `)}
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
  font-size: 16px;

  &:hover {
    filter: brightness(0.98);
  }

  ${media.mobile(`
    width: 100%;
  `)}
`;

const ImgSide = styled.div<{ proPage?: boolean }>`
  width: 50vw;
  position: relative;

  @media (max-width: ${mobileThresholdPixels}) {
    width: 100%;
    padding-top: ${(props) => (props.proPage ? '24px' : '0')};
  }
`;

const Img = styled.img`
  width: 100%;
  height: 795px;
  object-fit: cover;

  ${media.mobile(`
    height: 250px;
    object-position: center;
    border-radius: 4px;
  `)}
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
    <Section proPage={proPage}>
      <ImgSide proPage={proPage}>
        <Img src={image} alt="contact évènement" />
      </ImgSide>

      <FormSide proPage={proPage}>
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
