'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaDribbble, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from 'emailjs-com';
import ClipLoader from 'react-spinners/ClipLoader';
import Section from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { link } from 'fs';
import DecorationBlinkingBox from '@/components/ui/decorationBoxBlinking';

/* ========== ZOD SCHEMA ========== */
const contactSchema = z.object({
  name: z.string().min(2, 'Masukkan nama yang valid (min 2 karakter)'),
  email: z.string().email('Email tidak valid'),
  message: z.string().min(5, 'Tuliskan pesan minimal 5 karakter'),
});

type ContactFormData = z.infer<typeof contactSchema>;

/* ========== COMPONENT ========== */
export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(
    null
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (values: ContactFormData) => {
    setLoading(true);
    setStatus(null);

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error('Email service belum dikonfigurasi. Cek env vars.');
      }

      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
      };

      // emailjs.send(serviceID, templateID, templateParams, publicKey)
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setStatus({ ok: true, message: 'Pesan terkirim! Terima kasih.' });
      reset();
    } catch (err: any) {
      console.error('Email send error:', err);
      setStatus({
        ok: false,
        message:
          err?.message ||
          'Gagal mengirim pesan. Coba lagi nanti atau hubungi lewat email langsung.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='relative w-full border border-y-neutral-800 pb-15 md:pb-8'>
      <Section
        id='contact'
        className='bg-base-background relative py-10 md:py-20'
      >
        <div className='container flex flex-col items-start justify-between gap-12 md:flex-row'>
          {/* Left Section */}
          <div className='flex w-full flex-1 flex-col items-center md:items-start'>
            <div className='relative aspect-3/4 w-full overflow-hidden md:w-fit'>
              <div className='pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[60%] bg-linear-to-t from-black to-transparent' />
              <Image
                src='/assets/images/profil-foto.png'
                alt='Profile Me'
                width={420}
                height={640}
                className='w-full -rotate-[1.45deg] object-contain opacity-40 mix-blend-luminosity will-change-transform'
              />
              <div className='absolute bottom-0 z-50 w-full flex-col'>
                <div className='flex justify-center gap-4'>
                  <SocialIcon link='#' ariaLabel='Dribbble'>
                    <FaDribbble size={24} />
                  </SocialIcon>
                  <SocialIcon link='#' ariaLabel='Instagram'>
                    <FaInstagram size={24} />
                  </SocialIcon>
                  <SocialIcon link='#' ariaLabel='LinkedIn'>
                    <FaLinkedinIn size={24} />
                  </SocialIcon>
                </div>

                <h3 className='mt-8 text-center text-xl font-semibold text-white'>
                  Adi Or Afa
                </h3>
                <div className='mt-2 flex items-center justify-center gap-2'>
                  <span className='bg-primary-200 h-3 w-3 animate-pulse rounded-full' />
                  <p className='text-sm text-neutral-400'>Available for Work</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (form) */}
          <div className='w-full md:w-[55%]'>
            <Section.Title mainTitle='CONTACT' subTitle='LET’S GET IN TOUCH' />

            <Section.Content>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col gap-5'
              >
                {/* Name */}
                <div>
                  <Label className='md:text-md mb-2 block text-sm text-white'>
                    Name
                  </Label>
                  <Input
                    {...register('name')}
                    className='focus:border-primary-200 w-full rounded-xl border border-neutral-800 bg-transparent px-4 py-3 text-white transition outline-none'
                    placeholder='Your Name'
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className='mt-1 text-sm text-rose-500'>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label className='md:text-md mb-2 block text-sm text-white'>
                    Email
                  </Label>
                  <Input
                    {...register('email')}
                    className='focus:border-primary-200 w-full rounded-xl border border-neutral-800 bg-transparent px-4 py-3 text-white transition outline-none'
                    placeholder='Your email@domain.com'
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className='mt-1 text-sm text-rose-500'>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <Label className='md:text-md mb-2 block text-sm text-white'>
                    Message
                  </Label>
                  <Textarea
                    {...register('message')}
                    rows={5}
                    className='focus:border-primary-200 h-40 w-full resize-none rounded-xl border border-neutral-800 bg-transparent px-4 py-3 text-white transition outline-none'
                    placeholder='Your Message'
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className='mt-1 text-sm text-rose-500'>
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* STATUS BOX */}
                {status && (
                  <div
                    role='status'
                    className={`rounded-md px-4 py-2 text-sm ${status.ok ? 'bg-emerald-800 text-emerald-200' : 'bg-rose-900 text-rose-200'}`}
                  >
                    {status.message}
                  </div>
                )}

                {/* Button */}
                <div className='relative'>
                  <Button type='submit' disabled={loading} className='w-full'>
                    {!loading ? 'Send Message' : 'Sending...'}
                  </Button>

                  {/* loader inline */}
                  {loading && (
                    <div className='absolute top-1/2 right-6 -translate-y-1/2'>
                      <ClipLoader size={18} color='#000' />
                    </div>
                  )}
                </div>
              </form>
            </Section.Content>
          </div>
        </div>
      </Section>

      {/* Decoration squares atas kiri */}
      <DecorationBlinkingBox
        orientation='horizontal'
        colorClass='bg-primary-300'
        className='top-0 left-0 z-70 origin-center rotate-180 md:top-0'
        classNameBoxChild='size-10 md:size-14'
      />

      <DecorationBlinkingBox
        orientation='horizontal'
        colorClass='bg-primary-300'
        className='right-0 bottom-0 z-20 md:absolute md:bottom-0'
        classNameBoxChild='size-10 md:size-14'
      />
    </section>
  );
}

/* ===== social Icon component ===== */
function SocialIcon({
  children,
  link,
  ariaLabel,
}: {
  children: React.ReactNode;
  link: string;
  ariaLabel?: string;
}) {
  return (
    <Link
      href={link}
      target='_blank'
      aria-label={ariaLabel}
      className='hover:text-primary-200 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 text-white transition'
      rel='noopener noreferrer'
    >
      {children}
    </Link>
  );
}
